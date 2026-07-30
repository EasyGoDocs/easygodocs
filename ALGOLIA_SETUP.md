# Algolia Search Integration

## Setup

1. **Install dependencies:**
```bash
npm install algoliasearch
```

2. **Create Algolia account and get credentials:**
   - Sign up at [algolia.com](https://www.algolia.com)
   - Create a new application
   - Get your App ID, Search API Key, and Admin API Key

3. **Configure environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_search_api_key
ALGOLIA_ADMIN_API_KEY=your_admin_api_key
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=easygodocs
```

4. **Index your documentation:**
```bash
npm run index-algolia
```

## Features

- **Instant Search**: Real-time search as you type
- **Typo Tolerance**: Finds results even with typos
- **Faceted Search**: Filter by categories
- **Highlighting**: Search terms highlighted in results
- **Analytics**: Search analytics in Algolia dashboard

## Usage

The search component automatically uses Algolia when environment variables are configured. It falls back to basic search if Algolia is not configured.

## Re-indexing

Run the indexing script whenever you add new documentation:
```bash
npm run index-algolia
```

Consider setting up automatic re-indexing in your CI/CD pipeline.
