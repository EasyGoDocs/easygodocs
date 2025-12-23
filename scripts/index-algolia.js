const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { algoliasearch } = require('algoliasearch');

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'easygodocs';

async function indexDocs() {
  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_API_KEY) {
    console.error('❌ Missing Algolia environment variables');
    process.exit(1);
  }
  const docsDir = path.join(process.cwd(), 'src/docs');
  const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.mdx'));
  
  const records = files.map(file => {
    const filePath = path.join(docsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const slug = file.replace('.mdx', '');
    const title = data.title || content.match(/^#\s+(.+)/m)?.[1] || slug;
    const excerpt = content.replace(/^#.+/gm, '').trim().slice(0, 150);
    
    let category = 'General';
    if (content.includes('install')) category = 'Installation';
    else if (content.includes('docker')) category = 'DevOps';
    else if (content.includes('react')) category = 'Frontend';
    else if (content.includes('ubuntu')) category = 'System';
    
    return {
      objectID: slug,
      title,
      slug,
      excerpt,
      category,
      content: content.slice(0, 5000) // Limit content size
    };
  });

  try {
    await client.saveObjects({ indexName, objects: records });
    console.log(`✅ Indexed ${records.length} documents to Algolia`);
  } catch (error) {
    console.error('❌ Algolia indexing failed:', error);
  }
}

indexDocs();
