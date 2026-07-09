import type { UnitSeed } from "./types";

export const KLING_UNIT_2: UnitSeed = {
  title: "Kling's Core Features",
  lessons: [
    {
      title: "Image Generation",
      summary: "Craft strong images with Kolors and use them as the launch pad for video",
      estimatedMinutes: 12,
      content: `<p>Before you animate anything, you need a strong frame to start from — and Kling's image model, Kolors, is where that frame is born. A great video almost always begins with a great still.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Generate a clean product hero still I could later animate: a single jar of [my product] on a pale marble surface, soft diffused daylight from the left, shallow depth of field, minimal props, plenty of empty space above for a headline. Photorealistic, editorial style.",
        note: "Aim for a still you'd be happy to post as-is — a strong frame here is what makes the video step work later; regenerate until the lighting and composition feel deliberate.",
      },
      steps: [
        {
          html: `<h3>Why images come first</h3><p>It's tempting to jump straight to video. But in Kling, the most reliable path to a clean clip is often to <strong>generate a strong image first</strong>, then animate it.</p><p>Kling's image engine is called <strong>Kolors</strong>. It turns text prompts into stills you can refine, download, or — most importantly — hand to the video model as a starting frame.</p><h3>The payoff</h3><ul><li>You control the look before spending credits on motion</li><li>You lock composition, character, and lighting up front</li><li>You avoid the lottery of text-to-video guessing your whole scene</li></ul>`,
          question: {
            text: "You want a cinematic clip of a specific-looking character in a specific room. Why might generating a Kolors image first beat going straight to text-to-video?",
            options: [
              "Image generation is the only feature Kling offers for characters",
              "You lock the look and composition in a still before spending credits animating it",
              "Text-to-video can't produce people at all",
            ],
            correctIndex: 1,
            explanation:
              "Nailing the frame first gives you control. You approve the character, room, and lighting as a still, then animate a known-good image instead of gambling the whole scene on one text prompt.",
          },
        },
        {
          html: `<h3>Anatomy of an image prompt</h3><p>A strong Kolors prompt reads like a photo caption written by someone who knows exactly what they want. Cover four things:</p><ul><li><strong>Subject:</strong> who or what, with concrete detail</li><li><strong>Scene:</strong> where they are, time of day, background</li><li><strong>Style:</strong> photoreal, illustration, 3D render, film stock</li><li><strong>Light & mood:</strong> soft morning light, neon glow, overcast</li></ul><p>Weak: <em>"a woman in a city."</em> Strong: <em>"a woman in a tailored red coat standing on a rainy Tokyo street at night, neon reflections on wet pavement, shallow depth of field, photorealistic."</em></p>`,
          question: {
            text: 'You prompt "a dog in a park" and get a generic, flat result. Which revision is most likely to give you a striking image?',
            options: [
              '"a dog in a park, make it good"',
              '"a golden retriever mid-leap catching a frisbee in a sunlit autumn park, low angle, shallow depth of field, warm golden-hour light, photorealistic"',
              '"DOG, PARK, HIGH QUALITY, 8K, MASTERPIECE"',
            ],
            correctIndex: 1,
            explanation:
              "Concrete subject, action, setting, angle, light, and style give Kolors a clear target. Vague adjectives and keyword-stuffing don't describe an actual picture.",
          },
        },
        {
          html: `<h3>Aspect ratio is a creative choice</h3><p>Before you generate, set the <strong>aspect ratio</strong> to match where the clip will live:</p><ul><li><strong>16:9</strong> — YouTube, landscape, cinematic</li><li><strong>9:16</strong> — TikTok, Reels, Shorts, Stories</li><li><strong>1:1</strong> — square feed posts</li></ul><p>Ratio also changes composition: a 9:16 frame invites a tall subject and vertical motion, while 16:9 gives room for a wide establishing shot.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Pick your ratio <em>before</em> you fall in love with a composition. Generating a perfect 16:9 shot you then need vertical means starting over — the subject won't just "fit" into a different frame.</p></div>`,
          question: {
            text: "You're making a vertical ad for Instagram Reels. What should you set before generating your starting image?",
            options: [
              "Generate in 16:9 and crop the sides later",
              "Set the aspect ratio to 9:16 so the composition is built for vertical from the start",
              "Aspect ratio doesn't matter for images, only for video",
            ],
            correctIndex: 1,
            explanation:
              "Cropping a wide shot to vertical throws away half the frame and usually wrecks the composition. Setting 9:16 up front lets Kolors compose specifically for the vertical space.",
          },
        },
        {
          html: `<h3>Styles and consistency</h3><p>Kolors can swing from documentary photoreal to painterly illustration to clean 3D. Naming the style explicitly keeps your outputs coherent.</p><p>If you're building several images for one project — say, a set of scenes with the same character — reuse the <strong>same descriptive anchors</strong> every time: the same clothing, hair, age, and style words. Small wording changes cause big look changes.</p><h3>Iterate, don't restart</h3><p>Got something 80% right? Keep most of the prompt and change one variable — swap "overcast" for "golden hour," or "wide shot" for "close-up." Change one thing at a time so you can see what each word does.</p>`,
          question: {
            text: "You've generated a great hero character and now need three more scenes with the same person. What gives you the most consistent set?",
            options: [
              "Write a fresh, differently-worded prompt for each new scene",
              "Reuse the same character-describing anchors every time and only change the scene and action",
              "Let Kling randomize the character so the images feel varied",
            ],
            correctIndex: 1,
            explanation:
              "Kolors doesn't remember your character between prompts — the words are the character. Keeping the same descriptive anchors and only swapping the setting is what holds the look together.",
          },
        },
        {
          html: `<h3>From still to motion</h3><p>Here's the whole point: once you have an image you love, you can send it straight into <strong>image-to-video</strong> as the opening frame. Kling animates from that exact still instead of inventing a scene from scratch.</p><p>This is the pro workflow: <strong>design the frame in Kolors → animate it in the video model</strong>. Your character, lighting, and composition are already locked, so the motion has a stable foundation.</p><h3>What's next</h3><p>You now have strong starting frames. In the next lesson, we bring them to life — text-to-video, image-to-video, camera moves, and how to fix the glitches that show up when things start moving.</p>`,
          question: {
            text: "What's the main advantage of feeding a polished Kolors image into image-to-video instead of describing the scene in a text-to-video prompt?",
            options: [
              "It uses fewer credits than every other method every time",
              "The character, composition, and lighting are already locked, so motion builds on a stable, approved frame",
              "Image-to-video can add sound while text-to-video cannot",
            ],
            correctIndex: 1,
            explanation:
              "Starting from an approved still removes the guesswork about how the scene looks. Kling only has to solve motion, not reinvent the entire frame — which means far fewer surprises.",
          },
        },
      ],
    },
    {
      title: "Video Generation",
      summary: "Text-to-video, image-to-video, camera control, and taming the glitches",
      estimatedMinutes: 15,
      content: `<p>This is the heart of Kling: turning a prompt or an image into moving footage. The tools are powerful — but motion is where things get weird, so you'll also learn to spot and fix the classic failures.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Take a product still (upload one, or generate a jar of [my product] on marble) and animate it for a launch post: a gentle 5-second clip with slow drifting steam and a soft, slow camera push-in. Keep the product perfectly still and in focus; only the light and steam should move.",
        note: "Watch for the classic glitches — warping edges or the product morphing — and if it happens, ask for smaller, slower motion and regenerate.",
      },
      steps: [
        {
          html: `<h3>Two doors into video</h3><p>Kling gives you two starting points:</p><ul><li><strong>Text-to-video:</strong> describe a scene and Kling invents it from nothing. Fast and exploratory, but you cede control of the exact look.</li><li><strong>Image-to-video:</strong> hand Kling a still (from Kolors or your own) and it animates from that frame. Far more control over character and composition.</li></ul><p>Rule of thumb: text-to-video for quick ideas and abstract shots; image-to-video when the look matters.</p>`,
          question: {
            text: "A client approved a specific product photo and wants it to gently rotate on screen. Which mode fits best?",
            options: [
              "Text-to-video, describing the product from scratch",
              "Image-to-video, animating the approved photo directly",
              "Either works identically — the mode makes no difference",
            ],
            correctIndex: 1,
            explanation:
              "The exact product look is already locked and approved. Image-to-video animates that precise frame, while text-to-video would re-invent the product and likely drift from the approved shot.",
          },
        },
        {
          html: `<h3>Start and end frames</h3><p>One of Kling's most powerful controls: set a <strong>start frame</strong> and an <strong>end frame</strong>, and Kling generates the motion that connects them.</p><p>Give it a closed-door image and an open-door image, and it animates the door opening. Give it a wide shot and a close-up of the same scene, and it interpolates a push-in.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Start/end frames only work well when the two images are clearly related — same scene, same character, plausible in-between. Two unrelated frames force Kling to "morph" between them, which looks melty and strange.</p></div>`,
          question: {
            text: "You set a start frame of a person standing and an end frame of a completely different person in a different room. What's the likely result?",
            options: [
              "A clean cut between the two shots",
              "An uncanny morphing transition as Kling tries to blend two unrelated images",
              "Kling refuses and asks for one frame only",
            ],
            correctIndex: 1,
            explanation:
              "Kling fills the gap between frames by interpolating. When the frames aren't plausibly connected, that in-between becomes a melty morph. Related frames — same scene, believable motion — are what make the feature shine.",
          },
        },
        {
          html: `<h3>Directing the camera</h3><p>Kling doesn't just move subjects — it moves the <strong>camera</strong>. You can request moves in your prompt or via camera controls:</p><ul><li><strong>Push in / pull out</strong> — dolly toward or away</li><li><strong>Pan left / right, tilt up / down</strong></li><li><strong>Orbit</strong> — circle around the subject</li><li><strong>Static</strong> — locked-off, no camera motion</li></ul><p>Naming the move gives your clip intent. "Slow push in on her face" reads as tension; "orbit around the product" reads as a reveal.</p>`,
          question: {
            text: 'You want a dramatic reveal of a new sneaker, showing it from every side. Which camera direction fits best?',
            options: [
              '"static locked-off shot, no camera movement"',
              '"slow orbit around the sneaker on a pedestal, studio lighting"',
              '"fast random shaky handheld in every direction"',
            ],
            correctIndex: 1,
            explanation:
              "An orbit circles the subject to show all sides — exactly what a product reveal needs. A static shot hides the other angles, and chaotic movement distracts from the hero object.",
          },
        },
        {
          html: `<h3>Motion brush and extension</h3><p>Two more precision tools:</p><ul><li><strong>Motion brush:</strong> paint over the exact area you want to move — say, only the flag while the person stays still — and leave the rest static. Great for controlled, selective motion.</li><li><strong>Video extension:</strong> take a generated clip and extend it further, continuing the action beyond the original length so you're not capped at one short burst.</li></ul><p>Together they let you choreograph: move only what should move, then extend the good take rather than re-rolling the whole thing.</p>`,
          question: {
            text: "You have a portrait where you want only the hair and scarf to flutter in the wind while the face stays perfectly still. What's the right tool?",
            options: [
              "Motion brush — paint the hair and scarf so only those areas animate",
              "Crank the overall motion strength to maximum",
              "Regenerate as text-to-video until the face happens to hold still",
            ],
            correctIndex: 0,
            explanation:
              "The motion brush isolates movement to the areas you paint. That's how you get selective, controlled motion — flowing hair and scarf over a still face — instead of animating the whole frame.",
          },
        },
        {
          html: `<h3>Duration and quality modes</h3><p>Kling lets you choose how long and how polished a clip is. Longer, higher-quality generations cost more credits and take more time.</p><ul><li>Use a <strong>faster/standard mode</strong> for rough tests and framing checks</li><li>Switch to a <strong>higher-quality mode</strong> once the prompt and composition are dialed in</li><li>Keep clips short — a few strong seconds beats a long, drifting take</li></ul><p>The pro habit: prototype cheap, then spend credits on the final, once you know it's worth it.</p>`,
          question: {
            text: "You're still experimenting with wording and camera moves for a shot. What's the smart way to spend credits?",
            options: [
              "Generate every attempt in the longest, highest-quality mode to be safe",
              "Prototype in a faster/standard mode, then commit to high quality once the shot is dialed in",
              "Always use the shortest possible clip regardless of the final need",
            ],
            correctIndex: 1,
            explanation:
              "Early attempts are throwaways — you're testing wording and framing, not producing the final. Cheap fast passes now, high-quality render once it's right, keeps your credits going to the takes that matter.",
          },
        },
        {
          html: `<h3>When motion goes wrong</h3><p>Movement is where AI video breaks. The usual suspects:</p><ul><li><strong>Morphing:</strong> faces, hands, or objects warping mid-clip</li><li><strong>Physics glitches:</strong> objects passing through each other, gravity ignored</li><li><strong>Extra limbs or fingers</strong> appearing during fast motion</li><li><strong>Background drift:</strong> the scene subtly melting or shifting</li></ul><p>These aren't your fault — they're the current edge of the tech. The skill is iterating past them, not expecting a perfect first take.</p>`,
          question: {
            text: "Your clip looks great until the subject's hand morphs into a blur when they wave. What's the most productive response?",
            options: [
              "Conclude Kling can't do people and give up",
              "Iterate: simplify or slow the motion, try a cleaner start frame, or use the motion brush to limit movement",
              "Submit it as-is since AI glitches are unavoidable",
            ],
            correctIndex: 1,
            explanation:
              "Fast, complex motion (like waving hands) is where morphing shows up. Slowing the action, starting from a cleaner frame, or restricting motion with the brush are the practical fixes — glitches are a starting point to iterate from, not a dead end.",
          },
        },
        {
          html: `<h3>Iterating toward a keeper</h3><p>Good Kling video is a numbers-and-notes game. When a take fails, change <strong>one thing</strong> and re-roll:</p><ul><li>Simplify the motion described</li><li>Lower the motion strength for stability</li><li>Give a cleaner or more relevant start frame</li><li>Shorten the clip so there's less room to drift</li></ul><p>You now know how to generate, direct, and rescue video. Next, we tackle a specialized use of all this: building <strong>AI avatars</strong> — talking digital humans that turn a script into a presenter.</p>`,
          question: {
            text: "A generation drifts and morphs about halfway through. Which single adjustment most directly reduces that drift?",
            options: [
              "Make the clip much longer so the motion has room to settle",
              "Shorten the clip and lower the motion strength so there's less room to drift",
              "Add more unrelated detail to the prompt to distract from the drift",
            ],
            correctIndex: 1,
            explanation:
              "Drift compounds over time and with aggressive motion. A shorter clip with gentler motion gives Kling less opportunity to lose coherence — the most reliable lever against mid-clip morphing.",
          },
        },
      ],
    },
    {
      title: "Building AI Avatars",
      summary: "Turn a script into a talking digital human — and know when not to",
      estimatedMinutes: 14,
      content: `<p>Kling can turn a still portrait and a script into a talking presenter — an AI avatar. Used well, it scales explainers and updates; used carelessly, it lands squarely in the uncanny valley. This checkpoint lesson shows you the difference.</p>`,
      tryIt: {
        tool: "Kling AI",
        url: "https://klingai.com",
        prompt:
          "Create a talking-presenter avatar for a short company update. Use a clear front-facing portrait and this script: 'Hi team — quick update. This month we launched [project], and here's what it means for you.' Keep the delivery calm and natural, with subtle head movement and a neutral office background.",
        note: "Watch the mouth-sync and eyes closely — if it drifts into the uncanny valley, shorten the script and choose a more front-facing, well-lit portrait.",
      },
      steps: [
        {
          html: `<h3>What an AI avatar is</h3><p>An <strong>AI avatar</strong> (or digital human) is a synthetic presenter Kling animates to speak. You supply a face and words; Kling produces a video of that face delivering them, with matching mouth movements.</p><p>Two ways to drive the speech:</p><ul><li><strong>From a script:</strong> type the text and Kling generates the voice and lip movement</li><li><strong>From audio:</strong> supply a voice recording and Kling syncs the lips to it</li></ul>`,
          question: {
            text: "You already have a professionally recorded voiceover you love and want an on-screen presenter to match it. Which approach fits?",
            options: [
              "Script-driven, retyping the words and discarding your recording",
              "Audio-driven lip sync, feeding Kling your existing voiceover so the lips match it",
              "Neither — avatars can only use Kling's built-in voices",
            ],
            correctIndex: 1,
            explanation:
              "Audio-driven lip sync animates the mouth to a voice track you provide, preserving the recording you already have. Script-driven generation would throw away your professional voiceover.",
          },
        },
        {
          html: `<h3>Lip sync quality</h3><p>The single biggest tell of a cheap avatar is <strong>bad lip sync</strong> — mouth movements that lag, over-flap, or don't match the sounds. Kling's sync is strong, but you help it by:</p><ul><li>Using a clear, front-facing portrait with the mouth visible</li><li>Keeping audio clean and free of overlapping voices</li><li>Avoiding extreme angles or heavy occlusion around the mouth</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>A calm, front-facing portrait with even lighting syncs far better than a dramatic three-quarter shot. Save the artsy angles for b-roll; use the clean shot for the talking head.</p></div>`,
          question: {
            text: "Your avatar's lips look slightly off. Which source image is most likely to improve the sync?",
            options: [
              "A dramatic side-profile shot with half the mouth in shadow",
              "A clear, front-facing portrait with even lighting and the mouth fully visible",
              "A group photo cropped down to one face",
            ],
            correctIndex: 1,
            explanation:
              "Lip sync depends on Kling clearly seeing the mouth. A clean, evenly-lit, front-facing portrait gives it the most to work with; profiles and shadows hide exactly the region it needs.",
          },
        },
        {
          html: `<h3>Choosing or creating the look</h3><p>Your avatar's face can come from a few places:</p><ul><li>A <strong>portrait you generate in Kolors</strong> — full control over age, style, and vibe</li><li>A <strong>stock or provided avatar</strong> — fast, consistent, licensed for use</li><li>A <strong>real person's likeness</strong> — powerful, but only with clear consent</li></ul><p>Whatever the source, match the look to the message: a friendly, approachable face for onboarding; a polished, corporate one for an investor update.</p>`,
          question: {
            text: "You want to build a recurring branded presenter for a series of training videos. What's the most sustainable choice?",
            options: [
              "Use a different random face in every video for variety",
              "Generate or select one consistent avatar and reuse it across the whole series",
              "Use a colleague's face without asking, to save time",
            ],
            correctIndex: 1,
            explanation:
              "A recurring series needs a recognizable, consistent presenter — one avatar reused throughout builds familiarity. Changing faces each time breaks the brand, and using someone's likeness without consent is a hard no.",
          },
        },
        {
          html: `<h3>When avatars work — and when they don't</h3><p>Avatars shine for <strong>talking-head content</strong> where a presenter adds warmth or authority:</p><ul><li>Explainers and how-tos</li><li>Product or policy updates</li><li>Course intros and micro-lessons</li><li>Localized versions of the same script in different languages</li></ul><p>They struggle — and feel uncanny — when asked to do too much: big emotional performances, rapid head movement, long unbroken takes, or subtle micro-expressions. The more "acting" required, the more the illusion cracks.</p>`,
          question: {
            text: "Which project is the avatar most likely to handle convincingly?",
            options: [
              "A tearful, emotional monologue with dramatic facial acting",
              "A calm 60-second product update delivered straight to camera",
              "A fast-paced comedy sketch with exaggerated expressions and movement",
            ],
            correctIndex: 1,
            explanation:
              "Straight-to-camera informational delivery plays to the avatar's strengths. Heavy emotional acting and exaggerated, fast expressions are exactly where synthetic faces slip into the uncanny valley.",
          },
        },
        {
          html: `<h3>A worked example</h3><p>Say you need a weekly product update. The pro workflow:</p><ul><li><strong>1. Face:</strong> generate a friendly, front-facing presenter in Kolors, 9:16 for mobile</li><li><strong>2. Script:</strong> write a tight 45-second update — short sentences, natural phrasing</li><li><strong>3. Drive:</strong> feed script (or a clean voiceover) for lip sync</li><li><strong>4. Keep it contained:</strong> minimal head movement, one clear background</li><li><strong>5. Review:</strong> check the sync on the trickiest words, re-roll if the mouth drifts</li></ul><p>Short, calm, front-facing, well-lit — that's the recipe for an avatar that reads as polished rather than eerie.</p>`,
          question: {
            text: "In that weekly-update workflow, why keep the script short and the head movement minimal?",
            options: [
              "Because Kling can't generate any clip longer than five seconds",
              "Because avatars read as most natural in short, calm, contained takes — long or busy performances crack the illusion",
              "Because shorter scripts are the only ones lip sync supports at all",
            ],
            correctIndex: 1,
            explanation:
              "Avatars hold up best in short, controlled deliveries. Long takes give drift more room and heavy movement strains the sync — staying calm and contained keeps the presenter believable.",
          },
        },
        {
          html: `<h3>Honesty and consent</h3><p>Two non-negotiables when publishing avatar content:</p><ul><li><strong>Consent:</strong> never build an avatar from a real person's likeness or voice without clear permission.</li><li><strong>Disclosure:</strong> when it matters — especially with audiences who might assume a real human — be honest that the presenter is AI-generated.</li></ul><p>Trust is the asset. A convincing avatar that misleads people costs you more than it saves.</p>`,
          question: {
            text: "You're deploying an AI presenter to an audience that would reasonably assume it's a real staff member. What's the responsible move?",
            options: [
              "Say nothing — the video looks real enough that it won't matter",
              "Be transparent that the presenter is AI-generated where it's relevant to the audience",
              "Add a real person's name and title to make it feel more legitimate",
            ],
            correctIndex: 1,
            explanation:
              "When an audience would reasonably assume a real human, disclosure protects trust. Passing off AI as a named real person is exactly the kind of deception that erodes credibility.",
          },
        },
        {
          html: `<h3>You've mastered the core toolkit</h3><p>Step back and look at what you can now do: generate strong images in Kolors, animate them with text- and image-to-video, direct the camera, fix motion glitches, and build talking avatars responsibly.</p><p>That's the full creative engine. What's left is <strong>craft in context</strong> — using these tools the way real professionals do.</p><h3>What's next</h3><p>In Unit 3, we put it all to work: Kling for <strong>filmmakers</strong>, for <strong>marketers</strong>, and for <strong>educators</strong>. Same tools, sharper intent — this is where technique becomes results.</p>`,
          question: {
            text: "Having finished the core features, what's the best mindset heading into the professional-practice unit?",
            options: [
              "The tools are all that matter; context and intent are secondary",
              "The same tools produce very different results depending on the goals and craft you bring to them",
              "Each profession needs a completely different, unrelated set of Kling features",
            ],
            correctIndex: 1,
            explanation:
              "You've learned the engine; Unit 3 is about intent. Filmmakers, marketers, and educators use the same core features — the difference is the craft and purpose they apply.",
          },
        },
      ],
    },
  ],
};
