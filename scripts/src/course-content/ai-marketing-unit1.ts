import type { UnitSeed } from "./types";

export const AI_MARKETING_UNIT_1: UnitSeed = {
  title: "Marketing Your Business with AI",
  lessons: [
    {
      title: "How AI Changes Modern Marketing",
      summary:
        "See how AI turns hours of design and writing into minutes — starting today",
      content: `<p>Your business needs marketing — that part is clear. Social posts, catchy ads, polished emails… the list grows faster than your to-do list. But between running the show and helping customers, who has hours to learn design and write sharp copy? Great news: with AI, you can create professional marketing materials in minutes. Let's make that your new normal.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "Design a flyer for my [type of event — e.g. weekend coffee tasting] at [your business name]. Happening [day and time]. What makes it special: [e.g. rare single-origin blends, guided by our master roaster]. Style: warm, inviting, professional.",
        note: "Open Canva and paste this into Magic Studio (or use ChatGPT to refine the description first). Notice how adding the date, time, and 'what makes it special' transforms the designs from pretty-but-empty to ready-to-post.",
      },
      steps: [
        {
          html: `<h3>The time vs. quality problem</h3><p>What usually happens when small business owners try to market themselves?</p><ul><li>They spend <strong>hours designing a flyer</strong>, tweaking colors and fonts</li><li>Or hire a designer and <strong>wait days</strong> for revisions</li><li>Or <strong>skip marketing altogether</strong> because it feels too complicated</li></ul><p>Meanwhile, competitors seem to post beautiful content effortlessly. Here's the shift: AI isn't about replacing your creativity or business knowledge. It handles the time-consuming technical work — so you focus on what you do best: <strong>running your business</strong>.</p>`,
          question: {
            text: "When creating marketing materials, what's the biggest bottleneck for most business owners?",
            options: [
              "Understanding which marketing channels to use",
              "Finding time to design and create the actual content",
              "Not knowing what to say or promote",
            ],
            correctIndex: 1,
            explanation:
              "Time is usually the biggest bottleneck. Even when you know exactly what to promote, creating the actual materials takes hours — and that's precisely the work AI compresses into minutes.",
          },
        },
        {
          html: `<h3>AI as your creative assistant</h3><p>Think of AI as a creative assistant who never sleeps and works in seconds:</p><ul><li><strong>Designing graphics:</strong> flyers, social posts, banners — from a text description</li><li><strong>Writing copy:</strong> ads, product descriptions, emails in your tone</li><li><strong>Planning content:</strong> a week of social posts from one prompt</li><li><strong>Analyzing results:</strong> plain-English answers about what's working</li></ul><p>What stays yours: <strong>your business strategy, your target market, your final call.</strong> AI creates; you decide.</p>`,
          question: {
            text: "Which marketing task should stay firmly in YOUR hands rather than AI's?",
            options: [
              "Generating design options for a flyer",
              "Drafting five versions of an ad headline",
              "Deciding your business strategy and who your target customer is",
            ],
            correctIndex: 2,
            explanation:
              "AI excels at creation tasks — design, writing, planning drafts. Strategy and knowing your customer is your business judgment; AI amplifies it but can't replace it.",
          },
        },
        {
          html: `<p>Time to practice — chat with Nova, your AI marketing coach.</p>`,
          chat: [
            {
              bot: "Hey! I'm Nova 👋 Let's see how AI design tools like Canva Magic Studio actually work. Ready?",
            },
            {
              bot: "Imagine you type: \"Design a flyer for my weekend coffee tasting event.\"",
              ask: "How does Canva AI work with that request?",
              inputType: "choice",
              options: [
                "You upload a sketch and it converts it to digital",
                "It interprets your description and generates original design options",
                "It just recolors pre-made templates",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — unlike traditional template tools, AI interprets your description and generates original designs tailored to your request: matching fonts, coffee imagery, cohesive colors.",
              hint: "You describe, it creates — no sketch needed.",
            },
            {
              bot: "Meet Maria, a café owner. Before AI she'd spend 3 hours in Canva, or pay a designer $150 and wait 3 days.",
              ask: "What's the key advantage Maria gets from Canva AI?",
              inputType: "choice",
              options: [
                "Professional-looking designs in minutes, without design skills",
                "Designs that are 100% final with zero customization needed",
                "Unlimited free designs forever",
              ],
              correctIndex: 0,
              feedback:
                "Right! AI creates strong starting points fast. Maria still adds her unique details and makes the final brand choices — that's the winning combo.",
              hint: "Think speed + skill barrier, not perfection.",
            },
            {
              bot: "Let's lock in the workflow. Tap the words in the right order.",
              ask: "Arrange the AI marketing workflow:",
              inputType: "arrange",
              words: ["Describe", "what", "you", "need", "AI", "creates", "you", "refine", "and", "publish"],
              feedback:
                "That's the entire method — describe, AI creates, you refine and publish. Every tool in this course works this exact way.",
              hint: "It starts with you describing.",
            },
            {
              bot: "One last gut-check. Maria's first AI flyer looked beautiful but didn't mention the date, time, or what made the tasting special.",
              ask: "\"Post it anyway — it looks great\" — good idea or not?",
              inputType: "binary",
              options: ["Good idea", "Bad idea"],
              correctIndex: 1,
              feedback:
                "Bad idea — visual polish alone isn't enough. AI needs the event details: what kind of gathering, when, and why it's worth attending. Details matter as much as design.",
              hint: "Would YOU show up based on that flyer?",
            },
          ],
        },
        {
          html: `<h3>The detail difference</h3><p>Compare two prompts for the same flyer:</p><p><em>"Design a flyer for a coffee event"</em> → pretty layouts with nothing to act on.</p><p><em>"Design a flyer for a coffee <strong>tasting</strong> this <strong>Saturday, 2–5 PM</strong> featuring <strong>rare blends guided by our master roaster</strong>"</em> → designs that look good AND give people a reason to show up.</p><ul><li><strong>What</strong> type of event (tasting, not a generic gathering)</li><li><strong>When</strong> it's happening (Saturday, 2–5 PM)</li><li><strong>Why</strong> it's special (rare blends, master roaster)</li></ul><div class="discovery"><p>💡 <strong>The whole course in one sentence</strong></p><p>Writing copy? Jasper or ChatGPT. Product photos? Midjourney. Social planning? Predis.ai or ChatGPT. Analytics? ChatGPT. Different tools, same method: describe → create → refine → publish.</p></div>`,
          question: {
            text: "After AI generates four design options for your event, what should you do next?",
            options: [
              "Pick your favorite and customize it with your specific details and branding",
              "Use all four designs exactly as they are",
              "Ask AI for 10 more options until one is absolutely perfect",
            ],
            correctIndex: 0,
            explanation:
              "AI creates strong starting points — but your business knowledge and brand personality are what make them truly effective. Pick, personalize, publish.",
          },
        },
      ],
    },
    {
      title: "Discover What Makes Your Business Special",
      summary:
        "Use AI to find your unique selling point — hiding in what customers already say about you",
      content: `<p>Before you create a single post, you need the answer to one question: why do customers choose YOU over the shop down the street? Most owners guess. This lesson uses AI to find the real answer — hiding in plain sight in your reviews, messages, and thank-you notes.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here are real customer reviews and comments about my business: [paste 5–15 reviews, messages, or compliments]. Analyze them: (1) What specific words and phrases do customers repeat? (2) What do they praise that they probably DON'T get from competitors? (3) Based on this, write my unique selling proposition in one sentence a customer would actually say. (4) Give me 3 taglines under 8 words built on that USP.",
        note: "Use REAL customer words — Google reviews, DMs, emails. The magic is in what they actually say, not what you hope they'd say.",
      },
      steps: [
        {
          html: `<h3>Why "we have great quality" isn't a selling point</h3><p>Ask ten business owners what makes them special and nine say the same things: quality, service, passion. The problem? <strong>Every competitor says exactly the same words</strong> — so customers hear nothing at all.</p><p>A real unique selling proposition (USP) is specific, concrete, and impossible for the shop next door to claim: "the only bakery in town baking gluten-free at 6am daily" beats "quality baked goods" every single time. The catch: you're too close to your own business to see yours. Your customers, though, see it clearly — and they've been telling you in every review.</p>`,
          question: {
            text: "Why do phrases like \"great quality and friendly service\" fail as a selling point?",
            options: [
              "Customers don't care about quality or service",
              "Every competitor claims the same words, so they communicate nothing distinct",
              "They're too short for social media algorithms",
            ],
            correctIndex: 1,
            explanation:
              "Generic claims are invisible because everyone makes them. A USP works when it's specific and hard for competitors to copy — something only your business can honestly say.",
          },
        },
        {
          html: `<h3>Mine your reviews with AI</h3><p>Your USP research is already written — by your customers. Gather 5–15 real quotes: Google reviews, Facebook comments, DMs, thank-you emails. Then paste them into AI and ask:</p><p><em>"What specific things do customers repeatedly praise? What words do they use that I wouldn't think to use? What do they mention that competitors' reviews probably don't?"</em></p><div class="discovery"><p>💡 <strong>The surprise rule</strong></p><p>The gold is usually something you consider ordinary. The café owner thinks she sells coffee; the reviews rave that "the owner remembers everyone's name." That's the USP — and she never would have picked it herself.</p></div>`,
          question: {
            text: "Where does AI find the raw material for your unique selling proposition?",
            options: [
              "By researching what successful global brands say about themselves",
              "In the repeated words and specific praise inside your real customer reviews",
              "By generating impressive-sounding marketing language from scratch",
            ],
            correctIndex: 1,
            explanation:
              "AI is a pattern-finder: feed it real customer voices and it surfaces what people genuinely value about you — which is far more persuasive than invented slogans.",
          },
        },
        {
          html: `<p>Let's practice finding a USP with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 👋 Let's train your USP radar on a real example.",
            },
            {
              bot: "A dog groomer's reviews keep saying: \"my anxious dog actually LIKES going\", \"they text photos mid-groom\", \"never rushed\".",
              ask: "What's her real USP?",
              inputType: "choice",
              options: [
                "Affordable full-service dog grooming",
                "The stress-free groomer anxious dogs actually enjoy",
                "Professional grooming with years of experience",
              ],
              correctIndex: 1,
              feedback:
                "Yes! The reviews scream it: anxious dogs feel safe there. \"Affordable\" and \"professional\" are wallpaper — this is a claim competitors can't copy.",
              hint: "What do the reviews repeat that competitors' reviews wouldn't?",
            },
            {
              bot: "Let's define the term. Fill in the blank.",
              ask: "A strong USP is something specific that competitors can't honestly ___.",
              inputType: "fill-blank",
              template: "A strong USP is something specific that competitors can't honestly ___.",
              options: ["claim", "afford", "understand"],
              correctIndex: 0,
              feedback:
                "Right — if the shop next door can say it too, it's not a USP yet. Specificity is the moat.",
              hint: "It's about what others can also say.",
            },
            {
              bot: "Match each generic claim to the specific USP that beats it.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "\"Quality baked goods\"", right: "\"Gluten-free, baked fresh at 6am daily\"" },
                { left: "\"Friendly service\"", right: "\"The owner greets regulars by name\"" },
                { left: "\"Fast turnaround\"", right: "\"Same-day repairs, or it's free\"" },
              ],
              feedback:
                "Perfect — every strong USP is a generic claim made specific, provable, and personal.",
              hint: "Specific and provable beats vague and safe.",
            },
          ],
        },
        {
          html: `<h3>Turn your USP into words you'll actually use</h3><p>Once AI helps you find the pattern, put it to work immediately:</p><ul><li><strong>One-sentence USP:</strong> "Ask AI: write my USP in one sentence a real customer would say — no marketing buzzwords"</li><li><strong>Taglines:</strong> "Give me 5 taglines under 8 words built on this USP"</li><li><strong>Everywhere test:</strong> your USP should appear in your bio, your website header, your flyers — repetition builds memory</li></ul><p>From this point on, every lesson builds on this foundation: your copy, visuals, and social posts will all echo what genuinely makes you different. <strong>That consistency is what makes small-budget marketing powerful.</strong></p>`,
          question: {
            text: "You've found your USP. Where should it show up?",
            options: [
              "Only in paid advertising campaigns",
              "Consistently everywhere — bio, website, flyers, posts — so repetition builds memory",
              "Nowhere public — it's an internal strategy document",
            ],
            correctIndex: 1,
            explanation:
              "A USP only works when customers encounter it repeatedly. Consistency across every touchpoint is what makes a small marketing budget punch above its weight.",
          },
        },
      ],
    },
    {
      title: "Write Words That Sell",
      summary:
        "Turn AI into your copywriter — ads, product descriptions, and emails in your authentic voice",
      content: `<p>Staring at a blank caption box is where marketing motivation goes to die. This lesson turns AI into your personal copywriter: product descriptions that sell benefits (not features), ads with hooks people stop for, and emails that sound like you — all in minutes, all in your voice.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "You're my copywriter. My business: [describe]. My USP: [paste from last lesson]. My voice: [e.g. warm and playful / expert but approachable — or paste 2 examples of your writing and say \"match this\"]. Write: (1) a product description for [product] that leads with the customer benefit, (2) a short ad with a scroll-stopping first line, (3) a 100-word email to past customers about [offer/news]. Give me 2 versions of each so I can pick.",
        note: "Save the winning versions AND the prompt. Next time you need copy, you're editing in 2 minutes instead of writing for an hour.",
      },
      steps: [
        {
          html: `<h3>Features tell, benefits sell</h3><p>The #1 copywriting mistake: describing your product instead of the customer's life with it.</p><ul><li><strong>Feature:</strong> "Our candles use 100% soy wax" — true, but so what?</li><li><strong>Benefit:</strong> "Fill your home with cozy warmth for 60 hours — no soot, no headache" — now I want it</li></ul><p>AI makes this translation effortless: <em>"Rewrite this product description to lead with the benefit for the customer, not the feature."</em> But AI only knows the benefits if you tell it who the customer is and what they actually want — your USP from the last lesson is exactly that fuel.</p>`,
          question: {
            text: "Which line is a BENEFIT rather than a feature?",
            options: [
              "\"Handmade with 100% organic soy wax\"",
              "\"Available in 12 seasonal scents\"",
              "\"Cozy evenings for two months — without the soot or headaches\"",
            ],
            correctIndex: 2,
            explanation:
              "Features describe the product; benefits describe the customer's life with it. \"Cozy evenings without headaches\" is what people actually pay for — the soy wax is just how you deliver it.",
          },
        },
        {
          html: `<h3>Hooks: the first line does all the work</h3><p>On social media and in ads, people decide in one second whether to keep reading. Ask AI for hooks, not just copy:</p><ul><li><strong>Question hook:</strong> "Still buying candles that fade in a week?"</li><li><strong>Bold claim:</strong> "This candle outlasts your Netflix series."</li><li><strong>Story hook:</strong> "A customer told us she plans her bath nights around this scent."</li></ul><p>The prompt: <em>"Give me 10 scroll-stopping first lines for an ad about [product], targeting [customer]. Mix questions, bold claims, and mini-stories."</em> Ten options in seconds — you pick the one that sounds like you and makes YOU stop scrolling.</p><div class="discovery"><p>💡 <strong>Generate 10, keep 1</strong></p><p>AI's superpower isn't perfection — it's volume. Ten hooks cost nothing; the discipline is picking one and shipping it.</p></div>`,
          question: {
            text: "Why ask AI for 10 hook options instead of one perfect ad?",
            options: [
              "Longer responses make the AI more accurate",
              "Volume is AI's superpower — you choose the one that fits your voice and audience best",
              "You should post all 10 versions at once",
            ],
            correctIndex: 1,
            explanation:
              "AI generates options instantly; your judgment picks the winner. That division of labor — AI drafts in volume, you curate — is the core copywriting workflow.",
          },
        },
        {
          html: `<p>Hook practice with Nova — can you spot what sells?</p>`,
          chat: [
            {
              bot: "Nova again 👋 Let's sharpen your copy instincts with a quick workout.",
            },
            {
              bot: "A bakery wants an Instagram ad for fresh morning croissants.",
              ask: "Which hook stops the scroll?",
              inputType: "choice",
              options: [
                "\"We are a family bakery established in 2015\"",
                "\"Still eating supermarket croissants that taste like cardboard?\"",
                "\"Our croissants are made with butter\"",
              ],
              correctIndex: 1,
              feedback:
                "That's the one — it names the pain (sad supermarket croissants) and makes the reader feel seen. History and ingredients come later; the hook earns the attention first.",
              hint: "Which one makes the reader feel something?",
            },
            {
              bot: "Fill in the copywriting golden rule.",
              ask: "Features tell, ___ sell.",
              inputType: "fill-blank",
              template: "Features tell, ___ sell.",
              options: ["benefits", "discounts", "hashtags"],
              correctIndex: 0,
              feedback:
                "Exactly — customers buy the better version of their life, not the spec sheet.",
              hint: "It's what the customer gets out of it.",
            },
            {
              bot: "Now build a benefit-first line. Tap the words in order.",
              ask: "Arrange this into a selling sentence:",
              inputType: "arrange",
              words: ["Wake", "up", "to", "warm", "croissants", "without", "leaving", "your", "street"],
              feedback:
                "Beautiful — it sells the morning, not the flour. That's benefit-first copy.",
              hint: "Start with what the customer does: \"Wake\".",
            },
            {
              bot: "Last one. A boutique owner pastes AI copy straight to Instagram without reading it. It says \"our artisanal curated collection elevates your lifestyle.\"",
              ask: "Ship it or fix it?",
              inputType: "binary",
              options: ["Ship it", "Fix it"],
              correctIndex: 1,
              feedback:
                "Fix it — that's generic AI-speak nobody actually says. Cut the buzzwords, add her real voice and one specific detail. AI drafts, the owner delivers.",
              hint: "Would a real person ever say \"elevates your lifestyle\" out loud?",
            },
          ],
        },
        {
          html: `<h3>Make every word sound like you</h3><p>Generic AI copy is easy to spot — and easy to fix:</p><ul><li><strong>Teach it your voice:</strong> paste 2–3 things you've written ("match this tone") — captions, emails, anything</li><li><strong>Ban the buzzwords:</strong> tell AI "no words like elevate, unleash, seamless, or game-changer"</li><li><strong>Add one true detail:</strong> a real customer moment, a neighborhood reference, your actual opening hours — specifics build trust</li><li><strong>Read it out loud:</strong> if you wouldn't say it to a customer at the counter, rewrite it</li></ul><p>Your voice + AI's speed is the combination competitors can't copy: they can use the same tools, but they can't be you.</p>`,
          question: {
            text: "What's the fastest way to make AI write in YOUR voice?",
            options: [
              "Ask it to \"sound more human\" repeatedly",
              "Paste 2–3 real examples of your writing and say \"match this tone\"",
              "Use only very short sentences",
            ],
            correctIndex: 1,
            explanation:
              "AI is a superb mimic when given examples. Two or three samples of your real writing teach it your rhythm and word choices better than any abstract instruction.",
          },
        },
      ],
    },
    {
      title: "Design Scroll-Stopping Visuals",
      summary:
        "Create professional graphics and product images with AI — no designer required",
      content: `<p>People scroll past text but stop for visuals — and until now, good visuals meant design skills or a designer's invoice. This lesson gives you the AI visual toolkit: complete designs from a description, product photos without a photoshoot, and a consistent look that makes your business instantly recognizable.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Canva",
        url: "https://www.canva.com",
        prompt:
          "Create an Instagram post announcing [your offer/event/product]. Business: [name and type]. Include: [the key detail — date, price, or offer]. Brand colors: [your 2–3 colors, e.g. cream and forest green]. Mood: [e.g. warm and rustic / clean and modern]. Style: professional but approachable, with space for a short text overlay.",
        note: "Generate once, then refine: swap the image, adjust one color, add your logo. Five minutes total — save it as a template and next week's post takes two.",
      },
      steps: [
        {
          html: `<h3>Your AI design toolkit</h3><p>Different visual jobs, different AI tools — all working from plain descriptions:</p><ul><li><strong>Canva Magic Studio:</strong> complete designs — flyers, posts, banners — with layout, fonts, and colors handled</li><li><strong>Midjourney / DALL·E:</strong> original images from text — "flat lay of fresh croissants on rustic wood, morning light" — no photoshoot needed</li><li><strong>Background removers:</strong> turn a phone photo of your product into a clean cutout for any design</li><li><strong>Magic Resize:</strong> one design instantly reformatted for Instagram, Facebook, and a printable flyer</li></ul><p>The rule from lesson one applies everywhere: <strong>the more specific your description, the better the result.</strong></p>`,
          question: {
            text: "You need a hero image of your product but have no photographer. What's the AI move?",
            options: [
              "Copy a competitor's product photo — everyone does it",
              "Describe the scene to an AI image tool, or shoot a phone photo and let AI clean up the background",
              "Skip visuals and post text-only until you can afford a photoshoot",
            ],
            correctIndex: 1,
            explanation:
              "AI image generation and background cleanup turn a description or a simple phone photo into professional visuals. Copying competitors' photos is a copyright problem AND a trust problem.",
          },
        },
        {
          html: `<h3>Describe like a creative director</h3><p>Weak visual prompts get pretty-but-random results. Strong ones include four things:</p><ul><li><strong>Subject:</strong> what's in the image — "iced latte in a tall glass"</li><li><strong>Setting & mood:</strong> "on a sunlit café table, relaxed summer feeling"</li><li><strong>Style:</strong> "bright photo style" / "minimal illustration" / "bold retro poster"</li><li><strong>Purpose & space:</strong> "Instagram post, leave space at the top for text"</li></ul><div class="discovery"><p>💡 <strong>Steal from your own favorites</strong></p><p>Find a post whose LOOK you love, then describe that look to AI in words: "warm tones, soft shadows, one product centered, lots of breathing room." You're not copying the image — you're borrowing the recipe.</p></div>`,
          question: {
            text: "Your AI-generated images look nice but random — never quite right for the job. What's missing from your prompts?",
            options: [
              "More adjectives like \"beautiful\" and \"amazing\"",
              "The purpose and context — what platform it's for, the mood, and where text will go",
              "A bigger budget for the premium AI plan",
            ],
            correctIndex: 1,
            explanation:
              "\"Nice but random\" means AI is guessing at the job. Add the purpose (Instagram post), mood (warm, relaxed), and layout needs (space for text) and results snap into usefulness.",
          },
        },
        {
          html: `<p>Design instincts check — Nova has a few scenarios for you.</p>`,
          chat: [
            {
              bot: "Nova here 🎨 Let's tune your visual judgment — no design degree needed.",
            },
            {
              bot: "A florist generates a gorgeous AI image for her Mother's Day promo… but it shows peonies she doesn't actually sell.",
              ask: "What should she do?",
              inputType: "choice",
              options: [
                "Post it — customers won't notice the flower type",
                "Regenerate with flowers she actually stocks, or photograph her real bouquets and let AI polish",
                "Cancel the promo entirely",
              ],
              correctIndex: 1,
              feedback:
                "Right — visuals are promises. Showing products you don't sell creates disappointed customers at the counter. AI makes it trivially easy to regenerate with what's real.",
              hint: "What happens when a customer asks for what's in the picture?",
            },
            {
              bot: "Fill in the brand rule.",
              ask: "Using the same 2–3 colors and fonts everywhere makes your business instantly ___.",
              inputType: "fill-blank",
              template: "Using the same 2–3 colors and fonts everywhere makes your business instantly ___.",
              options: ["recognizable", "expensive", "complicated"],
              correctIndex: 0,
              feedback:
                "Yes — consistency is what turns scattered posts into a brand. People should know it's you before they read a word.",
              hint: "It's about being known at a glance.",
            },
            {
              bot: "Match each visual job to the right AI tool.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Complete flyer with layout & fonts", right: "Canva Magic Studio" },
                { left: "Original image from a description", right: "Midjourney / DALL·E" },
                { left: "Phone photo → clean product cutout", right: "Background remover" },
              ],
              feedback:
                "Perfect — right tool, right job. Most businesses need all three at different moments.",
              hint: "One designs, one imagines, one cleans up.",
            },
          ],
        },
        {
          html: `<h3>Consistency beats perfection</h3><p>One stunning post changes nothing; a recognizable feed changes everything. Build your mini brand kit once:</p><ul><li><strong>Pick 2–3 colors and 1–2 fonts</strong> — ask AI: "suggest a palette for a [cozy bakery / modern gym] and where to use each color"</li><li><strong>Set them in Canva's Brand Kit</strong> so every AI generation starts on-brand</li><li><strong>Save winners as templates</strong> — next week's post is a 2-minute remix, not a fresh start</li><li><strong>Batch it:</strong> generate a month of visuals in one sitting while the creative energy flows</li></ul><p>This is how one-person businesses look like they have a design team: <strong>a system, not more hours.</strong></p>`,
          question: {
            text: "What makes a small business's feed look professionally designed over time?",
            options: [
              "A different bold style for every single post to show range",
              "Consistent colors, fonts, and templates applied to every visual",
              "Using every trending effect the moment it appears",
            ],
            correctIndex: 1,
            explanation:
              "Recognition comes from repetition. A simple brand kit — same colors, same fonts, reusable templates — makes every post compound into a brand instead of starting from zero.",
          },
        },
      ],
    },
    {
      title: "Make AI Your Social Media Assistant",
      summary:
        "Plan a week of posts in 30 minutes — captions, hashtags, and a schedule that runs itself",
      content: `<p>Social media rewards consistency — and punishes the busy. The owner who posts three times a week beats the one who posts brilliantly once a month. This lesson builds your AI-powered social system: a month of ideas in minutes, captions in your voice, and a weekly 30-minute batching ritual that replaces daily panic.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my social media manager. My business: [describe]. My USP: [paste it]. My audience: [describe]. Create a 2-week content calendar with 3 posts per week: mix behind-the-scenes, customer-value tips, and gentle promotion (rule: 2 value posts for every 1 promo). For each post give me: the idea, a caption in my voice [paste an example], a first-line hook, and 5 relevant hashtags (mix of big and niche). Format as a table by day.",
        note: "Pin the output next to your calendar. Sunday: 30 minutes to generate visuals and schedule everything. Rest of the week: zero social media stress.",
      },
      steps: [
        {
          html: `<h3>Never run out of ideas again</h3><p>"What should I even post?" is the question that kills consistency. AI ends it permanently:</p><p><em>"Give me 30 post ideas for a [your business]. Mix: behind-the-scenes moments, tips my customers would save, customer stories, and light promotions. My USP: [paste]."</em></p><p>Thirty ideas in ten seconds. The proven recipe for the mix: <strong>the 2:1 rule</strong> — two posts that give value (tips, stories, behind-the-scenes) for every one that promotes. Feeds that only sell get unfollowed; feeds that help get shared.</p>`,
          question: {
            text: "What's the 2:1 rule for a healthy social media feed?",
            options: [
              "Post 2 times on Instagram for every 1 time on Facebook",
              "Two value posts (tips, stories, behind-the-scenes) for every one promotional post",
              "Two hashtags for every one photo",
            ],
            correctIndex: 1,
            explanation:
              "Feeds that constantly sell get muted; feeds that entertain and help earn trust — which makes the occasional promotion actually land. Value first, promotion second.",
          },
        },
        {
          html: `<h3>The Sunday batching ritual</h3><p>Daily posting stress vs. one focused session — batching wins every time:</p><ul><li><strong>Minute 0–10:</strong> ask AI for next week's post ideas based on what's coming up (events, new stock, season)</li><li><strong>Minute 10–20:</strong> generate captions for all posts at once — same prompt, your voice examples included</li><li><strong>Minute 20–30:</strong> create or pick visuals (your templates from last lesson), then schedule everything in a free tool like Meta's built-in scheduler or Buffer</li></ul><div class="discovery"><p>💡 <strong>Scheduled ≠ robotic</strong></p><p>Batching handles the planned 80%. You stay live for the spontaneous 20% — today's fresh bread photo, a customer shout-out, replying to comments. Structure plus spontaneity is the whole game.</p></div>`,
          question: {
            text: "Why does weekly batching beat writing posts the moment you need them?",
            options: [
              "Platforms boost posts written on Sundays",
              "One focused session with AI removes daily decision fatigue — and consistency survives busy weeks",
              "Batched posts don't need visuals",
            ],
            correctIndex: 1,
            explanation:
              "The enemy of consistency isn't lack of ideas — it's daily decision fatigue. A 30-minute batch session means your marketing runs even during your busiest weeks.",
          },
        },
        {
          html: `<p>Social strategy drills with Nova — quick ones.</p>`,
          chat: [
            {
              bot: "Nova reporting for social duty 📱 Three quick calls to make. Ready?",
            },
            {
              bot: "A gym owner has 15 minutes and needs Thursday's post. She asks AI: \"write me an instagram post\".",
              ask: "Rate that prompt:",
              inputType: "binary",
              options: ["Good enough", "Too vague"],
              correctIndex: 1,
              feedback:
                "Too vague — no business context, audience, goal, or voice. Thirty extra seconds of detail (\"post for busy parents about our 6am express class, encouraging tone\") transforms the output.",
              hint: "Could ANY business use the result?",
            },
            {
              bot: "Now fix her prompt. Tap the words in order.",
              ask: "Arrange the upgraded request:",
              inputType: "arrange",
              words: ["Write", "a", "post", "for", "busy", "parents", "about", "our", "6am", "express", "class"],
              feedback:
                "That's the fix — audience, offer, and angle in one line. AI can work with that.",
              hint: "Start with the action: \"Write\".",
            },
            {
              bot: "Her post gets a comment: \"Do you have evening classes too?\"",
              ask: "What's the best move?",
              inputType: "choice",
              options: [
                "Ignore it — the post did its job",
                "Reply personally AND note it: that question is next week's post idea",
                "Let an auto-responder handle it",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — replies build community, and real customer questions are the best content ideas you'll ever get. (That's the entire next lesson, by the way 😉)",
              hint: "Comments are both conversation AND market research.",
            },
          ],
        },
        {
          html: `<h3>Hashtags, timing, and staying human</h3><p>The finishing touches, AI-assisted:</p><ul><li><strong>Hashtags:</strong> "Suggest 15 hashtags for [post] — 5 big (100k+ posts), 5 medium, 5 niche/local." Niche and local tags are where small businesses actually get found</li><li><strong>Timing:</strong> start with AI's general advice for your industry, then check your own insights after a month — your audience writes the real rules</li><li><strong>The human layer:</strong> AI plans and drafts; you show up in comments, stories, and replies. Automation buys you time — spend some of it being genuinely present</li></ul><p>The system in one line: <strong>AI handles the calendar so you can handle the community.</strong></p>`,
          question: {
            text: "What should you personally handle even with AI running your content calendar?",
            options: [
              "Replying to comments and being present in the community",
              "Generating hashtag lists",
              "Reformatting posts for different platforms",
            ],
            correctIndex: 0,
            explanation:
              "People follow businesses for the humans behind them. AI removes the production grind precisely so you have time for the conversations that build loyalty.",
          },
        },
      ],
    },
    {
      title: "Turn Customer Queries into Content",
      summary:
        "Every question you're asked is content gold — mine it with AI into posts, FAQs, and guides",
      content: `<p>You already know exactly what your customers want to hear about — they tell you every day, in DMs, emails, and across the counter. This lesson turns real customer questions into your most effective content: FAQ posts, how-to guides, and myth-busters that answer what people are genuinely searching for.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here are the questions my customers actually ask me: [list 8–15 real questions from DMs, emails, calls, and in-person]. My business: [describe]. For each question: (1) tag it as quick-answer, how-to, or myth-buster, (2) turn the 5 best into a two-week content plan: post idea + hook first line + caption draft in my voice. (3) Combine the rest into a friendly FAQ page draft for my website. Flag which single question, if answered publicly, would save me the most repeated typing.",
        note: "Keep a running note on your phone — every time a customer asks anything, add it. That note becomes an infinite content engine.",
      },
      steps: [
        {
          html: `<h3>The content idea machine you already own</h3><p>Marketers pay for keyword research to learn what customers wonder about. You get it free, every day: <strong>every question a customer asks you is proof that more people want that answer.</strong></p><ul><li>"Do you do gluten-free?" → post: <em>Behind our gluten-free process</em></li><li>"How early should I book?" → post: <em>Your booking timeline guide</em></li><li>"What's the difference between X and Y?" → post: <em>X vs Y, explained in 60 seconds</em></li></ul><p>Start the habit today: a running note titled "Questions" on your phone. One week of honest collecting usually yields a month of content ideas.</p>`,
          question: {
            text: "Why are real customer questions better content ideas than brainstormed topics?",
            options: [
              "They're easier to answer in one sentence",
              "Each question is proof of real demand — if one person asks, many more are wondering",
              "They don't require any visuals",
            ],
            correctIndex: 1,
            explanation:
              "A question asked out loud represents dozens of people wondering silently (and searching Google). Content built on real questions arrives pre-validated — you already know your audience cares.",
          },
        },
        {
          html: `<h3>One question, five pieces of content</h3><p>AI multiplies each question into a week of material. Take "how early should I book?" and prompt:</p><p><em>"Turn this customer question into: (1) a short social post answering it, (2) a detailed FAQ entry, (3) a story/poll version, (4) a myth-buster angle, (5) an email subject + opener."</em></p><div class="discovery"><p>💡 <strong>Answer once, help forever</strong></p><p>Every public answer works around the clock: the Instagram post, the FAQ page, the pinned comment. You type the answer once — instead of the fortieth DM saying the same thing.</p></div><p>Bonus: FAQ content is search gold. When someone Googles "how early to book a wedding florist," the florist who published that answer wins the click — and often the customer.</p>`,
          question: {
            text: "What's the compounding benefit of answering common questions publicly?",
            options: [
              "It legally protects you from complaints",
              "Each public answer works 24/7 — fewer repeated DMs, better search visibility, and content that presells customers",
              "It allows you to disable comments",
            ],
            correctIndex: 1,
            explanation:
              "A public answer keeps working: it deflects repeat questions, ranks in searches, and warms up future customers before they ever message you. One answer, permanent return.",
          },
        },
        {
          html: `<p>Content-mining practice with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🔍 Let's turn real questions into content, fast.",
            },
            {
              bot: "A plant shop keeps getting: \"Why do my plant's leaves turn yellow?\"",
              ask: "What's the strongest content move?",
              inputType: "choice",
              options: [
                "Reply privately each time it's asked — personal service first",
                "A \"3 reasons your leaves go yellow\" post, plus an FAQ entry, plus a story poll",
                "Ignore it — it's about plant care, not about their products",
              ],
              correctIndex: 1,
              feedback:
                "Yes! One question becomes three pieces of helpful content — and helpful is what gets saved, shared, and remembered when it's time to buy another plant.",
              hint: "Think multiply, not just reply.",
            },
            {
              bot: "Fill in the mindset.",
              ask: "If one customer asks a question, ___ more are silently wondering.",
              inputType: "fill-blank",
              template: "If one customer asks a question, ___ more are silently wondering.",
              options: ["many", "no", "two"],
              correctIndex: 0,
              feedback:
                "Right — questions are demand signals. Answer publicly and you serve the silent majority too.",
              hint: "Questions are the tip of an iceberg.",
            },
            {
              bot: "Match each customer question to its best content format.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "\"Is X better than Y?\"", right: "Comparison post" },
                { left: "\"How do I use this?\"", right: "60-second how-to video" },
                { left: "\"Is it true that…?\"", right: "Myth-buster post" },
              ],
              feedback:
                "Perfect matches — the question's shape tells you the content's shape. AI drafts it from there.",
              hint: "Comparisons, instructions, and myths each have a natural format.",
            },
          ],
        },
        {
          html: `<h3>Close the loop: content that answers back</h3><p>Make it a system, not a one-off:</p><ul><li><strong>Collect:</strong> the phone note, plus a monthly skim of DMs and reviews for question patterns</li><li><strong>Batch:</strong> once a month, feed the list to AI and generate the next month's question-driven content</li><li><strong>Link:</strong> when the question comes again, reply warmly AND link your post — personal service plus zero retyping</li><li><strong>Listen:</strong> which answers get saved and shared? That's your audience voting on what to make more of</li></ul><p>This is marketing at its most honest: <strong>literally giving people the answers they asked for</strong> — at scale, in your voice, powered by AI.</p>`,
          question: {
            text: "A question you've already answered publicly arrives in your DMs again. Best response?",
            options: [
              "Ignore it — the answer is already posted",
              "Reply warmly and include the link to your detailed answer",
              "Copy-paste the entire post into the chat",
            ],
            correctIndex: 1,
            explanation:
              "Warm reply + link is the best of both: the customer feels personally served, you skip the retyping, and your content gets another view. The system pays you back.",
          },
        },
      ],
    },
    {
      title: "Measure Your Marketing Effectively",
      summary:
        "Skip the dashboard overwhelm — let AI tell you what's working and what to do next",
      content: `<p>Likes feel nice, but did the post bring anyone through the door? Most owners either drown in dashboards or ignore numbers entirely. This lesson shows the third way: track a handful of numbers that matter, paste them into AI monthly, and get plain-English answers about what's working and what to change.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my marketing analyst. My business: [describe]. My goal this month was: [e.g. more booking inquiries]. Here are my numbers for the last 4 weeks: [paste — e.g. posts published, reach, profile visits, website clicks, inquiries/DMs, sales if known. Rough numbers are fine]. Tell me: (1) what's actually working and the likely reason, (2) what's underperforming, (3) the ONE change to make next month, (4) which single number I should watch most closely for my goal. Explain in plain English, no jargon.",
        note: "Do this on the 1st of every month — 15 minutes. Screenshot the \"one change\" and check next month whether it moved the number.",
      },
      steps: [
        {
          html: `<h3>Vanity vs. value: which numbers matter</h3><p>Not all metrics deserve your attention:</p><ul><li><strong>Vanity metrics:</strong> likes, follower count — nice for the ego, weak links to revenue</li><li><strong>Value metrics:</strong> profile visits, website clicks, DMs and inquiries, bookings, sales — the path to money</li></ul><p>The connecting question: <em>"Of the people who saw this, how many took a step toward buying?"</em> A post with 40 likes and 6 booking inquiries beats a post with 400 likes and none. <strong>Track the steps, not the applause.</strong></p>`,
          question: {
            text: "Post A: 400 likes, 0 inquiries. Post B: 40 likes, 6 booking inquiries. Which performed better?",
            options: [
              "Post A — ten times the engagement",
              "Post B — likes are applause, inquiries are steps toward revenue",
              "Impossible to say without follower counts",
            ],
            correctIndex: 1,
            explanation:
              "Marketing exists to bring customers, not applause. Six people raising their hand to book beats hundreds of passive likes every single time.",
          },
        },
        {
          html: `<h3>Your 15-minute monthly review</h3><p>No spreadsheets degree required — AI is your analyst:</p><ul><li><strong>1. Gather (5 min):</strong> pull rough numbers from Instagram/Facebook insights and your website — reach, profile visits, clicks, inquiries. Screenshots or approximate numbers are fine</li><li><strong>2. Paste and ask (5 min):</strong> "Here are last month's numbers and my goal. What worked, what didn't, and what ONE thing should I change?"</li><li><strong>3. Decide (5 min):</strong> pick the one change, write it down, do it for a month</li></ul><div class="discovery"><p>💡 <strong>One change at a time</strong></p><p>Change five things at once and you'll never know which one worked. One monthly experiment — posting time, content type, call-to-action — gives you a clean answer every 30 days.</p></div>`,
          question: {
            text: "Why change only ONE marketing variable per month?",
            options: [
              "Changing more than one thing is against platform rules",
              "With one change, next month's numbers clearly show whether it worked",
              "Customers get confused by multiple changes",
            ],
            correctIndex: 1,
            explanation:
              "It's a clean experiment: one variable, one month, one readable result. Five simultaneous changes produce numbers nobody can interpret — including AI.",
          },
        },
        {
          html: `<p>Analyst training with Nova — read the numbers like a pro.</p>`,
          chat: [
            {
              bot: "Nova, your data buddy 📊 No spreadsheets, promise. Three quick reads.",
            },
            {
              bot: "A café's numbers: how-to reels get 3x the saves and shares of their promo posts, but they post 90% promos.",
              ask: "What's the AI-analyst advice?",
              inputType: "choice",
              options: [
                "Stop posting reels — promos are what sell",
                "Flip the mix toward how-to content, and weave gentle promos into it",
                "Post the same promos but at different times of day",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — the audience is voting with saves and shares. Lead with what they love, and let the selling ride along inside it.",
              hint: "Saves and shares are the audience raising their hands.",
            },
            {
              bot: "Fill in the analyst's rule.",
              ask: "Track the steps toward buying, not the ___.",
              inputType: "fill-blank",
              template: "Track the steps toward buying, not the ___.",
              options: ["applause", "competitors", "weather"],
              correctIndex: 0,
              feedback:
                "Right — likes are applause. Profile visits, clicks, and inquiries are footsteps toward your door.",
              hint: "What do likes really represent?",
            },
            {
              bot: "Last one: an owner says \"my follower count grew 200 this month, marketing is working!\" Sales and inquiries stayed flat.",
              ask: "Is her conclusion solid?",
              inputType: "binary",
              options: ["Solid", "Not so fast"],
              correctIndex: 1,
              feedback:
                "Not so fast — growth in followers with flat inquiries means attention without action. Time to check whether the content invites a step: a booking link, a question, an offer.",
              hint: "Did any of those 200 take a step toward buying?",
            },
          ],
        },
        {
          html: `<h3>Ask better questions, get better answers</h3><p>AI's analysis is only as good as your question. Upgrade from "how did I do?" to:</p><ul><li><em>"Which content type drove the most profile visits per post?"</em></li><li><em>"My goal is bookings — which numbers in this data connect to bookings, and what's blocking the path?"</em></li><li><em>"Compare this month to last month and explain the biggest change in plain English."</em></li><li><em>"If I could only do THREE marketing activities next month, which should they be based on this data?"</em></li></ul><p>And keep AI honest: it interprets, you verify. If a recommendation contradicts what you know about your customers, trust your knowledge — then test it with next month's single change. <strong>Numbers guide; they don't dictate.</strong></p>`,
          question: {
            text: "AI recommends a change that contradicts what you know about your customers. What do you do?",
            options: [
              "Follow it exactly — AI knows best",
              "Ignore all AI analysis from now on",
              "Trust your customer knowledge, and test the idea as a single measured experiment if it seems worth exploring",
            ],
            correctIndex: 2,
            explanation:
              "AI sees your numbers but not your customers' faces. Combine its pattern-spotting with your on-the-ground knowledge — and let a clean one-month test settle any disagreement.",
          },
        },
      ],
    },
    {
      title: "Build Your 30-Day Marketing Plan",
      summary:
        "Everything you've learned, packed into one realistic month you can start Monday",
      content: `<p>You now have the full AI marketing toolkit: your USP, copy, visuals, social system, question-driven content, and measurement. This final lesson assembles it into one realistic 30-day plan — sized to the hours you actually have, ready to launch Monday morning.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build my 30-day marketing plan. My business: [describe]. My USP: [paste]. My realistic time budget: [e.g. 3 hours per week]. My #1 goal this month: [e.g. 10 more booking inquiries]. Structure it as: Week 1 — foundations (bio/profiles refreshed with USP, brand kit set, first batch of posts); Weeks 2–3 — the rhythm (weekly 30-min batch sessions, 2:1 value-to-promo mix, one question-driven post each week); Week 4 — measure and adjust (15-min AI review, pick one change). For every week list: exact tasks, time each takes, and the AI prompt to use. Keep the total inside my time budget.",
        note: "Print it. Put it where you make coffee. A visible plan gets done; a perfect plan in a forgotten tab doesn't.",
      },
      steps: [
        {
          html: `<h3>Why 30 days changes everything</h3><p>Random posting produces random results. One focused month produces three things:</p><ul><li><strong>A rhythm:</strong> weekly batch sessions become as automatic as ordering stock</li><li><strong>A library:</strong> 12+ posts, saved templates, and battle-tested prompts you'll reuse forever</li><li><strong>A baseline:</strong> real numbers showing what YOUR audience responds to — not generic advice</li></ul><p>The plan lives inside your real time budget. <strong>Three consistent hours a week beats a heroic ten-hour week followed by silence.</strong> Consistency is the strategy; AI is what makes it affordable.</p>`,
          question: {
            text: "What matters most when sizing your 30-day plan?",
            options: [
              "Matching what your biggest competitor posts",
              "Fitting it inside the hours you can genuinely sustain every week",
              "Covering every platform that exists from day one",
            ],
            correctIndex: 1,
            explanation:
              "An ambitious plan you abandon in week two loses to a modest plan you complete. Sustainable rhythm builds the library, the baseline, and the habit — that's the compounding asset.",
          },
        },
        {
          html: `<h3>The week-by-week blueprint</h3><ul><li><strong>Week 1 — Foundations:</strong> refresh your bio and profiles with your USP, set your brand kit in Canva, batch your first 3 posts. <em>(~3 hours with AI)</em></li><li><strong>Week 2 — Rhythm begins:</strong> Sunday 30-minute batch session, 2:1 value-to-promo mix, start your questions note</li><li><strong>Week 3 — Deepen:</strong> add one question-driven post, try one new format (reel, story poll, FAQ carousel), keep collecting what works</li><li><strong>Week 4 — Measure & adjust:</strong> 15-minute AI review of the month's numbers, pick ONE change, plan next month in 20 minutes</li></ul><div class="discovery"><p>💡 <strong>The plan is a floor, not a ceiling</strong></p><p>Inspired on a Tuesday? Post the extra story. The plan guarantees the minimum that keeps you visible — spontaneity on top is pure bonus.</p></div>`,
          question: {
            text: "What happens in Week 4 of the plan?",
            options: [
              "Double the posting frequency to finish strong",
              "Review the month's numbers with AI, pick one change, and plan the next month",
              "Take the week off — the plan is complete",
            ],
            correctIndex: 1,
            explanation:
              "Week 4 closes the loop: measure, learn, adjust one thing, and roll into month two smarter. That review habit is what separates systems from sprints.",
          },
        },
        {
          html: `<p>Final readiness check with Nova — then you launch.</p>`,
          chat: [
            {
              bot: "Nova one last time 🚀 Let's make sure the whole system is locked in before launch.",
            },
            {
              bot: "Quick recap. Tap the words in order.",
              ask: "Arrange the universal AI marketing workflow:",
              inputType: "arrange",
              words: ["Describe", "create", "refine", "publish", "measure", "adjust"],
              feedback:
                "That's the full loop now — with measure and adjust closing it. Every month makes the next one sharper.",
              hint: "It ends with what Week 4 taught you.",
            },
            {
              bot: "Match each course skill to when you'll use it this month.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "USP from customer reviews", right: "Week 1: refresh bio & profiles" },
                { left: "30-min batch session", right: "Every Sunday" },
                { left: "Questions note on your phone", right: "Every day, 10 seconds" },
                { left: "AI number review", right: "Week 4, 15 minutes" },
              ],
              feedback:
                "Perfect — the whole course, mapped onto one calendar month. It all fits.",
              hint: "Foundations first, rhythm weekly, review monthly.",
            },
            {
              bot: "Real talk: it's day 12, you're slammed with orders, and Sunday's batch session didn't happen.",
              ask: "What's the move?",
              inputType: "choice",
              options: [
                "The plan is broken — start over next month",
                "Do a 10-minute mini-batch: one AI-drafted post, schedule it, move on",
                "Post an apology for being quiet",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — the system bends, it doesn't break. One imperfect post keeps the rhythm alive, and AI makes 10 minutes genuinely enough. Progress over perfection, always.",
              hint: "What keeps the streak alive at minimum cost?",
            },
          ],
        },
        {
          html: `<h3>You're ready — start before you're ready</h3><p>The complete toolkit, one last time:</p><ul><li><strong>Your USP</strong> — mined from real customer voices, visible everywhere</li><li><strong>Copy that sells</strong> — benefits first, hooks that stop the scroll, always in your voice</li><li><strong>Visuals without a designer</strong> — described, generated, branded, batched</li><li><strong>A social system</strong> — 30 Sunday minutes, the 2:1 mix, present in the comments</li><li><strong>Content customers asked for</strong> — every question answered once, working forever</li><li><strong>Numbers in plain English</strong> — one review, one change, every month</li></ul><p>Your competitors are still spending hours on flyers or skipping marketing entirely. You have a system. <strong>Generate your 30-day plan today — and post your first AI-assisted piece before the week ends.</strong></p>`,
          question: {
            text: "What's the single most important action after finishing this course?",
            options: [
              "Research more AI marketing tools for a few weeks",
              "Generate your 30-day plan and publish your first AI-assisted post this week",
              "Wait until next month starts so the plan aligns with the calendar",
            ],
            correctIndex: 1,
            explanation:
              "Momentum beats perfect timing. The plan takes minutes to generate and the first post takes minutes to create — done this week, it turns the course from knowledge into a working system.",
          },
        },
      ],
    },
  ],
};
