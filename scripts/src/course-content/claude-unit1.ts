import type { UnitSeed } from "./types";

export const CLAUDE_UNIT_1: UnitSeed = {
  title: "Claude",
  lessons: [
    {
      title: "Meet Claude",
      summary: "How Claude thinks, where it shines, and how it compares to other AI tools",
      estimatedMinutes: 15,
      content: `<p>Before any prompt or trick, the thing that decides whether Claude works for you is something quieter: what you expect from it. Claude isn't a faster chatbot — it's a reasoning partner that rewards a clear frame and goes vague when you don't give it one.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "I'm a [your job title] and I want to understand how to work with you well. Here's a real task on my plate right now: [describe a task you're stuck on]. Before you start, ask me any clarifying questions you need to do this properly — audience, goal, constraints, and what a great result looks like. Then wait for my answers.",
        note: "Notice how Claude asks questions instead of guessing — answering them is exactly the 'clear frame' that gets better results.",
      },
      steps: [
        {
          html: `<h3>Before any prompt or trick</h3><p>The thing that decides whether Claude works for you is something quieter: <strong>what you expect from it</strong>.</p><p>Claude isn't a faster chatbot — it's a <strong>reasoning partner</strong> that rewards a clear frame and goes vague when you don't give it one. And once you get it, everything else becomes easier — throughout this course, we'll take a closer look at how it's done.</p><h3>First impressions matter</h3><p>If you're coming to Claude from another AI tool, it might feel a little different at first. The answers may seem cautious, and the creativity might feel restrained. Sometimes Claude asks clarifying questions instead of jumping in.</p><p>That difference reflects a different design philosophy.</p>`,
        },
        {
          html: `<h3>How Claude approaches problems</h3><p>Instead of guessing, Claude reasons carefully before responding. It tries to:</p><ul><li>Collect context</li><li>Understand intent</li><li>Consider implications</li><li>Avoid oversimplified conclusions</li></ul><p>This makes Claude especially strong at tasks where clarity, nuance, and structure matter more than speed. Claude performs especially well when you need to:</p><ul><li>Work through complex ideas</li><li>Analyze long or detailed material</li><li>Refine writing or arguments</li><li>Explore sensitive or ambiguous topics</li></ul><p>In these situations, Claude's careful approach becomes a real advantage. It serves as your <strong>thinking partner</strong> instead of just generating answers.</p>`,
          question: {
            text: 'You type "Help me make my presentation better" and paste your slides. Instead of editing them, Claude replies: "Do you need clearer structure, tighter wording, stronger visuals? And who\'s the audience — your team, or a client pitch?" Why did Claude ask instead of just improving the slides?',
            options: [
              "Claude needs the slides converted to plain text before it can work with them",
              '"Better" and the audience were never defined, so Claude had no target to aim at',
              "Claude always asks at least one question before starting any task",
            ],
            correctIndex: 1,
            explanation:
              '"Better" could mean a dozen things, and the audience was never named — so Claude asked rather than guess. Those questions are pointing at the details left out.',
          },
        },
        {
          html: `<h3>Where Claude struggles</h3><p>That same careful design can make Claude struggle when:</p><ul><li>The task goal is vague</li><li>The prompt relies on guesswork</li><li>You ask it to create something but don't set boundaries</li><li>Speed matters more than depth</li></ul><p>When this happens, Claude isn't failing — it's <strong>waiting for clearer direction</strong>.</p><h3>A different kind of creativity</h3><p>Claude can be creative — but not in a chaotic way. Its creativity tends to be:</p><ul><li>Thoughtful rather than flashy</li><li>Grounded rather than wild</li><li>Guided by structure and intent</li></ul><p>If you give Claude a clear frame, it explores deeply inside it. If you give it nothing, it plays it safe.</p>`,
          question: {
            text: "Which one of these requests is most likely to produce a weak or frustrating response from Claude?",
            options: [
              '"Write a text, come up with something creative"',
              '"Review this argument and point out logical gaps"',
              '"Help me think through a sensitive workplace decision"',
              '"Summarize this 40-page report and highlight the key tradeoffs"',
            ],
            correctIndex: 0,
            explanation:
              "Claude handles long documents, critique, and sensitive reasoning well, but open-ended prompts without clear direction often lead to cautious or flat results.",
          },
        },
        {
          html: `<h3>Claude's models</h3><p>Claude's performance and output quality depend on the model you go with. The tool offers a range of models:</p><ul><li><strong>Haiku</strong> — fast and light for simple tasks</li><li><strong>Sonnet</strong> — the balanced everyday choice</li><li><strong>Opus</strong> — powerful for advanced reasoning and complex projects</li></ul><p>Available models depend on your plan: free users typically get the lighter models, while paid plans unlock the most powerful ones. Model availability and usage limits change over time, so check Claude for the latest options on your account.</p><h3>One more dial: effort</h3><p>Next to the model name sits an <strong>effort control</strong>: turn it up, and Claude thinks longer and more thoroughly before answering; turn it down for faster replies. But neither dial fixes a vague prompt — more effort just gets you a thorough answer to the wrong question.</p><p>The model and effort change <em>how hard</em> Claude works; your frame still decides <em>what it works on</em>.</p>`,
        },
        {
          html: `<h3>Claude vs. other AI tools</h3><p>If you've used tools like ChatGPT, Gemini, or DeepSeek, Claude may feel familiar at first — but the differences show up quickly as tasks become more complex. These AIs aren't better or worse overall; they're optimized for different kinds of thinking.</p><h3>Claude and ChatGPT: different priorities</h3><p>ChatGPT is optimized for speed, flexibility, and conversational flow. It often jumps into a task quickly, even when the goal is loosely defined. Claude takes a more deliberate approach — it prefers clarity before action.</p><p>Ask both: <em>"Help me write a welcome email for new customers."</em></p><ul><li><strong>ChatGPT</strong> will likely jump straight into a draft — friendly, upbeat, ready to send.</li><li><strong>Claude</strong> is more likely to pause and ask: "What kind of customers? What tone fits your brand? Is there a specific action you want them to take?"</li></ul>`,
          question: {
            text: 'You ask for a welcome email and just need something usable in the next two minutes, no questions asked. Based on their design priorities, which tool matches that need best?',
            options: [
              "Claude — it always writes faster first drafts",
              "ChatGPT — it's optimized to jump in quickly even with loose goals",
              "Neither — AI can't write emails without a full brief",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT is tuned for speed and flow, so it drafts immediately. Claude prefers to understand before it writes — which pays off on complex work, but is slower for quick one-offs.",
          },
        },
        {
          html: `<h3>Claude and Gemini: focus vs. breadth</h3><p>Gemini is designed to work across a wide range of tasks and environments, especially Google's ecosystem. It adapts quickly and shines in tasks involving integrations, tools, or rapid synthesis.</p><p>Claude focuses more narrowly on <strong>reasoning quality and language consistency</strong>. It strongly maintains coherence across long conversations or large documents.</p><p>Paste a 20-page contract and ask: "What should I watch out for?"</p><ul><li><strong>Gemini</strong> might scan quickly, pull key terms, and give you a broad summary with links to resources.</li><li><strong>Claude</strong> is more likely to walk through the document section by section, flag specific risky clauses, and explain why each matters in plain language.</li></ul><h3>Claude and DeepSeek: caution vs. speed</h3><p>DeepSeek moves quickly from prompt to output, often producing confident answers even with minimal instructions. Claude prioritizes understanding the full context first and is more likely to slow down, clarify, or hedge when information is incomplete.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>When tasks are simple, the differences feel minor. As complexity increases: Claude asks clarifying questions more often, avoids guessing, and maintains tone and logic over long responses. This can feel slower at first — but it often reduces rewrites and misunderstandings later.</p></div>`,
          question: {
            text: "You're working on a long document where clarity, consistency, and careful reasoning matter more than speed. Which tool fits best?",
            options: ["Claude", "Gemini", "ChatGPT"],
            correctIndex: 0,
            explanation:
              "Claude's strength lies in sustained attention, structured reasoning, and maintaining coherence across longer work.",
          },
        },
        {
          html: `<h3>A small mindset shift</h3><p>The key thing to take away from this lesson: with Claude, you'll get better results by asking <strong>"Here's what I'm trying to solve. Let's think it through"</strong> — not "Can you do this for me?"</p><p>Claude responds best when treated as a <strong>collaborator</strong>.</p><h3>From conversations to workflows</h3><p>Now that you know how Claude approaches problems, it's time to see what it can actually build. Next up, you'll get hands-on with:</p><ul><li><strong>Projects</strong> — workspaces within Claude that keep your context, instructions, and files organized across conversations.</li><li><strong>Artifacts</strong> — documents, dashboards, websites, and other interactive outputs you can use immediately.</li></ul><p>In the next lesson, you'll start with Projects — a way to keep context and goals consistent across longer work. Ready to uncover Claude's full potential?</p>`,
          question: {
            text: "Which framing gets the best results from Claude?",
            options: [
              '"Can you do this for me?" — hand it the task and wait',
              '"Here\'s what I\'m trying to solve. Let\'s think it through" — treat it as a collaborator',
            ],
            correctIndex: 1,
            explanation:
              "Claude is built to be a reasoning partner. Giving it your goal and a frame to work inside consistently beats tossing over an unframed request.",
          },
        },
      ],
    },
    {
      title: "Working With Projects",
      summary: "Set up context once and let every chat start informed",
      estimatedMinutes: 12,
      content: `<p>Have you ever started a new chat to continue working on something, only to realize the AI doesn't remember what you discussed before? Claude's Projects is a feature designed to solve exactly this.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "Go to Projects → New Project and create one for [an ongoing project you're working on, e.g. a client proposal or a home renovation]. In the Instructions box, paste this: 'You're helping me with [project]. Key context: [goal, budget or constraints, who it's for, what matters most]. Keep these in mind across every chat in this Project.' Then start a new chat inside it and ask your first real question.",
        note: "Come back and open a second chat inside the same Project — notice Claude already knows your context without you re-explaining it.",
      },
      steps: [
        {
          html: `<h3>The problem Projects solve</h3><p>Have you ever started a new chat to continue working on something, only to realize that AI doesn't remember what you discussed before?</p><p>You end up re-explaining your goals, repeating constraints, and rebuilding context from scratch. The more complex the task, the more frustrating this gets. Claude's <strong>Projects</strong> feature is designed to solve exactly this.</p><h3>Scenario: planning a renovation</h3><p>Imagine you're planning a home renovation. You want to:</p><ul><li>Estimate a rough budget</li><li>Think through the order of work</li><li>Compare materials</li><li>Revisit decisions as new constraints appear</li></ul><p>You open Claude and start asking questions…</p>`,
          question: {
            text: "What's most likely to happen if you plan a multi-step renovation entirely in separate, one-off chats?",
            options: [
              "The answers become incorrect",
              "The conversation becomes faster over time",
              "Claude refuses to help",
              "You keep re-explaining context and correcting earlier assumptions",
            ],
            correctIndex: 3,
            explanation:
              "Claude can answer each question correctly — but without continuity, you end up doing extra work to keep everything aligned.",
          },
        },
        {
          html: `<h3>Feeling the friction</h3><p>You ask about flooring, then about plumbing and lighting. Each answer is helpful on its own — but none of them "remember" the bigger picture you're building. Earlier constraints fade unless you restate them.</p><p>The problem isn't Claude's reasoning. It's the lack of a <strong>stable frame</strong>.</p><h3>A different approach</h3><p>This is where Projects come in: a dedicated workspace where you set up your context once, and Claude carries it across every conversation inside it.</p><p>To create one, go to <strong>Projects → New Project</strong>, give it a name and a short description. Then there are two spaces to fill:</p><ul><li><strong>Instructions:</strong> your goals, constraints, and preferences in plain language.</li><li><strong>Files:</strong> attach any documents related to your work.</li></ul><p>On higher-tier plans, a Project also has a <strong>Memory</strong> block, where Claude holds onto details it learns as you work — scoped to just this Project. If you don't see it, your instructions and files already carry the context that matters most.</p><p>Every new chat inside the Project automatically sees those instructions and files. It's like giving Claude a briefing before every conversation — without actually having to brief it every time.</p>`,
        },
        {
          html: `<h3>Setting up a Project</h3><p>Start by describing context in the Instructions block. For the renovation:</p><ul><li>The size of the apartment</li><li>Your rough budget range</li><li>The rooms involved</li><li>What matters most (cost, speed, quality, or style)</li></ul><p>You can also break the plan into phases and tell Claude what should happen first, which steps depend on others, and where decisions can wait.</p><h3>Focused chats, shared context</h3><p>Want to discuss flooring and lighting separately without one endless thread? Open a new chat inside the Project for each phase — one for flooring, another for lighting, a third for plumbing. Each chat stays focused, but Claude still knows your overall budget, priorities, and earlier decisions.</p><p>This gives you two things at once: you stop re-explaining your situation, and everything stays organized with each phase in its own conversation.</p>`,
          question: {
            text: "A week later, you receive new contractor quotes and your budget changes. What's the best way to handle this in Projects?",
            options: [
              "Ignore the new quotes and keep working with the original budget",
              "Delete the Project and start a new one with updated numbers",
              "Update the Project instructions with the new budget and continue from where you left off",
              "Re-explain the entire renovation plan in a new chat",
            ],
            correctIndex: 2,
            explanation:
              "You update the instructions, and Claude adapts — no need to start afresh.",
          },
        },
        {
          html: `<h3>Revising without resetting</h3><p>That's the core idea behind Projects: they're not a one-time setup you need to get perfect — they're a <strong>living workspace</strong> where context builds up gradually and priorities can shift. Claude keeps up without losing the thread.</p><div class="discovery"><p>💡 <strong>A practical pattern</strong></p><p>Set the direction → explore options → revisit decisions → adjust constraints → refine the plan. You don't need perfect prompts — just continuity.</p></div><h3>Projects aren't the same everywhere</h3><p>You may have seen a Projects feature in other tools like ChatGPT. The basics rhyme — group conversations, add instructions and files — but Claude leans hard on <strong>continuity</strong>: earlier decisions in a Project actively shape later suggestions, so the work compounds rather than just staying organized.</p>`,
          question: {
            text: "You update the Project instructions: the budget drops from $30k to $15k. In your next chat about flooring, what should you expect from Claude?",
            options: [
              "It keeps recommending the original premium options until you start a brand-new Project",
              "It forgets the earlier flooring discussion entirely and starts the topic over with new constraints",
              "It factors the lower budget into new suggestions while keeping your earlier priorities intact",
            ],
            correctIndex: 2,
            explanation:
              "Updated instructions take effect across the Project — Claude doesn't need a fresh Project, and it doesn't discard your earlier priorities. It adjusts within the same continuous context.",
          },
        },
        {
          html: `<h3>Where Claude's Projects shine</h3><p>Projects feel strongest when the work itself is evolving. They're especially useful for:</p><ul><li>Planning that requires revisiting assumptions</li><li>Long-form writing with a consistent direction</li><li>Learning complex topics over time</li><li>Comparing options and tradeoffs repeatedly</li></ul><p>In these cases, continuity isn't just convenient — it actively improves the quality of thinking.</p><h3>Wrapping up</h3><p>You've seen how Projects keep your work connected: instructions and files you set once, and separate chats that all share the same context. This way every conversation starts informed instead of blank.</p>`,
          question: {
            text: "Which task is worth setting up a Project for?",
            options: [
              "Asking Claude to convert one measurement from inches to centimeters",
              "Writing a book over several months with consistent characters, tone, and plot decisions",
              "Getting a quick synonym for a word in an email",
            ],
            correctIndex: 1,
            explanation:
              "Long-running, evolving work with decisions that must stay consistent is exactly what Projects are for. One-off questions are fine in a regular chat.",
          },
        },
      ],
    },
    {
      title: "Create With Artifacts",
      summary: "Turn conversations into documents, tools, and pages you can actually use",
      estimatedMinutes: 12,
      content: `<p>Chat is great for thinking — but sometimes you need Claude to produce a thing: a document, a webpage, an interactive tool. That's what Artifacts are for.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "Create a reusable one-page template I can use at work as an Artifact: a [type of document you make often, e.g. project brief, meeting agenda, or client onboarding checklist]. Make it clean and practical with clear sections. Once it appears in the panel, I'll ask you to refine it.",
        note: "After it appears, refine it one change at a time — e.g. 'Add a budget section' or 'Turn these into checkboxes' — and watch the Artifact update in place.",
      },
      steps: [
        {
          html: `<h3>Beyond the chat bubble</h3><p>Most AI conversations end with an answer buried in the chat. But sometimes you don't want an answer — you want a <strong>thing</strong>: a polished document, a working calculator, a webpage, a diagram.</p><p>When you ask Claude to create something substantial, it opens an <strong>Artifact</strong>: a dedicated panel beside the conversation that holds the work itself, separate from the back-and-forth.</p><h3>Why this matters</h3><ul><li>The artifact <strong>updates in place</strong> as you request changes — no scrolling through chat history hunting for the latest version.</li><li>Code artifacts can actually <strong>run</strong>: ask for a quiz, a calculator, or a chart and use it immediately, right there.</li><li>When you're done, you can copy, download, or publish the artifact and share it with a link.</li></ul>`,
          question: {
            text: "What's the key difference between an Artifact and a normal chat reply?",
            options: [
              "Artifacts are written by a more powerful model",
              "An Artifact lives in its own panel and updates in place as you iterate, instead of being buried in chat history",
              "Artifacts are only available for computer code",
            ],
            correctIndex: 1,
            explanation:
              "Artifacts separate the work from the conversation. You keep chatting on one side while the latest version of the document or tool stays current on the other — and they cover documents, pages, and diagrams, not just code.",
          },
        },
        {
          html: `<h3>What can become an artifact?</h3><p>More than you'd guess. Common wins:</p><ul><li><strong>Documents:</strong> project briefs, one-pagers, policies, meeting templates</li><li><strong>Interactive tools:</strong> calculators, checklists, flashcard decks, small quizzes</li><li><strong>Web pages:</strong> a simple landing page or portfolio section you can preview live</li><li><strong>Diagrams:</strong> flowcharts and org charts that render visually</li></ul><h3>Try it</h3><p>Prompts like these reliably produce artifacts:</p><p><strong>"Create a one-page project brief template I can reuse."</strong></p><p><strong>"Build me a simple interactive checklist for onboarding new clients."</strong></p><p>Watch the panel appear — then refine it conversationally: "Make the headings bolder", "Add a budget section", "Turn the checklist items into checkboxes I can tick".</p>`,
          question: {
            text: 'You asked Claude for an onboarding checklist artifact, and now want a budget column added. What\'s the best move?',
            options: [
              "Start a new chat and describe the whole checklist again from scratch",
              'Just ask in the same conversation: "Add a budget column" — the artifact updates in place',
              "Copy the checklist out, edit it manually, and paste it back in",
            ],
            correctIndex: 1,
            explanation:
              "Artifacts are built for iteration. Claude edits the existing artifact in place, so each request refines the same living version — no restarting, no manual merging.",
          },
        },
        {
          html: `<h3>The iteration mindset</h3><p>The first version of an artifact is a starting point, not the finish line. Strong users treat it like working with a designer:</p><ul><li><strong>One change at a time:</strong> "Tighten the intro" beats "make it better".</li><li><strong>Point at specifics:</strong> "The second section repeats the first — merge them."</li><li><strong>Ask for options:</strong> "Show me two different layouts for this section."</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Artifacts pair beautifully with Projects: create an artifact inside a Project, and Claude builds it with your instructions and files already in mind — your brand tone, your constraints, your earlier decisions.</p></div><h3>Where you're headed</h3><p>You now have the three foundations: how Claude <em>thinks</em>, how Projects carry <em>context</em>, and how Artifacts produce <em>usable output</em>. Next, we'll sharpen the skill that multiplies all three: prompting Claude well.</p>`,
          question: {
            text: "What's the most effective way to refine an artifact that's 80% right?",
            options: [
              "Ask for specific, one-at-a-time changes pointing at exact sections",
              'Tell Claude "make it better" and hope it guesses the remaining 20%',
              "Delete it and regenerate until a version comes out perfect",
            ],
            correctIndex: 0,
            explanation:
              "Specific, targeted requests give Claude a clear frame — the same principle from lesson one. Vague asks produce vague revisions, and regenerating from scratch throws away the 80% that already works.",
          },
        },
      ],
    },
  ],
};
