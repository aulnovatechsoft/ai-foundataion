import type { UnitSeed } from "./types";

export const CHATGPT_UNIT_1: UnitSeed = {
  title: "ChatGPT Foundations",
  lessons: [
    {
      title: "Meet ChatGPT",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "You are a helpful assistant. I have a busy day tomorrow with [3 meetings and a report due]. Ask me two quick clarifying questions, then help me build a realistic hour-by-hour schedule I can actually follow.",
        note: "Notice how it engages with your specifics instead of giving a generic list — reply with corrections and watch it adapt.",
      },
      summary: "What ChatGPT is, what it's great at, and where it fits in your day",
      content: `<p>ChatGPT is a conversational AI built on a large language model. You type (or say) what you need in plain language, and it responds — drafting text, answering questions, brainstorming, explaining, translating and more.</p><p>The most important mindset shift: ChatGPT is not a search engine. It doesn't look up a fixed answer — it <strong>generates</strong> one based on patterns learned from vast amounts of text. That makes it incredibly flexible, and it also means you should verify facts that matter.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>A new kind of tool</h3><p>Think about the last time you were stuck on a blank page — an email you dreaded, a plan you couldn't start, a topic you didn't understand. ChatGPT exists for exactly those moments. You describe what you need in ordinary language, and it produces something you can react to and improve.</p><p>Under the hood, ChatGPT runs on a <strong>large language model</strong>: a system trained on enormous amounts of text that has learned the patterns of how humans write and reason. When you ask it something, it doesn't retrieve a stored answer — it <strong>generates</strong> a fresh response, word by word, based on those patterns.</p><p>That's why the same question can produce slightly different answers, and why it can help with almost anything you can describe. It's less like a filing cabinet and more like a very well-read assistant who's always available.</p>`,
          question: {
            text: "What is the best way to think about how ChatGPT produces an answer?",
            options: [
              "It searches a database and returns the matching stored answer",
              "It generates a new response based on patterns it learned from text",
              "It copies the closest article it can find online",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT generates responses rather than retrieving fixed ones. That's what makes it so flexible — and why it can occasionally get facts wrong and should be verified when accuracy matters.",
          },
        },
        {
          html: `<h3>Generation vs. search</h3><p>This is the single biggest mindset shift for new users. A search engine points you to pages that <em>already exist</em> — you still have to read, filter and assemble the answer yourself. ChatGPT <strong>creates</strong> the answer directly, shaped to your exact situation.</p><p>Say you're moving to a new city. Search gives you ten articles about the city. ChatGPT can write you a personalized two-week settling-in checklist based on the details you share. Search finds information; ChatGPT <strong>does something with it</strong>.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Use search when you need to find a specific existing source or a live fact. Use ChatGPT when you need something <em>made</em> for you: a draft, a plan, an explanation, a comparison, a rewrite.</p></div><p>The two aren't rivals — great users switch fluidly between them, and as you'll see later, ChatGPT can even search the web itself when it needs current information.</p>`,
          question: {
            text: "You need a personalized 7-day meal plan built around your budget and dislikes. Which tool fits best?",
            options: [
              "A search engine, to find existing meal-plan articles",
              "ChatGPT, to generate a plan tailored to your specifics",
            ],
            correctIndex: 1,
            explanation:
              "A tailored, made-for-you plan is a generation task. Search would only surface generic articles you'd still have to adapt yourself.",
          },
        },
        {
          html: `<h3>Where ChatGPT shines</h3><p>ChatGPT is strongest whenever you need language shaped for a purpose. The clearest wins:</p><ul><li><strong>First drafts</strong> of emails, posts, messages and documents — beating the blank page</li><li><strong>Summarizing and simplifying</strong> long or complex text into something you can act on</li><li><strong>Brainstorming</strong> ideas and structuring plans when you're stuck</li><li><strong>Explaining anything</strong> at exactly the level you need — like you're five, or like an expert</li><li><strong>Translating and rephrasing</strong> to change language, tone or audience</li></ul><p>It's just as important to know where to stay cautious: anything <strong>high-stakes and factual</strong> — medical, legal, financial or breaking news — deserves verification, because a confident answer isn't always a correct one. We'll build that verification habit later in the course.</p>`,
          question: {
            text: "Which task is the LEAST safe to trust ChatGPT with, without checking?",
            options: [
              "Brainstorming names for a new podcast",
              "The exact dosage instructions for a prescription medication",
              "Rewriting an email to sound friendlier",
            ],
            correctIndex: 1,
            explanation:
              "Medical dosages are high-stakes and factual — exactly the kind of thing to verify with a professional or primary source. Brainstorming and rewriting are low-risk creative tasks where ChatGPT excels.",
          },
        },
        {
          html: `<h3>Your first hands-on prompt</h3><p>Reading about ChatGPT only gets you so far — the fastest way to learn is to use it. Here's a first prompt that shows off what it does best. Open ChatGPT and try something like this, filling in your own details:</p><p><strong>"You are a helpful assistant. I have a busy day tomorrow with three meetings and a report due. Ask me two quick questions, then help me plan a realistic schedule."</strong></p><p>Notice what happens: it doesn't just spit out a generic list — it engages with <em>your</em> situation. That back-and-forth is the whole point, and it's the skill we'll sharpen throughout this course.</p><p><strong>Your challenge right now:</strong> think of one small thing you've been putting off — an email, a decision, a plan — and ask ChatGPT to help you take the first step. That single habit, using it for real tasks, is what turns ChatGPT from a novelty into an everyday tool.</p>`,
          question: {
            text: "What's the best way to actually get good at ChatGPT?",
            options: [
              "Read as much about it as possible before touching it",
              "Use it on real, small tasks and learn from the back-and-forth",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT is a hands-on tool. Applying it to real tasks — and iterating on the responses — is how you build genuine skill, which is exactly what the rest of this course helps you do.",
          },
        },
      ],
    },
    {
      title: "Discovering Modes & Features",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I have an interview next week for [a marketing role at Nike]. Turn on web search and give me the company's three most recent news items with links. Then switch to a more thorough answer and draft a tailored 'tell me about yourself' plus three practice questions.",
        note: "Try the same request once in Instant mode and once in Thinking mode to feel the difference in depth.",
      },
      summary: "Know which ChatGPT mode and feature fits your need",
      content: `<p>Most people who use ChatGPT are only scratching the surface. There's a whole layer of modes and features that completely changes how you interact with it: Instant Mode for speed, Thinking Mode for complex reasoning, plus features like Web Search, Deep Research, file uploads and image creation. Match the mode and feature to the task, and you'll get better results faster.</p>`,
      steps: [
        {
          html: `<h3>Endless possibilities with ChatGPT</h3><p>Most people who use ChatGPT are only scratching the surface — and don't even know it. They type a question, get an answer, and call it a day. It works — but it's a fraction of what the tool can actually do. There's a whole layer of <strong>modes and features</strong> that completely changes how you interact with it.</p><h3>Your first ChatGPT challenge</h3><p>Imagine you're preparing for a job interview. You need company research, a tailored answer to "tell me about yourself," and three practice questions — all from ChatGPT. Using the same approach for all three would slow you down. This lesson shows you how to match the right ChatGPT mode and feature to the right task.</p><p>Previously, ChatGPT operated on different models (GPT-3, GPT-4, o-3…), each best at a specific thing. Since then, ChatGPT runs on its single most powerful model by default. Now that you know how to prompt well, you can go one step further — choosing the right <strong>mode</strong> for your task, so you stop over-prompting and start working smarter.</p>`,
          question: {
            text: "Say you need to quickly write a summary section in your resume ASAP. What would you choose?",
            options: [
              "A mode that asks clarifying questions about your preferences first",
              "A mode that generates summary options immediately",
            ],
            correctIndex: 1,
            explanation:
              "Clarification can improve results, but for simple, time-sensitive tasks it adds unnecessary friction. For quick, straightforward tasks, Instant Mode is your best choice — it prioritizes speed and delivers results without additional questions.",
          },
        },
        {
          html: `<h3>When speed isn't enough</h3><p>Complex tasks need more processing power. Instant Mode won't deliver the depth required for advanced, multi-step work. That's what <strong>Thinking Mode</strong> is for — it's specifically designed for tasks that require reasoning and synthesis.</p><p>In fact, ChatGPT can recognize task complexity automatically — if you enable <em>Auto-switch to Thinking</em> in the Configure settings, it decides when to use Thinking Mode based on your request. But if you want to guarantee deep processing for a complex task, manually selecting Thinking Mode ensures full power.</p><div class="discovery"><p>💡 <strong>First Discovery</strong></p><p>Think of ChatGPT modes as different engines:</p><ul><li><strong>Instant</strong> is built for speed</li><li><strong>Thinking</strong> is built for complex tasks</li><li><strong>Auto-switch to Thinking</strong> goes deep automatically (enable in Configure → Intelligence)</li></ul><p>Match the mode to the task, and you'll get better results faster.</p></div>`,
          question: {
            text: "You're asking ChatGPT to build a 3-month career transition plan comparing salaries, skill gaps and learning paths across two industries. Which mode fits?",
            options: [
              "Instant Mode — it's always the fastest",
              "Thinking Mode — multi-step reasoning and synthesis",
            ],
            correctIndex: 1,
            explanation:
              "Multi-step analysis that weighs several factors is exactly what Thinking Mode is designed for. Instant Mode would give you a shallower answer faster.",
          },
        },
        {
          html: `<h3>ChatGPT's features</h3><p>Choosing the right mode is just the beginning. ChatGPT also has specialized <strong>features</strong> that enhance specific types of tasks.</p><p><strong>Feature 1: Web Search</strong> — pulls current information from the internet: news, company updates, recent developments. Perfect for company research, current events and product launches. In the job-hunt scenario: you're interviewing at Nike and need their latest news — Web Search pulls current Nike news directly into the chat, no digging through news sites yourself.</p><p><strong>Feature 2: Deep Research</strong> — built for long, comprehensive, multi-source analysis. It examines dozens of sources, synthesizes findings and produces detailed reports. Use it for academic papers, market analysis and competitive landscape reports.</p>`,
          question: {
            text: "For the interview prep task — quickly researching the company's latest news — which feature is the best fit?",
            options: ["Study and Learn", "Deep Research", "Web Search"],
            correctIndex: 2,
            explanation:
              "Web Search is fast and pulls current information without over-complication. Deep Research handles intensive analysis over time — think academic papers — and takes significantly longer. For quick company info, Web Search is faster and sufficient.",
          },
        },
        {
          html: `<h3>More tools in the toolkit</h3><p><strong>Feature 3: Add Photos & Files</strong> — upload images (PNG, JPG, PDF) and documents (Word, Excel, text) for ChatGPT to analyze, summarize or reference. Upload a resume to edit it, an Excel sheet to analyze, a screenshot to extract text from.</p><p><strong>Feature 4: Create Images</strong> — describe what you need visually and ChatGPT generates it: portfolio visuals, logos, presentation graphics, social media visuals.</p><p>Other specialized features: <strong>Shopping Research</strong> compares products and deals across retailers; <strong>Study and Learn</strong> creates study plans and quizzes from uploaded materials; <strong>Canvas</strong> opens a side-by-side editor for iterative writing and coding projects.</p><div class="discovery"><p>💡 <strong>Second Discovery</strong></p><p>ChatGPT's features are tools in a toolkit:</p><ul><li><strong>Web Search</strong> for current info (fast)</li><li><strong>Deep Research</strong> for comprehensive analysis (slow)</li><li><strong>Files/Photos</strong> for analyzing uploads</li><li><strong>Image Creation</strong> for visual content</li></ul></div>`,
          question: {
            text: "You want ChatGPT to tidy up your resume. What's the most direct way?",
            options: [
              "Retype the whole resume into the chat",
              "Upload the file with Add Photos & Files and ask for edits",
              "Use Create Images to generate a new resume",
            ],
            correctIndex: 1,
            explanation:
              "Add Photos & Files lets ChatGPT read your actual document — upload the resume and ask for specific improvements.",
          },
        },
      ],
    },
    {
      title: "Writing Great Prompts",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "You are an experienced career coach (role). I'm applying for [a junior data analyst role] and my background is in [retail] (context). Write a cover letter that reframes my experience as transferable analytics skills (task). Keep it under 200 words, warm but professional, no clichés (format).",
        note: "Now delete the role and format parts, rerun, and compare — the generic version shows exactly why the four parts matter.",
      },
      summary: "The 4-part formula that upgrades every answer",
      content: `<p>The single highest-leverage ChatGPT skill is prompting. A vague prompt gets a vague answer; a well-structured one gets something you can actually use. The good news: there's a simple formula that works almost every time.</p><p>Compare "write about dogs" with "You are a vet. Write a friendly 100-word guide for first-time puppy owners on the three vaccinations that matter most." Same tool, wildly different output — and the difference is entirely in the prompt.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>The four parts of a great prompt</h3><p>Behind almost every excellent ChatGPT answer is a prompt with four ingredients. You don't always need all four, but knowing them means you can always diagnose a weak answer.</p><ul><li><strong>Role</strong> — who the AI should act as: "You are a senior recruiter…"</li><li><strong>Context</strong> — the background it needs: "I'm applying for a data analyst role at a bank…"</li><li><strong>Task</strong> — exactly what you want: "Rewrite my summary to highlight analytics wins."</li><li><strong>Format</strong> — how you want it delivered: "Under 80 words, confident tone, no buzzwords."</li></ul><p>Role and context set the stage; task and format control the output. Skip them and ChatGPT has to guess — and its guesses are generic by default.</p>`,
          question: {
            text: "In the prompt \"You are a nutritionist. I'm vegetarian and training for a 10k. Give me a one-day meal plan as a simple table,\" which part is the Format?",
            options: [
              "\"You are a nutritionist\"",
              "\"I'm vegetarian and training for a 10k\"",
              "\"as a simple table\"",
            ],
            correctIndex: 2,
            explanation:
              "\"As a simple table\" specifies how you want the answer delivered — that's Format. The role is the nutritionist, and the vegetarian/training detail is Context.",
          },
        },
        {
          html: `<h3>Before and after</h3><p>Let's see the formula in action. Watch how much richer the output request becomes when you layer the parts in.</p><p><strong>Before:</strong> "Write a cover letter."</p><p><strong>After:</strong> "You are a career coach (role). I'm applying for a junior marketing role at a nonprofit; my background is in retail (context). Write a cover letter that reframes my retail experience as transferable marketing skills (task). Keep it under 250 words, warm but professional, no clichés (format)."</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>The "before" version forces ChatGPT to invent a generic person in a generic job. The "after" version could only describe <em>you</em>. Specificity is what turns a template into something usable.</p></div><p>The more you tell it about your real situation, the less editing you'll do afterward.</p>`,
          question: {
            text: "Why does the detailed \"after\" prompt produce a much better cover letter?",
            options: [
              "Longer prompts always work better regardless of content",
              "It gives ChatGPT the role, context, task and format it needs to tailor the answer",
              "It uses more advanced vocabulary",
            ],
            correctIndex: 1,
            explanation:
              "It's not the length — it's the structure. Supplying role, context, task and format lets ChatGPT tailor the output to your real situation instead of guessing.",
          },
        },
        {
          html: `<h3>Common prompt mistakes</h3><p>Most disappointing answers trace back to a few avoidable habits:</p><ul><li><strong>Being too vague:</strong> "make it better" — better how? Shorter, warmer, more formal?</li><li><strong>Asking for everything at once:</strong> cramming five unrelated requests into one prompt muddies all of them.</li><li><strong>Leaving out the audience:</strong> "explain blockchain" reads very differently for a child versus an investor.</li><li><strong>Forgetting the format:</strong> if you want bullets, a table or a word count, say so.</li></ul><p>The fix for all of these is the same: add the missing part. When an answer disappoints, don't start over from scratch — identify which of the four ingredients is missing and add it.</p>`,
          question: {
            text: "ChatGPT gives you an answer that's technically correct but far too long and formal for a quick team Slack message. What's the fastest fix?",
            options: [
              "Start a brand-new chat and hope for a better result",
              "Add the missing format and audience: \"Rewrite this as a casual 2-sentence Slack message\"",
              "Ask the exact same question again",
            ],
            correctIndex: 1,
            explanation:
              "The answer was missing format and audience. Adding those (\"casual, 2 sentences, Slack\") fixes it instantly — no need to restart.",
          },
        },
        {
          html: `<h3>Your prompt upgrade challenge</h3><p>Time to make this stick. Take a prompt you might normally type — something plain like "write a birthday message" or "give me ideas for dinner" — and upgrade it using all four parts.</p><p>For example, turn "give me dinner ideas" into: <strong>"You are a practical home cook. I have chicken, rice and a few vegetables, 30 minutes, and a picky eater at the table (context + role). Suggest three dinner options (task). List them as short bullet points with rough cook times (format)."</strong></p><p><strong>Your challenge right now:</strong> open ChatGPT, write one weak prompt, then rewrite it with role, context, task and format — and run both. Seeing the two answers side by side is the moment the formula clicks. From here on, when a result underwhelms you, you'll know exactly which ingredient to add.</p>`,
          question: {
            text: "You don't need all four parts every time. When is it most worth adding the missing ones?",
            options: [
              "Only when writing very long documents",
              "When an answer disappoints — add the missing part and regenerate",
              "Never, since the default answer is always fine",
            ],
            correctIndex: 1,
            explanation:
              "The four-part formula is a diagnostic tool. When an answer falls short, figure out which ingredient is missing, add it, and regenerate — that loop is how professionals work.",
          },
        },
      ],
    },
    {
      title: "Follow-ups & Iteration",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Draft a short message politely declining a meeting invitation. Then I'll send you at least three follow-ups in a row: make it warmer, then cut it in half, then tell me what's weak about it and fix it.",
        note: "Don't accept the first draft — the best result comes from the back-and-forth, not the opening prompt.",
      },
      summary: "Treat ChatGPT like a conversation, not a slot machine",
      content: `<p>Beginners take the first answer and leave. Power users treat the first answer as a starting point. ChatGPT remembers the whole conversation, so you can steer it turn by turn — and that back-and-forth is where the best results come from.</p><p>If you haven't sent at least one follow-up, you probably haven't gotten ChatGPT's best work yet.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>A conversation, not a slot machine</h3><p>A slot machine mindset looks like this: type a prompt, get an answer, and if it's not perfect, pull the lever again by rewriting the whole thing from scratch. It's slow and frustrating.</p><p>ChatGPT works nothing like that. It <strong>remembers everything in the current chat</strong>, so each message builds on the last. You don't restart — you refine. "Make it shorter." "More formal." "Actually, focus on the second point." Each follow-up compounds on everything that came before.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Your first prompt gets you into the right neighborhood. Follow-ups walk you to the exact door. The magic isn't in the perfect opening prompt — it's in the conversation that follows.</p></div>`,
          question: {
            text: "The first draft ChatGPT gives you is close but too long. What's the power-user move?",
            options: [
              "Rewrite your entire original prompt and start over",
              "Reply \"Cut this by half without losing the key message\"",
              "Accept it as-is since regenerating never helps",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT remembers the draft, so a simple follow-up like \"cut this by half\" refines it directly. Starting over throws away the progress you already made.",
          },
        },
        {
          html: `<h3>Useful iteration moves</h3><p>A handful of reliable follow-ups will cover most situations. Keep these in your back pocket:</p><ul><li><strong>Tighten:</strong> "Cut this by half without losing the key message."</li><li><strong>Retone:</strong> "Same content, but warmer and less corporate."</li><li><strong>Options:</strong> "Give me 3 versions: bold, safe and playful."</li><li><strong>Critique:</strong> "What's weak about this draft? Then fix it."</li><li><strong>Reformat:</strong> "Turn this into a table" or "make it a short bulleted list."</li></ul><p>Notice these are small, single-direction nudges. Changing one thing at a time gives you control — you can always stack another move on top once you see the result.</p>`,
          question: {
            text: "You want ChatGPT to pressure-test its own draft and improve it. Which move fits best?",
            options: [
              "Tighten: \"Cut this by half\"",
              "Critique: \"What's weak about this draft? Then fix it\"",
              "Reformat: \"Turn this into a table\"",
            ],
            correctIndex: 1,
            explanation:
              "The Critique move asks ChatGPT to find its own weak spots and fix them — great for catching problems you might miss. Tighten and Reformat change length or structure, not quality.",
          },
        },
        {
          html: `<h3>Branching and regenerating</h3><p>Two features give you even more control over the conversation.</p><p><strong>Editing a previous message</strong> lets you branch the chat. If a whole line of responses went the wrong way, go back and edit your earlier prompt — ChatGPT continues from there down a new path, without you losing the earlier version.</p><p><strong>Regenerate</strong> asks for a fresh take on the <em>same</em> prompt. Because responses are generated, you'll often get a meaningfully different answer — useful when the direction was right but the execution wasn't. Some versions even let you compare two responses side by side and pick the better one.</p><p>Think of it as directing: edit to change the script, regenerate to reshoot the same scene.</p>`,
          question: {
            text: "The whole conversation drifted off-track three messages ago. What's the cleanest way to fix it?",
            options: [
              "Keep sending more follow-ups to slowly correct course",
              "Edit the earlier message to branch the chat down a better path",
              "Delete the chat and lose everything",
            ],
            correctIndex: 1,
            explanation:
              "Editing an earlier message branches the conversation from that point, so you can redirect without piling on corrections or losing your work.",
          },
        },
        {
          html: `<h3>Your iteration challenge</h3><p>Let's build the habit that separates casual users from power users. The goal isn't a perfect first prompt — it's a good conversation.</p><p><strong>Your challenge right now:</strong> pick any real task — a message, a plan, a paragraph — and commit to <em>at least three follow-ups</em> before you accept the result. Start broad, then steer:</p><ul><li>First get a rough draft.</li><li>Then Retone it to sound more like you.</li><li>Then ask for Options or a Critique.</li><li>Then Tighten it to final form.</li></ul><p>Do this once and you'll feel the difference immediately. Rule of thumb from here on: if you haven't sent a follow-up, you haven't seen ChatGPT's best work yet.</p>`,
          question: {
            text: "What's the core habit that gets ChatGPT's best work out of it?",
            options: [
              "Writing one flawless prompt and accepting the first answer",
              "Treating it as a conversation and iterating with follow-ups",
              "Regenerating the same prompt until you get lucky",
            ],
            correctIndex: 1,
            explanation:
              "The best results come from iteration — steering the answer with follow-ups. A single follow-up almost always beats accepting the first draft.",
          },
        },
      ],
    },
    {
      title: "Stay Organized: Chats, Projects & History",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to get organized in ChatGPT. Suggest a simple system for naming chats and using Projects for my recurring work as a [marketer], then help me write one reusable prompt for my weekly status update that I can save and reuse.",
        note: "Rename this chat something you'll recognize later, and save the prompt it gives you as the first entry in your prompt library.",
      },
      summary: "Keep your work findable and reusable",
      content: `<p>Your ChatGPT history is an asset. Every good answer, every prompt that worked, every plan you built is sitting in your account — but only if you can find it again. A little organization makes all of that compound over time.</p><p>Organized users get faster every week; disorganized ones start over every day.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Chat hygiene: one topic per chat</h3><p>The most common organizing mistake is treating a single chat as a catch-all. You start planning a work project, then ask about a recipe, then draft a birthday message — all in one thread.</p><p>The problem is that ChatGPT uses the whole conversation as context. Mixing your marketing plan and your travel itinerary in one thread confuses both you <em>and</em> the model — its answers start bleeding across unrelated topics.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Treat each chat like a document, not a diary. One topic per chat keeps the context clean, the answers sharp, and the thread easy to find later.</p></div><p>When you switch to a genuinely new task, start a new chat. It takes one click and saves you confusion down the line.</p>`,
          question: {
            text: "Why is it better to start a new chat when you switch to an unrelated task?",
            options: [
              "It makes ChatGPT respond faster",
              "It keeps the context clean so answers don't bleed across unrelated topics",
              "It's required or ChatGPT stops working",
            ],
            correctIndex: 1,
            explanation:
              "ChatGPT treats the whole conversation as context. Keeping one topic per chat prevents unrelated details from muddying its answers — and makes each thread easier to find later.",
          },
        },
        {
          html: `<h3>Rename so future-you can find it</h3><p>By default, chats are named after your first message or left as "New chat." A month from now, a list of twenty "New chat" entries is useless.</p><p><strong>Rename your important chats</strong> to something you'll actually recognize: "Q3 newsletter drafts" instead of "New chat," or "Puppy training plan" instead of "How do I…". It takes five seconds and turns your sidebar into a real filing system.</p><p>Think of it like naming files on your computer. You'd never save every document as "untitled" — the same discipline makes your ChatGPT history searchable and reusable instead of a wall of forgotten conversations.</p>`,
          question: {
            text: "What's the benefit of renaming a chat right after a productive session?",
            options: [
              "It permanently locks the chat from edits",
              "You'll be able to recognize and reopen it easily weeks later",
              "It improves the quality of ChatGPT's answers",
            ],
            correctIndex: 1,
            explanation:
              "A clear name turns your sidebar into a findable filing system. Renaming doesn't lock the chat or change answer quality — it's purely about making your history reusable.",
          },
        },
        {
          html: `<h3>Projects: shared context and files</h3><p>When a set of chats and files belong together, use <strong>Projects</strong> (folders that group related work). A project can hold multiple chats plus reference files, and everything inside it <strong>shares context</strong>.</p><p>Say you're planning a product launch. Create a "Launch" project, upload your brief and brand guidelines once, and every chat inside it can draw on those files. You stop re-explaining the background in each new conversation — the project already knows it.</p><p>Projects are ideal for anything ongoing: a client account, a course you're studying, a book you're writing, a recurring report. Set up the context once; reuse it every time.</p>`,
          question: {
            text: "What's the main advantage of putting related chats and files inside a Project?",
            options: [
              "Chats inside a project run on a faster model",
              "Everything in the project shares context and uploaded files",
              "It hides the chats from your history entirely",
            ],
            correctIndex: 1,
            explanation:
              "A Project groups chats and files that share context, so you don't have to re-explain background or re-upload references in every conversation. It doesn't change the model or hide your chats.",
          },
        },
        {
          html: `<h3>Search history and build a prompt library</h3><p>Two habits make your history truly compound.</p><p><strong>Search before you start over.</strong> ChatGPT lets you search past conversations. Before rebuilding that summary format you perfected last month, search for it — it's one query away. Reinventing work you've already done is the biggest hidden time-sink.</p><p><strong>Save your killer prompts.</strong> When a prompt works brilliantly, don't let it disappear into the scroll. Pin it, or keep a running note (or a dedicated "Prompt library" chat) where you paste your best ones. Over time this becomes your personal toolkit.</p><p><strong>Your challenge right now:</strong> rename your three most recent useful chats, then start one note or chat called "My best prompts" and paste in one prompt that worked for you. That's the first brick in a system that makes you faster every single week.</p>`,
          question: {
            text: "What should you do before recreating a prompt or format you know you've used successfully before?",
            options: [
              "Rebuild it from scratch to be safe",
              "Search your chat history to find and reuse it",
              "Wait a day and try again",
            ],
            correctIndex: 1,
            explanation:
              "Searching your history lets you reuse work you've already perfected instead of reinventing it. Combined with saving your best prompts, this is what makes organized users faster every week.",
          },
        },
      ],
    },
  ],
};
