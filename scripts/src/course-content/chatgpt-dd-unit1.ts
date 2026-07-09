import type { UnitSeed } from "./types";

export const CHATGPT_DD_UNIT_1: UnitSeed = {
  title: "Custom GPTs, Apps and Agents",
  lessons: [
    {
      title: "Custom GPT: Building for Multi-Step Workflows",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me design a Custom GPT that runs [turning raw meeting notes into recaps] the same way every time. Write structured Instructions with role and goal, the steps in order, a fixed output format, rules and boundaries, and one worked example (a messy input paired with the exact output I'd want).",
        note: "Paste it into the GPT builder, then stress-test it with messy, realistic inputs to find the gaps.",
      },
      summary: "Turn a repeatable process into a Custom GPT that runs it the same way every time",
      estimatedMinutes: 14,
      content: `<p>You already know how to prompt well. The next leap is packaging a whole workflow so you never have to re-explain it — a Custom GPT that carries your process, your standards, and your steps.</p>`,
      steps: [
        {
          html: `<h3>From prompts to products</h3><p>A great prompt solves a task once. A <strong>Custom GPT</strong> solves the same task the same way — forever, for you and anyone you share it with.</p><p>Think of it as promoting yourself from operator to <strong>designer</strong>: instead of running the workflow by hand, you encode it once and let the GPT run it consistently.</p><h3>Where multi-step GPTs shine</h3><p>The payoff is biggest when a task has a fixed shape you repeat often:</p><ul><li>Turning meeting notes into structured recaps</li><li>Reviewing drafts against a house style</li><li>Screening applications with the same rubric</li><li>Onboarding checklists that follow a set order</li></ul>`,
        },
        {
          html: `<h3>Instructions are architecture</h3><p>The Instructions field isn't a prompt — it's a <strong>blueprint</strong>. For a multi-step workflow, structure it like one:</p><ul><li><strong>Role & goal:</strong> who the GPT is and what "done" looks like</li><li><strong>The steps, in order:</strong> numbered, explicit, with what each produces</li><li><strong>Rules & boundaries:</strong> tone, format, what to never do</li><li><strong>When to ask:</strong> what missing info must trigger a question</li></ul><p>Vague instructions produce a chatty assistant. Structured instructions produce a <strong>reliable process</strong>.</p>`,
          question: {
            text: 'You build a Custom GPT to turn raw meeting notes into recaps. You write: "Be helpful and summarize meetings nicely." The recaps come out inconsistent — sometimes bullets, sometimes prose, sometimes missing action items. What\'s the fix?',
            options: [
              "Switch to a more powerful model and try again",
              "Rewrite the instructions as explicit steps with a fixed output format and required sections",
              "Paste an example meeting into every new chat before asking",
            ],
            correctIndex: 1,
            explanation:
              'The GPT is inconsistent because "summarize nicely" has no defined shape. Naming the steps and locking the output format (e.g. Decisions, Action Items, Owners, Dates) removes the guesswork — that\'s what makes it repeatable.',
          },
        },
        {
          html: `<h3>Step gating: one phase at a time</h3><p>The most common failure of a workflow GPT is racing ahead — dumping the whole output before it has what it needs. The cure is <strong>step gating</strong>: instruct the GPT to complete and confirm one phase before moving to the next.</p><p>You write it directly into the instructions: <em>"Do not proceed to Step 2 until the user confirms the summary in Step 1 is accurate."</em></p><h3>Why gating works</h3><ul><li>Errors get caught early, before they compound downstream</li><li>The user stays in control of the process</li><li>Each step produces a clean, checkable artifact</li></ul>`,
          question: {
            text: 'Your hiring-screen GPT reads a résumé, scores it, and drafts an interview invite — all in one reply. Half the time the score is based on a misread of the role. How does step gating help most here?',
            options: [
              "It makes the final reply longer and more detailed",
              "It forces the GPT to confirm the role requirements and its read of the résumé before it scores or drafts anything",
              "It switches the GPT to a faster model so mistakes cost less",
            ],
            correctIndex: 1,
            explanation:
              "Gating stops the GPT from acting on a shaky assumption. By confirming the requirements and its reading first, a misread gets corrected before it poisons the score and the invite — errors caught early instead of shipped.",
          },
        },
        {
          html: `<h3>Knowledge files: the GPT's reference shelf</h3><p>Instructions define <em>behavior</em>. <strong>Knowledge files</strong> give the GPT the <em>material</em> it should reason from — your style guide, rubric, templates, product docs, FAQs.</p><p>Upload them once, and every conversation can draw on them without you pasting anything.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Keep knowledge files clean and specific. One tight "Brand Voice Guide" beats ten overlapping docs — the GPT retrieves better from focused, well-labeled sources than from a messy pile.</p></div><h3>Instructions vs. knowledge</h3><p>A simple split: if it's a <strong>rule</strong> ("always use British spelling"), it goes in Instructions. If it's <strong>reference material</strong> ("here's our 12-page style guide"), it's a knowledge file.</p>`,
          question: {
            text: "You want your writing-review GPT to check drafts against your company's 15-page editorial standards. Where should those standards live?",
            options: [
              "Pasted into the Instructions field in full",
              "Uploaded as a knowledge file, with Instructions telling the GPT to review drafts against it",
              "Pasted into every new chat when you need a review",
            ],
            correctIndex: 1,
            explanation:
              "Fifteen pages of reference material belongs in a knowledge file — Instructions should stay lean and point to it. Cramming a long document into Instructions crowds out the actual behavior rules and gets truncated.",
          },
        },
        {
          html: `<h3>Show, don't just tell</h3><p>The fastest way to lock in behavior is <strong>examples</strong>. Include one or two worked examples — a sample input and the exact output you'd want — right in the instructions or as a knowledge file.</p><p>Examples do what description can't: they pin down tone, length, and format in a way the GPT can imitate precisely.</p><h3>Example-driven behavior in practice</h3><ul><li>Show a messy input → a perfect output</li><li>Label it clearly: "This is the target quality and format."</li><li>For edge cases, show how a tricky input should be handled</li></ul><p>One good example often replaces three paragraphs of instructions.</p>`,
          question: {
            text: "Your recap GPT keeps producing summaries that are technically correct but too long and formal for your team's Slack culture. You've described the tone twice with no luck. What's the highest-leverage move?",
            options: [
              "Add a third, more forceful paragraph describing the tone",
              "Add a worked example: a real meeting's notes paired with the exact short, casual recap you'd want",
              "Lower the estimated length limit in the instructions",
            ],
            correctIndex: 1,
            explanation:
              "Tone and length are hard to nail with description alone. A concrete before/after example shows the GPT exactly what 'short and casual' means for your team — imitation beats explanation.",
          },
        },
        {
          html: `<h3>Test like a user, not a builder</h3><p>Before you rely on a Custom GPT, stress-test it. Feed it the <strong>messy real inputs</strong> it'll actually face — incomplete notes, off-format files, ambiguous requests — not the tidy example you designed around.</p><ul><li>Does it gate correctly, or race ahead?</li><li>Does it ask when info is missing?</li><li>Does the output hold its format under pressure?</li></ul><p>Each failure points at a gap in your instructions. Fix, re-test, repeat.</p><h3>What's next</h3><p>You can now build a GPT that runs a process reliably on its own. But the real power comes when a GPT reaches <em>outside</em> ChatGPT — pulling live data and taking action in other systems. That's Actions, and it's next.</p>`,
          question: {
            text: "You're about to share your onboarding-checklist GPT with the whole team. What's the best final check?",
            options: [
              "Run it once on the clean example you built it around to confirm it still works",
              "Feed it several realistic, messy inputs a coworker might actually paste and watch where it breaks",
              "Skip testing — if the instructions are written well, it will handle anything",
            ],
            correctIndex: 1,
            explanation:
              "GPTs look perfect on the input they were designed around. Real robustness shows only under messy, realistic inputs — that's where you find the gaps before your teammates do.",
          },
        },
      ],
    },
    {
      title: "Custom GPTs: Connecting to External Systems",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want a Custom GPT that connects to [an external system, e.g. our order database] via an Action. Explain what I'd need, help me decide between an API key and OAuth for a case where [each employee should only see their own records], and draft clear endpoint and parameter descriptions so the GPT calls the API correctly.",
        note: "Add a confirmation gate for any Action that creates or changes data — reading is fine, but writes should wait for your go-ahead.",
      },
      summary: "Give a GPT Actions so it can pull live data and take real steps in other tools",
      estimatedMinutes: 13,
      content: `<p>A knowledge file is a snapshot. Actions are a live wire — they let your Custom GPT call real services, fetch current data, and do things in the systems you already use.</p>`,
      steps: [
        {
          html: `<h3>Beyond static knowledge</h3><p>Knowledge files are frozen in time. If your GPT needs <strong>current</strong> information — today's inventory, a live order status, this week's calendar — a file can't help.</p><p><strong>Actions</strong> solve this by letting the GPT call an external API: it sends a request, gets fresh data back, and reasons over it in the conversation.</p><h3>What Actions unlock</h3><ul><li>Look up live records ("What's the status of order 4821?")</li><li>Search a system your team runs</li><li>Create or update something (a ticket, a calendar hold)</li><li>Trigger a workflow in another tool</li></ul>`,
        },
        {
          html: `<h3>How an Action is defined</h3><p>Under the hood, an Action is described by an <strong>API schema</strong> — an OpenAPI spec that tells ChatGPT what endpoints exist, what inputs they take, and what they return.</p><p>You don't have to write it from scratch: many services publish a schema, and ChatGPT can help you draft or clean one up. Your job is to make sure it's accurate and only exposes what you intend.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Write clear, human descriptions for each endpoint and parameter in the schema. ChatGPT reads those descriptions to decide <em>when</em> and <em>how</em> to call the Action — good descriptions mean fewer wrong calls.</p></div>`,
          question: {
            text: 'Your GPT has an Action to look up orders, but it keeps calling it with the customer\'s name when the API actually needs an order ID — so lookups fail. Where\'s the most likely fix?',
            options: [
              "Add more knowledge files about your product catalog",
              "Improve the schema's parameter descriptions so it's clear the endpoint needs an order ID, and have the GPT ask for one when it's missing",
              "Switch the GPT to a model with a larger context window",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT decides how to call an Action from the schema's descriptions. If it's guessing the wrong input, the descriptions are ambiguous — tighten them and instruct the GPT to collect the order ID before calling.",
          },
        },
        {
          html: `<h3>Authentication: proving who's asking</h3><p>Most useful systems are private, so Actions support <strong>authentication</strong> — usually an API key or OAuth. This is how the service knows the request is allowed.</p><ul><li><strong>API key:</strong> a shared secret, good for simple internal tools</li><li><strong>OAuth:</strong> each user signs in with their own account, so the GPT acts <em>as them</em></li></ul><p>Choose based on who should see what. If every user should only touch their own data, OAuth is the right call — an API key would give everyone the same access.</p>`,
          question: {
            text: "You're building a company-wide GPT that lets each employee check their own HR records — vacation balance, pay stubs. Which authentication approach fits?",
            options: [
              "A single shared API key stored in the Action",
              "OAuth, so each person signs in and the GPT only accesses their own records",
              "No authentication — HR data isn't that sensitive",
            ],
            correctIndex: 1,
            explanation:
              "A shared key would let anyone see everyone's records. OAuth ties each request to the individual signed-in user, so the GPT can only reach the data that person is entitled to.",
          },
        },
        {
          html: `<h3>Connect vs. paste: a judgment call</h3><p>Actions are powerful, but they're not always worth the setup. A quick test:</p><ul><li><strong>Paste</strong> when the data is one-off, small, or you already have it open.</li><li><strong>Connect</strong> when you query the same system <em>repeatedly</em>, need <em>live</em> data, or want the GPT to <em>act</em>, not just read.</li></ul><p>Building an Action for a task you'll do twice is over-engineering. Building one for a daily lookup you do fifty times a week is a massive win.</p>`,
          question: {
            text: "Once a quarter, you paste last quarter's sales numbers into ChatGPT for a one-off summary. A colleague suggests building an Action to pull them automatically. Good idea?",
            options: [
              "Yes — Actions are always better than pasting",
              "No — for a rare, one-off pull, pasting is simpler; save Actions for frequent or live-data needs",
              "Yes — but only if the data is confidential",
            ],
            correctIndex: 1,
            explanation:
              "The setup cost of an Action only pays off with repetition or a need for live data. A quarterly one-off is exactly the case where pasting wins — connecting would be effort you rarely recoup.",
          },
        },
        {
          html: `<h3>A real workflow, wired up</h3><p>Picture a <strong>support-triage GPT</strong>:</p><ul><li>A teammate pastes a customer complaint</li><li>The GPT calls an Action to pull the customer's recent orders and open tickets</li><li>It drafts a reply grounded in that live context</li><li>With confirmation, it calls another Action to log a follow-up ticket</li></ul><p>Notice the pattern: <strong>read live data → reason → act with confirmation.</strong> The gating you learned in the last lesson matters even more here — an Action that <em>changes</em> something should never fire without a check.</p>`,
          question: {
            text: 'Your triage GPT can create tickets via an Action. During testing, it sometimes creates a ticket the moment a complaint is pasted — before anyone reviews the draft. What should you add?',
            options: [
              "A rule that the GPT must summarize the issue and get explicit user confirmation before calling the ticket-creating Action",
              "A second Action that deletes tickets it creates by mistake",
              "A faster model so the tickets are created more accurately",
            ],
            correctIndex: 0,
            explanation:
              "Actions that change state need a confirmation gate. Reading data freely is fine, but creating a ticket should wait for an explicit go-ahead — otherwise the GPT acts on unreviewed input.",
          },
        },
        {
          html: `<h3>Sharing through the GPT Store</h3><p>Once your connected GPT works, you can share it — privately with a link, inside your workspace, or publicly in the <strong>GPT Store</strong>.</p><p>Before you publish, think about what travels with it:</p><ul><li>Actions that use a <strong>shared API key</strong> act with your credentials — be careful sharing those widely.</li><li>Actions using <strong>OAuth</strong> ask each new user to sign in with their own account — safer for public sharing.</li><li>Write a clear name and description so people know what it does and what it connects to.</li></ul><h3>What's next</h3><p>Custom GPTs let <em>you</em> build tools. Next, we flip it: ChatGPT's <strong>Apps</strong> connect it to the services you already live in — calendar, email, drive — turning it into a personal assistant.</p>`,
          question: {
            text: "You built a GPT with an Action that uses your personal API key, and you want to publish it publicly in the GPT Store. What's the risk?",
            options: [
              "There's no risk — API keys are safe to share publicly",
              "Every public user's requests would run through your credentials and access — you'd want OAuth or a locked-down key instead",
              "The GPT Store doesn't allow GPTs with Actions",
            ],
            correctIndex: 1,
            explanation:
              "A shared API key means strangers act with your access. For public sharing, OAuth (each user signs in as themselves) or a tightly-scoped key is the responsible choice.",
          },
        },
      ],
    },
    {
      title: "Apps: Building Your Personal Assistant",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me write a single morning-briefing prompt for a ChatGPT connected to my calendar, email and drive. It should list my meetings, flag which ones need prep, surface urgent unread emails, and give me three priorities based on all of it. Also advise which permissions to grant if I only want triage, not auto-sending.",
        note: "Connect one service at a time and test after each, so you always know what each connection contributes.",
      },
      summary: "Connect ChatGPT to your calendar, email, and files to run your day",
      estimatedMinutes: 12,
      content: `<p>Custom GPTs are tools you build. Apps are connections you switch on — linking ChatGPT to the services you already use so it can see your real context and act inside your day.</p>`,
      steps: [
        {
          html: `<h3>What Apps (connectors) do</h3><p>ChatGPT's <strong>Apps</strong> — sometimes called connectors — link it directly to services like your calendar, email, and cloud drive. Once connected, ChatGPT can read and work with your real information, in context.</p><p>The difference from a Custom GPT: you're not designing a schema. You're granting access to a tool ChatGPT already knows how to talk to.</p><h3>What this makes possible</h3><ul><li>"What's on my calendar tomorrow, and what should I prep?"</li><li>"Summarize the unread emails from my manager this week."</li><li>"Find the Q3 budget doc in my drive and pull the headline numbers."</li></ul>`,
        },
        {
          html: `<h3>The daily-assistant pattern</h3><p>The real magic isn't one lookup — it's a <strong>morning routine</strong> in a single request:</p><p><em>"Give me my day: what meetings I have, which need prep, any urgent unread emails, and three priorities based on all of it."</em></p><p>Because ChatGPT can see calendar, email, and files together, it can <strong>synthesize</strong> across them — something no single app does on its own.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Save your assistant routine as a reusable prompt (or bake it into a Project). Then each morning is one click, and the format stays consistent day to day.</p></div>`,
          question: {
            text: "You want a single morning briefing that combines your meetings, urgent emails, and a doc you need for a 10am call. Why is a connected ChatGPT better than checking each app yourself?",
            options: [
              "It's not — three separate apps always show more detail",
              "It can pull from all three sources at once and synthesize them into prioritized, cross-referenced guidance",
              "It replaces your calendar, email, and drive entirely",
            ],
            correctIndex: 1,
            explanation:
              "The value is synthesis. Each app shows its own slice; a connected ChatGPT reads across all of them and reasons about what matters together — the connective tissue you'd otherwise assemble by hand.",
          },
        },
        {
          html: `<h3>Permissions are the whole game</h3><p>Connecting an App means <strong>granting access</strong> to real, often sensitive data. Treat that seriously:</p><ul><li>Connect only the services you actually need</li><li>Understand what each connection can <em>see</em> and whether it can <em>act</em> (send email vs. just read it)</li><li>Review connected apps periodically and disconnect what you no longer use</li></ul><p>Read access is lower-risk than write access. An App that can <em>draft</em> an email is very different from one that can <em>send</em> it without you looking.</p>`,
          question: {
            text: "You're connecting your email so ChatGPT can help triage your inbox each morning. You mostly want summaries, not auto-sending. What's the prudent setup?",
            options: [
              "Grant full send-and-delete access so it can handle everything hands-off",
              "Grant read access for summaries and keep sending under your explicit review before anything goes out",
              "Connect every email account you own to be safe",
            ],
            correctIndex: 1,
            explanation:
              "Match permissions to the job. Triage needs read access; letting it send or delete unattended is far riskier than the task requires. Keep write actions gated behind your review.",
          },
        },
        {
          html: `<h3>Privacy judgment in practice</h3><p>Even with an App connected, you decide what to surface. A few habits:</p><ul><li>On shared or work devices, be mindful of what a briefing might display</li><li>For sensitive threads, ask for high-level summaries rather than full quotes</li><li>Remember the connection persists — what's accessible today stays accessible until you revoke it</li></ul><h3>When Apps beat a Custom GPT</h3><p>Use an <strong>App</strong> when you want ChatGPT working inside <em>your own</em> everyday accounts. Build a <strong>Custom GPT</strong> when you're packaging a repeatable process, especially one to share with others. They complement each other — many workflows use both.</p>`,
          question: {
            text: "You want a shareable tool that screens job applications against a fixed rubric, and separately you want ChatGPT to help manage your own inbox. Which is which?",
            options: [
              "Both should be Apps",
              "The application screener is a Custom GPT (shareable, repeatable process); the inbox helper is an App (your own live accounts)",
              "Both should be Custom GPTs",
            ],
            correctIndex: 1,
            explanation:
              "A shareable, rule-driven process fits a Custom GPT. Working inside your own calendar and email fits an App. Recognizing which shape a need has is the core judgment of this unit.",
          },
        },
        {
          html: `<h3>Building your assistant, step by step</h3><p>A sensible order to set one up:</p><ul><li>Connect one service first (calendar is a great start) and try a few requests</li><li>Add email, then drive, testing after each</li><li>Draft your morning-briefing prompt and refine its format</li><li>Review permissions and tighten anything broader than you need</li></ul><p>Incremental setup means you always know what's connected and why — and you catch surprises early.</p><h3>What's next</h3><p>One App answering one question is useful. The next leap is chaining <em>several</em> connected tools inside a single conversation — reading from one, acting in another. That's multi-tool workflows, coming up next.</p>`,
          question: {
            text: "A colleague connects calendar, email, drive, and four more apps all at once, then can't tell why a briefing is pulling odd results. What habit would have helped?",
            options: [
              "Connecting even more apps so ChatGPT has full context",
              "Connecting one service at a time and testing after each, so it's clear what each connection contributes",
              "Never using Apps and pasting everything manually instead",
            ],
            correctIndex: 1,
            explanation:
              "Incremental setup keeps the system legible. When something misbehaves, you know exactly which connection to look at — versus flipping everything on at once and guessing.",
          },
        },
      ],
    },
    {
      title: "Apps: Building Multi-Tool Workflows",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Write a multi-tool request for a connected ChatGPT that chains several apps in sequence: find my [2pm meeting], pull the linked proposal from my drive, check for any related email threads, and draft one prep note covering all three. Number the steps, say which result feeds the next, and state what to do if a step comes back empty.",
        note: "Spell out the handoffs explicitly — the points where one tool's output becomes the next tool's input are where chains usually break.",
      },
      summary: "Chain several connected tools in one conversation and structure the handoffs",
      estimatedMinutes: 13,
      content: `<p>One connected app answers one question. The real leverage is a conversation that reads from your calendar, checks your email, pulls a file, and produces one coherent result — a workflow, not a lookup.</p>`,
      steps: [
        {
          html: `<h3>From single lookups to chains</h3><p>A multi-tool workflow uses <strong>several connected apps in sequence</strong> inside one conversation. The output of one step feeds the next.</p><p>Example: <em>"Find my 2pm meeting, pull the linked proposal from my drive, check for any related email threads, and draft a prep note covering all three."</em></p><p>That's three tools and a synthesis step — chained automatically because ChatGPT can hold the whole chain in one context.</p><h3>Why chaining is powerful</h3><ul><li>No copy-pasting between apps</li><li>Context carries from step to step</li><li>The final output reflects <em>everything</em>, not one source</li></ul>`,
        },
        {
          html: `<h3>Handoffs: where chains succeed or fail</h3><p>The fragile points in any chain are the <strong>handoffs</strong> — where one tool's output becomes the next tool's input. Ambiguity here is what breaks workflows.</p><p>You reduce it by being explicit about the sequence and the linkage:</p><ul><li>Name the order of steps</li><li>Say which result feeds the next step</li><li>State what to do if a step comes back empty</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>When a chain matters, spell out the steps as a numbered list in your request. "First… then use that to… finally…" gives ChatGPT a clean map and dramatically cuts wrong turns.</p></div>`,
          question: {
            text: 'You ask: "Look at my meetings and email everyone the notes." The result is chaotic — it emails the wrong people and misses attachments. What structural fix helps most?',
            options: [
              "Ask the same thing again but louder and more insistently",
              'Break it into an explicit chain: "1) List today\'s meetings, 2) for the 2pm one, find its attendees and notes, 3) show me a draft email before sending"',
              "Connect more apps so it has additional context",
            ],
            correctIndex: 1,
            explanation:
              "The request bundled several ambiguous steps into one. An explicit, numbered chain names each handoff — which meeting, which people, which notes — and gates the send behind a review, so nothing fires blind.",
          },
        },
        {
          html: `<h3>Failure modes to expect</h3><p>Chains break in predictable ways. Knowing them lets you design around them:</p><ul><li><strong>Empty result:</strong> a step finds nothing (no matching email), and later steps act on a blank</li><li><strong>Wrong match:</strong> it grabs the wrong file because your request was ambiguous</li><li><strong>Silent assumption:</strong> it fills a gap with a guess instead of asking</li><li><strong>Over-eager action:</strong> it sends or edits before you've reviewed</li></ul><p>The pattern behind all four: the chain kept going when it should have <strong>paused</strong>.</p>`,
          question: {
            text: "In a chain, ChatGPT can't find the proposal you mentioned, but instead of stopping it drafts the prep note from memory and invents figures. What instruction prevents this?",
            options: [
              'Tell it: "If a required file or source isn\'t found, stop and ask me rather than proceeding on assumptions"',
              "Tell it to always draft something so you're never left with nothing",
              "Give it access to more drives so it has more files to choose from",
            ],
            correctIndex: 0,
            explanation:
              "The danger is a chain that plows ahead on a blank. Instructing it to halt and ask on a missing input turns a silent, fabricated result into a quick clarifying question — the safe failure mode.",
          },
        },
        {
          html: `<h3>Structuring requests for reliability</h3><p>A dependable multi-tool request tends to include:</p><ul><li><strong>The goal</strong> up front ("I want a prep note for my 2pm")</li><li><strong>The sources</strong> to draw from ("use the calendar event, the linked doc, and related emails")</li><li><strong>The order</strong>, if it matters</li><li><strong>The stop conditions</strong> ("if you can't find the doc, ask")</li><li><strong>A review gate</strong> before any action that sends or changes things</li></ul><p>This is the same discipline from Custom GPTs — goal, steps, boundaries, gating — applied live across your own connected tools.</p>`,
          question: {
            text: "Which request is most likely to run cleanly across calendar, drive, and email?",
            options: [
              '"Sort out my afternoon."',
              '"For my 2pm client call: pull the event details, find the linked proposal in my drive, gather any emails from this client this week, then draft a prep note — if the proposal isn\'t there, ask me before continuing."',
              '"Get everything ready and send whatever needs sending."',
            ],
            correctIndex: 1,
            explanation:
              "The strong request names the goal, the exact sources, the order, and a stop condition. The vague ones leave every handoff to guesswork — and the last one hands over unreviewed sending authority.",
          },
        },
        {
          html: `<h3>Keeping humans in the loop</h3><p>The more a workflow can <em>do</em>, the more your review matters. A good rhythm:</p><ul><li>Let ChatGPT <strong>read and assemble</strong> freely</li><li>Have it <strong>show you</strong> the drafted output or planned actions</li><li>You <strong>approve</strong>, then it executes the sending/changing steps</li></ul><p>Read fast, act slow. That single habit prevents most multi-tool mishaps.</p><h3>What's next</h3><p>You've been directing chains step by step. The next lesson hands more of the steering to ChatGPT itself: <strong>Agent Mode</strong>, where it browses, clicks, and executes multi-step tasks — and where guardrails become essential.</p>`,
          question: {
            text: 'Your workflow can draft AND send follow-up emails. What\'s the safest way to run it day to day?',
            options: [
              "Let it read, assemble, and send in one uninterrupted pass to save time",
              "Let it read and draft freely, but require your approval before the send step executes",
              "Disable email entirely and copy-paste every message by hand",
            ],
            correctIndex: 1,
            explanation:
              '"Read fast, act slow": free rein on gathering and drafting, a review gate before anything leaves your outbox. It keeps the speed benefit while stopping the costly mistakes.',
          },
        },
      ],
    },
    {
      title: "Delegate With Agent Mode",
      summary: "Hand ChatGPT a whole multi-step task — and know what to supervise",
      estimatedMinutes: 15,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to delegate a research task to you as if you were my assistant. Brief: research 5 popular [project management tools] and compile a comparison table with pricing tiers, free-plan limits, and one standout feature each. Boundaries: use only public pricing pages, cite the source link for each row, and flag anything you couldn't verify instead of guessing. Report back with the table plus a 2-sentence recommendation.",
        note: "Notice how a clear brief with boundaries changes the output — this is the exact skill Agent Mode rewards, and it's low blast-radius so it's safe to delegate fully.",
      },
      content: `<p>So far you've directed each step. Agent Mode changes the deal: you describe an outcome and ChatGPT plans, browses, clicks, and executes the steps itself. Powerful — and only safe if you delegate wisely.</p>`,
      steps: [
        {
          html: `<h3>What Agent Mode actually does</h3><p>In <strong>Agent Mode</strong>, ChatGPT works more like a capable assistant you've handed a task to. Given a goal, it can:</p><ul><li>Break the task into steps and plan an approach</li><li>Browse the web, open pages, and click through them</li><li>Use connected tools and fill in forms</li><li>Run multi-step processes and report back</li></ul><p>You stop specifying <em>how</em> and start specifying <em>what</em> — the outcome and the boundaries.</p><h3>The mental shift</h3><p>This is delegation, not operation. The skill isn't clever prompting anymore — it's writing a clear <strong>brief</strong> and knowing where to stay involved.</p>`,
        },
        {
          html: `<h3>Delegate vs. supervise</h3><p>Not every task should be handed off blind. A useful split:</p><ul><li><strong>Delegate</strong>: bounded, reversible, low-stakes, well-defined — "compile a list of 10 vendors with pricing into a table."</li><li><strong>Supervise closely</strong>: anything that spends money, sends external messages, changes important data, or is hard to undo.</li></ul><p>The question isn't "can the agent do this?" It's <strong>"what happens if it does it wrong?"</strong> Low blast radius → delegate. High blast radius → stay in the loop.</p>`,
          question: {
            text: "Which task is the best candidate to fully delegate to Agent Mode?",
            options: [
              "Booking and paying for a non-refundable flight from your account",
              "Researching 10 competitors and compiling their pricing tiers into a comparison table",
              "Emailing a contract offer to a client on your behalf",
            ],
            correctIndex: 1,
            explanation:
              "The research task is bounded, reversible, and low-stakes — perfect for delegation. Paying for a non-refundable flight or sending a contract are high-blast-radius actions you'd supervise, not hand off.",
          },
        },
        {
          html: `<h3>Writing a delegation brief</h3><p>An agent is only as good as the brief. Include:</p><ul><li><strong>The outcome:</strong> what "done" looks like, concretely</li><li><strong>Constraints:</strong> budget, sources to trust, time range, format</li><li><strong>Boundaries:</strong> what it must <em>not</em> do without asking</li><li><strong>Checkpoints:</strong> where it should pause and show you progress</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Add a "stop and ask" clause for anything irreversible or ambiguous: "If a step requires payment, login credentials, or sending a message, pause and check with me first." It's your safety rail.</p></div>`,
          question: {
            text: 'You tell the agent: "Find me the cheapest standing desk and order it." It orders a wobbly no-name desk from an unfamiliar site. What was missing from your brief?',
            options: [
              "Nothing — the agent simply picked badly and there's no way to prevent that",
              "Constraints and a checkpoint: quality/brand criteria, trusted retailers, and a rule to show you the pick and get approval before ordering",
              "A more powerful model to make a smarter purchase",
            ],
            correctIndex: 1,
            explanation:
              '"Cheapest" with no other constraints is exactly what it optimized for. A good brief adds quality criteria and trusted sources — and gates the actual purchase behind your approval.',
          },
        },
        {
          html: `<h3>Guardrails that matter</h3><p>Beyond the brief, keep structural guardrails on any agent run:</p><ul><li><strong>Approval gates</strong> before spending, sending, or deleting</li><li><strong>Scope limits</strong> — which sites, accounts, or data it may touch</li><li><strong>Watch the plan</strong> it proposes before it runs, not just the result</li><li><strong>Reversibility</strong> — prefer tasks where a mistake is easy to undo</li></ul><p>Reviewing the <em>plan</em> is underrated: catching a flawed approach up front is far cheaper than untangling a bad outcome after.</p>`,
          question: {
            text: "Before an agent executes, it shows you its plan: step 3 is 'delete duplicate files from the shared drive.' You only wanted duplicates flagged, not removed. What's the value of seeing the plan?",
            options: [
              "None — you should judge only by the final result",
              "You can correct the flawed step before any files are touched, avoiding an irreversible mistake",
              "Plans are always accurate, so there's nothing to check",
            ],
            correctIndex: 1,
            explanation:
              "Reviewing the plan catches a destructive, unintended step while it's still cheap to fix. Waiting for the result would mean recovering deleted files — the whole point of the checkpoint.",
          },
        },
        {
          html: `<h3>A full worked delegation</h3><p>Say you want a shortlist of venues for an offsite. A strong delegation:</p><p><em>"Find 6 event venues in Austin for a 30-person offsite in March. Budget under $4,000/day. Must have AV and parking. Compile name, capacity, price, and a link into a table. Use reputable venue and review sites. Do not contact any venue or submit any inquiry forms — just research. Show me the table when done."</em></p><ul><li><strong>Outcome:</strong> a 6-row comparison table</li><li><strong>Constraints:</strong> city, size, budget, must-haves, sources</li><li><strong>Boundary:</strong> research only, no outreach</li></ul><p>That's delegation done right: ambitious task, tight rails.</p>`,
          question: {
            text: "In that venue brief, which single line does the most to keep the agent safe?",
            options: [
              '"Budget under $4,000/day"',
              '"Do not contact any venue or submit any inquiry forms — just research"',
              '"Compile name, capacity, price, and a link into a table"',
            ],
            correctIndex: 1,
            explanation:
              "The other lines shape quality, but the no-outreach boundary is the guardrail: it stops the agent from taking a real-world, external action on your behalf while it works. That's the line that limits blast radius.",
          },
        },
        {
          html: `<h3>When Agent Mode is worth it</h3><p>Reach for agents when a task is <strong>multi-step, tedious, and bounded</strong> — research compilations, cross-site comparisons, routine data gathering, form-heavy busywork with clear rules.</p><p>Skip it for tasks that are quick to do yourself, highly sensitive, or so open-ended that no clear "done" exists — those still want you in the driver's seat.</p><h3>Unit wrap-up</h3><p>You've built the full toolkit of this unit: <strong>Custom GPTs</strong> package your processes, <strong>Actions</strong> wire them to live systems, <strong>Apps</strong> connect ChatGPT to your daily accounts, multi-tool workflows chain them, and <strong>Agent Mode</strong> delegates whole tasks — always with guardrails. Next unit, we turn from operating to <em>making</em>: image sets, vibe coding, and Codex.</p>`,
          question: {
            text: "A teammate wants to use Agent Mode to 'figure out our whole marketing strategy for next year.' Why is this a poor fit?",
            options: [
              "Agent Mode can't browse the web, so it can't research strategy",
              "It's too open-ended — there's no clear 'done', no bounded scope, and it needs human judgment; agents shine on bounded, well-defined tasks",
              "Agent Mode only works for shopping and travel booking",
            ],
            correctIndex: 1,
            explanation:
              "Agents excel at bounded, multi-step, well-defined work. An open-ended strategic question has no clear finish line and demands human judgment — better to use ChatGPT as a thinking partner and delegate only the concrete research pieces.",
          },
        },
      ],
    },
  ],
};
