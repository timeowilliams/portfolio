import fs from 'fs';
import { URL } from 'url';

import nextMDX from '@next/mdx';
import { withContentlayer } from 'next-contentlayer';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazon.com',
      },
    ],
  },
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  keepBackground: false,
  theme: JSON.parse(
    fs.readFileSync(
      new URL('./assets/moonlight-ii.json', import.meta.url),
      'utf-8'
    )
  ),
};

// Ensure plugins array is defined
const plugins = [];

// Push the MDX plugin configuration
plugins.push(
  nextMDX({
    extension: /\.mdx?$/,
    options: {
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions], rehypeSlug],
    },
  })
);

const enhancedConfig = () =>
  plugins.reduce((_, plugin) => plugin(_), withContentlayer(nextConfig));

export default enhancedConfig;
