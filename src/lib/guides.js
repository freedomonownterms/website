// Every Markdown file in src/guides becomes a guide at /guides/<file-name>/.
const modules = import.meta.glob('../guides/*.md', { eager: true });

export function getGuides() {
  return Object.entries(modules)
    .map(([path, mod]) => ({
      slug: path.split('/').pop().replace(/\.md$/, ''),
      ...mod.frontmatter,
      Content: mod.Content,
    }))
    .filter((g) => !g.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
