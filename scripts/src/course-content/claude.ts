import type { CourseSeed } from "./types";

export const CLAUDE_COURSE: CourseSeed = {
  slug: "claude",
  title: "Claude",
  tagline: "The thoughtful AI for deep work and long documents",
  description:
    "Learn Claude's strengths — nuanced writing, huge context windows, careful reasoning and Artifacts — and when to reach for it over other tools.",
  icon: "🟠",
  color: "#FFEDD5",
  accent: "#EA580C",
  sortOrder: 2,
  units: [
    {
      title: "Claude Essentials",
      lessons: [
        {
          title: "Meet Claude",
          summary: "What makes Claude different from other AI assistants",
          content: `<p>Claude, made by Anthropic, is a conversational AI with a reputation for thoughtful, nuanced answers and a natural writing style that needs less "de-robotifying" than most.</p><h3>Claude's signature strengths</h3><ul><li><strong>Long documents:</strong> it can hold entire books' worth of text in one conversation.</li><li><strong>Writing quality:</strong> prose that sounds human — great for essays, emails and articles.</li><li><strong>Careful reasoning:</strong> strong at weighing trade-offs and following complex instructions.</li><li><strong>Honesty about uncertainty:</strong> more likely to say "I'm not sure" than to bluff.</li></ul><p>You don't have to pick one AI forever — professionals keep 2-3 assistants and route tasks to the best one. This course teaches you exactly when Claude is that best one.</p>`,
        },
        {
          title: "The Context Window Advantage",
          summary: "Why Claude eats 200-page documents for breakfast",
          content: `<p>An AI's context window is how much it can "hold in mind" at once. Claude's is enormous — hundreds of pages in a single conversation.</p><h3>What this unlocks</h3><ul><li>Upload an entire contract, thesis or annual report and ask questions across all of it.</li><li>Compare multiple long documents against each other in one chat.</li><li>Have very long working sessions without the model forgetting your earlier instructions.</li></ul><p>Practical tip: give Claude the <em>whole</em> document rather than a fragment. AI quality collapses when key context is missing — with Claude you rarely need to trim. Then ask precise questions: "Which clauses create obligations for us after termination?" beats "summarize this contract".</p>`,
        },
        {
          title: "Prompting Claude Well",
          summary: "Structure, XML-style tags and explicit instructions",
          content: `<p>The universal prompting formula (role + context + task + format) works everywhere, but Claude especially rewards <strong>structured</strong> prompts.</p><h3>Claude-specific tips</h3><ul><li><strong>Use clear sections.</strong> Separate instructions from material: "Here are the rules: … Here is the text to edit: …"</li><li><strong>Be explicit about depth.</strong> Claude follows nuance well: "Give a balanced view, strongest argument on each side, then your recommendation."</li><li><strong>Ask for thinking.</strong> "Think through this step by step before answering" measurably improves hard answers.</li><li><strong>Set the persona.</strong> "You are a meticulous copy editor who preserves the author's voice."</li></ul><p>Claude is unusually good at following long lists of instructions — so don't be shy about giving it your full style guide.</p>`,
        },
        {
          title: "Writing & Editing with Claude",
          summary: "First drafts, rewrites and voice-matching",
          content: `<p>Writing is where Claude earns its fans. Its drafts tend to be warmer and less formulaic.</p><h3>The workflow</h3><ul><li><strong>Brief deeply:</strong> audience, purpose, key points, what to avoid. Paste writing samples to clone your voice.</li><li><strong>Draft, then interrogate:</strong> "What's the weakest paragraph and why?" Claude critiques its own work well.</li><li><strong>Edit in passes:</strong> structure first, then clarity, then tone — asking for one type of fix per pass beats "make it better".</li><li><strong>Preserve authorship:</strong> ask for edits and options, not wholesale replacements, when the text matters.</li></ul><p>Try the same brief in Claude and another AI and compare — building your own taste for which model writes best for <em>your</em> voice is a genuine professional skill.</p>`,
        },
        {
          title: "Artifacts: Create Alongside the Chat",
          summary: "Documents, code and mini-apps in a side panel",
          content: `<p>When you ask Claude to create something substantial — a document, a webpage, a diagram, even a small interactive app — it opens an <strong>Artifact</strong>: a dedicated side panel holding the work, separate from the conversation.</p><h3>Why this matters</h3><ul><li>The artifact updates in place as you request changes — no scrolling through chat history for the latest version.</li><li>Code artifacts can actually <em>run</em>: ask for a calculator, a quiz or a chart and use it immediately.</li><li>You can copy, download or publish artifacts when done.</li></ul><p>Try it: "Create a one-page project brief template I can reuse" or "Build me a simple interactive checklist for onboarding new clients". Watch the artifact appear — then refine it conversationally.</p>`,
        },
      ],
    },
    {
      title: "Claude at Work",
      lessons: [
        {
          title: "Projects & Knowledge",
          summary: "Give Claude permanent context about your work",
          content: `<p>Claude Projects let you group chats around a goal and attach <strong>knowledge files</strong> — documents every conversation in that project can see.</p><h3>Setup that pays off</h3><ul><li>Create a project per client, product or recurring responsibility.</li><li>Upload the essentials: brand guide, product specs, key processes, past examples.</li><li>Add project instructions: "Always use our tone of voice; prices are in EUR; our audience is small business owners."</li></ul><p>Now every chat starts pre-loaded. Instead of re-explaining your business for the hundredth time, you ask the question directly and get an answer that already fits your world. This is the single biggest quality-of-life upgrade for regular Claude users.</p>`,
        },
        {
          title: "Analysis & Research Partner",
          summary: "Summarize, compare, extract and reason over sources",
          content: `<p>Claude excels at reading carefully and reasoning about what it read — which makes it a research workhorse.</p><h3>High-value patterns</h3><ul><li><strong>Multi-document synthesis:</strong> "Across these three reports, where do the authors disagree?"</li><li><strong>Structured extraction:</strong> "Pull every deadline and obligation from this contract into a table."</li><li><strong>Steelmanning:</strong> "Argue the strongest case against my plan, then rate my rebuttals."</li><li><strong>Learning:</strong> "Explain this paper's method as if I know statistics but not machine learning."</li></ul><p>For anything factual and recent, remember Claude's knowledge has a training cutoff — paste in current material rather than trusting memory, and verify high-stakes claims at the source.</p>`,
        },
        {
          title: "Claude for Data & Code",
          summary: "Spreadsheets, quick scripts and 'explain this code'",
          content: `<p>You don't need to be a programmer to benefit from Claude's technical side.</p><h3>For non-coders</h3><ul><li>Paste CSV data and ask for trends, outliers and a plain-English readout.</li><li>Ask for spreadsheet formulas: "Excel formula to average sales for rows where region is West."</li><li>"Explain what this script does line by line" — great for inherited files and automations.</li></ul><h3>For dabblers</h3><ul><li>Build small tools as artifacts: converters, calculators, form generators.</li><li>Debug: paste the error message and the code; Claude explains the cause, not just the fix.</li></ul><p>Treat outputs like a junior analyst's work: fast, usually right, always worth a review before it touches anything important.</p>`,
        },
        {
          title: "Choosing Claude vs Other AIs",
          summary: "A practical routing guide for your daily tasks",
          content: `<p>The pros don't debate "which AI is best" — they route each task to the tool that wins at it.</p><h3>Reach for Claude when…</h3><ul><li>The input is <strong>long</strong>: contracts, transcripts, books, big reports.</li><li>The output must <strong>read beautifully</strong>: essays, sensitive emails, articles.</li><li>The task needs <strong>careful judgment</strong>: trade-offs, policy questions, nuanced feedback.</li></ul><h3>Reach elsewhere when…</h3><ul><li>You need <strong>live web data</strong> or shopping/travel searches.</li><li>You need <strong>image generation</strong> as the core task.</li><li>You're deep in a specific ecosystem (e.g., Google Workspace → Gemini).</li></ul><p>Run one real task through two AIs this week and compare. Your own head-to-head results beat any online opinion.</p>`,
        },
        {
          title: "Your Claude Playbook",
          summary: "Lock in a weekly routine that compounds",
          content: `<p>Time to systematize. Pick the Claude patterns that fit your work and make them habits.</p><h3>The starter playbook</h3><ul><li><strong>One project</strong> set up with your core documents and instructions.</li><li><strong>Three saved prompts</strong> for recurring work: your weekly summary, your draft-and-critique loop, your document-analysis question set.</li><li><strong>One artifact template</strong> you reuse — a brief, checklist or report skeleton.</li><li><strong>A verification habit</strong> for anything factual or high-stakes.</li></ul><p>Review after two weeks: what saved the most time? Double down there. You've completed the Claude course — claim your certificate, and let Claude handle the heavy reading while you make the calls.</p>`,
        },
      ],
    },
  ],
};
