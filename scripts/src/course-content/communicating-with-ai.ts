import type { CourseSeed } from "./types";

export const communicatingWithAiCourse: CourseSeed = {
  slug: "communicating-with-ai",
  title: "Communicating with AI",
  tagline: "Talk to AI so it actually helps you",
  description:
    "Learn to ask, prompt, and iterate with tools like ChatGPT and Claude so they actually help with everyday life and work — better emails, trip planning, meal prep, shopping research, homework help, and summarizing long documents.",
  icon: "💬",
  color: "#6366f1",
  accent: "#4f46e5",
  sortOrder: 11,
  units: [
    {
      title: "Communicating with AI",
      lessons: [
        {
          title: 'Why AI Feels "Wrong"',
          summary:
            "Understand why AI sometimes misses the mark — it predicts words from what you give it, so vague asks get vague answers.",
          estimatedMinutes: 6,
          content:
            `<p>AI can feel frustrating when the answer isn't what you pictured. The secret is that AI isn't broken — it's just working with exactly what you gave it.</p>`,
          tryIt: {
            tool: "ChatGPT",
            url: "https://chatgpt.com",
            prompt:
              "I'm going to test how details change your answers. First, help me with this vague version: 'help me plan a trip.' Then help me with this specific version: 'Plan a 3-day budget trip to [a city you'd love to visit] in [month] for two people who love [an interest, e.g. food and walking].' Show me both answers so I can compare them.",
            note: "Notice how much more useful the second answer is — that gap is the whole point: vague in, vague out.",
          },
          steps: [
            {
              html: `<h3>AI predicts, it doesn't read minds</h3><p>When you type a request, AI doesn't <em>know</em> what you want. It makes a very smart guess about what words should come next, based on your words.</p><p>So if your request is fuzzy, its guess is fuzzy too. It fills the gaps with the most <strong>average, generic</strong> answer — not the one in your head.</p>`,
            },
            {
              html: `<h3>Garbage in, garbage out</h3><p>Think of AI like a brilliant assistant who just started today. They're capable, but they know <strong>nothing about your life</strong> unless you tell them.</p><p>Ask "write me an email" and you'll get a bland template. Tell it who it's for, why you're writing, and how it should sound — and suddenly it's useful.</p>`,
              question: {
                text: 'You type "give me a recipe" and get a plain chicken dish you don\'t want. What\'s the most likely reason?',
                options: [
                  "The AI is malfunctioning and needs restarting",
                  "The request gave no details, so AI filled the gaps with a safe, generic guess",
                  "AI can't actually help with cooking",
                  "You need to pay more to get better recipes",
                ],
                correctIndex: 1,
                explanation:
                  'With no details — ingredients you have, diet, time, how many people — AI defaults to the most generic recipe. The vagueness is what produced the bland result.',
              },
            },
            {
              html: `<h3>Vague vs. specific</h3><p>Watch the difference:</p><ul><li>❌ "Help me plan a trip" — AI has to guess where, when, and your budget</li><li>✅ "Plan a 3-day budget trip to Lisbon in May for two people who love food and walking"</li></ul><p>Same tool. The second one just <strong>hands over the details</strong> AI needed all along.</p>`,
              question: {
                text: "Which request will most likely get a genuinely useful answer?",
                options: [
                  '"Tell me about phones"',
                  '"Help with my budget"',
                  '"Suggest a phone under $400 with a great camera and long battery for someone who mostly takes photos of their kids"',
                  '"What should I buy?"',
                ],
                correctIndex: 2,
                explanation:
                  "It names a budget, the priorities (camera, battery), and the real use (photos of kids). AI now has everything it needs instead of guessing.",
              },
            },
            {
              html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
              chat: [
                {
                  bot: "Hey, I'm Nova 👋 Let's figure out why AI sometimes gives you disappointing answers. Ready to diagnose a few?",
                },
                {
                  bot: "A friend typed \"write a birthday message\" and got something generic and cold.",
                  ask: "Why did the AI give a generic result?",
                  inputType: "choice",
                  options: [
                    "AI doesn't understand birthdays",
                    "The prompt gave no details about the person or the tone",
                    "You have to use a special birthday tool",
                  ],
                  correctIndex: 1,
                  feedback:
                    "Exactly. With no name, relationship, or tone, AI defaults to a bland, one-size-fits-all message.",
                  hint: "Think about what the AI didn't know about the person.",
                },
                {
                  bot: "Let's lock in the core idea. Fill in the blank.",
                  ask: "AI doesn't read your mind — it makes a smart ___ from your words.",
                  inputType: "fill-blank",
                  template: "AI doesn't read your mind — it makes a smart ___ from your words.",
                  options: ["guess", "promise", "payment"],
                  correctIndex: 0,
                  feedback:
                    "Right — AI predicts what comes next. Fuzzy input means a fuzzy guess.",
                  hint: "It predicts, it doesn't just know.",
                },
                {
                  bot: "Here's a prompt someone sent to plan a trip. Would this get a genuinely useful answer?",
                  ask: '"Help me plan a trip" — useful or not?',
                  inputType: "binary",
                  options: ["Useful", "Not useful"],
                  correctIndex: 1,
                  feedback:
                    "Not useful — no destination, dates, or budget. AI has to guess everything, so you get a bland answer.",
                  hint: "Could a stranger act on this without questions?",
                },
                {
                  bot: "Now build a specific request. Tap the words in the right order.",
                  ask: "Arrange this into a clear ask:",
                  inputType: "arrange",
                  words: ["Plan", "a", "3-day", "budget", "trip", "to", "Lisbon", "for", "two", "food", "lovers"],
                  feedback:
                    "That's the fix — it hands over the destination, length, budget, and who it's for.",
                  hint: "Start with the action word 'Plan'.",
                },
                {
                  bot: "Let's connect vague asks to the detail each one is missing.",
                  ask: "Match each vague prompt to what it needs:",
                  inputType: "match",
                  pairs: [
                    { left: '"Write an email"', right: "Who it's for + tone" },
                    { left: '"Suggest a phone"', right: "Budget + priorities" },
                    { left: '"Give me a recipe"', right: "Ingredients + diet" },
                  ],
                  feedback:
                    "Nice — every vague prompt is really just missing the details AI needs to stop guessing.",
                  hint: "What detail would make each one personal to you?",
                },
                {
                  bot: "Let's practice fixing one. Someone typed: \"help me with my email.\" It's way too vague.",
                  ask: "e.g. Rewrite that into a specific request for a work email",
                  inputType: "text",
                  keywords: ["specific", "context", "who", "tone", "purpose", "email", "detail"],
                  feedback:
                    'A strong version: "Help me write a polite email to my landlord asking to fix a leaking tap, friendly but firm, about 4 sentences." It names who it\'s for, why, the tone, and length.',
                  hint: "Add who it's for, why you're writing, the tone, and how long.",
                },
                {
                  bot: "Love it. One more — a parent asked AI to \"explain homework\" and got a confusing answer.",
                  ask: "e.g. Rewrite it so AI gives a kid-friendly explanation",
                  inputType: "text",
                  keywords: ["explain", "child", "age", "simple", "topic", "example", "specific"],
                  feedback:
                    'Great direction. A clear version: "Explain long division to my 9-year-old in simple words with one everyday example." Now AI knows the topic, the audience, and the style.',
                  hint: "Name the subject, the child's age, and how simple to make it.",
                },
                {
                  bot: "You've got it. The pattern is simple: vague in, vague out. The more you hand over, the better AI gets. See you in the next lesson! 🎉",
                },
              ],
            },
            {
              html: `<h3>The one habit to keep</h3><p>Before you hit enter, ask yourself: <strong>"Could a stranger act on this?"</strong> If a new assistant would have questions, so does the AI.</p><p>You don't need perfect prompts — you just need to stop making AI guess. That's the whole game.</p>`,
            },
          ],
        },
        {
          title: "Asking Better Questions",
          summary:
            "Learn the four ingredients of a great prompt — goal, context, constraints, and format — plus the power of giving AI a role.",
          estimatedMinutes: 7,
          content:
            `<p>Good prompts aren't magic words — they're complete requests. Four simple ingredients turn a vague ask into a reliably useful one.</p>`,
          tryIt: {
            tool: "ChatGPT",
            url: "https://chatgpt.com",
            prompt:
              "Act as [a role, e.g. an experienced hiring manager or a patient tutor]. My goal: [what you want, e.g. review my resume for a marketing job]. Context: [the background, e.g. I have 5 years of experience but no degree]. Constraints: [limits, e.g. keep feedback to the top 5 fixes]. Format: [how to deliver it, e.g. a numbered list].",
            note: "If the answer disappoints, check which of the four ingredients — goal, context, constraints, format — you left out.",
          },
          steps: [
            {
              html: `<h3>The four ingredients</h3><p>Almost every great prompt has four parts:</p><ul><li><strong>Goal</strong> — what you actually want</li><li><strong>Context</strong> — the background AI needs</li><li><strong>Constraints</strong> — limits like length, budget, or tone</li><li><strong>Format</strong> — how you want it delivered (list, table, email)</li></ul><p>Miss one and AI fills it with a guess.</p>`,
            },
            {
              html: `<h3>See it in action</h3><p>"Plan meals for the week" becomes powerful when you add all four:</p><p><strong>Goal:</strong> plan dinners for the week. <strong>Context:</strong> family of four, one vegetarian. <strong>Constraints:</strong> under 30 minutes each, cheap ingredients. <strong>Format:</strong> a table with day, meal, and shopping list.</p><p>Same idea — now AI can nail it.</p>`,
              question: {
                text: 'In "Write a 150-word cover letter for a barista job, friendly and confident," which ingredient is the "150-word" part?',
                options: [
                  "The goal",
                  "The context",
                  "A constraint",
                  "The format",
                ],
                correctIndex: 2,
                explanation:
                  'A word limit is a constraint — it sets a boundary on the output. The goal is the cover letter; "friendly and confident" is tone; a format would be something like "as bullet points."',
              },
            },
            {
              html: `<h3>Give AI a role</h3><p>One line changes everything: <strong>tell AI who to be</strong>.</p><p>"You are a friendly travel agent" or "Act as a patient math tutor" instantly shifts the tone and depth of the answer. The role tells AI what expertise and voice to bring.</p>`,
              question: {
                text: "You want AI to review your resume like a hiring manager would. What's the smartest opening line?",
                options: [
                  '"Look at my resume"',
                  '"Act as an experienced hiring manager and review my resume for a marketing role"',
                  '"Is my resume good?"',
                  '"Make my resume perfect"',
                ],
                correctIndex: 1,
                explanation:
                  "Giving AI the hiring-manager role plus the target job focuses its feedback on what actually matters to that reader — far more useful than a yes/no question.",
              },
            },
            {
              html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
              chat: [
                {
                  bot: "Welcome back! 👋 Today we upgrade weak prompts using the four ingredients: goal, context, constraints, format.",
                },
                {
                  bot: "Here's a weak one: \"Give me some workout ideas.\" It's missing a lot.",
                  ask: "Which ingredient would help AI most here?",
                  inputType: "choice",
                  options: [
                    "Nothing — it's already clear",
                    "Context, like your fitness level, goal, and equipment",
                    "A longer word count",
                  ],
                  correctIndex: 1,
                  feedback:
                    "Yes — without your level, goal, and what gear you have, AI just guesses. Context makes it personal and doable.",
                  hint: "What does AI need to know about you to make it fit?",
                },
                {
                  bot: "Let's name the parts. Fill in the blank.",
                  ask: 'In "Write a 150-word cover letter," the "150-word" limit is a ___.',
                  inputType: "fill-blank",
                  template: 'In "Write a 150-word cover letter," the "150-word" limit is a ___.',
                  options: ["constraint", "goal", "format"],
                  correctIndex: 0,
                  feedback:
                    "Correct — a word limit is a constraint. It sets a boundary on the output.",
                  hint: "It's a limit on the output.",
                },
                {
                  bot: "Match each piece of a prompt to which ingredient it is.",
                  ask: "Connect the pairs:",
                  inputType: "match",
                  pairs: [
                    { left: "Plan dinners for the week", right: "Goal" },
                    { left: "Family of four, one vegetarian", right: "Context" },
                    { left: "Under 30 minutes each", right: "Constraint" },
                    { left: "As a table", right: "Format" },
                  ],
                  feedback:
                    "Perfect — goal, context, constraint, and format working together is what makes a prompt reliable.",
                  hint: "One is what you want, one is background, one is a limit, one is how it's delivered.",
                },
                {
                  bot: "Now the format matters too. You want a week of dinners you can shop for easily.",
                  ask: "Which format request would be most useful?",
                  inputType: "choice",
                  options: [
                    "\"Just write a paragraph\"",
                    "\"Give it as a table with day, meal, and ingredients to buy\"",
                    "\"Surprise me\"",
                  ],
                  correctIndex: 1,
                  feedback:
                    "A table with days, meals, and a shopping list is instantly usable — you can plan and shop straight from it.",
                  hint: "Think about how you'd actually use it at the store.",
                },
                {
                  bot: "A role can supercharge a prompt too. Build one by tapping the words in order.",
                  ask: "Arrange this role-based opener:",
                  inputType: "arrange",
                  words: ["Act", "as", "a", "patient", "math", "tutor"],
                  feedback:
                    "That's it — giving AI a role instantly shifts the tone and depth of its answer.",
                  hint: 'Start with "Act".',
                },
                {
                  bot: "Quick gut-check. You want AI to review your resume like a recruiter.",
                  ask: '"Is my resume good?" — useful prompt or not?',
                  inputType: "binary",
                  options: ["Useful", "Not useful"],
                  correctIndex: 1,
                  feedback:
                    "Not useful — it's a yes/no with no role or target job. \"Act as a hiring manager and review my resume for a marketing role\" gets real feedback.",
                  hint: "Does it give AI a role and a target?",
                },
                {
                  bot: "Your turn to build one. Take this weak prompt: \"Help me write an email to my boss.\"",
                  ask: "e.g. Rewrite it with goal, context, constraints, and format",
                  inputType: "text",
                  keywords: ["goal", "context", "constraint", "tone", "format", "boss", "length", "specific"],
                  feedback:
                    'Strong example: "Help me write a short, polite email to my boss requesting Friday off for a family event — professional tone, under 100 words, plain paragraph." That\'s goal, context, constraint, and format.',
                  hint: "Say what you want, why, the tone/length, and how to format it.",
                },
                {
                  bot: "Excellent. Now use a role. You want feedback on a speech for a friend's wedding.",
                  ask: "e.g. Write a prompt that gives AI a helpful role",
                  inputType: "text",
                  keywords: ["act", "role", "as", "review", "feedback", "speech", "tone"],
                  feedback:
                    'Nice. A good one: "Act as a warm, funny public-speaking coach and review my 2-minute best-man speech for flow and emotion." The role shapes exactly the kind of feedback you get.',
                  hint: 'Start with "Act as..." and name the kind of expert you want.',
                },
                {
                  bot: "Beautiful work. Goal, context, constraints, format — plus a role when you want a certain voice. That's your toolkit now. 🚀",
                },
              ],
            },
            {
              html: `<h3>Keep it simple</h3><p>You won't always need all four ingredients — but when an answer disappoints, check which one you skipped. Usually that's your fix.</p><p>Add a role whenever tone or expertise matters. It's one line for a big upgrade.</p>`,
            },
          ],
        },
        {
          title: "Zero-Shot vs. Few-Shot Prompting",
          summary:
            "Know when to just ask (zero-shot) and when to show an example (few-shot) so AI copies the exact pattern you want.",
          estimatedMinutes: 6,
          content:
            `<p>Sometimes you just ask and AI nails it. Other times, showing one example works better than any description. Knowing which to use is a quiet superpower.</p>`,
          tryIt: {
            tool: "ChatGPT",
            url: "https://chatgpt.com",
            prompt:
              "Here's one example of how I like to write [something you produce regularly, e.g. customer replies or social captions]: '[paste one real example in your own voice].' Now write three more in that exact same tone and style for these situations: [list a few situations].",
            note: "This is few-shot prompting — showing an example locks in your voice far better than trying to describe it.",
          },
          steps: [
            {
              html: `<h3>Zero-shot: just ask</h3><p><strong>Zero-shot</strong> means you ask without any examples. "Suggest three names for my bakery." For common, flexible tasks, this is fast and works great.</p><p>Use it when there isn't one "right" style you're chasing — you just want ideas or a straightforward answer.</p>`,
            },
            {
              html: `<h3>Few-shot: show an example</h3><p><strong>Few-shot</strong> means you give AI one or two examples of what you want, then ask it to continue the pattern.</p><p>It's perfect when you need a <strong>specific tone or format</strong>. Show AI two product descriptions in your brand voice, and the third will match — no long explanation needed.</p>`,
              question: {
                text: "You want AI to write social captions that sound exactly like your past posts. Which approach fits best?",
                options: [
                  "Zero-shot — just ask for captions",
                  "Few-shot — paste two of your real captions, then ask for more in that style",
                  "Neither works for captions",
                  "Ask it to guess your brand voice",
                ],
                correctIndex: 1,
                explanation:
                  "Matching a specific voice is exactly what few-shot is for. Showing real examples lets AI copy your tone far better than describing it.",
              },
            },
            {
              html: `<h3>Pattern copying</h3><p>AI is superb at spotting patterns. Give it:</p><ul><li>Two thank-you notes → it writes a third in the same warmth</li><li>A sample expense line "Coffee – $4 – Food" → it formats the rest to match</li></ul><p>You're not explaining the rules. You're <strong>showing them</strong>, which is often easier and more exact.</p>`,
              question: {
                text: "You paste one example: \"Milk – $3 – Groceries\" and ask AI to format your other receipts the same way. What are you doing?",
                options: [
                  "Zero-shot prompting",
                  "Giving AI a role",
                  "Few-shot prompting by showing a pattern to copy",
                  "Asking a vague question",
                ],
                correctIndex: 2,
                explanation:
                  "One clear example that sets the format is few-shot prompting. AI copies the exact pattern instead of guessing how you want it laid out.",
              },
            },
            {
              html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
              chat: [
                {
                  bot: "Hi again! 👋 Let's practice choosing between zero-shot (just ask) and few-shot (show an example).",
                },
                {
                  bot: "You want three quick gift ideas for a coworker. No special style needed.",
                  ask: "Zero-shot or few-shot?",
                  inputType: "choice",
                  options: [
                    "Few-shot — show examples first",
                    "Zero-shot — just ask, since there's no fixed style to match",
                    "Neither, ask a human",
                  ],
                  correctIndex: 1,
                  feedback:
                    "Right — for open brainstorming with no set style, zero-shot is fast and totally enough.",
                  hint: "Is there a specific style you need it to copy?",
                },
                {
                  bot: "Let's define it. Fill in the blank.",
                  ask: "Giving AI one or two examples to copy is called ___ prompting.",
                  inputType: "fill-blank",
                  template: "Giving AI one or two examples to copy is called ___ prompting.",
                  options: ["few-shot", "zero-shot", "role"],
                  correctIndex: 0,
                  feedback:
                    "Yes — showing examples is few-shot. Asking with none is zero-shot.",
                  hint: "It's the one where you 'show' examples.",
                },
                {
                  bot: "Match each task to the approach that fits best.",
                  ask: "Connect the pairs:",
                  inputType: "match",
                  pairs: [
                    { left: "Brainstorm gift ideas", right: "Zero-shot" },
                    { left: "Match your brand voice", right: "Few-shot" },
                    { left: "Format receipts a set way", right: "Few-shot" },
                    { left: "Suggest bakery names", right: "Zero-shot" },
                  ],
                  feedback:
                    "Nice — open ideas suit zero-shot; a specific look or voice calls for few-shot examples.",
                  hint: "If there's a fixed style to match, show examples.",
                },
                {
                  bot: "Now you want product descriptions that match your shop's playful voice exactly.",
                  ask: "Which approach fits?",
                  inputType: "choice",
                  options: [
                    "Zero-shot — just ask for descriptions",
                    "Few-shot — paste two existing ones, then ask for more in that voice",
                    "Give up and write them yourself",
                  ],
                  correctIndex: 1,
                  feedback:
                    "Exactly. To lock in a specific voice, show real examples and let AI copy the pattern.",
                  hint: "Matching an exact tone is what few-shot is best at.",
                },
                {
                  bot: "Build the start of a few-shot prompt. Tap the words in order.",
                  ask: "Arrange this opener:",
                  inputType: "arrange",
                  words: ["Here", "are", "two", "examples", "to", "copy"],
                  feedback:
                    "That's the move — show the examples first, then ask AI to continue the pattern.",
                  hint: 'Start with "Here".',
                },
                {
                  bot: "Quick call. You need captions that sound exactly like your past posts.",
                  ask: "Would zero-shot (just ask) work well here?",
                  inputType: "binary",
                  options: ["Yes", "No"],
                  correctIndex: 1,
                  feedback:
                    "No — matching an exact voice needs examples. Paste two real captions, then ask for more in that style.",
                  hint: "Can AI copy a voice it hasn't seen?",
                },
                {
                  bot: "Let's write one. You have a vague zero-shot ask: \"Write a reply thanking a customer for their review.\"",
                  ask: "e.g. Turn it into a few-shot prompt using an example reply",
                  inputType: "text",
                  keywords: ["example", "like", "this", "match", "tone", "style", "pattern", "reply"],
                  feedback:
                    'Great. A few-shot version: "Here\'s a reply I like: \'Thanks so much, Sam — made our day! ☕\' Now write three more in that same warm, casual tone for these reviews..." You show the style, then ask.',
                  hint: "Paste one reply you like, then ask AI to match it.",
                },
                {
                  bot: "Nice. Try another — you keep expense notes as \"Item – Cost – Category.\"",
                  ask: "e.g. Write a few-shot prompt so AI formats new receipts that way",
                  inputType: "text",
                  keywords: ["example", "format", "pattern", "like", "match", "same", "receipt"],
                  feedback:
                    'Perfect thinking. Example: "Format these receipts like this: \'Milk – $3 – Groceries\'. Now do the rest the same way: ..." The single example sets the exact format.',
                  hint: "Give one line in your format, then say 'do the rest the same way.'",
                },
                {
                  bot: "You've got it! Just ask when style is open; show an example when you need a specific look or voice. See you next lesson! ✨",
                },
              ],
            },
            {
              html: `<h3>Quick rule of thumb</h3><p>If you'd struggle to <em>describe</em> the style you want, <strong>show it instead</strong>. One good example often beats a paragraph of instructions.</p><p>And if the first answer is close but the tone's off — add an example and try again.</p>`,
            },
          ],
        },
        {
          title: "Making AI Think",
          summary: "Learn how to make AI explain, compare, and reason",
          estimatedMinutes: 7,
          content:
            `<p>AI can do more than answer — it can reason, weigh options, and explain things at any level. You just have to ask for the thinking, not only the result.</p>`,
          tryIt: {
            tool: "ChatGPT",
            url: "https://chatgpt.com",
            prompt:
              "I'm deciding between two options: [option A] and [option B] for [your situation, e.g. two apartments, two phone plans, or two job offers]. Compare them in a table by the criteria I care about: [list 2-3, e.g. cost, commute, space]. List pros and cons for each, then recommend one for me and explain your reasoning step by step.",
            note: "After it answers, reply 'review your recommendation and flag anything you might have gotten wrong' — a self-check often catches weak spots.",
          },
          steps: [
            {
              html: `<h3>Ask for the reasoning</h3><p>Instead of "which car should I buy?", try "compare these two cars step by step, then recommend one."</p><p>Asking AI to <strong>show its thinking</strong> gives you better, more trustworthy answers — and you can spot where you disagree.</p>`,
            },
            {
              html: `<h3>Pros, cons, and comparisons</h3><p>For any decision, AI is great at laying out trade-offs:</p><ul><li>"List the pros and cons of each option"</li><li>"Compare these two phone plans in a table by price, data, and contract"</li></ul><p>Giving it your <strong>criteria</strong> — what you actually care about — makes the comparison genuinely useful.</p>`,
              question: {
                text: "You're torn between two apartments. Which prompt gets the most helpful answer?",
                options: [
                  '"Which apartment is better?"',
                  '"Compare these two apartments by rent, commute, and space, list pros and cons, then recommend one for a remote worker"',
                  '"Tell me about apartments"',
                  '"Pick one"',
                ],
                correctIndex: 1,
                explanation:
                  "It names the criteria you care about, asks for pros and cons, and requests a recommendation for your situation. That's a structured, useful comparison instead of a bare opinion.",
              },
            },
            {
              html: `<h3>"Explain like I'm 10" and self-checks</h3><p>Two more moves:</p><ul><li><strong>Adjust the level:</strong> "Explain how a mortgage works like I'm 10." Great for anything confusing.</li><li><strong>Ask AI to check itself:</strong> "Now review your answer and point out anything that might be wrong."</li></ul><p>Making AI critique its own work often catches mistakes and improves the result.</p>`,
              question: {
                text: "AI gives you a confident summary of a legal document. What's a smart follow-up?",
                options: [
                  '"Thanks, done"',
                  '"Review your summary and flag anything you might have gotten wrong or oversimplified"',
                  '"Make it longer"',
                  '"Delete that"',
                ],
                correctIndex: 1,
                explanation:
                  "Asking AI to critique its own answer surfaces weak spots and oversimplifications, so you don't take a confident-sounding summary at face value.",
              },
            },
            {
              html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
              chat: [
                {
                  bot: "Hey! 👋 Today we make AI actually think — reasoning, comparing, and explaining at the right level.",
                },
                {
                  bot: "You're choosing between two vacation spots and want a real comparison.",
                  ask: "What should you give AI for the best comparison?",
                  inputType: "choice",
                  options: [
                    "Just the two place names",
                    "The two places plus your criteria — budget, weather, and activities you like",
                    "A request to 'just pick one'",
                  ],
                  correctIndex: 1,
                  feedback:
                    "Yes — naming your criteria lets AI compare on what actually matters to you, not generic factors.",
                  hint: "What do you personally care about when comparing them?",
                },
                {
                  bot: "Let's name the technique. Fill in the blank.",
                  ask: 'Asking AI to "explain step by step" makes it show its ___.',
                  inputType: "fill-blank",
                  template: 'Asking AI to "explain step by step" makes it show its ___.',
                  options: ["reasoning", "price", "speed"],
                  correctIndex: 0,
                  feedback:
                    "Right — asking for the reasoning gives you better, more trustworthy answers you can check.",
                  hint: "You want to see its thinking.",
                },
                {
                  bot: "Match each situation to the smart move.",
                  ask: "Connect the pairs:",
                  inputType: "match",
                  pairs: [
                    { left: "A confusing term", right: "Explain like I'm 10" },
                    { left: "Two options to weigh", right: "Compare by criteria" },
                    { left: "A confident summary", right: "Ask it to self-check" },
                  ],
                  feedback:
                    "Perfect — match the move to the moment and AI becomes a real thinking partner.",
                  hint: "One simplifies, one compares, one double-checks.",
                },
                {
                  bot: "You read AI's confident explanation of an insurance policy but you're unsure it's right.",
                  ask: "What's the best next move?",
                  inputType: "choice",
                  options: [
                    "Trust it completely",
                    "Ask AI to review its own answer and flag anything uncertain or oversimplified",
                    "Start a brand new chat",
                  ],
                  correctIndex: 1,
                  feedback:
                    "Exactly — a self-check catches oversights and stops you trusting a confident-but-wrong answer.",
                  hint: "Confident isn't the same as correct.",
                },
                {
                  bot: "Build a self-check request. Tap the words in order.",
                  ask: "Arrange this follow-up:",
                  inputType: "arrange",
                  words: ["Review", "your", "answer", "and", "flag", "any", "mistakes"],
                  feedback:
                    "That's it — making AI critique its own work often catches errors and improves the result.",
                  hint: 'Start with "Review".',
                },
                {
                  bot: "Gut-check time. AI gives a confident summary of a legal document.",
                  ask: 'Is "Thanks, done" the best response?',
                  inputType: "binary",
                  options: ["Yes", "No"],
                  correctIndex: 1,
                  feedback:
                    "No — ask it to review and flag anything it might have gotten wrong before you rely on it.",
                  hint: "Should you take a confident answer at face value?",
                },
                {
                  bot: "Let's write one. You want to compare two phone plans and pick the best for heavy data use.",
                  ask: "e.g. Write a prompt that makes AI compare them with criteria",
                  inputType: "text",
                  keywords: ["compare", "criteria", "pros", "cons", "table", "recommend", "data", "price"],
                  feedback:
                    'Great. A strong prompt: "Compare these two phone plans in a table by price, data allowance, and contract length. List pros and cons, then recommend the best one for someone who streams a lot." Criteria + structure + a recommendation.',
                  hint: "Name your criteria, ask for pros/cons, and request a recommendation.",
                },
                {
                  bot: "Nice one. Now you're confused by a term in a work report: \"cash flow.\"",
                  ask: "e.g. Write a prompt that gets a simple, clear explanation",
                  inputType: "text",
                  keywords: ["explain", "simple", "like", "example", "child", "everyday", "step"],
                  feedback:
                    'Perfect. Try: "Explain cash flow like I\'m 10, using one everyday example, then give me the one-sentence grown-up version." You get it simply first, then precisely.',
                  hint: 'Ask AI to "explain like I\'m 10" with an everyday example.',
                },
                {
                  bot: "You're a natural. Ask for reasoning, give criteria, adjust the level, and make AI check itself. Powerful stuff. See you in the last lesson! 🧠",
                },
              ],
            },
            {
              html: `<h3>Think out loud, together</h3><p>The best AI answers come when you treat it like a thinking partner, not a vending machine. Ask it to reason, compare, and double-check.</p><p>And remember: you're still the decision-maker. AI lays out the thinking — you make the call.</p>`,
            },
          ],
        },
        {
          title: "Working With AI: Iteration & Prompt Chaining",
          summary:
            "Treat the first answer as a draft and refine it with follow-ups — and break big tasks into a chain of smaller steps.",
          estimatedMinutes: 7,
          content:
            `<p>The pros don't get perfect answers on the first try — they refine. The real skill is the conversation <em>after</em> the first response.</p>`,
          tryIt: {
            tool: "ChatGPT",
            url: "https://chatgpt.com",
            prompt:
              "Write a first draft of [something you actually need, e.g. an email to reschedule an appointment or a message to a client]. Here's the context: [the key details]. Once I see it, I'll ask you to refine it — so keep it simple for now.",
            note: "Then iterate with small follow-ups like 'keep the points but make it shorter and friendlier' or 'give me 3 versions to choose from' instead of starting over.",
          },
          steps: [
            {
              html: `<h3>The first draft is a starting point</h3><p>AI's first answer is rarely the final one — and that's fine. It's a draft you shape.</p><p>Just keep talking: "make it shorter," "more formal," "give me three alternatives." Each follow-up steers it closer to what you want, without starting over.</p>`,
            },
            {
              html: `<h3>Handy follow-up moves</h3><p>Keep these in your back pocket:</p><ul><li>"Make it shorter / punchier"</li><li>"More formal / more casual"</li><li>"Give me 3 versions to choose from"</li><li>"Keep it but change the ending"</li></ul><p>Small nudges beat rewriting your whole prompt.</p>`,
              question: {
                text: "AI wrote a good complaint email but it's too aggressive. What's the best follow-up?",
                options: [
                  "Start a brand new chat from scratch",
                  '"Keep the same points but make the tone calmer and more polite"',
                  '"That\'s wrong"',
                  "Give up and write it yourself",
                ],
                correctIndex: 1,
                explanation:
                  "A targeted follow-up keeps the good parts and fixes just the tone. No need to start over — you refine what's already close.",
              },
            },
            {
              html: `<h3>Chaining big tasks into steps</h3><p>For anything big, don't ask for it all at once. Break it into a <strong>chain</strong>:</p><p>Planning a party? Step 1: brainstorm themes. Step 2: pick one and plan the menu. Step 3: turn it into a shopping list. Each answer feeds the next.</p>`,
              question: {
                text: "You want AI to help write a full newsletter. What's the smartest way to work?",
                options: [
                  "Ask for the entire finished newsletter in one giant prompt",
                  "Chain it: brainstorm topics, then outline, then draft each section, then polish",
                  "Ask for one word at a time",
                  "Only use it for the title",
                ],
                correctIndex: 1,
                explanation:
                  "Chaining a big task into steps — topics, outline, drafting, polish — gives you control at each stage and a much better final result than one giant request.",
              },
            },
            {
              html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
              chat: [
                {
                  bot: "Last lesson! 👋 Let's practice iterating — turning a rough first draft into exactly what you need.",
                },
                {
                  bot: "Imagine AI drafted an email to reschedule a dentist appointment, but it's too long and stiff.",
                  ask: "What's your first refinement?",
                  inputType: "choice",
                  options: [
                    "Start a whole new chat",
                    '"Make it shorter and a bit more friendly, keeping the same request"',
                    '"It\'s bad"',
                  ],
                  correctIndex: 1,
                  feedback:
                    "Yes — a clear, small follow-up fixes length and tone while keeping what works.",
                  hint: "Nudge the length and tone, don't restart.",
                },
                {
                  bot: "Let's lock in the mindset. Fill in the blank.",
                  ask: "AI's first answer is best treated as a ___, not the final version.",
                  inputType: "fill-blank",
                  template: "AI's first answer is best treated as a ___, not the final version.",
                  options: ["draft", "receipt", "rule"],
                  correctIndex: 0,
                  feedback:
                    "Right — the first answer is a draft you shape with follow-ups.",
                  hint: "Something you refine, not something final.",
                },
                {
                  bot: "Quick call. You want AI to write a full newsletter.",
                  ask: "Is asking for the whole thing in one giant prompt the best move?",
                  inputType: "binary",
                  options: ["Yes", "No"],
                  correctIndex: 1,
                  feedback:
                    "No — chain it: brainstorm topics, outline, draft sections, then polish. Each step feeds the next.",
                  hint: "Big task, one prompt — is that controllable?",
                },
                {
                  bot: "Match each first draft problem to the follow-up that fixes it.",
                  ask: "Connect the pairs:",
                  inputType: "match",
                  pairs: [
                    { left: "Too aggressive", right: "Make the tone calmer" },
                    { left: "Too long", right: "Cut it to 100 words" },
                    { left: "Want choices", right: "Give me 3 versions" },
                  ],
                  feedback:
                    "Nice — small, targeted nudges beat rewriting the whole prompt.",
                  hint: "Each fix changes just one thing.",
                },
                {
                  bot: "You've got a big task: planning a surprise birthday weekend. Doing it in one prompt feels messy.",
                  ask: "What's the better approach?",
                  inputType: "choice",
                  options: [
                    "Ask for the entire plan in one huge prompt",
                    "Chain it: brainstorm ideas, then pick one and plan activities, then make a checklist",
                    "Only ask for the cake flavor",
                  ],
                  correctIndex: 1,
                  feedback:
                    "Exactly — breaking it into steps keeps you in control and each answer feeds the next.",
                  hint: "Big task? Break it into a sequence of smaller asks.",
                },
                {
                  bot: "Build a refinement follow-up. Tap the words in order.",
                  ask: "Arrange this nudge:",
                  inputType: "arrange",
                  words: ["Keep", "the", "points", "but", "make", "it", "shorter"],
                  feedback:
                    "That's the skill — tell AI what to keep and what to change.",
                  hint: 'Start with "Keep".',
                },
                {
                  bot: "Let's iterate an email. Say AI wrote a job-application email that's fine but generic.",
                  ask: "e.g. Write a follow-up that makes it stronger",
                  inputType: "text",
                  keywords: ["shorter", "specific", "tone", "confident", "example", "keep", "change", "rewrite"],
                  feedback:
                    'Nice. A solid follow-up: "Keep the structure but make it more confident, add one specific achievement, and cut it to 120 words." Targeted tweaks, not a restart.',
                  hint: "Tell AI what to keep and what to change (tone, length, a detail).",
                },
                {
                  bot: "Now push it once more — you want options to choose from before sending.",
                  ask: "e.g. Write a follow-up asking for alternatives",
                  inputType: "text",
                  keywords: ["versions", "alternatives", "three", "options", "different", "tone", "choose"],
                  feedback:
                    'Perfect. Try: "Give me 3 versions with slightly different tones — warm, formal, and enthusiastic — so I can pick." Now you\'ve got real choices.',
                  hint: "Ask for a few versions with different tones.",
                },
                {
                  bot: "That's the whole loop: draft, refine with follow-ups, and chain big jobs into steps. You now know how to really communicate with AI. Congrats! 🎉",
                },
              ],
            },
            {
              html: `<h3>You're the director</h3><p>Working with AI is a back-and-forth, not a one-shot. Draft, react, refine — and break the big stuff into steps.</p><p>Keep these habits and AI stops feeling random and starts feeling like a genuinely helpful teammate. Nicely done. 👏</p>`,
            },
          ],
        },
      ],
    },
  ],
};
