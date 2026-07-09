import type { UnitSeed } from "./types";

export const geminiInteractiveUnit2: UnitSeed = {
  title: "Build Reliable Workflows",
  lessons: [
    {
      title: "Guide Better With Prompts",
      summary:
        "Use the prompt recipe — role, context, format, and constraints — to get Gemini to nail everyday tasks the first time.",
      estimatedMinutes: 6,
      content:
        `<p>Gemini gets dramatically better when you stop making it guess. A simple recipe — role, context, format, constraints — turns a vague ask into a reliably useful answer.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Act as a [role, e.g. friendly travel agent]. I need [your goal, e.g. a 3-day trip plan]. Context: [the details, e.g. a family of four on a tight budget]. Give it to me as [format, e.g. a day-by-day list], and keep it [a constraint, e.g. under a set budget].",
        note: "Before you send, check you've included all four parts — role, context, format, constraint — that's what stops Gemini guessing.",
      },
      steps: [
        {
          html: `<h3>The prompt recipe</h3><p>Great Gemini prompts usually have four parts:</p><ul><li><strong>Role</strong> — who Gemini should act as</li><li><strong>Context</strong> — the background it needs about your life</li><li><strong>Format</strong> — how you want the answer (list, table, email)</li><li><strong>Constraints</strong> — limits like length, tone, or budget</li></ul><p>For example: "Act as a friendly teacher (role). My daughter is 8 and learning fractions (context). Give me a table (format) with 5 practice questions, easy to hard (constraints)."</p>`,
        },
        {
          html: `<h3>Context is the secret ingredient</h3><p>Gemini lives right inside Gmail, Docs, and Drive, so it can already see a lot — but it still needs <strong>your</strong> details to make an answer personal.</p><p>"Write a thank-you email" gets a bland template. "Write a warm thank-you email to my neighbour Priya for watering my plants while I was on holiday, about 4 sentences" gets something you can actually send.</p>`,
          question: {
            text: 'In "Act as a travel agent, plan a 3-day Goa trip for a family of four on a tight budget, as a day-by-day list," which part is the role?',
            options: [
              '"Plan a 3-day Goa trip"',
              '"Act as a travel agent"',
              '"as a day-by-day list"',
              '"on a tight budget"',
            ],
            correctIndex: 1,
            explanation:
              '"Act as a travel agent" is the role — it tells Gemini what expertise and voice to bring. The trip is the goal, the list is the format, and the tight budget is a constraint.',
          },
        },
        {
          html: `<h3>Vague vs. complete</h3><p>Watch the difference with a real task:</p><ul><li>❌ "Help me with a grocery list" — Gemini has to guess who, what, and how much</li><li>✅ "Act as a meal planner. Make a week of budget dinners for two adults and a picky toddler. Give a shopping list grouped by supermarket aisle."</li></ul><p>Same tool — the second one just hands over the role, context, format, and constraints Gemini needed all along.</p>`,
          question: {
            text: "Which prompt will most likely get a genuinely useful answer from Gemini?",
            options: [
              '"Tell me about savings"',
              '"Help with money"',
              '"Act as a budgeting coach. We\'re a family of four saving for a holiday in 6 months. Suggest 5 realistic ways to cut monthly spending, as a short list."',
              '"What should I do?"',
            ],
            correctIndex: 2,
            explanation:
              "It gives Gemini a role, real context (family of four, 6-month goal), a clear format (short list), and a constraint (5 realistic ideas). Nothing is left to guesswork.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey, I'm Nova 👋 Let's practice the prompt recipe with Gemini — role, context, format, constraints. Ready?",
            },
            {
              bot: "A friend typed \"write a birthday message\" into Gemini and got something cold and generic.",
              ask: "Which recipe part would help most here?",
              inputType: "choice",
              options: [
                "Format — ask for a table",
                "Context — who it's for and the tone you want",
                "Nothing, it's already clear",
              ],
              correctIndex: 1,
              feedback:
                "Exactly. With no name, relationship, or tone, Gemini defaults to a bland message. Context makes it personal.",
              hint: "Think about what Gemini didn't know about the person.",
            },
            {
              bot: "A friend types just \"write something\" into Gemini and hits enter.",
              ask: "Is that a complete prompt?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Not useful — with no role, context, format, or constraints, Gemini can only give a bland guess.",
              hint: "Does Gemini have anything to go on?",
            },
            {
              bot: "Let's lock in the recipe. Fill the missing part.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "The prompt recipe is role, ___, format, and constraints.",
              options: ["context", "colour", "cost"],
              correctIndex: 0,
              feedback:
                "Right — context is the background Gemini needs about your life to make an answer personal.",
              hint: "It's the background detail Gemini needs.",
            },
            {
              bot: "Match each part of the recipe to an example from a real prompt.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Role", right: "Act as a travel agent" },
                { left: "Format", right: "As a day-by-day list" },
                { left: "Constraint", right: "On a tight budget" },
              ],
              feedback:
                "Perfect — role, format, and constraints each shape a different piece of the answer.",
              hint: "Match each recipe part to its snippet.",
            },
            {
              bot: "Let's build a recipe prompt. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Act", "as", "a", "friendly", "teacher", "and", "give", "a", "table"],
              feedback:
                "Nice — that names the role and the format in one clear line.",
              hint: "Start with the role.",
            },
            {
              bot: "Let's build one. Take this weak prompt: \"Help me write an email to my landlord.\"",
              ask: "e.g. rewrite it with role, context, format, and constraints",
              inputType: "text",
              keywords: ["role", "context", "format", "tone", "landlord", "length", "polite"],
              feedback:
                'Strong example: "Act as a polite tenant. Write a short email to my landlord asking him to fix a leaking tap in the kitchen, friendly but firm, about 4 sentences." That\'s role, context, constraint, and format.',
              hint: "Name who Gemini should be, the situation, the tone, and the length.",
            },
            {
              bot: "One more. Your child is stuck on homework and you want Gemini to help explain it.",
              ask: "e.g. write a prompt using the recipe for a kid-friendly explanation",
              inputType: "text",
              keywords: ["act", "explain", "child", "age", "simple", "example", "topic"],
              feedback:
                'Great direction. A clear one: "Act as a patient tutor. Explain long division to my 9-year-old in simple words with one everyday example." Now Gemini knows the role, topic, audience, and style.',
              hint: "Give Gemini a role, the subject, the child's age, and how simple to make it.",
            },
            {
              bot: "You've got it! Role, context, format, constraints — that's the recipe. Stop making Gemini guess and it rewards you every time. 🎉",
            },
          ],
        },
        {
          html: `<h3>The one habit to keep</h3><p>Before you hit enter, ask: <strong>"Have I told Gemini who to be, what I need, and how to give it back?"</strong> If a new assistant would still have questions, so does Gemini.</p><p>You don't need perfect prompts — just complete ones. That's the whole game.</p>`,
        },
      ],
    },
    {
      title: "Work With Large Amounts of Data",
      summary:
        "Let Gemini summarize long PDFs, emails, and threads, answer questions about your Drive files, and run Deep Research for you.",
      estimatedMinutes: 7,
      content:
        `<p>Long documents and endless email threads eat your time. Gemini can read them for you — summarizing, pulling out what matters, and even researching across the web while you sip your tea.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Here's a long [document or email thread, e.g. an insurance policy or a 30-email chain] — I'll paste it below. Summarize it in 5 short bullet points, then answer my specific question: [what you actually need to know, e.g. what's covered for a hospital stay, or what I still need to reply to].",
        note: "For a big decision, start with 'Deep Research:' and ask for a sourced comparison in a table instead of a quick answer.",
      },
      steps: [
        {
          html: `<h3>Turn walls of text into quick answers</h3><p>Gemini can digest huge amounts of text at once. Paste a long email thread and ask, "Summarize this in 5 bullet points and tell me what I need to reply to."</p><p>Because Gemini lives inside Gmail, Docs, and Drive, you can also point it straight at your files: "Summarize the PDF lease in my Drive and list any fees over ₹1,000." No copy-pasting required.</p>`,
        },
        {
          html: `<h3>Ask questions instead of reading everything</h3><p>You don't have to read a 40-page report to find one answer. Treat the document like a person you can interview.</p><p>Try: "In this school handbook, what are the rules about sick days and who do I contact?" Gemini finds it and quotes the part that matters, so you skip the hunt.</p>`,
          question: {
            text: "You have a long insurance PDF and only care about what's covered for a hospital stay. What's the smartest move with Gemini?",
            options: [
              "Read the whole PDF yourself first",
              'Ask Gemini "In this policy, what exactly is covered for a hospital stay, and what are the limits?"',
              'Ask "Is this a good policy?"',
              "Retype the whole document into the chat",
            ],
            correctIndex: 1,
            explanation:
              "Asking a specific question lets Gemini pull the exact section you need and summarize it, saving you from reading pages of fine print.",
          },
        },
        {
          html: `<h3>Deep Research for the big stuff</h3><p>For decisions that need real digging, Gemini's <strong>Deep Research</strong> mode browses many sources and writes you an organized report.</p><ul><li>❌ "Which stroller is good?" — a quick, shallow answer</li><li>✅ "Deep Research: compare the top 5 budget strollers for a newborn under ₹15,000 — safety, weight, and folding — in a table with sources."</li></ul><p>Because Gemini is grounded in Google Search, it can pull current info and show you where it came from.</p>`,
          question: {
            text: "When is Gemini's Deep Research mode the best choice?",
            options: [
              "For a quick one-line fact you already half-know",
              "When you need a thorough, sourced comparison across many options — like choosing a school or a big purchase",
              "For rewriting a single sentence",
              "When you want a plain chit-chat reply",
            ],
            correctIndex: 1,
            explanation:
              "Deep Research shines when a decision needs many sources gathered and organized — a big purchase, a school choice, or planning a trip — not for quick facts.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hi again! 👋 Let's put Gemini to work on big piles of information — long docs, threads, and research. Ready?",
            },
            {
              bot: "You've got a 30-email thread about a broken washing machine warranty and you're lost.",
              ask: "What should you ask Gemini?",
              inputType: "choice",
              options: [
                "\"Is this important?\"",
                "\"Summarize this thread in 5 points and tell me what I still need to reply to\"",
                "\"Delete these emails\"",
              ],
              correctIndex: 1,
              feedback:
                "Yes — a short summary plus your action items turns 30 emails into a two-minute read.",
              hint: "Ask for a summary and what you personally need to do next.",
            },
            {
              bot: "You've got a 40-page report and read the whole thing cold just to find one figure.",
              ask: "Best approach?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Not useful — ask Gemini a specific question and it pulls the exact section, saving you pages of reading.",
              hint: "Why read it all when you can ask?",
            },
            {
              bot: "For big decisions Gemini has a special mode. Fill the gap.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "For the big stuff, Gemini's Deep ___ mode browses many sources and writes a report.",
              options: ["Research", "Reading", "Reach"],
              correctIndex: 0,
              feedback:
                "Right — Deep Research browses many sources and organizes them for careful decisions.",
              hint: "It's about digging into lots of sources.",
            },
            {
              bot: "Match each big pile of information to the smart Gemini move.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "30-email thread", right: "Summarize in 5 bullets" },
                { left: "Long insurance PDF", right: "Ask a specific question" },
                { left: "Choosing a school", right: "Run Deep Research" },
              ],
              feedback:
                "Perfect — summarize, ask targeted questions, or dig deep depending on the job.",
              hint: "Match each task to the right approach.",
            },
            {
              bot: "Let's build a targeted question. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Summarize", "this", "thread", "in", "five", "short", "bullet", "points"],
              feedback:
                "Nice — a short, specific ask turns a wall of text into a quick read.",
              hint: "Start with the action word.",
            },
            {
              bot: "Let's write a prompt. You have a long PDF school handbook saved in your Drive.",
              ask: "e.g. write a question that pulls just the info you need",
              inputType: "text",
              keywords: ["handbook", "drive", "summarize", "rules", "specific", "list", "contact"],
              feedback:
                'Nice. A strong one: "In the school handbook PDF in my Drive, summarize the rules on sick days and holidays, and list who I contact for each." Gemini finds and quotes the exact parts.',
              hint: "Name the file, the exact topics, and ask for a short list.",
            },
            {
              bot: "Last one — you're buying a first laptop for your teenager under a budget.",
              ask: "e.g. write a Deep Research prompt for a sourced comparison",
              inputType: "text",
              keywords: ["deep", "research", "compare", "budget", "table", "sources", "laptop"],
              feedback:
                'Great. Example: "Deep Research: compare 5 laptops under ₹50,000 for a student — battery, weight, and durability — in a table with sources." Now Gemini digs and shows its receipts.',
              hint: "Say 'Deep Research', name your budget and criteria, and ask for a table with sources.",
            },
            {
              bot: "Brilliant. Let Gemini read the mountain so you don't have to — summaries, targeted questions, and Deep Research. 🎉",
            },
          ],
        },
        {
          html: `<h3>The habit to keep</h3><p>Never read a long document cold again. Hand it to Gemini and ask a <strong>specific question</strong> first — you'll find your answer in seconds instead of pages.</p><p>For the big decisions, reach for Deep Research and always ask for sources.</p>`,
        },
      ],
    },
    {
      title: "Build Multi-Step Workflows",
      summary:
        "Chain tasks with Gemini — research, draft, refine, then format — to plan events and projects one clear step at a time.",
      estimatedMinutes: 7,
      content:
        `<p>Big tasks feel overwhelming when you try to do them in one prompt. The trick is to work with Gemini in steps — research, draft, refine, format — building on each answer.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "I want to plan [a big task, e.g. a family reunion lunch or a house move] with you step by step. Start with the research step: list 5 ideas or options for [the first decision, e.g. venue and menu ideas for 20 people]. Don't plan the whole thing yet — we'll build on my favourite next.",
        note: "Work through it in the same chat — research, draft, refine — and save 'now turn it into a checklist' for the very last step.",
      },
      steps: [
        {
          html: `<h3>One conversation, many steps</h3><p>Gemini remembers what you said earlier in the same chat, so you can build on it. Instead of one giant prompt, go step by step:</p><ul><li><strong>Research:</strong> "List 5 kid-friendly party themes for a 6-year-old."</li><li><strong>Draft:</strong> "Great — plan a party around the dinosaur theme."</li><li><strong>Refine:</strong> "Make it work for a ₹5,000 budget."</li><li><strong>Format:</strong> "Now give me a checklist and a shopping list."</li></ul><p>Each step is small, and the final result is exactly what you pictured.</p>`,
        },
        {
          html: `<h3>Let each answer feed the next</h3><p>Because Gemini keeps the thread's context, you don't repeat yourself. After it drafts a holiday itinerary, you can just say "swap day 2 for something indoors, it might rain" and it adjusts the rest.</p><p>This is far better than cramming everything into one message and hoping Gemini juggles it all at once.</p>`,
          question: {
            text: "You're planning a surprise anniversary dinner with Gemini. What's the best way to work?",
            options: [
              "Ask for everything — venue, menu, budget, and timeline — in one giant prompt",
              "Go step by step: brainstorm ideas, pick one, refine for your budget, then ask for a final checklist",
              "Ask one vague question and stop",
              "Start a brand-new chat for each question so Gemini forgets the details",
            ],
            correctIndex: 1,
            explanation:
              "Working in steps within one chat lets Gemini build on each answer — brainstorm, choose, refine, then format — instead of juggling everything at once or losing your context.",
          },
        },
        {
          html: `<h3>Refine before you format</h3><p>Get the ideas right first, then lock in the neat layout last.</p><ul><li>❌ Ask for a polished table on step one, then keep re-doing the whole table with every change</li><li>✅ Nail the content through a few quick tweaks, then say "now put the final version in a table"</li></ul><p>Formatting early wastes effort because every edit forces a redo. Save the pretty output for the end.</p>`,
          question: {
            text: "You've been refining a weekend house-move plan with Gemini and it's finally right. What's the ideal last step?",
            options: [
              '"Start over"',
              '"Now turn the final plan into a clear checklist grouped by day, with a packing list"',
              '"Make it longer"',
              '"Never mind"',
            ],
            correctIndex: 1,
            explanation:
              "Once the content is right, asking Gemini to format it into a checklist and packing list gives you something you can act on immediately.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey! 👋 Today we chain tasks with Gemini — research, draft, refine, format. Let's build a workflow together.",
            },
            {
              bot: "You want to plan a small birthday party and you're not sure where to start.",
              ask: "What's the best first step with Gemini?",
              inputType: "choice",
              options: [
                "Ask for a finished budget spreadsheet right away",
                "Brainstorm a few theme ideas first, then build from your favourite",
                "Ask 'plan everything' in one line",
              ],
              correctIndex: 1,
              feedback:
                "Yes — start by generating ideas, then build on the one you like. Steps beat one giant prompt.",
              hint: "Which step comes first: ideas or the final polished plan?",
            },
            {
              bot: "You ask Gemini for a polished table on step one, then redo the whole table with every change.",
              ask: "Good workflow?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Not useful — nail the content through quick tweaks first, then format once at the end.",
              hint: "Formatting early means redoing it every edit.",
            },
            {
              bot: "There's an order to multi-step work. Fill the last step.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "Work in steps: research, draft, refine, then ___.",
              options: ["format", "delete", "forget"],
              correctIndex: 0,
              feedback:
                "Right — save the neat table or checklist for the very end, once the content is right.",
              hint: "The pretty output comes last.",
            },
            {
              bot: "Match each step of a workflow to what you do in it.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Research", right: "List theme ideas" },
                { left: "Draft", right: "Plan around your pick" },
                { left: "Refine", right: "Trim to your budget" },
                { left: "Format", right: "Make a final checklist" },
              ],
              feedback:
                "Perfect — each step is small, and the final result is exactly what you pictured.",
              hint: "Match each step to its action.",
            },
            {
              bot: "Put the workflow in order. Arrange the steps.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["research", "draft", "refine", "format"],
              feedback:
                "Nice — that's the chain: research, draft, refine, then format.",
              hint: "Ideas first, pretty output last.",
            },
            {
              bot: "Let's write a chain. You're organizing a family reunion lunch.",
              ask: "e.g. write your first research-step prompt for Gemini",
              inputType: "text",
              keywords: ["list", "ideas", "reunion", "options", "brainstorm", "suggest", "family"],
              feedback:
                'Nice start. Example: "List 5 easy venue and menu ideas for a family reunion lunch for 20 people." That gives you options to build the rest of the plan on.',
              hint: "Ask Gemini for a handful of options to choose from first.",
            },
            {
              bot: "Now imagine the plan is refined and ready. Write the final formatting step.",
              ask: "e.g. write a prompt that turns the plan into something usable",
              inputType: "text",
              keywords: ["checklist", "table", "format", "final", "shopping", "timeline", "list"],
              feedback:
                'Great. Example: "Now turn the final plan into a checklist grouped by task, plus a shopping list and a timeline for the day." That\'s a plan you can actually run.',
              hint: "Ask for the finished version as a checklist, timeline, or table.",
            },
            {
              bot: "You've got it! Research, draft, refine, format — one step at a time, in one chat. Big tasks, handled. 🎉",
            },
          ],
        },
        {
          html: `<h3>The habit to keep</h3><p>When a task feels big, <strong>don't ask for the finished thing first</strong>. Brainstorm, pick, refine, then format — letting each Gemini answer feed the next.</p><p>Save the neat table or checklist for the very end, once the content is right.</p>`,
        },
      ],
    },
    {
      title: "Solve Creative Challenges",
      summary:
        "Brainstorm names, gifts, party themes, and side-hustle ideas with Gemini — and learn how to push past the generic first answers.",
      estimatedMinutes: 6,
      content:
        `<p>Stuck for ideas? Gemini is a tireless brainstorming partner. The catch is that its first answers are often safe and generic — the magic happens when you push it further.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Give me 15 ideas for [what you're stuck on, e.g. gift ideas for my gardening-loving dad, business names, or a kid's party theme]. Constraints: [make it specific, e.g. under a budget, doable indoors, or using my baking skills]. Give me lots to choose from.",
        note: "When the first batch feels generic, reply 'those are too predictable — give me 10 more that are bolder and unexpected.'",
      },
      steps: [
        {
          html: `<h3>Gemini as your idea machine</h3><p>Whenever you're stuck, ask Gemini for a batch of options: gift ideas, business names, party themes, weekend plans, or side hustles.</p><p>Try: "Give me 15 gift ideas for my dad who loves gardening and cricket, under ₹2,000." Asking for a bunch at once means you can cherry-pick the gems instead of settling for one so-so idea.</p>`,
        },
        {
          html: `<h3>The first answer is rarely the best</h3><p>Gemini's opening ideas tend to be the obvious ones everybody thinks of. That's your starting point, not your finish line.</p><p>Push it: "Those are a bit predictable — give me 10 more that are unexpected and playful." Adding words like <strong>quirky, unexpected, or bold</strong> steers Gemini away from the safe middle.</p>`,
          question: {
            text: "Gemini's first 5 business-name ideas for your bakery all feel boring. What's the best next move?",
            options: [
              "Accept the least boring one",
              'Say "those are too generic — give me 10 more that are playful, punny, or unexpected"',
              "Start a new chat and ask the same thing",
              "Give up on Gemini for names",
            ],
            correctIndex: 1,
            explanation:
              "Telling Gemini the first batch was generic and asking for a specific new flavour — playful, punny, unexpected — pushes it past the obvious ideas.",
          },
        },
        {
          html: `<h3>Add constraints to spark creativity</h3><p>Oddly, more limits often mean better ideas. A wide-open ask gets bland results; a narrow one gets clever ones.</p><ul><li>❌ "Give me party theme ideas" — you'll get pirates, princesses, superheroes</li><li>✅ "Give me party themes for an 8-year-old who loves space and dinosaurs, doable indoors for under ₹3,000"</li></ul><p>The details give Gemini something specific to be creative <em>around</em>. You can even ask it to combine two ideas into something new.</p>`,
          question: {
            text: "You want fresh side-hustle ideas that actually fit your life. Which prompt gets the most creative, useful answer?",
            options: [
              '"Give me side-hustle ideas"',
              '"Suggest 10 side hustles I can do from home in under 10 hours a week using my baking skills, with a rough startup cost for each"',
              '"How do I make money?"',
              '"Tell me about business"',
            ],
            correctIndex: 1,
            explanation:
              "The constraints — from home, under 10 hours, using baking, with startup costs — give Gemini something concrete to be creative around, so the ideas actually fit your life.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hi! 👋 Let's brainstorm with Gemini — and practice pushing it past the boring first answers.",
            },
            {
              bot: "You ask Gemini for anniversary gift ideas and the first five are flowers, chocolates, and a card.",
              ask: "What's the best next step?",
              inputType: "choice",
              options: [
                "Pick the chocolates and move on",
                "Say 'those are too predictable — give me 10 unexpected, personal ideas'",
                "Ask the exact same question again",
              ],
              correctIndex: 1,
              feedback:
                "Yes — naming that they're predictable and asking for unexpected, personal ideas pushes Gemini past the obvious.",
              hint: "Tell Gemini what was wrong and what flavour you want instead.",
            },
            {
              bot: "Gemini's first batch of ideas all feel safe, so you just accept the least boring one.",
              ask: "Best move?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Not useful — the first answers are your starting point. Push for bolder, unexpected ideas instead.",
              hint: "The gems show up in round two or three.",
            },
            {
              bot: "There's a surprising trick to creativity. Fill the gap.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "Oddly, more ___ often mean better, more creative ideas.",
              options: ["limits", "guesses", "words"],
              correctIndex: 0,
              feedback:
                "Right — constraints give Gemini something specific to be creative around.",
              hint: "A narrow ask gets cleverer answers.",
            },
            {
              bot: "Match each vague ask to the sharper version that sparks better ideas.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Give me gift ideas", right: "15 gifts for a gardener under ₹2,000" },
                { left: "Party themes", right: "Space themes for an 8-year-old, indoors" },
                { left: "Side-hustle ideas", right: "From-home hustles using my baking" },
              ],
              feedback:
                "Perfect — the details give Gemini something concrete to be creative around.",
              hint: "Match each vague ask to its detailed twin.",
            },
            {
              bot: "Let's push Gemini past its first answers. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Give", "me", "ten", "more", "unexpected", "and", "playful", "ideas"],
              feedback:
                "Nice — words like unexpected and playful steer Gemini off the safe middle.",
              hint: "Start with the action word.",
            },
            {
              bot: "Let's write one. You need a catchy name for a small home candle business.",
              ask: "e.g. write a prompt for creative business names",
              inputType: "text",
              keywords: ["names", "candle", "playful", "list", "unexpected", "brand", "suggest"],
              feedback:
                'Nice. Example: "Give me 15 playful, memorable names for a home candle business with a cozy, natural vibe — mix in a few puns." A big, flavoured batch means more gems to pick from.',
              hint: "Ask for many options and name the vibe or style you want.",
            },
            {
              bot: "Now Gemini's first names felt flat. Write the follow-up that pushes it further.",
              ask: "e.g. write a prompt that asks for bolder, fresher ideas",
              inputType: "text",
              keywords: ["more", "unexpected", "bolder", "quirky", "different", "creative", "generic"],
              feedback:
                'Great. Example: "Those feel a bit generic — give me 10 more that are quirky and unexpected, maybe combining nature and comfort in surprising ways." That steers Gemini off the safe path.',
              hint: "Say what was wrong and ask for a bolder, more unexpected batch.",
            },
            {
              bot: "Perfect! Ask for lots of ideas, add constraints, and always push past the first safe batch. That's creative Gemini. 🎉",
            },
          ],
        },
        {
          html: `<h3>The habit to keep</h3><p>Treat Gemini's first ideas as a warm-up, not the answer. <strong>Ask for more, and ask for bolder.</strong> The gems usually show up in round two or three.</p><p>And remember — the more specific your constraints, the more creative Gemini gets.</p>`,
        },
      ],
    },
    {
      title: "Automate Business Tasks",
      summary:
        "Save time with Gemini Gems, reusable prompts, and templates for invoices, social posts, and customer replies you send over and over.",
      estimatedMinutes: 7,
      content:
        `<p>If you find yourself typing similar prompts again and again — replies, posts, invoices — you can package them once and reuse them. Gemini's Gems and reusable templates turn repeat work into a few clicks.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Help me set up a reusable template for a task I do over and over: [e.g. customer review replies, invoice emails, or booking confirmations]. It should always [your rules, e.g. thank the person by name, stay warm and short, and offer a next step]. Use square brackets like [client] or [amount] for the parts that change each time.",
        note: "Save the result somewhere handy — or build it as a Gem — so next time you just swap in the details and send.",
      },
      steps: [
        {
          html: `<h3>Meet Gems — your custom assistants</h3><p>A <strong>Gem</strong> is a saved version of Gemini set up for one job. You give it instructions once — a role, your tone, and any rules — and it remembers them every time.</p><p>Example: a "Customer Reply" Gem told to "reply to customers warmly, apologize for any delay, and always offer a next step." Now you paste a message and get an on-brand reply instantly, without re-explaining yourself.</p>`,
        },
        {
          html: `<h3>Reusable prompts and templates</h3><p>Even without a Gem, you can keep a few tried-and-tested prompts saved in a note and just swap in the details.</p><p>A template for invoices might be: "Write a polite invoice email for [client] for [service], amount [₹], due in 14 days, friendly and professional." Fill the blanks and send. Same for weekly social posts or booking confirmations.</p>`,
          question: {
            text: "You send nearly the same 'thanks for your order' message to customers every day. What's the smartest way to use Gemini?",
            options: [
              "Type a fresh, detailed prompt from scratch each time",
              "Build a Gem or save a reusable template with your tone and rules, then just drop in the details",
              "Copy a random reply from the internet",
              "Stop replying to save time",
            ],
            correctIndex: 1,
            explanation:
              "For anything you do repeatedly, a Gem or saved template captures your tone and rules once, so each reply takes seconds instead of a fresh prompt every time.",
          },
        },
        {
          html: `<h3>What to automate vs. write fresh</h3><p>Not everything should be a template — but the repeat stuff absolutely should.</p><ul><li>✅ Great for Gems/templates: invoices, order confirmations, review replies, weekly social captions, FAQ answers</li><li>❌ Better written fresh: a heartfelt personal note, a sensitive complaint, a one-off big decision</li></ul><p>Set up Gems for the tasks that repeat, and you free up your energy for the ones that truly need a human touch.</p>`,
          question: {
            text: "Which task is the best candidate for a reusable Gemini Gem?",
            options: [
              "A personal apology to a close friend",
              "Your weekly Instagram caption for the bakery's specials, always in the same upbeat voice",
              "A once-in-a-lifetime wedding speech",
              "A delicate reply to an upset family member",
            ],
            correctIndex: 1,
            explanation:
              "A weekly caption in a consistent voice is repetitive and predictable — perfect for a Gem. The others are personal, one-off, or sensitive, so they deserve a fresh, human touch.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey! 👋 Last one — let's automate the repetitive stuff with Gems and reusable templates. Ready to save some time?",
            },
            {
              bot: "You run a small tutoring business and send booking confirmations all week.",
              ask: "What's the best Gemini approach?",
              inputType: "choice",
              options: [
                "Write a new prompt from scratch every booking",
                "Build a Gem with your tone and rules, then just drop in the student and time",
                "Skip confirmations entirely",
              ],
              correctIndex: 1,
              feedback:
                "Yes — a Gem remembers your tone and rules, so each confirmation takes seconds.",
              hint: "It's the same message over and over — capture it once.",
            },
            {
              bot: "You turn a heartfelt condolence message to a grieving customer into a reusable template.",
              ask: "Good candidate for a template?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Not useful — a condolence message needs a genuine human touch. Templates are for the repetitive stuff.",
              hint: "Which tasks deserve real, human words?",
            },
            {
              bot: "Gemini has a name for a saved, custom assistant. Fill the gap.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "A ___ is a saved version of Gemini set up for one job.",
              options: ["Gem", "Tab", "Draft"],
              correctIndex: 0,
              feedback:
                "Right — a Gem remembers your role, tone, and rules every time.",
              hint: "It's a short, sparkly word.",
            },
            {
              bot: "Match each task to whether it's better as a template or written fresh.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Weekly social caption", right: "Make a template" },
                { left: "Order confirmations", right: "Make a template" },
                { left: "Wedding speech", right: "Write it fresh" },
              ],
              feedback:
                "Perfect — automate the repeat work, and keep the personal, one-off tasks human.",
              hint: "Repetitive vs. personal.",
            },
            {
              bot: "Let's set up a Gem's instructions. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Always", "reply", "warmly", "and", "offer", "a", "next", "step"],
              feedback:
                "Nice — clear rules like these keep every reply on-brand.",
              hint: "Start with 'Always'.",
            },
            {
              bot: "Let's set up a Gem. You want one that writes friendly review replies for your café.",
              ask: "e.g. write the instructions you'd give the Gem",
              inputType: "text",
              keywords: ["reply", "warm", "tone", "thank", "customer", "review", "always"],
              feedback:
                'Nice. Example: "You reply to café reviews. Always thank the customer by name, keep it warm and short, address any complaint kindly, and invite them back." Now every reply matches your voice.',
              hint: "Describe the role, the tone, and the rules to follow every time.",
            },
            {
              bot: "Now write a reusable invoice template with blanks to fill in.",
              ask: "e.g. write an invoice email template for Gemini",
              inputType: "text",
              keywords: ["invoice", "client", "amount", "due", "template", "professional", "service"],
              feedback:
                'Great. Example: "Write a polite invoice email for [client] for [service], amount [₹], due in 14 days, friendly and professional." Fill the blanks and send in seconds.',
              hint: "Use square brackets for the parts that change each time.",
            },
            {
              bot: "You've done it! Turn repeat work into Gems and templates, and save your energy for the tasks that need a human. Congrats on finishing the unit! 🎉",
            },
          ],
        },
        {
          html: `<h3>The habit to keep</h3><p>Any time you catch yourself writing almost the same thing twice, <strong>make it a Gem or a template</strong>. Set the tone and rules once, then reuse forever.</p><p>Automate the repetitive tasks — and keep the personal, sensitive ones for your own words.</p>`,
        },
      ],
    },
  ],
};
