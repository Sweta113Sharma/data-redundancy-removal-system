const fs = require('fs');
const logPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\2ba7b6cc-5eab-4e35-9ea8-59414dac3aef\\.system_generated\\logs\\transcript.jsonl';

const logs = fs.readFileSync(logPath, 'utf8').split('\n');

for (const line of logs) {
  if (!line.trim()) continue;
  try {
    const parsed = JSON.parse(line);
    if (parsed.type === 'VIEW_FILE' && parsed.content) {
      console.log(`Step ${parsed.step_index}: VIEW_FILE, length=${parsed.content.length}, starts with: ${parsed.content.substring(0, 100).replace(/\n/g, '\\n')}`);
    }
  } catch (e) {}
}
