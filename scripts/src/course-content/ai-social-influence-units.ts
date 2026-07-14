import type { UnitSeed } from "./types";

export const SOCIAL_INFLUENCE_UNIT_1: UnitSeed = {
  title: "Building Your Influence Foundation",
  lessons: [
    {
      title: "Your First Steps",
      summary:
        "What really makes influencers succeed — and the two paths you can take",
      content: `<p>Imagine you start running a blog. The idea is exciting — and you've probably thought about it yourself. But the questions pile up fast: how do you stand out, scale your personal brand, and turn followers into actual income? These days, AI makes all of this far more feasible. This first lesson clears the biggest myths, builds the influencer mindset, and shows you the two paths to influence — including one that never requires you on camera.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my influence strategist. About me: [what topics you love talking about, skills or experiences you have, how comfortable you are on camera (1-10), hours per week you can invest]. (1) Suggest 3 possible niches where MY knowledge meets a real audience need — for each: who the audience is, what value I'd deliver (educate/entertain/inspire), and why it could work for me specifically. (2) Recommend my path: traditional (my face), AI avatar, or hybrid — based on my comfort and time, with honest reasoning. (3) For your top niche pick: what would my first 5 posts be about? (4) What's the ONE consistency commitment I should make this week — realistic for my schedule?",
        note: "Don't skip the consistency commitment — one sustainable promise kept for months beats an ambitious plan abandoned in week two. That's the entire influencer game.",
      },
      steps: [
        {
          html: `<h3>What successful influencers actually do</h3><p>Before anything else, kill the myths: influence is NOT about follower count at all costs, and you do NOT need to go viral to succeed. Many huge accounts have zero real impact — because they never built trust or delivered consistent value.</p><p>A successful influencer does three things:</p><ul><li><strong>Trust-building:</strong> audiences follow people they believe are authentic and have their interests at heart</li><li><strong>Value delivery:</strong> whether you educate, entertain, or inspire — you give people a reason to keep coming back</li><li><strong>Consistent production:</strong> you show up regularly, building familiarity and reliability over time</li></ul><p>Follower count matters far less than the depth of connection you create. <strong>Real influence comes from intentional choices, not random posts.</strong></p>`,
          question: {
            text: "Which of these is actually true about successful influencers?",
            options: [
              "They focus on growing follower count at all costs",
              "They prioritize consistent output and build trust before asking for anything",
              "They need to go viral to succeed",
            ],
            correctIndex: 1,
            explanation:
              "Follower count and viral moments feel important, but they don't create lasting influence. Consistency and trust do — many accounts with huge followings have no real impact because they skipped both.",
          },
        },
        {
          html: `<h3>The influencer mindset</h3><p>The mindset that separates creators who last from those who quit in month two comes down to three principles:</p><ul><li><strong>Audience-first value:</strong> asking "what do they need?" before "what do I want to say?"</li><li><strong>Consistency:</strong> showing up even when results are slow — and early results are ALWAYS slow</li><li><strong>Experimentation:</strong> treating content like product iterations — test, learn, adjust, repeat</li></ul><div class="discovery"><p>💡 <strong>Spot the missing mindset</strong></p><p>Creating without considering audience needs? Missing audience-first value. Waiting for inspiration to post? A consistency gap. Sticking to one failing format for months? Not experimenting. Learning to catch these patterns in others trains you to catch them in yourself.</p></div>`,
          question: {
            text: "A creator posts only when they \"feel inspired\" — sometimes three times a week, sometimes nothing for a month. Which mindset principle are they missing?",
            options: [
              "Audience-first value",
              "Consistency — showing up regularly even when motivation dips",
              "Experimentation",
            ],
            correctIndex: 1,
            explanation:
              "Waiting for inspiration signals a consistency gap. Audiences build habits around creators who show up reliably — sporadic brilliance can't compete with dependable presence.",
          },
        },
        {
          html: `<p>Mindset training with Nova — your creator coach.</p>`,
          chat: [
            {
              bot: "Hey, future influencer! Nova here — your AI creator coach ✨ Let's lock in the foundations before you post a single thing.",
            },
            {
              bot: "Match each struggling creator to the mindset principle they're missing.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Posts only what THEY find interesting, ignores comments asking for other topics", right: "Audience-first value" },
                { left: "Waits for inspiration, disappears for weeks", right: "Consistency" },
                { left: "Same failing format for 6 months, never tries anything new", right: "Experimentation" },
              ],
              feedback:
                "Perfect diagnosis — and now you can catch these patterns in your own approach before they cost you months.",
              hint: "What they say, when they show up, what they refuse to change.",
            },
            {
              bot: "A friend says: \"I won't start until I can afford a professional camera and editor — my posts need to be perfect.\"",
              ask: "Good strategy?",
              inputType: "binary",
              options: ["Yes — quality first, always", "No — consistent output beats occasional 'perfect' posts"],
              correctIndex: 1,
              feedback:
                "Right — perfectionism is procrastination in a nicer outfit. Audiences bond with creators who show up reliably, and a phone camera is plenty. Ship, learn, improve.",
              hint: "What did successful influencers prioritize over perfection?",
            },
            {
              bot: "Fill in the core truth.",
              ask: "Real influence comes from the depth of ___ you create, not your follower count.",
              inputType: "fill-blank",
              template: "Real influence comes from the depth of ___ you create, not your follower count.",
              options: ["connection", "hashtags", "filters"],
              correctIndex: 0,
              feedback:
                "Exactly — a thousand people who trust you beat a hundred thousand who scrolled past. Depth over width, always.",
              hint: "It's what trust builds between you and your audience.",
            },
            {
              bot: "Last one: what are the three core functions of great influencers? Tap them in order.",
              ask: "Arrange the influence formula:",
              inputType: "arrange",
              words: ["Build", "trust", "deliver", "value", "produce", "consistently"],
              feedback:
                "That's the formula 🎯 Trust makes people listen, value makes them stay, consistency makes them yours. Everything in this course builds on these three.",
              hint: "Trust → value → consistency.",
            },
          ],
        },
        {
          html: `<h3>Two paths to influence</h3><p>Here's the modern choice most guides skip. <strong>Path one — the traditional influencer:</strong> showing your face, sharing your life, becoming a recognizable brand yourself. AI accelerates your growth behind the scenes:</p><ul><li>Research your niche and analyze competitors</li><li>Generate content ideas when you're stuck; draft captions, scripts, and email sequences</li><li>Plan your content calendar weeks in advance</li><li>Repurpose long-form content into multiple short pieces; analyze performance data to spot patterns</li></ul><p><strong>Path two — the AI-powered influencer:</strong> using digital avatars and AI tools to create a consistent visual presence that doesn't require you on camera. A game-changer if you're not comfortable filming yourself, or simply lack the time and energy to be visibly present all day.</p><p>Either way, <strong>AI is your behind-the-scenes team</strong> — handling the repetitive work so you focus on strategy and authentic connection. Next lesson: when AI influencers win, and when they don't.</p>`,
          question: {
            text: "What's the smartest way to think about AI's role in your influence journey?",
            options: [
              "AI replaces the need for strategy and connection entirely",
              "AI is your behind-the-scenes team — handling repetitive tasks so you focus on strategy and authentic connection",
              "AI should only be used for avatars, never for planning",
            ],
            correctIndex: 1,
            explanation:
              "Whether you choose the traditional path or the avatar path, AI's job is the heavy lifting: research, drafts, calendars, repurposing, analysis. The human parts — judgment, taste, genuine connection — stay yours.",
          },
        },
      ],
    },
    {
      title: "AI Influencers and When They Win",
      summary:
        "Virtual creators are real business — learn when avatars work and when faces win",
      content: `<p>Virtual influencers with millions of followers now land brand deals that human creators compete for. But AI avatars aren't magic — they win in specific situations and lose badly in others. This lesson maps the landscape: what AI influencers are, when the avatar path beats the face path, and the transparency rules that protect your reputation.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me decide my creator path and design my presence. My situation: [camera comfort 1-10, hours/week available, niche or topic, whether my credibility depends on personal experience]. (1) Score my fit for: traditional (face), AI avatar, and faceless/hybrid content — honest pros and cons for MY case. (2) If avatar or hybrid fits: design my avatar concept — personality, visual style, backstory, name ideas, and the content formats it would appear in. (3) Draft my transparency approach: exactly how I'd disclose the AI nature (bio line, pinned post, caption tag). (4) List 3 content series ideas that fit the recommended path and could run weekly without burning me out.",
        note: "The disclosure question isn't optional — audiences forgive an avatar being artificial, but never forgive being deceived. Build transparency in from post one.",
      },
      steps: [
        {
          html: `<h3>The virtual influencer economy is real</h3><p>AI influencers — fully digital characters with names, personalities, and posting schedules — have crossed from novelty to industry. Virtual creators have fronted campaigns for global fashion and tech brands, built audiences in the millions, and earn real sponsorship money.</p><p>Why brands like them: <strong>total consistency</strong> (no scandals, no scheduling conflicts, no aging), <strong>infinite availability</strong> (an avatar can "shoot" a campaign overnight), and <strong>novelty attention</strong>. Why creators build them: no camera anxiety, no burnout from being visibly "on" every day, and a presence that scales beyond one human's energy.</p><p>The tools have democratized this: AI image and video generators can now produce a consistent character across hundreds of posts — what once needed a 3D studio now needs a laptop and taste.</p>`,
          question: {
            text: "Why are brands genuinely willing to pay virtual influencers for campaigns?",
            options: [
              "Virtual influencers work for free",
              "Total consistency, round-the-clock availability, and novelty attention — with no scandal risk",
              "Regulations force brands to use some AI creators",
            ],
            correctIndex: 1,
            explanation:
              "An avatar never misses a deadline, never ages, and never creates a PR crisis. Combined with the attention that novelty brings, that's a real commercial proposition — which is why the virtual influencer economy keeps growing.",
          },
        },
        {
          html: `<h3>When avatars win — and when faces win</h3><p>The honest decision framework:</p><ul><li><strong>Avatars win when:</strong> the value is in the CONTENT, not the person — tutorials, curation, entertainment characters, niche news, storytelling. Also when you can't or won't be on camera, or when you want to run multiple presences</li><li><strong>Faces win when:</strong> the value IS the person — personal transformation stories, credibility-based niches (a doctor, a lawyer, a fitness coach showing their own results), and anywhere "I've lived this" is the selling point</li><li><strong>Hybrid is underrated:</strong> your voice and ideas, with AI-generated visuals, B-roll, and an occasional avatar presenter — many successful faceless channels run exactly this way</li></ul><div class="discovery"><p>💡 <strong>The trust asymmetry</strong></p><p>Audiences happily follow openly-artificial characters — but feel betrayed by fake humans. An avatar presented AS an avatar builds a fanbase; an avatar pretending to be a real person is a scandal waiting for its screenshot. Transparency isn't just ethics — it's survival.</p></div>`,
          question: {
            text: "A nutrition coach whose whole appeal is \"I lost 40kg myself and kept it off\" is considering replacing herself with an AI avatar. Good move?",
            options: [
              "Yes — avatars are more consistent than humans",
              "No — her credibility IS her personal story and body; an avatar erases exactly what audiences follow her for",
              "Yes, as long as the avatar looks similar to her",
            ],
            correctIndex: 1,
            explanation:
              "When \"I've lived this\" is the value proposition, the face and story are irreplaceable. Avatars win where content value stands apart from personal experience — tutorials, curation, characters — not where lived proof is the product.",
          },
        },
        {
          html: `<p>Path-choosing workshop with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🤖 Avatar or face? It's a strategy question, not a tech question. Let's practice the judgment.",
            },
            {
              bot: "Match each creator situation to its best path.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Camera-shy developer sharing coding tutorials", right: "AI avatar or faceless — value is in the content" },
                { left: "Fitness coach whose results are the proof", right: "Traditional face — lived experience is the product" },
                { left: "Busy expert with great ideas, no filming time", right: "Hybrid — their voice and ideas, AI visuals" },
              ],
              feedback:
                "Exactly — the path follows from where the VALUE lives: in the content, in the person, or in between.",
              hint: "Ask: does the audience need the human, or the knowledge?",
            },
            {
              bot: "An avatar account grows to 100k followers while letting fans believe it's a real woman travelling the world. A journalist is about to publish the truth.",
              ask: "What happens next?",
              inputType: "choice",
              options: [
                "Nothing — followers won't care either way",
                "A trust collapse — audiences forgive artificial characters, but not deception about being human",
                "The account gets more popular from the controversy",
              ],
              correctIndex: 1,
              feedback:
                "Trust collapse — the betrayal isn't the avatar, it's the lie. Openly-virtual characters thrive with millions of fans; fake humans become cautionary screenshots. Disclose from day one.",
              hint: "What exactly did the audience lose — an avatar, or the truth?",
            },
            {
              bot: "Fill in the trust asymmetry.",
              ask: "Audiences happily follow openly artificial characters, but feel ___ by fake humans.",
              inputType: "fill-blank",
              template: "Audiences happily follow openly artificial characters, but feel ___ by fake humans.",
              options: ["betrayed", "impressed", "entertained"],
              correctIndex: 0,
              feedback:
                "Betrayed — and betrayal doesn't unfollow quietly, it screenshots and shares. Transparency is cheaper than any apology.",
              hint: "The feeling when you discover you were deceived.",
            },
            {
              bot: "True or false check: \"Building an AI influencer today requires a 3D animation studio and a big budget.\"",
              ask: "Your verdict?",
              inputType: "binary",
              options: ["True — it's still a studio game", "False — AI image/video tools now keep a character consistent from a laptop"],
              correctIndex: 1,
              feedback:
                "False — consistent characters across hundreds of posts are now a tools-and-taste game, not a budget game. The barrier dropped; the differentiator is now concept and consistency, same as for humans.",
              hint: "What happened to the cost of generating consistent images?",
            },
          ],
        },
        {
          html: `<h3>Building an avatar presence responsibly</h3><p>If the avatar path (or hybrid) fits you, the playbook:</p><ul><li><strong>Character first, tools second:</strong> a personality document — name, backstory, voice, values, visual signature — keeps every post coherent. AI generates images; YOU generate the character</li><li><strong>Consistency pipeline:</strong> reuse reference images and detailed character prompts so your avatar looks like the same "person" across posts — visual drift kills believability</li><li><strong>Disclose cleanly:</strong> "virtual creator" / "AI-generated character" in the bio, and follow platform rules — major platforms increasingly require AI-content labels. Disclosure builds fascination, not rejection</li><li><strong>The human stays in charge:</strong> the avatar is a mask, not a brain. Strategy, opinions, taste, and community replies still need YOU — audiences smell fully-automated accounts fast</li></ul><p><strong>Whichever path you choose, the next lesson applies equally: the brand identity that makes people remember and choose you.</strong></p>`,
          question: {
            text: "What keeps an AI avatar believable and followable over hundreds of posts?",
            options: [
              "Using a different generation style each week to stay fresh",
              "A defined character document plus a consistency pipeline — same personality, voice, and visual identity every post",
              "Posting only images, never opinions",
            ],
            correctIndex: 1,
            explanation:
              "Audiences bond with characters, and characters are consistency: the same personality, values, voice, and look, post after post. Visual or personality drift breaks the illusion faster than any technical flaw.",
          },
        },
      ],
    },
    {
      title: "Influencer Brand Identity",
      summary:
        "Niche, voice, and visual identity — become instantly recognizable in a crowded feed",
      content: `<p>Scroll any feed and you'll pass a hundred creators in a minute. The ones you remember have a brand: a clear niche, a distinct voice, and a visual identity that's recognizable before you even read the name. This lesson builds yours — with AI as your brand strategist.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my personal brand strategist. My niche direction: [topic + who it helps]. My personality: [3-5 words friends would use to describe me]. Creators I admire: [1-3 names and what I like about them — optional]. Build my brand identity kit: (1) POSITIONING — complete this sentence for me 3 different ways: 'I help [who] achieve [what] through [how], unlike others who [gap I fill]'. (2) VOICE — define my 3 voice traits with a do/don't example each (e.g. 'Direct: say X, never Y'). (3) CONTENT PILLARS — 4 recurring themes with 3 example post ideas each. (4) VISUAL IDENTITY — color palette (with hex codes), typography feel, and image style that matches my personality. (5) One-line bio for my profiles, in 3 variants.",
        note: "Pick ONE positioning sentence and commit for 90 days. Brands form through repetition — changing direction weekly means starting from zero weekly.",
      },
      steps: [
        {
          html: `<h3>Niche: the riches are in the specifics</h3><p>"Lifestyle content for everyone" is a brand for no one. Strong niches sit at the intersection of three circles:</p><ul><li><strong>What you know or love</strong> — you'll be making content about this for years; passion is fuel</li><li><strong>What a specific audience needs</strong> — a real group with real questions ("busy parents who want to cook fast healthy meals", not "food lovers")</li><li><strong>What's underserved</strong> — where existing content is generic, outdated, or missing your angle</li></ul><p>The counterintuitive rule: <strong>narrower grows faster.</strong> "Fitness" is an ocean of competition; "strength training for people over 50" finds its audience in weeks. You can always widen later — a beloved niche brand earns the right to expand. A vague one never earns anything.</p>`,
          question: {
            text: "Why does \"strength training for people over 50\" typically grow faster than a general \"fitness\" account?",
            options: [
              "Older audiences spend more time on social media",
              "A specific audience instantly recognizes 'this is for ME' — and algorithms find that audience easier when the signal is clear",
              "General fitness content is banned on most platforms",
            ],
            correctIndex: 1,
            explanation:
              "Specificity creates instant self-recognition and gives recommendation algorithms a clean signal about who to show you to. Broad accounts compete with everyone for no one in particular — narrow accounts become the obvious choice for someone.",
          },
        },
        {
          html: `<h3>Voice and visual identity: your recognition system</h3><p>Your <strong>voice</strong> is how you sound everywhere — captions, videos, replies. Define 3 traits and hold them: warm-but-direct, playfully nerdy, calm and evidence-based... whatever is authentically YOU, amplified. Inconsistent voice reads as inauthentic; consistent voice compounds into personality people quote.</p><p>Your <strong>visual identity</strong> is being recognizable before the name is read: a consistent color palette, one or two fonts, a repeatable image style, recurring formats (same intro frame, same thumbnail layout).</p><div class="discovery"><p>💡 <strong>Content pillars: structure beats chaos</strong></p><p>Pillars are 3–5 recurring themes all your content maps to — e.g. a cooking creator's "15-minute recipes / ingredient science / kitchen fails / meal-prep Sundays". Pillars make you prolific (never staring at a blank page) AND recognizable (followers know what they subscribed to). Every strong creator you follow runs on pillars, visible or not.</p></div>`,
          question: {
            text: "What do content pillars do for a creator?",
            options: [
              "They limit creativity and should be avoided",
              "They make you prolific (recurring themes kill blank-page syndrome) and recognizable (followers know what they get)",
              "They're only needed for accounts over 100k followers",
            ],
            correctIndex: 1,
            explanation:
              "Pillars are the structure under sustainable creativity: 3–5 themes you rotate through, each with endless variations. They answer both \"what do I post today?\" and \"why do people follow me?\" — from day one, not follower one-hundred-thousand.",
          },
        },
        {
          html: `<p>Brand-building session with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🎨 A brand is a promise repeated until it's recognized. Let's sharpen yours.",
            },
            {
              bot: "Two bios. A: \"Sharing my life, thoughts and everything in between ✌️\" B: \"I teach freelancers to land better clients — one negotiation tip a day.\"",
              ask: "Which account grows faster?",
              inputType: "binary",
              options: ["A — broader appeal, more potential followers", "B — a specific promise to a specific audience"],
              correctIndex: 1,
              feedback:
                "B, decisively — it tells freelancers 'this is for YOU', tells the algorithm who to show it to, and makes the follow decision instant. A is wallpaper.",
              hint: "Which one makes someone think 'this is exactly for me'?",
            },
            {
              bot: "Match each brand element to what it does.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Niche positioning", right: "WHO it's for and what gap you fill" },
                { left: "Voice traits", right: "How you sound everywhere, consistently" },
                { left: "Visual identity", right: "Recognized before the name is read" },
                { left: "Content pillars", right: "Recurring themes that structure everything" },
              ],
              feedback:
                "That's the full identity kit — four elements that turn a poster into a brand.",
              hint: "Who / how you sound / how you look / what you cover.",
            },
            {
              bot: "Fill in the niche rule.",
              ask: "___ grows faster — you can always widen after the niche loves you.",
              inputType: "fill-blank",
              template: "___ grows faster — you can always widen after the niche loves you.",
              options: ["Narrower", "Broader", "Louder"],
              correctIndex: 0,
              feedback:
                "Narrower — specificity wins the early game. Beloved niche brands earn expansion; vague brands never earn anything.",
              hint: "The counterintuitive direction.",
            },
            {
              bot: "A creator's Monday posts are corporate-formal, Wednesday's are meme-chaos, Friday's are inspirational-poetic. Growth is flat and comments feel confused.",
              ask: "The diagnosis?",
              inputType: "choice",
              options: [
                "They post on the wrong days",
                "Voice whiplash — audiences can't bond with a personality that changes daily",
                "They need better hashtags",
              ],
              correctIndex: 1,
              feedback:
                "Voice whiplash — every post resets the audience's mental model of who you are. Pick 3 authentic voice traits, write them down, and let every post pass through that filter. Consistency compounds; chaos evaporates.",
              hint: "Could you describe this creator's personality in 3 words? Neither can their audience.",
            },
          ],
        },
        {
          html: `<h3>Building the kit with AI</h3><p>Brand identity used to need an agency — now it needs good prompts and honest self-knowledge:</p><ul><li><strong>Positioning:</strong> have AI interview you — "ask me 10 questions about my knowledge, audience, and angle, then draft 3 positioning statements" — and pick the one that feels both true and distinct</li><li><strong>Voice guide:</strong> paste your most natural writing (messages to friends work!) and ask AI to extract your voice traits with do/don't examples — then use that guide in every future content prompt</li><li><strong>Visual system:</strong> AI suggests palettes and styles matched to your personality; free tools like Canva turn them into reusable templates</li><li><strong>The 90-day commitment:</strong> one positioning, one voice, one look, held for 90 days. Brands form through repetition — you'll get bored of your own brand long before your audience even notices it. Push through that boredom</li></ul><p><strong>Identity built. Next: turning strangers who see your content into an audience that actually cares.</strong></p>`,
          question: {
            text: "Why hold one positioning and visual identity for 90 days minimum?",
            options: [
              "Platforms penalize profile changes",
              "Brands form through repetition — audiences need many exposures before recognition sets in, and weekly reinvention resets the clock to zero",
              "It takes 90 days to legally trademark a brand",
            ],
            correctIndex: 1,
            explanation:
              "You see your own content every day; your audience catches maybe one post in five. What feels repetitive to you is barely registering with them. Recognition is built by boring, beautiful repetition — creators who change direction weekly stay strangers forever.",
          },
        },
      ],
    },
    {
      title: "Connecting with Your Audience",
      summary:
        "Turn viewers into community — storytelling, engagement, and trust that compounds",
      content: `<p>Content gets you seen; connection gets you followed, trusted, and eventually supported. This lesson covers the mechanics of genuine audience connection — storytelling that makes strangers care, engagement habits that build community, and the trust economics underneath everything an influencer does.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my community and storytelling coach. My niche: [topic + audience]. My story: [2-3 sentences about why you do what you do — struggles, turning points, motivation. Honest beats impressive]. (1) Shape my origin story into a 150-word 'why I do this' post using the struggle → turning point → mission arc — in my voice: [paste a writing sample or describe your voice traits]. (2) Give me 5 story-driven post ideas that turn my ordinary experiences into connection moments (mistakes, behind-the-scenes, lessons, small wins). (3) Write my engagement playbook: 5 reply templates for common comment types (question, praise, criticism, spam, story-share) that sound like ME, not a bot. (4) One weekly 'community ritual' idea that fits my niche — something followers look forward to.",
        note: "Post the origin story this week — it's consistently among the highest-connection content any creator publishes. Vulnerability, not polish, is what audiences bond with.",
      },
      steps: [
        {
          html: `<h3>Stories beat statements</h3><p>Facts inform; stories bond. The human brain is wired to remember and retell narratives — which is why "5 productivity tips" scrolls past, but "the morning I missed my daughter's recital because of my broken calendar system" gets read, felt, and shared.</p><p>The creator's workhorse arc is simple: <strong>struggle → turning point → lesson.</strong></p><ul><li><strong>Struggle:</strong> the relatable low point — specific, honest, human</li><li><strong>Turning point:</strong> what changed — the discovery, decision, or failure that taught you</li><li><strong>Lesson:</strong> what the audience takes away — the value wrapped inside the story</li></ul><p>Your ordinary moments are story material: mistakes, behind-the-scenes mess, small wins, client conversations. <strong>Audiences don't connect with perfection — they connect with recognition:</strong> "that's me, that's my struggle."</p>`,
          question: {
            text: "Why does \"the mistake that cost me my first client\" outperform \"5 tips for client management\" in building connection?",
            options: [
              "Negative titles always get more clicks",
              "Stories create recognition and emotional memory — audiences bond with shared struggle, not polished advice",
              "Tips are copyrighted content on most platforms",
            ],
            correctIndex: 1,
            explanation:
              "Tips are commodities — thousands of accounts post them. Your lived story is unrepeatable, and the struggle→turning point→lesson arc delivers the same value WITH emotional glue. Same lesson, but this time they remember who taught it.",
          },
        },
        {
          html: `<h3>Engagement is a habit, not an accident</h3><p>Community forms in the small interactions, and the platforms reward it — engagement signals tell algorithms your content matters:</p><ul><li><strong>Reply meaningfully, especially early:</strong> the first hour's comments deserve real responses, not "🙏". Substantive replies double the conversation and the algorithmic signal</li><li><strong>Ask real questions:</strong> end posts with questions you actually want answered — then USE the answers in future content ("you asked, here's the follow-up")</li><li><strong>Name and celebrate your people:</strong> feature follower questions, credit good comments, remember regulars. Being seen is the rarest gift online</li><li><strong>Create rituals:</strong> weekly Q&As, monthly challenges, recurring formats — appointments that turn an audience into a community</li></ul><div class="discovery"><p>💡 <strong>The parasocial responsibility</strong></p><p>Followers will feel they know you long before you know they exist — that one-sided closeness is the engine of influence, and it's exactly why trust, honesty, and disclosure matter so much. People act on your recommendations because they trust their "friend". Never spend that trust cheaply — it's the entire asset.</p></div>`,
          question: {
            text: "Why do thoughtful replies in the first hour after posting matter twice?",
            options: [
              "Platforms delete comments after an hour",
              "They deepen the human connection AND double the engagement signal that tells the algorithm your post matters",
              "Early commenters are usually bots that need filtering",
            ],
            correctIndex: 1,
            explanation:
              "Every reply is both a relationship moment and an algorithmic vote. Early conversation compounds: the commenter feels seen, other viewers see an active community, and the platform reads a post worth distributing further.",
          },
        },
        {
          html: `<p>Connection practice with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 💬 Content is the invitation; connection is the relationship. Let's train the relationship skills.",
            },
            {
              bot: "Rebuild the storytelling arc that turns experiences into connection.",
              ask: "Arrange the story arc:",
              inputType: "arrange",
              words: ["Struggle", "then", "turning", "point", "then", "lesson"],
              feedback:
                "That's the arc — relatable low, honest change, useful takeaway. It turns any ordinary Tuesday into content people feel.",
              hint: "Low point → change → takeaway.",
            },
            {
              bot: "A follower comments: \"Tried your method and honestly it didn't work for me at all.\" Pick your reply.",
              ask: "Best response?",
              inputType: "choice",
              options: [
                "Delete the comment — negativity hurts the brand",
                "\"Thanks for the honesty! What part broke down for you? I'll cover the common pitfalls in a follow-up\" — curiosity in public",
                "Ignore it and pin a positive comment over it",
              ],
              correctIndex: 1,
              feedback:
                "Curiosity wins — everyone watching learns you handle criticism like an adult, the commenter becomes source material for your next post, and trust GROWS from the visible honesty. Deleting reads as guilt.",
              hint: "Hundreds of silent followers are watching how you respond.",
            },
            {
              bot: "Match each engagement habit to what it builds.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Substantive replies in hour one", right: "Connection + algorithmic signal" },
                { left: "Featuring follower questions in content", right: "People feel seen — loyalty deepens" },
                { left: "Weekly recurring ritual", right: "Audience becomes appointment community" },
              ],
              feedback:
                "Exactly — small habits, compounding returns. Community is built in the replies, not the posts.",
              hint: "Respond, spotlight, repeat.",
            },
            {
              bot: "Gut-check: \"I'll focus on making great content and skip replying to comments — the work should speak for itself.\"",
              ask: "Sound strategy?",
              inputType: "binary",
              options: ["Yes — quality content is everything", "No — connection is built in interactions, and engagement fuels distribution"],
              correctIndex: 1,
              feedback:
                "No — broadcast-only accounts plateau. The replies ARE the community-building work, and engagement signals drive the algorithm that decides your reach. Great content opens the door; conversation invites people in.",
              hint: "What's the difference between an audience and a community?",
            },
          ],
        },
        {
          html: `<h3>AI as your connection amplifier — not your replacement</h3><p>The rule: <strong>AI drafts, you humanize.</strong> Connection is the one area where full automation backfires — audiences unfollow the moment replies feel botted. The right division of labor:</p><ul><li><strong>Story mining:</strong> "interview me about my week, then find the 3 moments worth telling as posts" — AI is a great story editor for experiences only you had</li><li><strong>Reply assistance:</strong> AI drafts responses to common comment types in your voice — you edit and add the personal detail that proves a human read it</li><li><strong>Question harvesting:</strong> paste your comments monthly — "what do people repeatedly ask? What content would answer it?" Your community literally writes your content calendar</li><li><strong>Ritual planning:</strong> AI designs the weekly Q&A format or monthly challenge; you show up and be genuinely present in it</li></ul><p><strong>Trust compounds slowly and spends fast. Next lesson: the content strategy that keeps you consistently valuable without burning out.</strong></p>`,
          question: {
            text: "Where is the line for using AI in audience connection?",
            options: [
              "Never use AI for anything community-related",
              "AI drafts and organizes — but the personal detail, judgment, and presence must stay human, because audiences detect and punish full automation",
              "Fully automate replies — nobody can tell the difference",
            ],
            correctIndex: 1,
            explanation:
              "AI excels at mining stories, drafting reply skeletons, and spotting patterns in comments. But connection IS the product — the moment replies feel generated, the parasocial trust that powers everything else starts dissolving.",
          },
        },
      ],
    },
    {
      title: "Content Strategy and Creation",
      summary:
        "The sustainable content machine — calendars, batching, and AI-powered repurposing",
      content: `<p>Most creators don't fail from lack of talent — they fail from burnout in month three. This lesson builds your sustainable content machine: a strategy that decides WHAT to make, a calendar that decides WHEN, and an AI-assisted workflow that produces a week of content in an afternoon.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my content strategist and build my 30-day content calendar. My niche: [topic + audience]. My pillars: [your 3-5 content pillars, or ask AI to propose them first]. My realistic capacity: [posts per week I can ACTUALLY sustain + which formats: text, image, video]. My voice: [3 traits or paste a sample]. Build: (1) a 30-day calendar — for each post: pillar, format, working title, and the hook (first line); balance the pillars and include 20% experiments. (2) Mark which 4 posts are 'anchor' content (bigger pieces) and show how to repurpose EACH anchor into 3+ smaller posts. (3) Give me a 2-hour weekly batching agenda: what I create, edit, and schedule in one sitting. (4) Draft the first week's posts in full so I can start today.",
        note: "The capacity question is the whole game — a calendar you can sustain for a year beats an impressive one you abandon by week three. Cut your ambition in half, then start.",
      },
      steps: [
        {
          html: `<h3>Strategy: the anchor-and-atoms model</h3><p>Random posting is a treadmill; strategic creation is a system. The model that powers most successful creators:</p><ul><li><strong>Anchor content:</strong> one substantial piece per week — a blog post, a long video, a deep thread. This is where your real value and search traffic live</li><li><strong>Atomized content:</strong> each anchor splits into 3–7 smaller pieces — quotes become graphics, sections become short posts, key points become short videos. One thinking session, a week of presence</li><li><strong>Pillar rotation:</strong> your calendar rotates through your 3–5 pillars so the feed stays varied but on-brand</li><li><strong>The 80/20 experiment rule:</strong> ~80% proven formats, ~20% experiments — enough novelty to learn, enough consistency to grow</li></ul><p>This is how one person outputs like a media team: <strong>create once, publish everywhere.</strong></p>`,
          question: {
            text: "What's the core idea of the anchor-and-atoms content model?",
            options: [
              "Post as much as possible on every platform simultaneously",
              "Create one substantial piece weekly, then split it into many smaller posts — one thinking session powers a week of presence",
              "Only create short content since nobody reads long-form anymore",
            ],
            correctIndex: 1,
            explanation:
              "Repurposing is the highest-leverage habit in content creation: the deep work happens once, and each anchor feeds graphics, short posts, and clips all week. It's the difference between a treadmill and a machine.",
          },
        },
        {
          html: `<h3>Calendars and batching: how consistency actually happens</h3><p>Consistency isn't a personality trait — it's a scheduling decision:</p><ul><li><strong>The content calendar:</strong> planned 2–4 weeks ahead, so you never face a blank page on posting day. Planning and creating are different brain modes — separate them</li><li><strong>Batching:</strong> one 2–3 hour weekly session producing everything — drafts, visuals, scheduling. Context-switching is the hidden tax; batching eliminates it</li><li><strong>Scheduling tools:</strong> queue the week in advance. Your presence stays daily even when your effort is weekly</li></ul><div class="discovery"><p>💡 <strong>Quality bar: helpful beats impressive</strong></p><p>The post that helps one specific person with one specific problem outperforms the "masterpiece" that took three weeks. Volume with genuine usefulness beats sporadic perfection — and shipping regularly is also how you get GOOD. Your 50th post will embarrass your 5th. That's the plan working.</p></div>`,
          question: {
            text: "Why does batching (one weekly creation session) beat creating each post on its posting day?",
            options: [
              "Platforms boost content created in batches",
              "It eliminates daily context-switching and blank-page decisions — turning consistency from willpower into a schedule",
              "Batched content is automatically higher quality",
            ],
            correctIndex: 1,
            explanation:
              "Deciding what to make and making it are different brain modes, and doing both daily burns creators out. One planning session plus one batch session means posting day requires zero willpower — the machine already ran.",
          },
        },
        {
          html: `<p>Content machine workshop with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🏭 Let's turn 'I should post more' into a machine that posts for you. Drills!",
            },
            {
              bot: "You wrote one strong blog post: \"7 mistakes new freelancers make\". Match each atom to its format.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Mistake #3 as a 60-second talking video", right: "Short video clip" },
                { left: "The 7 mistakes as a swipeable list", right: "Carousel graphic" },
                { left: "The most controversial line", right: "Quote post that sparks comments" },
              ],
              feedback:
                "One anchor, three atoms, days of presence — and each format reaches people the others miss. That's the machine.",
              hint: "Video people, swipers, and debaters all get served.",
            },
            {
              bot: "Fill in the repurposing motto.",
              ask: "Create ___, publish everywhere.",
              inputType: "fill-blank",
              template: "Create ___, publish everywhere.",
              options: ["once", "daily", "reluctantly"],
              correctIndex: 0,
              feedback:
                "Once — the thinking happens one time, the value travels in every format. Highest-leverage habit in the whole creator playbook.",
              hint: "How many times should the hard thinking happen?",
            },
            {
              bot: "A creator plans 2 posts daily across 4 platforms... while working full-time. Week 1 goes great. Predict week 4.",
              ask: "Your forecast?",
              inputType: "binary",
              options: ["Thriving — ambition finds a way", "Abandoned — unsustainable pace kills more creators than lack of talent"],
              correctIndex: 1,
              feedback:
                "Abandoned — the graveyard of creator accounts is full of impressive week-one calendars. Sustainable and boring beats ambitious and dead. One platform, a few good posts weekly, kept for a year: that's the winning bet.",
              hint: "What's the most common reason creators quit by month three?",
            },
            {
              bot: "Your experiment post (a new format) flopped: half your usual likes. Your proven format keeps performing.",
              ask: "What does the 80/20 rule say?",
              inputType: "choice",
              options: [
                "Never experiment again — protect the numbers",
                "Keep experimenting with ~20% of posts — flops are tuition, and every proven format was once an experiment",
                "Switch entirely to experiments — the old format is clearly dying",
              ],
              correctIndex: 1,
              feedback:
                "Keep the 20% lane open — one flop is data, not verdict. Your next breakout format is hiding in those experiments, and the 80% proven lane pays the bills while you search. Balance is the strategy.",
              hint: "Where did your current 'proven format' originally come from?",
            },
          ],
        },
        {
          html: `<h3>The AI-assisted creation workflow</h3><p>Here's the weekly loop where AI earns its keep — recall lesson one: AI is your behind-the-scenes team:</p><ul><li><strong>Ideate (10 min):</strong> "20 post ideas across my pillars for [audience], ranked by likely engagement" — you pick, AI never decides alone</li><li><strong>Draft (30 min):</strong> AI produces first drafts in your voice (feed it your voice guide from the brand lesson) — you edit for truth, specificity, and the details only you know</li><li><strong>Atomize (20 min):</strong> paste your anchor — "split this into a carousel, 3 short posts, and a video script, keeping my voice"</li><li><strong>Schedule (10 min):</strong> queue everything; your calendar runs while you live your life</li><li><strong>Learn (10 min):</strong> monthly, paste your top and bottom posts — "what patterns separate my winners from my flops?"</li></ul><p><strong>The machine is built. Next: the format that platforms currently reward most — video.</strong></p>`,
          question: {
            text: "In the AI-assisted workflow, what part must stay firmly human?",
            options: [
              "Typing speed — AI types too slowly",
              "Editing for truth and adding the specific details and experiences only you know — AI drafts, you make it real",
              "Scheduling — AI can't use calendar tools",
            ],
            correctIndex: 1,
            explanation:
              "AI accelerates ideation, drafting, and repurposing brilliantly — but generic AI content is instantly recognizable and forgettable. Your lived specifics, opinions, and voice edits are what make the draft worth following. AI is the team; you're the talent.",
          },
        },
      ],
    },
    {
      title: "Video Content",
      summary:
        "Short-form video mastery — hooks, scripts, and AI tools that put you on camera (or not)",
      content: `<p>Video is where platforms currently pour their reach — short-form clips are the fastest audience-builder in the game. And the barrier has collapsed: AI writes scripts, generates avatars, adds captions, and edits clips. This lesson makes you video-capable in both paths: on camera, or through AI-generated presence.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my short-form video producer. My niche: [topic + audience]. My path: [on-camera / AI avatar / faceless voiceover]. My pillars: [list them]. (1) Write 3 complete 45-second video scripts from my pillars, each formatted as: HOOK (first 3 seconds, on-screen text + spoken line), BODY (the value, in short punchy lines with a visual note per line), PAYOFF (the takeaway), CTA (one action). (2) Make the 3 hooks deliberately different styles: question, bold claim, mistake-confession. (3) For my path, list the exact recording/generation setup: tools, settings, and a 30-minute production checklist. (4) Suggest my repeatable video 'signature' — an opening pattern, visual element, or catchphrase that makes my videos recognizable in 1 second.",
        note: "Record the first script today — done on a phone, edited with free tools. Your first 10 videos are practice reps nobody will see once you're good; the only way past them is through them.",
      },
      steps: [
        {
          html: `<h3>Why video, why now</h3><p>Three forces make video the highest-leverage format for a new creator:</p><ul><li><strong>Distribution bias:</strong> platforms push short video to NON-followers aggressively — it's the main format where zero-follower accounts regularly reach thousands</li><li><strong>Trust speed:</strong> voice, face (or consistent avatar), and personality transmit in seconds what text takes months to build — video followers convert to true fans faster</li><li><strong>The collapsed barrier:</strong> phone cameras are enough, free editors are excellent, and AI now handles scripts, captions, avatars, and voiceovers</li></ul><p>The structure of a winning short video is brutally consistent: <strong>hook (0–3s) → value (the promise delivered fast) → payoff (the takeaway lands) → CTA (one next action).</strong> Master this one skeleton and every platform rewards you.</p>`,
          question: {
            text: "Why is short-form video the best format for an account with zero followers?",
            options: [
              "Video is easier to make than text posts",
              "Platforms actively push short video to non-followers — it's the format where new accounts regularly reach people who never followed them",
              "Text posts are being phased out on all platforms",
            ],
            correctIndex: 1,
            explanation:
              "Most formats mainly reach your existing audience — short video is distributed to strangers by design. For a new creator, that's the growth loophole: the platform does your promotion, if the hook earns it.",
          },
        },
        {
          html: `<h3>The hook: your 3-second contract</h3><p>Same law as advertising: viewers decide in under 3 seconds. Hook patterns that consistently work:</p><ul><li><strong>The direct callout:</strong> "If you're a freelancer undercharging, this is for you"</li><li><strong>The bold claim:</strong> "This 5-minute habit replaced my $200 planner system"</li><li><strong>The mistake confession:</strong> "I wasted two years doing this wrong"</li><li><strong>The curiosity gap:</strong> "Nobody talks about the real reason blogs fail"</li><li><strong>Visual pattern-break:</strong> movement, text overlay, unexpected first frame — the eyes stop before the ears engage</li></ul><div class="discovery"><p>💡 <strong>Retention is the real metric</strong></p><p>Platforms rank videos by watch-through: a 40-second video watched fully beats a 3-minute video abandoned at 20%. Cut ruthlessly — every second must earn the next. Say it shorter, move faster, end before they're ready.</p></div>`,
          question: {
            text: "Two videos: A is 3 minutes, viewers leave after 20 seconds. B is 40 seconds, watched to the end. Which does the platform push?",
            options: [
              "A — longer videos mean more total watch time",
              "B — completion rate signals a satisfying video, and platforms distribute what satisfies",
              "Both equally — length doesn't matter",
            ],
            correctIndex: 1,
            explanation:
              "Retention percentage is the ranking currency: a fully-watched short video tells the algorithm 'people who start this, finish it — show it to more people'. Ruthless cutting isn't style advice, it's distribution strategy.",
          },
        },
        {
          html: `<p>Video studio session with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🎬 Lights, phone, action! Let's train your video instincts.",
            },
            {
              bot: "Rebuild the winning short-video skeleton. Tap in order.",
              ask: "Arrange the video structure:",
              inputType: "arrange",
              words: ["Hook", "then", "value", "then", "payoff", "then", "CTA"],
              feedback:
                "That's the skeleton behind millions of successful clips — stop them, serve them, land it, direct them. Every video you make runs on these bones.",
              hint: "Stop → serve → land → direct.",
            },
            {
              bot: "Two openings for a budgeting video. A: \"Hey guys! Welcome back to my channel, today we're talking about budgeting...\" B: \"You don't have a money problem — you have an invisible spending problem. Watch.\"",
              ask: "Which survives the 3-second test?",
              inputType: "binary",
              options: ["A — friendly and welcoming", "B — a bold claim that demands the next 10 seconds"],
              correctIndex: 1,
              feedback:
                "B — 'Hey guys, welcome back' is the sound of a thousand thumbs swiping. B makes a claim the brain needs resolved. Skip the greeting; start with the reason to stay.",
              hint: "Which opening would stop YOUR scroll?",
            },
            {
              bot: "Match each AI video tool category to what it does for you.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Script generation (ChatGPT/Claude)", right: "Hook + structure drafted in your voice" },
                { left: "AI avatar tools", right: "A presenter on screen without you on camera" },
                { left: "Auto-caption tools", right: "Text overlay for the majority watching muted" },
              ],
              feedback:
                "The full AI video crew — writer, presenter, and editor. What used to need a team now needs an afternoon.",
              hint: "Words, face, subtitles.",
            },
            {
              bot: "A creator's videos get solid views but zero followers from them. The videos deliver value... then just end.",
              ask: "What's missing?",
              inputType: "choice",
              options: [
                "Better lighting and a more expensive camera",
                "The CTA — viewers need one clear next action: follow for the series, grab the guide, comment their situation",
                "Longer videos with more content",
              ],
              correctIndex: 1,
              feedback:
                "The CTA — attention without direction evaporates. One line changes everything: 'Follow — this is part 1 of 5.' Viewers do what you ask surprisingly often, but only if you actually ask.",
              hint: "The video ends... and the viewer is supposed to do what, exactly?",
            },
          ],
        },
        {
          html: `<h3>Your production path: camera or avatar</h3><p><strong>On-camera path:</strong> phone at eye level, face a window for light, record standing (energy transmits), read from AI-generated bullet scripts, and batch 3–5 videos per session. Rough authenticity outperforms polish — remember the feed rewards native, human-feeling content.</p><p><strong>AI-presence path:</strong> avatar tools turn scripts into presented videos; voiceover + AI visuals make faceless explainers; consistent character prompts keep your digital presenter recognizable (lesson 2's rules apply — disclose, stay consistent, keep the human judgment).</p><p><strong>Either path, same weekly loop:</strong></p><ul><li>AI drafts 3 scripts from your pillars → you punch up the hooks with your specifics</li><li>One batch session: record or generate</li><li>Captions on everything (most viewers watch muted), post natively per platform</li><li>Monthly: paste retention stats into AI — "where do viewers drop off, and what should I change?"</li></ul><p><strong>Foundation complete! You have identity, connection, content, and video. Next unit: growth — platforms, collaborations, measurement, and money.</strong></p>`,
          question: {
            text: "Why do captions matter so much on short-form video?",
            options: [
              "They're legally required on all platforms",
              "Most viewers watch with sound off — no captions means your message never reaches them",
              "Captions make videos load faster",
            ],
            correctIndex: 1,
            explanation:
              "A majority of feed video is watched muted — in public, at work, in bed. Captions keep the hook and value landing regardless, and AI caption tools make this a zero-effort win. No captions, no message, no follow.",
          },
        },
      ],
    },
  ],
};

export const SOCIAL_INFLUENCE_UNIT_2: UnitSeed = {
  title: "Growth and Sustainable Influence",
  lessons: [
    {
      title: "Platforms and Profiles",
      summary:
        "Choose your platforms strategically — and build profiles that convert visitors into followers",
      content: `<p>Every platform is a different country with different customs, algorithms, and audiences — and trying to live in all of them at once is how new creators dissolve. This lesson picks YOUR platform mix strategically, sets up the blog-plus-social system that compounds, and turns your profiles into follower-converting landing pages.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my platform strategist. My niche: [topic + audience]. My content strengths: [writing / talking / visuals / video]. My weekly hours: [number]. My goals: [audience growth / leads for a business / future monetization]. (1) Recommend my HOME platform (where I post natively and engage daily) and ONE satellite platform (where repurposed content flows) — with honest reasoning for my specific case, including where my audience actually spends time. (2) Should I run a blog alongside social? Given my niche, what would blog + SEO add in 12 months that social can't? (3) Audit-proof my profile: write my bio (3 variants), suggest my pinned content, and the one link strategy. (4) My 90-day platform plan: what does week 1, month 1, and month 3 look like?",
        note: "Resist the urge to be everywhere — one platform done daily beats four done badly. The satellite gets repurposed content only; your energy lives at home.",
      },
      steps: [
        {
          html: `<h3>Choose a home, not a tour</h3><p>The platform decision comes down to three questions:</p><ul><li><strong>Where is your audience actually active?</strong> B2B professionals, visual shoppers, readers, and entertainment-seekers each cluster on different platforms</li><li><strong>What content do you naturally produce?</strong> Writers thrive on text platforms and blogs; talkers on video; visual creators on image-first feeds. Fighting your nature doubles the work</li><li><strong>Where can you show up daily?</strong> The honest capacity question — algorithms reward presence and engagement, not occasional visits</li></ul><p>The winning structure: <strong>one HOME platform</strong> (native content, daily engagement, community building) <strong>plus one satellite</strong> (repurposed content, minimal extra effort). Expand only after the home is thriving — the same expansion-from-strength rule that governs all growth.</p>`,
          question: {
            text: "What's the recommended platform structure for a new creator?",
            options: [
              "Post identical content everywhere simultaneously for maximum reach",
              "One home platform with daily native presence, plus one satellite fed by repurposed content",
              "Rotate platforms monthly to find the best one",
            ],
            correctIndex: 1,
            explanation:
              "Each platform rewards natives and punishes tourists. Concentrating energy at home builds real momentum, while the satellite captures extra reach nearly free through repurposing — expansion comes later, from strength.",
          },
        },
        {
          html: `<h3>The blog: your owned foundation</h3><p>Remember why this course is called Social Influence AND Blogging — the blog plays a role social can't:</p><ul><li><strong>You own it:</strong> no algorithm change can delete your reach overnight; your email list and blog are the assets platforms can't take</li><li><strong>Search compounds:</strong> a good blog post answering a real question earns readers for YEARS via search — social posts die in days</li><li><strong>Depth converts:</strong> the trust that turns readers into clients, buyers, or subscribers is built in long-form, not 40-second clips</li><li><strong>It's your anchor factory:</strong> the anchor-and-atoms model from the content lesson — blog posts ARE the anchors that feed your social atoms</li></ul><div class="discovery"><p>💡 <strong>The profile as landing page</strong></p><p>Every good post sends strangers to your profile, where they decide in seconds: follow or forget. The convert kit: a bio that states WHO you help and WITH WHAT (not vague vibes), a pinned post that shows your best value, and ONE link with a clear next step. Audit your profile as if you were a stranger — because every day, hundreds are.</p></div>`,
          question: {
            text: "What does a blog add that social platforms fundamentally can't?",
            options: [
              "Blogs automatically go viral more often",
              "Ownership and compounding — no algorithm controls your reach, and search traffic grows for years while social posts die in days",
              "Blogs require no writing skill",
            ],
            correctIndex: 1,
            explanation:
              "Social rents you an audience the platform can repossess with one algorithm change. The blog (plus the email list it feeds) is owned infrastructure — and search-driven posts keep delivering readers years after publishing. Rent social, own your base.",
          },
        },
        {
          html: `<p>Platform strategy session with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🗺️ Platforms are countries — let's plan your citizenship wisely.",
            },
            {
              bot: "Match each creator to their natural home platform strategy.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Consultant targeting corporate decision-makers", right: "Professional network + long-form articles" },
                { left: "Visual recipe creator", right: "Image and short-video feeds" },
                { left: "Deep-thinking writer who hates cameras", right: "Blog + text-first platforms" },
              ],
              feedback:
                "Right — the platform follows from the audience AND your natural format. Fighting your nature doubles the workload for half the result.",
              hint: "Where's the audience, and what do you enjoy making?",
            },
            {
              bot: "Fill in the ownership principle.",
              ask: "Social reach is rented; your blog and ___ list are owned.",
              inputType: "fill-blank",
              template: "Social reach is rented; your blog and ___ list are owned.",
              options: ["email", "wish", "shopping"],
              correctIndex: 0,
              feedback:
                "Email — the list nobody's algorithm can take away. Every serious creator funnels social attention toward owned assets.",
              hint: "The list that lands in inboxes.",
            },
            {
              bot: "A creator's videos get great reach, but their profile bio reads: \"Dreamer ✨ Coffee lover ☕ Living my best life\". Visitors come... and don't follow.",
              ask: "The fix?",
              inputType: "choice",
              options: [
                "More emojis to show personality",
                "A bio stating who they help and with what — the profile is a landing page, and vague vibes don't convert",
                "Delete the profile and start over",
              ],
              correctIndex: 1,
              feedback:
                "Landing page logic — the visitor asks 'what do I get by following?' and the bio must answer instantly. 'I help new freelancers price with confidence — weekly scripts and tips' converts; coffee vibes don't.",
              hint: "A stranger gives your profile 5 seconds. What must they learn?",
            },
            {
              bot: "Gut-check: a new creator with 4 free hours a week wants accounts on five platforms, 'to not miss any opportunity'.",
              ask: "Smart hedge?",
              inputType: "binary",
              options: ["Yes — cover every base", "No — 4 hours split five ways is failure everywhere; one home done well wins"],
              correctIndex: 1,
              feedback:
                "One home — spreading 4 hours across five platforms means being a ghost on all of them. Algorithms reward daily natives, not weekly tourists. Master one, repurpose to a second, expand from strength later.",
              hint: "48 minutes per platform per week — can any community form?",
            },
          ],
        },
        {
          html: `<h3>The compounding system: blog + social + AI</h3><p>Assembling the machine that grows while you sleep:</p><ul><li><strong>Weekly anchor on the blog:</strong> one genuinely useful post targeting a question your audience searches (AI helps: "what questions does [audience] search about [topic]? Rank by my chance to answer better than existing results")</li><li><strong>Atomize to home + satellite:</strong> the AI repurposing workflow from the content lesson — blog feeds social automatically</li><li><strong>Profile funnels back:</strong> social bios link to the blog/email list — rented attention converts to owned audience daily</li><li><strong>Quarterly platform review with AI:</strong> "here's my growth and engagement by platform [paste] — is my home still right? Is the satellite earning its slot?"</li></ul><p><strong>The loop: search finds the blog, blog feeds social, social sends followers to owned assets, and every month the whole system compounds. Next: growing faster by borrowing audiences — collaborations.</strong></p>`,
          question: {
            text: "In the blog + social system, what's the strategic role of the social bio link?",
            options: [
              "It fills required profile fields",
              "It funnels rented social attention into owned assets — the blog and email list that no algorithm controls",
              "It improves the account's search ranking",
            ],
            correctIndex: 1,
            explanation:
              "Every follower is one algorithm change from disappearing; every email subscriber is yours. The bio link is the bridge where rented attention becomes owned audience — the quiet but critical step most creators skip.",
          },
        },
      ],
    },
    {
      title: "Brand and Peer Collaborations",
      summary:
        "Borrow audiences and land brand deals — pitching, media kits, and collab math",
      content: `<p>The fastest organic growth hack isn't a hack at all: it's standing in front of someone else's audience. Peer collaborations grow your following; brand collaborations grow your income. This lesson covers both — including the pitch, the media kit, and the professionalism that gets you invited back.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my collaborations manager. My niche: [topic]. My numbers: [followers, average engagement — small is fine!]. My content style: [describe or paste examples]. (1) PEER COLLABS: identify 5 types of creators (adjacent niches, similar size) I should partner with, and 3 collaboration formats that fit my content (e.g. guest posts, joint lives, content swaps, interview series). Draft one outreach message that offers clear value to THEM — warm, specific, non-cringe. (2) BRAND COLLABS: list 10 realistic brand categories for my niche and size (think small/niche brands, not global giants). Build my one-page media kit outline: what to include with my numbers, and how to frame a small-but-engaged audience as an ASSET. (3) Draft my brand pitch email template. (4) Red lines: help me define which products/categories I won't promote, so trust never gets traded for a paycheck.",
        note: "Send ONE peer collab message this week — peer collabs cost nothing, grow both sides, and are how small creators break their ceiling. Brand deals follow audiences; audiences follow collabs.",
      },
      steps: [
        {
          html: `<h3>Peer collaborations: the free growth engine</h3><p>Every follower you have discovered you SOMEWHERE. Collaborations put you in front of pre-warmed audiences — people who already follow someone like you:</p><ul><li><strong>Choose adjacent, not identical:</strong> a meal-prep creator and a fitness coach share an audience without competing — the overlap is the opportunity</li><li><strong>Match energy, not just size:</strong> similar-sized creators say yes far more often, and both sides genuinely benefit. A creator 100x your size has no reason to reply — yet</li><li><strong>Formats that work at any size:</strong> guest posts on each other's blogs, joint live sessions, interview swaps, content trades ("I'll make X for your audience, you make Y for mine"), shared challenges</li><li><strong>The outreach rule:</strong> lead with THEIR benefit and a concrete idea. "I love your content, want to collab?" gets ignored; "your audience asks about X a lot — I could write a guest piece on exactly that, and here are 3 title options" gets replies</li></ul>`,
          question: {
            text: "Why do adjacent-niche creators of similar size make the best first collaboration partners?",
            options: [
              "They're legally allowed to share content",
              "Shared audience without competition, and mutual benefit at similar scale — both sides genuinely gain, so yes comes easy",
              "Bigger creators are always too expensive to work with",
            ],
            correctIndex: 1,
            explanation:
              "The meal-prep creator's followers WANT fitness content (adjacent), and a same-sized partner gains as much as you do (mutual). That symmetry is why peer collabs are the most reliable free growth channel for small creators.",
          },
        },
        {
          html: `<h3>Brand collaborations: turning trust into deals</h3><p>Brands pay creators for one thing: <strong>authentic access to a trusting audience.</strong> The surprise for beginners — size matters less than you think:</p><ul><li><strong>Engagement beats reach:</strong> a 3,000-follower account with lively comments and real niche authority often out-converts a 100k account with passive scrollers. Brands increasingly know this — "micro-influencers" are a deliberate strategy</li><li><strong>The media kit:</strong> your one-page professional summary — who you are, who your audience is, your numbers (followers, engagement rate, audience demographics), formats you offer, and past work. AI drafts it; simple design tools make it pretty</li><li><strong>The pitch:</strong> short, specific, brand-aware — show you know THEIR product and audience, propose a concrete content idea, attach the kit</li></ul><div class="discovery"><p>💡 <strong>The trust ledger</strong></p><p>Every promotion spends trust; every honest recommendation earns it back with interest. Rules that protect the ledger: only promote what you'd genuinely recommend, disclose every paid partnership clearly (it's also the law in most markets — #ad is your friend), and keep promotions a small fraction of your content. One paycheck is never worth the asset.</p></div>`,
          question: {
            text: "Why do brands increasingly seek \"micro-influencers\" with small but engaged audiences?",
            options: [
              "Small accounts are easier to control contractually",
              "Engaged niche audiences trust recommendations and act on them — conversion beats raw reach, and micro-creators deliver it cheaper",
              "Large influencers are banned from brand work in many countries",
            ],
            correctIndex: 1,
            explanation:
              "A brand doesn't buy impressions — it buys action. Three thousand people who genuinely trust a niche creator out-purchase a hundred thousand passive scrollers, at a fraction of the cost. Your smallness plus engagement IS a sales asset — frame it that way.",
          },
        },
        {
          html: `<p>Collab negotiation practice with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🤝 Collabs are how small creators break the ceiling. Let's practice the moves.",
            },
            {
              bot: "Two outreach messages to a same-sized creator. A: \"Hey! Love your content 😍 We should collab sometime!\" B: \"Your audience asked about meal timing in your last 3 posts — I could write you a guest piece answering exactly that, and you could share your training split with my readers. Two title ideas attached.\"",
              ask: "Which gets a reply?",
              inputType: "binary",
              options: ["A — friendly and low-pressure", "B — concrete idea, clear mutual value, work already started"],
              correctIndex: 1,
              feedback:
                "B — it answers 'what's in it for me and what exactly do you want?' before being asked. Vague enthusiasm creates work for the receiver; concrete proposals create yes.",
              hint: "Which message could be answered with a single 'yes'?",
            },
            {
              bot: "Match each collab format to its superpower.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Guest post swap", right: "Both blogs gain content + new readers" },
                { left: "Joint live session", right: "Real-time audiences meet, energy compounds" },
                { left: "Interview series", right: "Their name draws their audience to your feed" },
              ],
              feedback:
                "Every format is the same trade at heart: audiences introduced, value exchanged, both sides grow.",
              hint: "Written, live, and conversational flavors of the same trade.",
            },
            {
              bot: "A supplement brand offers your first-ever paycheck for promoting a product you privately think is junk. Your audience trusts your recommendations.",
              ask: "The call?",
              inputType: "choice",
              options: [
                "Take it — everyone starts somewhere, and rent is real",
                "Decline — trust took months to build, spends in one post, and the audience is the entire business",
                "Take it but hide the #ad disclosure so it looks organic",
              ],
              correctIndex: 1,
              feedback:
                "Decline — promoting junk spends your only real asset, and hiding disclosure (option C) adds legal trouble to the trust damage. The creators who last treat every promotion as a loan against trust that honest work must repay.",
              hint: "What exactly is the brand paying to access?",
            },
            {
              bot: "Fill in the pitch principle.",
              ask: "A brand pitch should be short, specific, and propose a concrete content ___ — not just ask for money.",
              inputType: "fill-blank",
              template: "A brand pitch should be short, specific, and propose a concrete content ___ — not just ask for money.",
              options: ["idea", "budget", "contract"],
              correctIndex: 0,
              feedback:
                "Idea — 'here's the post I'd make for your product and why my audience will care' does the brand's imagination work for them. Pitches that paint the picture get the deals.",
              hint: "Show them the post before it exists.",
            },
          ],
        },
        {
          html: `<h3>The AI-powered collab machine</h3><p>Your repeatable partnership workflow:</p><ul><li><strong>Prospect list:</strong> "list 20 adjacent-niche creator types and 10 realistic brand categories for a [your niche] creator with [your size] audience" — then find real names in each category</li><li><strong>Personalized outreach at scale:</strong> AI drafts each pitch from a template + the target's recent content (you supply 2–3 specifics) — personalization is the difference between outreach and spam</li><li><strong>Media kit maintenance:</strong> update numbers monthly; AI reframes them into benefit language ("engagement 4x niche average" beats "3,200 followers")</li><li><strong>Professional delivery:</strong> hit deadlines, over-deliver slightly, report results back to brands unprompted — the invited-back rate is where collab careers are actually made</li><li><strong>Track everything:</strong> a simple collab log (who, what, result) becomes AI-analyzable — "which partnership types grew me most?"</li></ul><p><strong>Growth now has a network effect. Next: reading your numbers honestly — so you double down on what actually works.</strong></p>`,
          question: {
            text: "What actually builds a long-term collaboration career?",
            options: [
              "Sending the maximum possible volume of identical pitches",
              "Professional delivery — deadlines hit, slight over-delivery, results reported back — so partners and brands invite you back",
              "Only working with the biggest brands from day one",
            ],
            correctIndex: 1,
            explanation:
              "First deals come from pitching; careers come from re-bookings and referrals. A creator who's easy to work with, delivers on time, and reports results unprompted becomes the safe choice brands return to — reputation compounds like content does.",
          },
        },
      ],
    },
    {
      title: "Measuring What Matters",
      summary:
        "Vanity metrics lie — read the numbers that predict growth, trust, and income",
      content: `<p>Your dashboard shows twenty numbers; three of them matter. This lesson teaches you to read creator analytics like a strategist — separating vanity from signal, diagnosing WHY posts win or flop, and running the monthly AI-powered review that steers everything you've built so far.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my creator analyst. Here's my data from the last 30 days: [paste from your platform analytics: per-post reach, likes, comments, saves, shares, follows gained; plus profile visits and email signups if available. Screenshots described in words work too]. (1) Calculate my engagement rate and identify my 3 strongest and 3 weakest posts. (2) Diagnose the WHY: what do my winners share (topic, format, hook style, pillar)? What do the flops share? State each pattern as a testable hypothesis. (3) Which metric is my current bottleneck: reach (nobody sees), engagement (they see but don't care), or conversion (they care but don't follow/subscribe)? (4) Give me 3 specific experiments for next month based on the patterns — each with the metric that will judge it. (5) One number I should watch weekly, and why.",
        note: "Do this monthly, same day each month — trends across months matter far more than any single post's numbers. One review steers the whole next month.",
      },
      steps: [
        {
          html: `<h3>The metric hierarchy: from vanity to value</h3><p>Creator metrics form a pyramid — and most beginners stare at the bottom:</p><ul><li><strong>Vanity layer (weakest signal):</strong> follower count, likes, views — they feel great and predict almost nothing. Recall lesson one: huge accounts with zero real influence exist everywhere</li><li><strong>Engagement layer (real signal):</strong> comments, saves, shares, watch-through — evidence people CARE. Saves say "this is valuable"; shares say "this represents me"; both are the algorithm's favorite signals</li><li><strong>Trust layer (the business):</strong> profile visits → follows, email signups, link clicks, DMs asking questions — attention converting into relationship</li><li><strong>The one ratio to know:</strong> engagement rate = interactions ÷ reach. It measures whether content resonates regardless of account size — and it's what brands check first</li></ul>`,
          question: {
            text: "A post gets 50,000 views and 12 likes. Another gets 800 views, 90 saves, and 40 shares. Which post is the real winner?",
            options: [
              "The 50,000-view post — reach is everything",
              "The 800-view post — saves and shares are deep-value signals that predict growth and trust; empty views predict nothing",
              "Neither — only follower count matters",
            ],
            correctIndex: 1,
            explanation:
              "Views without engagement mean people scrolled past — the content reached eyes but touched nothing. Saves ('I'll need this again') and shares ('others must see this') are the strongest votes that exist. Make more of THAT post.",
          },
        },
        {
          html: `<h3>Diagnosis: reading the why, not just the what</h3><p>Numbers describe; patterns explain. The creator's diagnostic chain — echoing the funnel logic from every field of marketing:</p><ul><li><strong>Low reach:</strong> the platform isn't distributing — usually a hook/format problem (video retention, first-line strength) or posting into dead hours</li><li><strong>Reach but low engagement:</strong> people see, nobody cares — the content is generic, off-pillar, or value-thin. The harshest and most useful signal</li><li><strong>Engagement but no follows:</strong> the post works, the PROFILE leaks — bio, pinned content, and identity clarity (the landing-page audit from the platforms lesson)</li><li><strong>Follows but no email signups/clicks:</strong> the funnel to owned assets is missing or weak</li></ul><div class="discovery"><p>💡 <strong>Judge trends, not Tuesdays</strong></p><p>Any single post's numbers are mostly noise — timing luck, algorithm mood, weather. Judge monthly trends: is engagement rate rising? Are saves growing? Is the email list compounding? Direction over data points, always. One bad Tuesday means nothing; three flat months mean everything.</p></div>`,
          question: {
            text: "Your posts get good reach and strong engagement, but almost no one follows after visiting your profile. Where's the leak?",
            options: [
              "The content — post more frequently",
              "The profile — bio, pinned post, and identity clarity aren't converting interested visitors into followers",
              "The platform — time to switch entirely",
            ],
            correctIndex: 1,
            explanation:
              "Engagement proves the content works; the drop-off happens at the profile door. That's a landing-page problem: unclear bio, weak pinned content, or a confused identity. Fix the door, not the street that's already delivering visitors.",
          },
        },
        {
          html: `<p>Analytics detective training with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🔍 Numbers tell stories — let's learn to read them like detectives, not fans.",
            },
            {
              bot: "Match each metric to what it actually signals.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Saves", right: "\"This is valuable — I'll return to it\"" },
                { left: "Shares", right: "\"This represents me to my people\"" },
                { left: "Follower count alone", right: "Weak vanity signal — predicts little" },
                { left: "Email signups", right: "Trust converting into owned audience" },
              ],
              feedback:
                "Perfect metric literacy — saves and shares over likes, owned audience over rented applause.",
              hint: "Keep-it, spread-it, count-it, own-it.",
            },
            {
              bot: "A creator's last post flopped — half the usual likes. They're rewriting their entire strategy tonight.",
              ask: "Wise response?",
              inputType: "binary",
              options: ["Yes — respond fast to every signal", "No — single posts are noise; strategy answers to monthly trends"],
              correctIndex: 1,
              feedback:
                "Trends, not Tuesdays — one flop is timing luck or algorithm weather. Panic-pivoting on single data points is how good strategies die young. If the MONTHLY trend flattens, then investigate.",
              hint: "How much can one data point prove?",
            },
            {
              bot: "Fill in the resonance ratio.",
              ask: "Engagement rate = interactions ÷ ___ — it measures resonance regardless of account size.",
              inputType: "fill-blank",
              template: "Engagement rate = interactions ÷ ___ — it measures resonance regardless of account size.",
              options: ["reach", "posts", "followers gained"],
              correctIndex: 0,
              feedback:
                "Reach — of the people who saw it, how many cared? It's the great equalizer: a small account with high engagement rate beats a big passive one in every way that pays.",
              hint: "Of everyone who SAW the post...",
            },
            {
              bot: "Diagnostic round! Reach is fine, engagement is fine, follows are fine... but the email list hasn't grown in two months.",
              ask: "Where do you look?",
              inputType: "choice",
              options: [
                "The content pillars — rotate them all",
                "The funnel to owned assets — is there a compelling reason and clear path from profile to email list?",
                "The posting schedule — try different hours",
              ],
              correctIndex: 1,
              feedback:
                "The funnel — everything upstream works, so the leak is between follow and signup. Is the link visible? Is there a genuine reason to subscribe (a useful freebie, a real newsletter promise)? Each funnel stage gets its own diagnosis.",
              hint: "Walk the path: post → profile → follow → ??? → email.",
            },
          ],
        },
        {
          html: `<h3>The monthly review ritual</h3><p>Thirty minutes, once a month, steering everything:</p><ul><li><strong>Export or screenshot the month's numbers</strong> — per-post and account-level, plus email list growth</li><li><strong>AI does the heavy reading:</strong> the analysis prompt from this lesson's exercise — winners' patterns, flops' patterns, bottleneck diagnosis, next experiments</li><li><strong>You make the calls:</strong> which pattern to double down on, which experiment to run, which pillar to retire or refresh — judgment stays human</li><li><strong>Log the decisions:</strong> one paragraph — "this month I learned X, next month I'm testing Y" — twelve of these paragraphs are a creator education no course can sell you</li><li><strong>Check the compounding assets:</strong> email list growth and engagement-rate trend are the two numbers that predict your long-term trajectory better than anything else</li></ul><p><strong>You can now see clearly. Final lesson: turning all of it — trust, audience, content, data — into sustainable income.</strong></p>`,
          question: {
            text: "Why are email list growth and engagement-rate trend the two best long-term health indicators?",
            options: [
              "They're the easiest numbers to find in dashboards",
              "One tracks owned audience (immune to algorithms), the other tracks resonance (whether content still lands) — together they predict trajectory better than any vanity metric",
              "Brands legally require both numbers in media kits",
            ],
            correctIndex: 1,
            explanation:
              "Follower counts and view spikes wobble with algorithm weather. A growing owned list plus a rising engagement rate means deepening trust AND independence from platform whims — the two forces that decide whether year two is bigger than year one.",
          },
        },
      ],
    },
    {
      title: "Monetization",
      summary:
        "Turn trust into income — the monetization ladder, from first dollar to real business",
      content: `<p>Final lesson — and the one everything else was building toward. Monetization done right feels like a service to your audience; done wrong, it spends years of trust in weeks. This lesson maps the income streams, sequences them onto a realistic ladder, and assembles your complete influence operating system.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my monetization strategist. My situation: [niche, audience size across platforms, email list size, engagement quality, what my audience asks me about most, hours/week available]. (1) Design my monetization ladder: which income stream fits me FIRST (affiliate, digital product, service/coaching, sponsorships, memberships) — based on my actual size and niche, not fantasy. Explain the sequencing: what unlocks at each stage. (2) For my first rung: the concrete 30-day launch plan — what I create or pitch, how I introduce it to my audience without feeling salesy, and realistic income expectations at my size (be honest, not hype). (3) The trust rules: how much promotional content is too much for my posting rhythm? (4) Draft the announcement post introducing my first offer — in my voice, framed as service to the audience. (5) My 12-month vision: what does the full income mix look like if the audience doubles?",
        note: "Start with ONE stream and do it honestly. The first dollar from your own audience is a milestone — but the trust that survives the first promotion is the real asset. Every stream after gets easier.",
      },
      steps: [
        {
          html: `<h3>The monetization menu</h3><p>Every creator income stream is trust converted at a different rate:</p><ul><li><strong>Affiliate marketing:</strong> recommend products you genuinely use, earn commission per sale — the natural first stream: no product to build, and honest recommendations were already part of your content</li><li><strong>Sponsorships & brand deals:</strong> brands pay for access to your audience (the collab lesson's machinery) — grows with your proof of engagement</li><li><strong>Digital products:</strong> guides, templates, courses, presets — build once, sell forever; the highest-margin stream and where AI assistance shines (drafting, structuring, designing)</li><li><strong>Services & coaching:</strong> your expertise sold directly — highest income per follower, works even with tiny audiences; time-limited by nature</li><li><strong>Memberships & subscriptions:</strong> recurring support for ongoing value — powerful once a true community exists</li></ul><p>The mistake isn't picking the wrong stream — it's trying all five at once, or starting before any trust exists.</p>`,
          question: {
            text: "Why is affiliate marketing usually the natural FIRST income stream for a creator?",
            options: [
              "It pays more than any other stream",
              "It requires no product to build, and honest recommendations were already part of the content — monetization with minimal new work or risk",
              "Platforms require creators to start with affiliate links",
            ],
            correctIndex: 1,
            explanation:
              "You're already telling your audience what tools and products you use — affiliate links simply attach income to recommendations you'd make anyway. No product to build, no service hours to sell: the gentlest first rung on the ladder.",
          },
        },
        {
          html: `<h3>The ladder: sequence beats ambition</h3><p>Streams unlock in a natural order as trust and audience grow:</p><ul><li><strong>Rung 1 (small but real audience):</strong> affiliate links + your first tiny digital product (a $10-30 guide or template solving ONE problem your audience actually asks about)</li><li><strong>Rung 2 (growing engagement):</strong> services/coaching if your niche supports it — often the biggest early income — plus first small brand deals via your media kit</li><li><strong>Rung 3 (established trust):</strong> flagship digital product (course, toolkit), bigger sponsorships, possibly membership</li><li><strong>The diversification rule:</strong> one stream mastered before the next begins — but never STOP at one. Sponsorship-only creators ride algorithm luck; product-plus-affiliate-plus-service creators own their income the way a blog owns its traffic</li></ul><div class="discovery"><p>💡 <strong>The trust economics of selling</strong></p><p>Audiences WANT to support creators who've helped them — selling isn't betrayal, it's completion of the value loop. The rules that keep it clean: promote at most ~1 in 5 posts, only sell what genuinely helps, price honestly, and keep delivering free value as the main diet. Done this way, your first offer will feel like a gift to your audience, not a toll.</p></div>`,
          question: {
            text: "What's the core principle of the monetization ladder?",
            options: [
              "Launch all five income streams simultaneously for maximum coverage",
              "Master one stream at a time in the order your audience size and trust unlock them — then diversify so no single stream owns you",
              "Wait until 100k followers before earning anything",
            ],
            correctIndex: 1,
            explanation:
              "Each rung needs a different level of audience and trust — services work at 500 followers, memberships need real community. Sequencing matches effort to what's unlocked, and eventual diversification protects income from any single platform, brand, or algorithm.",
          },
        },
        {
          html: `<p>Final graduation session with Nova 🏁</p>`,
          chat: [
            {
              bot: "Nova, one last time 🏆 From 'imagine you start a blog' to a working influence system — let's prove you own it all. Final review!",
            },
            {
              bot: "Match each income stream to its ideal moment.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Affiliate links", right: "First stream — recommendations become income" },
                { left: "Coaching/services", right: "Big income even with a tiny audience" },
                { left: "Flagship course", right: "Established trust — build once, sell forever" },
                { left: "Membership", right: "When a true community exists" },
              ],
              feedback:
                "The full ladder, correctly sequenced — each rung unlocked by trust, not wished into existence.",
              hint: "Easiest first, community-powered last.",
            },
            {
              bot: "A creator with great engagement launches: 4 promotional posts per week out of 5 total. Sales spike for two weeks... then engagement, reach, and sales all collapse.",
              ask: "What happened?",
              inputType: "choice",
              options: [
                "The product was priced too low",
                "The value diet inverted — followers came for value, got ads, and trust (the actual asset) drained",
                "The platform glitched",
              ],
              correctIndex: 1,
              feedback:
                "The diet inverted — 80% promotion is a trust withdrawal no audience sustains. Keep free value as the main course (~4 in 5 posts) and selling stays welcome. The audience isn't a resource to harvest; it's a garden to keep.",
              hint: "What ratio did the lesson prescribe?",
            },
            {
              bot: "Fill in the selling truth.",
              ask: "Selling isn't betrayal — it's ___ of the value loop, when you've genuinely helped first.",
              inputType: "fill-blank",
              template: "Selling isn't betrayal — it's ___ of the value loop, when you've genuinely helped first.",
              options: ["completion", "corruption", "avoidance"],
              correctIndex: 0,
              feedback:
                "Completion — audiences WANT to support creators who changed something for them. Give honestly, sell honestly, and the loop feeds everyone in it.",
              hint: "The loop closes, not breaks.",
            },
            {
              bot: "The grand finale: rebuild the entire influence journey. Tap in order.",
              ask: "Arrange the creator's path:",
              inputType: "arrange",
              words: ["Build", "trust", "grow", "audience", "measure", "honestly", "monetize", "gently"],
              feedback:
                "That's the whole course in eight words 🎓 Trust first, growth through value and collabs, honest measurement, gentle monetization. You didn't just learn influence — you built a system for it. Congratulations, creator! 🎉✨",
              hint: "Trust → audience → measurement → income.",
            },
          ],
        },
        {
          html: `<h3>Your complete influence operating system</h3><p>Everything from ten lessons, on one page:</p><ul><li><strong>Daily (15-30 min):</strong> engage genuinely — replies, community moments, one human conversation. Connection is the product</li><li><strong>Weekly (2-3 hrs):</strong> the batch session — one anchor piece, AI-atomized to home + satellite platforms, scheduled; one collab touchpoint (pitch, delivery, or nurture)</li><li><strong>Monthly (1 hr):</strong> the analytics review — patterns, bottleneck, experiments; check the two compounding numbers (email list, engagement trend); one monetization action</li><li><strong>Quarterly:</strong> brand identity check (still true? still distinct?), platform mix review, monetization ladder — time for the next rung?</li><li><strong>Always:</strong> trust before asking · value as the main diet · consistency over perfection · AI drafts, you humanize · own your audience, don't just rent it</li></ul><p>You started this course imagining a blog and a pile of overwhelming questions. You finish with answers: a niche and identity, two possible faces (yours or your avatar's), a content machine, a growth network, honest dashboards, and a monetization ladder. <strong>Now go build it — one consistent, audience-first post at a time.</strong></p>`,
          question: {
            text: "What's the through-line connecting every lesson in this course?",
            options: [
              "Viral moments are the path to influence",
              "Trust built through consistent value is the asset — everything else (growth, collabs, income) is that trust, compounding",
              "Technology matters more than authenticity",
            ],
            correctIndex: 1,
            explanation:
              "From the first lesson's myths to the last lesson's ladder: influence IS trust. Content earns it, connection deepens it, measurement protects it, and monetization converts it — gently, so the compounding never stops. That's the system you now own.",
          },
        },
      ],
    },
  ],
};
