import type { UnitSeed } from "./types";

export const AI_BUSINESS_OPS_UNIT_1: UnitSeed = {
  title: "AI for Business Operations",
  lessons: [
    {
      title: "The Power of AI for Management",
      summary: "Shift from directing tasks to orchestrating intelligence — and map exactly where AI amplifies your leadership",
      content: `<p>You've spent years building your judgment and instincts. Now everyone talks about AI like it's the future of work — so where does that leave you? AI isn't here to replace your leadership; it's here to amplify it. This lesson shows you the mindset shift that makes that real, and gives you a personal roadmap for where AI fits.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "I'm a [your role — e.g. operations manager / team lead / director] and I want to understand where AI can genuinely amplify my work. Here's a summary of my main responsibilities: [list 5-8 of them]. Here are my current top priorities: [list 2-3 goals]. Run a 'Leadership Impact Audit': for each responsibility, tell me whether it's mostly (a) processing complexity — where AI can act as a Thinking Partner or Doing Engine — or (b) a human judgment call I should keep hands-on. Explain your reasoning in one line each, then summarize where I should start.",
        note: "Save the audit. Then ask Claude to turn it into a simple roadmap answering three questions: what I delegate to AI, what stays human-led, and my workflow for each AI-assisted task. Start with just ONE workflow this week.",
      },
      steps: [
        {
          html: `<h3>The control problem</h3><p>Traditional leadership was built on control: you directed tasks, monitored execution, and decided based on information flowing up to you. That model is breaking down — and not because leaders aren't capable.</p><ul><li><strong>The volume and complexity of decisions have exploded</strong> beyond what one person can process alone</li><li><strong>The real bottleneck isn't authority or data</strong> — most leaders have both; it's cognitive bandwidth: there aren't enough hours to think through everything that lands on your desk</li><li><strong>You can't fix a time problem by working harder</strong> or delegating more tasks — you need something that processes complexity at scale and frees you for the decisions that truly need human judgment</li></ul>`,
          question: {
            text: "What's the real bottleneck for most leaders today?",
            options: [
              "Not having enough authority to make important calls",
              "Cognitive bandwidth — not enough hours to think through everything",
              "Not having access to the right data or information",
            ],
            correctIndex: 1,
            explanation:
              "Most leaders already have data and authority. The true constraint is cognitive bandwidth — and you can't solve a time problem by working harder or delegating more tasks. That's where collaborating with AI changes the game.",
          },
        },
        {
          html: `<h3>From directing to orchestrating</h3><p>Imagine conducting an orchestra. You don't play every instrument — you set the vision, make the interpretive calls, and let each section handle its specialized work. With AI, it's the same: different tools for different purposes, all under your direction. And there are two distinct ways to use it:</p><ul><li><strong>Thinking Partner:</strong> AI helps you think better — surfacing insights, testing assumptions, generating scenarios, expanding your perspective <em>before</em> you decide</li><li><strong>Doing Engine:</strong> AI executes defined tasks — drafting documents, analyzing data, summarizing meetings — based on clear instructions you give</li></ul><div class="discovery"><p>💡 <strong>Most leaders use only half of AI</strong></p><p>Many treat AI purely as a Doing Engine — a faster assistant for tasks they've already decided to do. The real leverage comes from also using it as a Thinking Partner to improve the quality of decisions before you commit. Know when to use it for thinking and when for doing.</p></div>`,
          question: {
            text: "Which best describes using AI as a \"Thinking Partner\"?",
            options: [
              "Handing it a clear task like drafting a document or summarizing a meeting",
              "Surfacing insights, testing assumptions, and generating scenarios before you decide",
              "Replacing your judgment so you don't have to make the call",
            ],
            correctIndex: 1,
            explanation:
              "Thinking Partner mode improves your decision before you commit — it expands perspective and stress-tests your thinking. Doing Engine mode executes tasks you've already decided on. Great leaders use both deliberately.",
          },
        },
        {
          html: `<h3>Build your AI Integration Roadmap</h3><p>An audit is raw analysis. To make it useful, turn it into a simple roadmap that guides your daily use and answers three questions:</p><ul><li><strong>What do I delegate to AI?</strong> (the Doing Engine tasks)</li><li><strong>What do I keep entirely human-led?</strong> (judgment, people decisions, values calls)</li><li><strong>What's my workflow</strong> for each AI-assisted task?</li></ul><p>Then implement it the smart way — not all at once:</p><ul><li><strong>Start with ONE workflow this week</strong> — learn how it's done and prove the value to yourself</li><li><strong>Gradual adoption builds sustainable habits;</strong> trying to change everything at once overwhelms you and sticks to nothing</li></ul><p>You've now made the core shift: from controlling tasks to orchestrating intelligence. Next, you'll use AI to get real-time competitive intelligence and industry analysis in seconds instead of hours.</p>`,
          question: {
            text: "You've built your AI roadmap. What's the smartest way to implement it?",
            options: [
              "Roll out AI across every task in your role at the same time",
              "Start with one workflow this week, prove the value, then expand",
              "Wait until you've perfected the whole roadmap before using any of it",
            ],
            correctIndex: 1,
            explanation:
              "Start small. Implementing one workflow lets you learn it, prove the value to yourself, and build a sustainable habit — instead of overwhelming yourself trying to change everything at once.",
          },
        },
      ],
    },
    {
      title: "AI for Research & Intelligence",
      summary: "Get competitive and market intelligence in seconds instead of hours — with sources you can trust",
      content: `<p>A decision is only as good as the information behind it — but gathering that information used to eat hours you don't have. AI research tools compress that work into minutes: market landscapes, competitor moves, industry trends, all synthesized on demand. The skill is getting intelligence that's fast <em>and</em> trustworthy.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Perplexity",
        url: "https://perplexity.ai",
        prompt:
          "Act as a research analyst. I need a competitive intelligence brief on [your market / competitor / topic]. Cover: (1) the 3-4 biggest players and how they're positioned, (2) recent notable moves or launches in the last 6-12 months, (3) emerging trends shaping the space, and (4) the single biggest opportunity and biggest threat for someone in [my situation]. Cite a source for every factual claim, flag anything uncertain or contested, and end with 3 questions I should investigate further.",
        note: "Notice Perplexity shows its sources. Click through and verify the 2-3 claims your decision depends on — treat AI research as a fast first pass, not the final word.",
      },
      steps: [
        {
          html: `<h3>From hours to minutes</h3><p>Research that once meant a dozen browser tabs, PDFs, and half a day now takes a focused prompt. AI research tools shine at the part humans find slowest:</p><ul><li><strong>Scanning huge volumes</strong> of articles, reports, and pages and pulling out what matters</li><li><strong>Synthesizing</strong> scattered information into a structured summary you can act on</li><li><strong>Comparing options side by side</strong> — competitors, vendors, strategies — in one view</li></ul><p>This is Doing Engine work at its best: it hands back hours of your week for the thinking only you can do. But speed without accuracy is a trap — which is the next thing to master.</p>`,
          question: {
            text: "What's the biggest advantage of AI research tools for a busy leader?",
            options: [
              "They always produce perfectly accurate answers with no need to check",
              "They scan and synthesize large volumes of information fast, freeing your time",
              "They replace the need to make any decisions yourself",
            ],
            correctIndex: 1,
            explanation:
              "AI research excels at scanning and synthesizing volume at speed — the slow part of research. It gives you back time, but you still verify the facts and make the call.",
          },
        },
        {
          html: `<h3>Make it trustworthy: demand sources</h3><p>AI can sound confident and still be wrong — it can blend outdated facts or state a plausible-looking claim with no basis. The fix is built into how you ask:</p><ul><li><strong>Require citations:</strong> "cite a source for every factual claim" turns unverifiable prose into checkable intelligence</li><li><strong>Ask it to flag uncertainty:</strong> a good brief marks what's contested, estimated, or thin on evidence</li><li><strong>Verify what matters:</strong> click through and confirm the 2-3 claims your decision actually hinges on</li></ul><div class="discovery"><p>💡 <strong>Trust, but verify the load-bearing facts</strong></p><p>You don't need to fact-check every line — you need to check the facts your decision rests on. Identify the load-bearing claims and confirm those at the source. That's the difference between fast and reckless.</p></div>`,
          question: {
            text: "How do you make AI research trustworthy enough to act on?",
            options: [
              "Assume it's correct because it sounds confident and detailed",
              "Require sources for factual claims and verify the ones your decision depends on",
              "Only ever use it for topics you already know the answer to",
            ],
            correctIndex: 1,
            explanation:
              "Confidence isn't accuracy. Requiring citations makes claims checkable, and verifying the load-bearing facts protects the decision that rests on them.",
          },
        },
        {
          html: `<h3>Turn intelligence into decisions</h3><p>Raw research is just information — its value appears only when it changes what you do. Push every research session one step further:</p><ul><li><strong>End with "so what?"</strong> — ask AI to translate findings into implications and options for <em>your</em> situation</li><li><strong>Frame the decision:</strong> "Given this, what are my 3 realistic moves and the trade-offs of each?"</li><li><strong>Keep a living brief:</strong> re-run key research on a cadence so your view of the market stays current, not a one-time snapshot</li></ul><p>Now you can walk into any decision informed in minutes. Next, you'll turn AI on your own numbers — using it to read your business data and surface insights without being a data analyst.</p>`,
          question: {
            text: "What turns a research summary into something valuable for a leader?",
            options: [
              "Collecting as much information as possible and filing it away",
              "Translating findings into implications, options, and a decision for your situation",
              "Making the summary as long and detailed as possible",
            ],
            correctIndex: 1,
            explanation:
              "Information only has value when it changes a decision. Pushing research into implications and concrete options is what turns intelligence into leadership.",
          },
        },
      ],
    },
    {
      title: "Data-Driven Management",
      summary: "Read your business data and surface insights with AI — no data-analyst skills required",
      content: `<p>Your business generates more data than you could ever manually analyze: sales numbers, customer feedback, operational metrics, survey results. Most of it goes unread. AI lets you ask your data questions in plain language and get real answers — turning spreadsheets you'd normally ignore into decisions you can defend.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm going to upload a spreadsheet of [what the data is — e.g. monthly sales / customer feedback / support tickets]. Act as my data analyst. First, tell me what the data contains and any quality issues you notice. Then surface the 3 most important trends or patterns, show the numbers behind each, and flag anything surprising or concerning. Finally, suggest 2-3 questions I should ask next. Be clear about what the data does and does NOT let us conclude.",
        note: "Upload a real CSV or Excel file (remove anything confidential first). Ask follow-ups in plain English — 'why did March dip?' or 'which segment is growing fastest?' — like talking to an analyst.",
      },
      steps: [
        {
          html: `<h3>You don't need to be a data analyst</h3><p>The old barrier to data-driven decisions was skill: pivot tables, formulas, query languages. AI removes it. You can now:</p><ul><li><strong>Upload a spreadsheet</strong> and ask questions in plain language — "what's our fastest-growing segment?"</li><li><strong>Get instant analysis</strong> across hundreds or thousands of rows a person would take hours to comb through</li><li><strong>Analyze unstructured feedback</strong> — hundreds of survey comments or reviews summarized into themes in seconds</li></ul><p>This democratizes analysis: the leader who understands the business can now interrogate the data directly, without waiting on a report.</p>`,
          question: {
            text: "What does AI change about data analysis for non-technical leaders?",
            options: [
              "It lets them ask questions of their data in plain language and get real insights",
              "It removes the need for the business to collect any data",
              "It guarantees every number it produces is correct without review",
            ],
            correctIndex: 0,
            explanation:
              "AI drops the skill barrier — you can interrogate spreadsheets and feedback in plain English. It doesn't remove the need to collect data or to sanity-check results, but it puts analysis directly in your hands.",
          },
        },
        {
          html: `<h3>Ask better questions — and keep your judgment</h3><p>AI will answer whatever you ask, so the quality of your questions drives the quality of your insight. And it will happily point out patterns that don't mean what they seem:</p><ul><li><strong>Correlation isn't causation:</strong> "sales rose when we ran the campaign" may be the campaign — or the season, a competitor's stumble, or luck</li><li><strong>Treat findings as hypotheses,</strong> not conclusions — AI surfaces the pattern; your context decides what caused it</li><li><strong>Watch for missing context:</strong> AI only sees the data you give it, not what happened in the room or the market</li></ul><div class="discovery"><p>💡 <strong>AI finds the pattern; you supply the meaning</strong></p><p>Data can tell you <em>what</em> happened. Deciding <em>why</em> — and what to do about it — needs the business context and judgment only you have. That layer is exactly the human part AI is meant to free up.</p></div>`,
          question: {
            text: "AI shows that two things moved together in your data. What should you do?",
            options: [
              "Treat it as proof that one caused the other and act immediately",
              "Treat it as a hypothesis, apply business context, and confirm before concluding causation",
              "Ignore it, because AI can't be trusted with numbers",
            ],
            correctIndex: 1,
            explanation:
              "Correlation isn't causation. AI surfaces the pattern; your judgment and context determine what actually caused it. Acting on a coincidence is how data-driven decisions go wrong.",
          },
        },
        {
          html: `<h3>From dashboard to decision</h3><p>Insight that isn't acted on is just trivia. The leaders who win with data build a simple, repeatable habit:</p><ul><li><strong>Set a cadence</strong> — a weekly or monthly review where you run your key data through AI</li><li><strong>End every review with 1-2 concrete actions,</strong> not a wall of charts — "what will we do differently because of this?"</li><li><strong>Track whether the action worked,</strong> then feed that back into the next review</li></ul><p>This turns AI from a one-off novelty into an operating rhythm. You'll make faster, better-grounded calls week after week. Next, you'll use AI to look forward — generating and stress-testing strategic scenarios before you commit.</p>`,
          question: {
            text: "What's the best way to make AI data analysis actually improve your decisions?",
            options: [
              "Run a huge one-time analysis and never revisit it",
              "Build a regular review cadence that ends in 1-2 concrete actions",
              "Generate as many charts as possible for every meeting",
            ],
            correctIndex: 1,
            explanation:
              "A repeatable cadence that converts data into a couple of concrete actions is what compounds. Insight only matters when it changes what you do — then you check whether it worked.",
          },
        },
      ],
    },
    {
      title: "Scenario Planning & Strategic Decision-Making",
      summary: "Use AI to generate and stress-test strategic scenarios — and expose the risks you'd otherwise miss",
      content: `<p>Big decisions are risky because you can only hold so many possibilities in your head at once — so you commit to a plan without seeing how it could fail. AI is a tireless Thinking Partner for exactly this: it generates scenarios, argues the other side, and pressure-tests your strategy before real money and reputation are on the line.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "I'm considering this decision: [describe the plan or choice, with context and constraints]. Be my strategic thinking partner. First, generate 3 distinct scenarios of how this could play out (best case, most likely, worst case) with the key assumptions behind each. Then run a 'pre-mortem': imagine it's a year later and this failed badly — give me the 5 most likely reasons why. Finally, argue the strongest case AGAINST my plan, then suggest how I could de-risk it. Don't just agree with me.",
        note: "The goal isn't to get AI's answer — it's to see the risks and angles your own optimism hides. You still make the call; you just make it with your eyes open.",
      },
      steps: [
        {
          html: `<h3>Stress-test before you commit</h3><p>The most expensive mistakes come from plans that looked great until reality hit an angle you never considered. AI lets you explore those angles cheaply, in advance:</p><ul><li><strong>Generate multiple scenarios</strong> — best case, likely case, worst case — each with the assumptions it depends on</li><li><strong>Surface options you'd miss</strong> — AI can propose alternatives you were too close to the problem to see</li><li><strong>Explore consequences</strong> — "if we do X, what second-order effects should I expect?"</li></ul><p>This is pure Thinking Partner work: it doesn't decide for you, it widens the field of what you're deciding <em>about</em>.</p>`,
          question: {
            text: "Why generate multiple scenarios with AI before a big decision?",
            options: [
              "So AI can pick the winning option for you",
              "To stress-test the plan and surface risks and options you'd otherwise miss",
              "To produce a longer document to show stakeholders",
            ],
            correctIndex: 1,
            explanation:
              "Scenario planning widens your view before you commit — exposing assumptions, risks, and alternatives you're too close to see. AI expands the options; the decision stays yours.",
          },
        },
        {
          html: `<h3>Red-team your own plan</h3><p>Left alone, we all seek evidence that we're right — confirmation bias quietly steers us toward the plan we already like. AI is the perfect antidote because you can instruct it to disagree:</p><ul><li><strong>The pre-mortem:</strong> "Imagine this failed a year from now — what went wrong?" surfaces failure modes while you can still prevent them</li><li><strong>The steelman-against:</strong> "Make the strongest possible case AGAINST my plan" forces you to face the best counterargument, not a weak one</li><li><strong>The blind-spot check:</strong> "What am I assuming that might not be true?" exposes hidden dependencies</li></ul><div class="discovery"><p>💡 <strong>Ask AI to argue with you</strong></p><p>A yes-man is worthless in strategy. Explicitly telling AI to challenge you — "don't just agree" — turns it from a flatterer into a sparring partner that makes your plan stronger.</p></div>`,
          question: {
            text: "What's the value of asking AI to argue against your plan?",
            options: [
              "It proves your plan is right when AI can't beat it",
              "It counters confirmation bias and exposes failure modes and blind spots",
              "It lets you skip getting input from your actual team",
            ],
            correctIndex: 1,
            explanation:
              "We instinctively defend the plan we like. Instructing AI to challenge it — pre-mortems, counterarguments, blind-spot checks — reveals weaknesses while you can still fix them.",
          },
        },
        {
          html: `<h3>AI frames the options — you make the call</h3><p>Scenario work can produce a lot of analysis. Structure keeps it useful, and judgment closes it out:</p><ul><li><strong>Have AI lay out a decision framework</strong> — options, criteria, trade-offs, and what each choice optimizes for</li><li><strong>Weigh it against what AI can't see</strong> — your risk appetite, relationships, values, timing, and gut read of the people involved</li><li><strong>Own the decision:</strong> AI is accountable for nothing; you are accountable for everything. It informs; you decide</li></ul><p>Used this way, you commit to strategy with far more confidence and far fewer nasty surprises. Next, you'll bring AI into the room where decisions actually get made — your meetings — and turn talk into action.</p>`,
          question: {
            text: "In AI-assisted strategic decisions, who makes the final call?",
            options: [
              "AI, since it can process more scenarios than a human",
              "You — AI frames options and risks, but human judgment and accountability stay with you",
              "Whichever scenario AI rates as most likely",
            ],
            correctIndex: 1,
            explanation:
              "AI structures the decision and stress-tests it, but it's accountable for nothing. Your judgment weighs the things AI can't see, and you own the outcome.",
          },
        },
      ],
    },
    {
      title: "AI in Meetings: From Talk to Action",
      summary: "Capture decisions, assign owners, and close the loop — so meetings produce action, not just talk",
      content: `<p>Meetings are where decisions get made — and then quietly lost. Notes are patchy, action items are forgotten, and the same topics resurface a month later. AI meeting tools fix the leak: they capture everything, extract what matters, and turn conversation into tracked commitments.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here's the transcript (or my rough notes) from a meeting: [paste it]. Turn it into a clear summary with these sections: (1) Key decisions made, (2) Action items as a table with columns for task, owner, and due date, (3) Open questions still unresolved, and (4) A 3-sentence recap I can send to people who missed it. If an owner or deadline wasn't stated for an action, flag it as 'needs owner/date' rather than guessing.",
        note: "Most AI notetakers (Otter, Fathom, Fireflies, or your video platform's built-in one) produce a transcript automatically — paste that in. The flag for missing owners is what stops action items from silently dying.",
      },
      steps: [
        {
          html: `<h3>The meeting leak</h3><p>The problem with meetings usually isn't the meeting — it's what happens after. Decisions evaporate because:</p><ul><li><strong>Note-taking competes with participating</strong> — whoever's typing isn't fully thinking</li><li><strong>Action items stay vague</strong> — "we should look into that" with no owner and no date dies on the vine</li><li><strong>Nothing closes the loop</strong> — next time, the same issue is rediscovered from scratch</li></ul><p>AI removes the trade-off: it captures and transcribes everything, so humans can focus on the conversation while nothing gets lost.</p>`,
          question: {
            text: "What's the core meeting problem AI is best at fixing?",
            options: [
              "Meetings being scheduled too early in the morning",
              "Decisions and action items getting lost instead of captured and followed up",
              "Too many people being invited to each meeting",
            ],
            correctIndex: 1,
            explanation:
              "The leak is after the meeting: decisions fade and action items go untracked. AI captures everything so the conversation actually turns into commitments.",
          },
        },
        {
          html: `<h3>Make summaries actionable</h3><p>A transcript is raw material; a wall of text no one reads is barely better than no notes. The value is in the structure AI imposes on it:</p><ul><li><strong>Separate decisions from discussion</strong> — what was actually agreed, not everything that was said</li><li><strong>Every action item needs an owner and a due date</strong> — an action with neither is a wish, not a commitment</li><li><strong>Surface open questions</strong> so unresolved items don't disappear</li></ul><div class="discovery"><p>💡 <strong>No owner, no deadline, no action</strong></p><p>The single biggest reason action items fail is a missing owner or date. Have AI flag any action lacking one — "needs owner" — so you assign it before the meeting ends, while everyone's still in the room.</p></div>`,
          question: {
            text: "What makes an AI meeting summary genuinely actionable?",
            options: [
              "It captures every single word that was spoken",
              "Each action item has a clear owner and a due date",
              "It's formatted with lots of colors and headings",
            ],
            correctIndex: 1,
            explanation:
              "An action item without an owner and a deadline is just a wish. Clear ownership and dates are what turn a summary into follow-through.",
          },
        },
        {
          html: `<h3>Close the loop — responsibly</h3><p>Capture is step one; accountability and etiquette complete it:</p><ul><li><strong>Send the summary fast</strong> — same day, while it's fresh, so owners can act and absentees stay aligned</li><li><strong>Carry actions forward</strong> — start the next meeting by reviewing last meeting's items; that habit alone transforms follow-through</li><li><strong>Get consent to record</strong> — tell participants when AI is capturing the meeting; transparency protects trust and often the law</li><li><strong>Mind sensitive conversations</strong> — some discussions (personnel, legal, confidential) shouldn't be fed to an AI tool at all</li></ul><p>Done right, every meeting now ends with a clear record and tracked commitments. Next, you'll use AI to make what you present in those rooms genuinely persuasive.</p>`,
          question: {
            text: "What's a responsible practice when using AI to record meetings?",
            options: [
              "Record silently so people behave more naturally",
              "Tell participants they're being recorded and get their consent",
              "Feed every conversation, including confidential HR matters, into the tool",
            ],
            correctIndex: 1,
            explanation:
              "Transparency is non-negotiable — inform participants and get consent before AI captures a meeting. And keep truly sensitive conversations out of these tools entirely.",
          },
        },
      ],
    },
    {
      title: "Powerful Presentations & Storytelling",
      summary: "Turn data and ideas into a story that persuades — using AI to build the narrative, not just the slides",
      content: `<p>You can have the best analysis in the room and still lose it — because facts inform, but stories persuade. Great leaders package ideas as narratives people feel and remember. AI is a powerful partner for this: it helps you find the story inside your data and shape it into a presentation that lands.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Gamma",
        url: "https://gamma.app",
        prompt:
          "I need to present [topic] to [audience] and I want them to [desired outcome — approve budget / change direction / feel confident]. Here are my key points and any data: [paste them]. First, structure this as a persuasive narrative using Situation → Complication → Resolution: what's the current reality, what's the tension or problem, and what's my recommended path forward. Give me a slide-by-slide outline with ONE core idea per slide and a clear headline for each. Then draft the opening and closing lines that will make it stick.",
        note: "Gamma turns the outline into slides automatically, but nail the narrative first. You can also build the structure in ChatGPT/Claude and paste it into any deck tool.",
      },
      steps: [
        {
          html: `<h3>Story persuades; data alone doesn't</h3><p>Audiences don't remember spreadsheets — they remember the story the spreadsheet was telling. If you present facts without a narrative, people nod and forget. Structure changes that:</p><ul><li><strong>A story creates tension and resolution</strong> — a reason to care, then a payoff — that raw data never provides</li><li><strong>People make decisions emotionally</strong> and justify them with logic; a story reaches both</li><li><strong>Narrative gives your numbers a job</strong> — each fact becomes evidence for a point, not a data dump</li></ul><p>So the first move in any presentation isn't opening PowerPoint — it's deciding the story you're telling.</p>`,
          question: {
            text: "Why lead a presentation with a story rather than the data?",
            options: [
              "Data is unimportant and should be left out entirely",
              "Story creates tension, meaning, and memorability that raw data alone can't",
              "Stories are faster to make than charts",
            ],
            correctIndex: 1,
            explanation:
              "Facts inform, stories persuade. A narrative gives your data a reason to matter and makes it memorable — the numbers become evidence for a point rather than a dump.",
          },
        },
        {
          html: `<h3>Build the narrative first with AI</h3><p>Use AI as a Thinking Partner on structure before you touch slides. Proven frameworks it can apply instantly:</p><ul><li><strong>Situation → Complication → Resolution:</strong> here's where we are, here's the problem, here's my recommendation</li><li><strong>Before → After → Bridge:</strong> the world today, the better future, and how we get there</li><li><strong>One idea per slide:</strong> ask AI to enforce it — a slide trying to say three things says none</li></ul><div class="discovery"><p>💡 <strong>Outline before slides, every time</strong></p><p>Jumping straight into a deck tool leads to pretty slides with a muddled message. Lock the narrative arc and headline-per-slide first; then design. AI makes that outline take minutes, not an afternoon.</p></div>`,
          question: {
            text: "What's the best way to use AI when building a presentation?",
            options: [
              "Ask it to generate 50 slides and pick the ones you like",
              "Have it structure the narrative and slide-by-slide outline first, then design",
              "Skip structure and let it choose fonts and colors",
            ],
            correctIndex: 1,
            explanation:
              "Nail the story first. AI can build a narrative arc with one idea per slide in minutes — then you design. Starting with slides produces pretty decks with muddled messages.",
          },
        },
        {
          html: `<h3>Visuals and delivery — keep it yours</h3><p>Once the story is set, AI accelerates the rest without hollowing it out:</p><ul><li><strong>Generate visuals and layouts</strong> — tools like Gamma turn your outline into designed slides; image tools create supporting graphics</li><li><strong>Tighten the words</strong> — ask AI to cut a wordy slide to a single sharp headline</li><li><strong>But keep the substance true and human</strong> — the recommendation, the conviction, and the real stakes are yours; AI polishes the vehicle, not the message</li></ul><p>The result is a presentation that's both beautifully made and unmistakably yours. Next, you'll apply the same "AI drafts, you refine" muscle to your everyday communications.</p>`,
          question: {
            text: "Where's the line when using AI for presentations?",
            options: [
              "Let AI invent impressive results to make the story stronger",
              "Use AI for structure, wording, and visuals — but keep the message true and the conviction yours",
              "Never use AI for any part of a presentation",
            ],
            correctIndex: 1,
            explanation:
              "AI is great for structure, tightening copy, and generating visuals. The substance — your real data, recommendation, and conviction — stays true and human. Never let it fabricate results to strengthen a story.",
          },
        },
      ],
    },
    {
      title: "High-Impact Communications",
      summary: "Draft, tailor, and refine your messages with AI — clearer, faster, and matched to every audience",
      content: `<p>Leaders live in messages: emails, announcements, updates, and the hard conversations nobody enjoys. Writing them well takes time you rarely have. AI is a superb Doing Engine here — it kills the blank page, adapts your tone to any audience, and gets you to a strong draft in seconds, so your energy goes to judgment, not wording.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me write [the message — e.g. an announcement / update / difficult email]. Context: [what's happening and why]. Audience: [who's reading and what they care about]. Goal: [what I want them to think, feel, or do]. Desired tone: [e.g. warm but direct / confident / reassuring]. Write a first draft, keep it concise, and lead with the main point. Then give me one alternative version in a different tone so I can compare. Flag anything that could be misread.",
        note: "Then refine — you know the people and the politics. Try asking it to 'rewrite this for a skeptical executive' vs 'for my team' to feel how tailoring changes the message.",
      },
      steps: [
        {
          html: `<h3>AI drafts, you refine</h3><p>The hardest part of most writing is starting. AI removes it — but the model to keep in mind is <em>draft-and-refine</em>, not <em>generate-and-send</em>:</p><ul><li><strong>AI beats the blank page</strong> — a solid first draft in seconds is far easier to improve than empty space</li><li><strong>You bring what AI can't</strong> — the real context, the relationships, the political read, the final judgment</li><li><strong>The workflow is a loop:</strong> AI drafts → you refine → AI tightens → you approve</li></ul><p>This is Doing Engine work that reliably saves hours a week — as long as you stay the editor, never just the forwarder.</p>`,
          question: {
            text: "What's the best role for AI in your day-to-day communications?",
            options: [
              "Write the message and send it automatically without review",
              "Produce a strong first draft that you then refine and approve",
              "Only use it for messages that don't matter",
            ],
            correctIndex: 1,
            explanation:
              "AI's superpower here is beating the blank page. You stay the editor — bringing context, relationships, and final judgment — and never just forward what it wrote.",
          },
        },
        {
          html: `<h3>Same message, right for each audience</h3><p>The exact same news lands differently on a skeptical executive, a nervous team, and a customer. AI can retune tone and framing instantly — if you tell it who's reading:</p><ul><li><strong>Give it the audience and the goal:</strong> "for a busy CFO who cares about cost" vs "for my team who's worried about workload"</li><li><strong>Ask for variants:</strong> generate two or three tones and pick what fits — comparison makes the right choice obvious</li><li><strong>Match the medium:</strong> a Slack message, a formal email, and a town-hall script need different lengths and registers</li></ul><div class="discovery"><p>💡 <strong>Context in, quality out</strong></p><p>Vague prompt, generic message. The more you tell AI about the reader, the situation, and the outcome you want, the more the draft sounds like it was written for that exact person — because it was.</p></div>`,
          question: {
            text: "Why give AI the audience and goal before it drafts a message?",
            options: [
              "It's required or the tool won't respond",
              "So it can tailor tone and framing to land with that specific reader",
              "To make the message as long as possible",
            ],
            correctIndex: 1,
            explanation:
              "The same content lands differently on different readers. Feeding AI the audience, situation, and desired outcome is what makes a draft feel written for that exact person.",
          },
        },
        {
          html: `<h3>High-stakes messages stay human</h3><p>The more sensitive the message, the more judgment it needs — AI assists, but you own it:</p><ul><li><strong>Difficult and emotional messages</strong> — layoffs, conflict, bad news — need genuine empathy and personal ownership AI can't supply</li><li><strong>Always read before you send</strong> — check for anything tone-deaf, ambiguous, or factually off; your name is on it</li><li><strong>Protect confidentiality</strong> — don't paste sensitive personnel or customer details into an AI tool to draft around them</li><li><strong>Keep your voice</strong> — over-polished, AI-perfect messages can feel hollow; edit until it sounds like you</li></ul><p>Use AI to communicate faster and clearer, while the human weight of your words stays yours. In the final lesson, you'll bring all of this together under the responsibility that makes it sustainable: ethical leadership and governance.</p>`,
          question: {
            text: "What stays human when AI helps with a difficult, sensitive message?",
            options: [
              "Nothing — AI handles sensitive messages best on its own",
              "Empathy, final judgment, and always reviewing before you send",
              "Only the choice of which font to use",
            ],
            correctIndex: 1,
            explanation:
              "AI can draft, but sensitive messages demand real empathy and personal ownership. You always review before sending, protect confidential details, and keep the words sounding like you.",
          },
        },
      ],
    },
    {
      title: "Ethical Leadership & Governance in an AI World",
      summary: "Lead AI adoption responsibly — accountability, data protection, fairness, and team governance that lasts",
      content: `<p>You've built a full AI toolkit for leadership. This final lesson is what makes it sustainable and trustworthy: the responsibility that comes with the power. Ethical leadership in an AI world isn't a compliance checkbox — it's what protects your people, your customers, and your credibility as you scale AI across your work and your team.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "Help me draft a simple, one-page AI-use policy for my team. Context: we're a [type of team/company] and people are starting to use tools like ChatGPT and Claude for [typical tasks]. Cover, in plain language: (1) approved uses and clear no-go zones, (2) data rules — what must NEVER be pasted into AI tools (confidential, customer, personal data), (3) the requirement to verify AI outputs before acting or sending, (4) transparency — when to disclose AI involvement, and (5) that accountability for any AI-assisted decision stays with the human. Keep it practical and human, not legalistic.",
        note: "A short, clear policy people actually read beats a long one nobody opens. Share the draft with your team and refine it together — shared ownership makes it stick.",
      },
      steps: [
        {
          html: `<h3>Accountability doesn't transfer to AI</h3><p>This is the foundation everything else rests on: <strong>AI is accountable for nothing; the human is accountable for everything.</strong></p><ul><li><strong>"The AI said so" is never a defense</strong> — for a decision, a message, or an analysis that goes wrong</li><li><strong>You own the output</strong> the moment you act on it or send it — which is exactly why you verify before you do</li><li><strong>Delegating the task doesn't delegate the responsibility</strong> — using AI to draft or analyze changes your workflow, not your accountability</li></ul><p>Leaders who internalize this use AI more carefully and more effectively — because they treat its output as a draft to own, not an answer to trust blindly.</p>`,
          question: {
            text: "Who is accountable when an AI-assisted decision goes wrong?",
            options: [
              "The AI tool that produced the output",
              "The human leader — accountability never transfers to AI",
              "No one, since AI made the recommendation",
            ],
            correctIndex: 1,
            explanation:
              "\"The AI said so\" is never a defense. Using AI changes your workflow, not your responsibility — you own every output you act on, which is why you verify first.",
          },
        },
        {
          html: `<h3>Protect data and guard against bias</h3><p>Two risks demand a leader's active attention every time AI is used:</p><ul><li><strong>Confidentiality:</strong> anything you paste into a tool may be stored or used to train it — never feed confidential, customer, or personal data into unapproved AI tools</li><li><strong>Bias:</strong> AI learns from human data and can reproduce or amplify bias — in hiring, evaluations, or customer decisions, review outputs for fairness rather than assuming neutrality</li><li><strong>Accuracy:</strong> AI can state wrong things confidently ("hallucinate") — verify facts before they drive a decision</li></ul><div class="discovery"><p>💡 <strong>Would you email it to a stranger?</strong></p><p>A simple test before pasting anything into an AI tool: if you wouldn't be comfortable sending this information to an outside party, don't put it in. When in doubt, anonymize or leave it out.</p></div>`,
          question: {
            text: "What's a safe practice when using AI tools at work?",
            options: [
              "Paste in whatever you need — the tool keeps everything private automatically",
              "Never feed confidential or personal data into unapproved tools, and review outputs for bias",
              "Trust AI outputs on hiring and evaluations since AI is neutral",
            ],
            correctIndex: 1,
            explanation:
              "Data you paste can be stored or used for training, so keep confidential and personal data out of unapproved tools. And AI can reproduce human bias — review sensitive outputs for fairness rather than assuming neutrality.",
          },
        },
        {
          html: `<h3>Build governance that lasts — your capstone</h3><p>Individual good habits don't scale unless you turn them into shared norms. That's the leader's job:</p><ul><li><strong>Set a clear, simple AI policy</strong> — approved uses, no-go zones, data rules, and the verify-before-acting rule, in language people actually read</li><li><strong>Model transparency</strong> — disclose AI involvement where it matters and normalize talking about how the team uses it</li><li><strong>Make it a living practice</strong> — revisit norms as tools and risks evolve, and invite your team to shape them</li></ul><div class="discovery"><p>💡 <strong>You did it — here's your toolkit</strong></p><p>You've gone from orchestrating intelligence, to research and data, to scenario planning, meetings, presentations, and communications — and now to leading it all responsibly. You didn't just learn to use AI; you learned to lead with it while keeping human judgment, ethics, and accountability at the center. That's what makes AI a genuine force multiplier for your leadership. Congratulations!</p></div>`,
          question: {
            text: "What makes AI adoption sustainable and trustworthy across a team?",
            options: [
              "Letting everyone use AI however they want with no guidelines",
              "Clear, simple governance and transparency that the team helps shape",
              "Banning AI to avoid all risk",
            ],
            correctIndex: 1,
            explanation:
              "Good individual habits only scale when they become shared norms. Simple governance, transparency, and a living policy the team helps shape make AI adoption both sustainable and trustworthy — neither a free-for-all nor a ban.",
          },
        },
      ],
    },
  ],
};
