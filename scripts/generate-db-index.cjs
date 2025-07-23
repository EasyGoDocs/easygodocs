// scripts/generate-db-index.js
// This script scans src/db/ for all .json files (excluding export-json),
// and generates src/db/export-json/db-index.ts with static imports and an export array.
// Run this script before build to automate doc imports for serverless environments.

/* eslint-disable */

const fs = require('fs');
const path = require('path');

const dbDir = path.join(__dirname, '../src/db');
const exportDir = path.join(dbDir, 'export-json');
const outFile = path.join(exportDir, 'db-index.ts');

// Get all .json files in src/db/ (excluding export-json subdir)
const files = fs.readdirSync(dbDir)
  .filter(f => f.endsWith('.json'));

let imports = '';
let arr = 'export const dbFiles = [\n';

files.forEach((file, i) => {
  const varName = 'doc' + i;
  imports += `import ${varName} from "../${file}";\n`;
  arr += `  ${varName},\n`;
});
arr += '];\n';

const banner = `// AUTO-GENERATED FILE. DO NOT EDIT.\n// Run scripts/generate-db-index.js to update.\n\n`;

fs.writeFileSync(outFile, banner + imports + '\n' + arr);
console.log(`Generated db-index.ts with ${files.length} docs.`); 