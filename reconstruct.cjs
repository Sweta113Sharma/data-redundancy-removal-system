const fs = require('fs');

const logPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\2ba7b6cc-5eab-4e35-9ea8-59414dac3aef\\.system_generated\\logs\\transcript.jsonl';
const appJsxPath = 'c:\\Users\\HP\\Documents\\ca 2\\frontend\\src\\App.jsx';

const logs = fs.readFileSync(logPath, 'utf8').split('\n');

let linesMap = {};

console.log("Replaying file views...");

for (const line of logs) {
  if (!line.trim()) continue;
  try {
    const parsed = JSON.parse(line);
    
    // Process view_file
    if (parsed.type === 'VIEW_FILE' && parsed.status === 'DONE' && parsed.content && parsed.tool_calls) {
      const tc = parsed.tool_calls[0];
      if (tc && tc.args.AbsolutePath && tc.args.AbsolutePath.includes('App.jsx')) {
        const start = tc.args.StartLine || 1;
        const fileContent = parsed.content;
        const fileLines = fileContent.split('\n');
        
        for (let i = 0; i < fileLines.length; i++) {
          linesMap[start - 1 + i] = fileLines[i];
        }
      }
    }
  } catch (e) {}
}

// Convert linesMap to array
let maxIndex = Math.max(...Object.keys(linesMap).map(Number));
let fileLines = [];
for (let i = 0; i <= maxIndex; i++) {
  fileLines[i] = linesMap[i] || '';
}

console.log(`Original file length: ${fileLines.length} lines.`);

console.log("Applying edit steps...");

for (const line of logs) {
  if (!line.trim()) continue;
  try {
    const parsed = JSON.parse(line);
    
    if (parsed.step_index > 207) continue; // Only apply up to step 207
    
    if (parsed.tool_calls) {
      for (const tc of parsed.tool_calls) {
        if (tc.name === 'replace_file_content' && tc.args.TargetFile && tc.args.TargetFile.includes('App.jsx')) {
          const start = tc.args.StartLine;
          const end = tc.args.EndLine;
          let replacement = tc.args.ReplacementContent;
          
          if (replacement.startsWith('"') && replacement.endsWith('"')) {
            const safeString = replacement
              .replace(/\r?\n/g, '\\n')
              .replace(/\r/g, '\\r')
              .replace(/\t/g, '\\t');
            replacement = JSON.parse(safeString);
          }
          
          const repLines = replacement.split('\n');
          console.log(`Step ${parsed.step_index}: Replacing lines ${start}-${end} with ${repLines.length} lines`);
          fileLines.splice(start - 1, end - start + 1, ...repLines);
        }
      }
    }
  } catch (e) {
    console.error("Error at line:", e);
  }
}

console.log(`Final file length: ${fileLines.length} lines.`);

fs.writeFileSync(appJsxPath, fileLines.join('\n'), 'utf8');
console.log("App.jsx reconstructed successfully!");
