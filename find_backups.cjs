const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\HP\\.gemini\\antigravity';

function scan(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        results = results.concat(scan(fullPath));
      } else {
        if (file.toLowerCase().includes('app.jsx')) {
          results.push({ path: fullPath, size: stat.size, mtime: stat.mtime });
        }
      }
    }
  } catch (e) {}
  return results;
}

console.log("Scanning antigravity data directory...");
const found = scan(rootDir);
console.log(`Found ${found.length} matching files:`);
found.forEach(f => {
  console.log(`- ${f.path} (Size: ${f.size} bytes, Modified: ${f.mtime})`);
});
