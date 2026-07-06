import type { CourseSeed } from "./types";

export const MIDJOURNEY_COURSE: CourseSeed = {
  slug: "midjourney",
  title: "Midjourney",
  tagline: "Create stunning AI images that don't look AI-made",
  description:
    "From your first /imagine to a professional visual workflow: prompt craft, styles, parameters, consistency and real-world use for marketing, branding and content.",
  icon: "🎨",
  color: "#FEF9C3",
  accent: "#CA8A04",
  sortOrder: 4,
  units: [
    {
      title: "Midjourney Foundations",
      lessons: [
        {
          title: "Meet Midjourney",
          summary: "Why creators pick it, and how access works",
          content: `<p>Midjourney is widely considered the gold standard for AI image aesthetics — its default output looks art-directed, not "AI-ish".</p><h3>The essentials</h3><ul><li>It's a paid tool (no meaningful free tier) used through its website and Discord.</li><li>You type a text prompt; it returns a grid of 4 image options.</li><li>From the grid you <strong>upscale</strong> favorites (bigger, refined) or create <strong>variations</strong> (riffs on one option).</li></ul><h3>Where it fits</h3><ul><li>Marketing visuals, brand imagery, concept art, mood boards, social content.</li><li>Anywhere the <em>look</em> matters more than literal text accuracy inside the image.</li></ul><p>The iteration loop — prompt, pick, vary, upscale — is the core motion you'll master in this course.</p>`,
        },
        {
          title: "Your First Prompts",
          summary: "The anatomy of a prompt that actually works",
          content: `<p>A Midjourney prompt is a compact scene description. Structure beats length.</p><h3>The reliable formula</h3><p><strong>Subject → Setting → Style → Light/Mood → Details</strong></p><p>Example: "a cozy corner bookshop, rainy evening, warm window light, cinematic photography, shallow depth of field, soft reflections on wet pavement".</p><h3>Beginner rules</h3><ul><li><strong>Concrete nouns beat adjectives.</strong> "Golden retriever puppy on a picnic blanket" beats "cute nice dog".</li><li><strong>One scene per prompt.</strong> Cramming two ideas produces mush.</li><li><strong>Don't ask for readable text</strong> in the image — AI still mangles words; add text later in an editor.</li><li><strong>Generate, look, adjust one thing, regenerate.</strong> Small iterations teach you the model's language fast.</li></ul>`,
        },
        {
          title: "Styles & Aesthetics",
          summary: "Photography, illustration, 3D — speak the style language",
          content: `<p>The same subject becomes ten different images depending on style words. Building a style vocabulary is the fastest quality upgrade.</p><h3>Style families to try</h3><ul><li><strong>Photography:</strong> "editorial photo", "35mm film", "macro shot", "golden hour", "studio lighting".</li><li><strong>Illustration:</strong> "flat vector illustration", "watercolor", "ink sketch", "children's book style".</li><li><strong>3D & render:</strong> "isometric 3D render", "claymation style", "soft plastic textures".</li><li><strong>Art movements:</strong> "art deco poster", "impressionist", "bauhaus design".</li></ul><p>Exercise: take one subject ("a lighthouse on a cliff") and render it in five styles. Save the results — this becomes your personal style reference sheet you'll reuse in client and team conversations ("we want #3 but warmer").</p>`,
        },
        {
          title: "Parameters that Matter",
          summary: "Aspect ratio, stylize, and the handful of switches you need",
          content: `<p>Parameters are switches added to the end of a prompt with <code>--</code>. You only need a few.</p><h3>The essential set</h3><ul><li><strong>--ar</strong> aspect ratio: <code>--ar 16:9</code> banners, <code>--ar 9:16</code> stories/reels, <code>--ar 1:1</code> feed posts.</li><li><strong>--stylize</strong> (0-1000): how much artistic liberty Midjourney takes. Low = literal, high = beautiful but loose.</li><li><strong>--no</strong>: exclude things — <code>--no text, watermark, people</code>.</li><li><strong>--v</strong>: model version (defaults to newest; older versions have different looks).</li></ul><p>Workflow tip: decide the aspect ratio <em>before</em> prompting — an image composed for square rarely crops well to widescreen. Start with defaults, change one parameter at a time, and note what each does to your style.</p>`,
        },
        {
          title: "Iterate Like a Pro",
          summary: "Vary, remix, rerun — getting from good to great",
          content: `<p>Nobody nails it on the first generation. Professionals just iterate faster and more deliberately.</p><h3>The iteration toolkit</h3><ul><li><strong>Variations:</strong> like one of the four? Ask for variations of just that one — same idea, new takes.</li><li><strong>Subtle vs strong:</strong> choose how far variations stray from the original.</li><li><strong>Remix/edit prompt:</strong> keep the composition, change the words — "same scene, at night".</li><li><strong>Rerun:</strong> the exact same prompt gives brand new results; sometimes the fix is another roll.</li></ul><p>Discipline that separates pros: change <strong>one thing at a time</strong> and keep notes. "Warmer light fixed it" is learning; ten random changes is gambling. Expect 3-10 iterations for anything you'd publish.</p>`,
        },
        {
          title: "Reference Images & Consistency",
          summary: "Match a look, keep a character, stay on brand",
          content: `<p>Midjourney can take images as input, which unlocks consistency — the hardest problem in AI art.</p><h3>Three reference powers</h3><ul><li><strong>Image prompts:</strong> include a reference image URL/upload to influence composition and content.</li><li><strong>Style reference:</strong> point at an image and say "in this style" — great for keeping a campaign visually unified.</li><li><strong>Character reference:</strong> keep the same character/face across multiple scenes — essential for mascots, storyboards and brand characters.</li></ul><p>Brand workflow: generate until you find "the look", then use that image as a style reference for every subsequent asset. Your feed stops looking like ten different artists and starts looking like a brand.</p>`,
        },
      ],
    },
    {
      title: "Midjourney in the Real World",
      lessons: [
        {
          title: "Marketing & Social Content",
          summary: "A repeatable pipeline for scroll-stopping visuals",
          content: `<p>Let's turn skills into output your business can use.</p><h3>The content pipeline</h3><ul><li><strong>Define the campaign look:</strong> one style-defining image, saved as style reference.</li><li><strong>Batch generate:</strong> all the month's visuals in one session — same style words, same parameters, different subjects.</li><li><strong>Correct aspect ratios from the start:</strong> 1:1 feed, 9:16 stories, 16:9 blog headers.</li><li><strong>Add text in a design tool:</strong> generate clean imagery with <code>--no text</code>, then lay type over it in Canva/Figma.</li></ul><p>Quality bar: would you stop scrolling for it? If not, iterate — usually the fix is more specific light and mood words, not more adjectives.</p>`,
        },
        {
          title: "Editing: Zoom, Pan & Region Edits",
          summary: "Fix and extend images instead of starting over",
          content: `<p>Generation is half the craft; editing is the other half.</p><h3>The editing toolkit</h3><ul><li><strong>Zoom out:</strong> pull the camera back and let Midjourney invent surroundings — turn a tight portrait into a full scene.</li><li><strong>Pan/extend:</strong> stretch the canvas in one direction — perfect for converting a square into a wide banner.</li><li><strong>Region editing (vary region):</strong> select just the part that's wrong — a hand, an object, the sky — and regenerate only that.</li><li><strong>Upscale:</strong> final resolution boost before use.</li></ul><p>This changes your economics: an image that's 90% right is a 2-minute region edit, not a restart. Salvage first, reroll second.</p>`,
        },
        {
          title: "Rights, Ethics & Disclosure",
          summary: "Use AI images commercially without stepping on rakes",
          content: `<p>Before AI images touch client work, know the ground rules.</p><h3>The practical picture</h3><ul><li><strong>Usage rights:</strong> paid Midjourney subscribers can use their generations commercially — check the current terms for your plan tier.</li><li><strong>Copyright nuance:</strong> in many jurisdictions purely AI-generated images may not be copyrightable — fine for marketing, worth understanding for logos and flagship brand assets.</li><li><strong>Avoid imitating living artists</strong> by name for commercial work — legally gray and reputationally risky.</li><li><strong>People & products:</strong> don't generate real people's likenesses or trademarked products in ads.</li><li><strong>Disclosure:</strong> norms vary by industry — when in doubt, be transparent that imagery is AI-generated.</li></ul><p>None of this is scary with a checklist — and clients increasingly expect you to know it.</p>`,
        },
        {
          title: "Midjourney vs Other Image AIs",
          summary: "DALL·E, Firefly, Stable Diffusion — an honest map",
          content: `<p>Midjourney isn't the only image generator — route the job to the right tool.</p><h3>The honest comparison</h3><ul><li><strong>Midjourney:</strong> best default aesthetics; ideal for brand, marketing and art. Paid only.</li><li><strong>ChatGPT images:</strong> best at following complex literal instructions and rendering text; conversational editing. Great for diagrams-with-style and quick jobs.</li><li><strong>Adobe Firefly:</strong> trained on licensed stock — the safe choice for strict corporate/legal environments; lives inside Photoshop.</li><li><strong>Stable Diffusion / open source:</strong> maximum control and customization for technical users; run it yourself, train custom models.</li></ul><p>Common pro setup: Midjourney for hero visuals, ChatGPT for literal/utility images, Firefly when legal asks questions. Your certificate task ahead: produce one real asset with the tool that fits.</p>`,
        },
        {
          title: "Your Visual Workflow",
          summary: "A production system — and your certificate",
          content: `<p>Final lesson: assemble the pieces into a repeatable production system.</p><h3>The system</h3><ul><li><strong>Style library:</strong> a doc of your proven prompts, style references and parameter combos per project/brand.</li><li><strong>Batch days:</strong> generate a month of visuals in one focused session rather than one-offs daily.</li><li><strong>Edit pass:</strong> region-fix, extend and upscale the keepers; never publish grid-resolution images.</li><li><strong>Legal pass:</strong> 30-second rights checklist before anything commercial ships.</li></ul><p>Do one full cycle this week: brief → 10 candidates → 3 edited finals → published. That single loop teaches more than any tutorial. Congratulations — you've completed the Midjourney course. Claim your certificate and go make something beautiful.</p>`,
        },
      ],
    },
  ],
};
