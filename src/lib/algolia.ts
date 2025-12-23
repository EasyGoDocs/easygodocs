import { algoliasearch } from 'algoliasearch';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

export const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'easygodocs';
export { searchClient };
