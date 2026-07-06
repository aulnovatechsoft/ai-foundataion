export interface QuestionSeed {
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * One check-question per lesson, keyed by "course-slug::lesson title".
 * The seed script throws if a lesson has no question, so the two files
 * can never drift silently.
 */
export const LESSON_QUESTIONS: Record<string, QuestionSeed> = {
  /* ------------------------------- ChatGPT ------------------------------- */
  "chatgpt::Meet ChatGPT": {
    text: "What's the most important mindset shift when using ChatGPT?",
    options: [
      "It's a search engine that looks up fixed answers",
      "It generates answers from learned patterns, so important facts should be verified",
      "It's only useful for programmers",
      "It always refuses to write drafts",
    ],
    correctIndex: 1,
    explanation:
      "ChatGPT generates responses from patterns — that's what makes it flexible, and why you verify facts that matter.",
  },
  "chatgpt::Discovering Modes & Features": {
    text: "You need up-to-the-minute information for a time-sensitive question. Which mode fits best?",
    options: ["Voice mode", "Image generation", "Web browsing", "File analysis"],
    correctIndex: 2,
    explanation:
      "Web browsing pulls in fresh, current information — the right tool for time-sensitive questions.",
  },
  "chatgpt::Writing Great Prompts": {
    text: "Which four parts make up a great prompt?",
    options: [
      "Role, context, task, format",
      "Greeting, question, thanks, signature",
      "Keywords, hashtags, links, emojis",
      "Length, speed, cost, model",
    ],
    correctIndex: 0,
    explanation:
      "Role + context + task + format is the formula that upgrades almost any answer.",
  },
  "chatgpt::Follow-ups & Iteration": {
    text: "The first answer ChatGPT gives you is disappointing. What's the power-user move?",
    options: [
      "Give up — the tool can't do it",
      "Start a brand new chat and hope",
      "Send follow-ups: tighten, retone, ask for options or a critique",
      "Report the answer as a bug",
    ],
    correctIndex: 2,
    explanation:
      "ChatGPT remembers the conversation — steering with follow-ups is how you reach its best work.",
  },
  "chatgpt::Stay Organized: Chats, Projects & History": {
    text: "Which habit keeps your ChatGPT history useful over time?",
    options: [
      "Putting every topic in one giant chat",
      "One topic per chat, renamed so you'll recognize it later",
      "Deleting all chats daily",
      "Never reusing old prompts",
    ],
    correctIndex: 1,
    explanation:
      "One topic per chat with clear names makes past work searchable and reusable.",
  },
  "chatgpt::Voice Mode": {
    text: "Which task is voice mode especially good for?",
    options: [
      "Rendering high-resolution images",
      "Practicing an interview or difficult conversation out loud",
      "Editing spreadsheets",
      "Downloading files",
    ],
    correctIndex: 1,
    explanation:
      "Spoken practice — interviews, negotiations, languages — is where voice mode shines.",
  },
  "chatgpt::Summarize Anything": {
    text: "What's the key to getting a genuinely useful summary?",
    options: [
      "Always ask for the longest summary possible",
      "Tell it what kind of summary you need — audience and length",
      "Never paste more than one paragraph",
      "Ask for a poem version",
    ],
    correctIndex: 1,
    explanation:
      "A summary for a decision differs from one for memory — name the audience and length.",
  },
  "chatgpt::Write & Rewrite Like a Pro": {
    text: "How do you make ChatGPT's drafts sound like you?",
    options: [
      "Paste samples of your writing and say 'match this style'",
      "Type in all caps",
      "Ask it to be as formal as possible",
      "Use one-word prompts",
    ],
    correctIndex: 0,
    explanation:
      "Showing 2-3 samples of your real writing lets ChatGPT clone your voice.",
  },
  "chatgpt::ChatGPT & Apps": {
    text: "What's the core principle behind using ChatGPT's apps and integrations?",
    options: [
      "Only use ChatGPT on the website",
      "Reduce the distance between where a question appears and where you ask it",
      "Install every integration available",
      "Avoid the mobile app",
    ],
    correctIndex: 1,
    explanation:
      "When ChatGPT is one shortcut away, you use it far more — that's where the gains compound.",
  },
  "chatgpt::Analyze Files & Data": {
    text: "Why are calculations in data analysis mode more trustworthy than normal chat answers?",
    options: [
      "They're always perfect",
      "It writes and runs real code, so numbers are computed rather than guessed",
      "It asks a human accountant",
      "It refuses hard calculations",
    ],
    correctIndex: 1,
    explanation:
      "Data analysis runs actual code behind the scenes — compute, not guesswork. Still sanity-check important numbers.",
  },
  "chatgpt::Image Generation with ChatGPT": {
    text: "A strong image prompt names the subject plus…",
    options: [
      "Your favorite color only",
      "Style, mood/light and the purpose of the image",
      "The number of pixels",
      "Nothing else — short is always better",
    ],
    correctIndex: 1,
    explanation:
      "Subject + style + mood/light + purpose gives the model enough to nail the picture.",
  },
  "chatgpt::Custom Instructions & Memory": {
    text: "What do custom instructions save you from?",
    options: [
      "Paying for a subscription",
      "Repeating who you are and how you want answers in every single chat",
      "Ever getting a wrong answer",
      "Needing to write prompts at all",
    ],
    correctIndex: 1,
    explanation:
      "Set your context and preferences once — every new chat starts pre-loaded.",
  },
  "chatgpt::Custom GPTs": {
    text: "What is a custom GPT?",
    options: [
      "A new phone app you must code in Python",
      "Your own ChatGPT variant with baked-in instructions, files and personality — built with no code",
      "A paid human assistant",
      "A browser extension",
    ],
    correctIndex: 1,
    explanation:
      "Custom GPTs package your best prompt setup into a reusable assistant you can share.",
  },
  "chatgpt::Fact-Checking & Limitations": {
    text: "For high-stakes topics (legal, medical, financial), the right approach is…",
    options: [
      "Trust ChatGPT fully — it sounds confident",
      "Never use AI at all",
      "Use it as a thinking partner but verify every claim with a primary source",
      "Ask the same question twice and trust the second answer",
    ],
    correctIndex: 2,
    explanation:
      "Confidence isn't accuracy. High stakes = verify claims at the source. You're the editor-in-chief.",
  },
  "chatgpt::Your ChatGPT Workflow": {
    text: "What turns ChatGPT skills into lasting productivity gains?",
    options: [
      "Wiring great prompts into a weekly routine you actually trigger",
      "Reading more articles about AI",
      "Trying a new AI tool every day",
      "Memorizing every feature name",
    ],
    correctIndex: 0,
    explanation:
      "Skills fade; systems stick. Saved prompts + calendar triggers = a real workflow.",
  },

  /* -------------------------------- Claude ------------------------------- */
  "claude::Meet Claude": {
    text: "Which of these is a signature Claude strength?",
    options: [
      "Generating video",
      "Handling very long documents and producing natural, nuanced writing",
      "Controlling smart home devices",
      "Live sports scores",
    ],
    correctIndex: 1,
    explanation:
      "Huge context windows and human-sounding prose are Claude's calling cards.",
  },
  "claude::The Context Window Advantage": {
    text: "What is a context window?",
    options: [
      "The browser tab AI runs in",
      "How much text the AI can 'hold in mind' in one conversation",
      "A privacy setting",
      "The time limit on a chat",
    ],
    correctIndex: 1,
    explanation:
      "The context window is the model's working memory — Claude's fits hundreds of pages.",
  },
  "claude::Prompting Claude Well": {
    text: "Claude especially rewards prompts that are…",
    options: [
      "As short as possible",
      "Written in all caps",
      "Clearly structured, with instructions separated from the material",
      "Sent twice in a row",
    ],
    correctIndex: 2,
    explanation:
      "Clear sections — 'here are the rules… here is the text…' — play to Claude's instruction-following strength.",
  },
  "claude::Writing & Editing with Claude": {
    text: "What's the smarter way to edit a draft with Claude?",
    options: [
      "One pass asking 'make it better'",
      "Separate passes: structure, then clarity, then tone",
      "Ask it to rewrite everything from scratch each time",
      "Never let it critique its own work",
    ],
    correctIndex: 1,
    explanation:
      "One type of fix per pass produces far better edits than a vague 'improve this'.",
  },
  "claude::Artifacts: Create Alongside the Chat": {
    text: "What is an Artifact in Claude?",
    options: [
      "A saved screenshot",
      "A dedicated side panel holding a document, code or mini-app that updates as you refine it",
      "An error message",
      "A paid add-on only for teams",
    ],
    correctIndex: 1,
    explanation:
      "Artifacts keep substantial work in its own panel — and code artifacts can actually run.",
  },
  "claude::Projects & Knowledge": {
    text: "What's the big win of Claude Projects?",
    options: [
      "They make Claude respond faster",
      "Every chat starts pre-loaded with your uploaded documents and instructions",
      "They remove the message limit",
      "They translate automatically",
    ],
    correctIndex: 1,
    explanation:
      "Knowledge files + project instructions mean you stop re-explaining your business every chat.",
  },
  "claude::Analysis & Research Partner": {
    text: "Why paste current material into Claude for recent factual topics?",
    options: [
      "It makes the chat look longer",
      "Claude's built-in knowledge has a training cutoff date",
      "Claude refuses to answer otherwise",
      "It's required by the terms of service",
    ],
    correctIndex: 1,
    explanation:
      "Claude can't know what happened after its training cutoff — give it the current source.",
  },
  "claude::Claude for Data & Code": {
    text: "How should you treat Claude's data/code output?",
    options: [
      "Like a junior analyst's work: fast, usually right, always reviewed",
      "As guaranteed correct",
      "As decoration",
      "Never use it — too risky",
    ],
    correctIndex: 0,
    explanation:
      "Review before it touches anything important — that's the professional stance.",
  },
  "claude::Choosing Claude vs Other AIs": {
    text: "Which task is Claude the strongest pick for?",
    options: [
      "Generating a product photo",
      "Searching live flight prices",
      "Analyzing a 150-page contract and drafting a nuanced summary",
      "Controlling a smart speaker",
    ],
    correctIndex: 2,
    explanation:
      "Long input + careful judgment + polished writing = Claude territory.",
  },
  "claude::Your Claude Playbook": {
    text: "What belongs in a starter Claude playbook?",
    options: [
      "A project with your docs, three saved prompts, one artifact template, and a verification habit",
      "Fifty bookmarked articles",
      "A new account every week",
      "Only using Claude on Fridays",
    ],
    correctIndex: 0,
    explanation:
      "A small set of wired-in habits beats a large set of good intentions.",
  },

  /* -------------------------------- Gemini ------------------------------- */
  "gemini::Meet Gemini": {
    text: "Gemini's defining advantage is…",
    options: [
      "It's the only AI that can write poems",
      "It lives inside Google's ecosystem — Search, Gmail, Docs, Android",
      "It works without the internet",
      "It has no free tier",
    ],
    correctIndex: 1,
    explanation:
      "Deep integration with Google's tools is what makes Gemini different, not just the model.",
  },
  "gemini::Grounded Answers with Google Search": {
    text: "What does 'grounding' mean in Gemini?",
    options: [
      "Turning the AI off",
      "Answers are based on live Google Search results with source links",
      "Answers are limited to one sentence",
      "The AI only talks about geography",
    ],
    correctIndex: 1,
    explanation:
      "Grounding checks the live web and shows sources — ideal for time-sensitive questions.",
  },
  "gemini::Gemini in Gmail & Docs": {
    text: "The biggest productivity win of Gemini in Gmail/Docs is…",
    options: [
      "Fancier fonts",
      "Zero context-switching — the assistant is already where the work happens",
      "It sends emails without your approval",
      "Unlimited storage",
    ],
    correctIndex: 1,
    explanation:
      "No copy-pasting between apps: summarize threads and draft replies right where you work.",
  },
  "gemini::Gemini in Sheets & Slides": {
    text: "What's the safe way to use AI-generated spreadsheet formulas?",
    options: [
      "Paste and trust — formulas are always right",
      "Sanity-check them on a few rows you can verify by eye",
      "Only use them in December",
      "Convert everything to PDF first",
    ],
    correctIndex: 1,
    explanation:
      "Verify on known rows before relying on any generated formula.",
  },
  "gemini::Multimodal: Images, Screenshots & More": {
    text: "When is showing Gemini an image better than typing?",
    options: [
      "Never — text is always superior",
      "When the thing is visual and hard to describe: errors, whiteboards, charts, objects",
      "Only for photos of documents",
      "Only on desktop",
    ],
    correctIndex: 1,
    explanation:
      "If you'd struggle to describe it in words, just show it — that's the multimodal reflex.",
  },
  "gemini::Deep Research Mode": {
    text: "How should you brief Deep Research for best results?",
    options: [
      "One vague word, like 'marketing'",
      "Like briefing a human researcher: scope, what to include/skip, output format",
      "Ask it to skip citing sources",
      "Run the same query ten times",
    ],
    correctIndex: 1,
    explanation:
      "A clear brief produces an organized, cited report worth reading — then apply your judgment.",
  },
  "gemini::Gems: Your Custom Assistants": {
    text: "What's the signal that you should create a Gem?",
    options: [
      "You typed the same prompt setup for the third time",
      "You're bored",
      "Your battery is full",
      "It's a new month",
    ],
    correctIndex: 0,
    explanation:
      "Three repetitions = automation signal. Package the setup once and reuse it forever.",
  },
  "gemini::Privacy & Data Sense": {
    text: "Which of these does NOT belong in a consumer AI chat?",
    options: [
      "A public news article",
      "Your draft blog post",
      "Passwords, credentials and unreleased financials",
      "A recipe you like",
    ],
    correctIndex: 2,
    explanation:
      "Secrets and regulated data stay out — everything else is fair game once you know your settings.",
  },
  "gemini::Gemini vs Other AIs": {
    text: "Which task is Gemini the standout choice for?",
    options: [
      "Questions needing current web data plus your Gmail/Drive context",
      "Offline novel writing",
      "3D game development",
      "Printing documents",
    ],
    correctIndex: 0,
    explanation:
      "Fresh info + your Google context is Gemini's moat.",
  },
  "gemini::Your Gemini System": {
    text: "What separates 'tried it once' from real productivity gains?",
    options: [
      "Reading the changelog",
      "Doing chosen routines for five workdays straight until they stick",
      "Buying more subscriptions",
      "Using AI only on weekends",
    ],
    correctIndex: 1,
    explanation:
      "Consistency wires the tool into your routine — that's where the gains live.",
  },

  /* ------------------------------ Midjourney ----------------------------- */
  "midjourney::Meet Midjourney": {
    text: "What is the core creative loop in Midjourney?",
    options: [
      "Prompt → pick from 4 → vary → upscale",
      "Upload → crop → filter → post",
      "Record → edit → export",
      "Sketch → scan → trace",
    ],
    correctIndex: 0,
    explanation:
      "Every session is that loop: generate a grid, pick, vary, upscale.",
  },
  "midjourney::Your First Prompts": {
    text: "Which prompt will produce the best result?",
    options: [
      "'nice cool image please'",
      "'a cozy corner bookshop, rainy evening, warm window light, cinematic photography'",
      "'IMAGE!!!'",
      "'make art'",
    ],
    correctIndex: 1,
    explanation:
      "Subject → setting → style → light/mood: concrete scene descriptions win.",
  },
  "midjourney::Styles & Aesthetics": {
    text: "What's the fastest way to upgrade your image quality?",
    options: [
      "Typing in a different language",
      "Building a vocabulary of style words and testing them on one subject",
      "Using longer prompts with more adjectives like 'beautiful'",
      "Generating at 3am",
    ],
    correctIndex: 1,
    explanation:
      "Style words ('editorial photo', 'flat vector', 'golden hour') transform the same subject.",
  },
  "midjourney::Parameters that Matter": {
    text: "You're creating an Instagram story visual. Which parameter matters first?",
    options: ["--ar 9:16 for vertical format", "--no clouds", "--v 3", "--stylize 0"],
    correctIndex: 0,
    explanation:
      "Decide aspect ratio before prompting — images composed for one shape rarely crop well.",
  },
  "midjourney::Iterate Like a Pro": {
    text: "What's the disciplined way to iterate?",
    options: [
      "Change ten things at once and hope",
      "Change one thing at a time and note what it did",
      "Always start from scratch",
      "Never generate more than once",
    ],
    correctIndex: 1,
    explanation:
      "One change per iteration is learning; ten random changes is gambling.",
  },
  "midjourney::Reference Images & Consistency": {
    text: "How do you keep a whole campaign visually unified?",
    options: [
      "Use a style reference image for every subsequent asset",
      "Use a different style every day",
      "Only generate one image total",
      "Ask for 'consistent style' in words alone",
    ],
    correctIndex: 0,
    explanation:
      "Find 'the look' once, then reference it — your feed starts looking like one brand.",
  },
  "midjourney::Marketing & Social Content": {
    text: "How should text (headlines, offers) get onto your AI visuals?",
    options: [
      "Ask Midjourney to render the text in the image",
      "Generate clean imagery with --no text, then add type in a design tool",
      "Handwrite it and photograph it",
      "Text on images is forbidden",
    ],
    correctIndex: 1,
    explanation:
      "AI still mangles words — overlay text in Canva/Figma for crisp, editable results.",
  },
  "midjourney::Editing: Zoom, Pan & Region Edits": {
    text: "An image is 90% perfect but one hand looks wrong. Best move?",
    options: [
      "Delete it and start over",
      "Vary region: select just the hand and regenerate that part",
      "Publish it anyway",
      "Zoom out repeatedly",
    ],
    correctIndex: 1,
    explanation:
      "Region editing salvages nearly-right images in minutes — salvage first, reroll second.",
  },
  "midjourney::Rights, Ethics & Disclosure": {
    text: "Which is a genuine risk to avoid in commercial AI imagery?",
    options: [
      "Using warm colors",
      "Generating real people's likenesses or trademarked products in ads",
      "Making more than 10 images",
      "Using aspect ratios",
    ],
    correctIndex: 1,
    explanation:
      "Likenesses and trademarks in commercial work are legal landmines — keep them out.",
  },
  "midjourney::Midjourney vs Other Image AIs": {
    text: "Your legal team is strict about training-data provenance. Which tool fits best?",
    options: [
      "Adobe Firefly — trained on licensed stock",
      "Any tool, legal never matters",
      "The one with the nicest logo",
      "Whichever is cheapest",
    ],
    correctIndex: 0,
    explanation:
      "Firefly's licensed training data makes it the safe pick for strict corporate environments.",
  },
  "midjourney::Your Visual Workflow": {
    text: "What does a professional production system include?",
    options: [
      "A style library, batch generation days, an edit pass and a rights checklist",
      "Generating one random image per day",
      "Publishing grid-resolution images directly",
      "Avoiding notes so you stay creative",
    ],
    correctIndex: 0,
    explanation:
      "Library → batch → edit → legal check: the repeatable loop that ships real work.",
  },
};
