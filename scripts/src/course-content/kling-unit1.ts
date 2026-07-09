import type { UnitSeed } from "./types";

export const KLING_UNIT_1: UnitSeed = {
  title: "Kling",
  lessons: [
    {
      title: "Meet Kling AI",
      summary: "What Kling is, where it shines, and the mindset shift from typing to directing",
      estimatedMinutes: 15,
      content: `<p>Kling doesn't just answer you — it films for you. Before any prompt or setting, the thing that decides whether Kling works is a shift in how you think: you're not typing a request, you're directing a shot.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Direct a single short shot for a social post announcing my [small business]'s new opening. Describe it like a director: a slow push-in on a warmly lit shopfront at golden hour, soft morning light, a welcoming 'Now Open' feel, gentle handheld motion. Generate a 5-second clip.",
        note: "Notice how naming the camera move and lighting gives you a real 'shot' instead of a random animation — tweak one of those details and regenerate to feel the difference.",
      },
      steps: [
        {
          html: `<h3>From chatbot to camera</h3><p>Most AI tools hand you text. Kling hands you <strong>moving images</strong>. It's a generative video platform from Kuaishou that turns a written description — or a still image — into short, cinematic clips.</p><p>That difference changes everything about how you work with it. You're no longer asking "what should I say?" You're deciding <strong>what the camera sees, how it moves, and what happens in the frame</strong>.</p><h3>The core mindset</h3><p>The people who get the most from Kling stop thinking like writers and start thinking like <strong>directors</strong>. A director doesn't just name a subject — they choose the shot, the motion, the lighting, and the mood.</p>`,
        },
        {
          html: `<h3>What Kling can actually make</h3><p>Kling is more than a single trick. Its toolset spans:</p><ul><li><strong>Text-to-video</strong> — describe a scene and get a clip</li><li><strong>Image-to-video</strong> — bring a still photo or artwork to life</li><li><strong>Image generation (Kolors)</strong> — create stills you can then animate</li><li><strong>AI avatars</strong> — talking digital humans that lip-sync to a script or audio</li></ul><p>These pieces connect: you might generate an image, animate it, then extend the clip — all inside one workflow.</p>`,
          question: {
            text: "You have a product photo and want a 5-second clip of the camera slowly circling it. Which Kling capability fits best?",
            options: [
              "Text-to-video — describe the product from scratch and hope it matches",
              "Image-to-video — feed in your existing photo and add the camera motion",
              "Image generation — make a new still and stop there",
            ],
            correctIndex: 1,
            explanation:
              "You already have the exact product shot, so image-to-video preserves it and adds movement. Describing it from scratch risks a product that looks nothing like yours.",
          },
        },
        {
          html: `<h3>Where Kling shines vs. other tools</h3><p>If you've heard of Sora, Runway, or Veo, Kling sits comfortably among them — but each has a personality. None is simply "better"; they're tuned for different jobs.</p><ul><li><strong>Kling</strong> — strong on realistic human motion, physics, and fine motion control (motion brush, start/end frames)</li><li><strong>Sora</strong> — imaginative, dreamlike scenes and strong prompt understanding</li><li><strong>Runway</strong> — a broad editing suite with many creative effects</li><li><strong>Veo</strong> — tight integration with Google's ecosystem and audio</li></ul><p>Kling's sweet spot is <strong>believable movement</strong>: people walking, fabric flowing, a camera gliding through a real-looking space.</p>`,
          question: {
            text: "A client wants a lifelike clip of a chef plating a dish with natural hand movement. Based on each tool's strengths, why is Kling a solid pick?",
            options: [
              "It's the only AI tool that can generate any video at all",
              "It's tuned for realistic human motion and physics, which fits believable hand movement",
              "It automatically writes the client's script for them",
            ],
            correctIndex: 1,
            explanation:
              "Kling's strength is convincing, physical human motion — exactly what a plating shot needs. The other tools can make video too, but Kling leans into realism.",
          },
        },
        {
          html: `<h3>Models and credits</h3><p>Kling improves in versions — think <strong>Kling 1.x → 2.x</strong> — with each release handling motion, detail, and prompt-following better than the last. Newer models usually cost more per generation but produce cleaner results.</p><p>Generations run on <strong>credits</strong>. Your plan sets how many credits you get, how fast your jobs run (standard vs. priority queues), and which quality modes you can reach. Higher-quality and longer clips burn more credits.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Draft in a cheaper, faster mode to lock your composition and motion, then re-run the winning prompt in high quality. You'll spend far fewer credits than polishing every attempt at max settings.</p></div>`,
          question: {
            text: "You're testing five different prompt ideas for a scene and aren't sure which will work. What's the smartest use of credits?",
            options: [
              "Run all five at the highest quality and longest length right away",
              "Draft the five cheaply to find the winner, then re-run only that one in high quality",
              "Run one at max quality and never test the others",
            ],
            correctIndex: 1,
            explanation:
              "Exploration should be cheap. Lock down composition and motion in fast mode, then spend your premium credits only on the idea that already works.",
          },
        },
        {
          html: `<h3>Realistic expectations</h3><p>Kling is powerful, but it isn't magic. Setting expectations up front saves frustration:</p><ul><li><strong>Clips are short</strong> — typically a few seconds per generation, which you can extend</li><li><strong>Generation takes time</strong> — from under a minute to several, depending on quality and queue</li><li><strong>Not every run is usable</strong> — you'll iterate, and some outputs will have glitches</li></ul><p>Think of each generation as a <strong>take</strong> on set. Real directors don't expect the first take to be perfect — they shoot several and pick the best.</p>`,
          question: {
            text: "Your first generation comes back with a slightly warped hand. How should a director-minded Kling user react?",
            options: [
              "Conclude Kling can't do the shot and give up",
              "Treat it as one take — adjust the prompt or settings and run another",
              "Publish it as-is because re-running is a waste",
            ],
            correctIndex: 1,
            explanation:
              "Glitches on a take are normal. Iteration is the workflow, not a sign of failure — tweak and shoot again until you get a clean take.",
          },
        },
        {
          html: `<h3>The shift that changes your results</h3><p>The single biggest upgrade to your Kling output isn't a setting — it's how you frame the request. Compare:</p><ul><li>❌ "A dog in a park" — Kling has to guess the shot, the motion, and the mood</li><li>✅ "A golden retriever running toward the camera across a sunlit park, slow-motion, low angle, warm morning light" — now you're directing</li></ul><p>You'll learn the full recipe next lesson. For now, remember the mindset: <strong>describe the shot, not just the subject</strong>.</p><h3>Where you're headed</h3><p>You now know what Kling is, where it beats other tools, and how to think like a director instead of a typist. Next up: <strong>Prompting Fundamentals</strong> — the exact anatomy of a prompt that turns your vision into a clean, controlled clip.</p>`,
          question: {
            text: "Which request is most likely to give you a clip you can actually use?",
            options: [
              '"A city street"',
              '"A rainy neon-lit city street at night, camera slowly tracking forward past reflective puddles, cinematic, moody"',
              '"Make a good video"',
            ],
            correctIndex: 1,
            explanation:
              "The second names subject, scene, motion, camera, and style — it directs the shot. The others leave Kling guessing, which is where weak, generic clips come from.",
          },
        },
      ],
    },
    {
      title: "Prompting Fundamentals",
      summary: "The anatomy of a strong Kling prompt — and how to fix a weak one",
      estimatedMinutes: 13,
      content: `<p>A great Kling clip almost always starts with a well-built prompt. This is a checkpoint lesson: you'll learn the recipe, then practice spotting what makes a prompt strong or weak.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Write one full recipe-style prompt and generate it: subject, action, camera move, setting, lighting, and mood. Example to adapt: 'A barista sets a finished latte on a wooden counter, steam rising; slow dolly-in; cozy neighbourhood café; warm afternoon light through the window; calm, inviting mood.' Make it about my [product or service] and generate a 5-second clip.",
        note: "If the result feels off, change just one ingredient of the recipe at a time (e.g. the camera move) so you can tell what each part actually controls.",
      },
      steps: [
        {
          html: `<h3>The five ingredients</h3><p>Nearly every strong Kling prompt answers five questions. Think of them as the layers of a shot:</p><ul><li><strong>Subject</strong> — who or what is in frame</li><li><strong>Scene</strong> — where they are, the setting and lighting</li><li><strong>Motion</strong> — what moves and how</li><li><strong>Camera</strong> — how the camera itself behaves</li><li><strong>Style</strong> — the look and mood (cinematic, anime, documentary…)</li></ul><p>Miss one and Kling fills the gap with a guess. Include all five and you're steering every part of the frame.</p>`,
          question: {
            text: 'A user writes: "A woman walking, cinematic." Which ingredients are clearly missing?',
            options: [
              "Nothing — that prompt is complete",
              "Scene, camera behavior, and specific motion detail",
              "Only the style is missing",
            ],
            correctIndex: 1,
            explanation:
              "We have a subject (woman), a hint of motion (walking), and style (cinematic) — but no scene, no camera direction, and no detail on how she moves. Kling will guess all three.",
          },
        },
        {
          html: `<h3>Motion is the point</h3><p>Kling makes <em>video</em>, so motion deserves special care. Vague motion gives you stiff or random movement; specific motion gives you life.</p><ul><li>Weak: "a flag" → Strong: "a flag rippling steadily in a strong breeze"</li><li>Weak: "a person" → Strong: "a person turning slowly to face the camera and smiling"</li></ul><p>Describe <strong>what moves, in what direction, and at what pace</strong>. "Slowly," "suddenly," "drifting," "rushing" all give Kling a rhythm to follow.</p>`,
          question: {
            text: 'You want a calm, elegant reveal of a perfume bottle. Which motion phrase serves that mood best?',
            options: [
              '"the bottle spinning rapidly and shaking"',
              '"the camera drifting slowly around the bottle as soft light glints across the glass"',
              '"a bottle"',
            ],
            correctIndex: 1,
            explanation:
              "Calm and elegant means slow, smooth, controlled motion. Rapid spinning fights the mood, and a bare noun gives Kling no rhythm to work with.",
          },
        },
        {
          html: `<h3>Directing the camera</h3><p>The camera is a character too. Kling responds to shot language:</p><ul><li><strong>Movement</strong>: pan, tilt, dolly/track, zoom, orbit, crane up</li><li><strong>Framing</strong>: close-up, wide shot, low angle, aerial</li><li><strong>Pace</strong>: slow push-in, quick whip pan</li></ul><p>"Slow dolly-in on the subject's face" reads very differently from "aerial wide shot pulling back to reveal the valley." Naming the camera move is one of the fastest ways to make a clip feel intentional.</p>`,
          question: {
            text: "You want a dramatic ending where a lone hiker is revealed to be tiny against a huge mountain. Which camera direction delivers that?",
            options: [
              "Extreme close-up on the hiker's boots",
              "Aerial wide shot slowly pulling back to reveal the vast mountain around them",
              "Fast shaky handheld zoom on the face",
            ],
            correctIndex: 1,
            explanation:
              "The reveal depends on scale — pulling back to a wide aerial shows how small the hiker is against the landscape. A close-up or shaky zoom hides exactly the scale you're trying to reveal.",
          },
        },
        {
          html: `<h3>Positive vs. negative prompts</h3><p>Your main prompt says what you <strong>want</strong>. Many Kling setups also offer a <strong>negative prompt</strong> — a place to name what you <strong>don't</strong> want.</p><p>Negative prompts are great for banishing common problems:</p><ul><li>"blurry, distorted, extra fingers, warped face"</li><li>"text, watermark, logo"</li><li>"jittery motion, flickering"</li></ul><p>Think of the negative prompt as a cleanup filter — it won't rescue a vague idea, but it trims recurring glitches from an already-good one.</p>`,
          question: {
            text: "Your clips keep coming out with a distracting watermark-like texture and warped hands. Where should that guidance go?",
            options: [
              "Add 'no watermark, no warped hands' into the main positive prompt",
              "Put 'watermark, warped hands, extra fingers' in the negative prompt",
              "Nowhere — Kling can't be told what to avoid",
            ],
            correctIndex: 1,
            explanation:
              "Things you want to exclude belong in the negative prompt. Stuffing 'no…' into the positive prompt can confuse the model, since the positive prompt describes what should appear.",
          },
        },
        {
          html: `<h3>Creativity vs. relevance</h3><p>Kling often exposes a dial — sometimes called creativity, relevance, or CFG — that balances two forces:</p><ul><li><strong>Higher relevance</strong> → sticks tightly to your prompt, more predictable, less surprising</li><li><strong>Higher creativity</strong> → freer interpretation, more variety, more risk of drift</li></ul><p>For a precise product shot, lean toward relevance. For an imaginative dreamscape where you want Kling to surprise you, loosen it.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>If your outputs ignore key details, raise relevance before rewriting the whole prompt. If everything feels stiff and samey, add a little creativity.</p></div>`,
          question: {
            text: "You need a clip that matches a strict brand storyboard exactly — no surprises. How should you set the creativity/relevance dial?",
            options: [
              "Max creativity, so Kling invents fresh interpretations",
              "Toward higher relevance, so it sticks closely to your described shot",
              "It doesn't matter for brand work",
            ],
            correctIndex: 1,
            explanation:
              "Strict, on-brand work rewards predictability. Higher relevance keeps Kling faithful to your storyboard instead of improvising off-brief.",
          },
        },
        {
          html: `<h3>Worked example: weak to strong</h3><p>Watch a prompt evolve.</p><p><strong>Weak:</strong> "a coffee cup"</p><p><strong>Better:</strong> "a steaming coffee cup on a wooden table"</p><p><strong>Strong:</strong> "Close-up of a steaming espresso cup on a rustic wooden table, wisps of steam curling upward, warm morning light from a side window, camera slowly pushing in, shallow depth of field, cinematic."</p><p>Notice the recipe: <strong>subject + scene + motion + camera + style</strong>, all present. Each layer removes a guess Kling would otherwise make.</p>`,
          question: {
            text: "Compared to 'a coffee cup,' what mainly makes the strong version reliable?",
            options: [
              "It's simply longer, and length alone improves output",
              "It fills in scene, motion, camera, and style, so Kling stops guessing",
              "It uses fancier vocabulary the model prefers",
            ],
            correctIndex: 1,
            explanation:
              "It's not word count or vocabulary — it's coverage. Each added layer answers a question Kling would otherwise guess, which is what makes results consistent.",
          },
        },
        {
          html: `<h3>Iterating on a bad generation</h3><p>When a clip misses, resist the urge to rewrite everything. Diagnose first, then change <strong>one thing at a time</strong>:</p><ul><li>Wrong <em>content</em>? Sharpen the subject and scene.</li><li>Bad <em>movement</em>? Rework the motion and pace words.</li><li>Awkward <em>framing</em>? Adjust the camera direction.</li><li>Recurring <em>glitches</em>? Add them to the negative prompt.</li></ul><p>Changing one layer per run tells you exactly what fixed the problem — and what didn't.</p><h3>Wrapping up Unit 1</h3><p>You can now think like a director and build prompts with all five layers. Next unit, you'll put this to work hands-on — starting with generating your own images in Kolors and turning them into video.</p>`,
          question: {
            text: "Your clip has great composition but the subject's walk looks jerky. What's the best next move?",
            options: [
              "Rewrite the entire prompt from scratch with new subject, scene, and style",
              "Change only the motion description (e.g. 'walking smoothly at a steady pace') and re-run",
              "Switch to a completely different tool",
            ],
            correctIndex: 1,
            explanation:
              "The composition already works, so keep it. Adjusting just the motion layer isolates the fix and preserves everything that was already right.",
          },
        },
      ],
    },
  ],
};
