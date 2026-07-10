import type { UnitSeed } from "./types";

export const AI_DESIGN_UNIT_2: UnitSeed = {
  title: "Design: From Concept to Real Assets",
  lessons: [
    {
      title: "Visual Brand Identity",
      summary: "Turn your moodboard into a working identity: logo concepts, palette, typography, and the brand kit",
      content: `<p>A brand identity is your moodboard made operational: the logo, colors, and type that repeat on everything you make. This lesson builds yours with AI — concepts in volume, decisions with judgment.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build my brand kit from my moodboard direction: [paste your direction's keywords, colors in words, and typography personality — or describe your project and vibe]. Produce: (1) LOGO BRIEF — 5 distinct logo concepts described in words (symbol idea + why it fits), each with a ready-to-run four-part generation prompt including constraints (flat vector, simple shapes, works small, no text in image), (2) PALETTE — 5 colors with plain-word names, each with a role: background, text, primary action, accent, warning, (3) TYPE — 2 font pairing suggestions from free libraries (heading + body) matching my brand personality, (4) USAGE RULES — 5 one-line rules (e.g. 'accent color only for buttons and links, never backgrounds'). Format it as a one-page brand kit I can save.",
        note: "Generate the 5 logo concepts in your image tool, test each at tiny size (would it survive as a favicon?), and drop the winner plus the kit into one document — that's your brand bible.",
      },
      steps: [
        {
          html: `<h3>Logos: volume, then judgment</h3><p>The old way: pay a designer for 3 concepts, pick one, hope. The AI way: generate 20 concepts for nearly nothing — <em>if</em> you know what makes a logo work:</p><ul><li><strong>Simple enough to survive small:</strong> a logo lives as a 16-pixel favicon and an app icon — intricate art dies there. Prompt for "flat, minimal, simple geometric shapes"</li><li><strong>Concept beats decoration:</strong> the best marks encode an idea (an arrow hidden in a delivery brand's name) — ask AI for symbol <em>ideas</em> before generating images</li><li><strong>Generate wordmark-free:</strong> AI mangles text inside images — generate the symbol alone, add typography yourself in Canva or Figma where text is text</li></ul>`,
          question: {
            text: "Why generate logo symbols without text, adding the brand name later in a design tool?",
            options: [
              "Text makes generation slower and more expensive",
              "AI frequently mangles letters inside images — real typography added in an editor stays crisp and editable",
              "Logos are legally required to be text-free",
            ],
            correctIndex: 1,
            explanation:
              "Generated text is the most common AI-visual giveaway — warped letters, fake words. Symbol from AI, typography from a real type library: each tool doing what it's good at.",
          },
        },
        {
          html: `<h3>Palette and typography: roles, not favorites</h3><p>Amateur palettes are five colors someone liked. Working palettes assign <strong>roles</strong>:</p><ul><li><strong>Background</strong> (calm, usually near-white or near-black), <strong>text</strong> (maximum readability), <strong>primary action</strong> (buttons — the color you want clicked), <strong>accent</strong> (highlights, used sparingly), <strong>alert</strong> (errors/warnings)</li><li><strong>The 60-30-10 rhythm:</strong> ~60% background, ~30% supporting, ~10% accent — restraint reads as professional</li><li><strong>Typography personality:</strong> two fonts maximum — a heading font with character, a body font built for reading. Ask AI to suggest pairings that match your moodboard's personality words</li></ul><div class="discovery"><p>💡 <strong>The contrast check</strong></p><p>Before locking colors, ask AI: "Is [text color in words] on [background color in words] readable for body text, including for low-vision users?" Beautiful-but-unreadable is the most common self-taught branding mistake — and the easiest to catch early.</p></div>`,
          question: {
            text: "What makes a color palette 'working' rather than just pretty?",
            options: [
              "Using at least ten colors for variety",
              "Every color has an assigned role — background, text, action, accent — with restraint in how they're used",
              "Only using this year's trending colors",
            ],
            correctIndex: 1,
            explanation:
              "Roles turn colors into a system: the button color always means 'act here', the accent stays rare enough to pop. Five favorites with no roles is how brands end up looking chaotic.",
          },
        },
        {
          html: `<h3>The brand kit: your consistency engine</h3><p>Identity only works through repetition — and repetition needs a reference:</p><ul><li><strong>One page:</strong> final logo (plus a one-color version), palette with roles, font pairing, 5 usage rules, and your moodboard keywords</li><li><strong>It feeds every prompt:</strong> "in our brand style: [keywords], colors: [palette words]" — pasted into every future generation, from social posts to UI screens</li><li><strong>It survives you:</strong> a collaborator, client, or future-you can produce on-brand work from the kit alone — that's the test it's complete</li></ul><p>You now have what most small businesses never build: an actual identity system. The next lessons put it to work on real assets.</p>`,
          question: {
            text: "What's the test that your brand kit is complete?",
            options: [
              "It's over 50 pages long like agency brand books",
              "Someone else could produce on-brand work using only the kit — logo, palette roles, fonts, and rules",
              "It includes every color the AI ever generated",
            ],
            correctIndex: 1,
            explanation:
              "The kit is a consistency engine, not a decoration. If a collaborator (or an AI prompt) can stay on-brand from the kit alone, identity stops depending on your memory.",
          },
        },
      ],
    },
    {
      title: "Editing and Enhancing Images",
      summary: "Backgrounds, object removal, extending, upscaling — the AI editing moves that rescue any image",
      content: `<p>Most real design work isn't generating from scratch — it's fixing what exists: the product photo with a messy background, the image that's too small, the shot that's almost right. AI editing tools turned hours of pixel surgery into clicks.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Canva",
        url: "https://canva.com",
        prompt:
          "Take one real photo you actually need improved — a product shot, a profile photo, anything. In Canva (or Photoshop/your editor), run the full editing circuit: (1) BACKGROUND — remove it, then place the subject on a clean brand-colored background from your kit, (2) CLEANUP — use the eraser/remove tool on one distracting object or blemish, (3) EXTEND — use expand/outpaint to grow the image for a wider format (e.g. from square to banner), (4) UPSCALE — enlarge the result and compare sharpness at full zoom. Save before/after versions of each step.",
        note: "One photo through the full circuit teaches you 80% of AI editing. The before/after pairs are also perfect 'look what I can do now' material to show a friend or client.",
      },
      steps: [
        {
          html: `<h3>The core four editing moves</h3><p>Nearly every image rescue uses one of four operations:</p><ul><li><strong>Background removal:</strong> one click isolates the subject — the gateway to clean product shots, profile photos, and composites</li><li><strong>Object removal (inpainting):</strong> brush over the photobomber, the trash can, the logo — AI fills the gap with plausible surroundings</li><li><strong>Extending (outpainting):</strong> the image is too square for your banner? AI continues the scene beyond the original edges</li><li><strong>Upscaling:</strong> AI enlarges small images while <em>adding</em> plausible detail — the difference between blurry-bigger and genuinely sharper</li></ul><p>Knowing these four by name means you can look at any flawed image and immediately know its rescue path.</p>`,
          question: {
            text: "Your hero image is perfect but too square for a wide website banner. Which move rescues it?",
            options: [
              "Upscaling — make the whole image bigger",
              "Outpainting/extending — AI continues the scene beyond the original edges to fill the wide format",
              "Cropping — cut the top and bottom off",
            ],
            correctIndex: 1,
            explanation:
              "Extending generates new, matching content beyond the frame — the image grows wider without losing anything. Upscaling enlarges but doesn't change proportions; cropping would gut a square image forced wide.",
          },
        },
        {
          html: `<h3>Enhancement: consistency at scale</h3><p>Beyond rescue, editing tools keep <em>sets</em> of images consistent — the mark of a professional brand:</p><ul><li><strong>The product-shot system:</strong> every product photographed casually → background removed → placed on the same brand-color backdrop → same lighting filter. Twenty messy phone photos become a uniform catalog in an hour</li><li><strong>Color grading to brand:</strong> apply the same warmth/contrast treatment across all imagery — feeds and pages instantly look art-directed</li><li><strong>Face/skin retouching — with restraint:</strong> subtle cleanup reads professional; heavy filtering reads fake and erodes trust</li></ul><div class="discovery"><p>💡 <strong>Edit the real, generate the imaginary</strong></p><p>Rule of thumb: if the thing exists (your product, your face, your shop), photograph it and edit. If it doesn't exist yet (concepts, illustrations, scenes), generate it. Mixing these up — generating "your" product — creates images that lie to customers.</p></div>`,
          question: {
            text: "Why edit real product photos instead of generating product images from scratch?",
            options: [
              "Editing is always cheaper than generating",
              "A generated 'product photo' shows something that doesn't exist — customers receiving something different is deception",
              "Generated images can't be saved in high resolution",
            ],
            correctIndex: 1,
            explanation:
              "Product imagery is a factual promise. Edit reality to look its best — clean background, good light — but the thing shown must be the thing shipped.",
          },
        },
        {
          html: `<h3>The editing workflow habits</h3><p>Three habits that separate clean results from obvious AI jobs:</p><ul><li><strong>Zoom the edges:</strong> after background removal, inspect hair, fur, and fine details at high zoom — halos and choppy edges are the giveaway; most tools have an edge-refine brush</li><li><strong>Check the fill logic:</strong> after object removal, look for warped lines, impossible shadows, repeated patterns where AI guessed wrong — regenerate just that region if needed</li><li><strong>Keep originals, always:</strong> edit on copies. The untouched original is your undo button forever — and clients ask for re-edits more often than you'd think</li></ul><p>Editing mastery compounds with everything ahead: social graphics need clean subjects, UI screens need polished imagery, and your workflow lesson will chain these moves into systems.</p>`,
          question: {
            text: "After an AI removes an object from your photo, what should you inspect before using it?",
            options: [
              "The file size of the exported image",
              "The filled region — warped lines, impossible shadows, or repeated patterns reveal where AI guessed wrong",
              "Nothing — AI removal is always seamless",
            ],
            correctIndex: 1,
            explanation:
              "Inpainting is plausible guessing, and guesses fail at edges, patterns, and shadows. A ten-second zoom inspection is the difference between invisible edits and obvious AI jobs.",
          },
        },
      ],
    },
    {
      title: "Social Media Graphics With AI",
      summary: "Produce a week of on-brand social visuals in one hour — templates, batching, and platform sizing",
      content: `<p>Social media is a visual volume game: every post needs a graphic, every platform needs its size, and it never stops. This lesson builds your production system — brand kit in, a week of platform-ready visuals out.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Canva",
        url: "https://canva.com",
        prompt:
          "Build your social template system in Canva. (1) Create one post design using your brand kit: brand background color, your fonts, logo placed small in a corner, and space for a headline — this is TEMPLATE A (quote/tip posts). (2) Duplicate and rearrange it into TEMPLATE B (image-led posts: a big visual zone plus a caption bar). (3) Use Magic Media inside Canva to generate one background visual with your four-part prompt + constraints ('no text, no faces' if that fits your brand). (4) Now batch: duplicate Template A five times and fill each with a different tip or quote from your content plan — five posts, one sitting. (5) Use the resize tool to convert one post into story (9:16) and wide (16:9) formats, adjusting what breaks.",
        note: "Two templates + batching + resize is the entire engine — most brands you admire on social run on exactly this system, just with more templates.",
      },
      steps: [
        {
          html: `<h3>Templates: design once, post forever</h3><p>The unsustainable way: design every post from scratch. The system way:</p><ul><li><strong>2-4 recurring formats:</strong> a quote/tip template, an image-led template, maybe an announcement and a carousel cover — each locked to your brand kit (colors, fonts, logo placement)</li><li><strong>Posting becomes filling, not designing:</strong> new content = duplicate template, swap text and image, done in minutes</li><li><strong>Consistency is the secret benefit:</strong> a feed of templated posts reads as a <em>brand</em>; a feed of one-off designs reads as noise — followers should recognize your post before reading your name</li></ul>`,
          question: {
            text: "Why do template systems beat designing each social post from scratch?",
            options: [
              "Templates are the only way to legally use brand fonts",
              "Posting becomes minutes of filling instead of hours of designing — and the repetition makes the feed instantly recognizable as your brand",
              "Social platforms rank templated posts higher automatically",
            ],
            correctIndex: 1,
            explanation:
              "Speed AND consistency: templates collapse production time while making every post reinforce the same visual identity. Recognition compounds with every post.",
          },
        },
        {
          html: `<h3>Generation inside the layout</h3><p>Tools like Canva's Magic Media generate images <em>directly inside the editor</em> — and for social graphics that placement matters:</p><ul><li><strong>Generate in context:</strong> the visual appears in your template, at your size, next to your text — you immediately see if it works, no app-switching</li><li><strong>Brand-constrained prompts:</strong> your kit's keywords go in every prompt — "in muted earth tones, grainy texture" — so generated backgrounds match the templates around them</li><li><strong>Constraints earn their keep here:</strong> "no text, no faces" backgrounds leave clean space for YOUR headline — remember, AI-generated text inside images looks mangled; real text goes in as a text layer</li></ul><div class="discovery"><p>💡 <strong>The scroll test</strong></p><p>Before posting, zoom out until the graphic is thumbnail-small — feed-sized. Can you still read the headline? Does anything pop? Graphics are judged at scroll speed and scroll size, not at design-screen size.</p></div>`,
          question: {
            text: "Why generate background visuals with 'no text' constraints, adding headlines as text layers?",
            options: [
              "Text layers use less storage space",
              "AI mangles text inside images — real text layers stay crisp, editable, and translatable",
              "Platforms reject images containing generated text",
            ],
            correctIndex: 1,
            explanation:
              "Warped AI lettering is the instant amateur signal. Clean generated backgrounds + real text layers give you sharp typography you can edit, resize, and update anytime.",
          },
        },
        {
          html: `<h3>Batching and the platform matrix</h3><p>The final multipliers:</p><ul><li><strong>Batch by type:</strong> make five quote posts in one sitting, not one post on five days — same template, same headspace, a week scheduled in an hour</li><li><strong>One design, every size:</strong> square feed (1:1), story/reel cover (9:16), wide link image (16:9) — AI resize tools reflow the design, you fix what breaks (usually the headline)</li><li><strong>The content pipeline:</strong> this connects to your writing tools — ask a text AI for "10 one-line tips for [audience]", pour them into Template A, generate matching backgrounds, resize, schedule. That's a content operation, run by one person</li></ul><p>Social sorted. Next: the visuals get interactive — UI screens for apps and websites.</p>`,
          question: {
            text: "What's the batching principle for social graphics?",
            options: [
              "Post everything on the same day each week",
              "Produce many posts of the same type in one sitting — same template, same flow — instead of designing daily",
              "Use every platform size for every single post",
            ],
            correctIndex: 1,
            explanation:
              "Context-switching is the hidden cost of daily design. Batching one template type in one sitting produces a scheduled week in the time daily posting spends on one graphic.",
          },
        },
      ],
    },
    {
      title: "UI Screens",
      summary: "Design app and website screens with AI — from described idea to clickable-looking mockup",
      content: `<p>The screens in your head — your app's home page, your shop's landing page — can now be drafted in minutes. This lesson covers AI-assisted UI: generating screen concepts, applying the layout rules that make interfaces feel right, and iterating toward buildable.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Design a screen with me. My product: [describe your app or site]. The screen: [e.g. the home/dashboard screen or landing page]. Step 1 — ask me the 3 questions a UI designer would ask (main user goal on this screen, the ONE primary action, what data/content must appear). Step 2 — produce a text wireframe: the screen as a top-to-bottom list of sections with what each contains and why it's in that order. Step 3 — write me a generation prompt for a UI mockup tool (visual type: 'clean mobile app UI screen mockup', my audience, my brand style words, mood, constraints: 'no real text, placeholder blocks only, single screen, no hands/phones/photos'). Step 4 — list 5 things I should check on the generated mockup against UI best practices (hierarchy, one primary button, spacing, contrast, thumb reach).",
        note: "The text wireframe (step 2) is the real design — the generated mockup just makes it visible. Iterate the wireframe with AI until the order feels right, then generate.",
      },
      steps: [
        {
          html: `<h3>Screens are ordered arguments</h3><p>A UI screen is a landing page's cousin: content in deliberate order, driving one action. Before any visual tool:</p><ul><li><strong>The three questions:</strong> what is the user trying to do here? What's the ONE primary action? What must they see to act confidently?</li><li><strong>The text wireframe:</strong> the screen as a top-to-bottom section list — "header with balance → quick actions row → recent activity list → bottom nav." Structure decided in words, before pixels exist</li><li><strong>AI as design partner:</strong> "What sections does a [type] screen need, in what order, and what's the primary action?" — AI knows standard patterns from thousands of apps; you supply what's special about yours</li></ul>`,
          question: {
            text: "What should exist before you generate any UI mockup visuals?",
            options: [
              "A finished logo and complete brand book",
              "A text wireframe — the screen's sections in deliberate order, with one primary action decided",
              "A developer to confirm the code is possible",
            ],
            correctIndex: 1,
            explanation:
              "Layout is a thinking problem before it's a visual one. The text wireframe is cheap to iterate and forces the real decisions — the mockup just renders what you decided.",
          },
        },
        {
          html: `<h3>The rules that make screens feel right</h3><p>You can't always say why a screen feels professional — but these rules are usually why:</p><ul><li><strong>Hierarchy:</strong> one element clearly biggest/boldest (the thing users need first); everything else steps down in order of importance</li><li><strong>One primary button per screen:</strong> the main action gets the loud brand color; secondary actions go quiet — two loud buttons is a fight for attention that everyone loses</li><li><strong>Space is a feature:</strong> crowded screens feel stressful and cheap; generous spacing reads calm and premium — when in doubt, remove elements rather than shrinking them</li><li><strong>Consistency:</strong> same button style, same spacing rhythm, same corner radius everywhere — your brand kit, applied to interface parts</li></ul><div class="discovery"><p>💡 <strong>The squint test</strong></p><p>Squint at any screen (yours or a mockup) until text blurs. Can you still tell what's most important and where you'd tap? If everything blurs into equal noise, the hierarchy failed.</p></div>`,
          question: {
            text: "Why should a screen have only ONE loud, primary-colored button?",
            options: [
              "Multiple colored buttons increase app loading time",
              "Two competing loud buttons split attention — the primary action must be unmistakable at a glance",
              "Design tools charge per colored element",
            ],
            correctIndex: 1,
            explanation:
              "The primary button answers 'what do I do here?' instantly. When everything shouts, nothing is heard — visual restraint is what makes the important thing obvious.",
          },
        },
        {
          html: `<h3>From mockup to buildable</h3><p>Generated mockups are direction, not blueprints — here's the path to real:</p><ul><li><strong>Generate variations, harvest pieces:</strong> "this layout's header + that one's card style" — mockups are idea quarries, not final answers</li><li><strong>Rebuild in a layout tool:</strong> recreate the chosen direction in Canva/Figma with real text and your brand kit — now it's editable, presentable, and honest (generated screens often contain impossible gibberish UI)</li><li><strong>Spec it with AI:</strong> "Turn this wireframe into a build description: each section, its content, states (empty/loading/error), and behavior" — hand that to a developer or an AI app builder, and your mockup becomes software</li></ul><p>You can now take a screen from idea → wireframe → mockup → spec. The next lesson adds the professional's secret weapon: structured feedback and iteration.</p>`,
          question: {
            text: "Why rebuild a generated mockup in a real layout tool instead of shipping the image?",
            options: [
              "Generated images are always too low-resolution",
              "The rebuild has real editable text and brand assets — generated screens are frozen images, often full of gibberish UI",
              "Layout tools are required for copyright registration",
            ],
            correctIndex: 1,
            explanation:
              "A mockup image is a picture of an idea. The rebuilt version is a living design: editable, on-brand, honest about what will exist — and one step from a developer handoff.",
          },
        },
      ],
    },
    {
      title: "AI Feedback and Iteration",
      summary: "Use AI as your design critic: structured reviews, variant testing, and knowing when it's done",
      content: `<p>Every designer needs a second pair of eyes — most beginners have none. AI fills that seat: a tireless critic that reviews against principles, generates focused variants, and helps you decide when good enough is actually good.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "You're my design critic. Here's my design: [upload/paste a screenshot of anything you've made — a social post, a screen, a logo lockup] and its context: audience [who], goal [what it should achieve], brand direction [your keywords]. Run the structured review: (1) FIRST IMPRESSION — what do you notice in the first second, and is that the right thing? (2) HIERARCHY — rank what draws attention 1-2-3; does that match the goal? (3) PRINCIPLES — check contrast, spacing, alignment, consistency; flag specific problems with specific fixes, (4) AUDIENCE READ — as my target audience member, what feeling does this give and would you act? (5) VERDICT — the 2 highest-impact changes, and what to leave alone. Then I'll revise and show you version 2 for comparison.",
        note: "The review-revise-review loop is the fastest design education that exists — every cycle teaches principles through YOUR work instead of theory.",
      },
      steps: [
        {
          html: `<h3>Structured critique beats 'looks good?'</h3><p>Asking "does this look good?" gets you nothing — vague question, vague answer. Professionals review against <strong>criteria</strong>:</p><ul><li><strong>First-impression check:</strong> what registers in one second — and is it the thing that should?</li><li><strong>Hierarchy audit:</strong> what draws the eye 1st, 2nd, 3rd? Does that order match the design's goal?</li><li><strong>Principles pass:</strong> contrast, alignment, spacing, consistency — checked one by one, with specific fixes</li><li><strong>Audience roleplay:</strong> "React as a skeptical 45-year-old seeing this in a feed" — AI simulates the reader you can't be</li></ul><p>Upload a screenshot, request exactly this structure, and you get in seconds what design school takes months to build: the habit of evaluating systematically.</p>`,
          question: {
            text: "Why does structured critique ('audit the hierarchy, check contrast') beat asking 'does this look good?'",
            options: [
              "It sounds more professional in emails",
              "Specific criteria produce specific, fixable findings — vague questions produce vague reassurance",
              "AI refuses to answer subjective questions",
            ],
            correctIndex: 1,
            explanation:
              "'Looks fine!' teaches nothing. 'Your CTA is third in the visual hierarchy but should be first — increase size and contrast' is a fix you can make in one minute.",
          },
        },
        {
          html: `<h3>Iteration: focused variants, honest comparisons</h3><p>With critique in hand, iterate like a professional:</p><ul><li><strong>One change per version:</strong> the critique said hierarchy and spacing — fix hierarchy first, compare, then spacing. (The same one-variable discipline from your prompting lesson)</li><li><strong>Variant sets on demand:</strong> "3 versions: one with stronger contrast, one with 30% more whitespace, one with the image cropped tighter" — generated or rebuilt in minutes</li><li><strong>Side-by-side verdicts:</strong> show AI both versions: "Which communicates [goal] faster, and why?" — comparative judgment is more reliable than absolute judgment, for humans and AI alike</li></ul><div class="discovery"><p>💡 <strong>Fresh eyes on demand</strong></p><p>Designers lose objectivity after staring at their own work for an hour — everyone does. AI never saw version 1 unless you show it. A fresh chat = instant fresh eyes, the thing designers used to have to sleep to get.</p></div>`,
          question: {
            text: "When comparing design versions, why show AI both side by side instead of rating each alone?",
            options: [
              "It uses fewer image uploads",
              "Comparative judgment ('which communicates the goal faster?') is more reliable than absolute scoring",
              "AI can only process two images at a time",
            ],
            correctIndex: 1,
            explanation:
              "'Rate this 1-10' is noisy; 'which of these two wins, and why' is sharp. Comparison forces a reasoned choice — the same reason A/B tests beat opinion polls.",
          },
        },
        {
          html: `<h3>Knowing when to stop</h3><p>Iteration has a failure mode: infinite polishing. The professional's stopping rules:</p><ul><li><strong>Define done before starting:</strong> "done = passes the squint test, on-brand per the kit, audience roleplay says they'd act" — criteria met, ship it</li><li><strong>Diminishing returns check:</strong> if the last two revisions changed things only you can see, you're past the value — real feedback beats imagined perfection</li><li><strong>Ship and measure:</strong> the design conversation ends where the data begins — a posted graphic teaches more than ten more revisions ever could. Log what performed and feed it into the next brief</li></ul><p>Critique, iterate, ship, learn. One lesson remains: wiring everything — tools, prompts, brand kit, feedback loop — into a single workflow you run on autopilot.</p>`,
          question: {
            text: "What's the sign you should stop iterating and ship?",
            options: [
              "You've done exactly ten revisions",
              "Your 'done' criteria are met and recent revisions change things only you can notice",
              "The AI critic runs out of suggestions",
            ],
            correctIndex: 1,
            explanation:
              "Perfection past the audience's perception is procrastination. Criteria met + invisible revisions = ship it, measure reality, and let real results drive the next round.",
          },
        },
      ],
    },
    {
      title: "AI Design Workflow",
      summary: "Wire it all into one system: from brief to shipped asset, plus turning your design skill into value",
      content: `<p>You've collected every piece: tools, prompts, moodboards, brand kits, editing, social systems, UI screens, and feedback loops. The trophy lesson wires them into one repeatable workflow — and shows you how to turn it into real-world value.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me document my personal AI design workflow as a reusable playbook. Based on this process — brief (audience, goal, format) → moodboard/brand kit check → four-part prompt with constraints → generate variants → edit and refine (one variable at a time) → structured AI critique → revise → platform sizing → ship and log results — create: (1) my one-page WORKFLOW CHECKLIST with each step and its key question, (2) a PROJECT INTAKE template: the 6 questions I answer (or ask a client) before any design work starts, (3) a REUSABLE PROMPT LIBRARY skeleton: my 5 most-needed prompt templates (social post background, logo concept, UI mockup, image cleanup instruction, critique request) with blanks for the four parts + constraints, (4) a simple DELIVERY note template for handing finished assets to a client or teammate (what's included, formats, usage rules from brand kit).",
        note: "This playbook IS the product — run it for yourself weekly, or hand the intake form to a friend with a business and run it for them. That's a design service, and you built it in one course.",
      },
      steps: [
        {
          html: `<h3>The assembled pipeline</h3><p>Every lesson was a station; here's the full assembly line:</p><ul><li><strong>1. Brief:</strong> audience, goal, format, where it'll live (the intake questions)</li><li><strong>2. Direction check:</strong> moodboard and brand kit — the visual contract everything obeys</li><li><strong>3. Create:</strong> right tool category → four-part prompt + constraints → variants, never singles</li><li><strong>4. Refine:</strong> editing moves for real images, one-variable iteration for generated ones</li><li><strong>5. Critique:</strong> structured AI review → focused revisions → stopping rules</li><li><strong>6. Ship:</strong> platform sizes, delivery, and a results log that improves the next brief</li></ul><p>The power isn't any station — it's that the line always runs in order. Random tool-grabbing produces random results; the pipeline produces <em>reliable</em> ones.</p>`,
          question: {
            text: "What makes a design workflow more valuable than knowing individual AI tools?",
            options: [
              "Workflows are required for tool certification",
              "The fixed sequence — brief, direction, create, refine, critique, ship — produces reliable results instead of random ones",
              "Workflows let you skip the briefing step",
            ],
            correctIndex: 1,
            explanation:
              "Tools change monthly; the pipeline is permanent. Order is the ingredient: direction before creation, critique before shipping — that's what makes output professional-grade every time.",
          },
        },
        {
          html: `<h3>Efficiency: templates, libraries, batching</h3><p>Run the pipeline more than twice and patterns emerge — systematize them:</p><ul><li><strong>Prompt library:</strong> your proven prompts (social background, logo concept, UI screen, critique request) saved with blanks — every project starts at 80% instead of zero</li><li><strong>Asset library:</strong> brand kit, templates, best generated visuals, before/after pairs — organized so reuse is faster than regeneration</li><li><strong>Batch the calendar:</strong> one creation session weekly beats daily scrambles — the social lesson's batching applied to everything</li></ul><div class="discovery"><p>💡 <strong>Your results log is a private superpower</strong></p><p>Which visuals got clicks, which posts got shares, which screen mockup made a client say yes — logged and fed back into briefs. After three months you know things about your audience's visual taste that no tool, template, or guru can sell to anyone.</p></div>`,
          question: {
            text: "What's the value of a personal prompt library?",
            options: [
              "Prompts expire if not saved within 30 days",
              "Proven prompts with fill-in blanks start every project at 80% done — speed AND consistent quality",
              "It's needed to train your own AI model",
            ],
            correctIndex: 1,
            explanation:
              "You already paid the iteration cost to find what works — the library banks it. Every project inherits your best prompts instead of rediscovering them.",
          },
        },
        {
          html: `<h3>The skill is now a service</h3><p>Look at what you can do that most people can't: take any idea to polished, on-brand visuals in hours. That's worth money:</p><ul><li><strong>For your own projects:</strong> your app, shop, or brand now looks like it has a design team — the original goal, achieved</li><li><strong>For others:</strong> "brand starter kit" (moodboard + logo + palette + templates), "social media pack" (a month of on-brand graphics), "landing page design" — productized, priced per outcome, delivered from your playbook</li><li><strong>The honest pitch:</strong> you're not pretending to be a classical designer — you're an AI-powered design operator with a system, a portfolio of before/afters, and speed no agency matches at your price</li></ul><p>Course complete. You started with ideas that looked better in your head than on screen — you finish with a pipeline that closes that gap on demand, for yourself and anyone you choose to help. The best portfolio piece is the next real thing you design — go make it.</p>`,
          question: {
            text: "What's the honest way to offer AI-powered design services without classical design training?",
            options: [
              "Claim years of agency experience to win trust",
              "Sell the system and its results: productized packages, before/after proof, and speed — openly AI-powered",
              "Only work for free since the skills aren't real",
            ],
            correctIndex: 1,
            explanation:
              "The market pays for outcomes, not credentials. A documented workflow, real before/afters, and honest positioning ('AI-powered, fast, on-brand') is a stronger pitch than borrowed prestige — and the skills ARE real.",
          },
        },
      ],
    },
  ],
};
