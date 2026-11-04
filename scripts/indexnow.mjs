// Tells IndexNow search engines (Bing, Yandex, Seznam and others) about the site's pages.
// Run after a deploy: node scripts/indexnow.mjs
// DRY_RUN=1 lists the URLs without sending them.
import { readdirSync, readFileSync } from 'node:fs';

const HOST = 'freedomonownterms.com';

// The key is a file in public/ named <key>.txt that contains the key, which proves we own the site.
const keyFile = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('IndexNow key file not found in public/');
const key = readFileSync(`public/${keyFile}`, 'utf8').trim();

const sitemap = await (await fetch(`https://${HOST}/sitemap-0.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('No URLs found in the sitemap');

if (process.env.DRY_RUN) {
  console.log(`Would submit ${urlList.length} URLs for ${HOST}, key file ${keyFile}`);
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText}, ${urlList.length} URLs`);
if (!res.ok) process.exitCode = 1;
