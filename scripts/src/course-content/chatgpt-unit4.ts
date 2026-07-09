import type { UnitSeed } from "./types";

export const CHATGPT_UNIT_4: UnitSeed = {
  title: "ChatGPT for Real Life",
  lessons: [
    {
      title: "Productivity & Daily Task Automation",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here's my brain dump for today: [list everything on your plate, half-sentences are fine]. Group these into 3 priorities, estimate time for each, flag anything that can wait until tomorrow, and tell me the single best thing to start with.",
        note: "Do this each morning — it separates deciding from doing so you start with a ready plan.",
      },
      summary: "Turn ChatGPT into your daily operating system",
      content: `<p>The people who get the most from ChatGPT don't use it for occasional one-off questions — they wire it into the rhythm of their day. Planning, email, meetings and recurring busywork all become faster when you have a repeatable prompt ready to go.</p><p>In this lesson you'll build a handful of daily-driver prompts you can reuse forever, and see how ChatGPT's scheduling features can nudge you at exactly the right moment.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Start the day with a plan, not a blank page</h3><p>Most productivity struggles aren't about willpower — they're about facing a messy, undecided pile of tasks first thing in the morning. ChatGPT is brilliant at turning that pile into a clear, prioritized plan.</p><p>Dump everything on your plate into the chat exactly as it lives in your head — half-sentences, deadlines, that thing you keep forgetting — and let ChatGPT sort it out. Try: <strong>"Here's my brain dump for today. Group these into 3 priorities, estimate time for each, and flag anything that can wait until tomorrow."</strong></p><p>The magic is that you're no longer <em>deciding</em> and <em>doing</em> at the same time. ChatGPT handles the sorting so you can jump straight into focused work.</p>`,
          question: {
            text: "What's the biggest advantage of asking ChatGPT to organize your task list each morning?",
            options: [
              "It removes tasks from your list automatically",
              "It separates deciding from doing so you start with a clear plan",
              "It guarantees you'll finish everything on the list",
            ],
            correctIndex: 1,
            explanation:
              "The win is mental: ChatGPT does the prioritizing and time-estimating, so you skip the paralysis of deciding-while-doing and start the day with a ready plan.",
          },
        },
        {
          html: `<h3>Tame your inbox</h3><p>Email eats hours because every message is a tiny decision. ChatGPT can triage and draft in one pass. Paste a long thread and ask: <strong>"Summarize what's being asked of me, then draft a reply that agrees to the meeting but pushes it to next week — polite, brief."</strong></p><p>For a full inbox, describe the messages and let ChatGPT sort them: which need a reply today, which can wait, and which are just FYI. Then knock out the drafts in a batch.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>The fastest email workflow is <strong>triage first, draft second</strong>. Ask ChatGPT "what actually needs a response and how urgent is each?" before you write a single reply — you'll often find half the inbox needs nothing from you at all.</p></div>`,
          question: {
            text: "You have 15 unread emails and 20 minutes. What's the smartest first move with ChatGPT?",
            options: [
              "Ask it to write full replies to all 15 immediately",
              "Ask it to triage them into reply-now, reply-later and FYI",
              "Ask it to delete the unimportant ones",
            ],
            correctIndex: 1,
            explanation:
              "Triage before drafting. Once you know which emails truly need a response, you can focus your limited time on the few that matter instead of writing 15 replies.",
          },
        },
        {
          html: `<h3>Meeting prep and recap on autopilot</h3><p>Before a meeting, feed ChatGPT the agenda or context and ask for a prep sheet: <strong>"Give me 3 smart questions to ask, one risk to raise, and a one-line goal for this meeting."</strong> You walk in sharp instead of scrambling.</p><p>Afterward, paste your rough notes (or a voice-typed ramble) and ask: <strong>"Turn this into clean notes: decisions made, action items with owners, and open questions."</strong> What used to be a 20-minute write-up becomes 20 seconds.</p><p>The pattern is the same for both: give ChatGPT the raw material, tell it the exact output shape you want, and let it do the structuring.</p>`,
          question: {
            text: "After a messy meeting, what should you include in your recap prompt to get the most useful output?",
            options: [
              "Just paste the notes and say 'summarize'",
              "Specify the output shape: decisions, action items with owners, open questions",
              "Ask ChatGPT to attend the next meeting for you",
            ],
            correctIndex: 1,
            explanation:
              "Naming the exact structure you want — decisions, owned action items, open questions — turns a vague summary into something you can act on immediately.",
          },
        },
        {
          html: `<h3>Templates and scheduled automation</h3><p>Any task you repeat deserves a saved prompt. Build a reusable template once — a weekly status update, a client check-in, a standup summary — and store it in a Project or your notes so you paste-and-go each time.</p><p>ChatGPT can also take action on a schedule. With <strong>scheduled tasks / reminders</strong>, you can ask it to run a prompt automatically — for example, "Every Monday at 8am, remind me to plan my week and give me three questions to reflect on." It becomes a proactive assistant, not just a reactive one.</p><p><strong>Try this now:</strong> pick the single task you do most often at work, write one strong reusable prompt for it (role + context + task + format), and save it somewhere you'll actually find it tomorrow.</p>`,
          question: {
            text: "What makes ChatGPT's scheduled tasks different from just chatting with it?",
            options: [
              "They let ChatGPT run a prompt automatically at a set time, proactively",
              "They make responses longer",
              "They delete your old chats to save space",
            ],
            correctIndex: 0,
            explanation:
              "Scheduled tasks flip ChatGPT from reactive to proactive — it can run a prompt and nudge you at the right moment without you opening the app.",
          },
        },
      ],
    },
    {
      title: "ChatGPT for Effective Communication",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I need to [ask my manager for a deadline extension]. Play the role of a skeptical [manager] and push back realistically so I can practice my responses. After a few exchanges, tell me where my answers were weak and give me the strongest version of my case.",
        note: "Rehearse a few rounds, then paste your real draft and ask how it might come across before you send it.",
      },
      summary: "Say the hard things clearly, calmly and in the right tone",
      content: `<p>Some messages are genuinely hard to send — the pushback to your boss, the negotiation email, the feedback that has to be honest but kind. ChatGPT is a private rehearsal space where you can draft, test tones and pressure-check your words before anyone reads them.</p><p>This lesson covers difficult conversations, negotiation prep, feedback, tone calibration, and polishing communication when you're writing in a second language.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Rehearse difficult conversations</h3><p>Before a tense conversation, most people rehearse in the shower and hope for the best. ChatGPT gives you a real rehearsal partner. Describe the situation and the other person, then ask it to <strong>role-play</strong>: "You're my manager. I'm going to ask for a deadline extension. Push back like a skeptical boss so I can practice my responses."</p><p>You get to try three different openings, see how each lands, and walk in prepared instead of anxious. Afterward, ask "what's the strongest version of my argument?" to sharpen your case.</p>`,
          question: {
            text: "Why is role-play with ChatGPT useful before a difficult conversation?",
            options: [
              "It guarantees the other person will agree with you",
              "It lets you practice responses and test different openings safely",
              "It sends the message for you automatically",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT is a safe rehearsal partner — you can test openings, hear realistic pushback, and refine your argument before the real conversation.",
          },
        },
        {
          html: `<h3>Prep a negotiation</h3><p>Whether it's salary, a contract or a price, negotiation rewards preparation. Give ChatGPT the details and ask it to map the landscape: <strong>"I'm negotiating a freelance rate. Here's my situation. What's my strongest case, what objections should I expect, and what are three possible counteroffers?"</strong></p><p>It helps you anticipate the other side, prepare responses to "that's too expensive," and decide your walk-away point in advance — so you're reacting from a plan, not from nerves.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Ask ChatGPT to <strong>argue the other side</strong>. "Give me the three strongest objections to my request" reveals the weak spots in your case before your counterpart does.</p></div>`,
          question: {
            text: "What's a smart way to use ChatGPT when preparing for a negotiation?",
            options: [
              "Ask it to predict the exact outcome",
              "Ask it to argue the other side's objections so you can prepare responses",
              "Ask it to negotiate on your behalf in real time",
            ],
            correctIndex: 1,
            explanation:
              "Having ChatGPT surface the strongest counterarguments lets you rehearse responses and find weak spots in your case before the real conversation.",
          },
        },
        {
          html: `<h3>Feedback and tone calibration</h3><p>Feedback is where tone makes or breaks the message. Draft the honest version, then ask ChatGPT to calibrate: <strong>"Rewrite this feedback so it's direct but kind, focuses on the behavior not the person, and ends on a constructive note."</strong></p><p>Tone is a dial you can turn. The same message can be "warmer," "more assertive," "more neutral and less emotional," or "more formal for a senior audience." When you're not sure how something reads, paste it and ask: "How might this come across to the person receiving it?"</p>`,
          question: {
            text: "You wrote blunt feedback and worry it sounds harsh. What's the best ChatGPT move?",
            options: [
              "Ask it to make the feedback vague so no one is offended",
              "Ask how it might come across, then have it recalibrate the tone to direct-but-kind",
              "Send it as-is; tone doesn't matter in feedback",
            ],
            correctIndex: 1,
            explanation:
              "Use ChatGPT as a tone check: ask how the message lands, then dial it to 'direct but kind' so it stays honest without stinging.",
          },
        },
        {
          html: `<h3>Cross-cultural and second-language polish</h3><p>If you write in a language that isn't your first, ChatGPT is a tireless editor. Paste your draft and ask: <strong>"Fix the grammar and make this sound natural and professional, but keep my meaning — and tell me what you changed."</strong> That last part turns editing into learning.</p><p>It also helps with cross-cultural nuance: "Is this phrasing too direct for a Japanese business context?" or "Make this friendlier for a US audience." You keep your voice and intent; ChatGPT smooths the edges.</p><p><strong>Try this now:</strong> take a message you've been putting off sending, paste it, and ask ChatGPT for two versions — one warmer, one more assertive — then send the one that fits.</p>`,
          question: {
            text: "When polishing a message written in your second language, why ask ChatGPT to 'tell you what it changed'?",
            options: [
              "It makes the response shorter",
              "It turns the edit into a learning moment so you improve over time",
              "It prevents ChatGPT from making any changes",
            ],
            correctIndex: 1,
            explanation:
              "Asking what changed converts a one-time fix into ongoing learning — you see the patterns and gradually need less help.",
          },
        },
      ],
    },
    {
      title: "Research Faster",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm researching [a decision I'm facing]. First give me an overview like I'm smart but new to it, including common misconceptions. Then I have 15 minutes — give me the 80/20 that matters most for my decision and tell me what I can safely ignore.",
        note: "Finish by asking for sources on one key fact and actually open them to verify.",
      },
      summary: "A layered method to learn anything without rabbit holes",
      content: `<p>Research goes wrong in two directions: staying too shallow to trust, or falling down a rabbit hole for three hours. ChatGPT lets you do it right — start broad, drill into what matters, and verify what's important — without opening 40 browser tabs.</p><p>This lesson gives you a repeatable, layered research method and shows when to reach for Web Search versus Deep Research.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>The layered research method</h3><p>Good research has three layers, and skipping a layer is where people get burned. <strong>Layer 1 — Overview:</strong> "Explain [topic] like I'm smart but new to it. What are the key concepts and common misconceptions?" This gives you the map. <strong>Layer 2 — Targeted:</strong> drill into the specific parts that matter for your decision. <strong>Layer 3 — Verify:</strong> for anything important, confirm with a real source.</p><p>Starting with the overview means your targeted questions are actually good questions — you know enough to ask the right thing instead of flailing.</p>`,
          question: {
            text: "Why start research with a broad overview before asking targeted questions?",
            options: [
              "Overviews are the only accurate part of ChatGPT",
              "Knowing the landscape first makes your specific follow-up questions sharper",
              "It's faster to skip straight to the details",
            ],
            correctIndex: 1,
            explanation:
              "The overview gives you the map. Once you understand the landscape and the common misconceptions, your targeted questions hit exactly what matters.",
          },
        },
        {
          html: `<h3>Compare options side by side</h3><p>Half of real-world research is really a decision: which tool, which plan, which approach. ChatGPT is great at structured comparison. Try: <strong>"Compare these three options for someone who values [budget / speed / simplicity]. Put it in a table with pros, cons and a recommendation."</strong></p><p>The key is telling it <em>what you value</em>. "Best" is meaningless until you define it — best for a tight budget is different from best for scaling a team. Give ChatGPT your criteria and the comparison becomes genuinely useful.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>A comparison is only as good as your criteria. Always tell ChatGPT <strong>what "best" means for you</strong> — budget, speed, ease, longevity — or you'll get a generic answer that fits nobody.</p></div>`,
          question: {
            text: "What's the missing ingredient in the prompt 'Which of these three tools is best?'",
            options: [
              "The number of options",
              "Your criteria — what 'best' means for your situation",
              "A request for a table",
            ],
            correctIndex: 1,
            explanation:
              "'Best' is meaningless without criteria. Tell ChatGPT what you value — budget, speed, simplicity — and the recommendation becomes relevant to you.",
          },
        },
        {
          html: `<h3>When to bring in Deep Research</h3><p>For quick, current facts — a company's latest news, today's pricing — <strong>Web Search</strong> is fast and enough. But for big, multi-source questions — "map the competitive landscape for meal-kit startups" or "what does the research say about intermittent fasting?" — reach for <strong>Deep Research</strong>.</p><p>Deep Research reads dozens of sources, synthesizes them, and produces a cited report. It takes several minutes, so use it for questions worth the wait: major purchases, business decisions, or anything you'll build on. Match the tool to the stakes.</p>`,
          question: {
            text: "You need a thorough, cited report comparing an entire industry's major players. Which tool fits best?",
            options: [
              "Web Search — it's always fastest",
              "Deep Research — multi-source synthesis with citations",
              "A single plain question with no tools",
            ],
            correctIndex: 1,
            explanation:
              "Broad, multi-source questions that produce a cited report are exactly what Deep Research is for. Web Search is better for quick, current facts.",
          },
        },
        {
          html: `<h3>Avoid the rabbit hole</h3><p>The danger of easy research is endless research. Set a boundary before you start: <strong>"I have 15 minutes. Give me the 80/20 — the few things that matter most for this decision, and tell me what I can safely ignore."</strong></p><p>Asking ChatGPT what to <em>ignore</em> is as valuable as asking what to learn. It keeps you from over-researching a small decision. And always close with the verify layer for anything high-stakes — ask for sources and actually open them.</p><p><strong>Try this now:</strong> pick a decision you've been researching and run the three layers — overview, targeted questions, then verify one key fact with a real source.</p>`,
          question: {
            text: "What's a good way to prevent research from spiraling into a rabbit hole?",
            options: [
              "Read every source ChatGPT can find",
              "Set a time boundary and ask for the 80/20, including what to ignore",
              "Never verify anything to save time",
            ],
            correctIndex: 1,
            explanation:
              "Setting a boundary and asking what you can safely ignore keeps research proportional to the decision — you get the essentials without the spiral.",
          },
        },
      ],
    },
    {
      title: "Plan Anything: Multi-Step Projects",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to [launch a small online store] in [8 weeks]. I can work [evenings only] with a [$500] budget. Break this into weekly phases with concrete tasks and milestones, then list the top 3 risks and how to reduce each.",
        note: "As reality shifts, tell ChatGPT what changed and ask it to re-plan the remaining phases.",
      },
      summary: "Break big goals into phases with ChatGPT as your co-pilot",
      content: `<p>Big projects stall because they're overwhelming — a wall of undefined work with no obvious first step. ChatGPT excels at breaking a fuzzy goal into clear phases, tasks and milestones, then riding along as a co-pilot that adapts the plan as reality changes.</p><p>This lesson covers phase-based planning, using ChatGPT throughout a project, stress-testing plans with what-if analysis, and tracking everything inside a Project.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>From fuzzy goal to phased plan</h3><p>Start by handing ChatGPT the goal and your constraints: <strong>"I want to launch a small online store in 8 weeks. I work evenings only and have a $500 budget. Break this into weekly phases with concrete tasks and milestones."</strong></p><p>The constraints matter as much as the goal — they turn a generic checklist into a plan that fits your actual life. Once you have the phases, you can zoom into any one and expand it into detailed steps.</p>`,
          question: {
            text: "Why include your constraints (time, budget, skills) when asking ChatGPT to plan a project?",
            options: [
              "Constraints make the plan shorter",
              "They turn a generic checklist into a plan that fits your real situation",
              "ChatGPT can't make a plan without them",
            ],
            correctIndex: 1,
            explanation:
              "Constraints are what make a plan realistic. '8 weeks, evenings only, $500' produces a plan you can actually execute, not a generic template.",
          },
        },
        {
          html: `<h3>ChatGPT as an ongoing co-pilot</h3><p>The plan isn't a one-time output — it's a living conversation. As the project moves, keep ChatGPT in the loop: "I finished phase 1 but it took twice as long. Adjust the rest of the plan." It re-plans around reality instead of leaving you with a stale document.</p><p>Stuck on a task? "I'm blocked on setting up payments — walk me through the options." Need momentum? "What's the single most important thing to do next?" A co-pilot helps you both navigate and get unstuck.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Treat your plan as <strong>living, not laminated</strong>. When reality diverges — a phase runs long, priorities shift — tell ChatGPT and let it re-plan. A plan you update beats a perfect plan you abandon.</p></div>`,
          question: {
            text: "Phase 1 took twice as long as planned. What's the best co-pilot move?",
            options: [
              "Abandon the plan since it's now wrong",
              "Tell ChatGPT what happened and ask it to adjust the remaining phases",
              "Ignore the delay and push forward on the original schedule",
            ],
            correctIndex: 1,
            explanation:
              "A living plan beats a laminated one. Feed ChatGPT the new reality and let it re-plan the remaining phases around it.",
          },
        },
        {
          html: `<h3>Stress-test with what-if analysis</h3><p>Before you commit, have ChatGPT play devil's advocate: <strong>"What could go wrong with this plan? List the top 3 risks and how to reduce each."</strong> It surfaces the blind spots you're too close to see.</p><p>Push further with what-if scenarios: "What if my main supplier falls through?" or "What if I only have half the budget?" Thinking through failure in advance means you've already got a Plan B when something wobbles — which, in real projects, it always does.</p>`,
          question: {
            text: "What's the value of asking ChatGPT 'what could go wrong with this plan?'",
            options: [
              "It makes the project take longer",
              "It surfaces risks and blind spots so you can prepare a Plan B",
              "It replaces the need for a plan entirely",
            ],
            correctIndex: 1,
            explanation:
              "What-if analysis reveals the blind spots you're too close to notice, so you can build in mitigations before problems hit.",
          },
        },
        {
          html: `<h3>Track it all inside a Project</h3><p>A ChatGPT <strong>Project</strong> is the perfect home for a multi-week effort. Everything in a Project shares context and files, so you can drop in your plan, reference docs and progress notes — and every chat inside it already knows the background.</p><p>Instead of re-explaining your project in every conversation, you just continue. Ask "where are we?" and it can summarize progress; add a chat for each phase; keep your key files attached. The Project becomes your project's memory.</p><p><strong>Try this now:</strong> pick a goal you've been putting off, create a Project for it, and ask ChatGPT to break it into weekly phases with milestones.</p>`,
          question: {
            text: "Why keep a multi-week project inside a ChatGPT Project rather than scattered chats?",
            options: [
              "Projects respond faster than normal chats",
              "Everything in a Project shares context and files, so chats already know the background",
              "Projects automatically finish your tasks",
            ],
            correctIndex: 1,
            explanation:
              "A Project shares context and files across all its chats, so you never re-explain the background — it becomes your project's memory.",
          },
        },
      ],
    },
    {
      title: "Organizing Personal Finances",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I take home [$3,200] a month with [high rent and no car]. Walk me through the 50/30/20 budget adapted to my situation and set realistic category targets I could actually stick to.",
        note: "ChatGPT gives frameworks, not financial advice — double-check every number yourself before acting on it.",
      },
      summary: "Budget, analyze spending and decide big purchases with ChatGPT",
      content: `<p>ChatGPT can make personal finance feel less overwhelming — building a budget, spotting patterns in your spending, and thinking through big decisions out loud. It's a knowledgeable, patient sounding board that never judges your latte habit.</p><p>One important note up front: <strong>ChatGPT is not a financial advisor, and it can make mistakes with numbers.</strong> Use it to organize your thinking and always verify the math before you act on it. This lesson covers budgeting frameworks, analyzing spending exports, big-purchase decisions and subscription audits.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Build a budget that fits you</h3><p>Instead of forcing yourself into a generic template, describe your situation and ask ChatGPT to suggest a framework: <strong>"I take home $3,200 a month. Walk me through the 50/30/20 budget and adapt it to my situation — high rent, no car."</strong></p><p>It can explain popular frameworks (50/30/20, zero-based, envelope), help you set realistic category targets, and adjust when your income is irregular. You end up with a budget you understand, not one you copied and will abandon.</p><div class="discovery"><p>💡 <strong>Reminder</strong></p><p>ChatGPT gives you frameworks and structure — not personalized financial advice. For big or complex decisions, a qualified human advisor is worth it, and you should always double-check the arithmetic yourself.</p></div>`,
          question: {
            text: "How should you treat ChatGPT's budgeting help?",
            options: [
              "As certified financial advice you can act on blindly",
              "As frameworks and structure to organize your thinking, with numbers you verify",
              "As a guarantee that you'll save money",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT is great for explaining frameworks and structuring a budget, but it isn't a financial advisor — verify the math and seek a professional for major decisions.",
          },
        },
        {
          html: `<h3>Analyze your spending export</h3><p>Most banks let you export transactions as a CSV. Upload it and ChatGPT will actually crunch it: <strong>"Categorize these transactions, show me total spend per category, and highlight where I'm spending more than I'd expect."</strong></p><p>Because data analysis writes and runs real code behind the scenes, the totals are computed, not guessed. You can ask for charts, month-over-month comparisons, or "which three categories should I cut to save $200?" Still, sanity-check the categorization — it might file "Amazon" under the wrong bucket.</p>`,
          question: {
            text: "Why is uploading a CSV of transactions more reliable than describing your spending in words?",
            options: [
              "ChatGPT ignores numbers you type in text",
              "Data analysis runs real code on the file, so totals are computed rather than estimated",
              "CSVs make ChatGPT respond faster",
            ],
            correctIndex: 1,
            explanation:
              "With an uploaded file, ChatGPT writes and runs code to compute the numbers — far more reliable than guessing from a verbal description.",
          },
        },
        {
          html: `<h3>Think through a big purchase</h3><p>For a major decision — a car, a laptop, a move — ChatGPT is a great thinking partner. Lay out the situation and ask it to structure the trade-offs: <strong>"I'm deciding whether to buy a $1,200 laptop now or wait. Here's my situation. Walk me through the trade-offs and questions I should ask myself."</strong></p><p>It won't tell you what to do — and it shouldn't — but it'll make sure you've considered total cost, timing, alternatives and your priorities before you commit. The goal is a clearer head, not an outsourced decision.</p>`,
          question: {
            text: "What's the right role for ChatGPT in a big-purchase decision?",
            options: [
              "To make the final decision for you",
              "To structure the trade-offs and questions so you decide with a clearer head",
              "To find you a discount code",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT should organize the trade-offs and surface the questions worth asking — the decision stays yours, made with fuller information.",
          },
        },
        {
          html: `<h3>Run a subscription audit</h3><p>Subscriptions are where money quietly leaks. Feed ChatGPT your recurring charges (from that same CSV or a quick list) and ask: <strong>"Here are my subscriptions. Total the annual cost, flag anything I might have forgotten, and suggest questions to decide what to cancel."</strong></p><p>Seeing "$14.99/month" reframed as "$180/year" is often all it takes to cancel something you forgot you had. ChatGPT turns scattered small charges into one clear picture.</p><p><strong>Try this now:</strong> list your recurring subscriptions, ask ChatGPT for the total annual cost, and identify one to cancel — then verify the total yourself before acting.</p>`,
          question: {
            text: "Why is a subscription audit with ChatGPT effective?",
            options: [
              "It cancels subscriptions for you automatically",
              "It reframes small monthly charges as their yearly totals, making waste obvious",
              "It negotiates lower prices with the companies",
            ],
            correctIndex: 1,
            explanation:
              "Seeing '$14.99/month' as '$180/year' makes forgotten subscriptions easy to spot and cut — ChatGPT turns scattered charges into one clear picture.",
          },
        },
      ],
    },
    {
      title: "Create Content for Any Platform",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Take this one idea and repurpose it for each platform: [your idea]. Give me a LinkedIn post, three tweets, a short blog outline and a 30-second video script — each fitted to its platform. Then give me 5 different hook options for the LinkedIn post.",
        note: "Pick or blend the strongest hook rather than accepting the first line — the opening does most of the work.",
      },
      summary: "Turn one idea into a week of posts across every channel",
      content: `<p>Creating content is exhausting when every platform feels like starting over. The pro move is to develop one strong idea, then repurpose it into the right shape for each platform — LinkedIn, X, a blog, a newsletter, a video script. ChatGPT makes that pipeline fast.</p><p>This lesson covers turning one idea into many formats, writing hooks that stop the scroll, respecting platform norms, and building a repurposing pipeline you can run every week.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>One idea, many formats</h3><p>Start with a single core idea and let ChatGPT reshape it: <strong>"Take this idea and turn it into a LinkedIn post, three tweets, a short blog outline and a 30-second video script — each fitted to its platform."</strong></p><p>You did the thinking once; ChatGPT handles the reformatting. This is how creators seem to be everywhere at once — they're not writing five separate things, they're adapting one thing five ways.</p>`,
          question: {
            text: "What's the core efficiency behind repurposing content with ChatGPT?",
            options: [
              "Posting the exact same text everywhere",
              "Doing the thinking once, then adapting one idea into each platform's format",
              "Letting ChatGPT invent random topics for you",
            ],
            correctIndex: 1,
            explanation:
              "You develop one strong idea, then ChatGPT reshapes it for each platform — that's how creators appear to be everywhere without writing five separate pieces.",
          },
        },
        {
          html: `<h3>Hooks that stop the scroll</h3><p>The first line decides whether anyone reads the rest. Ask ChatGPT for options: <strong>"Give me 5 different hooks for this post — one surprising stat, one question, one bold claim, one story opener, one contrarian take."</strong></p><p>Then pick the one that fits your voice, or blend two. Testing hooks is cheap and high-leverage — the same content can flop or fly depending entirely on that first line.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Always generate <strong>multiple hooks and pick</strong>, rather than accepting the first. The opening line does most of the work in whether content gets read at all — it's worth 5 options.</p></div>`,
          question: {
            text: "Why ask ChatGPT for several different hooks instead of one?",
            options: [
              "Longer posts always perform better",
              "The opening line largely decides whether content gets read, so options let you pick the strongest",
              "It uses up fewer messages",
            ],
            correctIndex: 1,
            explanation:
              "The hook does most of the work in getting content read. Generating several styles lets you choose or blend the one that best fits your voice and audience.",
          },
        },
        {
          html: `<h3>Respect platform norms</h3><p>Each platform has its own culture, and content that ignores it reads as spam. Tell ChatGPT the platform and let it adapt: LinkedIn rewards professional insight and a clear takeaway; X rewards punchy brevity; a newsletter rewards a personal, conversational voice; a blog rewards depth and structure.</p><p>Try: "Rewrite this for X — under 280 characters, punchy, no hashtags-stuffing." The message stays the same; the packaging changes to fit the room you're speaking in.</p>`,
          question: {
            text: "Why adapt the same message differently for LinkedIn versus X?",
            options: [
              "The platforms ban identical posts",
              "Each platform has its own norms and audience, so packaging must fit the room",
              "X doesn't allow professional topics",
            ],
            correctIndex: 1,
            explanation:
              "The core message stays the same, but each platform's culture and format differ — tailoring the packaging makes it land instead of feeling out of place.",
          },
        },
        {
          html: `<h3>Build a repurposing pipeline</h3><p>Turn all of this into a weekly system. A simple pipeline: <strong>(1)</strong> capture one core idea, <strong>(2)</strong> ask ChatGPT to expand it into a long-form piece, <strong>(3)</strong> repurpose that into short posts for each channel, <strong>(4)</strong> generate hooks and pick the best.</p><p>Save this as a reusable prompt (or a Custom GPT loaded with your voice) so each week you just feed in the new idea and get a full content set out. One hour of thinking becomes a week of presence.</p><p><strong>Try this now:</strong> take one idea you care about and ask ChatGPT to turn it into a LinkedIn post, three tweets and a newsletter blurb — then tweak the best one and post it.</p>`,
          question: {
            text: "What makes a content repurposing pipeline worth setting up?",
            options: [
              "It removes the need for any original ideas",
              "A reusable process turns one hour of thinking into a full week of content",
              "It posts automatically to every platform without review",
            ],
            correctIndex: 1,
            explanation:
              "A saved pipeline (or Custom GPT) means each week you feed in one idea and get a full content set — one hour of thinking becomes a week of presence.",
          },
        },
      ],
    },
    {
      title: "Bring a Creative Idea to Life",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to bring this idea to life: [your idea]. Ask me 5 questions to sharpen what I'm making, who it's for, and what success looks like. Then help me plan the concrete first steps I can take this week.",
        note: "Carry the same idea through research, visuals and a final draft — then ship one shareable version today.",
      },
      summary: "Final challenge: take one idea from spark to shareable result",
      content: `<p>This is your capstone. You've learned prompting, modes, features, research, images, planning and content. Now you'll combine all of it to take a single real idea of yours — a side project, an event, a small business, a creative piece — from a vague spark to something you can actually share.</p><p>Pick one idea you genuinely care about and carry it through every step of this lesson. By the end you'll have a plan, research, visuals and a finished piece — and a repeatable process for turning any future idea into reality.</p>`,
      estimatedMinutes: 20,
      steps: [
        {
          html: `<h3>Step 1: Clarify the idea</h3><p>Every great project starts blurry. Use ChatGPT to sharpen it. Describe your rough idea and ask: <strong>"Help me clarify this. Ask me 5 questions to sharpen what I'm actually trying to make, who it's for, and what success looks like."</strong></p><p>Answering good questions is how a fuzzy idea becomes a concrete one. Let ChatGPT interrogate you a little — you'll leave this step knowing exactly what you're building and why.</p>`,
          question: {
            text: "Why start a creative project by having ChatGPT ask you questions?",
            options: [
              "To delay actually starting the work",
              "Answering sharp questions turns a fuzzy idea into a concrete, well-defined one",
              "Because ChatGPT can't help without a survey",
            ],
            correctIndex: 1,
            explanation:
              "A blurry idea becomes concrete when you answer the right questions — letting ChatGPT interrogate the idea clarifies what you're making, for whom, and why.",
          },
        },
        {
          html: `<h3>Step 2: Research and plan</h3><p>Now ground the idea in reality. Use the layered research method: get an overview of what already exists, then targeted questions about your specific angle. Ask: <strong>"What similar things exist, and what would make mine different or better?"</strong></p><p>Then turn it into a plan: "Break this into phases with concrete first steps I can do this week." You're combining the research and planning skills from earlier — this is where the idea gets a spine.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>The magic of ChatGPT isn't any single feature — it's <strong>chaining them</strong>. Clarify → research → plan → create → refine, each step feeding the next. That chain is the real skill.</p></div>`,
          question: {
            text: "In this capstone, how are you using ChatGPT's capabilities?",
            options: [
              "One feature in isolation",
              "Chaining features together — clarify, research, plan, create, refine",
              "Only for generating images",
            ],
            correctIndex: 1,
            explanation:
              "The real power is chaining: each step (clarify → research → plan → create → refine) feeds the next, which is what takes an idea all the way to done.",
          },
        },
        {
          html: `<h3>Step 3: Create the visuals and content</h3><p>Time to make it tangible. Use image generation for anything visual — a logo concept, a poster, a mockup, header art: <strong>"Create a [style] image for [purpose],"</strong> then refine conversationally ("warmer," "remove the text," "same but square").</p><p>Then create the words: the pitch, the description, the post announcing it. Lean on your writing and content skills — draft, ask for options, and match your own voice. Your idea now has both a face and a message.</p>`,
          question: {
            text: "What's the best way to get the right image for your project?",
            options: [
              "Accept the very first image ChatGPT produces",
              "Generate one, then refine conversationally with small adjustments",
              "Describe it once in extreme detail and never change it",
            ],
            correctIndex: 1,
            explanation:
              "Image generation is conversational — start with a solid prompt, then iterate in small steps ('warmer,' 'remove the text') to home in on what you want.",
          },
        },
        {
          html: `<h3>Step 4: Refine, verify and ship</h3><p>Almost there. Ask ChatGPT to pressure-test the whole thing: <strong>"Here's everything I've made. What's the weakest part, and how would you improve it?"</strong> Then verify any facts, claims or numbers that matter — you're the editor-in-chief.</p><p>Finally, ship it. Whether it's posting, sending or launching, the goal of this course was never to learn features in the abstract — it was to <em>make things</em>. You now have a repeatable process: any idea, run through clarify → research → plan → create → refine, becomes something real.</p><p><strong>Your challenge:</strong> take the idea you carried through this lesson and complete one shareable version of it today. Then claim your certificate — you've finished the ChatGPT course and, more importantly, you've built something.</p>`,
          question: {
            text: "What's the final and most important step in this capstone?",
            options: [
              "Keep refining forever until it's perfect",
              "Verify what matters, then actually ship something shareable",
              "Delete the project and start a new idea",
            ],
            correctIndex: 1,
            explanation:
              "The whole point is to make things real — verify the important facts, then ship. A shipped, imperfect result beats a perfect idea that never leaves your head.",
          },
        },
      ],
    },
  ],
};
