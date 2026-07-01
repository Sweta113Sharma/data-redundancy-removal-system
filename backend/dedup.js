/**
 * Helper to normalize email strings.
 * Trims whitespace and converts to lowercase.
 */
export function normalizeEmail(email) {
  if (!email || typeof email !== 'string') return '';
  return email.trim().toLowerCase();
}

/**
 * Helper to normalize phone numbers.
 * Removes all non-numeric characters.
 */
export function normalizePhone(phone) {
  if (!phone) return '';
  // Convert to string if it's a number, strip non-digits
  const digits = String(phone).replace(/\D/g, '');
  // If it's a standard US number with country code 1 (11 digits), normalize to 10 digits for better matching
  if (digits.length === 11 && digits.startsWith('1')) {
    return digits.substring(1);
  }
  return digits;
}

/**
 * Helper to normalize name strings.
 * Removes extra whitespace and converts to lowercase for comparison.
 */
export function normalizeName(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Computes the Levenshtein Distance between two strings.
 * Measures the minimum number of single-character edits required to change one string into another.
 */
export function levenshteinDistance(s1, s2) {
  const str1 = normalizeName(s1);
  const str2 = normalizeName(s2);

  if (str1 === str2) return 0;
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  const matrix = [];

  // Initialize matrix
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}

/**
 * Computes a similarity score between 0 and 1 based on Levenshtein Distance.
 * 1.0 represents a perfect match, 0.0 represents no similarity.
 */
export function stringSimilarity(s1, s2) {
  const str1 = normalizeName(s1);
  const str2 = normalizeName(s2);
  
  if (!str1 && !str2) return 1.0;
  if (!str1 || !str2) return 0.0;
  
  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  
  return 1.0 - distance / maxLength;
}

/**
 * Evaluates an incoming contact against existing database records.
 * Returns:
 * {
 *   classification: 'UNIQUE' | 'DUPLICATE' | 'POTENTIAL_DUPLICATE',
 *   matchedRecord: Object | null,
 *   similarityScore: number (0 to 1),
 *   reason: string
 * }
 */
export function evaluateContact(newContact, existingContacts) {
  const newEmail = normalizeEmail(newContact.email);
  const newPhone = normalizePhone(newContact.phone);
  const newFirst = normalizeName(newContact.first_name);
  const newLast = normalizeName(newContact.last_name);
  const newFullName = `${newFirst} ${newLast}`.trim();
  const newCompany = normalizeName(newContact.company);

  // 1. EXACT DUPLICATE CHECKS (Email & Phone)
  // Email and Phone are strong identifiers. If they match exactly, it's a duplicate.
  for (const existing of existingContacts) {
    const existingEmail = normalizeEmail(existing.email);
    const existingPhone = normalizePhone(existing.phone);

    if (newEmail && existingEmail && newEmail === existingEmail) {
      return {
        classification: 'DUPLICATE',
        matchedRecord: existing,
        similarityScore: 1.0,
        reason: `Exact Email Match: "${newContact.email}" already exists (Record #${existing.id}).`
      };
    }

    if (newPhone && existingPhone && newPhone === existingPhone) {
      return {
        classification: 'DUPLICATE',
        matchedRecord: existing,
        similarityScore: 1.0,
        reason: `Exact Phone Match: "${newContact.phone}" already exists (Record #${existing.id}).`
      };
    }
  }

  // 2. FUZZY MATCH CHECKS
  let bestMatch = null;
  let maxScore = 0;
  let matchReason = '';

  for (const existing of existingContacts) {
    const existingFirst = normalizeName(existing.first_name);
    const existingLast = normalizeName(existing.last_name);
    const existingFullName = `${existingFirst} ${existingLast}`.trim();
    const existingCompany = normalizeName(existing.company);
    const existingEmail = normalizeEmail(existing.email);

    // Calculate individual field similarities
    const nameScore = stringSimilarity(newFullName, existingFullName);
    
    let companyScore = 1.0;
    if (newCompany || existingCompany) {
      companyScore = stringSimilarity(newCompany, existingCompany);
    }

    let emailScore = 0;
    if (newEmail && existingEmail) {
      emailScore = stringSimilarity(newEmail, existingEmail);
    }

    // Weight criteria: 
    // Name is critical (60%), Company is supportive (20%), Email similarity (20%)
    let compositeScore = 0;
    if (newEmail && existingEmail) {
      compositeScore = nameScore * 0.6 + companyScore * 0.2 + emailScore * 0.2;
    } else {
      // If email isn't provided, weight Name higher
      compositeScore = nameScore * 0.8 + companyScore * 0.2;
    }

    if (compositeScore > maxScore) {
      maxScore = compositeScore;
      bestMatch = existing;
      
      // Determine detail reason
      if (nameScore === 1.0) {
        matchReason = `Identical Name "${existingFullName}" but with different contact details.`;
      } else if (nameScore > 0.8) {
        matchReason = `Name similarity is ${(nameScore * 100).toFixed(0)}% ("${newFullName}" vs "${existingFullName}").`;
      } else if (emailScore > 0.85) {
        matchReason = `Email domain/format is highly similar (${(emailScore * 100).toFixed(0)}% match).`;
      } else {
        matchReason = `Composite match score is ${(compositeScore * 100).toFixed(0)}%.`;
      }
    }
  }

  // Thresholds for classification:
  // - Score >= 0.85: Strong potential duplicate.
  // - Score >= 0.60: Moderate match, requires review to avoid false positive.
  // - Score < 0.60: Unique record.
  if (maxScore >= 0.82) {
    return {
      classification: 'POTENTIAL_DUPLICATE',
      matchedRecord: bestMatch,
      similarityScore: parseFloat(maxScore.toFixed(3)),
      reason: `${matchReason} High probability of redundancy.`
    };
  } else if (maxScore >= 0.60) {
    return {
      classification: 'POTENTIAL_DUPLICATE',
      matchedRecord: bestMatch,
      similarityScore: parseFloat(maxScore.toFixed(3)),
      reason: `${matchReason} Moderate similarity. Flagged for review to avoid false positive.`
    };
  }

  return {
    classification: 'UNIQUE',
    matchedRecord: null,
    similarityScore: parseFloat(maxScore.toFixed(3)),
    reason: 'Verified as unique. No matching record or similarity found.'
  };
}
