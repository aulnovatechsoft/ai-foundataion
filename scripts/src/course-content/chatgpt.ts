import type { CourseSeed } from "./types";

export const CHATGPT_COURSE: CourseSeed = {
  slug: "chatgpt",
  title: "ChatGPT",
  tagline: "Master the world's most popular AI assistant",
  description:
    "Go from casual user to power user. Learn every ChatGPT mode, feature and workflow — writing, analysis, voice, images and custom GPTs — through short, hands-on lessons.",
  icon: "🟢",
  color: "#DCFCE7",
  accent: "#16A34A",
  sortOrder: 1,
  units: [
    {
      title: "ChatGPT Foundations",
      lessons: [
        {
          title: "Meet ChatGPT",
          summary: "What ChatGPT is, what it's great at, and where it fits in your day",
          content: `<p>ChatGPT is a conversational AI built on a large language model. You type (or say) what you need in plain language, and it responds — drafting text, answering questions, brainstorming, explaining, translating and more.</p><p>The most important mindset shift: ChatGPT is not a search engine. It doesn't look up a fixed answer — it <strong>generates</strong> one based on patterns learned from vast amounts of text. That makes it incredibly flexible, and it also means you should verify facts that matter.</p><h3>Where it shines</h3><ul><li>First drafts of emails, posts and documents</li><li>Summarizing and simplifying long or complex text</li><li>Brainstorming ideas and structuring plans</li><li>Explaining anything at the exact level you need</li></ul><p>In this course you'll go feature by feature until ChatGPT feels like a natural extension of how you work.</p>`,
        },
        {
          title: "Discovering Modes & Features",
          summary: "Know which ChatGPT mode and feature fits your need",
          content: `<p>Most people who use ChatGPT are only scratching the surface. There's a whole layer of modes and features that completely changes how you interact with it: Instant Mode for speed, Thinking Mode for complex reasoning, plus features like Web Search, Deep Research, file uploads and image creation. Match the mode and feature to the task, and you'll get better results faster.</p>`,
          steps: [
            {
              html: `<h3>Endless possibilities with ChatGPT</h3><p>Most people who use ChatGPT are only scratching the surface — and don't even know it. They type a question, get an answer, and call it a day. It works — but it's a fraction of what the tool can actually do. There's a whole layer of <strong>modes and features</strong> that completely changes how you interact with it.</p><h3>Your first ChatGPT challenge</h3><p>Imagine you're preparing for a job interview. You need company research, a tailored answer to "tell me about yourself," and three practice questions — all from ChatGPT. Using the same approach for all three would slow you down. This lesson shows you how to match the right ChatGPT mode and feature to the right task.</p><p>Previously, ChatGPT operated on different models (GPT-3, GPT-4, o-3…), each best at a specific thing. Since then, ChatGPT runs on its single most powerful model by default. Now that you know how to prompt well, you can go one step further — choosing the right <strong>mode</strong> for your task, so you stop over-prompting and start working smarter.</p>`,
              question: {
                text: "Say you need to quickly write a summary section in your resume ASAP. What would you choose?",
                options: [
                  "A mode that asks clarifying questions about your preferences first",
                  "A mode that generates summary options immediately",
                ],
                correctIndex: 1,
                explanation:
                  "Clarification can improve results, but for simple, time-sensitive tasks it adds unnecessary friction. For quick, straightforward tasks, Instant Mode is your best choice — it prioritizes speed and delivers results without additional questions.",
              },
            },
            {
              html: `<h3>When speed isn't enough</h3><p>Complex tasks need more processing power. Instant Mode won't deliver the depth required for advanced, multi-step work. That's what <strong>Thinking Mode</strong> is for — it's specifically designed for tasks that require reasoning and synthesis.</p><p>In fact, ChatGPT can recognize task complexity automatically — if you enable <em>Auto-switch to Thinking</em> in the Configure settings, it decides when to use Thinking Mode based on your request. But if you want to guarantee deep processing for a complex task, manually selecting Thinking Mode ensures full power.</p><div class="discovery"><p>💡 <strong>First Discovery</strong></p><p>Think of ChatGPT modes as different engines:</p><ul><li><strong>Instant</strong> is built for speed</li><li><strong>Thinking</strong> is built for complex tasks</li><li><strong>Auto-switch to Thinking</strong> goes deep automatically (enable in Configure → Intelligence)</li></ul><p>Match the mode to the task, and you'll get better results faster.</p></div>`,
              question: {
                text: "You're asking ChatGPT to build a 3-month career transition plan comparing salaries, skill gaps and learning paths across two industries. Which mode fits?",
                options: [
                  "Instant Mode — it's always the fastest",
                  "Thinking Mode — multi-step reasoning and synthesis",
                ],
                correctIndex: 1,
                explanation:
                  "Multi-step analysis that weighs several factors is exactly what Thinking Mode is designed for. Instant Mode would give you a shallower answer faster.",
              },
            },
            {
              html: `<h3>ChatGPT's features</h3><p>Choosing the right mode is just the beginning. ChatGPT also has specialized <strong>features</strong> that enhance specific types of tasks.</p><p><strong>Feature 1: Web Search</strong> — pulls current information from the internet: news, company updates, recent developments. Perfect for company research, current events and product launches. In the job-hunt scenario: you're interviewing at Nike and need their latest news — Web Search pulls current Nike news directly into the chat, no digging through news sites yourself.</p><p><strong>Feature 2: Deep Research</strong> — built for long, comprehensive, multi-source analysis. It examines dozens of sources, synthesizes findings and produces detailed reports. Use it for academic papers, market analysis and competitive landscape reports.</p>`,
              question: {
                text: "For the interview prep task — quickly researching the company's latest news — which feature is the best fit?",
                options: ["Study and Learn", "Deep Research", "Web Search"],
                correctIndex: 2,
                explanation:
                  "Web Search is fast and pulls current information without over-complication. Deep Research handles intensive analysis over time — think academic papers — and takes significantly longer. For quick company info, Web Search is faster and sufficient.",
              },
            },
            {
              html: `<h3>More tools in the toolkit</h3><p><strong>Feature 3: Add Photos & Files</strong> — upload images (PNG, JPG, PDF) and documents (Word, Excel, text) for ChatGPT to analyze, summarize or reference. Upload a resume to edit it, an Excel sheet to analyze, a screenshot to extract text from.</p><p><strong>Feature 4: Create Images</strong> — describe what you need visually and ChatGPT generates it: portfolio visuals, logos, presentation graphics, social media visuals.</p><p>Other specialized features: <strong>Shopping Research</strong> compares products and deals across retailers; <strong>Study and Learn</strong> creates study plans and quizzes from uploaded materials; <strong>Canvas</strong> opens a side-by-side editor for iterative writing and coding projects.</p><div class="discovery"><p>💡 <strong>Second Discovery</strong></p><p>ChatGPT's features are tools in a toolkit:</p><ul><li><strong>Web Search</strong> for current info (fast)</li><li><strong>Deep Research</strong> for comprehensive analysis (slow)</li><li><strong>Files/Photos</strong> for analyzing uploads</li><li><strong>Image Creation</strong> for visual content</li></ul></div>`,
              question: {
                text: "You want ChatGPT to tidy up your resume. What's the most direct way?",
                options: [
                  "Retype the whole resume into the chat",
                  "Upload the file with Add Photos & Files and ask for edits",
                  "Use Create Images to generate a new resume",
                ],
                correctIndex: 1,
                explanation:
                  "Add Photos & Files lets ChatGPT read your actual document — upload the resume and ask for specific improvements.",
              },
            },
          ],
        },
        {
          title: "Writing Great Prompts",
          summary: "The 4-part formula that upgrades every answer",
          content: `<p>The single highest-leverage ChatGPT skill is prompting. A great prompt has four parts:</p><ul><li><strong>Role</strong> — who the AI should act as: "You are a senior recruiter…"</li><li><strong>Context</strong> — the background it needs: "I'm applying for a data analyst role at a bank…"</li><li><strong>Task</strong> — exactly what you want: "Rewrite my summary to highlight analytics wins."</li><li><strong>Format</strong> — how you want it delivered: "Under 80 words, confident tone, no buzzwords."</li></ul><p>Compare "write about dogs" with "You are a vet. Write a friendly 100-word guide for first-time puppy owners on the three vaccinations that matter most." Same tool, wildly different output.</p><p>You don't need all four parts every time — but when an answer disappoints, add the missing parts and regenerate. That loop is how professionals work.</p>`,
        },
        {
          title: "Follow-ups & Iteration",
          summary: "Treat ChatGPT like a conversation, not a slot machine",
          content: `<p>Beginners take the first answer and leave. Power users treat the first answer as a starting point.</p><p>ChatGPT remembers the whole conversation, so you can steer it: "shorter", "more formal", "give me three alternatives", "now turn it into a table", "explain that second point more deeply". Each follow-up compounds on everything before it.</p><h3>Useful iteration moves</h3><ul><li><strong>Tighten:</strong> "Cut this by half without losing the key message."</li><li><strong>Retone:</strong> "Same content, but warmer and less corporate."</li><li><strong>Options:</strong> "Give me 3 versions: bold, safe and playful."</li><li><strong>Critique:</strong> "What's weak about this draft? Then fix it."</li></ul><p>Rule of thumb: if you haven't sent at least one follow-up, you probably haven't gotten ChatGPT's best work yet.</p>`,
        },
        {
          title: "Stay Organized: Chats, Projects & History",
          summary: "Keep your work findable and reusable",
          content: `<p>Your ChatGPT history is an asset. A little organization makes it compound.</p><h3>Habits that pay off</h3><ul><li><strong>One topic per chat.</strong> Mixing your marketing plan and your travel itinerary in one thread confuses both you and the model.</li><li><strong>Rename chats</strong> to something you'll recognize in a month ("Q3 newsletter drafts", not "New chat").</li><li><strong>Use projects/folders</strong> to group related chats and files — everything in a project shares context.</li><li><strong>Pin or save killer prompts.</strong> When a prompt works brilliantly, store it somewhere you can reuse it.</li></ul><p>Search your history before starting from scratch — the summary format you perfected last month is one search away. Organized users get faster every week; disorganized ones start over every day.</p>`,
        },
      ],
    },
    {
      title: "Everyday Superpowers",
      lessons: [
        {
          title: "Voice Mode",
          summary: "Talk to ChatGPT hands-free — and why you'd want to",
          content: `<p>Voice mode turns ChatGPT into a spoken conversation partner. Tap the voice icon and just talk — it listens, thinks and replies out loud.</p><h3>Where voice beats typing</h3><ul><li><strong>Thinking out loud:</strong> ramble about a messy problem and ask it to summarize what you actually said.</li><li><strong>Practice conversations:</strong> rehearse an interview, a salary negotiation or a difficult conversation.</li><li><strong>Language learning:</strong> real spoken practice with instant, patient corrections.</li><li><strong>On the move:</strong> draft ideas while walking or commuting.</li></ul><p>Tip: voice conversations are saved as text in your history, so nothing is lost — you can continue any spoken chat later by typing.</p>`,
        },
        {
          title: "Summarize Anything",
          summary: "Turn long content into decisions in seconds",
          content: `<p>Summarization is the most reliably useful AI skill. The trick is telling ChatGPT <em>what kind</em> of summary you need — a summary for a decision is different from a summary for memory.</p><h3>Three power patterns</h3><ul><li><strong>Executive:</strong> "Summarize this in 3 bullets a busy manager could act on."</li><li><strong>Decision-focused:</strong> "What are the key decisions and open questions in this thread?"</li><li><strong>Learning:</strong> "Summarize this article, then list 3 concepts I should learn next."</li></ul><p>Paste meeting notes, long emails, reports or articles. Always name the audience and length: "2 sentences for a client" produces something completely different from "detailed notes for my own study".</p>`,
        },
        {
          title: "Write & Rewrite Like a Pro",
          summary: "Emails, posts and docs in your voice, not robot voice",
          content: `<p>ChatGPT drafts fast, but the magic is in making the output sound like <strong>you</strong>.</p><h3>The pro workflow</h3><ul><li><strong>Show your voice:</strong> paste 2-3 things you've written and say "match this style".</li><li><strong>Brief it like a colleague:</strong> audience, goal, key points, tone, length.</li><li><strong>Ask for options:</strong> three subject lines, two openings — pick and blend.</li><li><strong>Final pass is yours:</strong> read it aloud, fix anything you'd never say.</li></ul><p>Rewriting is even more powerful than writing: paste a clunky paragraph and say "make this clearer and half as long". You stay the author; ChatGPT becomes your editor. That's the balance where quality and authenticity meet.</p>`,
        },
        {
          title: "ChatGPT & Apps",
          summary: "Bring ChatGPT into the tools you already use",
          content: `<p>ChatGPT doesn't live only at chatgpt.com — it's on your phone, your desktop and inside other tools.</p><h3>The ecosystem</h3><ul><li><strong>Mobile apps</strong> (iOS/Android) — voice mode, camera input, and chat that syncs with the web.</li><li><strong>Desktop app</strong> — a keyboard shortcut away from any task; can look at your screen to help in context.</li><li><strong>Integrations</strong> — connect files from Google Drive, use it inside productivity suites, or automate flows with tools like Zapier.</li></ul><p>The principle: reduce the distance between where a question appears and where you ask it. When ChatGPT is one shortcut away, you use it 10x more — and that's where the compounding productivity gains come from.</p>`,
        },
        {
          title: "Analyze Files & Data",
          summary: "Upload PDFs and spreadsheets, get instant insight",
          content: `<p>Upload a file — PDF, Word doc, spreadsheet, CSV — and ChatGPT can read, summarize, extract and analyze it.</p><h3>What to try</h3><ul><li><strong>Contracts & reports:</strong> "Summarize the key terms and flag anything unusual."</li><li><strong>Spreadsheets:</strong> "What are the trends here? Which product is underperforming?"</li><li><strong>Many files:</strong> upload several documents and ask questions across all of them.</li><li><strong>Charts:</strong> "Turn this data into a clear chart and explain what it shows."</li></ul><p>Data analysis mode actually writes and runs code behind the scenes, so calculations are computed, not guessed. Still, sanity-check important numbers — you're the analyst; ChatGPT is your very fast assistant.</p>`,
        },
      ],
    },
    {
      title: "Power User Level",
      lessons: [
        {
          title: "Image Generation with ChatGPT",
          summary: "Describe a picture, get a picture — and refine it",
          content: `<p>Ask ChatGPT to "create an image of…" and it generates one from your description. The skill is describing well.</p><h3>A strong image prompt names</h3><ul><li><strong>Subject:</strong> what's in the image and what it's doing</li><li><strong>Style:</strong> photo, watercolor, flat illustration, 3D render…</li><li><strong>Mood & light:</strong> warm sunrise, dramatic shadows, soft pastel</li><li><strong>Purpose:</strong> "as a wide blog header", "as a square logo concept"</li></ul><p>Because it's conversational, you can refine: "make it warmer", "remove the text", "same scene at night". Iterate in small steps rather than rewriting the whole prompt each time.</p><p>Great for social posts, presentation visuals, mockups and concept art — anywhere "good and fast" beats "perfect and slow".</p>`,
        },
        {
          title: "Custom Instructions & Memory",
          summary: "Teach ChatGPT who you are — once",
          content: `<p>Tired of repeating "keep it short" and "I'm a marketer" in every chat? Set it once.</p><h3>Two personalization layers</h3><ul><li><strong>Custom instructions:</strong> tell ChatGPT about you and how you want answers ("I run a small bakery; keep answers practical; UK English; no fluff"). Applies to every new chat.</li><li><strong>Memory:</strong> ChatGPT can remember facts across conversations — your projects, preferences, goals. You can view and delete anything it remembers.</li></ul><p>Five minutes of setup saves you a sentence of context in every single future conversation, and answers get noticeably more relevant. Review your custom instructions monthly — as your work changes, update them like you'd update your email signature.</p>`,
        },
        {
          title: "Custom GPTs",
          summary: "Build your own specialized assistant — no code",
          content: `<p>A custom GPT is your own version of ChatGPT with baked-in instructions, knowledge files and personality — built by filling in a form, no programming required.</p><h3>Ideas that work</h3><ul><li>A <strong>brand-voice writer</strong> loaded with your style guide and best posts</li><li>An <strong>onboarding buddy</strong> that knows your team's docs and FAQs</li><li>A <strong>proposal generator</strong> that follows your exact template</li></ul><p>You describe what it should do, upload reference files, set the tone — done. Use it yourself, share a link with your team, or publish it to the GPT store.</p><p>The mental shift: stop re-prompting the same setup daily, and package your best prompt <em>as a product</em> you and others can reuse.</p>`,
        },
        {
          title: "Fact-Checking & Limitations",
          summary: "Use ChatGPT confidently without getting burned",
          content: `<p>ChatGPT sometimes states wrong things with total confidence — these are called hallucinations. Power users aren't the ones who never see errors; they're the ones with a verification habit.</p><h3>The trust framework</h3><ul><li><strong>Low stakes</strong> (brainstorms, drafts, explanations): use freely.</li><li><strong>Medium stakes</strong> (client emails, summaries you'll share): read carefully, fix errors.</li><li><strong>High stakes</strong> (legal, medical, financial, statistics, citations): verify every claim with a primary source.</li></ul><p>Helpful moves: ask "how confident are you, and what should I double-check?", request sources and actually open them, and use web browsing for anything recent. ChatGPT is a brilliant thinking partner — you remain the editor-in-chief.</p>`,
        },
        {
          title: "Your ChatGPT Workflow",
          summary: "Combine everything into a daily system",
          content: `<p>Final lesson: turn features into a <strong>system</strong>. Skills you don't wire into your routine fade in a week.</p><h3>Build your personal playbook</h3><ul><li><strong>Pick 3 recurring tasks</strong> you do weekly (status update, meeting prep, content draft…).</li><li><strong>Craft one great prompt for each</strong>, using role + context + task + format.</li><li><strong>Store them</strong> — in a project, a note, or a custom GPT.</li><li><strong>Trigger them by calendar</strong>: Monday planning prompt, Friday review prompt.</li></ul><p>Then keep one experiment slot per week — try one feature you haven't used (voice, files, images) on a real task. Congratulations: you've completed the ChatGPT course. Claim your certificate and put your new workflow to work.</p>`,
        },
      ],
    },
  ],
};
