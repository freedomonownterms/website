// Link-preview images: /og/default.png, /og/<guide-slug>.png and /og/<product-slug>.png
import { getGuides } from '../../lib/guides.js';
import { products } from '../../data/products.js';
import { renderOg } from '../../lib/og.js';

export function getStaticPaths() {
  return [
    { params: { slug: 'default' }, props: { title: 'AI news, tools & know-how, on your own terms', kicker: 'AI news · Tools · Guides', footer: 'Updated daily' } },
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
