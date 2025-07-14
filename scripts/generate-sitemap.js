#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const generateSitemap = () => {
  const baseUrl = 'https://circassimilate.com';
  const lastmod = new Date().toISOString().split('T')[0];
  
  const pages = [
    {
      url: '',
      lastmod,
      changefreq: 'monthly',
      priority: '1.0'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = join(__dirname, '../public/sitemap.xml');
  writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully');
};

generateSitemap();