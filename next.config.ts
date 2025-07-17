// next.config.ts
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

// Enable MDX support
const withMDX = createMDX({
  extension: /\.(mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Next.js config with all your settings preserved
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // Enable MDX routing
  experimental: {
    // Required to use MDX with the App Router
    mdxRs: true,
  },
};

// Export wrapped config
export default withMDX(nextConfig);
