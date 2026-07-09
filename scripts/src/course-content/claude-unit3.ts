import type { UnitSeed } from "./types";

export const CLAUDE_UNIT_3: UnitSeed = {
  title: "Claude in Practice",
  lessons: [
    {
      title: "Writing & Editing",
      summary: "First drafts, rewrites, and edits that keep your voice",
      estimatedMinutes: 12,
      content: `<p>Writing is where Claude earns its fans — its drafts read warmer and less formulaic. This lesson turns that strength into a reliable workflow.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "Here's a draft I wrote: [paste your email, post, or document]. First, tell me which paragraph is weakest and why. Then edit in one pass for clarity only — fix awkward phrasing and grammar, but leave my word choices and voice intact. List each change you make with a one-line reason so I can accept or reject them.",
        note: "Edit in focused passes (structure, then clarity, then tone) rather than asking Claude to 'make it better' all at once.",
      },
      steps: [
        {
          html: `<h3>Why writers reach for Claude</h3><p>Claude's prose tends to sound human — less "de-robotifying" needed than with most AI tools. It maintains tone over long pieces, handles nuance well, and critiques its own drafts honestly.</p><h3>The workflow that works</h3><ul><li><strong>Brief deeply:</strong> audience, purpose, key points, what to avoid. Paste writing samples to clone your voice — everything you learned in the creativity lesson applies here.</li><li><strong>Draft, then interrogate:</strong> "What's the weakest paragraph and why?" Claude is a surprisingly good critic of its own work.</li><li><strong>Edit in passes:</strong> structure first, then clarity, then tone. One type of fix per pass beats "make it better".</li><li><strong>Preserve authorship:</strong> when the text matters, ask for edits and options rather than wholesale rewrites.</li></ul>`,
          question: {
            text: "Your draft needs structural fixes, clarity fixes, and tone fixes. What's the most effective way to work with Claude?",
            options: [
              'One prompt: "Fix everything that\'s wrong with this"',
              "Three passes: structure first, then clarity, then tone — one type of fix per pass",
              "Ask Claude to rewrite the whole piece from scratch in its own style",
            ],
            correctIndex: 1,
            explanation:
              "Editing in focused passes keeps each change reviewable and prevents Claude from trading one quality off against another. Wholesale rewrites also cost you your own voice.",
          },
        },
        {
          html: `<h3>Editing without losing yourself</h3><p>The danger with AI editing isn't bad output — it's <em>generic</em> output that sands off your voice. Guard against it:</p><ul><li><strong>Ask for minimal edits:</strong> "Fix only grammar and awkward phrasing. Do not change word choice that's clearly intentional."</li><li><strong>Request options, not verdicts:</strong> "Give me three ways to end this paragraph" keeps you the decision-maker.</li><li><strong>Use track-changes style:</strong> "List each suggested change with a one-line reason" so you accept or reject individually.</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Run the same brief through Claude and another AI and compare. Building your own taste for which model writes best for <em>your</em> voice is a genuine professional skill.</p></div><h3>Sensitive writing</h3><p>Claude is particularly strong on delicate pieces — difficult feedback, apologies, sensitive announcements — because it weighs implications before drafting. Give it the relationship context: "This is for a loyal customer we let down twice this year" changes everything.</p>`,
          question: {
            text: "You're editing an essay where your distinct voice is the whole point. Which instruction protects it best?",
            options: [
              '"Rewrite this to be as polished as possible"',
              '"List each suggested change with a reason — fix grammar and clarity only, and leave intentional stylistic choices alone"',
              '"Make this sound more professional"',
            ],
            correctIndex: 1,
            explanation:
              "Itemized, scoped edits keep you in control of every change. Open-ended polish requests invite Claude to normalize exactly the quirks that make the writing yours.",
          },
        },
      ],
    },
    {
      title: "Understanding, Research, and Synthesis",
      summary: "Turn long, messy material into decisions you can trust",
      estimatedMinutes: 12,
      content: `<p>Claude excels at reading carefully and reasoning about what it read — which makes it a research workhorse for reports, contracts, transcripts, and papers.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "I'm about to read [a long document you need to get through, e.g. a report, contract, or set of meeting notes] — I'll paste it below. I'm a [your role] deciding [the decision you need to make]. Summarize it for that decision: the key points, the three biggest risks, and anything that contradicts the optimistic case. For each claim, point to where in the document it comes from.",
        note: "Before quoting any striking figure, ask Claude to point to the exact passage it came from — then check it yourself.",
      },
      steps: [
        {
          html: `<h3>The research workhorse</h3><p>Claude's combination of huge context and careful reading unlocks patterns that feel like superpowers:</p><ul><li><strong>Multi-document synthesis:</strong> "Across these three reports, where do the authors disagree, and whose evidence is stronger?"</li><li><strong>Structured extraction:</strong> "Pull every deadline and obligation from this contract into a table with clause references."</li><li><strong>Layered summaries:</strong> "One paragraph for the exec team, one page for me, and a list of anything surprising."</li><li><strong>Learning mode:</strong> "Explain this paper's method as if I know statistics but not machine learning."</li></ul><p>The common thread: don't just ask for a summary — ask for the <strong>shape of understanding you need</strong>.</p>`,
          question: {
            text: "You have a 60-page industry report and 20 minutes before a meeting. Which request gets you the most useful result?",
            options: [
              '"Summarize this report"',
              '"Summarize this for a product manager deciding whether to enter this market: key trends, the three biggest risks, and anything that contradicts the optimistic case"',
              '"List every fact in this report"',
            ],
            correctIndex: 1,
            explanation:
              "Naming your role, your decision, and the shape of the answer turns a generic summary into decision support. A bare summary makes Claude guess what matters to you.",
          },
        },
        {
          html: `<h3>Synthesis with honesty</h3><p>Good research includes knowing what you <em>don't</em> know. Build these habits:</p><ul><li><strong>Demand sourcing:</strong> "For each claim, point to where in the document it comes from."</li><li><strong>Separate fact from inference:</strong> "Mark which conclusions are stated in the material and which are your interpretation."</li><li><strong>Invite uncertainty:</strong> Claude is more likely than most tools to say "the document doesn't address this" — reward that by asking for gaps explicitly.</li></ul><h3>The cutoff caveat</h3><p>For anything factual and recent, remember Claude's knowledge has a training cutoff — <strong>paste in current material</strong> rather than trusting memory, and verify high-stakes claims at the source.</p>`,
          question: {
            text: 'Claude\'s synthesis of your documents includes a striking statistic you plan to quote to a client. What should you do first?',
            options: [
              "Quote it — Claude read the documents carefully",
              'Ask Claude to point to exactly where in the documents the number comes from, and check that passage yourself',
              "Soften the claim so being wrong matters less",
            ],
            correctIndex: 1,
            explanation:
              "Tracing claims back to the source is the core verification habit. If Claude can't point to the passage, the number may be an inference or an error — and you'll find out before the client does.",
          },
        },
      ],
    },
    {
      title: "Strategic Thinking and Critical Review",
      summary: "Use Claude to pressure-test plans, not just produce them",
      estimatedMinutes: 12,
      content: `<p>Claude's careful judgment makes it a strong sparring partner: it can argue against your plan, find the holes in your logic, and weigh tradeoffs you'd rather not see.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "Here's a plan I'm about to commit to: [describe your plan, e.g. a strategy, a project, or a big purchase]. Don't reassure me — pressure-test it. Assume it failed six months from now and write the three most plausible stories of why. Then tell me which of those failures I could detect earliest, and what I should watch for.",
        note: "Keep yourself the decision-maker — Claude's job is to make the risks visible, not to make the call for you.",
      },
      steps: [
        {
          html: `<h3>From cheerleader to sparring partner</h3><p>Most people use AI to confirm their plans. The higher-value move is the opposite: use Claude to <strong>attack</strong> them while changing course is still cheap.</p><ul><li><strong>Steelmanning:</strong> "Argue the strongest case against my plan, then rate my rebuttals."</li><li><strong>Pre-mortem:</strong> "Assume this launch failed six months from now. Write the three most plausible stories of why."</li><li><strong>Red-team review:</strong> "You're a skeptical board member reading this proposal. What do you challenge first?"</li><li><strong>Tradeoff surfacing:</strong> "What am I implicitly giving up by choosing this option?"</li></ul><p>Claude's willingness to engage seriously with the <em>against</em> case — rather than flattering you — is exactly the design philosophy from lesson one paying off.</p>`,
          question: {
            text: "You're about to commit a quarter's budget to a new strategy you feel great about. What's the highest-value prompt before you commit?",
            options: [
              '"List all the reasons this strategy is a good idea"',
              '"Assume this strategy failed six months from now — write the most plausible stories of why, and tell me which failure I could detect earliest"',
              '"Rewrite my strategy document with more confident language"',
            ],
            correctIndex: 1,
            explanation:
              "A pre-mortem surfaces failure modes while you can still adapt, and asking which failure shows up earliest gives you a monitoring plan. Confirmation and confident wording add risk, not insight.",
          },
        },
        {
          html: `<h3>Reviewing arguments and decisions</h3><p>The same critical muscle works on anything with logic in it:</p><ul><li><strong>Gap-finding:</strong> "Review this argument and point out logical gaps or unsupported leaps."</li><li><strong>Assumption audit:</strong> "List every assumption this plan depends on, ranked by how catastrophic it'd be if wrong."</li><li><strong>Both-sides brief:</strong> "Strongest argument for each side, then your recommendation with confidence level."</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Keep yourself the decision-maker. Claude's job is to make the tradeoffs visible and the reasoning auditable — the call is yours. "Help me think it through", not "decide for me".</p></div><p>This is Claude at its best: a tireless critic with no ego and no agenda, available at the exact moment a second opinion matters most.</p>`,
          question: {
            text: "What's the right division of labor when using Claude for a big decision?",
            options: [
              "Claude surfaces tradeoffs, assumptions, and counterarguments; you make the call",
              "Claude makes the decision so you avoid personal bias",
              "Claude should only be used after the decision is made, to document it",
            ],
            correctIndex: 0,
            explanation:
              "Claude is a thinking partner: it makes the reasoning visible and pressure-tests it. Delegating the decision itself discards your context and accountability — and waiting until after the decision wastes the entire value of the review.",
          },
        },
      ],
    },
    {
      title: "Using Claude Alongside Other Tools",
      summary: "Route each task to the right AI and build your Claude playbook",
      estimatedMinutes: 12,
      content: `<p>The pros don't debate "which AI is best" — they route each task to the tool that wins at it. This final lesson gives you the routing guide and a weekly playbook.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "Help me build a personal AI playbook. I'm a [your job title] and my recurring work includes [list 3-4 tasks you do often]. For each task, tell me whether Claude is the strongest fit or another tool would win — and why. Then suggest one Claude Project I should set up and three saved prompts worth reusing for my most common tasks.",
        note: "Actually set up that one Project this week and use it on real work — a two-week review will show you where it saves the most time.",
      },
      steps: [
        {
          html: `<h3>The routing mindset</h3><p>You don't have to pick one AI forever. Professionals keep two or three assistants and route tasks to the best one — everything you learned in lesson one about design philosophies becomes a practical decision rule.</p><h3>Reach for Claude when…</h3><ul><li>The input is <strong>long</strong>: contracts, transcripts, books, big reports.</li><li>The output must <strong>read beautifully</strong>: essays, sensitive emails, articles.</li><li>The task needs <strong>careful judgment</strong>: tradeoffs, policy questions, nuanced feedback.</li><li>The work is <strong>continuous</strong>: Projects that build context over weeks.</li></ul><h3>Reach elsewhere when…</h3><ul><li>You need <strong>live web data</strong>, shopping or travel searches.</li><li>You need <strong>image generation</strong> as the core task.</li><li>You're deep in a specific <strong>ecosystem</strong> (e.g., Google Workspace → Gemini).</li><li>You need a fast, low-stakes draft <strong>right now</strong> with zero setup.</li></ul>`,
          question: {
            text: "Which of these tasks is the weakest fit for Claude compared to other tools?",
            options: [
              "Reviewing a 150-page merger agreement for risky clauses",
              "Generating a set of product photos for your online store",
              "Drafting a sensitive layoff announcement",
              "Pressure-testing a five-year strategy document",
            ],
            correctIndex: 1,
            explanation:
              "Image generation is a core task where other tools win. Long documents, sensitive writing, and strategic critique are exactly Claude's home turf.",
          },
        },
        {
          html: `<h3>Tools working together</h3><p>Routing isn't either/or — the strongest workflows chain tools:</p><ul><li>Use a search-strong tool to gather <strong>current</strong> facts and sources → paste them into Claude for careful synthesis and judgment.</li><li>Draft fast and loose in one tool → bring the draft to Claude for structural critique and a voice-preserving edit.</li><li>Let Claude produce the reasoning and the brief → hand visual production to an image tool.</li></ul><p>Run one real task through two AIs this week and compare. Your own head-to-head results beat any online opinion.</p>`,
          question: {
            text: "You need an analysis of this week's market news for a client memo. What's the strongest workflow?",
            options: [
              "Ask Claude alone — it will know the recent news",
              "Gather current articles with a live-search tool, then give them to Claude to synthesize into the memo with tradeoffs and caveats",
              "Skip AI entirely because the news is recent",
            ],
            correctIndex: 1,
            explanation:
              "Claude's knowledge has a training cutoff, so live facts should come from a current source — but synthesis, judgment, and polished writing are where Claude then earns its keep.",
          },
        },
        {
          html: `<h3>Your Claude playbook</h3><p>Time to systematize. Pick the patterns that fit your work and make them habits:</p><ul><li><strong>One Project</strong> set up with your core documents and instructions.</li><li><strong>Three saved prompts</strong> for recurring work: your weekly summary, your draft-and-critique loop, your document-analysis question set.</li><li><strong>One artifact template</strong> you reuse — a brief, checklist, or report skeleton.</li><li><strong>A verification habit</strong> for anything factual or high-stakes.</li></ul><p>Review after two weeks: what saved the most time? Double down there.</p><h3>You made it</h3><p>You've completed the Claude course. You know how it thinks, how to frame work for it, and when to reach for it over other tools. Let Claude handle the heavy reading — you make the calls. 🎓</p>`,
          question: {
            text: "What's the single best way to make this course pay off over the next two weeks?",
            options: [
              "Re-read the lessons until you've memorized them",
              "Set up one Project, save your recurring prompts, use them on real work — then review what saved the most time",
              "Wait until a perfect big project comes along before using Claude",
            ],
            correctIndex: 1,
            explanation:
              "Skill comes from routine use on real tasks. A standing Project plus saved prompts turns what you learned into a system — and the two-week review tells you where to double down.",
          },
        },
      ],
    },
  ],
};
