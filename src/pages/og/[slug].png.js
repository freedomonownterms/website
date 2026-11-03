// Link-preview images: /og/default.png, /og/<guide-slug>.png and /og/<product-slug>.png
import { getGuides } from '../../lib/guides.js';
import { products } from '../../data/products.js';
import { library } from '../../data/prompts.js';
import { renderOg } from '../../lib/og.js';

export function getStaticPaths() {
  return [
    { params: { slug: 'default' }, props: { title: 'AI news, tools & know-how, on your own terms', kicker: 'AI news · Tools · Guides', footer: 'Updated daily' } },
    {
      params: { slug: 'prompts' },
      props: {
        title: `AI Prompt Library: ${library.reduce((n, s) => n + s.prompts.length, 0)} free prompts for ChatGPT, Gemini & Claude`,
        kicker: 'Free tool',
        footer: 'Search · Fill in · Copy',
      },
    },
    {
      params: { slug: 'weather' },
      props: { title: 'AI Weather Planner: your forecast, plus AI that plans your day around it', kicker: 'Free tool', footer: 'Any city · 7 days' },
    },
    ...getGuides().map((g) => ({ params: { slug: g.slug }, props: { title: g.title, kicker: g.category, footer: g.readTime } })),
    ...products.map((p) => ({
      params: { slug: p.slug },
      props: { title: `${p.name}: ${p.tagline}`, kicker: p.downloadUrl ? 'Free download' : 'Shop', footer: p.format },
    })),
  ];
}

export async function GET({ props }) {
  return new Response(await renderOg(props), { headers: { 'Content-Type': 'image/png' } });
}
