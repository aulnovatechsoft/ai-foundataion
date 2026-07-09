import type { UnitSeed } from "./types";

export const CANVA_UNIT_2: UnitSeed = {
  title: "Canva AI in Professional Practice",
  lessons: [
    {
      title: "Canva AI for Design",
      summary: "Real designer and brand workflows — from brand kits at scale to knowing when AI output needs a human hand",
      estimatedMinutes: 14,
      content: `<p>In the studio, Canva's AI isn't about making one pretty graphic — it's about producing consistent, on-brand work faster than ever, and knowing exactly where your judgment still matters most.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "In Canva, set up a Brand Kit (or use your existing one) with my colours and fonts, then use Magic Design to produce three on-brand versions of the same announcement — a square social post, a story, and a presentation slide. Keep the look consistent across all three.",
        note: "Check that the three pieces feel like one family — consistency across formats is the real win, not any single graphic.",
      },
      steps: [
        {
          html: `<h3>From tinkering to a real workflow</h3><p>You've met Canva's AI tools one by one. Now we treat them as a <strong>professional toolkit</strong> — the way a working designer actually uses them under deadline.</p><p>The shift is subtle but important: individual tools like Magic Media, Magic Edit, and Magic Design are useful. But the real value shows up when you chain them into a repeatable process that protects your brand and your time.</p><h3>The designer's real job</h3><p>Clients rarely pay for a single image. They pay for <strong>consistency, speed, and taste</strong> — a look that holds together across dozens of assets. That's exactly where AI helps, and exactly where it needs supervision.</p>`,
        },
        {
          html: `<h3>Brand Kit is your foundation</h3><p>Before generating anything, set up a <strong>Brand Kit</strong>: your logos, color palette, fonts, and — where available — a <strong>brand voice</strong> that shapes how AI-written copy sounds. Canva's AI tools can pull from this so <strong>Magic Design</strong> and other features generate options that already look like you.</p><ul><li>Colors and fonts stay consistent automatically</li><li>Logos are one click away, not buried in folders</li><li>New work starts on-brand instead of drifting</li></ul><p>Think of the Brand Kit as the guardrails that keep fast AI output from wandering off-brand.</p>`,
          question: {
            text: "You're about to generate 20 social graphics for a client with strict brand colors and fonts. Before you touch Magic Design, what's the highest-leverage move?",
            options: [
              "Generate everything first, then recolor each graphic by hand afterward",
              "Set up the client's Brand Kit so generated options come out on-brand from the start",
              "Skip the Brand Kit — AI usually guesses brand colors correctly",
            ],
            correctIndex: 1,
            explanation:
              "A configured Brand Kit means Magic Design and related tools start from your colors, fonts, and logos. Fixing 20 graphics by hand afterward is exactly the slow rework the Brand Kit prevents.",
          },
        },
        {
          html: `<h3>Moodboards and exploration, fast</h3><p>Early in a project you need <em>directions</em>, not final art. This is where <strong>Magic Media</strong> (text-to-image) and <strong>Dream Lab</strong> shine: generate a spread of visual concepts to react to.</p><ul><li>Prompt several distinct styles for the same idea</li><li>Pull the strongest frames into a moodboard</li><li>Use it to align with the client <em>before</em> polishing anything</li></ul><p>The goal here is speed and range — you're mapping the territory, not shipping the final piece.</p>`,
          question: {
            text: "A client says they'll 'know the right vibe when they see it.' You need to explore visual directions quickly. What's the smartest first step?",
            options: [
              "Spend a full day perfecting one polished hero image and present only that",
              "Use Magic Media and Dream Lab to generate several varied concepts for a moodboard, then align before polishing",
              "Ask the client to write the exact prompt themselves",
            ],
            correctIndex: 1,
            explanation:
              "When direction is undecided, breadth beats polish. Generating varied concepts lets the client point at what resonates before you invest hours refining a single guess.",
          },
        },
        {
          html: `<h3>Client iterations without the dread</h3><p>Revisions used to mean hours of manual edits. Now targeted AI tools make them fast:</p><ul><li><strong>Magic Edit</strong> — replace or change part of an image with a prompt</li><li><strong>Magic Eraser</strong> — remove an unwanted object cleanly</li><li><strong>Magic Grab</strong> — select and reposition a subject</li><li><strong>Magic Expand</strong> — extend a photo to fill a new frame</li><li><strong>Background remover</strong> — isolate a subject in one click</li></ul><p>The pattern that works: make <strong>one change at a time</strong>, keep the parts the client already approved, and re-share.</p>`,
          question: {
            text: "A client loves a hero image but wants the coffee cup swapped for a water glass and a stray cable removed. What's the cleanest approach?",
            options: [
              "Regenerate the entire image from scratch with a new prompt and hope the rest survives",
              "Use Magic Edit to swap the cup and Magic Eraser to remove the cable, leaving the approved parts intact",
              "Tell the client the image can't be changed without starting over",
            ],
            correctIndex: 1,
            explanation:
              "Targeted tools change only what's requested while preserving everything already approved. Regenerating risks losing the composition the client already signed off on.",
          },
        },
        {
          html: `<h3>One design, every format</h3><p>Campaigns live across sizes: a story, a post, a banner, a print flyer. <strong>Magic Switch</strong> (resize) can take an approved design and adapt it to multiple formats at once, and <strong>Magic Animate</strong> can add motion where a platform rewards it.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Resize <em>after</em> the design is approved, not before. Auto-resize gets layout close, but each format still needs a quick human pass — a headline that fits a wide banner may overflow a vertical story.</p></div><p>AI does the heavy lifting of repositioning; you do the final ten percent that makes each size feel intentional.</p>`,
          question: {
            text: "You resize an approved landscape ad into a tall story format with Magic Switch, and the headline now crowds the subject's face. What do you do?",
            options: [
              "Ship it as-is — auto-resize output is always final",
              "Make a quick manual adjustment to the story version so the layout breathes",
              "Abandon the story format entirely",
            ],
            correctIndex: 1,
            explanation:
              "Auto-resize gets you 90% there, but composition shifts between aspect ratios. A short human pass on the outlier format is exactly the polish that separates pro work from generic output.",
          },
        },
        {
          html: `<h3>When AI output needs a human</h3><p>AI generation is astonishing, but it has tells. A trained eye catches them fast:</p><ul><li>Warped hands, odd text-in-image, or off details</li><li>Slightly generic, "seen-it-before" compositions</li><li>Lighting or perspective that doesn't quite match the brand</li></ul><p>Your value as a designer is knowing <strong>when good enough isn't</strong> — and stepping in to fix, recompose, or reshoot the prompt. AI accelerates the work; taste still finishes it.</p>`,
          question: {
            text: "A generated product image looks great at a glance, but the reflection on the bottle bends unnaturally and a label letter is garbled. It's due to the client in an hour. Best call?",
            options: [
              "Send it — clients rarely notice small AI artifacts",
              "Fix the label with Magic Edit and correct or re-prompt the reflection before it goes out",
              "Scrap Canva and shoot the product with a camera instead",
            ],
            correctIndex: 1,
            explanation:
              "Artifacts like garbled text and broken reflections are exactly what a professional catches and fixes. Targeted edits handle it in minutes — no need to send flawed work or abandon the tool.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey, I'm Nova 👋 Let's put your Canva AI design workflow to work on some real projects. Ready to design smart?",
            },
            {
              bot: "You're making a birthday invite for your niece and want a few looks to choose from before committing.",
              ask: "What's the smartest first move in Canva AI?",
              inputType: "choice",
              options: [
                "Perfect one design fully before seeing any alternatives",
                "Prompt the Image tab and use the four variations to explore styles fast",
                "Skip prompting and drag shapes around manually",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — the four variations let you compare directions in seconds, then refine the one you love.",
              hint: "Think about how Canva gives you options from a single prompt.",
            },
            {
              bot: "Fill in the foundation you set up before generating anything for a client.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "Before generating 20 on-brand graphics, first set up the ___.",
              options: ["Brand Kit", "Magic Eraser", "transition"],
              correctIndex: 0,
              feedback:
                "Right — the Brand Kit makes every generated design start on-brand.",
              hint: "It stores your colors, fonts, and logo in one place.",
            },
            {
              bot: "Let's order the studio workflow. Arrange these stages.",
              ask: "Tap the words to build the right order.",
              inputType: "arrange",
              words: ["set", "brand", "kit", "then", "explore", "then", "refine"],
              feedback:
                "That's the loop: set brand kit, then explore, then refine.",
              hint: "Foundation first, exploration next, polish last.",
            },
            {
              bot: "A designer plans to generate all 20 client graphics first, then recolor each one by hand to match the brand.",
              ask: "Is that a useful workflow?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — recoloring 20 graphics by hand is exactly the rework a Brand Kit prevents up front.",
              hint: "Think about where the brand colors should come from.",
            },
            {
              bot: "Let's match each revision request to the right targeted tool.",
              ask: "Pair each fix with its tool.",
              inputType: "match",
              pairs: [
                { left: "Remove a stray cable", right: "Magic Eraser" },
                { left: "Swap a cup for a glass", right: "Magic Edit" },
                { left: "Cut out the subject", right: "Background remover" },
                { left: "Fill a wider frame", right: "Magic Expand" },
              ],
              feedback:
                "Perfect — targeted tools change only what's asked, protecting approved work.",
              hint: "Remove, replace, isolate, or extend.",
            },
            {
              bot: "Let's write a real prompt. You want a cozy photo for a family photo book cover.",
              ask: "e.g. Write a Canva Image prompt for that cover",
              inputType: "text",
              keywords: ["prompt", "style", "cozy", "photo", "cover", "warm", "aspect"],
              feedback:
                "Nice. A strong one: \"A warm, cozy family photo book cover, soft natural light, autumn tones, photographic style, portrait aspect ratio.\" It names the subject, mood, style, and shape.",
              hint: "Describe the subject, the mood, the style, and the aspect ratio.",
            },
            {
              bot: "Now a fix-up. Your generated poster looks great, but there's a stray object and one word is garbled.",
              ask: "e.g. Describe how you'd fix it with Canva's magic tools",
              inputType: "text",
              keywords: ["magic", "edit", "eraser", "remove", "fix", "text", "keep"],
              feedback:
                "Great instinct. Example: \"Use Magic Eraser to remove the stray object and Magic Edit to fix the garbled word, keeping the rest of the poster untouched.\" One change at a time protects what already works.",
              hint: "Name the targeted tools for removing and fixing without regenerating everything.",
            },
            {
              bot: "You've got it — explore with variations, lock in a Brand Kit, prompt clearly, and finish with targeted edits. Go make something beautiful! 🎉",
            },
          ],
        },
        {
          html: `<h3>Wrapping up: design</h3><p>You've seen the full designer loop: set up the Brand Kit, explore with Magic Media and Dream Lab, iterate with targeted edits, scale with Magic Switch, and finish with human taste.</p><p>Design creates the assets — but a campaign needs those assets working <em>together</em>, on schedule, at volume. Next, we shift into the marketer's seat: producing whole campaigns, planning social calendars, and testing ad variations without losing your brand's voice.</p>`,
          question: {
            text: "Which statement best captures the designer's role in an AI-assisted studio?",
            options: [
              "AI replaces design judgment entirely, so taste no longer matters",
              "AI accelerates production, while human judgment sets direction, catches artifacts, and finishes the work",
              "AI is only useful for the very first draft and nothing after that",
            ],
            correctIndex: 1,
            explanation:
              "The whole lesson points here: AI handles speed and volume, but your judgment on brand, quality, and finish is what turns fast output into professional work.",
          },
        },
      ],
    },
    {
      title: "Canva AI for Marketing",
      summary: "Produce whole campaigns, plan social calendars, and test ad variations without a generic AI look",
      estimatedMinutes: 14,
      content: `<p>Marketing lives on volume and consistency: many assets, many channels, one coherent voice. Canva's AI can produce a campaign's worth of material in an afternoon — if you steer it deliberately.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "Plan a small campaign for [an upcoming promotion] in Canva. Use Magic Design and Magic Write to create a matching set: one Instagram post, one story, and one email header — same message and visual style, resized for each format. Keep the headline and offer consistent across all three.",
        note: "Aim for one coherent voice across every asset — if one piece feels off-brand, bring it back in line before you'd publish.",
      },
      steps: [
        {
          html: `<h3>Thinking in campaigns, not posts</h3><p>A single graphic is easy. A <strong>campaign</strong> is a system: a consistent message across formats, channels, and weeks. That's where AI's speed pays off — but only with a plan to keep it coherent.</p><h3>Copy and visual, together</h3><p>The strongest marketing pairs words and images that reinforce each other. Canva lets you draft both in one place: <strong>Magic Write</strong> for headlines, captions, and body copy, and <strong>Magic Design</strong> to turn a prompt or brief into on-brand layouts.</p>`,
        },
        {
          html: `<h3>Producing campaign assets at volume</h3><p>Say you're launching a webinar. You need a landing banner, three social posts, a story, and an email header. Instead of building each from zero:</p><ul><li>Draft the core message once with <strong>Magic Write</strong></li><li>Generate a base design with <strong>Magic Design</strong></li><li>Adapt it across formats with <strong>Magic Switch</strong></li></ul><p>One approved concept becomes an entire asset set — consistent by construction, not by luck.</p>`,
          question: {
            text: "You have five channels to cover for one launch and a tight deadline. What's the most efficient AI-assisted workflow?",
            options: [
              "Build a separate design for each channel from a blank page",
              "Nail one on-brand concept, then use Magic Switch to adapt it across the five formats and refine each",
              "Post the same exact image everywhere with no resizing",
            ],
            correctIndex: 1,
            explanation:
              "Starting from one approved concept and adapting it keeps the campaign coherent and fast. Building five from scratch wastes time; posting one unresized image ignores each channel's format.",
          },
        },
        {
          html: `<h3>Planning a social calendar</h3><p>A calendar turns scattered posts into a rhythm. Use the <strong>Canva AI assistant</strong> to brainstorm themes and a posting cadence, then Magic Write and Magic Design to flesh out each slot.</p><ul><li>Batch similar posts so the look stays consistent</li><li>Keep a recognizable template family across the month</li><li>Leave room to react to timely moments</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Generate a week of posts in one sitting using the same template and Brand Kit. Batching keeps visual consistency far better than making one post per day from scratch.</p></div>`,
          question: {
            text: "You want a month of social posts that clearly belong to the same brand. Which approach protects consistency best?",
            options: [
              "Make each day's post fresh in a totally different style for variety",
              "Batch-produce posts from a shared template family and Brand Kit, varying the content within a consistent look",
              "Copy competitors' posts so at least they look professional",
            ],
            correctIndex: 1,
            explanation:
              "Consistency comes from a shared template family and Brand Kit. Wildly different styles each day reads as chaotic, and copying competitors dilutes your own brand.",
          },
        },
        {
          html: `<h3>Ad variations: change one variable</h3><p>Testing ads is how marketers learn what works — but only if the test is clean. The rule: <strong>change one variable at a time</strong>.</p><ul><li>Same visual, different headline → tests the copy</li><li>Same copy, different image → tests the visual</li><li>Same everything, different call-to-action → tests the CTA</li></ul><p>Magic Write makes it trivial to spin up headline variants, and duplicating a design lets you swap a single element. If you change three things at once and one wins, you won't know <em>why</em>.</p>`,
          question: {
            text: "You want to know whether a punchier headline lifts clicks. You duplicate the ad and, while you're at it, also change the image and the button color. What's the problem?",
            options: [
              "Nothing — more changes means a bigger improvement",
              "With three variables changed at once, a winning result won't tell you which change caused it",
              "You should never test ads at all",
            ],
            correctIndex: 1,
            explanation:
              "A clean test isolates one variable. Changing headline, image, and button together muddies the result — you'd learn that something worked, but not what to repeat next time.",
          },
        },
        {
          html: `<h3>Keeping brand voice consistent</h3><p>Speed can flatten a brand's personality if you let it. Anchor <strong>Magic Write</strong> to your <strong>brand voice</strong> (via the Brand Kit) so captions and headlines sound like <em>you</em> — not like generic AI copy.</p><ul><li>Feed it your tone: playful, expert, warm, bold</li><li>Give it real examples of past copy to match</li><li>Always read the output aloud before publishing</li></ul><p>AI drafts fast; your voice is what makes people recognize the brand across a busy feed.</p>`,
          question: {
            text: "Magic Write returns a caption that's grammatically perfect but sounds stiff and corporate, while your brand is warm and playful. What's the right move?",
            options: [
              "Publish it — correct grammar is all that matters",
              "Re-prompt with your brand voice and examples, then edit the draft until it sounds like your brand",
              "Give up on AI copy and write everything manually forever",
            ],
            correctIndex: 1,
            explanation:
              "The draft is a starting point. Steering Magic Write with your brand voice and examples — then editing — keeps the speed benefit while restoring the personality that makes the brand recognizable.",
          },
        },
        {
          html: `<h3>Avoiding the generic AI look</h3><p>Audiences increasingly spot default AI output — the same gradients, the same stock-y faces, the same layouts. Standing out takes small deliberate choices:</p><ul><li>Layer in <strong>real brand assets</strong>: your photos, logos, custom fonts</li><li>Push prompts beyond the obvious ("cinematic office" → your actual space and people)</li><li>Break templates intentionally — an unexpected crop or color</li></ul><p>The tools are the same for everyone; your inputs and taste are what make the output feel unmistakably yours.</p>`,
          question: {
            text: "Your generated campaign visuals are polished but look like every other AI ad in the feed. How do you make them distinct?",
            options: [
              "Turn up the resolution and call it done",
              "Blend in real brand photography, custom fonts, and sharper prompts so the work reflects your specific brand",
              "Use the most popular default template so it looks 'professional'",
            ],
            correctIndex: 1,
            explanation:
              "Distinctiveness comes from your unique inputs — real assets, custom fonts, and specific prompts — not from higher resolution or leaning harder on the same defaults everyone else uses.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Welcome back! 👋 Let's run some everyday marketing jobs through Canva AI — side-hustle posts, small-business launches, the works.",
            },
            {
              bot: "You sell candles as a side hustle and need a week of Instagram posts that clearly belong to your shop.",
              ask: "What protects that consistent look best?",
              inputType: "choice",
              options: [
                "Make each post in a totally different style for variety",
                "Batch them from one template family and your Brand Kit, varying only the content",
                "Copy a big brand's posts so they look professional",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — a shared template family plus your Brand Kit keeps the whole week recognizably yours.",
              hint: "Think about what makes posts look like they belong together.",
            },
            {
              bot: "Fill in the mindset shift that makes AI marketing pay off.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "Effective AI marketing means thinking in ___, not single posts.",
              options: ["campaigns", "fonts", "pixels"],
              correctIndex: 0,
              feedback:
                "Right — a campaign is a system of consistent assets across channels and weeks.",
              hint: "What's bigger than one post but shares one message?",
            },
            {
              bot: "You're launching a weekend sale across a story, a post, and a flyer, and time is tight.",
              ask: "What's the most efficient Canva AI workflow?",
              inputType: "choice",
              options: [
                "Build each format from a blank page separately",
                "Nail one on-brand design, then use Magic Switch to resize it across formats and tidy each",
                "Post the same unresized image everywhere",
              ],
              correctIndex: 1,
              feedback:
                "Right — one approved concept adapted with Magic Switch stays consistent and saves hours.",
              hint: "How can one design become many formats quickly?",
            },
            {
              bot: "Let's order a clean campaign workflow. Arrange these stages.",
              ask: "Tap the words to build the right order.",
              inputType: "arrange",
              words: ["draft", "copy", "then", "design", "then", "resize"],
              feedback:
                "That's the flow: draft copy, then design, then resize across formats.",
              hint: "Words first, layout next, formats last.",
            },
            {
              bot: "You want to know if a punchier headline lifts clicks, so you duplicate the ad and also change the image and the button color at the same time.",
              ask: "Is changing all three at once a useful test?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — with three variables changed, a win won't tell you which change caused it. Test one thing at a time.",
              hint: "A clean test isolates a single variable.",
            },
            {
              bot: "Let's match each ad test to what it measures.",
              ask: "Pair each change with what it tests.",
              inputType: "match",
              pairs: [
                { left: "Same visual, new headline", right: "Tests the copy" },
                { left: "Same copy, new image", right: "Tests the visual" },
                { left: "Same everything, new button", right: "Tests the CTA" },
              ],
              feedback:
                "Perfect — change one variable and you learn exactly what moved the result.",
              hint: "Whatever you changed is what you're testing.",
            },
            {
              bot: "Let's write copy. Your Etsy shop banner caption from Magic Write sounds stiff, but your brand is playful.",
              ask: "e.g. Write a prompt to get Magic Write to match your voice",
              inputType: "text",
              keywords: ["magic", "write", "voice", "playful", "tone", "example", "brand"],
              feedback:
                "Love it. Example: \"Rewrite this caption in a playful, warm tone for my handmade Etsy shop — here are two past captions to match the voice.\" Feeding it real examples locks in your personality.",
              hint: "Name the tone you want and give it examples of your real voice.",
            },
            {
              bot: "You've nailed it — batch for consistency, adapt with Magic Switch, steer your voice, and test one thing at a time. Go grow that hustle! 🎉",
            },
          ],
        },
        {
          html: `<h3>Wrapping up: marketing</h3><p>You can now run a campaign end to end: pair copy and visuals with Magic Write and Magic Design, plan a batched social calendar, test clean one-variable ad variations, and keep everything on-voice and un-generic.</p><p>Marketing brings people to the door. Closing the deal is a different craft — pitch decks, proposals, and one-to-one persuasion. Next up: Canva AI for Sales, where we turn these skills toward winning specific prospects.</p>`,
          question: {
            text: "Which mindset best describes effective AI-assisted marketing?",
            options: [
              "Generate as much as possible and publish it all immediately",
              "Use AI for speed and volume, but steer it with a plan, clean tests, and a consistent brand voice",
              "Only use AI for the images and never for the copy",
            ],
            correctIndex: 1,
            explanation:
              "The lesson's throughline: AI supplies speed and volume, while your planning, disciplined testing, and brand voice keep the campaign coherent and distinct.",
          },
        },
      ],
    },
    {
      title: "Canva AI for Sales",
      summary: "Pitch decks, one-pagers, personalized outreach, and interactive Canva Code pieces that win prospects",
      estimatedMinutes: 14,
      content: `<p>Sales is persuasion at the individual level. Canva's AI helps you show up polished and personal — decks, proposals, and even interactive tools tailored to the exact person you're trying to win.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "In Canva, build a short, polished sales proposal for [a specific prospect]. Use Magic Design for the layout and Magic Write to draft a personalized cover note, a one-line value summary, and three benefit points tailored to their situation. Keep it clean, confident, and on-brand.",
        note: "Personalize at least one slide to this exact prospect — a tailored detail lands far better than a generic template.",
      },
      steps: [
        {
          html: `<h3>Selling is showing, clearly</h3><p>A great pitch makes the value obvious fast. Salespeople rarely have design time — which is exactly why Canva's AI is a quiet superpower for closing.</p><h3>Pitch decks with Magic Design</h3><p><strong>Magic Design for presentations</strong> can turn a prompt or an outline into a full, on-brand deck in minutes. You bring the story and the numbers; AI handles structure and layout so you can focus on the message.</p>`,
        },
        {
          html: `<h3>From outline to deck, fast</h3><p>Instead of fighting slide templates the night before a meeting, feed Magic Design your talking points and let it build a first draft. Then you refine:</p><ul><li>Tighten each slide to one idea</li><li>Drop in real data and customer logos</li><li>Apply the Brand Kit so it looks unmistakably professional</li></ul><p>The AI draft removes the blank-slide paralysis; your edits make it persuasive.</p>`,
          question: {
            text: "You have a big pitch tomorrow morning and only a rough outline. What's the most effective use of Canva AI tonight?",
            options: [
              "Manually design every slide from an empty template until 2 a.m.",
              "Generate a first-draft deck with Magic Design from your outline, then refine the story, data, and branding",
              "Show up with just the outline and wing the visuals",
            ],
            correctIndex: 1,
            explanation:
              "Magic Design beats blank-slide paralysis by producing a structured first draft fast. Your night is then spent on message and accuracy — not fighting templates from scratch.",
          },
        },
        {
          html: `<h3>One-pagers and proposals</h3><p>Not every deal needs a deck. A crisp <strong>one-pager</strong> or a clean <strong>proposal</strong> often closes faster. Use Magic Design for the layout and <strong>Magic Write</strong> to draft tight, benefit-focused copy — then trim ruthlessly.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Keep a reusable proposal template in your Brand Kit. For each prospect, swap in their name, goals, and numbers — you get a personalized document in minutes, not hours.</p></div>`,
          question: {
            text: "A prospect asks for 'a quick summary of what you'd do for us.' What lands best?",
            options: [
              "A 40-slide deck covering your entire company history",
              "A focused one-pager built from your template with their goals and numbers filled in",
              "A long email with no formatting and no visuals",
            ],
            correctIndex: 1,
            explanation:
              "A 'quick summary' calls for a tight, tailored one-pager — fast to produce from a reusable template and easy for the prospect to digest. A giant deck or wall of text works against you.",
          },
        },
        {
          html: `<h3>Personalizing outreach at scale</h3><p>Generic outreach gets ignored; fully custom outreach doesn't scale. AI bridges the gap. Build one strong base asset, then personalize the parts that matter for each prospect:</p><ul><li>Their company name and logo</li><li>Their specific pain point or goal</li><li>A metric relevant to <em>their</em> industry</li></ul><p>Magic Write can quickly tailor the copy per prospect while your template keeps the design consistent and polished.</p>`,
          question: {
            text: "You need to send tailored outreach graphics to 30 prospects this week. What's the sustainable approach?",
            options: [
              "Design 30 completely unique assets one by one",
              "Build one strong base template, then personalize the name, pain point, and a relevant metric for each prospect",
              "Send the identical generic graphic to all 30 with no personalization",
            ],
            correctIndex: 1,
            explanation:
              "A base template plus targeted personalization scales real relevance. Fully custom-designing 30 assets isn't sustainable, and identical generic sends defeat the point of outreach.",
          },
        },
        {
          html: `<h3>Interactive pieces with Canva Code</h3><p>Here's a differentiator most reps never use: <strong>Canva Code</strong> can generate small interactive widgets and mini-apps from a plain-language prompt — right inside your design. For sales, that means things like an <strong>ROI calculator</strong> a prospect can actually play with.</p><ul><li>Prompt Canva Code to build a simple ROI or savings calculator</li><li>Embed it where the prospect can enter their own numbers</li><li>Let them <em>see</em> the value, not just read your claim</li></ul><p>An interactive tool turns a passive pitch into a hands-on experience — far more convincing than a static bullet point.</p>`,
          question: {
            text: "A skeptical prospect says your product's savings claim 'sounds too good to be true.' How could Canva Code help you close?",
            options: [
              "Generate an interactive ROI calculator they can enter their own numbers into and see the result",
              "Add more exclamation points to the savings slide",
              "Tell them to just trust the number on the slide",
            ],
            correctIndex: 0,
            explanation:
              "Letting a skeptic run their own numbers through an interactive ROI calculator makes the value tangible and self-verified — far more persuasive than a static claim or louder punctuation.",
          },
        },
        {
          html: `<h3>Trust: numbers must be real</h3><p>Interactive tools and AI copy are only as good as the truth behind them. In sales, a single inflated figure can sink a deal — or a reputation.</p><ul><li>Verify every metric an AI-generated tool calculates</li><li>Never let AI invent statistics or client results</li><li>Keep claims defensible and specific</li></ul><p>AI makes your pitch <em>look</em> credible; accurate inputs are what make it <em>be</em> credible.</p>`,
          question: {
            text: "Your AI-built ROI calculator produces an impressive savings number, but you're not sure the underlying formula is right. What do you do before showing a prospect?",
            options: [
              "Show it anyway — a bigger number is more persuasive",
              "Verify the formula and inputs so the result is accurate and defensible before it reaches the prospect",
              "Hide the calculator so no one can check the math",
            ],
            correctIndex: 1,
            explanation:
              "Credibility depends on accuracy. An unverified figure can collapse under scrutiny and cost the deal — validating the math first is what makes the tool an asset rather than a liability.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey again! 👋 Let's turn Canva AI into a closing tool — decks, one-pagers, and personal touches that win people over.",
            },
            {
              bot: "You've got a pitch tomorrow morning for a local client and only a rough outline tonight.",
              ask: "What's the smartest use of Canva AI right now?",
              inputType: "choice",
              options: [
                "Hand-build every slide from a blank template until midnight",
                "Generate a first-draft deck with Magic Design from your outline, then refine the story and data",
                "Show up with just the outline and improvise the visuals",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — Magic Design beats blank-slide paralysis, so your night goes to the message, not layout.",
              hint: "What removes the blank-slide problem fastest?",
            },
            {
              bot: "Let's match each sales job to the right Canva AI tool.",
              ask: "Pair each job with its tool.",
              inputType: "match",
              pairs: [
                { left: "Full pitch deck from an outline", right: "Magic Design for presentations" },
                { left: "Tight, benefit-focused copy", right: "Magic Write" },
                { left: "Interactive ROI calculator", right: "Canva Code" },
                { left: "Consistent reusable proposal", right: "Brand Kit template" },
              ],
              feedback:
                "Perfect — each tool covers a different part of the closing toolkit.",
              hint: "Deck, copy, interactive tool, reusable template.",
            },
            {
              bot: "A prospect asks for \"a quick summary of what you'd do for us.\"",
              ask: "What lands best?",
              inputType: "choice",
              options: [
                "A 40-slide deck covering your whole company history",
                "A focused one-pager from your template with their goals and numbers filled in",
                "A long unformatted email with no visuals",
              ],
              correctIndex: 1,
              feedback:
                "Right — a tight, tailored one-pager is fast to produce and easy for them to digest.",
              hint: "They asked for 'quick' — match the format to that.",
            },
            {
              bot: "Fill in what makes a hands-on pitch convincing to a skeptic.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "Canva Code can build an interactive ___ calculator a prospect can run their own numbers through.",
              options: ["ROI", "font", "gradient"],
              correctIndex: 0,
              feedback:
                "Right — an ROI calculator lets a skeptic verify the value themselves.",
              hint: "It's the return-on-investment number that closes deals.",
            },
            {
              bot: "A rep wants to send 30 prospects the exact same generic graphic with no personalization to save time.",
              ask: "Is that a useful outreach approach?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — generic outreach gets ignored. Personalize a base template per prospect instead.",
              hint: "What happens to outreach that isn't tailored at all?",
            },
            {
              bot: "Let's order the safe way to ship an AI-built calculator. Arrange these words.",
              ask: "Tap the words to build the phrase.",
              inputType: "arrange",
              words: ["verify", "the", "numbers", "before", "you", "share"],
              feedback:
                "That's the rule: verify the numbers before you share.",
              hint: "Start with 'verify the...'",
            },
            {
              bot: "Now the trust piece. Your Canva Code ROI calculator shows a big savings number you're unsure about.",
              ask: "e.g. Describe what you do before showing a prospect",
              inputType: "text",
              keywords: ["verify", "check", "formula", "accurate", "numbers", "real", "defensible"],
              feedback:
                "Exactly right. Example: \"Verify the formula and inputs so the result is accurate and defensible before the prospect ever sees it.\" A checkable number builds trust; an inflated one can sink the deal.",
              hint: "Credibility depends on the math being correct and defensible.",
            },
            {
              bot: "Beautifully done — draft fast with Magic Design, tailor with templates and Magic Write, wow with Canva Code, and always verify. Go close that deal! 🎉",
            },
          ],
        },
        {
          html: `<h3>Course finale: your AI design edge</h3><p>You've come a long way. Across this course you learned Canva's AI toolkit — Magic Design, Magic Media, Magic Write, the Magic editing tools, Magic Switch, Brand Kit and brand voice, Dream Lab, the Canva AI assistant, and Canva Code — and then put it to work like a professional across <strong>design, marketing, and sales</strong>.</p><p>The throughline never changed: <strong>AI supplies speed and scale; your judgment supplies direction, quality, and trust.</strong> Set up your brand foundation, steer the tools with clear intent, personalize for the human on the other side, and always verify what matters.</p><p>Now go build something that looks like nobody else's — because it starts with you. 🎉</p>`,
          question: {
            text: "Looking back across design, marketing, and sales, what's the single principle that ties the whole course together?",
            options: [
              "Whoever generates the most assets automatically wins",
              "AI provides speed and scale, while your judgment provides direction, quality, and trust",
              "The newest tool always makes human input unnecessary",
            ],
            correctIndex: 1,
            explanation:
              "Every lesson reinforced it: Canva's AI accelerates the work, but your direction, taste, and integrity are what turn fast output into professional, trustworthy results.",
          },
        },
      ],
    },
  ],
};
