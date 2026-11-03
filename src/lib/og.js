// Renders 1200×630 link-preview cards (Open Graph images) at build time.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const root = process.cwd();
const font = (pkg, file) => readFileSync(join(root, 'node_modules', '@fontsource', pkg, 'files', file));
const fonts = [
  { name: 'Inter', data: font('inter', 'inter-latin-400-normal.woff'), weight: 400 },
  { name: 'Inter', data: font('inter', 'inter-latin-600-normal.woff'), weight: 600 },
  { name: 'Space Grotesk', data: font('space-grotesk', 'space-grotesk-latin-700-normal.woff'), weight: 700 },
];
const logo = `data:image/svg+xml;base64,${readFileSync(join(root, 'public', 'logo.svg')).toString('base64')}`;

// Tiny element helper so we don't need JSX.
const h = (type, style, ...children) => ({ type, props: { style, children: children.length === 1 ? children[0] : children } });

export async function renderOg({ title, kicker = '', footer = '' }) {
  const size = title.length > 70 ? 54 : title.length > 45 ? 62 : 72;
  const tree = h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      backgroundColor: '#0a0b10',
      backgroundImage:
        'radial-gradient(circle at 88% 8%, rgba(34,211,238,0.28), transparent 45%), radial-gradient(circle at 8% 100%, rgba(167,139,250,0.28), transparent 45%)',
      color: '#e8eaf2',
      fontFamily: 'Inter',
    },
    h(
      'div',
      { display: 'flex', alignItems: 'center', gap: 18 },
      { type: 'img', props: { src: logo, width: 64, height: 64 } },
      h('div', { display: 'flex', fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 700 }, 'Freedom ', h('span', { color: '#22d3ee' }, 'On Own Terms')),
    ),
    h(
      'div',
      { display: 'flex', flexDirection: 'column', gap: 20 },
      kicker
        ? h('div', { display: 'flex', color: '#22d3ee', fontSize: 24, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }, kicker)
        : h('div', { display: 'flex' }, ''),
      h('div', { display: 'flex', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: size, lineHeight: 1.1, color: '#ffffff' }, title),
    ),
    h(
      'div',
      { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24, color: '#9aa1b8', borderTop: '1px solid #252939', paddingTop: 24 },
      h('div', { display: 'flex' }, 'freedomonownterms.com'),
      h('div', { display: 'flex' }, footer),
    ),
  );

  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
