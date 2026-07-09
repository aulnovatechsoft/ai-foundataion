import type { UnitSeed } from "./types";

export const KLING_UNIT_3: UnitSeed = {
  title: "Kling in Professional Practice",
  lessons: [
    {
      title: "Kling for Filmmakers",
      summary: "Previsualize shots, keep continuity, and blend AI clips with real footage",
      estimatedMinutes: 14,
      content: `<p>Kling won't replace a film crew — but it will let you see a scene before you shoot it. For filmmakers, its real power is previsualization: turning a shot list into moving pictures you can react to.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Previsualize the opening shot of a short film I'm planning: a lone figure walks toward camera down an empty city street at dawn, mist low to the ground, a slow tracking shot pulling back ahead of them, muted cinematic colour grade, anamorphic feel. Generate a 5-second clip.",
        note: "Treat the result as a rough previs, not the final shot — use it to judge framing and pacing, then adjust the camera move and regenerate.",
      },
      steps: [
        {
          html: `<h3>From script to screen, faster</h3><p>Every film lives twice: once in your head, and once on the screen. The gap between them is where budgets and schedules disappear. Kling helps you close that gap early, while changes are still cheap.</p><p>Instead of describing a shot to your team and hoping they picture it the same way, you can <strong>generate a rough version</strong> of it and point at the screen: "This — but slower, and move the camera left."</p><h3>Previs, not final frames</h3><p>Think of Kling clips as <strong>living storyboards</strong>, not finished footage. They exist to align your team, test ideas, and pitch a vision — not (usually) to end up in the final cut.</p>`,
          question: {
            text: 'A director says: "I\'ll generate my whole short film in Kling and release it as-is." What\'s the more realistic way to use it on a serious project?',
            options: [
              "As a previsualization tool to test shots and align the team before shooting",
              "As a full replacement for cameras, actors, and locations on any project",
              "Only for the closing credits, never for actual scenes",
            ],
            correctIndex: 0,
            explanation:
              "Kling shines at previs — seeing and refining shots cheaply before the shoot. Some creators do release fully AI films, but on a serious production its highest-value role is aligning the team early.",
          },
        },
        {
          html: `<h3>Turning a shot list into prompts</h3><p>A shot list is already halfway to a prompt. Each line names a subject, an action, and a framing — exactly what Kling needs. Take one row at a time and translate it:</p><ul><li><strong>Shot:</strong> "WIDE — lone figure crosses empty plaza at dawn"</li><li><strong>Prompt:</strong> subject (a lone figure in a long coat) + scene (empty stone plaza, dawn light) + motion (walks slowly across frame) + camera (wide static shot) + style (muted, cinematic)</li></ul><p>Do the shots one by one. Trying to cram a whole sequence into one generation invites chaos.</p>`,
          question: {
            text: "You have a 6-shot chase sequence to previsualize. What's the best approach in Kling?",
            options: [
              "Write one long prompt describing all six shots so they generate together",
              "Generate each shot as its own clip, then assemble them in an editor",
              "Generate only the first shot and let Kling infer the rest automatically",
            ],
            correctIndex: 1,
            explanation:
              "Kling handles one clear shot at a time far better than a whole sequence at once. Generate each beat separately, then cut them together — that's also how a real edit works.",
          },
        },
        {
          html: `<h3>The continuity problem</h3><p>The moment you have more than one shot, a new challenge appears: <strong>continuity</strong>. Your character's coat, the color of the light, the look of the location — these can drift between generations, and audiences notice.</p><h3>Tools that fight the drift</h3><ul><li><strong>Reuse a reference image:</strong> generate (or shoot) one strong frame of your character or set, then use image-to-video so every shot starts from the same look.</li><li><strong>Start/end frames:</strong> lock the first and last frame of a shot to control exactly where a movement begins and ends.</li><li><strong>Consistent prompt language:</strong> keep the same wardrobe, lighting, and style words across every shot in the sequence.</li></ul>`,
          question: {
            text: "Across three shots, your hero's jacket keeps changing color and cut. What's the most reliable fix?",
            options: [
              "Add \"good continuity\" to the end of each prompt",
              "Generate one strong reference image of the hero and use image-to-video for every shot",
              "Regenerate each shot many times until three happen to match by luck",
            ],
            correctIndex: 1,
            explanation:
              "Text alone can't guarantee a consistent look. Anchoring every shot to the same reference image gives Kling a fixed target, so the character carries across the sequence.",
          },
        },
        {
          html: `<h3>Directing the camera, not just the subject</h3><p>Filmmakers think in camera language, and Kling responds to it. Instead of only describing what's in frame, tell it how the camera behaves: a <strong>slow push-in</strong> builds tension, a <strong>whip pan</strong> adds energy, a <strong>low-angle static</strong> makes a subject loom.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Match camera motion to emotion, not spectacle. A quiet dialogue beat rarely wants a dramatic crane move — a subtle drift often reads more "cinematic" than a flashy one.</p></div><h3>When physics breaks</h3><p>Fast action, crowds, and complex interactions are where AI video still stumbles — expect morphing hands, sliding feet, or objects that melt. Favor <strong>simpler motion</strong> and shorter clips for your hero shots, and hide complexity in cutaways.</p>`,
          question: {
            text: "You need a tense reveal of a character standing in a doorway. Which camera direction fits best?",
            options: [
              "A chaotic whip pan with fast zooming for maximum energy",
              "A slow push-in on a low angle to build tension",
              "No camera instruction at all — let Kling decide",
            ],
            correctIndex: 1,
            explanation:
              "Camera motion should serve the emotion. A slow push-in on a low angle quietly builds tension for a reveal, where a frantic whip pan would undercut it.",
          },
        },
        {
          html: `<h3>Mixing Kling with live footage</h3><p>Some of the strongest work is <strong>hybrid</strong>: real footage carrying the story, with Kling filling gaps you couldn't afford to shoot — an establishing shot of a city that doesn't exist, a dangerous stunt, a fantastical insert.</p><p>To blend them convincingly:</p><ul><li><strong>Match grade:</strong> color-correct AI clips to sit with your real footage in the edit.</li><li><strong>Match grain and motion:</strong> add film grain and subtle camera shake so AI shots don't look too "clean".</li><li><strong>Keep AI shots short:</strong> the less time on screen, the less chance a glitch is noticed.</li></ul>`,
          question: {
            text: "You're cutting a clean Kling establishing shot into gritty, handheld documentary footage. What helps it blend?",
            options: [
              "Leave the AI shot untouched so it looks as sharp as possible",
              "Match the grade, add matching grain and subtle shake, and keep it brief",
              "Make the AI shot the longest in the sequence to show it off",
            ],
            correctIndex: 1,
            explanation:
              "A too-clean AI clip stands out against gritty footage. Matching grade, grain, and motion — and keeping it short — helps it disappear into the edit.",
          },
        },
        {
          html: `<h3>Rights, festivals, and honesty</h3><p>Before you build a project on AI clips, know the ground rules — they're still shifting in 2026.</p><ul><li><strong>Disclosure:</strong> many festivals and broadcasters now ask whether AI was used; some categories restrict it. Check submission rules early.</li><li><strong>Rights & likeness:</strong> don't generate recognizable real people or trademarked characters for commercial use without permission.</li><li><strong>Terms of use:</strong> confirm your Kling plan's commercial-use and ownership terms before you monetize.</li></ul><h3>Where you're headed</h3><p>You can now previsualize, keep continuity, and blend AI with real footage responsibly. Next, we shift from the director's chair to the marketer's desk — using Kling to make product and social video that actually converts.</p>`,
          question: {
            text: "You're submitting a short that uses Kling shots to a film festival. What's the responsible first step?",
            options: [
              "Assume AI is fine everywhere and submit without checking",
              "Read the festival's rules on AI disclosure and eligibility before submitting",
              "Hide the AI use so judges never find out",
            ],
            correctIndex: 1,
            explanation:
              "Festival rules on AI vary and are changing fast. Checking disclosure and eligibility requirements up front protects your submission — hiding it risks disqualification.",
          },
        },
      ],
    },
    {
      title: "Kling for Marketing",
      summary: "Make product motion, social variations, and scroll-stopping hooks that convert",
      estimatedMinutes: 13,
      content: `<p>Marketing lives and dies on the first three seconds. Kling lets you produce product motion and dozens of ad variations fast — but only if you design for the scroll, not the screening room.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Create a vertical (9:16) scroll-stopping 5-second clip for a social ad for my [product]. Open on a bold, high-contrast hero shot with motion in the first second, a quick satisfying reveal of the product, and space at the bottom for a caption. Punchy, bright, energetic mood.",
        note: "Judge it muted and on a phone in the first 3 seconds — if it doesn't grab attention instantly, front-load the movement and regenerate.",
      },
      steps: [
        {
          html: `<h3>Motion sells</h3><p>A still product photo says "here it is." A short clip says "here's what it does for you." Motion draws the eye, implies quality, and shows a product in a life your customer wants — which is why video ads so often outperform static ones.</p><p>With image-to-video, you can take a single clean product shot and bring it to life: a watch catching the light as it turns, steam rising from a coffee cup, a shoe stepping into frame.</p>`,
          question: {
            text: "You have one great studio photo of a product and need an ad. What's the fastest Kling path to motion?",
            options: [
              "Use image-to-video on the photo with a subtle motion prompt",
              "Describe the product from scratch in a text-to-video prompt and hope it matches",
              "Skip video entirely — motion never helps ads",
            ],
            correctIndex: 0,
            explanation:
              "Image-to-video keeps your real product's look and adds movement. Regenerating from text risks a product that no longer matches what you actually sell.",
          },
        },
        {
          html: `<h3>Win the first seconds</h3><p>On social, people decide in about a second whether to keep watching. Your <strong>hook</strong> — the first 1–3 seconds — is the whole game. Design your Kling clip so the most arresting moment happens immediately, not after a slow build.</p><ul><li><strong>Open on motion or surprise</strong>, not a logo or a slow fade-in.</li><li><strong>Show the payoff early</strong> — the transformation, the result, the "wow".</li><li><strong>Assume no sound</strong> — many watch muted, so make it work visually.</li></ul>`,
          question: {
            text: "Your product clip opens with a 3-second logo animation before anything happens. What should you change for social?",
            options: [
              "Nothing — a logo intro builds brand recognition first",
              "Cut to the most eye-catching moment in the first second and save the logo for later",
              "Make the logo animation longer and more elaborate",
            ],
            correctIndex: 1,
            explanation:
              "On social you win or lose in the first second. Leading with a logo spends your hook on branding; open with the payoff and let the brand land once you've earned attention.",
          },
        },
        {
          html: `<h3>Variations at speed</h3><p>Great marketing isn't one perfect ad — it's <strong>many variations tested against each other</strong>. Kling makes this cheap: same product, different scenes, motions, moods, and hooks.</p><p>From one concept, spin up variants that change a single variable at a time:</p><ul><li>Setting: kitchen vs. gym vs. outdoors</li><li>Pace: calm and premium vs. fast and energetic</li><li>Hook: problem-first vs. result-first</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Change one variable per variant. If you swap the setting, pace, and hook all at once, a winning ad won't tell you <em>why</em> it won — and you can't repeat the success.</p></div>`,
          question: {
            text: "You want to A/B test which environment sells your product best. How should you build the two Kling clips?",
            options: [
              "Change the setting, music, pacing, and hook between the two clips",
              "Keep everything identical except the setting so the result is attributable",
              "Make two completely unrelated ads and compare their views",
            ],
            correctIndex: 1,
            explanation:
              "A clean A/B test isolates one variable. If only the setting differs, the winner actually tells you which environment works — that's a repeatable insight.",
          },
        },
        {
          html: `<h3>Staying on brand</h3><p>Speed is worthless if every clip looks like a different company made it. Keep Kling output on-brand by locking your visual signature:</p><ul><li><strong>Reference images</strong> of your product and packaging for image-to-video.</li><li><strong>Consistent color and lighting</strong> words in every prompt (your palette, warm vs. cool).</li><li><strong>A style word list</strong> — "minimal, premium, soft daylight" — reused across all variants.</li></ul><p>For teams, a shared Kling setup with pinned reference images and a house prompt template keeps everyone's output consistent.</p>`,
          question: {
            text: "Three team members are generating ads and each result looks like a different brand. What's the best fix?",
            options: [
              "Let each person use their own style for variety",
              "Share reference images and a common prompt template with fixed color and style words",
              "Only allow one person to ever generate ads",
            ],
            correctIndex: 1,
            explanation:
              "Consistency comes from shared inputs. Pinned reference images plus a house prompt template give everyone the same visual signature without bottlenecking on one person.",
          },
        },
        {
          html: `<h3>Avoiding the "AI look"</h3><p>Audiences are getting sharp at spotting AI — and generic, over-smooth, slightly-off clips can now <em>hurt</em> a brand. To stay on the right side:</p><ul><li><strong>Favor subtle, believable motion</strong> over flashy, physics-defying moves that scream "generated".</li><li><strong>Keep hero clips short</strong> so glitches (warping hands, morphing text) don't get scrutinized.</li><li><strong>Never render real text in-video</strong> — Kling mangles it. Add product names and prices as overlays in your editor.</li><li><strong>Mix in real assets</strong> — a real product photo or a human voiceover grounds the piece.</li></ul>`,
          question: {
            text: "Your ad needs the price \"$49\" and a tagline on screen. What's the reliable way to add them?",
            options: [
              "Prompt Kling to render the exact text inside the video",
              "Generate the clip clean, then add the text as an overlay in your editor",
              "Skip the price and tagline entirely",
            ],
            correctIndex: 1,
            explanation:
              "AI video still garbles precise text. Generate clean visuals in Kling and lay accurate text over them in editing — it's crisp, correct, and easy to update.",
          },
        },
        {
          html: `<h3>Wrapping the marketing playbook</h3><p>You've got the pattern: motion to sell, a hook that wins the first second, cheap variations tested one variable at a time, and brand consistency that keeps it all recognizable — without tipping into uncanny AI-looking output.</p><h3>Next: teaching with Kling</h3><p>Marketing is about persuasion; our final lesson is about <strong>understanding</strong>. We'll turn Kling toward education — explainers, abstract concepts made visible, avatar-led micro-lessons — and close out the whole course.</p>`,
          question: {
            text: "Which marketing clip is most likely to perform well on a muted social feed?",
            options: [
              "A 3-second logo fade, then the product, with narration explaining features",
              "An immediate, visually striking product-in-action moment that reads without sound",
              "A long, slow reveal that pays off after 15 seconds",
            ],
            correctIndex: 1,
            explanation:
              "Muted, fast-scrolling feeds reward instant visual payoff. A striking, sound-independent opening beats slow builds and audio-dependent explanations.",
          },
        },
      ],
    },
    {
      title: "Kling for Educators",
      summary: "Make explainers, visualize the abstract, and teach honestly with AI video",
      estimatedMinutes: 14,
      content: `<p>Teaching is the art of making the invisible visible. Kling gives educators a way to show what words alone can't — but with that power comes a duty to be accurate and honest with your learners.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Create a short 5-second explainer clip that visualizes a concept I teach: [the water cycle]. Show it clearly and simply — for example, sunlight warming a lake, vapour rising, clouds forming, then rain falling back — with clean, friendly, diagram-like visuals suitable for a classroom.",
        note: "Check every visual for accuracy before showing students — if any part misrepresents the concept, simplify the prompt and regenerate.",
      },
      steps: [
        {
          html: `<h3>Show, don't just tell</h3><p>Some ideas resist explanation in text: how blood moves through the heart, how a supply chain flows, what erosion does over a thousand years. A short visualization can do in ten seconds what a paragraph struggles to do at all.</p><p>Kling lets educators produce these <strong>explainer clips</strong> without a studio — turning a concept into a moving picture students can watch, pause, and rewatch.</p>`,
          question: {
            text: "You're teaching how a volcano erupts and text isn't landing. Where does a Kling clip help most?",
            options: [
              "Visualizing the process as motion students can watch and replay",
              "Replacing all reading and assessment in the course",
              "Generating the exact scientific data and measurements",
            ],
            correctIndex: 0,
            explanation:
              "Kling's strength for educators is making a process visible and repeatable. It illustrates concepts — it doesn't replace instruction or supply precise data.",
          },
        },
        {
          html: `<h3>Visualizing the abstract</h3><p>The trick with abstract topics is to give Kling a <strong>concrete metaphor</strong> to animate. It can't render "inflation" or "recursion" directly — but it can show a balloon slowly overfilling, or a series of nested doors opening into smaller copies of the same room.</p><ul><li>Pick a visual metaphor your students already understand.</li><li>Describe it as a simple, clear motion — one idea per clip.</li><li>Pair the clip with your narration or on-screen labels to name the concept.</li></ul>`,
          question: {
            text: 'You want to illustrate "compound interest" for a finance class. What gives Kling the best shot?',
            options: [
              'Prompt "show compound interest" and hope it understands the concept',
              "Prompt a concrete metaphor — a snowball rolling downhill and growing — then label it",
              "Ask Kling to render the exact interest formula as text on screen",
            ],
            correctIndex: 1,
            explanation:
              "Kling animates the concrete, not the abstract. A growing snowball is a metaphor it can render; your narration or labels connect it to the real concept — and text-on-screen it would mangle.",
          },
        },
        {
          html: `<h3>Avatar-led micro-lessons</h3><p>An AI avatar can present short lessons in a consistent, friendly voice — useful for series, onboarding, or bite-sized review. Write a tight script, feed it to a digital human, and you have a repeatable presenter without filming yourself every time.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Keep avatar lessons short and single-topic. Avatars read best in 30–90 second explainers; long monologues drift toward the uncanny and lose learners' attention.</p></div><h3>When to use a real face instead</h3><p>For emotional moments, trust-building, or your signature course intro, your <em>real</em> presence usually connects better than an avatar. Save avatars for scalable, repeatable, informational segments.</p>`,
          question: {
            text: "Which segment is the best fit for an AI avatar rather than filming yourself?",
            options: [
              "A heartfelt welcome message setting the tone for your whole course",
              "A 60-second recap of last week's key terms in a weekly review series",
              "A personal story about why you became a teacher",
            ],
            correctIndex: 1,
            explanation:
              "Avatars excel at short, repeatable, informational segments like weekly recaps. Emotional, trust-building, or personal moments land better with your real face.",
          },
        },
        {
          html: `<h3>Accuracy is non-negotiable</h3><p>An engaging clip that's <em>wrong</em> is worse than no clip — students remember vivid images. AI video will happily generate a confident, plausible, incorrect depiction: a heart with the wrong chambers, a map with invented borders, a process out of order.</p><ul><li><strong>Review every clip against the facts</strong> before you show it.</li><li><strong>Treat clips as illustrations</strong>, not sources of truth — pair them with verified material.</li><li><strong>Watch for subtle errors</strong> in labels, sequences, counts, and proportions.</li></ul>`,
          question: {
            text: "Kling produces a beautiful cell-division animation, but the phases look out of order. What do you do?",
            options: [
              "Use it anyway — it looks impressive and students will enjoy it",
              "Don't show it as-is; correct or re-generate it, and verify against the science first",
              "Show it and mention the errors probably don't matter",
            ],
            correctIndex: 1,
            explanation:
              "Vivid but wrong visuals create durable misconceptions. Accuracy comes first: fix or regenerate, and always check the clip against verified material before teaching with it.",
          },
        },
        {
          html: `<h3>Honesty with your students</h3><p>Part of teaching in an AI age is <strong>modeling responsible use</strong>. When you show AI-generated video, say so. It builds trust, teaches media literacy, and sets the norm you want students to follow in their own work.</p><ul><li><strong>Label AI content</strong> clearly when it could be mistaken for real footage.</li><li><strong>Explain why</strong> you used it — to visualize something hard to film.</li><li><strong>Invite scrutiny</strong> — ask students to spot where the AI got things subtly wrong.</li></ul>`,
          question: {
            text: "You show students a Kling clip of a historical event that never had real footage. What's the honest approach?",
            options: [
              "Present it as authentic archival footage to feel more immersive",
              "Tell students it's an AI reconstruction, explain why, and invite them to critique it",
              "Show it with no comment and let students assume what they like",
            ],
            correctIndex: 1,
            explanation:
              "Labeling AI reconstructions and inviting critique builds trust and media literacy. Passing generated footage off as real — or staying silent — undermines both.",
          },
        },
        {
          html: `<h3>Your Kling toolkit, complete</h3><p>Look how far you've come. You can now:</p><ul><li><strong>Direct</strong> Kling with structured prompts — subject, scene, motion, camera, style.</li><li><strong>Create</strong> with images (Kolors), text-to-video, image-to-video, and avatars.</li><li><strong>Control</strong> continuity with reference images and start/end frames, and fix common failures.</li><li><strong>Apply</strong> it professionally — previs for film, high-converting marketing, and honest, accurate teaching.</li></ul><h3>The mindset that carries you forward</h3><p>The tools will keep changing — new models, longer clips, sharper realism. What lasts is the discipline you've built: <strong>you direct, Kling renders</strong>. Bring a clear vision, iterate with intent, and stay honest about what's AI. That's what turns a generator into a genuine creative partner.</p><p>Congratulations — you've completed the Kling course. Now go make something worth watching.</p>`,
          question: {
            text: "Looking across the whole course, what single idea best captures using Kling well?",
            options: [
              "Type a short prompt and accept whatever the first generation gives you",
              "Bring a clear directorial vision, iterate with intent, and stay honest about AI use",
              "Use the most powerful model and the longest clip length every time",
            ],
            correctIndex: 1,
            explanation:
              "The throughline of the course is direction over luck: a clear vision, deliberate iteration, and honesty about AI turn Kling from a random generator into a real creative partner.",
          },
        },
      ],
    },
  ],
};
