import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  site: 'https://hosnaqasmei.com',
  integrations: [sitemap(), tailwind(), react()],
  output: 'server',
  adapter: vercel()
});