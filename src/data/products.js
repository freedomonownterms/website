// Digital products on the site.
// Free product: set `downloadUrl` to a file in public/downloads/.
// Paid product: leave `downloadUrl` empty and paste the payment link (Razorpay Payment Page, Gumroad, etc.) into `buyUrl`.
// With neither set, the page shows "Launching soon" with an email "Notify me" button.
// This repository is public: never put a paid product's file in public/. Sources live in the git-ignored /private.
export const products = [
  {
    slug: 'ai-career-kit',
    name: 'AI Career Kit',
    tagline: '75 ChatGPT prompts for students & job seekers',
    description:
      'Copy-and-paste AI prompts for resumes, cover letters, LinkedIn, interviews, salary talks and exam prep. Written for students and job seekers in India.',
    price: 0,
    downloadUrl: '/downloads/AI-Career-Kit.pdf',
    buyUrl: '',
    cover: '/shop/ai-career-kit-cover.webp',
    format: 'PDF · 20 pages · instant download',
    contents: [
      ['Resumes that get shortlisted', 15],
      ['Cover letters & applications', 8],
      ['LinkedIn & Naukri profiles', 7],
      ['Job search strategy', 7],
      ['Interview preparation', 15],
      ['Salary, offers & your first job', 5],
      ['Studying & exams', 13],
      ['Skills & career planning', 5],
    ],
    extras: ['Bonus: 10 follow-up prompts that improve any answer', 'Five rules for great results with AI', 'Works with ChatGPT, Gemini, Claude and Copilot, including free versions'],
    samples: [
      ['Tailor your resume to a job', 'Here is a job description and my resume. List the top 10 skills and keywords the employer wants, show which ones my resume is missing, and rewrite my Summary and Skills sections to match, using only things that are true about me. Job description: [paste] Resume: [paste]'],
      ['"Tell me about yourself"', 'Write a 60–90 second answer to "Tell me about yourself" for a [job title] interview, using a present–past–future structure. My background: [paste]. Then give me a shorter 30-second version.'],
      ['Full mock interview', 'Act as an interviewer for a [job title] role at a [type of company]. Ask me one question at a time, mixing HR, technical and situational questions. After each answer, rate it out of 10 and tell me how to improve it. Stop after 10 questions and give overall feedback.'],
      ['Spot a fake job', 'Here is a job offer or message I received. Check it for signs of a scam, such as asking for fees, unrealistic pay, requests for personal documents, unofficial email addresses or pressure to decide fast. Tell me what to verify before replying: [paste the message]'],
      ['Quiz me', 'Quiz me on [chapter or topic] with 10 questions, mixing multiple-choice and short answers. Wait for my answers, then mark them and explain any mistakes.'],
    ],
  },
];
