import type { UnitSeed } from "./types";

export const AI_PORTFOLIO_UNIT_1: UnitSeed = {
  title: "Build a Strong Portfolio with AI",
  lessons: [
    {
      title: "How AI Simplifies Portfolio Creation",
      summary: "Beat the blank-page problem: use AI as a planning partner to get a clear portfolio structure in minutes",
      content: `<p>You know your work is strong — you've delivered results and built things that matter. But when someone asks for your portfolio, you freeze. The problem is almost never your achievements; it's structure. This lesson uses AI to solve exactly that.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm a [your role — e.g. UX designer / marketer / developer / consultant] with about [X] years of experience, and I want to build a professional portfolio. My goal is to [land freelance clients / get hired / showcase my expertise]. Ask me 4-5 questions about my work and audience, then suggest a simple, essential set of portfolio sections (5-6 max) in a logical order, with a one-line purpose for each section. Keep it simple enough that I can actually finish it — don't overwhelm me with every possible section.",
        note: "You'll walk away with a real outline for YOUR portfolio — the blank page is now a fill-in-the-blank. Save it; the rest of this course fills in each section.",
      },
      steps: [
        {
          html: `<h3>The blank-page problem</h3><p>Most professionals never build a portfolio — not from lack of achievements, but because the process feels overwhelming. You open a blank document and think: "What sections do I need? Bio first, or work first? How do I organize this?" Then nothing gets done — while people with <em>less</em> impressive work keep landing opportunities because they actually have a portfolio.</p><ul><li><strong>The real blocker is structure</strong>, not talent or time</li><li><strong>Once you know what to build and in what order</strong>, the building becomes manageable</li><li><strong>This is exactly where AI shines</strong> — it turns a blank page into a clear framework</li></ul>`,
          question: {
            text: "What actually stops most professionals from building a portfolio?",
            options: [
              "Not having enough good work to showcase",
              "Not knowing how to organize and structure it — the blank-page problem",
              "Portfolios requiring expensive design software",
            ],
            correctIndex: 1,
            explanation:
              "Structure is the real blocker — not achievements or time. The moment you know what to build and how to order it, the actual building becomes doable.",
          },
        },
        {
          html: `<h3>AI as your planning partner — not your ghostwriter</h3><p>Think of AI as the friend who asks the right questions and helps you organize your thoughts. <strong>You already know your work; AI just structures it so it makes sense to others.</strong> The line matters:</p><ul><li><strong>AI is great at:</strong> suggesting sections, organizing projects into categories, drafting outlines, giving you a framework to start from</li><li><strong>AI should NOT:</strong> invent achievements you don't have, or make personal decisions like which career path to pursue</li><li><strong>The split:</strong> AI brings frameworks and structure; you bring the real work, goals, and professional judgment</li></ul><div class="discovery"><p>💡 <strong>The honesty rule</strong></p><p>Never let AI fabricate results, clients, or numbers to fill space. A portfolio's entire value is trust — one invented claim that gets checked can cost you the opportunity. Structure with AI; substance is yours and true.</p></div>`,
          question: {
            text: "Which portfolio task should you NOT hand to AI?",
            options: [
              "Suggesting what sections to include",
              "Organizing your projects into logical categories",
              "Deciding your career path or inventing achievements you don't have",
            ],
            correctIndex: 2,
            explanation:
              "AI excels at frameworks and structure. Personal decisions and factual substance — your real work, goals, and results — stay with you. Fabricated achievements destroy the trust a portfolio exists to build.",
          },
        },
        {
          html: `<h3>Ask for structure, not everything</h3><p>How you ask ChatGPT decides what you get back. Compare:</p><ul><li><strong>Weak:</strong> "I'll send my work, decide my career for me and write my whole portfolio." — asks AI to do your thinking and make personal calls it can't</li><li><strong>Strong:</strong> "What sections should a professional portfolio include?" — asks for structure and guidance you can act on</li></ul><p>The strong version returns a clean framework — often a simple 5-section outline. And simple is the feature, not a limitation:</p><ul><li><strong>A simple structure gets finished;</strong> an exhaustive one gets abandoned halfway</li><li><strong>It's a starting point, not a rigid template</strong> — lead with visuals if you're creative, with case studies if you're a consultant, adjust freely</li><li><strong>You now have a framework to customize</strong>, not a blank page to stare at</li></ul><p>Next, you'll define your visual identity — the colors, style, and feel that make the portfolio unmistakably yours. Then curation, visual assets, the actual build, case study pages, an about/contact that converts, and finally mobile polish and launch.</p>`,
          question: {
            text: "Why is a simple 5-section portfolio outline an advantage, not a limitation?",
            options: [
              "It's so detailed you'll never have to make a decision",
              "It's simple enough to actually finish instead of abandoning halfway through",
              "It includes every possible thing someone might want to know about you",
            ],
            correctIndex: 1,
            explanation:
              "A finished simple portfolio beats a perfect one that never ships. Simplicity is what lets you complete it — then customize to your field and goals.",
          },
        },
      ],
    },
    {
      title: "Define Your Visual Identity",
      summary: "Discover your aesthetic with AI — colors, typography, and a moodboard that makes the portfolio feel like you",
      content: `<p>Two portfolios with identical work can feel completely different — one forgettable, one memorable. The difference is visual identity: the colors, type, and mood that signal who you are before a word is read. This lesson helps you define yours with AI, no design degree required.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me define the visual identity for my portfolio. I'm a [role] and I want visitors to feel [3 words — e.g. confident, creative, trustworthy] when they land on it. My field is [industry], and here are 2-3 brands or sites whose look I admire: [names or descriptions]. Suggest: (1) three distinct visual directions, each with a name, a one-line vibe, and 5 mood keywords, (2) for my favorite direction, a color palette described in plain words with a role for each color (background, text, accent), and (3) two font-pairing suggestions (heading + body) from free libraries like Google Fonts that match the personality. Explain in one line why each choice fits my goal.",
        note: "Pick one direction and write down its keywords, colors, and fonts — this becomes your style guide, referenced in every lesson that follows.",
      },
      steps: [
        {
          html: `<h3>Visual identity = the first impression</h3><p>Before a visitor reads your bio or clicks a project, they've already formed an impression from how the page <em>feels</em>. Visual identity is what controls that feeling:</p><ul><li><strong>Colors</strong> set the emotional tone — calm and trustworthy, bold and energetic, minimal and premium</li><li><strong>Typography</strong> signals personality — a sharp modern font reads differently from a warm rounded one</li><li><strong>Consistency</strong> is what reads as "professional" — the same colors and fonts repeating everywhere</li></ul><p>You don't need design training to make good choices — you need AI to help you discover and name your aesthetic, then apply it consistently.</p>`,
          question: {
            text: "Why does visual identity matter even before someone reads your portfolio?",
            options: [
              "It's required by website builders to publish",
              "Colors and typography create the first impression and emotional tone before a word is read",
              "It automatically ranks your portfolio higher in search",
            ],
            correctIndex: 1,
            explanation:
              "Visitors feel your portfolio before they read it. Colors and type set the tone; consistency is what makes it read as professional.",
          },
        },
        {
          html: `<h3>Discover your aesthetic with a moodboard</h3><p>You may not know your style in the abstract — but you know it when you see it. A moodboard makes it concrete:</p><ul><li><strong>Ask AI for three named directions</strong> — e.g. "Quiet Confidence" (muted tones, lots of white space), "Bold Creator" (high contrast, punchy accent), "Warm Craft" (earthy palette, friendly type)</li><li><strong>React to compare</strong> — seeing three options makes your preference obvious in a way a blank page never will; "not this" is useful information too</li><li><strong>Feed it real references</strong> — naming 2-3 sites you admire gives AI a target instead of guessing</li></ul><div class="discovery"><p>💡 <strong>Match the feeling to the goal</strong></p><p>Your aesthetic should serve your audience, not just your taste. A corporate consultant and a children's illustrator need opposite vibes. Start from "how do I want a client to feel?" and work backward to the palette.</p></div>`,
          question: {
            text: "Why ask AI for three named visual directions instead of one?",
            options: [
              "Three directions are required for a valid moodboard",
              "Comparing options makes your preference obvious — and rejected directions are useful information",
              "It triples how many colors you can use",
            ],
            correctIndex: 1,
            explanation:
              "You recognize your style when you see it. Three side-by-side directions turn a vague 'I'm not sure' into a confident choice.",
          },
        },
        {
          html: `<h3>Lock it into a mini style guide</h3><p>An identity only works if it repeats. Capture yours in a few lines you'll reuse everywhere:</p><ul><li><strong>Palette with roles:</strong> background, text, and one accent color (the accent is for buttons and highlights only — used sparingly, it stays powerful)</li><li><strong>Two fonts maximum:</strong> a heading font with character, a body font built for easy reading</li><li><strong>Mood keywords:</strong> the 5 words from your chosen direction — these go into every AI prompt for visuals later</li></ul><p>This mini style guide is the thread that ties your whole portfolio together: homepage, project pages, about page — all pulling from the same palette and type. Next, you'll decide <em>which work</em> earns a place inside this identity.</p>`,
          question: {
            text: "What's the rule for using your accent color?",
            options: [
              "Use it as the background on every page for consistency",
              "Use it sparingly — for buttons and highlights only — so it stays powerful",
              "Change it on each page to keep things interesting",
            ],
            correctIndex: 1,
            explanation:
              "An accent used everywhere stops being an accent. Reserved for actions and highlights, it draws the eye exactly where you want it.",
          },
        },
      ],
    },
    {
      title: "Choose Your Best Work & Curate It",
      summary: "Curate ruthlessly with AI's help: pick the projects that prove your value and cut the rest",
      content: `<p>The instinct is to show everything you've ever made. That's the mistake. A portfolio is an argument, not an archive — and a few strong pieces make a stronger case than many average ones. This lesson uses AI to help you curate like a professional.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me curate my portfolio. My goal is to attract [type of client/role]. Here's a list of every project I could include: [list each with one line — what it was, what you did, and any result]. For each project, rate how strongly it supports my goal (high/medium/low) and why. Then recommend the 4-6 strongest to feature, flag any that are weak or redundant, and note if there's a gap my selection doesn't cover for my target audience. Be honest — I'd rather cut a project than include a weak one.",
        note: "The 'why' next to each rating is the gold — it tells you what story each project tells, which you'll turn into descriptions in a later lesson.",
      },
      steps: [
        {
          html: `<h3>Quality over quantity — always</h3><p>More projects does not mean a stronger portfolio. It usually means a weaker one:</p><ul><li><strong>Every weak piece drags down the strong ones</strong> — visitors judge you by your average, and often by your worst</li><li><strong>Attention is limited</strong> — a visitor who sees 5 excellent projects remembers you; one who scrolls 25 mixed ones remembers nothing</li><li><strong>Curation itself signals taste</strong> — knowing what to leave out is a professional skill people can see</li></ul><p>The target for most portfolios: <strong>4-6 genuinely strong projects</strong>, each earning its place.</p>`,
          question: {
            text: "Why is showing fewer, stronger projects better than showing everything?",
            options: [
              "Websites charge per project uploaded",
              "Visitors judge you by your average — weak pieces drag down strong ones, and curation signals taste",
              "Search engines penalize large portfolios",
            ],
            correctIndex: 1,
            explanation:
              "A portfolio is an argument, not an archive. A few excellent pieces make a stronger, more memorable case than many mixed ones.",
          },
        },
        {
          html: `<h3>The selection criteria</h3><p>How do you decide what stays? Judge each project against your <em>goal</em>, not your attachment to it:</p><ul><li><strong>Relevance:</strong> does it point at the work you want more of? A brilliant project in a field you're leaving may not belong</li><li><strong>Results:</strong> can you show an outcome — a number, a launch, a before/after, a happy client?</li><li><strong>Range vs. redundancy:</strong> your set should show breadth without repeating the same story five times</li><li><strong>Pride:</strong> would you happily talk about it in an interview? Hesitation is a signal</li></ul><p>AI helps by rating each project against your stated goal objectively — it has no emotional attachment to the project you spent three months on but that no longer fits.</p><div class="discovery"><p>💡 <strong>Curate toward the future, not the past</strong></p><p>Feature the work you want to do <em>more</em> of, even if you have more of something else. Your portfolio is a magnet — it attracts whatever it shows. Fill it with the past you want repeated.</p></div>`,
          question: {
            text: "You have lots of projects in a field you're trying to leave. What should you do?",
            options: [
              "Include them all — more work looks more experienced",
              "Feature the work you want MORE of; your portfolio attracts whatever it shows",
              "Include only the oldest projects to show longevity",
            ],
            correctIndex: 1,
            explanation:
              "A portfolio is a magnet for its own contents. Curate toward the future you want, not the past you're leaving behind.",
          },
        },
        {
          html: `<h3>Fixing the gaps</h3><p>Curation sometimes reveals a hole — and that's useful to find <em>before</em> a client does:</p><ul><li><strong>Missing proof of a key skill?</strong> A small self-initiated or concept project can fill it honestly (labeled as such)</li><li><strong>No results to show?</strong> Reframe around process, problem-solving, or craft — but never invent numbers</li><li><strong>Everything looks the same?</strong> Swap one piece for something that shows a different strength</li></ul><p>Ask AI: "Given my goal, what's missing from this selection?" — a second set of eyes catches gaps your familiarity hides. Once your set is locked, the next lesson creates the visual assets — thumbnails, mockups, cover images — that make each piece look its best.</p>`,
          question: {
            text: "Curation reveals you have no proof of a key skill clients want. What's the honest fix?",
            options: [
              "Invent a client project that demonstrates it",
              "Create a small self-initiated or concept project, clearly labeled as such",
              "Ignore the gap and hope no one asks",
            ],
            correctIndex: 1,
            explanation:
              "A clearly-labeled concept or self-initiated project fills a gap honestly. Inventing a fake client project is the one move that can destroy your credibility instantly.",
          },
        },
      ],
    },
    {
      title: "Creating Visual Assets",
      summary: "Generate and polish the images your portfolio needs — mockups, thumbnails, and covers — with AI",
      content: `<p>Great work shown poorly looks like average work. This lesson uses AI to create the visual assets that frame your projects — device mockups, clean thumbnails, cover images — so each piece looks as good as it actually is.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Canva",
        url: "https://canva.com",
        prompt:
          "In Canva, create a consistent set of project thumbnails for my portfolio. For each project: (1) place a clean screenshot or photo of the work, (2) put it in a device mockup if it's digital (phone/laptop frame), (3) apply my brand background color and add the project title in my heading font. Make all thumbnails the SAME size, framing, and style so they line up as a uniform grid. Use Magic Media to generate any missing background textures with this prompt: 'subtle abstract background in [my brand colors described in words], minimal, no text, no faces'.",
        note: "Uniform thumbnails are the single biggest 'instant professional' upgrade — a tidy grid signals care before anyone clicks a single project.",
      },
      steps: [
        {
          html: `<h3>Presentation is part of the work</h3><p>A visitor's judgment of your project starts with its thumbnail. Raw assets undersell you:</p><ul><li><strong>A bare screenshot</strong> looks unfinished; the same screenshot in a laptop mockup looks like a shipped product</li><li><strong>Inconsistent thumbnails</strong> (different sizes, crops, styles) make a portfolio feel messy even if each project is great</li><li><strong>A uniform grid</strong> of matching covers reads as "this person is organized and cares about detail" — before a click</li></ul><p>The goal isn't to fake quality — it's to remove the visual noise that hides the quality you already have.</p>`,
          question: {
            text: "Why put a screenshot inside a device mockup instead of showing it raw?",
            options: [
              "Raw screenshots are illegal to display",
              "A mockup frames the work as a shipped product and removes visual noise that undersells it",
              "Mockups make images load faster",
            ],
            correctIndex: 1,
            explanation:
              "Presentation is part of the work. A mockup reframes a bare screenshot as a real, finished product — same content, far stronger impression.",
          },
        },
        {
          html: `<h3>Consistency is the multiplier</h3><p>The single highest-impact rule for portfolio visuals: <strong>make everything match.</strong></p><ul><li><strong>Same dimensions</strong> for every thumbnail, so the grid lines up perfectly</li><li><strong>Same framing and style</strong> — if one project sits in a laptop mockup, they all do; if one has a colored background, they all do</li><li><strong>Same brand palette and fonts</strong> from your style guide applied across every cover</li></ul><p>AI tools like Canva's Magic Media and background tools let you generate matching textures and backdrops in your exact brand colors, then reuse them across all thumbnails.</p><div class="discovery"><p>💡 <strong>Edit the real, generate the frame</strong></p><p>The <em>work</em> shown must be real — actual screenshots, real photos of what you made. Use AI to generate the <em>frame</em> around it: backgrounds, textures, mockup scenes. Never generate a fake screenshot of work you didn't do.</p></div>`,
          question: {
            text: "What's the highest-impact rule for portfolio thumbnails?",
            options: [
              "Make each one as unique and eye-catching as possible",
              "Make everything match — same size, framing, style, and brand colors across all thumbnails",
              "Use the most colorful background available",
            ],
            correctIndex: 1,
            explanation:
              "Consistency is the multiplier. A uniform grid signals organization and care; a set of mismatched thumbnails looks messy no matter how good each project is.",
          },
        },
        {
          html: `<h3>Polish without faking</h3><p>AI editing tools handle the cleanup that makes assets look professional:</p><ul><li><strong>Background removal</strong> to drop a product or subject onto your brand color</li><li><strong>Upscaling</strong> to sharpen an old, low-resolution screenshot or photo</li><li><strong>Object/blemish removal</strong> to clean distractions out of a photo of physical work</li><li><strong>Consistent color grading</strong> so all your imagery shares one look</li></ul><p>Every one of these enhances something real. The rule from the last lesson holds: edit what exists, generate only the framing around it. With your assets ready, the next lesson uses AI to build the actual homepage and structure.</p>`,
          question: {
            text: "Which use of AI on portfolio assets crosses the line?",
            options: [
              "Upscaling a low-resolution screenshot of real work",
              "Generating a fake screenshot of an app you didn't actually build",
              "Removing a distracting object from a photo of your physical work",
            ],
            correctIndex: 1,
            explanation:
              "Enhancing real assets — upscaling, cleanup, color grading — is fair game. Generating fake proof of work you didn't do is the line you never cross.",
          },
        },
      ],
    },
    {
      title: "The AI Build: Homepage & Structure",
      summary: "Build the actual portfolio site with AI — homepage, navigation, and structure, no coding required",
      content: `<p>You have a plan, an identity, curated work, and polished assets. Now you build the real thing. AI-powered site builders turn your structure into a live homepage without code — this lesson shows you how to direct them.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me plan my portfolio homepage before I build it. I'm a [role], targeting [audience], and I want them to [primary action — hire me / view my work / contact me]. Write the homepage as a top-to-bottom section list: for each section give (1) its name, (2) exactly what content goes in it, (3) why it's in that position. Include a hero, a curated work grid, and a clear call to action. Then write me the exact hero headline and subheadline (say who I am, what I do, and who I help in one clear line — no vague slogans), and suggest what the single primary button should say.",
        note: "Take this section list into any AI website builder (Framer, Wix ADI, Durable). You're now directing the builder with a clear brief instead of dragging blocks around aimlessly.",
      },
      steps: [
        {
          html: `<h3>Structure before styling</h3><p>The mistake with website builders is jumping straight to colors and fonts. Decide the <em>structure</em> first — same as the text-wireframe habit from good design:</p><ul><li><strong>The homepage is an ordered argument:</strong> hero (who you are) → featured work → what you do → proof/testimonials → call to action</li><li><strong>Every section earns its place</strong> and its position — most important, highest on the page</li><li><strong>AI drafts the structure</strong> from your role and goal, then you refine it — far faster than staring at a blank builder</li></ul>`,
          question: {
            text: "What should you decide before touching colors and fonts in a website builder?",
            options: [
              "The domain name and hosting plan",
              "The structure — which sections exist and in what order",
              "The exact pixel spacing of every element",
            ],
            correctIndex: 1,
            explanation:
              "Structure before styling. The homepage is an ordered argument; decide the sections and their order first, then style them.",
          },
        },
        {
          html: `<h3>The hero: your five-second pitch</h3><p>The hero is the top of the page — the first thing every visitor sees, and often the only thing they read. It must answer three questions instantly:</p><ul><li><strong>Who are you?</strong> Name and role</li><li><strong>What do you do?</strong> The specific value you provide</li><li><strong>Who do you help?</strong> Your target audience</li></ul><p>"John Carter — UX designer helping early-stage startups turn complex products into simple, usable apps" beats "Welcome to my creative world ✨" every time. Vague slogans waste your most valuable space.</p><div class="discovery"><p>💡 <strong>The clarity-over-clever rule</strong></p><p>A confused visitor leaves. Clarity always beats cleverness in the hero — say plainly who you help and how. You can show personality everywhere else; the hero's job is to be instantly understood.</p></div>`,
          question: {
            text: "What must a portfolio hero section answer instantly?",
            options: [
              "Your favorite color, hobby, and star sign",
              "Who you are, what you do, and who you help",
              "Your full career history in chronological order",
            ],
            correctIndex: 1,
            explanation:
              "The hero is your five-second pitch. Who/what/who-you-help, stated plainly — clarity beats a clever slogan every time.",
          },
        },
        {
          html: `<h3>Directing the AI builder</h3><p>AI website builders (Framer AI, Wix ADI, Durable and others) generate a full site from a description — but the quality of the site depends on the quality of your brief:</p><ul><li><strong>Feed it your structure and identity:</strong> your section list, your palette in words, your fonts, your hero copy — not "make me a portfolio"</li><li><strong>Generate, then curate:</strong> treat the first output as a draft — keep the layout that works, regenerate or edit what doesn't</li><li><strong>One primary action per page:</strong> the whole homepage should funnel toward a single button (view work, or contact) — competing calls to action split attention</li><li><strong>Keep navigation minimal:</strong> Work, About, Contact is enough — every extra menu item is a chance to get lost</li></ul><p>You now have a live homepage. The next lesson goes deep on the pages that actually win clients — case study pages for your featured projects.</p>`,
          question: {
            text: "How do you get a good result from an AI website builder?",
            options: [
              "Type 'make me a portfolio' and accept the first output",
              "Feed it a clear brief — your structure, palette, fonts, and hero copy — then curate the draft it produces",
              "Regenerate endlessly until one looks perfect by luck",
            ],
            correctIndex: 1,
            explanation:
              "AI builders are only as good as your brief. Direct them with your structure and identity, then treat the output as a draft to refine — not a finished site.",
          },
        },
      ],
    },
    {
      title: "The Deep Dive: Case Study Pages",
      summary: "Turn projects into case studies that sell — the problem-process-result story that wins clients",
      content: `<p>A thumbnail gets the click; the case study gets the client. This is where you prove <em>how</em> you think, not just what you made. This lesson uses AI to structure and write case studies that turn viewers into believers — without hours of editing.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me write a case study for one portfolio project. Here are my rough notes: [project name; the problem/goal; what you did — steps, decisions, tools; the result — numbers, outcomes, feedback]. Structure it as: (1) a one-line summary, (2) The Challenge, (3) My Approach (the key decisions and why), (4) The Result (concrete outcomes), (5) one line on what I'd do next or learned. Keep it scannable — short paragraphs, clear headings. Write in a confident, professional first-person voice. Use ONLY the facts in my notes; do not invent any results or numbers.",
        note: "Paste your real notes, however messy. AI's job is to structure and tighten YOUR facts — never to invent them. You supply the truth; it supplies the shape.",
      },
      steps: [
        {
          html: `<h3>Problem → Process → Result</h3><p>Every strong case study follows the same arc, because it's how people evaluate whether you can solve <em>their</em> problem:</p><ul><li><strong>The Challenge:</strong> what problem existed, what was at stake — sets the stakes so the result matters</li><li><strong>The Approach:</strong> what you did and, crucially, <em>why</em> — the decisions reveal how you think</li><li><strong>The Result:</strong> the outcome, ideally measurable — the payoff that proves it worked</li></ul><p>Clients don't hire the prettiest project; they hire the person who clearly solves problems. The process section is where you prove you're that person.</p>`,
          question: {
            text: "Which part of a case study proves how you think — the part clients care about most?",
            options: [
              "The Challenge — describing the problem",
              "The Approach — the decisions you made and why",
              "The list of tools you used",
            ],
            correctIndex: 1,
            explanation:
              "The approach section shows your reasoning. Clients hire problem-solvers — the 'why' behind your decisions is what convinces them you can solve theirs.",
          },
        },
        {
          html: `<h3>Show the thinking, not just the pixels</h3><p>Beginners show only the polished final result. Professionals show the journey:</p><ul><li><strong>Include the messy middle:</strong> a rough sketch, an early version, a rejected direction — proof of real process, not just a pretty ending</li><li><strong>Explain key decisions:</strong> "I chose X over Y because…" turns a gallery into a demonstration of judgment</li><li><strong>Quantify where you can:</strong> "cut load time 40%", "grew signups 2x", "reduced support tickets" — numbers are the most persuasive proof</li></ul><div class="discovery"><p>💡 <strong>No numbers? Show the transformation.</strong></p><p>Not every project has metrics. When yours doesn't, show a clear before/after, describe the problem you removed, or quote real feedback. The transformation is the story — data is one way to tell it, not the only way.</p></div>`,
          question: {
            text: "Why include rough sketches or rejected directions in a case study?",
            options: [
              "To make the page longer",
              "They prove real process and judgment — showing how you got there, not just the polished ending",
              "Clients prefer unfinished work",
            ],
            correctIndex: 1,
            explanation:
              "The messy middle is evidence of thinking. Showing decisions and iterations turns a gallery into a demonstration of how you solve problems.",
          },
        },
        {
          html: `<h3>AI structures; you supply the truth</h3><p>Case studies are where people burn hours editing — and where AI saves the most time, <em>if</em> used correctly:</p><ul><li><strong>Give AI your raw notes</strong> — however messy — and ask it to structure them into problem/process/result with clear headings</li><li><strong>Let it tighten your writing:</strong> fix flow, cut fluff, make it scannable — the editing you'd struggle to do on your own words</li><li><strong>Guard the facts:</strong> instruct it explicitly to use only your facts and invent no results — then read every line and confirm it's true</li></ul><p>The division of labor: <strong>you own every fact; AI owns the shape and polish.</strong> Do three or four of these for your featured projects. Next, you'll write the about and contact pages that turn interested visitors into actual clients.</p>`,
          question: {
            text: "What's the correct division of labor when writing case studies with AI?",
            options: [
              "AI invents impressive results; you approve them",
              "You own every fact; AI structures and polishes the writing",
              "AI writes everything from scratch with no input from you",
            ],
            correctIndex: 1,
            explanation:
              "You supply the truth — real problems, decisions, and results. AI shapes and tightens it. Never let AI invent facts; always verify every line.",
          },
        },
      ],
    },
    {
      title: "About & Contact: Turning Visitors Into Clients",
      summary: "Write an about page that builds trust and a contact section that makes hiring you effortless",
      content: `<p>Someone liked your work and scrolled to learn about you — this is the moment interest becomes action, or dies. A vague about page and a hidden contact form lose clients you already earned. This lesson uses AI to write both so they convert.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me write my portfolio About section. Here's the raw material: my role and experience [details], who I help and how [details], what makes my approach different [details], and a bit of personality [an interest, value, or story]. Write a first-person About section that: opens with what I do and who I help (not 'I was born in…'), builds credibility with real experience, shows a touch of genuine personality, and ends by inviting the reader to get in touch. Keep it warm but professional, scannable, and around 120-180 words. Then suggest a clear, friendly call-to-action line for my contact section.",
        note: "The best about pages are about the reader as much as you — they answer 'can this person help ME?'. Keep the personality real; that's what makes you memorable and referable.",
      },
      steps: [
        {
          html: `<h3>The about page is about the reader</h3><p>The classic mistake: an about page that's a life story. Visitors don't care where you were born — they care whether you can help <em>them</em>:</p><ul><li><strong>Lead with value:</strong> what you do and who you help, not your childhood</li><li><strong>Build credibility:</strong> real experience, notable clients or results, relevant background</li><li><strong>Then add personality:</strong> a genuine interest or value that makes you human and memorable — people refer people they connect with</li></ul><p>Structure: what you do for them → why you're credible → who you are as a person → an invitation to connect.</p>`,
          question: {
            text: "How should a portfolio About page open?",
            options: [
              "With where you were born and your full life story",
              "With what you do and who you help — leading with value to the reader",
              "With a list of every job you've ever had",
            ],
            correctIndex: 1,
            explanation:
              "Visitors are asking 'can this person help me?'. Lead with value and who you help; credibility and personality come next, life story rarely.",
          },
        },
        {
          html: `<h3>Personality is the referral engine</h3><p>Skills get you considered; personality gets you remembered and referred:</p><ul><li><strong>A genuine detail sticks:</strong> a value you work by, an obsession, a short origin of why you do this — something true and specific</li><li><strong>It differentiates:</strong> ten designers have similar skills; only one has your exact voice and story</li><li><strong>It makes you referable:</strong> people recommend those they feel they <em>know</em>, not a list of credentials</li></ul><div class="discovery"><p>💡 <strong>Specific beats generic, always</strong></p><p>"I'm passionate about great design" is invisible — everyone says it. "I've redrawn the same icon 40 times because the 39th wasn't honest enough" is unforgettable. AI can help you find and phrase your specific — but the truth has to be yours.</p></div>`,
          question: {
            text: "Why does genuine personality matter on an about page?",
            options: [
              "It pads the word count",
              "Skills get you considered; personality gets you remembered and referred",
              "Clients only hire people with unusual hobbies",
            ],
            correctIndex: 1,
            explanation:
              "People refer people they feel they know. A specific, true detail differentiates you from equally-skilled competitors and makes you memorable.",
          },
        },
        {
          html: `<h3>Make hiring you effortless</h3><p>You've earned the visitor's interest — now don't lose it at the finish line:</p><ul><li><strong>Make contact obvious:</strong> a clear button and a visible email — never make someone hunt for how to reach you</li><li><strong>Reduce friction:</strong> a short form (name, email, message) beats a ten-field interrogation; every extra field loses people</li><li><strong>Tell them what happens next:</strong> "I'll reply within 2 days" removes the fear of shouting into the void</li><li><strong>One clear call to action:</strong> "Let's work together" or "Get in touch" — friendly, direct, and repeated at the end of key pages</li></ul><p>Your portfolio is now complete end to end. The final lesson makes sure it works everywhere — mobile optimization — and takes you through launch.</p>`,
          question: {
            text: "What makes a contact section convert interested visitors?",
            options: [
              "A long detailed form that qualifies serious clients only",
              "Obvious contact info, low friction, and telling them what happens next",
              "Hiding the email so only determined people find it",
            ],
            correctIndex: 1,
            explanation:
              "Every bit of friction loses people you already won. Make contact obvious, keep the form short, and set expectations for a reply.",
          },
        },
      ],
    },
    {
      title: "Mobile Optimization & Launch",
      summary: "Make it flawless on phones and take it live — the final checks that separate a draft from a real portfolio",
      content: `<p>Most visitors will see your portfolio on a phone — and a portfolio that breaks on mobile quietly costs you clients. This trophy lesson covers mobile optimization and a confident launch, turning your build into a live portfolio you're proud to share.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my pre-launch QA reviewer for my portfolio site at [URL, or describe it]. Give me a complete launch checklist covering: (1) MOBILE — what to test on a phone (readability, tap targets, images, navigation, forms), (2) CONTENT — typo/link/consistency checks, (3) FUNCTION — contact form works, all project links open, loads fast, (4) FINDABILITY — page title, description, and how to share it well on LinkedIn/social with a strong one-line intro. Format it as a checkbox list I can work through, ordered by priority. Then write me a confident LinkedIn post announcing my new portfolio.",
        note: "Work the checklist top to bottom, then ship. A portfolio that exists and is shared beats a perfect one that's still 'almost ready' six months later.",
      },
      steps: [
        {
          html: `<h3>Mobile is the main screen, not the afterthought</h3><p>People check portfolios on their phone — on the couch, between meetings, right after you send the link. If it's broken on mobile, that's the impression that sticks:</p><ul><li><strong>Test on a real phone,</strong> not just the builder's preview — tap every button, scroll every page</li><li><strong>Readability:</strong> text large enough to read without zooming, enough contrast, no lines running off-screen</li><li><strong>Tap targets:</strong> buttons and links big enough for a thumb, with space between them</li><li><strong>Images and grids:</strong> thumbnails should stack cleanly, not squish or overflow</li></ul><div class="discovery"><p>💡 <strong>The one-thumb test</strong></p><p>Navigate your entire portfolio using only one thumb, like a real visitor. If anything is hard to tap, read, or reach, fix it. Most people will experience your work exactly this way.</p></div>`,
          question: {
            text: "Why is mobile optimization critical, not optional?",
            options: [
              "Search engines require a mobile version to index a site",
              "Most visitors view portfolios on their phones — a broken mobile experience is the impression that sticks",
              "Mobile sites are cheaper to host",
            ],
            correctIndex: 1,
            explanation:
              "The phone is the main screen for most visitors. A portfolio that breaks on mobile quietly loses the clients who saw it there — which is most of them.",
          },
        },
        {
          html: `<h3>The pre-launch checklist</h3><p>Before you share it, run a systematic pass — small errors undermine the professionalism everything else worked to build:</p><ul><li><strong>Content:</strong> zero typos, every link works, names and dates consistent (AI is excellent at catching these when you paste your text)</li><li><strong>Function:</strong> submit your own contact form and confirm it arrives; open every project link; check it loads fast</li><li><strong>Findability:</strong> a clear page title and description so it looks right when shared or searched</li><li><strong>Fresh eyes:</strong> have one person (or a fresh AI review) look at it cold — they'll spot what your familiarity hides</li></ul><p>A single broken link or dead contact form can cost the exact client the portfolio was built to win. Ten minutes of checking protects all the work before it.</p>`,
          question: {
            text: "Which pre-launch check most directly protects you from losing a client?",
            options: [
              "Adding more projects to look experienced",
              "Testing that your contact form actually works and every link opens",
              "Choosing a trendier font at the last minute",
            ],
            correctIndex: 1,
            explanation:
              "A dead contact form or broken link can cost the exact client you built the portfolio for. Verifying function is a ten-minute check that protects everything.",
          },
        },
        {
          html: `<h3>Launch — and keep it alive</h3><p>The last barrier is the urge to keep polishing forever. Beat it:</p><ul><li><strong>Ship when it's solid, not perfect:</strong> a live portfolio that's 90% beats a perfect one that never launches — you can always improve it live</li><li><strong>Announce it:</strong> a confident post on LinkedIn/social with a strong one-line intro turns your launch into opportunities; put the link in every bio and email signature</li><li><strong>Treat it as living:</strong> add new work, retire weaker pieces, refresh it every few months — a portfolio is a garden, not a monument</li></ul><p>You started this course frozen at a blank page. You finish with a live, professional portfolio — planned, styled, curated, built, and launched, all with AI handling the hard parts while your real work took center stage. Now share it, and let it start working for you. The best next step is telling one person it's live today.</p>`,
          question: {
            text: "What's the right mindset for launching your portfolio?",
            options: [
              "Wait until it's absolutely perfect before showing anyone",
              "Ship when it's solid, announce it confidently, and keep improving it live",
              "Launch it quietly and never mention it to avoid seeming boastful",
            ],
            correctIndex: 1,
            explanation:
              "A shared, solid portfolio beats a perfect unlaunched one. Ship it, announce it, put the link everywhere, and treat it as a living thing you refresh over time.",
          },
        },
      ],
    },
  ],
};
