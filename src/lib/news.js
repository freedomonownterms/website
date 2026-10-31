import Parser from 'rss-parser';

// AI news sources pulled at build time. Add or remove feeds here.
export const FEEDS = [
  { name: 'TechCrunch', url: 'https://techcrunch.com/category/artificial-intelligence/feed/' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml' },
  { name: 'VentureBeat', url: 'https://venturebeat.com/category/ai/feed/' },
  { name: 'MIT Technology Review', url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed' },
  { name: 'Ars Technica', url: 'https://arstechnica.com/ai/feed/' },
  { name: 'Google AI Blog', url: 'https://blog.google/technology/ai/rss/' },
  { name: 'OpenAI', url: 'https://openai.com/news/rss.xml' },
  { name: 'Hugging Face', url: 'https://huggingface.co/blog/feed.xml' },
];

// First matching topic wins, so more specific topics come first.
const TOPICS = [
  ['Policy', ['regulat', 'law', 'policy', 'government', 'senate', 'congress', 'ai act', 'lawsuit', 'copyright', 'court', 'ban ', 'election']],
  ['Business', ['funding', 'raises', 'acquisition', 'acquire', 'startup', 'valuation', 'revenue', 'investment', 'investor', 'ipo', 'deal', 'layoff']],
  ['Research', ['research', 'paper', 'study', 'scientist', 'benchmark', 'breakthrough', 'dataset', 'open-source', 'open source']],
  ['Models', ['gpt', 'claude', 'gemini', 'llama', 'mistral', 'model', 'llm', 'reasoning']],
  ['Products', ['launch', 'app', 'feature', 'release', 'update', 'agent', 'tool', 'chatbot', 'assistant']],
];

export const TOPIC_NAMES = [...TOPICS.map(([t]) => t), 'General'];

function stripHtml(s = '') {
  return s.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s;
}

function detectTopic(text) {
  const t = text.toLowerCase();
  for (const [topic, words] of TOPICS) {
    if (words.some((w) => t.includes(w))) return topic;
  }
  return 'General';
}

async function fetchAll() {
  const parser = new Parser({
    timeout: 15000,
    headers: { 'User-Agent': 'FreedomOnOwnTermsBot/1.0 (+https://freedomonownterms.com)' },
  });

  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const data = await parser.parseURL(feed.url);
      return data.items.slice(0, 20).map((i) => {
        const title = stripHtml(i.title);
        const summary = truncate(stripHtml(i.contentSnippet || i.summary || i.content || ''), 180);
        return {
          title,
          link: i.link,
          date: i.isoDate || i.pubDate || null,
          source: feed.name,
          summary,
          topic: detectTopic(`${title} ${summary}`),
        };
      });
    }),
  );

  const items = [];
  results.forEach((r, idx) => {
    if (r.status === 'fulfilled') items.push(...r.value);
    else console.warn(`[news] Could not load ${FEEDS[idx].name}: ${r.reason?.message ?? r.reason}`);
  });

  const seen = new Set();
  return items
    .filter((i) => {
      const key = i.title.toLowerCase();
      if (!i.link || !i.title || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

// Fetch once per build and share across pages.
let cache;
export function getNews() {
  cache ??= fetchAll();
  return cache;
}
