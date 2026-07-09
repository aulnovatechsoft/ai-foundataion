import type { UnitSeed } from "./types";

export const CHATGPT_UNIT_3: UnitSeed = {
  title: "Power User Level",
  lessons: [
    {
      title: "Image Generation with ChatGPT",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Create an image I can use as a wide blog header: subject = [a cozy coffee shop on a rainy morning], style = warm flat illustration, soft morning light, friendly mood, with generous empty space on the left for a headline.",
        note: "Send one small refining follow-up like 'make the lighting warmer' instead of rewriting the whole prompt.",
      },
      summary: "Describe a picture, get a picture — and refine it",
      content: `<p>Ask ChatGPT to "create an image of…" and it generates one from your description — no separate app, no design skills required. The whole thing happens right inside your conversation.</p><p>The real skill isn't clicking a button; it's <strong>describing well</strong>. A vague request gives you a generic picture. A precise one gives you something you can actually use for a post, a slide or a mockup. This lesson turns you into someone who gets usable images on the first or second try.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Generation, not a stock-photo search</h3><p>When you ask ChatGPT for an image, it isn't hunting through a library of existing photos — it <strong>creates</strong> a brand-new image based on your words. That's why the exact same request can look different each time, and why the words you choose matter so much.</p><p>Think of yourself as an art director briefing a very fast, very literal illustrator. It will draw exactly what you describe, and quietly guess at everything you leave out. The more of those guesses you make for it, the closer the result lands to what's in your head.</p><p>Try the simplest possible version first: type <em>"Create an image of a cozy coffee shop on a rainy morning."</em> You'll get something instantly — and you'll immediately start noticing what you'd change.</p>`,
          question: {
            text: "Why can the same image prompt produce different-looking results each time you run it?",
            options: [
              "ChatGPT searches a different website every time",
              "ChatGPT generates a new image from your description rather than fetching a fixed one",
              "The image quality randomly gets worse over time",
            ],
            correctIndex: 1,
            explanation:
              "Image generation creates something new from your words each time, so results vary. That's also why detailed prompts give you more control over the outcome.",
          },
        },
        {
          html: `<h3>The anatomy of a strong image prompt</h3><p>Great image prompts almost always name four things. Leave one out and ChatGPT fills the gap with an average guess.</p><ul><li><strong>Subject:</strong> what's in the image and what it's doing — "a woman presenting to a small team"</li><li><strong>Style:</strong> photo, watercolor, flat illustration, 3D render, line drawing…</li><li><strong>Mood &amp; light:</strong> warm sunrise, dramatic shadows, soft pastel, moody and cinematic</li><li><strong>Purpose &amp; framing:</strong> "as a wide blog header", "as a square logo concept", "with space on the left for text"</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Compare two prompts:</p><ul><li>"a dog" → a random dog, random everything</li><li>"a flat-illustration golden retriever puppy sitting in soft morning light, warm and friendly, as a wide banner with empty space on the right for text" → something you can actually drop into a newsletter</li></ul></div>`,
          question: {
            text: "You want an image you can put a headline on top of. Which detail matters most to add?",
            options: [
              "The exact breed of every animal in the scene",
              "Framing guidance like 'leave empty space on the left for text'",
              "The file size of the final image",
            ],
            correctIndex: 1,
            explanation:
              "Telling ChatGPT how the image will be used — including where you need blank space for text — shapes the composition so the result is genuinely usable.",
          },
        },
        {
          html: `<h3>Refine by conversation, not by starting over</h3><p>Here's the part beginners miss: image generation is a <strong>conversation</strong>, just like everything else in ChatGPT. You don't have to rewrite the whole prompt when something's off. You just say what to change.</p><p>Once you have a first image, steer it: <em>"make it warmer"</em>, <em>"remove the text"</em>, <em>"same scene but at night"</em>, <em>"more minimal, fewer objects"</em>, <em>"make the person older"</em>. Each instruction builds on the last image, so you can zero in step by step instead of gambling on one giant prompt.</p><p>Small, single-change iterations work best. If you change five things at once, you won't know which tweak helped and which one broke it.</p>`,
          question: {
            text: "Your generated image is close but the lighting feels too cold. What's the smartest next move?",
            options: [
              "Start a new chat and rewrite the entire prompt from scratch",
              "Reply with a small tweak like 'keep everything the same but make the lighting warmer'",
              "Give up — the tool clearly can't do it",
            ],
            correctIndex: 1,
            explanation:
              "Refining conversationally with one small change at a time lets you converge on the result you want without losing the parts that already worked.",
          },
        },
        {
          html: `<h3>Text, and knowing where images shine</h3><p>ChatGPT has gotten genuinely good at putting <strong>readable text inside images</strong> — signs, posters, mock ads, simple logos. It's not perfect, so always proofread the letters, but you can absolutely ask for "a poster that says GRAND OPENING in bold retro lettering."</p><p>Where image generation really earns its keep: social posts, presentation visuals, product and website mockups, concept art, thumbnails, and quick illustrations for docs. Anywhere <em>"good and fast"</em> beats <em>"perfect and slow,"</em> this is your tool.</p><p><strong>Try it right now:</strong> pick something you actually need this week — a header, a logo idea, a slide graphic. Write a prompt that names all four parts (subject, style, mood/light, purpose), generate it, then send exactly one refining follow-up. Notice how much better the second image is.</p>`,
          question: {
            text: "You need a quick eye-catching graphic for a slide deck in ten minutes. Is ChatGPT image generation a good fit?",
            options: [
              "No — you should always hire a designer for anything visual",
              "Yes — 'good and fast' visuals like slide graphics are exactly where it shines",
              "No — it can only make images of animals",
            ],
            correctIndex: 1,
            explanation:
              "Fast, good-enough visuals for slides, posts and mockups are the sweet spot for ChatGPT image generation. Just proofread any text it renders.",
          },
        },
      ],
    },
    {
      title: "Custom Instructions & Memory",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me write strong Custom Instructions. Ask me a few questions about who I am and how I like answers, then give me two tight paragraphs I can paste into Settings → Personalization — one describing me as a [job title], one describing exactly how I want you to respond (tone, length, format).",
        note: "Paste them into Settings → Personalization, start a new chat, and notice how much less context you have to type.",
      },
      summary: "Teach ChatGPT who you are — once",
      content: `<p>Tired of typing "keep it short" and "I'm a marketer" at the start of every single chat? You can set all of that once and have ChatGPT apply it automatically. Two features make this possible: <strong>Custom Instructions</strong> and <strong>Memory</strong>.</p><p>Five minutes of setup here quietly improves every future conversation you'll ever have. This lesson shows you exactly what to put in, how to control what ChatGPT remembers, and how to keep it all clean over time.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Two layers of personalization</h3><p>ChatGPT can adapt to you in two different ways, and it helps to know which is which.</p><ul><li><strong>Custom Instructions</strong> — a settings form where <em>you</em> tell ChatGPT about yourself and how you want answers. It's deliberate and stable: whatever you write applies to every new chat until you change it.</li><li><strong>Memory</strong> — facts ChatGPT picks up <em>automatically</em> from your conversations ("you're planning a wedding in June", "you prefer British spelling"). It builds up over time as you use it.</li></ul><p>Think of Custom Instructions as your permanent profile, and Memory as ChatGPT taking notes as you go. Together they mean less repeating yourself and more relevant answers.</p>`,
          question: {
            text: "What's the key difference between Custom Instructions and Memory?",
            options: [
              "Custom Instructions are set deliberately by you; Memory is gathered automatically from your chats",
              "They're two names for exactly the same feature",
              "Memory only works on the mobile app and Custom Instructions only on desktop",
            ],
            correctIndex: 0,
            explanation:
              "Custom Instructions is a form you fill in on purpose; Memory accumulates facts automatically as you chat. Both help ChatGPT tailor responses to you.",
          },
        },
        {
          html: `<h3>What to actually put in Custom Instructions</h3><p>You'll usually find two boxes in Settings → Personalization → Custom Instructions: one for <em>who you are</em>, and one for <em>how you want ChatGPT to respond</em>.</p><p><strong>Who you are:</strong> your role, industry, what you're working on, your location or language preference. Example: <em>"I run a small independent bakery in Manchester. I handle marketing, ordering and staff scheduling myself."</em></p><p><strong>How to respond:</strong> tone, length, format, and any pet peeves. Example: <em>"Keep answers practical and concise. Use UK English. Skip the disclaimers and filler. Default to bullet points for anything with steps."</em></p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>The best custom instructions are specific and behavioral. "Be helpful" does nothing. "Give me three options, then recommend one, in under 150 words" changes every answer you get.</p></div>`,
          question: {
            text: "Which custom instruction will actually change how ChatGPT responds?",
            options: [
              "\"Please be a good assistant.\"",
              "\"Always give me 3 concise options and then recommend one, in UK English.\"",
              "\"Do your best.\"",
            ],
            correctIndex: 1,
            explanation:
              "Specific, behavioral instructions about format, length and language shape every response. Vague encouragement doesn't give ChatGPT anything to act on.",
          },
        },
        {
          html: `<h3>Managing Memory and your privacy</h3><p>Because Memory builds up automatically, you stay in control of it. In Settings → Personalization you can <strong>view everything ChatGPT remembers</strong>, edit entries, delete individual ones, or wipe it all at once.</p><p>You can also tell it to remember or forget things mid-chat: <em>"Remember that I always sign off as 'Best, Sam'"</em> or <em>"Forget what I said about the London trip."</em> And when you want a clean, private session with nothing saved and nothing recalled, use a <strong>temporary chat</strong> — it won't use Memory or add to it.</p><p>This matters for privacy: if you're discussing something sensitive, or working on a shared or work account, temporary chats and periodic Memory cleanups keep your context appropriate.</p>`,
          question: {
            text: "You want to ask ChatGPT something sensitive without it being saved to Memory or your history. What do you use?",
            options: [
              "A temporary chat",
              "Custom Instructions",
              "You can't — everything is always saved permanently",
            ],
            correctIndex: 0,
            explanation:
              "Temporary chats don't draw on Memory or add to it, making them ideal for one-off or sensitive conversations. You can also view, edit and delete Memory anytime.",
          },
        },
        {
          html: `<h3>Keep it fresh: the monthly review habit</h3><p>Your life and work change — so should your setup. Custom instructions written six months ago might still say you're "job hunting" when you've long since been hired. Stale personalization quietly makes answers less relevant.</p><p>Build a tiny habit: once a month, spend two minutes reviewing your Custom Instructions and skimming your Memory. Update anything that's changed, delete anything outdated. Treat it like updating your email signature — small, occasional, worth it.</p><p><strong>Try it right now:</strong> open Settings → Personalization and write your first real Custom Instructions. One sentence about who you are, one about how you want answers. Then start a new chat and notice how much less context you have to type.</p>`,
          question: {
            text: "Why review your Custom Instructions and Memory every so often?",
            options: [
              "ChatGPT charges you if you don't",
              "Because your situation changes, and outdated personalization makes answers less relevant",
              "There's no reason — set it once and never touch it",
            ],
            correctIndex: 1,
            explanation:
              "As your role, projects and preferences change, refreshing your instructions and Memory keeps ChatGPT's answers accurate and useful.",
          },
        },
      ],
    },
    {
      title: "Custom GPTs",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to build a Custom GPT for [a task I repeat, like turning meeting notes into recaps]. Ask me what it should do, then draft clear Instructions covering its role, rules, tone, a fixed output format, and two conversation starters.",
        note: "Open the GPT builder (GPTs → Create), paste the Instructions, and create it for real.",
      },
      summary: "Build your own specialized assistant — no code",
      content: `<p>A Custom GPT is your own version of ChatGPT with baked-in instructions, uploaded knowledge and a set personality — built by filling in a form, with zero programming. Instead of re-explaining the same setup every day, you package it once and just… use it.</p><p>This lesson shows you what Custom GPTs are, how to build one step by step, and the kinds of assistants that genuinely save people hours every week.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>What a Custom GPT actually is</h3><p>Every time you start a normal chat, ChatGPT is a blank slate. A <strong>Custom GPT</strong> is a version that already knows its job before you say a word — because you've pre-loaded its instructions, reference files and tone.</p><p>Imagine a "Brand Voice Writer" that already has your style guide and best posts loaded in. You just type "write a launch post for our new oat latte," and it responds in your exact voice, following your exact rules, without you re-explaining anything.</p><p>It's the same underlying ChatGPT — you've just given it a permanent role and a head start. That's the whole idea: stop re-prompting the same setup over and over.</p>`,
          question: {
            text: "What makes a Custom GPT different from a normal ChatGPT chat?",
            options: [
              "It runs on a completely different, secret AI model",
              "It comes pre-loaded with instructions, knowledge and tone so you don't re-explain your setup each time",
              "It can only answer one question and then stops working",
            ],
            correctIndex: 1,
            explanation:
              "A Custom GPT is regular ChatGPT with a permanent role, reference files and personality baked in — saving you from repeating the same context every session.",
          },
        },
        {
          html: `<h3>Building one, no code required</h3><p>You'll find the builder under "GPTs" → "Create." There's a friendly walkthrough where you literally <em>describe</em> what you want in plain language, and it drafts the setup for you. You can also switch to the "Configure" tab to fill things in directly:</p><ul><li><strong>Name &amp; description</strong> — what it is and who it's for</li><li><strong>Instructions</strong> — its job, rules, tone, and what to do or avoid</li><li><strong>Conversation starters</strong> — example prompts so it's easy to use</li></ul><p>The single most important field is <strong>Instructions</strong>. Be specific: "You are a proposal writer for a design studio. Always follow this structure: overview, scope, timeline, price. Keep the tone confident but warm. Ask for the client's name and budget if they're missing."</p>`,
          question: {
            text: "Which field has the biggest impact on how a Custom GPT behaves?",
            options: [
              "The color of its icon",
              "The Instructions — its job, rules, tone and structure",
              "The number of conversation starters",
            ],
            correctIndex: 1,
            explanation:
              "Instructions define the GPT's role, rules and tone — they do the heavy lifting. Specific, structured instructions produce a genuinely useful assistant.",
          },
        },
        {
          html: `<h3>Give it knowledge, then share it</h3><p>Instructions tell a Custom GPT how to behave; <strong>knowledge files</strong> tell it what to know. Upload your style guide, product docs, FAQs, templates or past examples, and the GPT can reference them in its answers.</p><p>This is the leap from generic to genuinely yours. An "Onboarding Buddy" loaded with your team handbook can answer new hires' questions from <em>your</em> policies, not generic ones.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Once built, a Custom GPT is shareable. You can keep it private, share a link with your team so everyone uses the same trusted assistant, or publish it to the GPT store for anyone to find. One person's good prompt becomes the whole team's tool.</p></div>`,
          question: {
            text: "You want your Custom GPT to answer questions using your company's actual handbook. What do you do?",
            options: [
              "Paste the entire handbook into every single question you ask",
              "Upload the handbook as a knowledge file so the GPT can reference it",
              "Hope ChatGPT already knows your private handbook",
            ],
            correctIndex: 1,
            explanation:
              "Uploading knowledge files lets a Custom GPT reference your specific documents in every answer — no re-pasting, and grounded in your real content.",
          },
        },
        {
          html: `<h3>Ideas that actually work — and your turn</h3><p>The best Custom GPTs automate a task you repeat constantly. A few proven ones:</p><ul><li>A <strong>brand-voice writer</strong> with your style guide and top-performing posts</li><li>A <strong>proposal or quote generator</strong> that follows your exact template</li><li>An <strong>onboarding buddy</strong> loaded with team docs and FAQs</li><li>A <strong>meeting-notes formatter</strong> that always outputs decisions, owners and next steps</li></ul><p>The mental shift: stop treating your best prompt as something you retype daily, and start treating it as a <em>product</em> you build once and reuse forever.</p><p><strong>Try it right now:</strong> think of one thing you explain to ChatGPT over and over. Open the GPT builder, describe that assistant in a sentence or two, add one clear instruction, and create it. You've just turned a repeated task into a reusable tool.</p>`,
          question: {
            text: "What's the core mindset shift behind building a Custom GPT?",
            options: [
              "Turning a prompt you repeat constantly into a reusable tool built once",
              "Avoiding ChatGPT entirely from now on",
              "Making sure every answer is as long as possible",
            ],
            correctIndex: 0,
            explanation:
              "Custom GPTs let you package a repeated setup as a product you build once and reuse — for yourself or your whole team.",
          },
        },
      ],
    },
    {
      title: "Fact-Checking & Limitations",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Answer this factual question, then tell me how confident you are, exactly what I should double-check, and cite sources I can open: [your question]. Turn on web search if the answer depends on anything recent.",
        note: "Actually click the sources to confirm they exist and really say what was claimed — that's how you catch a hallucination.",
      },
      summary: "Use ChatGPT confidently without getting burned",
      content: `<p>ChatGPT can state something completely wrong with total confidence. These slips are called <strong>hallucinations</strong>, and they're the number-one way people get burned. But here's the thing: power users aren't the ones who never see errors — they're the ones with a solid verification habit.</p><p>This lesson gives you a simple framework for deciding when to trust, when to double-check, and how to catch mistakes before they cost you.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Why ChatGPT sometimes makes things up</h3><p>Remember from the very first lesson: ChatGPT <strong>generates</strong> answers by predicting likely text — it doesn't look up a stored fact. Most of the time that produces something accurate. But when it doesn't know, it doesn't stop and say "I'm not sure." It confidently fills the gap with something plausible-sounding.</p><p>That's a hallucination: a fluent, convincing answer that happens to be wrong. Fake statistics, invented quotes, citations to books that don't exist, a made-up feature — all delivered in the same self-assured tone as the correct stuff.</p><p>Understanding <em>why</em> this happens is the whole point: confidence is not a signal of accuracy. The tone tells you nothing about whether it's true.</p>`,
          question: {
            text: "What does it mean when ChatGPT sounds extremely confident about an answer?",
            options: [
              "It's guaranteed to be correct",
              "Nothing about accuracy — confidence and correctness are unrelated",
              "It has verified the answer against official sources",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT generates fluent text regardless of whether it's right. A confident tone is not evidence of accuracy — hallucinations sound just as sure as facts.",
          },
        },
        {
          html: `<h3>The stakes framework</h3><p>You don't need to fact-check everything — that would be exhausting and pointless. Match your effort to the <strong>stakes</strong>.</p><ul><li><strong>Low stakes</strong> (brainstorms, rough drafts, casual explanations, ideas): use freely. If something's off, no harm done.</li><li><strong>Medium stakes</strong> (client emails, summaries you'll share, content with your name on it): read carefully and fix any errors before it goes out.</li><li><strong>High stakes</strong> (legal, medical, financial, tax, statistics, citations, anything with real consequences): verify <em>every</em> factual claim against a primary source.</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>The question isn't "can I trust ChatGPT?" It's "what happens if this particular answer is wrong?" That single question tells you how hard to check.</p></div>`,
          question: {
            text: "ChatGPT gives you a specific statistic to include in an investor report. Which stakes level is this?",
            options: [
              "Low stakes — just use it as-is",
              "High stakes — verify the number against a primary source before using it",
              "It doesn't matter because numbers are always right",
            ],
            correctIndex: 1,
            explanation:
              "Statistics in a high-consequence document are high stakes. Numbers and citations are exactly what ChatGPT can fabricate, so verify against a primary source.",
          },
        },
        {
          html: `<h3>Practical verification moves</h3><p>Verifying doesn't have to be slow. A few habits catch most problems:</p><ul><li><strong>Ask it to check itself:</strong> "How confident are you, and what should I double-check?" It'll often flag its own shaky spots.</li><li><strong>Demand sources — then open them:</strong> ask for links, and actually click through. If a "source" doesn't exist or doesn't say what was claimed, you've caught a hallucination.</li><li><strong>Cross-check the specifics:</strong> names, dates, numbers, quotes and legal or medical claims deserve a quick independent search.</li><li><strong>Watch for suspicious precision:</strong> oddly exact figures with no source are a classic tell.</li></ul><p>None of this takes long, and it turns "I hope this is right" into "I know this is right."</p>`,
          question: {
            text: "ChatGPT cites a study to support a claim. What's the best verification move?",
            options: [
              "Trust it — it wouldn't cite something fake",
              "Ask for the link and actually open it to confirm the study exists and says what was claimed",
              "Ask ChatGPT to make the citation sound more official",
            ],
            correctIndex: 1,
            explanation:
              "Fabricated citations are common. Requesting the source and opening it to confirm both its existence and its content is the reliable way to catch them.",
          },
        },
        {
          html: `<h3>Browsing and the knowledge cutoff</h3><p>ChatGPT's core training has a <strong>knowledge cutoff</strong> — a date after which it simply hasn't learned about new events, prices, releases or news. Ask about something recent from memory alone and it may guess or give outdated info.</p><p>The fix is <strong>Web Search</strong>: turn it on (or ask "search the web for this") and ChatGPT pulls in current information with links you can verify. For anything time-sensitive — recent news, current prices, latest versions, who won last week — always browse rather than rely on memory.</p><p><strong>Try it right now:</strong> ask ChatGPT something factual you can check, then reply "How confident are you, and what should I verify? Please cite sources I can open." Notice how the answer becomes something you can actually trust — because you remain the editor-in-chief, and ChatGPT is your very fast, occasionally mistaken assistant.</p>`,
          question: {
            text: "You need today's accurate information about a recent product launch. What's the right approach?",
            options: [
              "Trust ChatGPT's memory — it always knows the latest news",
              "Use Web Search so ChatGPT pulls current info with verifiable links",
              "Assume nothing can be known about recent events",
            ],
            correctIndex: 1,
            explanation:
              "Because of the knowledge cutoff, recent events need Web Search. It fetches current information and gives you links you can open and verify.",
          },
        },
      ],
    },
    {
      title: "Your ChatGPT Workflow",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me build a weekly ChatGPT system. I do these three recurring tasks: [task 1], [task 2], [task 3]. For each, write one reusable prompt using role, context, task and format, and suggest when in my week to run it.",
        note: "Save these prompts where you'll actually find them and run at least one this week.",
      },
      summary: "Combine everything into a daily system",
      content: `<p>You've learned the modes, the features, the prompting, the personalization and the verification habits. This final lesson ties it all together into a <strong>system</strong> — because skills you don't wire into your routine quietly fade within a week.</p><p>By the end you'll have a personal playbook: a few great prompts for your most common tasks, stored where you'll actually use them, triggered automatically so ChatGPT becomes a genuine part of how you work.</p>`,
      estimatedMinutes: 20,
      steps: [
        {
          html: `<h3>From features to a system</h3><p>Most people learn a tool, feel excited for a few days, then drift back to old habits. The difference between someone who "tried ChatGPT" and someone who's transformed by it isn't knowledge — it's <strong>routine</strong>.</p><p>A system beats motivation every time. Instead of relying on remembering to use ChatGPT, you build it into moments that already happen: your Monday planning, your pre-meeting prep, your Friday review. The tool shows up because your routine summons it.</p><p>So the goal of this lesson isn't to learn anything new — it's to <em>install</em> what you've learned so it sticks.</p>`,
          question: {
            text: "Why do most people stop using a new tool like ChatGPT after a week?",
            options: [
              "They didn't wire it into a routine, so it relied on memory and motivation",
              "The tool automatically disables itself after a week",
              "It's impossible to use ChatGPT more than a few times",
            ],
            correctIndex: 0,
            explanation:
              "Skills fade when they depend on remembering. Building ChatGPT into existing routines makes usage automatic instead of effortful.",
          },
        },
        {
          html: `<h3>Pick your three recurring tasks</h3><p>Don't try to ChatGPT-ify your whole life at once. Start by choosing <strong>three tasks you do every week</strong> that involve thinking or writing. Common winners:</p><ul><li>A weekly status update or team summary</li><li>Meeting prep or meeting recap</li><li>A content draft — post, newsletter, email</li><li>Planning your week or triaging your inbox</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>The best candidates are boring and repetitive — the tasks you dread or rush through. Those are exactly where a reusable prompt pays off week after week, freeing your energy for the work only you can do.</p></div>`,
          question: {
            text: "What kind of task is the best candidate for a reusable ChatGPT prompt?",
            options: [
              "A one-time task you'll never do again",
              "A repetitive weekly task like a status update or meeting recap",
              "Something you never actually need help with",
            ],
            correctIndex: 1,
            explanation:
              "Repetitive, recurring tasks give a reusable prompt something to save you on, over and over — the highest-leverage place to start.",
          },
        },
        {
          html: `<h3>Craft and store one great prompt per task</h3><p>For each of your three tasks, write <em>one</em> excellent prompt using the formula from Unit 1: <strong>Role + Context + Task + Format</strong>. For example: "You are my chief of staff. Here are my rough notes from this week [paste]. Write a 5-bullet status update for my manager: concise, outcome-focused, flag any risks."</p><p>Then <strong>store it where you'll find it again</strong>:</p><ul><li>In a <strong>Project</strong>, so the prompt and its files share context</li><li>In a note or doc you keep open</li><li>As a <strong>Custom GPT</strong>, if it's something you or your team run constantly</li></ul><p>A brilliant prompt you can't find is worthless. The one you can reuse in two clicks becomes part of your week.</p>`,
          question: {
            text: "You've written a great prompt for your weekly status update. What should you do with it?",
            options: [
              "Memorize it and retype it from scratch every week",
              "Store it somewhere reusable — a Project, a note, or a Custom GPT",
              "Use it once and then delete it",
            ],
            correctIndex: 1,
            explanation:
              "Storing your best prompts in a Project, note or Custom GPT turns a one-off effort into a tool you reuse in seconds every week.",
          },
        },
        {
          html: `<h3>Trigger it, and keep experimenting</h3><p>The last piece: give each prompt a <strong>trigger</strong> so you never have to remember it. Attach them to your calendar or existing rhythms — Monday morning planning prompt, before-every-meeting prep prompt, Friday review prompt. Some people even use ChatGPT's scheduled tasks or reminders to nudge them.</p><p>Then protect <strong>one experiment slot per week</strong>: try one feature you haven't fully used — Voice, file analysis, images, a Custom GPT — on a real task. That habit is how your skills keep growing after this course ends.</p>`,
          question: {
            text: "Why attach your key prompts to calendar triggers or existing routines?",
            options: [
              "So you don't have to rely on remembering to use them — they fire automatically",
              "Because ChatGPT only works on scheduled days",
              "To make your calendar look busier",
            ],
            correctIndex: 0,
            explanation:
              "Triggers remove the need to remember. When a prompt is tied to a routine you already have, using ChatGPT becomes automatic.",
          },
        },
        {
          html: `<h3>Your playbook — and congratulations</h3><p>Put it together and you have a real system: three recurring tasks, one great stored prompt each, a trigger for every one, and a weekly experiment slot to keep leveling up. That's not "using ChatGPT sometimes" — that's a workflow that compounds.</p><p>You started this course as a casual user. You now understand modes, features, prompting, iteration, organization, voice, summarizing, writing, files, images, personalization, custom GPTs and fact-checking — and how to weave them into how you actually work.</p><p><strong>Your final challenge:</strong> right now, write down your three recurring tasks and draft one prompt for the first one. Store it. That single action turns everything you've learned into a habit. Congratulations on completing the ChatGPT course — claim your certificate and put your new workflow to work.</p>`,
          question: {
            text: "What are the ingredients of a ChatGPT workflow that actually sticks?",
            options: [
              "Recurring tasks, one stored prompt each, triggers to fire them, and a weekly experiment slot",
              "Reading about features once and never applying them",
              "Using a brand-new random prompt every single time",
            ],
            correctIndex: 0,
            explanation:
              "A durable workflow pairs your key recurring tasks with reusable stored prompts, automatic triggers, and a habit of experimenting — so your skills keep compounding.",
          },
        },
      ],
    },
  ],
};
