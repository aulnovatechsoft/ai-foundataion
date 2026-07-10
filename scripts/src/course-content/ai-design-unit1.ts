import type { UnitSeed } from "./types";

export const AI_DESIGN_UNIT_1: UnitSeed = {
  title: "AI in Design",
  lessons: [
    {
      title: "What AI Can Do for Your Designs",
      summary: "Map the AI design landscape: which tool category solves which problem, and how to choose safely",
      content: `<p>You have an idea — an app, a shop, a brand — that you can picture but can't make look the way it looks in your head. AI design tools close that gap. This lesson maps the landscape so you always reach for the right tool.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm building [describe your project — an app, a shop, a personal brand] and I need visuals but I'm not a designer. Here are the design tasks on my list: [list them — e.g. a logo, a website hero image, product photos cleaned up, social posts, app screens]. For each task: (1) tell me which tool category it belongs to — image GENERATION (creating visuals from text), image EDITING (transforming existing images), or LAYOUT & UI (building screens and page structures), (2) name 2-3 popular tools in that category, (3) flag which tasks are for commercial/public use so I know to check the tool's licensing page before publishing.",
        note: "This gives you a personal tool map for your actual project — the category habit alone saves hours of trying to make the wrong tool do the wrong job.",
      },
      steps: [
        {
          html: `<h3>Three categories, three different jobs</h3><p>Search "AI design tools" and you'll drown in names. The ones worth your time fall into three categories:</p><ul><li><strong>Image generation</strong> — creating visuals from text: logos, hero images, illustrations (Midjourney, DALL·E, Ideogram)</li><li><strong>Image editing</strong> — transforming existing images: remove backgrounds, extend canvases, erase objects, upscale (Photoshop AI, Canva editing tools, remove.bg)</li><li><strong>Layout & UI</strong> — building screens and page structures: social templates, landing pages, app mockups (Canva, Figma AI, Framer)</li></ul><p>Each solves a different problem. A tool that paints stunning images from scratch is useless for removing a background; a layout tool won't paint a hero image. <strong>Matching task to category is the first skill</strong> — it saves you from wasting hours in the wrong app.</p>`,
          question: {
            text: "You have a product photo with a messy background that needs to be clean white. Which tool category is this job for?",
            options: [
              "Image generation — describe the product and generate a new photo",
              "Image editing — transform the existing photo you already have",
              "Layout & UI — arrange the photo on a page",
            ],
            correctIndex: 1,
            explanation:
              "You have the image; it needs transforming — that's editing. Generating a new 'photo' of your product would produce a fake product shot, and layout tools structure pages, not pixels.",
          },
        },
        {
          html: `<h3>The question that matters more than quality</h3><p>Once you know the category, picking a specific tool comes down to one question: <strong>what are you going to do with the output?</strong></p><ul><li><strong>Private exploration</strong> — testing ideas, internal mockups: almost any tool works, use whatever's fast and free</li><li><strong>Commercial publishing</strong> — client work, ads, product packaging, your website: <em>licensing terms now outrank visual quality</em></li></ul><p>A gorgeous logo generated under unclear licensing can expose you or your client to legal risk — no matter how good it looks.</p><div class="discovery"><p>💡 <strong>The footer rule</strong></p><p>Every major AI tool has a "Terms of Use" or "Licensing" page — usually linked in the website footer. Before any commercial use, find the words "commercial use" and confirm they're permitted <em>on your plan</em>. Free tiers often have different rights than paid ones.</p></div>`,
          question: {
            text: "You're designing a logo a client will use on packaging. What's the MOST important factor in choosing the generation tool?",
            options: [
              "The tool's licensing terms — a commercial logo must be legally usable without restrictions",
              "The tool's output quality — a client-facing logo must look impressive",
              "The tool's speed and free tier — client work needs fast, cheap iteration",
            ],
            correctIndex: 0,
            explanation:
              "Quality matters but it's secondary. A logo with unclear licensing exposes the client to legal risk regardless of how beautiful it is — check the licensing page before generating commercial work.",
          },
        },
        {
          html: `<h3>The idea-to-visual sequence</h3><p>Put it together and you get the repeatable path from idea to usable visual:</p><ul><li><strong>1. Define the task:</strong> what exactly do you need — a logo? A banner? A screen mockup?</li><li><strong>2. Pick the category:</strong> generating, editing, or layout?</li><li><strong>3. Check the intent:</strong> private test or commercial use? Verify licensing if commercial</li><li><strong>4. Then generate</strong> — with a structured prompt (next lesson's whole topic)</li></ul><p>That order is what separates a designer using AI from someone typing prompts and hoping. Skipping straight to step 4 is why most people's AI visuals look random — the thinking happens before the prompt box.</p>`,
          question: {
            text: "What separates a designer using AI from someone 'just typing prompts'?",
            options: [
              "Designers have more expensive subscriptions",
              "The sequence: define the task, pick the right category, check licensing intent — then generate",
              "Designers only use professional tools like Photoshop",
            ],
            correctIndex: 1,
            explanation:
              "The tool only executes; the thinking is yours. Task → category → intent → generate turns AI from a slot machine into a design instrument.",
          },
        },
      ],
    },
    {
      title: "Prompting for Design",
      summary: "Master the four-part prompt and the refinement moves that fix weak outputs without starting over",
      content: `<p>The tool only does what your prompt tells it. This lesson installs the four-part prompt structure that produces on-brief visuals — and the refinement system for when the output isn't what you pictured.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me build a four-part design prompt. My project: [describe — e.g. a productivity app for adults 40-60 called FocusShift]. I need: [the visual — e.g. a logo / hero image / banner]. Walk me through it: (1) VISUAL TYPE — help me name exactly what I'm making, (2) AUDIENCE — who it's for and how that changes the style, (3) STYLE DIRECTION — suggest 3 style options that fit (minimal, bold, editorial…), (4) MOOD — suggest 3 tone words. Then assemble the full prompt, add a constraints line of what to AVOID (e.g. no text overlays, no faces, no clutter), and show me the Midjourney version using the --no parameter. Finally, show me a deliberately vague one-line version of the same request so I can compare what each produces.",
        note: "Run both prompts in any image tool and compare — the vague-vs-structured gap is the most convincing design lesson you'll ever see.",
      },
      steps: [
        {
          html: `<h3>The four-part prompt</h3><p>"A logo for my productivity app" produces something generic — the tool fills every unspecified gap with defaults. Strong design prompts specify four components:</p><ul><li><strong>Visual type:</strong> what are you making? Hero image, logo, screen mockup, banner</li><li><strong>Audience:</strong> who is it for? A logo for ages 40-60 looks different from one for teenagers</li><li><strong>Style direction:</strong> what does it look like? Minimal, bold, editorial, hand-drawn</li><li><strong>Mood/tone:</strong> how should it feel? Calm, energetic, premium, playful</li></ul><p>Four specific inputs give the tool enough direction to produce something on-brief instead of something you've seen a hundred times.</p>`,
          question: {
            text: "Why does 'a logo for my productivity app' produce generic results?",
            options: [
              "Free AI tools are limited to generic output",
              "Every unspecified component — audience, style, mood — gets filled with the tool's defaults",
              "Logos always require a human designer",
            ],
            correctIndex: 1,
            explanation:
              "AI fills gaps with averages. The four-part structure — visual type, audience, style, mood — replaces defaults with your direction, which is the entire difference between generic and on-brief.",
          },
        },
        {
          html: `<h3>Diagnose, don't regenerate</h3><p>The output came back… fine. But not right. Colors off, mood wrong, looks like everything else. <strong>Don't hit regenerate with the same prompt</strong> — weak outputs have causes:</p><ul><li><strong>Find the weak component:</strong> which of the four parts was missing or vague? "The design should feel adventurous" has mood — but no audience, no style, so AI defaulted the rest</li><li><strong>Replace only that part:</strong> add "for independent adventurers aged 25-40, in a bold flat-graphic travel-poster style" and regenerate</li><li><strong>One variable at a time:</strong> refinement is editing, not rewriting — everything else stays exactly as it was, so you know what caused the improvement</li></ul><div class="discovery"><p>💡 <strong>The same discipline as A/B testing</strong></p><p>Change three things at once and you learn nothing. Change one, compare, keep or revert — you're not just fixing this image, you're learning how the tool responds to each dial.</p></div>`,
          question: {
            text: "The output is generic. What's the professional fix?",
            options: [
              "Hit regenerate repeatedly until luck delivers",
              "Identify which of the four prompt components was vague, replace only that one, and regenerate",
              "Switch to a different AI tool immediately",
            ],
            correctIndex: 1,
            explanation:
              "Weak outputs aren't random — a component was missing and the tool defaulted. Targeted, one-variable refinement fixes the image AND teaches you the tool's dials.",
          },
        },
        {
          html: `<h3>Constraints: cutting the defaults</h3><p>Sometimes the problem isn't what's missing — it's what keeps appearing. Faces you didn't ask for, text overlays, clutter. <strong>Constraints don't add to the output; they cut from it:</strong></p><ul><li><strong>In natural-language tools (Canva, DALL·E):</strong> write it plainly — "Avoid: text overlays, faces, busy backgrounds. Wide landscape only"</li><li><strong>In Midjourney:</strong> the <code>--no</code> parameter at the prompt's end — <code>--no text, faces, clutter</code>. Different syntax, same logic</li><li><strong>Constraints redirect, not restrict:</strong> removing a category of defaults pushes the tool's creativity toward what the brief actually needs</li></ul><p>Your complete prompt formula: <em>four parts + constraints</em>. That's the structure behind nearly every professional AI visual you've admired.</p>`,
          question: {
            text: "What do constraints like '--no text, faces' actually do to the output?",
            options: [
              "They reduce the image quality to render faster",
              "They cut whole categories of default elements, redirecting the tool toward what the brief needs",
              "They limit the tool to black and white output",
            ],
            correctIndex: 1,
            explanation:
              "Constraints work like a filter: they narrow what the tool pulls from, keeping output inside your defined visual range. Cutting defaults is often more powerful than adding description.",
          },
        },
      ],
    },
    {
      title: "Moodboards with AI",
      summary: "Build a moodboard that locks your visual direction — before you waste hours generating in the dark",
      content: `<p>Professionals never start final assets first — they start with a moodboard: a one-page visual contract of colors, styles, and feelings. AI turns this from a day of Pinterest digging into a 30-minute session, and it becomes the reference that keeps every future asset consistent.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me build a moodboard brief for [your project — app, shop, or brand]. Step 1 — INTERVIEW ME: ask 5 questions about my audience, the feeling I want, and 2-3 brands whose look I admire. Step 2 — after my answers, produce: (1) three distinct visual directions, each with a name, a one-line vibe description, 5 mood keywords, a color palette described in plain words (e.g. 'warm cream, deep forest green, muted terracotta'), and typography personality (e.g. 'rounded and friendly' vs 'sharp and editorial'), (2) for my chosen direction: 6 ready-to-run image generation prompts (four-part structure + constraints) to create the moodboard tiles — textures, scenes, color studies, one hero concept. I'll generate those in Canva or Midjourney and assemble the board.",
        note: "Save the finished board where you'll see it. From now on, every design decision — and every prompt — gets checked against it: 'does this match the moodboard?'",
      },
      steps: [
        {
          html: `<h3>Why moodboards come first</h3><p>Skipping straight to final assets is the expensive mistake: ten generated logos, all different directions, none feeling right — because <em>you never decided what "right" looks like</em>. The moodboard is that decision, made visible:</p><ul><li><strong>What it is:</strong> one page of images, colors, textures, and words that define the visual direction</li><li><strong>What it does:</strong> becomes the reference every asset gets judged against — logo, website, social posts all pulling from the same board means everything looks like one brand</li><li><strong>Why AI changed it:</strong> what took a day of collecting references now takes 30 minutes of directed generation</li></ul>`,
          question: {
            text: "Why do professionals build a moodboard before generating any final assets?",
            options: [
              "Moodboards are required by AI tool terms of service",
              "It locks the visual direction first, so every asset is judged against one reference instead of drifting randomly",
              "Moodboards are only for large agency teams",
            ],
            correctIndex: 1,
            explanation:
              "Without a decided direction, every generation is a coin flip and nothing matches. The moodboard is the visual contract that makes all future assets consistent.",
          },
        },
        {
          html: `<h3>The three-directions method</h3><p>Don't build one moodboard — build three cheap ones and pick:</p><ul><li><strong>Ask AI for three named directions:</strong> e.g. for a hiking app — "Alpine Minimal" (clean, cold palette, thin lines), "Trail Warmth" (earthy, textured, golden hour), "Topo Bold" (graphic, map-inspired, high contrast)</li><li><strong>Generate 4-6 tiles per direction:</strong> a texture, a scene, a color study, a concept image — 15 minutes each with your four-part prompts</li><li><strong>Compare side by side and commit:</strong> the wrong directions teach you as much as the right one — "not this" is design information</li></ul><div class="discovery"><p>💡 <strong>Describe colors in words, not codes</strong></p><p>In moodboard prompts, "muted terracotta and warm cream" beats pasting color codes — generation tools respond to color <em>language</em>, and the words double as your palette's description for any human collaborator.</p></div>`,
          question: {
            text: "Why generate three named directions instead of one moodboard?",
            options: [
              "Three boards triple the billable hours",
              "Cheap side-by-side comparison — committing after seeing options beats guessing, and rejected directions are useful information",
              "AI tools require a minimum of three generations",
            ],
            correctIndex: 1,
            explanation:
              "AI made exploration nearly free — so explore before committing. Seeing 'Alpine Minimal' next to 'Trail Warmth' makes the right choice obvious in a way one board never can.",
          },
        },
        {
          html: `<h3>From board to brief: the payoff</h3><p>The moodboard's real power shows in every prompt you write afterward:</p><ul><li><strong>It becomes your style vocabulary:</strong> the board's keywords — "muted earth tones, grainy texture, golden-hour warmth" — get pasted into the style and mood slots of every four-part prompt</li><li><strong>It becomes your review filter:</strong> new asset generated → hold it against the board → matches or regenerates. No more "hmm, I guess it's fine?"</li><li><strong>It becomes your team's alignment tool:</strong> clients and collaborators react to a board in minutes ("more like tile 3, less like tile 5") — feedback you can act on, versus "make it pop"</li></ul><p>Unit 1 complete: you can pick the right tool, prompt it with structure, and lock a visual direction. Unit 2 turns this foundation into real assets — brand identity, edited images, social graphics, UI screens, and a complete design workflow.</p>`,
          question: {
            text: "After the moodboard is done, how does it improve every future prompt?",
            options: [
              "It gets attached as a file to every AI request automatically",
              "Its keywords fill the style and mood slots of your prompts, and every output gets judged against the board",
              "It replaces the need for prompts entirely",
            ],
            correctIndex: 1,
            explanation:
              "The board is a reusable vocabulary and a review filter in one — prompts inherit its language, outputs get held against it, and the whole brand stays coherent.",
          },
        },
      ],
    },
  ],
};
