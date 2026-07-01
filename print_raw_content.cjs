const fs = require('fs');
const prevLogPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\e6316ea5-9f10-4d4f-ac94-bce8943ef54a\\.system_generated\\logs\\transcript.jsonl';

const logs = fs.readFileSync(prevLogPath, 'utf8').split('\n');

for (const line of logs) {
  if (!line.trim()) continue;
  try {
    const parsed = JSON.parse(line);
    if (parsed.step_index === 53 && parsed.tool_calls) {
      for (const tc of parsed.tool_calls) {
        if (tc.name === 'write_to_file' && tc.args.TargetFile && tc.args.TargetFile.includes('App.jsx')) {
          const content = tc.args.CodeContent;
          console.log("Type:", typeof content);
          console.log("Starts with quote:", content.startsWith('"'));
          console.log("Ends with quote:", content.endsWith('"'));
          console.log("Length:", content.length);
          console.log("First 100 chars (raw JSON representation):");
          console.log(JSON.stringify(content.substring(0, 100)));
          console.log("First 100 chars (raw printed):");
          console.log(content.substring(0, 100));
        }
      }
    }
  } catch (e) {}
}
