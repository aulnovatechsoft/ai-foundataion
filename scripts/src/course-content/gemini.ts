import type { CourseSeed } from "./types";

export const GEMINI_COURSE: CourseSeed = {
  slug: "gemini",
  title: "Gemini",
  tagline: "Google's AI, wired into the tools you use every day",
  description:
    "Master Gemini's superpowers: live Google Search grounding, deep Workspace integration (Gmail, Docs, Sheets), multimodal understanding and research workflows.",
  icon: "🔷",
  color: "#EDE9FE",
  accent: "#7C3AED",
  sortOrder: 3,
  units: [
    {
      title: "Gemini Essentials",
      lessons: [
        {
          title: "Meet Gemini",
          summary: "Google's AI and the ecosystem advantage",
          content: `<p>Gemini is Google's AI assistant, and its defining trait is <strong>where it lives</strong>: inside Search, Gmail, Docs, Sheets, Android and Chrome.</p><h3>What sets Gemini apart</h3><ul><li><strong>Fresh information:</strong> tight integration with Google Search means answers grounded in the live web.</li><li><strong>Workspace integration:</strong> it can read (with permission) your Gmail, Drive and Docs to answer questions about <em>your</em> stuff.</li><li><strong>Multimodal from birth:</strong> strong with images, and long videos/audio in advanced versions.</li><li><strong>Generous free tier</strong> and inclusion with Google One plans.</li></ul><p>If your work already runs on Google, Gemini isn't "another chatbot" — it's an assistant that already has your context. This course shows you how to use that safely and well.</p>`,
        },
        {
          title: "Grounded Answers with Google Search",
          summary: "Get current, sourced information — not stale memory",
          content: `<p>Most AI models answer from training data that ends months ago. Gemini can check <strong>live Google Search</strong> and ground its answer in current results.</p><h3>Use grounding for</h3><ul><li>Anything time-sensitive: prices, news, schedules, product comparisons, "is X still true?"</li><li>Local questions: businesses, travel options, opening hours.</li><li>Fact-checking: "Search for recent sources on this claim and summarize what they say."</li></ul><p>Good habit: when accuracy matters, click the source links Gemini shows and skim the originals. Grounding dramatically reduces hallucinations but doesn't eliminate misreading — the links make verification a 10-second job instead of a research project.</p>`,
        },
        {
          title: "Gemini in Gmail & Docs",
          summary: "Draft, summarize and polish where you already write",
          content: `<p>Gemini's killer feature for busy professionals: it works <em>inside</em> Gmail and Google Docs.</p><h3>In Gmail</h3><ul><li>"Summarize this thread" on a 40-message chain before a meeting.</li><li>"Draft a polite reply declining, but offering next month."</li><li>Search your inbox conversationally: "What did Sarah say about the budget?"</li></ul><h3>In Docs</h3><ul><li>"Help me write" a first draft directly in the document.</li><li>Rewrite selections: more formal, shorter, bulletized.</li><li>Brainstorm outlines and turn notes into prose without leaving the page.</li></ul><p>The productivity win isn't the quality difference vs other AIs — it's the <strong>zero context-switching</strong>. The assistant is already where the work happens.</p>`,
        },
        {
          title: "Gemini in Sheets & Slides",
          summary: "Formulas, tables, analysis and deck-building help",
          content: `<p>Spreadsheets and slide decks are where Gemini quietly saves hours.</p><h3>In Sheets</h3><ul><li>Describe the formula you need in English: "flag rows where spend exceeds budget by 10%".</li><li>"Create a table to track…" — Gemini generates structured layouts with sensible columns.</li><li>Ask for analysis of a data range: trends, outliers, a chart suggestion.</li></ul><h3>In Slides</h3><ul><li>Generate speaker notes from slide content.</li><li>Create images for slides from a text description.</li><li>"Turn this doc into a 5-slide outline" — then refine slide by slide.</li></ul><p>Start with low-stakes internal work to build trust, and always sanity-check generated formulas on a few rows you can verify by eye.</p>`,
        },
        {
          title: "Multimodal: Images, Screenshots & More",
          summary: "Ask about anything you can point a camera at",
          content: `<p>Gemini handles images as naturally as text. Upload or snap a photo and ask.</p><h3>Everyday multimodal wins</h3><ul><li><strong>Screenshots:</strong> "What does this error mean and how do I fix it?"</li><li><strong>Whiteboards:</strong> photograph the scribbles, get clean structured notes.</li><li><strong>Documents:</strong> photo of a form or receipt → extracted, organized data.</li><li><strong>The real world:</strong> a plant, a dashboard warning light, a dish — identify and explain.</li><li><strong>Charts:</strong> "Explain what this graph shows in plain English."</li></ul><p>On Android, Gemini is one long-press away and can act on what's on screen. The habit to build: anything visual you'd struggle to describe in words — just show it.</p>`,
        },
      ],
    },
    {
      title: "Research & Power Moves",
      lessons: [
        {
          title: "Deep Research Mode",
          summary: "Delegate hours of web research to an AI agent",
          content: `<p>Gemini's Deep Research acts like a junior researcher: give it a meaty question and it browses dozens of sources, then returns an organized, cited report.</p><h3>Perfect assignments</h3><ul><li>"Compare the top 5 CRM tools for a 10-person sales team: pricing, strengths, weaknesses."</li><li>"What are the main approaches to reducing customer churn in subscription businesses?"</li><li>"Research the market for eco-friendly packaging in Europe."</li></ul><p>Write the brief like you'd brief a human: scope, what to include, what to skip, and the output format you want. Then read critically — check the sources it cites for the claims that will drive real decisions. Ten minutes of AI research plus ten minutes of your judgment beats three hours of tab-hopping.</p>`,
        },
        {
          title: "Gems: Your Custom Assistants",
          summary: "Save a persona + instructions you reuse constantly",
          content: `<p>Gems are Gemini's custom assistants — the same idea as custom GPTs. You write instructions once, name it, and reuse it forever.</p><h3>Gems worth creating</h3><ul><li><strong>Copy editor:</strong> your style rules, banned words, preferred tone.</li><li><strong>Meeting prep:</strong> "Given this agenda and these notes, produce talking points and likely objections."</li><li><strong>Explainer:</strong> "Explain any topic I paste at three levels of depth."</li><li><strong>Interview coach:</strong> asks you role-specific questions, then scores your answers.</li></ul><p>The discipline that makes Gems valuable: when you catch yourself typing the same setup for the third time, stop and turn it into a Gem. Three repetitions = automation signal.</p>`,
        },
        {
          title: "Privacy & Data Sense",
          summary: "Use an integrated AI without oversharing",
          content: `<p>An assistant wired into your email and files is powerful — and worth configuring consciously.</p><h3>Sensible defaults</h3><ul><li><strong>Know the controls:</strong> Gemini Apps Activity settings let you view and delete history and limit training usage.</li><li><strong>Workspace boundaries:</strong> corporate Gemini accounts keep company data within the organization — know which account you're using.</li><li><strong>Don't paste secrets:</strong> credentials, unreleased financials and other regulated data don't belong in any consumer AI chat.</li><li><strong>Check before connecting:</strong> integrations ask permission before reading Gmail/Drive — grant only what you'll use.</li></ul><p>The goal isn't paranoia; it's knowing exactly what's shared so you can use the integration superpowers with a clear conscience.</p>`,
        },
        {
          title: "Gemini vs Other AIs",
          summary: "When Google's assistant is the right tool",
          content: `<p>Route tasks to Gemini when its unique advantages matter.</p><h3>Gemini wins when…</h3><ul><li>The answer must be <strong>current</strong> — live Search grounding is the moat.</li><li>The context is <strong>your Google life</strong> — Gmail threads, Drive files, Calendar.</li><li>The task is <strong>multimodal</strong> — screenshots, photos, long videos.</li><li>You want <strong>delegated research</strong> with citations via Deep Research.</li></ul><h3>Consider others when…</h3><ul><li>You want the most polished long-form <strong>prose</strong> (many prefer Claude).</li><li>You're deep in <strong>custom GPT</strong> ecosystems or specific plugins.</li></ul><p>Most professionals land on: Gemini for fresh info + Google-context tasks, another model for their heaviest writing. Find your own split by testing real tasks.</p>`,
        },
        {
          title: "Your Gemini System",
          summary: "Wire Gemini into your week and claim your certificate",
          content: `<p>Let's turn features into routine.</p><h3>The starter system</h3><ul><li><strong>Morning triage:</strong> Gemini summarizes your longest email threads before you open them.</li><li><strong>Meeting prep:</strong> one Gem that turns agendas + notes into talking points.</li><li><strong>Research slot:</strong> one Deep Research brief per week for a real decision you face.</li><li><strong>Visual reflex:</strong> screenshot → ask, instead of describing problems in words.</li></ul><p>Pick two of these and do them for five workdays straight — integration into routine is what separates "tried it once" from real productivity gains. That's the Gemini course complete. Claim your certificate!</p>`,
        },
      ],
    },
  ],
};
