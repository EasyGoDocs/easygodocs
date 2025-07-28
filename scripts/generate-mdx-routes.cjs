// scripts/generate-mdx-routes.cjs
// This script generates static routes for all MDX files at build time

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../src/docs');
const outputDir = path.join(__dirname, '../src/app/(main)/mdx');
const outputFile = path.join(outputDir, 'mdx-files.json');

// Get all .mdx files in src/docs/
const files = fs.readdirSync(docsDir)
  .filter(f => f.endsWith('.mdx'))
  .map(f => f.replace('.mdx', ''));

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate the JSON file with all MDX file names
const mdxFiles = {
  files: files,
  generatedAt: new Date().toISOString()
};

fs.writeFileSync(outputFile, JSON.stringify(mdxFiles, null, 2));
console.log(`Generated mdx-files.json with ${files.length} MDX files:`, files); 