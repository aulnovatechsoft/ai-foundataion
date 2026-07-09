import type { UnitSeed } from "./types";

export const CANVA_UNIT_1: UnitSeed = {
  title: "Canva AI",
  lessons: [
    {
      title: "Canva AI Essentials",
      summary: "What Canva's Magic Studio is, where it fits vs standalone tools, and the right mindset",
      estimatedMinutes: 14,
      content: `<p>Canva isn't just a design app with a few AI buttons bolted on — its AI features live inside the place where you already lay out, edit, and publish. Before any single tool, the thing that decides whether Canva AI works for you is understanding what it's for: a design partner that lives where the work happens.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "Open Canva and use Magic Design (or the AI 'Create' box) to make a first draft of a social post announcing [an upcoming team event]. Describe the vibe, the key text, and the format you want, then browse the layouts it generates and pick one to refine.",
        note: "Notice that Canva drops you straight into an editable design — treat the AI's version as a starting point and tweak the text and colours to make it yours.",
      },
      steps: [
        {
          html: `<h3>AI where the work already happens</h3><p>Most AI tools give you an answer in a chat window that you then have to move somewhere useful. Canva flips that: its AI lives <strong>inside the editor</strong>, right next to your layout, your fonts, and your brand assets.</p><p>Canva groups these features under a name: <strong>Magic Studio</strong>. It's not one button — it's a collection of AI tools for designing, editing images, writing, generating video, and more, all sharing the same canvas.</p><h3>Why that matters</h3><p>Because the AI sits where you finish the work, you skip the copy-paste shuffle between a separate generator and your design. You generate an image, drop it into the layout, resize it, and publish — without ever leaving Canva.</p>`,
        },
        {
          html: `<h3>What's inside Magic Studio</h3><p>You don't need to memorize every tool yet, but here's the landscape you'll be working with:</p><ul><li><strong>Magic Design</strong> — turn a prompt or an uploaded image into full designs</li><li><strong>Magic Media</strong> — generate images and video from text</li><li><strong>Magic Write</strong> — draft and rewrite text</li><li><strong>Magic Edit, Grab, Eraser, Expand</strong> — targeted image editing</li><li><strong>Magic Animate & Magic Switch</strong> — add motion and resize across formats</li><li><strong>Canva Code</strong> — generate small interactive widgets from a prompt</li></ul><p>They connect: you might write copy, generate a matching image, animate it, then resize the whole thing for another platform — one continuous flow.</p>`,
          question: {
            text: "You've written a social post in ChatGPT and made a poster image in Midjourney, but now you need them laid out together, on-brand, and exported for three platforms. Where does Canva AI fit in that workflow?",
            options: [
              "It replaces ChatGPT and Midjourney entirely — you should never use them",
              "It's the place you assemble, edit, brand, and resize everything, with AI built into the same canvas",
              "It only works if you generate every single asset inside Canva from scratch",
            ],
            correctIndex: 1,
            explanation:
              "Canva's edge is that design, editing, branding, and export all live in one editor with AI inside it. You can bring in outside assets and still let Canva handle layout, consistency, and resizing.",
          },
        },
        {
          html: `<h3>Canva vs. standalone tools</h3><p>Tools like ChatGPT and Midjourney are powerful, but they're built around a single job. Canva's AI is built around <strong>finishing a design</strong>.</p><ul><li><strong>Midjourney</strong> — specializes in striking, highly controllable image generation, but you still have to place the result in a layout somewhere else.</li><li><strong>ChatGPT</strong> — excels at open-ended writing and reasoning, but doesn't lay your words into a branded template.</li><li><strong>Canva AI</strong> — generates <em>and</em> assembles, so the output is a usable design, not just a raw asset.</li></ul><p>None is simply "better." They're tuned for different moments in the same project.</p>`,
          question: {
            text: "You need one truly one-of-a-kind, art-directed hero image with very specific styling — and layout isn't the concern yet. Which tool is the natural first stop?",
            options: [
              "Canva, because it's the only tool that can make images",
              "A dedicated image generator like Midjourney, then bring the result into Canva to lay out",
              "Neither — AI can't make images with a specific style",
            ],
            correctIndex: 1,
            explanation:
              "For a single, highly art-directed image, a specialist generator gives you more control. Canva shines once you need to place, brand, and adapt that image into finished designs.",
          },
        },
        {
          html: `<h3>The assistant that ties it together</h3><p>Canva also offers an <strong>AI assistant</strong> — a chat-style helper you can ask in plain language. Instead of hunting for the right button, you describe what you want ("make me a birthday invite," "shorten this caption," "remove the background") and it points you to the right Magic Studio tool or does it for you.</p><p>Think of it as a guide to everything above. You don't have to know the exact feature name to get started — you describe the outcome, and the assistant helps you get there.</p>`,
          question: {
            text: "You're new to Canva and want to turn a photo into a poster but have no idea which tool does that. What's the fastest path?",
            options: [
              "Give up until you've memorized every Magic Studio tool by name",
              "Describe what you want to the Canva AI assistant in plain language and let it route you",
              "Manually try every button until something works",
            ],
            correctIndex: 1,
            explanation:
              "The assistant exists precisely so you don't need the exact feature name. Describe the outcome and it points you to the right tool — a friendlier entry point than trial and error.",
          },
        },
        {
          html: `<h3>Credits and plans</h3><p>Many AI generations in Canva run on a <strong>usage allowance</strong> — often described in terms of credits or limits that refresh over time. Your plan sets how much AI you can use, which advanced features you can reach, and how often the allowance resets.</p><p>Heavier generations — like video or large batches of images — typically consume more of your allowance than a quick text rewrite. Exact limits change over time, so check your account for what applies to you.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Rough out ideas with cheaper actions first — a quick text draft or a low-effort image — to lock your direction before spending allowance on the heavier video or high-detail generations.</p></div>`,
          question: {
            text: "You want to produce a polished promo video but aren't sure of the concept yet. What's the smartest use of your AI allowance?",
            options: [
              "Generate several full high-quality videos immediately and pick one",
              "Sketch the concept cheaply first — draft text and a still image — then spend allowance on the final video",
              "Avoid AI entirely so you never use any allowance",
            ],
            correctIndex: 1,
            explanation:
              "Video is one of the heavier generations. Nail the concept with low-cost steps first, then invest your allowance in the version you actually want to keep.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey, I'm Nova 👋 Let's get you comfortable with what Magic Studio is and where it fits in your everyday designs. Ready?",
            },
            {
              bot: "You want to make a birthday invite, a flyer for your side hustle, and an Instagram post — all on-brand. Where does Canva AI shine for this?",
              ask: "What's Canva AI best at here?",
              inputType: "choice",
              options: [
                "Only generating one raw image with no layout",
                "Generating and assembling everything in one editor, so you finish designs without leaving Canva",
                "Replacing every other app so you never use anything else",
              ],
              correctIndex: 1,
              feedback:
                "Exactly. Canva's edge is that the AI lives inside the editor — you generate, lay out, brand, and export in one flow.",
              hint: "Think about what makes Canva different from a chat window that just hands you an answer.",
            },
            {
              bot: "Quick fill-in to lock the name of Canva's AI collection.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "Canva groups its AI design tools under one name: ___.",
              options: ["Magic Studio", "Design Lab", "Auto Maker"],
              correctIndex: 0,
              feedback:
                "Right — Magic Studio is the umbrella name for Canva's whole AI toolkit.",
              hint: "It's the 'Magic' family of tools, gathered in one place.",
            },
            {
              bot: "Let's match each Magic Studio tool to the job it does.",
              ask: "Pair each tool with its purpose.",
              inputType: "match",
              pairs: [
                { left: "Magic Media", right: "Generate images and video from text" },
                { left: "Magic Write", right: "Draft and rewrite copy" },
                { left: "Magic Edit", right: "Change part of an image" },
                { left: "Canva Code", right: "Build small interactive widgets" },
              ],
              feedback:
                "Nailed it. Each tool has a clear specialty, and they all share the same canvas.",
              hint: "Think about whether each tool makes media, writes words, edits photos, or builds interactivity.",
            },
            {
              bot: "A friend insists on memorizing every Magic Studio tool name before making a single design.",
              ask: "Is that a useful approach for a beginner?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — you don't need the tool names. Describe the outcome to the Canva AI assistant and it routes you.",
              hint: "Remember how the assistant lets you skip the exact feature name.",
            },
            {
              bot: "You're brand new and want to turn a holiday photo into a poster, but you have no idea which Magic Studio tool does that.",
              ask: "What's the fastest way in?",
              inputType: "choice",
              options: [
                "Memorize every tool name before you start",
                "Describe what you want to the Canva AI assistant in plain language and let it route you",
                "Click every button randomly until something happens",
              ],
              correctIndex: 1,
              feedback:
                "Right — the assistant exists so you don't need the exact feature name. Just describe the outcome.",
              hint: "You don't have to know the tool's name — you just describe the result.",
            },
            {
              bot: "Let's put the core mindset into words. Arrange these into the right order.",
              ask: "Tap the words to build the sentence.",
              inputType: "arrange",
              words: ["AI", "gives", "a", "fast", "draft", "you", "refine"],
              feedback:
                "That's the whole philosophy: AI gives a fast draft you refine.",
              hint: "Start with 'AI gives a fast...'",
            },
            {
              bot: "Let's plan smart. You want a polished promo video for your Etsy shop but you're not sure of the concept yet, and video eats more of your AI allowance.",
              ask: "e.g. Describe a low-cost way to lock the concept before spending allowance on video",
              inputType: "text",
              keywords: ["draft", "text", "image", "cheap", "concept", "first", "video", "allowance"],
              feedback:
                "Nice thinking. A strong plan: \"First draft the caption with Magic Write and generate one still image to nail the look, then spend my video allowance on the final clip once I'm happy.\" Cheap steps first, heavy generation last.",
              hint: "Sketch the idea with text and a still image before generating the expensive video.",
            },
            {
              bot: "You've got it. Magic Studio is a design partner that lives where the work happens — generate fast, then make it yours. See you in the next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>The mindset that matters</h3><p>The single biggest factor in your results isn't which button you press — it's how you treat the tool. Canva AI works best as a <strong>design partner, not a replacement</strong> for your judgment.</p><p>It's fast at first drafts, variations, and tedious edits. You still decide what's on-brand, what's clear, and what's actually good. The strongest users generate options quickly, then edit with a critical eye.</p><h3>Where you're headed</h3><p>Now that you know what Magic Studio is, where it fits, and how to think about it, it's time to get hands-on. Next up: <strong>The Design Feature</strong> — turning prompts and rough ideas into finished, on-brand designs.</p>`,
          question: {
            text: "Magic Design hands you a layout that's 80% right but a little off-brand. What's the partner mindset move?",
            options: [
              "Publish it as-is — whatever the AI made must be correct",
              "Treat it as a strong first draft and edit it to match your brand and message",
              "Throw it out and design everything manually from a blank page",
            ],
            correctIndex: 1,
            explanation:
              "AI is great at fast starting points; you own the final call. Refining an 80%-there draft beats both blind acceptance and throwing away useful work.",
          },
        },
      ],
    },
    {
      title: "The Design Feature",
      summary: "Turn prompts and rough assets into finished, on-brand designs with Magic Design and Magic editing tools",
      estimatedMinutes: 14,
      content: `<p>A blank canvas is the hardest part of any design. Canva's design AI removes it: describe what you need, and you get real layouts to react to — then sharpen them with targeted editing tools until they're right.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "Use Magic Design to generate a one-page flyer for [a workshop I'm running]. Describe the title, date, audience, and mood, then pick a layout and use Canva's editing tools — swap an image, adjust the colours to match my brand, and tidy the text hierarchy so the title stands out.",
        note: "Start from a generated layout rather than a blank page, then make a few targeted edits — that's faster than designing from scratch.",
      },
      steps: [
        {
          html: `<h3>From prompt to layout</h3><p><strong>Magic Design</strong> turns a plain-language description — or an image you upload — into complete, editable designs. Instead of starting from an empty page, you start from options.</p><p>Ask for "an Instagram post announcing a weekend coffee sale, warm and cozy," and you'll get several laid-out drafts with images, headings, and colors already placed. Each one is fully editable — a starting point, not a locked result.</p><h3>Templates still matter</h3><p>Magic Design draws on Canva's huge library of <strong>templates</strong>. You can also browse templates directly and let AI help you fill and adapt them. Templates give you proven structure; AI helps you make one yours quickly.</p>`,
          question: {
            text: "You freeze up every time you open a blank design. How does Magic Design help you get unstuck fastest?",
            options: [
              "It designs the final version so you never have to touch it",
              "It generates several editable layouts from your description, so you react and refine instead of starting from nothing",
              "It only works if you already have a finished design to copy",
            ],
            correctIndex: 1,
            explanation:
              "The value is beating the blank page. You get real, editable drafts to react to — far easier than inventing structure from scratch.",
          },
        },
        {
          html: `<h3>Editing images without leaving the canvas</h3><p>Once a design is placed, Canva's <strong>Magic</strong> image tools let you fix and reshape photos right there:</p><ul><li><strong>Magic Edit</strong> — brush over part of an image and describe a change to replace or add something</li><li><strong>Magic Eraser</strong> — remove unwanted objects cleanly</li><li><strong>Magic Grab</strong> — separate a subject from its background so you can move or resize it independently</li><li><strong>Magic Expand</strong> — extend an image beyond its original edges to fit a new frame</li></ul><p>Each targets a different problem, so the trick is matching the tool to what's actually wrong with the image.</p>`,
          question: {
            text: "Your photo is perfect except for a stray trash can in the corner you want gone. Which tool fits best?",
            options: [
              "Magic Expand — to add more space around the trash can",
              "Magic Eraser — to remove the unwanted object cleanly",
              "Magic Grab — to lift the trash can and keep it",
            ],
            correctIndex: 1,
            explanation:
              "Removing an unwanted object is exactly Magic Eraser's job. Expand adds canvas, and Grab isolates a subject you want to keep — neither removes clutter.",
          },
        },
        {
          html: `<h3>Reframing with Magic Expand and Grab</h3><p>Two tools shine when the composition — not the content — is the problem.</p><p><strong>Magic Expand</strong> is your friend when an image is too tight for the space: a portrait-shaped photo that needs to become a wide banner, for instance. It generates believable surroundings beyond the original edges.</p><p><strong>Magic Grab</strong> lets you pull the subject out and reposition it — move a person left to make room for a headline, or resize them relative to the background.</p>`,
          question: {
            text: "You have a tall phone photo, but you need a wide banner and the current image leaves empty gaps on the sides. What's the right move?",
            options: [
              "Magic Eraser to delete the gaps",
              "Magic Expand to extend the image naturally into the wider frame",
              "Just stretch the photo until it fits",
            ],
            correctIndex: 1,
            explanation:
              "Magic Expand fills the new width with believable surroundings, unlike stretching (which distorts) or erasing (which doesn't add anything).",
          },
        },
        {
          html: `<h3>The background remover</h3><p>One of the most-used tools: the <strong>background remover</strong> strips the backdrop from a photo in a click, leaving a clean cut-out subject. It's perfect for product shots, headshots, and layering an image onto a colored or branded background.</p><p>It pairs naturally with the rest of the toolkit — remove a background, drop the subject onto a Magic Design layout, and you've got a polished composition in seconds.</p>`,
          question: {
            text: "You need a product photo to sit cleanly on your brand's solid teal background instead of the messy desk it was shot on. Best first step?",
            options: [
              "Use the background remover to isolate the product, then place it on the teal background",
              "Use Magic Write to describe the product instead",
              "Magic Expand to add more desk around it",
            ],
            correctIndex: 0,
            explanation:
              "Removing the background gives you a clean cut-out you can layer onto any backdrop — exactly what a branded product shot needs.",
          },
        },
        {
          html: `<h3>One design, every size</h3><p>You rarely need just one size. <strong>Magic Switch</strong> (Canva's resize and transform feature) takes a finished design and adapts it into other formats — a post becomes a story, a flyer, a banner — reflowing the layout to fit each shape.</p><p>This saves the tedium of rebuilding the same idea five times. You design once, then let Canva generate the variations, and tidy up anything the reflow didn't nail.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Design your most constrained format first (often the smallest or squarest). Expanding a tight layout into roomier ones usually reflows more cleanly than the reverse.</p></div>`,
          question: {
            text: "You've finished a square Instagram post and now need a vertical story and a wide banner of the same campaign. What's the efficient path?",
            options: [
              "Rebuild each size manually from a blank canvas",
              "Use Magic Switch to resize the design into the new formats, then tidy the reflow",
              "Just stretch the square until it fills each new shape",
            ],
            correctIndex: 1,
            explanation:
              "Magic Switch reflows one design into many formats, saving you from rebuilding. A quick manual tidy handles anything the automatic reflow missed.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey again, it's Nova 👋 Let's practice turning rough ideas into finished, on-brand designs with Magic Design and the editing tools. Ready to design?",
            },
            {
              bot: "You freeze up every time you open a blank canvas for your side-hustle Instagram posts.",
              ask: "How does Magic Design get you unstuck fastest?",
              inputType: "choice",
              options: [
                "It designs the final post so you never touch it again",
                "It generates several editable layouts from your description, so you react and refine instead of starting from nothing",
                "It only works if you already have a finished design to copy",
              ],
              correctIndex: 1,
              feedback:
                "Exactly. Describe the post in the prompt field and you get real, editable drafts to react to — way easier than a blank page.",
              hint: "The win is beating the blank canvas with options you can edit.",
            },
            {
              bot: "Let's match each editing problem to the right Magic tool.",
              ask: "Pair each problem with its tool.",
              inputType: "match",
              pairs: [
                { left: "Stray trash can in the shot", right: "Magic Eraser" },
                { left: "Photo too narrow for a banner", right: "Magic Expand" },
                { left: "Move the subject aside", right: "Magic Grab" },
                { left: "Swap one object for another", right: "Magic Edit" },
              ],
              feedback:
                "Perfect. Each tool targets a different problem — the trick is matching them.",
              hint: "Think: remove, extend, reposition, or replace.",
            },
            {
              bot: "You shot a product photo for your Etsy shop on a messy desk, but you need it on your brand's solid teal background.",
              ask: "What's the best first step?",
              inputType: "choice",
              options: [
                "Use Magic Expand to add more desk around it",
                "Use the background remover to isolate the product, then place it on the teal background",
                "Use Magic Write to describe the product instead",
              ],
              correctIndex: 1,
              feedback:
                "Right — the background remover gives you a clean cut-out you can layer onto any branded backdrop.",
              hint: "You need the product free of its messy background first.",
            },
            {
              bot: "Fill in the tool that grows an image beyond its edges.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "To turn a tall photo into a wide banner, use ___ to extend it naturally.",
              options: ["Magic Expand", "Magic Eraser", "Magic Grab"],
              correctIndex: 0,
              feedback:
                "Exactly — Magic Expand fills the new width with believable surroundings.",
              hint: "Which tool extends an image past its original frame?",
            },
            {
              bot: "Someone suggests just stretching a square photo until it fills a wide banner.",
              ask: "Is stretching a useful fix here?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — stretching distorts everything. Magic Expand adds real width without warping faces.",
              hint: "Think about what stretching does to people's faces.",
            },
            {
              bot: "Let's phrase the smart resize habit. Arrange these words.",
              ask: "Tap the words to build the sentence.",
              inputType: "arrange",
              words: ["design", "the", "smallest", "format", "first"],
              feedback:
                "That's the pro tip: design the smallest format first, then expand outward.",
              hint: "Start with 'design the...'",
            },
            {
              bot: "Every Magic Design draft for your flyers comes back with random colors and fonts, and you keep fixing them by hand.",
              ask: "e.g. Describe the root-cause fix",
              inputType: "text",
              keywords: ["brand", "kit", "colors", "fonts", "logo", "setup", "consistent"],
              feedback:
                "That's the upstream fix. A good answer: \"Set up my Brand Kit with my colors, fonts, and logo so generated designs start on-brand and I stop recoloring everything.\"",
              hint: "There's a Canva feature that stores your colors, fonts, and logo in one place.",
            },
            {
              bot: "Beautiful. Prompt for layouts, edit with the Magic tools, remove backgrounds, expand to fit, and lean on your Brand Kit. See you in the next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>Staying on-brand</h3><p>Consistency is what makes design look professional, and Canva's <strong>Brand Kit</strong> stores your colors, fonts, and logos in one place. Many AI and template tools can pull from it, so generated designs come out already leaning on your brand instead of random defaults.</p><p>Set your Brand Kit up once, and Magic Design and resizing become far more useful: the drafts arrive closer to on-brand, and you spend less time recoloring and swapping fonts.</p><h3>Where you're headed</h3><p>You can now go from prompt to polished, on-brand, multi-format design. Next up: <strong>Video and Motion Generation</strong> — bringing those static designs to life with Magic Media and Magic Animate.</p>`,
          question: {
            text: "Every Magic Design draft comes back with generic colors and fonts, and you keep manually fixing them. What's the root-cause fix?",
            options: [
              "Stop using Magic Design entirely",
              "Set up your Brand Kit so generated designs draw from your colors, fonts, and logo",
              "Recolor every single design by hand every time — there's no other option",
            ],
            correctIndex: 1,
            explanation:
              "A configured Brand Kit lets AI and templates start from your brand, cutting repetitive recoloring. It's the upstream fix for constant manual branding.",
          },
        },
      ],
    },
    {
      title: "Video and Motion Generation",
      summary: "Bring designs to life with Magic Media text-to-video, Magic Animate, and transitions",
      estimatedMinutes: 13,
      content: `<p>Motion grabs attention that a still image can't. Canva lets you both generate video from a description and add movement to designs you already have — without opening a separate video editor.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "In Canva, create a short vertical video promoting [my product or event]. Try generating a clip from a description, then add subtle motion and an animated text overlay with the key message, and finish with a call-to-action frame. Keep it under 15 seconds for social.",
        note: "Preview it with sound off first — most viewers watch muted, so make sure the on-screen text carries the message.",
      },
      steps: [
        {
          html: `<h3>Two paths to motion</h3><p>There are two very different ways to get video in Canva, and knowing which you need saves time:</p><ul><li><strong>Generate from scratch</strong> — <strong>Magic Media</strong> can turn a text prompt into a short video clip, conjuring footage that doesn't exist yet.</li><li><strong>Animate what you have</strong> — <strong>Magic Animate</strong> adds movement to your existing design elements, turning a static layout into a moving one.</li></ul><p>One invents new footage; the other breathes motion into your current design. Choosing the right path is the first decision.</p>`,
          question: {
            text: "You already have a finished, on-brand poster and just want the text and elements to move for a social clip. Which path fits?",
            options: [
              "Magic Media text-to-video — to generate brand-new footage of the poster",
              "Magic Animate — to add motion to your existing design elements",
              "Neither — Canva can't animate an existing design",
            ],
            correctIndex: 1,
            explanation:
              "You don't need new footage; you need your existing design to move. Magic Animate adds motion to what you already built, keeping it on-brand.",
          },
        },
        {
          html: `<h3>Text-to-video with Magic Media</h3><p><strong>Magic Media</strong> generates short video clips from a written description — the same tool you use for text-to-image, switched to video. Describe a scene and you get a brief clip you can drop into your design.</p><p>Like any generative video, the results are best when your prompt names the <strong>subject, setting, and motion</strong>: "a slow overhead shot of coffee being poured into a white mug on a wooden table" beats "coffee video."</p>`,
          question: {
            text: "You want an establishing shot of gentle ocean waves at sunset, and you have no footage of it. What's the fit, and how should you prompt?",
            options: [
              "Magic Animate — to animate a still you don't have",
              "Magic Media text-to-video, with a prompt naming the subject, setting, and motion",
              "Background remover — to isolate the waves",
            ],
            correctIndex: 1,
            explanation:
              "When you need footage that doesn't exist, text-to-video generates it — and a descriptive prompt naming scene and motion produces far more usable clips.",
          },
        },
        {
          html: `<h3>Animate your design</h3><p><strong>Magic Animate</strong> takes the elements already on your canvas — text, photos, shapes — and applies coordinated motion, so a static post becomes an animated one with a click. You can then fine-tune which elements move and how.</p><p>This is often the highest-impact, lowest-effort upgrade: the same design, now moving, tends to stop the scroll better than its still version.</p>`,
          question: {
            text: "Your still promo performs okay, but you want more attention on the feed without redesigning it. Lowest-effort improvement?",
            options: [
              "Delete it and generate a totally new video with Magic Media",
              "Apply Magic Animate to add motion to the existing design",
              "Add more text so there's more to read",
            ],
            correctIndex: 1,
            explanation:
              "Animating an existing design is fast and keeps everything on-brand, while generally out-performing the static version — a high-impact, low-effort win.",
          },
        },
        {
          html: `<h3>Transitions between scenes</h3><p>When your video has multiple pages or clips, <strong>transitions</strong> control how one moves into the next — a smooth dissolve, a slide, a wipe. They're what make a series of frames feel like a single flowing video rather than a slideshow.</p><p>The rule of thumb: match the transition to the mood. Calm, elegant content wants soft dissolves; energetic content can handle snappier cuts and slides.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Consistency reads as polish. Reusing one or two transition styles across a video looks more intentional than a different flashy effect on every scene.</p></div>`,
          question: {
            text: "You're editing a calm, luxury spa promo with several scenes, and each currently uses a different flashy transition. What improves it?",
            options: [
              "Add even more varied transitions for excitement",
              "Use one or two soft, consistent transitions that match the calm mood",
              "Remove all transitions so scenes cut abruptly",
            ],
            correctIndex: 1,
            explanation:
              "Calm content wants soft, consistent transitions. A different flashy effect per scene fights the mood and reads as less polished.",
          },
        },
        {
          html: `<h3>Great for short social clips</h3><p>Canva's video AI is aimed squarely at <strong>short-form content</strong> — social posts, stories, reels, quick promos. That's its sweet spot: attention-grabbing clips measured in seconds, not full documentaries.</p><p>Combine the pieces and a workflow appears: generate or place footage, animate your text and elements over it, add transitions, then use Magic Switch to output the right size for each platform.</p>`,
          question: {
            text: "A client asks for a punchy 15-second product teaser for Instagram Stories. Is this a good fit for Canva's video AI?",
            options: [
              "No — Canva video AI only works for hour-long films",
              "Yes — short social clips are exactly its sweet spot; generate/animate, add transitions, and resize for the platform",
              "No — you must edit short videos in a professional editor first",
            ],
            correctIndex: 1,
            explanation:
              "Short-form social content is precisely what Canva's video tools are built for, and the full pipeline (generate, animate, transition, resize) lives in one place.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey, Nova here 👋 Let's practice bringing designs to life with Magic Media video and Magic Animate. Ready to add some motion?",
            },
            {
              bot: "You already have a finished, on-brand poster for your family reunion and just want the text and elements to move for a social clip.",
              ask: "Which path fits?",
              inputType: "choice",
              options: [
                "Magic Media text-to-video — to generate brand-new footage of the poster",
                "Magic Animate — to add motion to your existing design elements",
                "Neither — Canva can't animate an existing design",
              ],
              correctIndex: 1,
              feedback:
                "Exactly. You don't need new footage; Magic Animate makes what you already built move, keeping it on-brand.",
              hint: "Do you need brand-new footage, or should your current design move?",
            },
            {
              bot: "Let's match each motion job to the right path.",
              ask: "Pair each need with the tool.",
              inputType: "match",
              pairs: [
                { left: "Footage that doesn't exist yet", right: "Magic Media text-to-video" },
                { left: "Make an existing design move", right: "Magic Animate" },
                { left: "Blend one scene into the next", right: "Transitions" },
                { left: "Output for every platform size", right: "Magic Switch" },
              ],
              feedback:
                "Perfect — generate, animate, transition, resize: the whole video pipeline in one place.",
              hint: "Think generate vs. animate vs. blend vs. resize.",
            },
            {
              bot: "Fill in the tool for a low-effort scroll-stopper.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "To make an existing still design move without redesigning it, use ___.",
              options: ["Magic Animate", "Magic Media", "Background remover"],
              correctIndex: 0,
              feedback:
                "Right — Magic Animate adds motion to what you already built.",
              hint: "You're animating, not generating new footage.",
            },
            {
              bot: "Someone wants a full one-hour documentary produced entirely with Canva's video AI.",
              ask: "Is Canva's video AI a useful fit for that?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — Canva video AI is built for short-form social clips, not hour-long films.",
              hint: "Remember its sweet spot: clips measured in seconds.",
            },
            {
              bot: "Let's phrase what makes a strong video prompt. Arrange the words.",
              ask: "Tap the words to build the phrase.",
              inputType: "arrange",
              words: ["name", "the", "subject", "setting", "and", "motion"],
              feedback:
                "That's the recipe: name the subject, setting, and motion.",
              hint: "Start with 'name the...'",
            },
            {
              bot: "Now let's actually generate a clip, Magic Media style. 🎬 Complete the prompt below — pick a subject and an action.",
              ask: "Fill both gaps, then hit Check to generate your first video.",
              inputType: "fill-blank",
              template: "Create a video of ___ ___.",
              options: ["a cat", "eating at home", "the concept of hunger", "photosynthesis"],
              gapAnswers: ["a cat", "eating at home"],
              feedback:
                "Perfect prompt — a concrete subject doing a visible action. Sending it to the generator…",
              hint: "Video AI needs something concrete it can show: a subject you can see, doing an action you can film.",
              video: {
                url: "/lesson-media/cat_eating_at_home.mp4",
                caption: "Here's what you got: a short clip generated straight from your prompt.",
              },
            },
            {
              bot: "Nice, right? Now let's level it up. The same scene changes completely when you add style, shot framing, and lighting.",
              ask: "Complete the upgraded prompt — pick the framing and the lighting.",
              inputType: "fill-blank",
              template: "Create a cinematic video of a cat eating at home, ___ shot, ___ lighting.",
              options: ["close-up", "golden hour", "blurry random", "pitch black"],
              gapAnswers: ["close-up", "golden hour"],
              feedback:
                "That's a director's prompt — framing plus lighting. Generating the upgraded clip…",
              hint: "You want to see the cat clearly, in warm flattering light.",
              video: {
                url: "/lesson-media/cat_eating_cinematic.mp4",
                caption: "Same subject and action — but the style words transformed the whole mood.",
              },
            },
            {
              bot: "You want an establishing shot of gentle ocean waves at sunset for a travel reel, but you have no footage of it.",
              ask: "e.g. Describe the tool and a good prompt to use",
              inputType: "text",
              keywords: ["media", "text", "video", "subject", "setting", "motion", "prompt"],
              feedback:
                "Nice. A strong answer: \"Use Magic Media text-to-video with a prompt naming the subject, setting, and motion — like 'a slow, gentle shot of ocean waves rolling in at sunset.'\" Descriptive prompts give far more usable clips.",
              hint: "When footage doesn't exist, generate it — and name the scene and the movement.",
            },
            {
              bot: "You're editing a calm event video for a spa opening, and each scene currently uses a different flashy transition.",
              ask: "e.g. Describe how you'd improve the transitions",
              inputType: "text",
              keywords: ["consistent", "soft", "transition", "match", "mood", "calm", "one"],
              feedback:
                "That's it. A good answer: \"Use one or two soft, consistent transitions that match the calm mood, instead of a different flashy effect on every scene.\" Consistency reads as polish.",
              hint: "Match the transition to the mood, and reuse one or two styles.",
            },
            {
              bot: "Great work. Generate footage or animate what you have, add consistent transitions, then resize for each platform. See you in the next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>Know the limitations</h3><p>Generative video is impressive but not flawless. Set expectations up front:</p><ul><li><strong>Clips are short</strong> — you're working in seconds, and stitching pieces together</li><li><strong>Not every generation is usable</strong> — expect to iterate, and watch for odd artifacts</li><li><strong>Fine detail can drift</strong> — faces, hands, and text within generated footage may need a second look</li></ul><p>Treat each generation like a take: run a few, keep the best, and lean on your own footage or stills when precision really matters.</p><h3>Where you're headed</h3><p>You can now generate, animate, and assemble short video. Next up: <strong>the Writing Tool</strong> — using Magic Write to draft the words that carry all of this content.</p>`,
          question: {
            text: "Your generated clip looks great except a hand in the footage looks slightly warped. What's the realistic response?",
            options: [
              "Conclude Canva video is useless and abandon the project",
              "Treat it as one take — re-run, tweak the prompt, or swap in real footage for that shot",
              "Publish it as-is since re-running is pointless",
            ],
            correctIndex: 1,
            explanation:
              "Artifacts like warped hands are a known limitation. Iterating or substituting real footage for the tricky shot is the normal, effective workflow.",
          },
        },
      ],
    },
    {
      title: "Writing Tool",
      summary: "Draft, rewrite, and adapt copy inside your designs with Magic Write",
      estimatedMinutes: 13,
      content: `<p>Every design needs words, and staring at an empty text box is its own kind of blank page. Magic Write puts a capable writing assistant right inside the canvas, so your copy and your design come together in one place.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "In a Canva design, use Magic Write to draft the copy for a promotional Instagram post about [my product or service]: a punchy headline, two short benefit lines, and a call to action. Then ask it to give me three alternative headlines in a friendlier tone.",
        note: "Magic Write gives you a fast first draft — trim and sharpen it so it sounds like you, not generic ad copy.",
      },
      steps: [
        {
          html: `<h3>Meet Magic Write</h3><p><strong>Magic Write</strong> is Canva's AI writing assistant. It lives inside the editor and in docs, so you can generate and edit text exactly where it will appear — no bouncing to a separate app and pasting back.</p><p>Give it a short instruction and it produces a draft: a caption, a headline, body copy, a list of ideas. You then shape that draft into something that fits your design and your voice.</p>`,
          question: {
            text: "You need a caption for the social post you're currently designing. Why use Magic Write instead of a separate chat tool?",
            options: [
              "It writes better English than any other tool, always",
              "It drafts the text right inside the design, so you write and place copy in one flow",
              "It's the only way to add text to a Canva design at all",
            ],
            correctIndex: 1,
            explanation:
              "The advantage is context and flow: Magic Write drafts where the words will live, so you skip the copy-paste round trip. You can still type text manually too.",
          },
        },
        {
          html: `<h3>Drafts, rewrites, and length</h3><p>Magic Write does more than first drafts. Highlight existing text and you can ask it to:</p><ul><li><strong>Rewrite</strong> — say the same thing differently</li><li><strong>Summarize</strong> — tighten a long paragraph into its essence</li><li><strong>Expand</strong> — flesh out a thin line into fuller copy</li></ul><p>So it works both directions: turn a bullet into a paragraph, or squeeze a wall of text into a punchy caption.</p>`,
          question: {
            text: "You have a detailed three-paragraph product description, but the design only has room for a one-line caption. Best move?",
            options: [
              "Expand the description into even more text",
              "Ask Magic Write to summarize it into a short, punchy caption",
              "Paste all three paragraphs and shrink the font until it fits",
            ],
            correctIndex: 1,
            explanation:
              "Summarize is built for exactly this — distilling long copy into its essence so it fits a tight space, rather than cramming or expanding.",
          },
        },
        {
          html: `<h3>Tone and brand voice</h3><p>The same message can sound formal, playful, or urgent — and Magic Write can shift the <strong>tone</strong> on request. Ask for "more professional" or "warmer and more casual" and it re-voices the text.</p><p>Canva also supports a <strong>brand voice</strong>: define how your brand should sound once, and writing can lean toward that consistent style. That keeps a scrappy startup voice from accidentally reading like a stiff legal notice across your designs.</p>`,
          question: {
            text: "Your brand is playful and friendly, but the AI draft reads stiff and corporate. What's the fix?",
            options: [
              "Rewrite it word by word yourself, since AI can't change tone",
              "Ask Magic Write for a warmer, more casual tone — and set a brand voice so future drafts match",
              "Accept the stiff version; tone doesn't matter",
            ],
            correctIndex: 1,
            explanation:
              "Tone is adjustable on request, and a defined brand voice keeps future drafts consistent — the upstream fix for repeatedly re-toning copy.",
          },
        },
        {
          html: `<h3>Writing inside designs</h3><p>Where Magic Write really pays off is generating the <em>parts</em> of a design: a punchy <strong>headline</strong>, a <strong>subheading</strong>, a <strong>call to action</strong>, or a set of <strong>caption options</strong> to choose from.</p><p>Because it's inside the canvas, you can generate three headline options, see them in your actual layout, and pick the one that fits the space and the design — not just the one that reads best in isolation.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Ask for several variations at once ("give me 5 headline options, each under 6 words"). Seeing options in the real layout beats agonizing over a single line in your head.</p></div>`,
          question: {
            text: "You need a headline that fits a narrow banner and packs a punch. What's the smartest way to use Magic Write?",
            options: [
              "Ask for one long headline and trim it down later",
              "Ask for several short options with a length limit, then pick the one that fits the layout",
              "Write nothing and leave the banner empty",
            ],
            correctIndex: 1,
            explanation:
              "Requesting several constrained options lets you compare real fits in the actual layout — far more effective than forcing one long line to work.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey, it's Nova 👋 Let's practice writing the words inside your designs with Magic Write. Ready to draft?",
            },
            {
              bot: "You've got a detailed three-paragraph description for your Etsy listing, but the design only has room for a one-line caption.",
              ask: "What's the best move?",
              inputType: "choice",
              options: [
                "Expand the description into even more text",
                "Ask Magic Write to summarize it into a short, punchy caption",
                "Paste all three paragraphs and shrink the font until it fits",
              ],
              correctIndex: 1,
              feedback:
                "Exactly. Summarize distills long copy into a caption that fits the tight space, instead of cramming it in.",
              hint: "You need less text, not smaller text.",
            },
            {
              bot: "Let's match each Magic Write action to what it does.",
              ask: "Pair each action with its result.",
              inputType: "match",
              pairs: [
                { left: "Rewrite", right: "Say the same thing differently" },
                { left: "Summarize", right: "Tighten long copy into its essence" },
                { left: "Expand", right: "Flesh out a thin line" },
                { left: "Change tone", right: "Make it warmer or more formal" },
              ],
              feedback:
                "Perfect — Magic Write works in both directions and can re-voice on request.",
              hint: "Think shorter, longer, reworded, or re-toned.",
            },
            {
              bot: "Fill in the action that shrinks long copy to fit a tight caption.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "To fit three paragraphs into one line, ask Magic Write to ___ the text.",
              options: ["summarize", "expand", "translate"],
              correctIndex: 0,
              feedback:
                "Right — summarize distills long copy into its essence.",
              hint: "You want less text, not more.",
            },
            {
              bot: "Your side hustle's brand is playful and friendly, but the Magic Write draft for your flyer reads stiff and corporate.",
              ask: "What's the fix?",
              inputType: "choice",
              options: [
                "Rewrite it word by word yourself, since AI can't change tone",
                "Ask Magic Write for a warmer, more casual tone — and set a brand voice so future drafts match",
                "Accept the stiff version; tone doesn't matter",
              ],
              correctIndex: 1,
              feedback:
                "Right — tone is adjustable on request, and a defined brand voice keeps future drafts consistent.",
              hint: "You can re-voice the draft now, and prevent the problem going forward.",
            },
            {
              bot: "Magic Write hands you a slick caption for your coffee-shop sale, but it claims '50% off' when the sale is actually 25% off. A friend says publish it since the AI 'must know.'",
              ask: "Is publishing it as-is a useful move?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — AI can invent details. Fact-checking the draft is on you before it goes out.",
              hint: "Who's responsible for the accuracy of AI copy?",
            },
            {
              bot: "Let's phrase the smart way to ask for a headline. Arrange the words.",
              ask: "Tap the words to build the phrase.",
              inputType: "arrange",
              words: ["ask", "for", "several", "short", "options"],
              feedback:
                "That's it: ask for several short options, then pick the best fit.",
              hint: "Start with 'ask for...'",
            },
            {
              bot: "You need a headline for a narrow birthday-invite banner, and you want it to actually fit and pack a punch.",
              ask: "e.g. Write the Magic Write instruction you'd give",
              inputType: "text",
              keywords: ["several", "options", "short", "under", "words", "headline", "layout"],
              feedback:
                "Nice. A strong instruction: \"Give me 5 short headline options, each under 6 words, for a kid's birthday invite — then I'll pick the one that fits the banner.\" Comparing options in the real layout beats forcing one line.",
              hint: "Ask for several options with a length limit, then choose the best fit.",
            },
            {
              bot: "Beautiful. Draft, rewrite, re-tone, and generate options with Magic Write — then edit with your own judgment. See you in the next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>Prompting tips</h3><p>Magic Write rewards a clear brief, just like any AI. The strongest instructions name:</p><ul><li><strong>What</strong> — the type of text (caption, headline, email intro)</li><li><strong>Who</strong> — the audience</li><li><strong>Tone</strong> — professional, playful, urgent</li><li><strong>Constraints</strong> — length, keywords to include, things to avoid</li></ul><p>"Write a caption" gives a generic line. "Write a warm, under-15-word caption for a weekend coffee sale aimed at local regulars" gives you something you can almost use as-is.</p>`,
          question: {
            text: "Two prompts: (A) 'Write a caption.' (B) 'Write a warm, under-15-word caption for a weekend coffee sale aimed at local regulars.' Why does B produce better copy?",
            options: [
              "B is simply longer, and length alone improves writing",
              "B names the type, audience, tone, and constraints, so the AI stops guessing",
              "There's no real difference between them",
            ],
            correctIndex: 1,
            explanation:
              "It's coverage, not word count. Naming what, who, tone, and constraints removes the guesses that make generic prompts produce generic copy.",
          },
        },
        {
          html: `<h3>You edit the draft</h3><p>Here's the mindset that separates good results from bad: Magic Write gives you a <strong>draft, not a final</strong>. AI copy can be generic, occasionally inaccurate, or slightly off-message. Your job is to check facts, sharpen the voice, and cut the fluff.</p><p>The fastest workflow is generate → skim → fix. You get past the blank page in seconds, then spend your energy on the judgment only you can provide.</p><h3>Where you're headed</h3><p>You can now draft and refine every word in your designs. Next up: <strong>the Code Feature</strong> — using Canva Code to turn plain-language prompts into interactive content, no coding required.</p>`,
          question: {
            text: "Magic Write produces a slick caption that claims your sale is '50% off' — but it's actually 25% off. What do you do?",
            options: [
              "Publish it; the AI must know the real number",
              "Edit the draft to fix the fact — AI copy is a starting point you're responsible for checking",
              "Change your actual sale to 50% off to match the AI",
            ],
            correctIndex: 1,
            explanation:
              "AI can invent details, so fact-checking is on you. Treating drafts as a starting point — not gospel — is exactly the right writing mindset.",
          },
        },
      ],
    },
    {
      title: "The Code Feature",
      summary: "Turn plain-language prompts into interactive widgets and mini-apps with Canva Code",
      estimatedMinutes: 13,
      content: `<p>Some ideas need more than a static image — they need something people can click, type into, or calculate with. Canva Code lets you describe an interactive element in plain language and get a working widget, no coding required.</p>`,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "Use Canva Code to build a small interactive widget for a design: a simple [tip calculator] where someone enters a bill amount and picks a percentage, and it shows the tip and total. Describe it in plain language, then test it and ask for one tweak to the layout.",
        note: "Try the widget yourself as a user would — if a step is confusing, describe the fix in plain words and regenerate.",
      },
      steps: [
        {
          html: `<h3>Beyond static designs</h3><p>Most design outputs just sit there. <strong>Canva Code</strong> is different: it generates small <strong>interactive</strong> pieces from a plain-language prompt — calculators, quizzes, countdowns, widgets, little mini-apps — that you can drop into a design.</p><p>You describe what it should do ("a tip calculator where I enter a bill amount and pick a percentage"), and Canva generates a working element. The AI writes the underlying code; you just describe the behavior.</p>`,
          question: {
            text: "You want to add a small interactive mortgage calculator to a client's presentation. Which Canva feature fits?",
            options: [
              "Magic Write — to describe the calculator in text",
              "Canva Code — to generate a working interactive calculator from a description",
              "Background remover — to isolate the numbers",
            ],
            correctIndex: 1,
            explanation:
              "Interactive, functional elements are Canva Code's job. Magic Write only produces text; it can't build something users type into and get results from.",
          },
        },
        {
          html: `<h3>The no-code mindset</h3><p>The whole point of Canva Code is that you <strong>don't</strong> write code. You think about <em>behavior and outcome</em>, not syntax: what the user enters, what happens, and what they see back.</p><p>That means your skill isn't programming — it's describing clearly. "When someone picks a plan, show the monthly price and a total for the year" is the kind of plain instruction that produces a useful widget.</p>`,
          question: {
            text: "You've never written a line of code. Can you still build a working quiz widget with Canva Code, and how should you think about it?",
            options: [
              "No — you must learn a programming language first",
              "Yes — describe the behavior in plain language (questions, answers, scoring) and let the AI generate it",
              "Yes, but only if you edit the raw code yourself afterward",
            ],
            correctIndex: 1,
            explanation:
              "Canva Code is built for non-coders. Your job is describing the behavior clearly; the AI handles the code underneath.",
          },
        },
        {
          html: `<h3>Iterating on what it builds</h3><p>The first generation is a starting point, not the finish line — same as every other AI tool in this unit. If the widget isn't quite right, you refine it conversationally: "make the button bigger," "add a reset option," "show the result in dollars."</p><p>Change one thing at a time and you'll know exactly what each request fixed. Vague asks ("make it better") produce vague changes; specific asks steer precisely.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Describe the behavior in small, testable pieces. Get the core interaction working first, then layer on styling and extras — it's easier to spot what broke.</p></div>`,
          question: {
            text: "Your generated calculator works but the result text is too small to read. What's the most effective next step?",
            options: [
              "Tell Canva Code 'make it better' and hope it guesses",
              "Ask for one specific change — 'increase the result text size' — and iterate from there",
              "Delete it and start a completely new project",
            ],
            correctIndex: 1,
            explanation:
              "Specific, one-at-a-time refinements steer precisely and show you what each change did — far more reliable than vague requests or starting over.",
          },
        },
        {
          html: `<h3>What it's great for</h3><p>Canva Code shines for <strong>self-contained, interactive extras</strong> inside your designs and presentations:</p><ul><li>Calculators (tips, pricing, savings, ROI)</li><li>Quizzes and polls</li><li>Countdown timers and progress trackers</li><li>Small configurators or pickers</li></ul><p>These add engagement to a slide deck, a website section, or a lesson without hiring a developer or wiring up a real backend.</p>`,
          question: {
            text: "You're building a workshop deck and want attendees to try a quick 'how much could you save' calculator live. Good use of Canva Code?",
            options: [
              "No — Canva Code can't make anything interactive",
              "Yes — a self-contained savings calculator is exactly the kind of interactive extra it's built for",
              "No — you'd need to hire a developer for something that simple",
            ],
            correctIndex: 1,
            explanation:
              "A small, self-contained interactive calculator is squarely in Canva Code's sweet spot — engagement without a developer or backend.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey, Nova here 👋 Let's practice turning plain-language ideas into interactive widgets with Canva Code — no coding needed. Ready?",
            },
            {
              bot: "You want to add a small interactive tip calculator to a slide for your side hustle's pricing workshop.",
              ask: "Which Canva feature fits?",
              inputType: "choice",
              options: [
                "Magic Write — to describe the calculator in text",
                "Canva Code — to generate a working interactive calculator from a description",
                "Background remover — to isolate the numbers",
              ],
              correctIndex: 1,
              feedback:
                "Exactly. Interactive, functional elements are Canva Code's job — Magic Write only produces text.",
              hint: "You need something people can type into and get a result from.",
            },
            {
              bot: "Fill in what actually makes Canva Code work for you.",
              ask: "Complete the sentence.",
              inputType: "fill-blank",
              template: "With Canva Code you describe the ___ in plain language and the AI writes the code.",
              options: ["behavior", "syntax", "hardware"],
              correctIndex: 0,
              feedback:
                "Right — you describe the behavior and outcome; the AI handles the code underneath.",
              hint: "It's about what the widget should do, not how it's coded.",
            },
            {
              bot: "Let's match each idea to whether Canva Code fits it.",
              ask: "Pair each idea with the right verdict.",
              inputType: "match",
              pairs: [
                { left: "Tip calculator on a slide", right: "Great fit for Canva Code" },
                { left: "Quick quiz or poll", right: "Great fit for Canva Code" },
                { left: "Customer portal with logins", right: "Needs a real developer" },
                { left: "App storing payment data", right: "Needs a real developer" },
              ],
              feedback:
                "Perfect — small self-contained widgets fit; accounts and secure data need real engineering.",
              hint: "Small contained widget vs. accounts, databases, and payments.",
            },
            {
              bot: "You've never written a line of code, but you want a quiz widget for a school project poster. A friend says you must learn a programming language first.",
              ask: "Is 'learn to code first' a useful requirement here?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Right — Canva Code is built for non-coders. You describe the behavior; the AI generates it.",
              hint: "Who is Canva Code actually built for?",
            },
            {
              bot: "Let's phrase how to refine a widget. Arrange the words.",
              ask: "Tap the words to build the phrase.",
              inputType: "arrange",
              words: ["change", "one", "thing", "at", "a", "time"],
              feedback:
                "That's the habit: change one thing at a time so you know what each request fixed.",
              hint: "Start with 'change one...'",
            },
            {
              bot: "Your generated 'how much could you save' calculator for a small-business flyer works, but the result text is too small to read.",
              ask: "e.g. Describe your most effective next step",
              inputType: "text",
              keywords: ["specific", "one", "change", "increase", "text", "size", "iterate"],
              feedback:
                "Nice. A strong answer: \"Ask Canva Code for one specific change — 'increase the result text size' — then iterate from there.\" Specific, one-at-a-time asks steer precisely.",
              hint: "Make one clear, specific request rather than 'make it better.'",
            },
            {
              bot: "Your little widget idea grows into a full customer portal with logins, saved accounts, and payment data.",
              ask: "e.g. Describe whether Canva Code still fits and why",
              inputType: "text",
              keywords: ["developer", "accounts", "database", "payments", "secure", "beyond", "real"],
              feedback:
                "That's the boundary. A good answer: \"That needs a real developer — logins, a database, and payment data go beyond Canva Code, which is for small self-contained widgets.\"",
              hint: "Accounts, secure data, and payments call for real engineering.",
            },
            {
              bot: "Great work. Describe the behavior, iterate in small specific steps, and know when to call a real developer. That wraps Unit 1! 🎉",
            },
          ],
        },
        {
          html: `<h3>When to call a real developer</h3><p>Canva Code is powerful for small, contained pieces — but it isn't a replacement for professional software engineering. Reach for a real developer when your idea needs:</p><ul><li>A <strong>database</strong> or user accounts</li><li><strong>Secure handling</strong> of sensitive or personal data</li><li>Complex logic, integrations, or scale beyond a single widget</li><li>Reliability guarantees a business depends on</li></ul><p>Knowing this boundary keeps Canva Code useful without over-trusting it for jobs it wasn't built for.</p>`,
          question: {
            text: "Your idea grows into a customer portal with logins, saved accounts, and payment data. Is Canva Code still the right tool?",
            options: [
              "Yes — Canva Code handles logins, databases, and payments just fine",
              "No — accounts, secure data, and payments call for a real developer; Canva Code is for small self-contained widgets",
              "Yes — real developers are never needed anymore",
            ],
            correctIndex: 1,
            explanation:
              "User accounts, secure data, and payments are exactly where you need real engineering. Canva Code is for contained interactive extras, not full applications.",
          },
        },
        {
          html: `<h3>Bringing Unit 1 together</h3><p>You've now met the whole Magic Studio toolkit: the <strong>essentials and mindset</strong>, <strong>Magic Design</strong> and editing, <strong>video and motion</strong>, <strong>Magic Write</strong>, and <strong>Canva Code</strong>. A pattern runs through all of them: AI gives you a fast, editable starting point, and your judgment turns it into something genuinely good.</p><p>You can generate an image, animate it, write its copy, resize it for every platform, and even add an interactive widget — all in one place.</p><h3>Where you're headed</h3><p>Knowing the tools is step one. Next comes <strong>Unit 2: professional practice</strong> — using this toolkit deliberately in real workflows, staying on-brand and efficient, and making smart calls about when to lean on AI and when to trust your own hand.</p>`,
          question: {
            text: "Looking back across Magic Design, Magic Media, Magic Write, and Canva Code, what's the common principle that made each one work well?",
            options: [
              "Always accept the first AI output without changes",
              "AI gives a fast, editable starting point; your judgment and iteration turn it into the finished result",
              "The tools only work if you never edit anything",
            ],
            correctIndex: 1,
            explanation:
              "Every tool in the unit rewards the same partner mindset: generate quickly, then refine with your own judgment. That's the throughline into professional practice.",
          },
        },
      ],
    },
  ],
};
