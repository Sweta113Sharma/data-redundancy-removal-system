import { initDatabase, getContacts } from '../db.js';
import { 
  levenshteinDistance, 
  stringSimilarity, 
  evaluateContact,
  normalizeEmail,
  normalizePhone
} from '../dedup.js';

async function runTests() {
  console.log('--- STARTING DEDUPLICATION ENGINE VERIFICATION TESTS ---\n');

  // Test 1: Normalizations
  console.log('Test 1: Normalization Helpers');
  const emailNorm = normalizeEmail('  ALICE.johnson@Gmail.com  ');
  const phoneNorm = normalizePhone('+1 (555) 555-0142');
  console.log(`- Normalized Email: "${emailNorm}" (Expected: "alice.johnson@gmail.com")`);
  console.log(`- Normalized Phone: "${phoneNorm}" (Expected: "5555550142")`);
  if (emailNorm !== 'alice.johnson@gmail.com' || phoneNorm !== '5555550142') {
    throw new Error('Test 1 Failed: Normalization issue.');
  }
  console.log('✅ Test 1 Passed!\n');

  // Test 2: Levenshtein & Similarity
  console.log('Test 2: Levenshtein Distance & Similarity');
  const distance = levenshteinDistance('David Miller', 'Dave Miller');
  const similarity = stringSimilarity('David Miller', 'Dave Miller');
  console.log(`- Distance: ${distance} (Expected: 2)`);
  console.log(`- Similarity: ${(similarity * 100).toFixed(1)}% (Expected: ~83.3%)`);
  if (distance !== 2 || similarity < 0.80 || similarity > 0.85) {
    throw new Error('Test 2 Failed: Similarity calculation issue.');
  }
  console.log('✅ Test 2 Passed!\n');

  // Initialize DB
  await initDatabase();
  const existingContacts = await getContacts();

  // Test 3: Exact Duplicate Rejection (Email)
  console.log('Test 3: Exact Duplicate Rejection (Email)');
  const dupEmailContact = {
    first_name: 'Alice',
    last_name: 'Johnson-Smith',
    email: 'ALICE.johnson@gmail.com', // exact match with seed
    phone: '+1-555-9999',
    company: 'Google Inc.'
  };
  const eval3 = evaluateContact(dupEmailContact, existingContacts);
  console.log(`- Classification: ${eval3.classification} (Expected: DUPLICATE)`);
  console.log(`- Reason: ${eval3.reason}`);
  if (eval3.classification !== 'DUPLICATE' || !eval3.reason.includes('Email')) {
    throw new Error('Test 3 Failed: Should block exact email duplicate.');
  }
  console.log('✅ Test 3 Passed!\n');

  // Test 4: Exact Duplicate Rejection (Phone)
  console.log('Test 4: Exact Duplicate Rejection (Phone)');
  const dupPhoneContact = {
    first_name: 'A.',
    last_name: 'Johnson',
    email: 'unique.email@google.com',
    phone: '5555550142', // exact match with seed (normalized)
    company: 'Alphabet'
  };
  const eval4 = evaluateContact(dupPhoneContact, existingContacts);
  console.log(`- Classification: ${eval4.classification} (Expected: DUPLICATE)`);
  console.log(`- Reason: ${eval4.reason}`);
  if (eval4.classification !== 'DUPLICATE' || !eval4.reason.includes('Phone')) {
    throw new Error('Test 4 Failed: Should block exact phone duplicate.');
  }
  console.log('✅ Test 4 Passed!\n');

  // Test 5: Fuzzy Duplicate Quarantining (Name spelling typo)
  console.log('Test 5: Fuzzy Duplicate Detection (Spelling variation)');
  const fuzzyContact = {
    first_name: 'Bob',
    last_name: 'Smyth', // typo of "Smith"
    email: 'bob.smyth@yahoo.com',
    phone: '+1-555-9999',
    company: 'Yahoo Corp.'
  };
  const eval5 = evaluateContact(fuzzyContact, existingContacts);
  console.log(`- Classification: ${eval5.classification} (Expected: POTENTIAL_DUPLICATE)`);
  console.log(`- Similarity: ${(eval5.similarityScore * 100).toFixed(1)}%`);
  console.log(`- Reason: ${eval5.reason}`);
  if (eval5.classification !== 'POTENTIAL_DUPLICATE' || eval5.similarityScore < 0.70) {
    throw new Error('Test 5 Failed: Should quarantine fuzzy name duplicate.');
  }
  console.log('✅ Test 5 Passed!\n');

  // Test 6: Unique Contact Appending
  console.log('Test 6: Unique Record Verification');
  const uniqueContact = {
    first_name: 'Zoe',
    last_name: 'Kravitz',
    email: 'zoe.kravitz@cinema.com',
    phone: '+1-555-8822',
    company: 'Warner Bros.'
  };
  const eval6 = evaluateContact(uniqueContact, existingContacts);
  console.log(`- Classification: ${eval6.classification} (Expected: UNIQUE)`);
  console.log(`- Reason: ${eval6.reason}`);
  if (eval6.classification !== 'UNIQUE') {
    throw new Error('Test 6 Failed: Unique record was incorrectly flagged.');
  }
  console.log('✅ Test 6 Passed!\n');

  console.log('🎉 ALL DEDUPLICATION ENGINE VERIFICATION TESTS PASSED SUCCESSFULLY! 🎉');
  process.exit(0);
}

runTests().catch(err => {
  console.error('❌ Verification Tests Failed with Error:', err);
  process.exit(1);
});
