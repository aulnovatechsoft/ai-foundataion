import type { UnitSeed } from "./types";

export const PERPLEXITY_UNIT_1: UnitSeed = {
  title: "Perplexity",
  lessons: [
    {
      title: "What Is Perplexity?",
      summary: "Why Perplexity is an answer engine, not a search engine or chatbot — and when to reach for it in daily life",
      estimatedMinutes: 13,
      content: `<p>Perplexity doesn't hand you ten blue links, and it doesn't just chat. It reads the web for you and answers your question directly — with sources attached. Before any feature or setting, the real shift is learning when to reach for it and how to talk to it.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Ask Perplexity a real question you'd normally Google for work: 'What are the current best practices for [a task in my field], and what's changed in the last year? Summarize in five bullet points with sources.' Then click through a couple of the citations to see where the answer came from.",
        note: "Notice that every claim links to a source — get in the habit of skimming those citations rather than trusting the answer blindly.",
      },
      steps: [
        {
          html: `<h3>Answer engine, not search engine</h3><p>A search engine like Google gives you a <strong>list of links</strong> and leaves the reading, comparing, and summarizing to you. Perplexity is an <strong>answer engine</strong>: you ask a real question, and it reads across multiple sources, then writes you a direct answer.</p><p>The magic isn't just the answer — it's the <strong>citations</strong>. Every claim links back to the source it came from, so you can check the receipts instead of trusting a black box.</p>`,
          question: {
            text: "You want to know 'Is the new pricing for Notion cheaper than Coda for a 5-person team?' What does Perplexity do that a plain Google search doesn't?",
            options: [
              "It shows you a list of links to sort through yourself",
              "It reads the sources and writes a direct comparison with citations you can verify",
              "It refuses because that's too specific",
            ],
            correctIndex: 1,
            explanation:
              "An answer engine synthesizes across sources and answers the actual question — then cites where each fact came from. A search engine would just hand you links to compare on your own.",
          },
        },
        {
          html: `<h3>Answer engine vs. chatbot</h3><p>A general chatbot writes from what it memorized during training, so it can sound confident about things that are outdated or simply wrong. Perplexity leans on <strong>live web sources</strong> and shows them, which makes it far stronger for questions where <em>freshness and accuracy matter</em>.</p><ul><li><strong>Chatbot</strong> — great for drafting, brainstorming, rewriting</li><li><strong>Perplexity</strong> — great for "what's true right now, and how do you know?"</li></ul><p>Think of Perplexity as the tool you trust when you'd otherwise say "let me look that up."</p>`,
          question: {
            text: "You need the current return policy for a store before you buy something today. Why is Perplexity a safer bet than a general chatbot?",
            options: [
              "Chatbots can't write full sentences",
              "Perplexity pulls from live sources and cites them, so you can confirm the policy is current",
              "Perplexity is always funnier",
            ],
            correctIndex: 1,
            explanation:
              "Policies change. A chatbot may repeat stale training data, while Perplexity fetches current sources and links them so you can verify before you buy.",
          },
        },
        {
          html: `<h3>Where it fits in your day</h3><p>Perplexity shines for the small research jobs that pile up:</p><ul><li><strong>Fact checks</strong> — "Did that headline actually say what my group chat claims?"</li><li><strong>Purchases</strong> — "Which of these three air purifiers is best for pet allergies?"</li><li><strong>Quick research</strong> — "What are the main risks of switching our team to this software?"</li><li><strong>Prep</strong> — "Give me a 5-point brief on this company before my meeting."</li></ul><p>Whenever you'd open six tabs and start comparing, that's a Perplexity moment.</p>`,
          question: {
            text: "You're about to open a dozen tabs to compare standing desks before buying one. What's the Perplexity-minded move?",
            options: [
              "Ask Perplexity to compare the top options and cite reviews, then dig into the tabs that matter",
              "Keep all twelve tabs and read every page top to bottom",
              "Just buy the first one you see",
            ],
            correctIndex: 0,
            explanation:
              "Perplexity is built for exactly this 'many tabs' moment. Let it synthesize and cite the comparison first, then you only dive deep where it counts.",
          },
        },
        {
          html: `<h3>Trust, but verify</h3><p>Cited answers are Perplexity's superpower, but citations are an <em>invitation to check</em>, not a guarantee. For anything that really matters — a big purchase, a claim you'll repeat to your boss, a health question — click through and confirm the source actually says what the answer claims.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Hover or tap the little numbered citations to see exactly which source backs each sentence. If a key claim has <em>no</em> citation, treat it with extra caution and ask a follow-up.</p></div>`,
          question: {
            text: "Perplexity gives you a stat you plan to put in a report for your boss. What should you do before pasting it in?",
            options: [
              "Paste it immediately — it came from an AI so it's fine",
              "Click the citation to confirm the source actually supports that exact number",
              "Delete the whole answer and start over in Google",
            ],
            correctIndex: 1,
            explanation:
              "Citations exist so you can verify. For anything going to your boss, click through and confirm the source really backs the claim before you rely on it.",
          },
        },
        {
          html: `<h3>Free vs. Pro</h3><p>Perplexity has a capable <strong>free</strong> tier for everyday questions, plus a <strong>Pro</strong> subscription that unlocks more:</p><ul><li>More of the deeper search modes (like Pro Search and Deep Research) each day</li><li>Choice of underlying <strong>AI models</strong></li><li>Higher limits on file uploads and heavier tasks</li></ul><p>You don't need Pro to get value on day one. Start free, and upgrade once you notice yourself hitting limits on the harder research jobs.</p>`,
          question: {
            text: "You only use Perplexity a few times a week for quick fact checks. What's the sensible starting point?",
            options: [
              "Buy Pro immediately, just in case",
              "Start on the free tier and upgrade only if you regularly hit limits",
              "Avoid it entirely unless you pay",
            ],
            correctIndex: 1,
            explanation:
              "Light, everyday use fits the free tier well. Upgrading makes sense once deeper modes and higher limits become a real bottleneck — not before.",
          },
        },
        {
          html: `<h3>The mindset: ask questions, not keywords</h3><p>Old search trained us to type fragments: "best laptop 2026 cheap." Perplexity rewards the opposite — <strong>full, natural questions with context</strong>.</p><ul><li>❌ "laptop cheap work"</li><li>✅ "What's a reliable laptop under $800 for spreadsheets and video calls that has good battery life?"</li></ul><p>The more context you give — your budget, your goal, your constraints — the more the answer feels tailored to <em>you</em> instead of the average person.</p><h3>Where you're headed</h3><p>You now know what Perplexity is and when to reach for it. Next up: <strong>Perplexity's Modes and Features</strong> — how quick search, Pro Search, and Deep Research each fit a different kind of question.</p>`,
          question: {
            text: "You want travel-friendly headphones for long flights on a tight budget. Which prompt gets the most useful answer?",
            options: [
              '"headphones cheap"',
              '"What are the best noise-cancelling headphones under $150 for long flights, prioritizing battery life and comfort?"',
              '"good headphones??"',
            ],
            correctIndex: 1,
            explanation:
              "Full questions with context — budget, use case, priorities — let Perplexity tailor the answer. Keyword fragments force it to guess who you are and what you need.",
          },
        },
      ],
    },
    {
      title: "Perplexity's Modes and Features",
      summary: "Quick search, Pro Search, and Deep Research — plus models, follow-ups, and file uploads for everyday jobs",
      estimatedMinutes: 14,
      content: `<p>Not every question needs the same firepower. Perplexity gives you a few gears — from instant answers to full research reports — and knowing which to shift into saves time and gets better results. This lesson maps each mode to the everyday jobs it's built for.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Run the same topic through two gears. First ask a quick question: 'What is [a concept in my field] in plain terms?' Then switch to Deep Research and ask: 'Give me a thorough, cited overview of [that topic], including where experts disagree and what's changed recently.' Compare how the two answers differ.",
        note: "Feel the trade-off: a quick answer is fast, Deep Research is deeper but slower — match the gear to how much the decision matters.",
      },
      steps: [
        {
          html: `<h3>Quick search: the everyday default</h3><p><strong>Quick search</strong> is the fast lane. Ask, get a cited answer in seconds. It's perfect for the small stuff:</p><ul><li>"What time does this store close today?"</li><li>"Is this news headline accurate?"</li><li>"What's the difference between HSA and FSA?"</li></ul><p>For most daily questions, quick search is all you need — don't reach for heavier modes when a fast answer will do.</p>`,
          question: {
            text: "You just want to confirm whether a headline your uncle shared is real before replying. Which mode fits?",
            options: [
              "Deep Research — spend several minutes on a full report",
              "Quick search — a fast cited answer is exactly right here",
              "None; you can't fact-check headlines",
            ],
            correctIndex: 1,
            explanation:
              "A single fact check is a quick-search job. Deep Research would be overkill for something a fast, cited answer settles in seconds.",
          },
        },
        {
          html: `<h3>Pro Search: when it's worth it</h3><p><strong>Pro Search</strong> works harder. It asks clarifying questions, runs multiple searches, and reasons across more sources before answering. Reach for it when the question has <em>layers</em>:</p><ul><li>Comparing several products on multiple factors</li><li>Understanding a topic well enough to explain it to your team</li><li>Weighing pros and cons of a decision</li></ul><p>It takes a little longer, but the answer is noticeably more thorough and better organized.</p>`,
          question: {
            text: "You're choosing project-management software for your team and care about price, integrations, and ease of use. Which mode earns its keep?",
            options: [
              "Quick search — grab the first result and move on",
              "Pro Search — it reasons across multiple sources and factors for a layered comparison",
              "No mode can compare more than one thing",
            ],
            correctIndex: 1,
            explanation:
              "Multi-factor comparisons are exactly where Pro Search pays off — it digs across more sources and organizes the trade-offs, which a single quick answer can't.",
          },
        },
        {
          html: `<h3>Deep Research: the full report</h3><p><strong>Deep Research</strong> is the heavy lifter. It runs many searches, reads widely, and produces a longer, structured report — closer to something an analyst would hand you. Save it for jobs where thoroughness is the whole point:</p><ul><li>A market or competitor overview before a big decision</li><li>An in-depth brief on an industry trend for your boss</li><li>Serious upskilling on an unfamiliar topic</li></ul><p>It takes minutes, not seconds — that patience buys you depth.</p>`,
          question: {
            text: "Your manager asks for a thorough brief on how AI regulation is trending across major markets. Which mode fits the ask?",
            options: [
              "Quick search — a one-line answer will satisfy your manager",
              "Deep Research — it builds the longer, structured report the task calls for",
              "Skip it; Perplexity can't handle big topics",
            ],
            correctIndex: 1,
            explanation:
              "A thorough, structured brief across markets is precisely the Deep Research use case. Quick search can't deliver the depth and organization a manager expects here.",
          },
        },
        {
          html: `<h3>Choosing a model</h3><p>On paid tiers, Perplexity lets you pick the underlying <strong>AI model</strong> that writes the answer. Different models have different strengths — some are faster, some reason more carefully, some write more fluidly. You don't need to memorize them.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Stick with the default for everyday questions. Only switch models when you have a specific reason — for example, wanting a more careful reasoning model for a tricky comparison. Changing models rarely fixes a vague question.</p></div>`,
          question: {
            text: "Your answers feel shallow, and you've been typing one-line questions. What's the smarter first fix?",
            options: [
              "Cycle through every model hoping one reads your mind",
              "Add context and detail to your question before touching the model picker",
              "Give up on Perplexity",
            ],
            correctIndex: 1,
            explanation:
              "A vague question is the usual culprit, not the model. Add context first — model-switching helps only for specific, deliberate reasons.",
          },
        },
        {
          html: `<h3>Follow-ups keep the thread</h3><p>Every conversation lives in a <strong>thread</strong>, and Perplexity remembers the context. That means you can refine without starting over:</p><ul><li>"Now compare just the top two."</li><li>"Which of those works offline?"</li><li>"Summarize that as three bullet points for my boss."</li></ul><p>Treat it like talking to a sharp research assistant — narrow, zoom, and reshape the answer with each follow-up instead of re-asking from scratch.</p>`,
          question: {
            text: "Perplexity gave you five vacation-spot options, but you only care about the two with direct flights. Best next move?",
            options: [
              "Start a brand-new question describing everything again",
              "Ask a follow-up in the same thread: 'Of these, which have direct flights from my city?'",
              "Accept all five since you can't narrow it",
            ],
            correctIndex: 1,
            explanation:
              "Threads keep context, so a follow-up refines the existing answer instantly. Re-asking from scratch throws away everything Perplexity already knows.",
          },
        },
        {
          html: `<h3>Upload files to analyze</h3><p>Perplexity can also read documents <em>you</em> give it. Upload a <strong>PDF, contract, or report</strong> and ask questions about it:</p><ul><li>"Summarize the key obligations in this contract."</li><li>"What are the three main takeaways from this report?"</li><li>"Does this lease mention anything about pets?"</li></ul><p>This turns a dense document into a conversation — you ask, it points you to the relevant parts. Still verify anything high-stakes against the original text.</p><h3>Wrapping up</h3><p>You can now match the mode to the job and pull in your own files. Next: <strong>Search Operators & Filters</strong> — how to steer <em>where</em> Perplexity looks and <em>what shape</em> the answer takes.</p>`,
          question: {
            text: "You get a 30-page vendor contract and need to spot the cancellation terms fast. What's the efficient approach?",
            options: [
              "Read all 30 pages twice before doing anything else",
              "Upload the PDF and ask Perplexity to find and summarize the cancellation terms, then verify that section",
              "Guess the terms based on other contracts",
            ],
            correctIndex: 1,
            explanation:
              "File upload lets you interrogate the document directly and jump to the relevant clause — then you confirm the exact wording, since it's high-stakes.",
          },
        },
      ],
    },
    {
      title: "Search Operators & Filters",
      summary: "Steer where Perplexity looks with focus modes and filters — and shape the answer into the format you need",
      estimatedMinutes: 13,
      content: `<p>A great answer often comes down to two things: <strong>where</strong> Perplexity looks and <strong>what shape</strong> the answer takes. Focus modes, source filters, and a few format requests give you that control — and rescue answers that come back too broad.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Take a broad question and tighten it with focus and format. Ask: 'Compare the top three [tools/options for a task in my field] for a small team, focusing on price, ease of use, and support. Put it in a table and only use sources from the last 18 months.' Try switching the source focus (e.g. academic vs web) and see how the answer shifts.",
        note: "Notice how specifying the format and the source scope turns a vague answer into something you can act on directly.",
      },
      steps: [
        {
          html: `<h3>Focus modes and source filters</h3><p>Perplexity can narrow <em>where</em> it searches. Depending on your setup you can steer toward sources like:</p><ul><li><strong>Web</strong> — the broad, general default</li><li><strong>Academic</strong> — papers and scholarly work</li><li><strong>Social</strong> — community discussion, including Reddit-style threads</li><li><strong>Finance</strong> — market and company financial data</li></ul><p>Choosing the right source pool is like choosing the right aisle in a library — you get answers grounded in the kind of source that actually fits your question.</p>`,
          question: {
            text: "You want honest, real-world opinions on whether a robot vacuum is worth it. Which source focus fits best?",
            options: [
              "Academic — peer-reviewed papers on vacuums",
              "Social — community discussion where owners share candid experiences",
              "Finance — the vacuum maker's stock price",
            ],
            correctIndex: 1,
            explanation:
              "Candid, lived-experience opinions live in community discussion. Academic and finance sources answer very different questions than 'is it worth it in real life?'",
          },
        },
        {
          html: `<h3>Match the source to the question</h3><p>Different questions deserve different aisles:</p><ul><li>Checking a research-backed health claim? → <strong>Academic</strong></li><li>Prepping numbers on a public company before a meeting? → <strong>Finance</strong></li><li>General "how does this work?" → <strong>Web</strong></li></ul><p>Using the wrong source pool is a common reason answers feel off — a casual web search won't give you the rigor of academic sources, and vice versa.</p>`,
          question: {
            text: "You need to know whether a supplement's benefits are backed by real studies. Which focus gives the most trustworthy grounding?",
            options: [
              "Social — anecdotes from forums",
              "Academic — studies and scholarly sources",
              "Finance — the supplement company's revenue",
            ],
            correctIndex: 1,
            explanation:
              "Claims about proven benefits should rest on studies, which is the academic focus. Forum anecdotes and revenue figures don't establish whether something actually works.",
          },
        },
        {
          html: `<h3>Narrowing by time and site</h3><p>Freshness matters. You can ask Perplexity to prioritize <strong>recent</strong> information — "only sources from the last 6 months" — which is essential for fast-moving topics like prices, product releases, or news.</p><p>You can also point it at a specific place: "according to the official documentation" or "based on reviews from established tech outlets." Naming the <em>where</em> and the <em>when</em> tightens the answer.</p>`,
          question: {
            text: "You're tracking this quarter's changes in a fast-moving industry, but answers keep citing years-old articles. Best fix?",
            options: [
              "Ask Perplexity to prioritize sources from the last few months",
              "Accept the old articles — dates don't matter",
              "Ask the exact same question again unchanged",
            ],
            correctIndex: 0,
            explanation:
              "For fast-moving topics, explicitly requesting recent sources keeps the answer current. Repeating the same query without a time constraint won't change the result.",
          },
        },
        {
          html: `<h3>Ask for a specific format</h3><p>You control the <em>shape</em> of the answer, not just the content. Ask for what's easiest to act on:</p><ul><li>"Put this in a <strong>comparison table</strong>."</li><li>"Give me a <strong>pros and cons</strong> list for each option."</li><li>"Summarize in five bullets I can paste into an email."</li></ul><p>A table makes three products instantly comparable; a pros/cons list makes a decision obvious. Requesting the right format turns a wall of text into something you can use immediately.</p>`,
          question: {
            text: "You're comparing three insurance plans across price, coverage, and deductible for a quick decision. Which format request helps most?",
            options: [
              "Ask for one long flowing paragraph",
              "Ask for a comparison table with a row per plan and columns for each factor",
              "Ask for a poem about insurance",
            ],
            correctIndex: 1,
            explanation:
              "A comparison table lines up plans against the same factors so trade-offs jump out. A paragraph buries the details you're trying to compare side by side.",
          },
        },
        {
          html: `<h3>Refining when answers are too broad</h3><p>A vague answer usually means a vague question. Instead of rerunning it, add constraints:</p><ul><li>Add your <strong>context</strong>: budget, location, team size, skill level</li><li>Add a <strong>boundary</strong>: "focus only on free options"</li><li>Add a <strong>goal</strong>: "for a beginner who wants results this week"</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>When an answer sprawls, don't start over — send a follow-up that narrows it: "Just the options under $50 that work on Mac." Each constraint you add sharpens the result.</p></div>`,
          question: {
            text: "You asked 'What's the best way to learn Excel?' and got a huge generic answer. What sharpens it fastest?",
            options: [
              "Ask the identical question again and hope for less",
              "Follow up with constraints: 'Free resources for a total beginner who wants to build reports in two weeks'",
              "Give up on learning Excel",
            ],
            correctIndex: 1,
            explanation:
              "Broad answers shrink when you add context, boundaries, and a goal. A follow-up with real constraints beats re-asking the same open-ended question.",
          },
        },
        {
          html: `<h3>Putting it together: a vendor comparison</h3><p>Say you're choosing an email-marketing vendor for a small business. A steered request beats a bare one:</p><p><em>"Compare Mailchimp, Brevo, and MailerLite for a business with 2,000 subscribers. Prioritize price and ease of use, focus on recent sources, and put it in a comparison table with a recommendation."</em></p><p>Notice the layers: <strong>clear options + your context + source freshness + output format</strong>. That's steering both where Perplexity looks and how it answers.</p><h3>Where you're headed</h3><p>You can now aim Perplexity at the right sources and shape the answer. Next: <strong>Your Research HQ</strong> — how Spaces keep all this organized when your research spans days or weeks.</p>`,
          question: {
            text: "Which request best steers both the sources and the output for a vendor decision?",
            options: [
              '"email vendors"',
              '"Compare these three vendors for 2,000 subscribers, prioritize price and ease of use, use recent sources, and give me a table with a recommendation"',
              '"which is good"',
            ],
            correctIndex: 1,
            explanation:
              "The strong request names the options, your context, source freshness, and the format — steering both where Perplexity looks and how it presents the answer. The others leave everything to guesswork.",
          },
        },
      ],
    },
    {
      title: "Your Research HQ",
      summary: "Use Spaces to organize ongoing research, set custom instructions, keep threads tidy, and share your work",
      estimatedMinutes: 13,
      content: `<p>One-off questions are great, but real research unfolds over days — a purchase you're weighing, a work project, a skill you're building. <strong>Spaces</strong> (also called Collections) turn Perplexity into an organized headquarters where related threads live together instead of scattering across your history.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Create a Space for an ongoing project you're actually working on — say [a decision or project at work]. Add a custom instruction like 'I'm a [your role]; always answer for a non-expert and flag anything that affects budget or timeline.' Then ask two related questions inside it and watch how the context carries over.",
        note: "Set the Space's custom instructions once so every question inside it stays on-topic without you re-explaining your role each time.",
      },
      steps: [
        {
          html: `<h3>What a Space is for</h3><p>A <strong>Space</strong> is a container for related research. Instead of hunting through your history for that thread from last Tuesday, you group everything about one topic in one place:</p><ul><li>A <strong>purchase decision</strong> — "New Family Car"</li><li>A <strong>work project</strong> — "Q3 Vendor Review"</li><li>A <strong>skill you're learning</strong> — "Learning SQL"</li></ul><p>Every question you ask inside a Space stays with that project, so your research builds up instead of getting lost.</p>`,
          question: {
            text: "You've been researching a laptop purchase across a week in scattered one-off searches and keep losing old threads. What helps?",
            options: [
              "Keep searching one-off and scroll your whole history each time",
              "Create a Space for the purchase so every related thread lives in one place",
              "Write everything down on paper instead",
            ],
            correctIndex: 1,
            explanation:
              "A Space groups all threads for one project together, so week-long research accumulates in one spot instead of getting lost in your general history.",
          },
        },
        {
          html: `<h3>Custom instructions per Space</h3><p>Each Space can carry its own <strong>custom instructions</strong> — standing guidance Perplexity applies to every question there. Set the context once and stop repeating yourself:</p><ul><li>"I'm a beginner; explain terms simply."</li><li>"Always prioritize budget options under $500."</li><li>"I'm based in Canada; use CAD and local availability."</li></ul><p>Now every answer in that Space is already tuned to your situation without you re-typing the context each time.</p>`,
          question: {
            text: "In your 'New Family Car' Space you keep having to repeat 'we need 7 seats and a budget under $40k.' What's the fix?",
            options: [
              "Retype it into every single question forever",
              "Set custom instructions for the Space so every answer already assumes 7 seats and the budget",
              "Delete the Space and start over each time",
            ],
            correctIndex: 1,
            explanation:
              "Custom instructions apply your standing context to every question in the Space, so you set the constraints once instead of repeating them endlessly.",
          },
        },
        {
          html: `<h3>Keeping threads tidy</h3><p>Within a Space, each distinct sub-question deserves its own <strong>thread</strong>. Keeping threads focused makes your HQ easy to navigate:</p><ul><li>One thread for "safety ratings"</li><li>Another for "fuel efficiency vs. hybrid"</li><li>Another for "best time of year to buy"</li></ul><p>Resist cramming unrelated questions into one endless thread — separate threads are easier to revisit, and follow-ups stay on-topic.</p>`,
          question: {
            text: "Inside your car Space, you start asking about resale value in the same thread where you've been discussing safety ratings. Better approach?",
            options: [
              "Keep piling every topic into one giant thread",
              "Start a fresh thread for resale value so each topic stays focused and easy to find later",
              "Make a whole new Space for every single question",
            ],
            correctIndex: 1,
            explanation:
              "Separate threads for separate sub-questions keep a Space navigable. One endless thread gets muddled; a new Space per question would be overkill.",
          },
        },
        {
          html: `<h3>Sharing your work</h3><p>Research is more useful when you can pass it on. Perplexity lets you <strong>share</strong> threads and turn findings into shareable write-ups (often called <strong>Pages</strong>) — handy when you want to hand a clean summary to a colleague or family member.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Before sharing, add a follow-up like "summarize our findings so far as a short brief with the key sources." You'll hand over a clean, cited summary instead of a long, messy thread.</p></div>`,
          question: {
            text: "Your partner wants the highlights of your week-long car research without reading every thread. What's the cleanest way to share?",
            options: [
              "Send them the raw, sprawling threads to read in full",
              "Ask Perplexity to summarize the findings into a short cited brief, then share that",
              "Just tell them from memory and skip the sources",
            ],
            correctIndex: 1,
            explanation:
              "A summarized, cited brief is far easier to hand off than raw threads. Perplexity can condense the Space's findings into something shareable and clear.",
          },
        },
        {
          html: `<h3>One HQ per big topic</h3><p>The habit that makes this stick: <strong>whenever a question turns into an ongoing project, spin up a Space.</strong> A quick fact check can stay a one-off, but anything you'll return to deserves a home.</p><ul><li>Booking a multi-stop trip? → a "Summer Trip" Space</li><li>Upskilling for a promotion? → a "Data Analysis Skills" Space</li><li>Evaluating software for the team? → a "Tools Evaluation" Space</li></ul><p>Your future self — three days or three weeks later — will thank you for keeping it all together.</p>`,
          question: {
            text: "You're planning a two-week trip with flights, hotels, and activities across several cities. Space or one-off search?",
            options: [
              "One-off searches — the trip is simple enough to keep in your head",
              "A dedicated 'Trip' Space so flights, hotels, and activities stay organized as the plan evolves",
              "It doesn't matter; Perplexity can't help with trips",
            ],
            correctIndex: 1,
            explanation:
              "A multi-part trip is an ongoing project with many moving pieces — exactly what a Space is for. One-off searches would scatter the plan and lose your progress.",
          },
        },
        {
          html: `<h3>You've built your foundation</h3><p>Look how far you've come. You can now:</p><ul><li>Reach for Perplexity as an <strong>answer engine</strong> with cited sources</li><li>Match <strong>quick search, Pro Search, and Deep Research</strong> to the job</li><li>Steer <strong>sources, time, and format</strong> to get exactly what you need</li><li>Organize it all in <strong>Spaces</strong> with custom instructions and sharing</li></ul><p>That's a complete everyday research workflow — the kind that quietly saves you hours every week.</p><h3>Where you're headed</h3><p>Next up, <strong>Unit 2: Workflows & Automation</strong>. You'll go beyond asking questions and start putting Perplexity to work for you — connecting it to your apps, building outputs, and setting research to run on a schedule so answers come to you.</p>`,
          question: {
            text: "You've mastered asking, steering, and organizing. What's the natural next step this course moves toward in Unit 2?",
            options: [
              "Going back to typing keyword fragments",
              "Turning Perplexity into an automated workflow — connecting apps, building outputs, and scheduling research",
              "Abandoning Spaces entirely",
            ],
            correctIndex: 1,
            explanation:
              "With the research fundamentals in place, the next leap is automation — making Perplexity work proactively through connections, outputs, and scheduled tasks, which Unit 2 covers.",
          },
        },
      ],
    },
  ],
};
