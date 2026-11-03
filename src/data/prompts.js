// Prompt library: shared by the Prompt Library pages (/prompts/) and the AI Career Kit PDF
// (private/ai-career-kit/build.mjs). The first 8 sections are the kit's 75 prompts.
// [Square brackets] mark the parts a reader fills in; "[?]" is left for the AI on purpose.

export const sections = [
  {
    id: 'resumes',
    title: 'Resumes that get shortlisted',
    intro: 'Build, tailor and polish a one-page resume that gets past screening software and catches a recruiter\'s eye.',
    prompts: [
      ['Build a resume from scratch', 'Act as an experienced recruiter in [country]. Help me build a one-page resume for a [job title] role. Ask me questions one at a time about my education, projects, internships, skills and achievements. When you have enough, write the resume in clear sections: Summary, Education, Skills, Projects, Experience, Achievements.'],
      ['Upgrade weak bullet points', 'Rewrite these resume bullet points so each one starts with a strong action verb and shows a result. Where a number would help, mark the spot with [?] so I can add a real figure. Bullets: [paste your bullets]'],
      ['Tailor your resume to a job', 'Here is a job description and my resume. List the top 10 skills and keywords the employer wants, show which ones my resume is missing, and rewrite my Summary and Skills sections to match, using only things that are true about me. Job description: [paste] Resume: [paste]'],
      ['Pass the ATS screen', 'Review my resume for applicant tracking systems (ATS). Point out formatting problems (tables, columns, icons, text in headers), non-standard section names, and keywords I should add for a [job title] role. Resume: [paste]'],
      ['Write a sharp summary', 'Write 3 different 2–3 line professional summaries for my resume for a [job title] role. My background: [degree, college, year, key skills, best project or internship]. Make one formal, one confident and one simple.'],
      ['No experience yet', 'I\'m a student or recent graduate with no work experience. Help me turn my college projects, coursework, clubs, volunteering and certifications into strong resume content for a [job title] role. Here\'s what I\'ve done: [list everything, even small things]'],
      ['Showcase a project', 'Turn this project into 3 resume bullet points that show the problem, what I built, the tools I used and the result: [describe your project]'],
      ['Organise your skills', 'Organise these skills into a resume Skills section with categories (for example Technical, Tools, Languages, Soft skills) for a [job title] role. Remove anything weak or irrelevant and tell me why: [list your skills]'],
      ['Explain a career gap', 'I have a career gap of [duration] because [reason]. Write one honest, positive line I can add to my resume, and a 2–3 sentence answer I can give if an interviewer asks about it.'],
      ['Switch careers', 'I\'m moving from [current field] to [target field]. Identify my transferable skills from the experience below, then rewrite my resume summary and top 5 bullet points to fit the new field: [paste your experience]'],
      ['Find hidden achievements', 'Ask me 10 questions that will help me uncover achievements I\'ve forgotten to put on my resume, from college, internships, part-time work, family business or volunteering. Ask them one at a time.'],
      ['Proofread like an editor', 'Proofread my resume for grammar, spelling, mixed tenses, inconsistent dates and formatting. List each issue with its fix. Don\'t rewrite anything else. Resume: [paste]'],
      ['Cut it to one page', 'My resume is too long. Cut it to one page for a [job title] role. Tell me what you removed and why. Resume: [paste]'],
      ['The 6-second recruiter test', 'Act as a busy recruiter who spends 6 seconds on each resume. What do you notice first, what is unclear, and would you shortlist me for [job title]? Be honest. Resume: [paste]'],
      ['Score your resume', 'Score my resume out of 10 for a [job title] role at a [startup / large company / government organisation] in [country], then list the 5 changes that would raise the score the most. Resume: [paste]'],
    ],
  },
  {
    id: 'applications',
    title: 'Cover letters & applications',
    intro: 'Short, specific messages that get replies, from cover letters to referral requests.',
    prompts: [
      ['Cover letter that stands out', 'Write a cover letter for the [job title] role at [company], under 250 words. Use my resume and the job description below. Open with why I\'m interested in this specific company, connect 2–3 of my strengths to their needs, and end with a clear next step. Avoid clichés. Resume: [paste] Job description: [paste]'],
      ['Short application email', 'Write a short, polite email applying for [job title] at [company] with my resume attached. Include a clear subject line. Keep it under 120 words.'],
      ['Cold email to a hiring manager', 'Write a short cold email to [name, role] at [company] asking about [type of role] opportunities. Mention [one specific thing about the company] and one relevant achievement of mine: [achievement]. Under 120 words and not pushy.'],
      ['Ask for a referral', 'Write a LinkedIn message asking [name], a [role] at [company] who [studied at my college / I met at an event], for a referral for job ID [ID]. Make it easy for them to say yes and include a 2-line summary of why I fit.'],
      ['Follow up on an application', 'Write a polite follow-up email about my application for [job title] at [company], sent on [date]. Keep it brief and add one new reason I\'m a good fit: [reason].'],
      ['Internship application', 'Write an application for a [type] internship at [company or organisation]. I\'m a [year] student of [course] at [college]. Highlight my eagerness to learn, relevant coursework [list] and projects [list].'],
      ['"Why this company?"', 'Help me answer "Why do you want to work at [company]?" Here\'s what I know about them: [paste from their website or recent news]. Give me 3 honest, specific answers I can adapt.'],
      ['Track every application', 'Create a simple table to track my job applications with columns for company, role, date applied, where I found it, contact person, status, follow-up date and notes. Add 3 example rows.'],
    ],
  },
  {
    id: 'profiles',
    title: 'LinkedIn & job-site profiles',
    intro: 'Make recruiters find you, and like what they see when they do.',
    prompts: [
      ['Headline that gets clicks', 'Write 5 LinkedIn headline options (under 220 characters) for a [student / recent graduate / professional] targeting [job title] roles. My key skills: [list].'],
      ['About section', 'Write a LinkedIn About section in the first person, 150–200 words, friendly but professional. Cover who I am, what I\'m good at, what I\'ve done and the roles I\'m looking for. Details: [paste]'],
      ['Job-site profile summary', 'Write a profile summary for [Indeed / Naukri / Seek / another job site] with the keywords recruiters search for when hiring a [job title]. Keep it under 1,000 characters. Background: [paste]'],
      ['Experience entries', 'Turn these resume bullet points into LinkedIn Experience entries that are slightly more conversational and include the skills recruiters search for: [paste]'],
      ['Your first post', 'Write a LinkedIn post announcing [that I finished my degree / earned a certification / built a project / am open to work]. Keep it genuine, under 150 words, with 3 relevant hashtags. Details: [paste]'],
      ['Connection request notes', 'Write 5 short LinkedIn connection notes (under 200 characters each) for: a recruiter, a senior from my college, someone at a company I admire, a speaker I heard, and someone already in my target role.'],
      ['Profile makeover', 'Review my LinkedIn profile as a recruiter hiring for [job title]. What\'s missing, what\'s weak, and what should I change first? Headline: [paste] About: [paste] Experience: [paste]'],
    ],
  },
  {
    id: 'job-search',
    title: 'Job search strategy',
    intro: 'Search smarter: the right roles, a realistic plan, and protection from scams.',
    prompts: [
      ['Discover roles that fit you', 'Based on my degree [degree], skills [list] and interests [list], suggest 10 job titles I could apply for in [country]. For each, explain what the job involves day to day and the usual entry-level requirements.'],
      ['Decode a job description', 'Explain this job description in simple words: what I\'d actually do each day, must-have versus nice-to-have skills, and any red flags I should ask about. Job description: [paste]'],
      ['4-week job search plan', 'Create a 4-week job search plan for an [entry-level / experienced] candidate targeting [job title] roles in [city / remote]. I can spend [hours] a day. Include daily targets for applications, networking and skill-building.'],
      ['Where to look', 'What kinds of companies in [country] hire entry-level [job title]s? Group them into startups, mid-size companies, large multinationals and government or public-sector roles, and tell me where each type usually posts openings.'],
      ['Spot a fake job', 'Here is a job offer or message I received. Check it for signs of a scam, such as asking for fees, unrealistic pay, requests for personal documents, unofficial email addresses or pressure to decide fast. Tell me what to verify before replying: [paste the message]'],
      ['Why am I not getting calls?', 'I applied to [number] jobs for [job title] and got [results, e.g. no replies / only rejections]. Here is my resume: [paste]. What are the most likely reasons, and what should I fix first?'],
      ['Earn while you search', 'Suggest 10 ways I can earn money or gain experience with my skills [list] while I look for a job, such as freelancing, internships, projects or part-time work, and how to find each one.'],
    ],
  },
  {
    id: 'interviews',
    title: 'Interview preparation',
    intro: 'Practise with an AI interviewer until the real one feels easy.',
    prompts: [
      ['Full mock interview', 'Act as an interviewer for a [job title] role at a [type of company]. Ask me one question at a time, mixing HR, technical and situational questions. After each answer, rate it out of 10 and tell me how to improve it. Stop after 10 questions and give overall feedback.'],
      ['"Tell me about yourself"', 'Write a 60–90 second answer to "Tell me about yourself" for a [job title] interview, using a present–past–future structure. My background: [paste]. Then give me a shorter 30-second version.'],
      ['Strengths & weaknesses', 'Help me answer "What are your strengths and weaknesses?" honestly for a [job title] role. My real strengths: [list]. Something I\'m genuinely working on: [weakness]. Show how I\'m improving it.'],
      ['Build STAR stories', 'Turn this experience into a STAR (Situation, Task, Action, Result) answer that takes under 2 minutes to say, for questions about [teamwork / leadership / pressure / conflict]: [describe what happened]'],
      ['Predict the questions', 'List the 20 questions I\'m most likely to be asked in an interview for [job title] at [company], based on this job description. Group them into HR, technical and role-specific questions. Job description: [paste]'],
      ['Technical quiz', 'Quiz me on [topic, e.g. SQL joins / Java OOP / Excel / accounting basics]. Ask one question at a time, from easy to hard. If I get one wrong, explain the right answer simply before moving on.'],
      ['Defend your project', 'I\'ll be asked about my project: [describe it]. Ask me the 10 toughest questions an interviewer could ask about it, one at a time, and help me improve each of my answers.'],
      ['"Why should we hire you?"', 'Write 3 versions of an answer to "Why should we hire you?" for a [job title] role, based on my strengths [list] and what the job needs [paste key requirements].'],
      ['Questions to ask them', 'Give me 10 smart questions to ask at the end of a [job title] interview at a [startup / MNC / government] organisation, and explain what each one helps me learn.'],
      ['Group discussion prep', 'I have a group discussion on [topic]. Give me the key points for and against, 3 strong opening lines, facts I should double-check, and tips for contributing without dominating.'],
      ['Tricky HR questions', 'Help me answer these honestly and positively: Why did you choose this field? Where do you see yourself in 5 years? Are you willing to relocate? Why the [gap / low marks / change of field]? My situation: [details]'],
      ['Spoken English practice', 'Help me practise speaking for interviews. Ask me a common interview question. I\'ll type my answer the way I\'d say it. Then correct my grammar, suggest more natural phrasing, and show me a polished version. Repeat with a new question.'],
      ['Interview-day checklist', 'Create a checklist for the day before and the morning of my [online / in-person] interview for [job title] at [company]: research, documents, outfit, tech check and what to revise.'],
      ['Thank-you email', 'Write a short thank-you email to [interviewer\'s name] after today\'s interview for [job title]. Mention [something we discussed] and restate my interest. Under 100 words.'],
      ['Bounce back from a rejection', 'I wasn\'t selected for [job title] at [company]. Write a polite reply asking for brief feedback and to be considered for future roles. Then give me 3 questions to reflect on before my next interview.'],
    ],
  },
  {
    id: 'offers',
    title: 'Salary, offers & your first job',
    intro: 'Understand what you\'re offered, ask for what you\'re worth, and start strong.',
    prompts: [
      ['Research a fair salary', 'What is a realistic salary range for a [job title] [entry-level / with X years\' experience] in [city, country]? Explain what affects it, and tell me which sources I should check to confirm it.'],
      ['Negotiate politely', 'I received an offer of [amount] for [job title]. I was hoping for [amount] because [reasons]. Write a polite email and a short phone script to negotiate, and tell me what else I could ask for if the salary is fixed.'],
      ['Understand your offer letter', 'Explain this offer letter in simple terms: gross versus take-home pay (CTC versus in-hand, if you are in India), bonuses, any bond or notice period, probation, and anything I should question before signing: [paste, with personal details removed]'],
      ['Compare two offers', 'Help me compare two job offers. Offer A: [details]. Offer B: [details]. Make a table covering pay, growth, learning, location, work-life balance and stability, then ask me 3 questions to help me decide.'],
      ['Your first 90 days', 'I\'m starting as a [job title] at a [type of company]. Create a 30-60-90 day plan to make a good impression, learn fast and build good relationships.'],
    ],
  },
  {
    id: 'studying',
    title: 'Studying & exams',
    intro: 'Learn faster, revise smarter and walk into the exam hall prepared.',
    prompts: [
      ['Explain it simply', 'Explain [topic] like I\'m a complete beginner, using a simple everyday example. Then explain it again at exam level, using the key terms I should write in my answers.'],
      ['Personal study plan', 'Create a day-by-day study plan for my [exam] on [date]. Subjects and chapters: [list]. I can study [hours] a day. Put my weak areas first ([list]) and include revision days and practice tests.'],
      ['Quiz me', 'Quiz me on [chapter or topic] with 10 questions, mixing multiple-choice and short answers. Wait for my answers, then mark them and explain any mistakes.'],
      ['Notes from any text', 'Turn this text into concise revision notes with headings, bullet points, key definitions and formulas, plus 5 likely exam questions: [paste text]'],
      ['Flashcards in seconds', 'Create 20 flashcards for [topic] as a two-column table (question, answer) that I can copy into Anki or Quizlet.'],
      ['Crack previous papers', 'Here are questions from previous [exam] papers: [paste]. Find the most repeated topics and patterns, and tell me where to focus my preparation.'],
      ['Write full-mark answers', 'Show me how to write a [marks]-mark answer to this question: the ideal structure, the key points to include, and where a diagram would help: [question]'],
      ['Solve step by step', 'Solve this problem step by step and explain why each step works. Then give me a similar problem to try on my own: [paste problem]'],
      ['Memory tricks', 'Create memory tricks (mnemonics, short stories or associations) to help me remember: [list, sequence or facts]'],
      ['Current affairs to exam notes', 'Turn this news article into exam notes: the key facts, why it matters, and 3 questions that could be asked about it in [your exam, e.g. civil service, UPSC, SAT, GRE or a professional exam]: [paste article]'],
      ['Feedback, not a rewrite', 'Give feedback on my [essay / assignment] about [topic]: structure, argument, clarity and grammar. Don\'t rewrite it for me. Tell me what to improve and why: [paste]'],
      ['Map a whole chapter', 'Break [subject or chapter] into a concept map: the main ideas, the sub-topics, and how they connect. Show it as an indented outline.'],
      ['Beat distraction and stress', 'I get distracted and stressed while studying. Suggest a realistic daily routine for exam season, covering focus techniques like Pomodoro, breaks, sleep and phone rules, for someone studying [hours] a day.'],
    ],
  },
  {
    id: 'career-planning',
    title: 'Skills & career planning',
    intro: 'Know what to learn next, and prove it with work recruiters can see.',
    prompts: [
      ['Find your skill gaps', 'I want to become a [job title]. My current skills: [list]. Show the skills I\'m missing, ranked by importance, with a free or low-cost way to learn each one.'],
      ['3-month learning roadmap', 'Create a 3-month roadmap to become job-ready as a [job title], with weekly goals, the kinds of free resources to look for, and 3 portfolio projects to build along the way.'],
      ['Portfolio project ideas', 'Suggest 5 portfolio projects for a [job title] that would impress recruiters in [country], with the difficulty level, tools needed and what each project proves about me.'],
      ['Higher studies or a job?', 'Help me decide between [option A, e.g. MBA / MTech / a job / government exam preparation] and [option B]. First ask me about my goals, finances and interests, then give me a balanced comparison.'],
      ['Certifications worth it', 'Which certifications actually help for [job title] roles in [country]? Separate free from paid, and tell me which ones recruiters value versus which are only nice to have.'],
    ],
  },
];

// Bonus: follow-ups that improve any answer (not counted in the 75).
export const followUps = [
  ['Ask me first', 'Before you answer, ask me any questions you need to give me a better result.'],
  ['Make it sound like me', 'Rewrite this so it sounds like me. Here is something I wrote: [paste a sample]'],
  ['Shorter and simpler', 'Make this 50% shorter and use simple words.'],
  ['Give me options', 'Give me 3 different versions so I can choose.'],
  ['What\'s missing?', 'What is missing or weak in this? Be honest.'],
  ['Check yourself', 'Review your answer for mistakes or anything you may have made up, and correct it.'],
  ['Make it a table', 'Turn this into a table I can copy.'],
  ['Natural workplace English', 'Rewrite this in clear, simple English that sounds natural in a workplace in [country].'],
  ['Translate it', 'Translate this into [Spanish / Hindi / Arabic / your language], keeping it natural and easy to read.'],
  ['Explain your choices', 'Explain why you made these changes so I can do it myself next time.'],
];

// Extra library sections (not part of the PDF kit).
export const moreSections = [
  {
    id: 'writing',
    title: 'Everyday writing & email',
    intro: 'Clear, friendly messages in seconds, from tricky emails to thank-you notes.',
    prompts: [
      ['Reply to an email', 'Write a reply to this email. I want to [say yes / politely decline / ask for more time / ask a question]. Keep it friendly and under 120 words. Email: [paste the email]'],
      ['Say no politely', 'Help me politely say no to [request] from [person, e.g. my manager / a friend / a client]. I want to keep a good relationship. Give me 3 versions: short, warm and firm.'],
      ['Make it clearer', 'Rewrite this so it is clearer and easier to read. Keep my meaning and tone, use short sentences and plain words, and remove anything unnecessary: [paste your text]'],
      ['Fix the tone', 'Rewrite this message so it sounds [more friendly / more professional / more confident / less angry] without changing what it says: [paste your message]'],
      ['Write a complaint that works', 'Write a polite but firm complaint to [company] about [problem]. Include what happened, when, what I have already tried, and what I want them to do: [refund / repair / replacement / apology]. Keep it under 200 words.'],
      ['Thank-you note', 'Write a short, sincere thank-you message to [person] for [what they did]. Mention [a specific detail] and keep it under 80 words.'],
    ],
  },
  {
    id: 'productivity',
    title: 'Documents, notes & presentations',
    intro: 'Summarise, organise and present information faster.',
    prompts: [
      ['Summarise a document', 'Summarise this document in 5 bullet points, then give me a one-sentence takeaway. Who is it written for, and what is the main point? Document: [paste text or upload the file]'],
      ['Summarise for a decision', 'I need to decide whether to [goal]. Summarise only the parts of this document that matter for that decision, including risks, costs, deadlines and anything unusual. Document: [paste text or upload the file]'],
      ['Check the summary', 'For each point in your summary, give the page number or section and a short direct quote from the document that supports it.'],
      ['Meeting notes to action list', 'Turn these meeting notes into a clear summary with decisions made, action items (who, what, by when) and open questions: [paste your notes]'],
      ['Presentation outline', 'Create a slide-by-slide outline for a [length]-minute presentation to [audience] about [topic]. For each slide, give a headline that states the point, 2–4 short bullet points and a visual idea. Include an opening hook and a closing call to action.'],
      ['Speaker notes', 'Write conversational speaker notes for each slide of this presentation, about [number] seconds per slide, with a smooth transition to the next slide. Slides: [paste your slide text]'],
      ['Plan my week', 'Here are my tasks and deadlines for the week: [list]. I have about [hours] hours a day. Make a realistic day-by-day plan, put the most important work first, and tell me what to drop if I run out of time.'],
    ],
  },
  {
    id: 'business',
    title: 'Small business',
    intro: 'Marketing, customer service and admin help for busy business owners.',
    prompts: [
      ['Describe your business to the AI', 'I run [type of business] in [city / country]. Our customers are mostly [describe them]. We are known for [what makes you different]. Our tone is [friendly / professional / playful]. Keep this in mind for everything I ask.'],
      ['Reply to a customer', 'Write a friendly, helpful reply to this customer message. Answer their question, apologise once if something went wrong, and offer a clear next step. Keep it under 100 words. Message: [paste the customer message]'],
      ['A week of social posts', 'Create 7 social media posts for [platform] for my [business]. Mix tips, behind-the-scenes, customer stories and one promotion for [offer]. Include a caption, an image idea and 3–5 relevant hashtags for each.'],
      ['Product description', 'Write a product description for [product]. Key features: [list]. Who it is for: [customer]. Focus on benefits, not just features. Give a short version (under 50 words) and a longer version (about 150 words).'],
      ['Marketing email', 'Write a short marketing email announcing [offer / new product / event] to our existing customers. Give 3 subject line options, one clear call to action and a friendly sign-off from [your name].'],
      ['FAQ page', 'Here are the questions customers ask us most often: [list]. Write clear, friendly answers for an FAQ page. Ask me for any information you need instead of guessing.'],
      ['Spreadsheet formula', 'I have a spreadsheet with these columns: [list column names]. Write a formula for [Excel / Google Sheets] that [what you want, e.g. totals sales by month]. Explain how to use it.'],
      ['Payment reminder', 'Write a polite but firm reminder to a customer whose invoice of [amount] was due on [date]. This is the [first / second] reminder. Keep it professional and friendly.'],
      ['Test a business idea', 'I am thinking about [idea]. Ask me questions first, then list the pros, cons, risks and costs to consider, and suggest a small, low-risk way to test it.'],
    ],
  },
  {
    id: 'images',
    title: 'AI images',
    intro: 'Describe the picture you want, and refine it step by step.',
    prompts: [
      ['Image prompt builder', 'Create an image of [subject] in [setting]. Style: [photo / watercolour / 3D render / flat illustration]. Lighting and mood: [e.g. golden hour, cosy]. Composition: [close-up / wide shot / space for text]. Format: [square / wide / tall].'],
      ['Write my image prompt for me', 'I want an image for [purpose, e.g. a blog header / Instagram post / poster]. Ask me 5 quick questions about what I want, then write a detailed image prompt I can use in any AI image generator.'],
      ['Poster with readable text', 'Design a poster for [event or message] with the exact text "[your text]" in large, clear lettering. Style: [style]. Colours: [colours]. Leave plenty of space around the text.'],
      ['Change one thing', 'Keep this image exactly the same, but change only [one thing, e.g. the background to a beach / the jacket colour to red].'],
    ],
  },
  {
    id: 'safety',
    title: 'Safety & scams',
    intro: 'A second opinion before you click, reply or pay.',
    prompts: [
      ['Is this message a scam?', 'Here is a message I received. Check it for signs of a scam: urgency, unusual payment requests, requests for codes or personal details, suspicious links or sender addresses, and anything that does not add up. Tell me what to verify before I respond: [paste the message, with your personal details removed]'],
      ['Explain the fine print', 'Explain these terms in plain English. What am I agreeing to, what will it cost, how do I cancel, and is anything unusual or one-sided? Terms: [paste the terms]'],
      ['Family safety plan', 'Help me create a simple plan to protect my family from phone and online scams, including a family safe word, rules for unexpected money requests, and what to do if someone is targeted. Keep it short enough to print on one page.'],
    ],
  },
];

// Icons for the Prompt Library's category tiles.
const icons = {
  resumes: '📄', applications: '✉️', profiles: '👤', 'job-search': '🔎', interviews: '🎤', offers: '💰',
  studying: '📚', 'career-planning': '🧭', writing: '✍️', productivity: '🗂️', business: '🏪', images: '🎨',
  safety: '🛡️', 'follow-ups': '✨',
};

// Everything the Prompt Library shows, in order. Follow-ups become their own category.
export const library = [
  ...sections,
  ...moreSections,
  {
    id: 'follow-ups',
    title: 'Follow-ups that improve any answer',
    intro: 'Send one of these after any AI answer to sharpen it.',
    prompts: followUps,
  },
].map((section) => ({
  ...section,
  icon: icons[section.id] ?? '•',
  prompts: section.prompts.map(([title, text], i) => ({ id: `${section.id}-${i + 1}`, title, text })),
}));
