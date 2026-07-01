const fs = require('fs');
const prevLogPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\e6316ea5-9f10-4d4f-ac94-bce8943ef54a\\.system_generated\\logs\\transcript.jsonl';

if (fs.existsSync(prevLogPath)) {
  const logs = fs.readFileSync(prevLogPath, 'utf8').split('\n');
  for (const line of logs) {
    if (!line.trim()) continue;
    try {
      const parsed = JSON.parse(line);
      if (parsed.tool_calls) {
        for (const tc of parsed.tool_calls) {
          const file = tc.args.TargetFile || tc.args.AbsolutePath;
          if (file && file.includes('App.jsx')) {
            console.log(`Step ${parsed.step_index}: ${tc.name} (Lines: ${tc.args.StartLine}-${tc.args.EndLine})`);
          }
        }
      }
    } catch (e) {}
  }
} else {
  console.log("No previous log file.");
}
