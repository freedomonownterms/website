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

// Up to `count` guides on the same topic, then others to fill the list.
export function getRelated(guide, count = 3) {
  const others = getGuides().filter((g) => g.slug !== guide.slug);
  return [...others.filter((g) => g.category === guide.category), ...others.filter((g) => g.category !== guide.category)].slice(0, count);
}

// The free tool that goes best with each guide.
const toolLinks = {
  'how-to-write-a-resume-with-chatgpt': ['/prompts/resumes/', 'Use the free resume prompts'],
  'tailor-resume-to-job-description-with-ai': ['/prompts/resumes/', 'Use the free resume prompts'],
  'practice-job-interview-with-ai': ['/prompts/interviews/', 'Use the free interview prompts'],
  'write-cover-letter-with-ai-that-doesnt-sound-like-ai': ['/prompts/applications/', 'Use the free cover letter prompts'],
  'is-it-ok-to-use-ai-for-job-applications': ['/prompts/applications/', 'Use the free job application prompts'],
  'how-to-use-chatgpt-to-study': ['/prompts/studying/', 'Use the free study prompts'],
  'turn-notes-into-flashcards-and-quizzes-with-ai': ['/prompts/studying/', 'Use the free study prompts'],
  'best-free-ai-tools-for-students': ['/prompts/studying/', 'Use the free study prompts'],
  'ai-for-better-emails': ['/prompts/writing/', 'Use the free writing and email prompts'],
  'how-to-summarise-pdfs-with-ai': ['/prompts/productivity/', 'Use the free document prompts'],
  'how-to-make-a-presentation-with-ai': ['/prompts/productivity/', 'Use the free presentation prompts'],
  'ways-ai-saves-time-at-work': ['/prompts/productivity/', 'Use the free productivity prompts'],
  'ai-for-small-businesses': ['/prompts/business/', 'Use the free small business prompts'],
  'beginners-guide-ai-image-generators': ['/prompts/images/', 'Use the free image prompts'],
  'best-free-ai-image-generators': ['/prompts/images/', 'Use the free image prompts'],
  'how-to-spot-ai-scams-and-deepfakes': ['/prompts/safety/', 'Use the free scam-checking prompts'],
  'how-ai-is-changing-weather-forecasting': ['/weather/', 'Try the free AI Weather Planner'],
  'chatgpt-vs-gemini-vs-claude': ['/tools/', 'Browse the AI tools directory'],
};

export function getToolLink(guide) {
  const [href, label] = toolLinks[guide.slug] ?? ['/prompts/', 'Browse the free AI Prompt Library'];
  return { href, label };
}

export function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
