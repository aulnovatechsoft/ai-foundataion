import type { UnitSeed } from "./types";

export const CHATGPT_UNIT_2: UnitSeed = {
  title: "Everyday Superpowers",
  lessons: [
    {
      title: "Voice Mode",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to think out loud about [a decision I'm facing at work]. Ask me questions one at a time to help me reason through it, and at the end summarize my thinking and the option I'm leaning toward.",
        note: "Use Voice Mode on a walk or commute, then reopen the same chat later to read the transcript.",
      },
      summary: "Talk to ChatGPT hands-free — and why you'd want to",
      content: `<p>Voice Mode turns ChatGPT into a spoken conversation partner. Tap the voice icon and just talk — it listens, thinks and replies out loud, in a natural back-and-forth. No typing, no waiting to finish a sentence perfectly.</p><p>It sounds like a novelty until you realize how many moments in your day are hands-busy or eyes-busy: driving, cooking, walking, folding laundry. Voice Mode unlocks all of those as thinking time — and because everything is saved as text in your history, nothing is lost.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Getting started with your voice</h3><p>Voice Mode lives in the ChatGPT mobile app and the desktop app. On mobile, open a chat and tap the <strong>voice icon</strong> (the sound-wave button near the message box). ChatGPT greets you, you talk, and it responds out loud — you can interrupt it mid-sentence, ask it to slow down, or change the subject entirely, just like a real conversation.</p><p>There's a lightweight version that reads replies aloud, and an <strong>advanced, fully spoken mode</strong> that feels like talking to a person — it picks up tone, handles interruptions, and even changes how it speaks when you ask it to ("explain that like I'm five", "say it more excited").</p><div class="discovery"><p>💡 <strong>First Discovery</strong></p><p>Every voice conversation is transcribed into your chat history as text. So you can brainstorm out loud on a walk, then open the same chat later on your laptop and keep working from the transcript. Voice isn't a separate silo — it's just another way into the same conversation.</p></div>`,
          question: {
            text: "You had a great voice brainstorm on your commute. How do you keep working on it at your desk later?",
            options: [
              "You can't — voice chats are audio-only and disappear",
              "Open the same chat on desktop; it's saved as text you can continue",
              "You have to re-explain everything by typing it again",
            ],
            correctIndex: 1,
            explanation:
              "Voice conversations are transcribed and stored in your normal chat history, so you can reopen them on any device and continue by typing or talking.",
          },
        },
        {
          html: `<h3>Where voice beats typing</h3><p>Voice isn't just typing without a keyboard — it changes <em>how</em> you think with ChatGPT. Some tasks are simply better spoken:</p><ul><li><strong>Thinking out loud:</strong> ramble about a messy problem for two minutes, then ask "summarize what I actually said and what I seem to be worried about." Talking unlocks ideas that staring at a blank text box never will.</li><li><strong>On the move:</strong> capture ideas while walking, driving or between meetings — moments where typing is impossible or unsafe.</li><li><strong>Speed of expression:</strong> most people speak far faster than they type, so you get more context out with less effort.</li></ul><p>The rule of thumb: if you'd rather <em>explain</em> something than <em>write</em> it, use voice.</p>`,
          question: {
            text: "Which situation is the strongest fit for Voice Mode over typing?",
            options: [
              "Pasting a 5-page contract for ChatGPT to analyze",
              "Talking through a fuzzy problem out loud while walking, then asking for a summary",
              "Carefully formatting a table with exact numbers",
            ],
            correctIndex: 1,
            explanation:
              "Voice shines for hands-busy, think-out-loud moments. Pasting long documents or building precise tables is far easier by typing.",
          },
        },
        {
          html: `<h3>Practice conversations & language learning</h3><p>Here's where voice becomes genuinely powerful: it lets you <strong>rehearse real interactions</strong> in a safe, private space.</p><p><strong>Practice tough moments:</strong> "You're my hiring manager. Interview me for a marketing role and push back on weak answers." Then debrief: "Which of my answers were vague? How would you tighten them?" You can rehearse a salary negotiation, a difficult conversation with a report, or a big pitch — as many times as you want, with instant feedback.</p><p><strong>Language learning:</strong> ask ChatGPT to only speak Spanish at a beginner level, correct your mistakes gently, and slow down when you struggle. It's a patient conversation partner that never gets bored of repetition — spoken practice with real-time corrections is exactly how fluency is built.</p>`,
          question: {
            text: "You want to rehearse a salary negotiation before the real meeting. What's the best voice prompt?",
            options: [
              "Just say 'help me with money'",
              "'Play my manager in a salary negotiation, push back realistically, then tell me where I was weak'",
              "Ask it to email your manager directly",
            ],
            correctIndex: 1,
            explanation:
              "Giving ChatGPT a role, a scenario and a debrief request turns a vague chat into realistic rehearsal with feedback you can actually use.",
          },
        },
        {
          html: `<h3>Your voice challenge</h3><p>Voice Mode rewards people who build it into real moments instead of treating it as a party trick. The people who get the most from ChatGPT often talk to it more than they type to it.</p><p><strong>Try this right now:</strong> next time you're walking or commuting, open Voice Mode and say: "I want to think out loud about [a real decision you're facing]. Ask me questions to help me reason through it, and at the end summarize my thinking and the option I'm leaning toward." Then open the chat later and read the transcript — you'll be surprised how much clearer the problem looks on the page.</p><p>One spoken brainstorm can replace a whole session of staring at a blinking cursor.</p>`,
        },
      ],
    },
    {
      title: "Summarize Anything",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Summarize the text below in 3 bullets for [a busy manager], then tell me the single most important thing I should do about it.\n\n[paste your longest email, report, or article here]",
        note: "Change the audience and length in your follow-up and watch the summary reshape itself.",
      },
      summary: "Turn long content into decisions in seconds",
      content: `<p>Summarization is the single most reliably useful thing ChatGPT does. Reports, threads, articles, transcripts — paste it in and get the gist in seconds. But most people leave value on the table by asking for a generic "summary."</p><p>The secret: tell ChatGPT <em>what kind</em> of summary you need and <em>who it's for</em>. A summary for making a decision looks nothing like a summary for remembering something later. Once you learn to specify, ChatGPT becomes a filter that turns information overload into clarity.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Not all summaries are the same</h3><p>"Summarize this" gives you a middle-of-the-road paragraph that's fine but rarely great. The upgrade is naming the <strong>type</strong> of summary you want:</p><ul><li><strong>Executive:</strong> "Summarize this in 3 bullets a busy manager could act on." — for people who need the bottom line fast.</li><li><strong>Decision-focused:</strong> "What are the key decisions, open questions and disagreements here?" — for cutting through a messy discussion.</li><li><strong>Learning:</strong> "Summarize this article, then list 3 concepts I should learn next." — for building understanding, not just recall.</li></ul><div class="discovery"><p>💡 <strong>First Discovery</strong></p><p>A summary has a <em>job</em>. Before you ask, decide: am I trying to <strong>act</strong>, <strong>decide</strong>, or <strong>learn</strong>? Name that job in your prompt and the summary snaps into focus.</p></div>`,
          question: {
            text: "You're forwarding a long report to your boss who has 30 seconds. Which summary type fits?",
            options: [
              "Learning summary with concepts to study next",
              "Executive summary: 3 action-focused bullets",
              "A full paragraph-by-paragraph breakdown",
            ],
            correctIndex: 1,
            explanation:
              "A busy decision-maker needs the bottom line in a few actionable bullets — that's exactly what an executive summary delivers.",
          },
        },
        {
          html: `<h3>Always name the audience and length</h3><p>The same content should be summarized completely differently depending on who's reading. "2 sentences for a client" produces something totally different from "detailed study notes for myself." So specify both:</p><ul><li><strong>Audience:</strong> "for a non-technical executive", "for a new team member", "for myself, I already know the basics".</li><li><strong>Length:</strong> "2 sentences", "5 bullets", "one paragraph", "under 100 words".</li><li><strong>Tone/format:</strong> "plain English, no jargon", "as a table", "as a checklist I can act on".</li></ul><p>Think of it like briefing an assistant: the more you say about who it's for and how long it should be, the closer the first draft lands to what you actually need.</p>`,
          question: {
            text: "Which prompt will produce the most useful summary?",
            options: [
              "'Summarize this.'",
              "'Summarize this in 4 bullets for a non-technical client, plain English, no jargon.'",
              "'Make this shorter somehow.'",
            ],
            correctIndex: 1,
            explanation:
              "Naming the length, audience and tone gives ChatGPT the constraints it needs to hit the target on the first try.",
          },
        },
        {
          html: `<h3>Long docs, threads & transcripts</h3><p>Summarizing gets even more valuable as the content gets longer and messier.</p><p><strong>Long documents:</strong> upload a PDF report or contract and ask "give me the key points and flag anything that seems unusual or risky." ChatGPT reads the whole thing so you don't have to.</p><p><strong>Email & chat threads:</strong> paste a tangled 30-message thread and ask "what was decided, what's still open, and what am I on the hook for?" — instant clarity on who-owes-what.</p><p><strong>Video & meeting transcripts:</strong> drop in a transcript (from a call recording, webinar or YouTube video) and ask for "key takeaways plus any action items with owners." An hour-long meeting becomes a five-line recap you can share in seconds.</p>`,
          question: {
            text: "You have a messy 40-message email thread. What's the best summarization ask?",
            options: [
              "'Summarize this thread' with no other detail",
              "'What was decided, what's still open, and what am I responsible for?'",
              "'Reply to everyone for me right now'",
            ],
            correctIndex: 1,
            explanation:
              "For threads, a decision-focused summary — decisions, open questions and your action items — turns chaos into a clear to-do list.",
          },
        },
        {
          html: `<h3>Your summarize challenge</h3><p>Summarization is the fastest habit to build because opportunities are everywhere: every long email, article, report and meeting is a candidate.</p><p><strong>Try this right now:</strong> grab the longest email or article in front of you and paste it into ChatGPT with this prompt: "Summarize this in 3 bullets for [who it's really for], then tell me the single most important thing I should do about it." Notice how naming the audience and asking for one clear action turns a wall of text into a decision.</p><p>Do this for a week and you'll reclaim an astonishing amount of reading time — and stop missing the point buried in paragraph nine.</p>`,
        },
      ],
    },
    {
      title: "Write & Rewrite Like a Pro",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here are two things I've written recently: [paste 2 short samples]. Match my tone, sentence length and vocabulary, then write an email to a client who missed a deadline — goal: get the file by Friday without damaging the relationship. Under 100 words, understanding but clear.",
        note: "Ask for two versions (warmer and more direct) and pick the one that actually sounds like you.",
      },
      summary: "Emails, posts and docs in your voice, not robot voice",
      content: `<p>ChatGPT can draft an email, post or document in seconds — but the difference between amateur and pro output is whether it sounds like a robot or like <strong>you</strong>. The good news: getting your voice out of ChatGPT is a learnable skill.</p><p>And here's the twist most people miss — rewriting is even more powerful than writing from scratch. When you bring your own rough draft and let ChatGPT edit, you stay the author and gain a tireless editor. This lesson covers both.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Make it sound like you</h3><p>By default ChatGPT writes in a polished, slightly generic "AI voice." To fix that, <strong>show it your voice</strong> instead of describing it.</p><p>Paste two or three things you've actually written — a past email, a LinkedIn post, a message you're proud of — and say: "Match this writing style: tone, sentence length and vocabulary. Now write [the new thing]." ChatGPT is excellent at mimicking patterns, so a few real samples beat any adjective.</p><div class="discovery"><p>💡 <strong>First Discovery</strong></p><p>Adjectives like "professional" or "friendly" are vague — everyone's version is different. Concrete samples are unambiguous. <strong>Show, don't tell</strong> your style, and the output stops sounding like a stranger.</p></div>`,
          question: {
            text: "What's the most reliable way to get ChatGPT to write in your personal voice?",
            options: [
              "Ask it to 'sound professional and human'",
              "Paste 2-3 things you've written and say 'match this style'",
              "Use longer, more complicated words",
            ],
            correctIndex: 1,
            explanation:
              "Real writing samples give ChatGPT concrete patterns to mimic — far more effective than vague style adjectives.",
          },
        },
        {
          html: `<h3>Brief it like a colleague</h3><p>You'd never turn to a coworker and just say "write something." You'd tell them the situation. Do the same with ChatGPT. A strong writing brief includes:</p><ul><li><strong>Audience:</strong> who reads this and what they care about</li><li><strong>Goal:</strong> what you want them to think, feel or do</li><li><strong>Key points:</strong> the must-include facts</li><li><strong>Tone & length:</strong> "warm but brief, under 120 words"</li></ul><p>Example: "Write an email to a client who missed a deadline. Goal: get the file by Friday without damaging the relationship. Tone: understanding but clear. Under 100 words." That brief produces something usable on the first try — because you gave it what a good colleague would need.</p>`,
          question: {
            text: "Which element is MOST missing from the prompt 'Write a follow-up email'?",
            options: [
              "Nothing — that prompt is already complete",
              "Audience, goal, key points and tone — the brief a colleague would need",
              "A request for it to be longer",
            ],
            correctIndex: 1,
            explanation:
              "'Write a follow-up email' gives ChatGPT no audience, goal, key points or tone — briefing those turns a generic draft into a targeted one.",
          },
        },
        {
          html: `<h3>Ask for options, then blend</h3><p>Don't settle for one version. ChatGPT can generate variations instantly, and picking-and-mixing beats accepting a single draft.</p><ul><li><strong>Options:</strong> "Give me 3 subject lines: bold, safe and playful." Then choose or combine.</li><li><strong>Contrast:</strong> "Write this two ways — one warm, one direct — so I can see the difference."</li><li><strong>Blend:</strong> "I like the opening of #1 and the ending of #3 — merge them."</li></ul><p>Seeing alternatives side by side sharpens your own judgment about what you actually want. Often the best final piece is a blend you'd never have written on your own — the bold hook from one draft with the clear structure of another.</p>`,
          question: {
            text: "You got three draft intros and like parts of each. What's the pro move?",
            options: [
              "Pick one at random and move on",
              "Tell ChatGPT which parts you like and ask it to blend them",
              "Start over from a blank prompt",
            ],
            correctIndex: 1,
            explanation:
              "Blending the strongest parts of several options — the hook of one, the structure of another — usually beats any single draft.",
          },
        },
        {
          html: `<h3>Rewriting is the real superpower</h3><p>Writing from scratch is useful, but <strong>rewriting your own words</strong> is where quality and authenticity meet. When you bring the draft, the ideas are already yours — ChatGPT just polishes.</p><p>Try these editing moves on anything you've written:</p><ul><li>"Make this clearer and half as long."</li><li>"Same message, but warmer and less corporate."</li><li>"Fix grammar and flow but keep my voice — don't make it sound like AI."</li><li>"What's confusing in this paragraph? Then fix it."</li></ul><p><strong>Try this right now:</strong> paste a clunky message or paragraph you've been avoiding and say "make this clearer and half as long, keep my voice." Read both versions aloud — the one that sounds like something you'd actually say is the winner. That's the balance: you stay the author, ChatGPT becomes your editor.</p>`,
        },
      ],
    },
    {
      title: "ChatGPT & Apps",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I use ChatGPT most on my [phone]. Walk me through installing the app and setting it up so it's one tap or one shortcut away, then give me three real ways I could use its camera or voice this week for tasks I'd normally Google.",
        note: "Then actually point the camera at something confusing — a label, a chart, a foreign menu — and ask it to explain.",
      },
      summary: "Bring ChatGPT into the tools you already use",
      content: `<p>ChatGPT doesn't only live at chatgpt.com. It's on your phone, on your desktop, and it can connect to the tools where your actual work lives. The people who get the most from it aren't smarter — they've just made ChatGPT one tap or one shortcut away.</p><p>The principle behind everything in this lesson: <strong>reduce the distance</strong> between where a question shows up and where you can ask it. When friction disappears, usage multiplies — and that's where the real productivity gains come from.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>The mobile app: camera and voice in your pocket</h3><p>The ChatGPT mobile app (iOS and Android) is more than the website on a small screen — it has senses. Two features make it special:</p><ul><li><strong>Camera input:</strong> point your phone at almost anything and ask about it. A confusing sign in a foreign language, a wine label, a broken appliance part, a math problem in a textbook, a chart in a printed report — snap it and ask "what is this / translate this / how do I fix this?"</li><li><strong>Voice Mode:</strong> a full spoken conversation while your hands are busy — walking, driving, cooking.</li></ul><p>Everything syncs with the web, so a photo question on your phone continues on your laptop later.</p><div class="discovery"><p>💡 <strong>First Discovery</strong></p><p>The phone's camera turns ChatGPT into a "point and understand" tool for the physical world — the single biggest thing the app can do that the website can't.</p></div>`,
          question: {
            text: "You're staring at a menu in a language you don't read. What's the fastest ChatGPT move?",
            options: [
              "Type out every word by hand into the website",
              "Use the mobile app's camera to snap it and ask for a translation",
              "Wait until you get home to your desktop",
            ],
            correctIndex: 1,
            explanation:
              "The mobile app's camera lets you photograph real-world things — like a foreign menu — and get an instant translation or explanation.",
          },
        },
        {
          html: `<h3>The desktop app: one shortcut from anything</h3><p>The desktop app (Mac and Windows) is built for people working on a computer all day. Its superpower is a <strong>global keyboard shortcut</strong> — press it from inside any application and a ChatGPT box pops up instantly, without switching windows or opening a browser tab.</p><p>It can also see <strong>screen context</strong> when you allow it: show it the spreadsheet, code, email or design you're looking at and ask "what's wrong here?" or "rewrite this selection." Because it's right there, you ask ten times more often — the question that would've been too much hassle to go look up now takes two seconds.</p>`,
          question: {
            text: "What makes the desktop app especially sticky for all-day computer work?",
            options: [
              "It has more features than the website",
              "A global shortcut opens it from any app, and it can see your screen for context",
              "It's the only place Voice Mode works",
            ],
            correctIndex: 1,
            explanation:
              "The desktop app's global shortcut and screen-context ability remove the friction of switching windows, so you use ChatGPT far more often.",
          },
        },
        {
          html: `<h3>Connectors: reach into your files and tools</h3><p>ChatGPT can also connect to the places your work already lives. With <strong>connectors</strong>, you can link services like Google Drive, so ChatGPT can pull in a specific document and answer questions about it without you copy-pasting.</p><ul><li><strong>Drive & docs:</strong> "Using my Q3 report in Drive, draft an email summary for the team."</li><li><strong>Productivity suites:</strong> use ChatGPT inside or alongside the tools where you write and plan.</li><li><strong>Automation tools:</strong> connect ChatGPT to services like Zapier to trigger it automatically in a workflow.</li></ul><p>Connectors respect your permissions — you control what it can access, and you can disconnect anything at any time.</p>`,
          question: {
            text: "What's the benefit of using a connector like Google Drive with ChatGPT?",
            options: [
              "It makes ChatGPT respond faster in general",
              "It can pull in your actual documents to work with, no copy-pasting",
              "It automatically shares your files with everyone",
            ],
            correctIndex: 1,
            explanation:
              "Connectors let ChatGPT reference your real files directly (within permissions you control), removing tedious copy-paste steps.",
          },
        },
        {
          html: `<h3>When each one shines — your challenge</h3><p>Match the surface to the moment:</p><ul><li><strong>Mobile</strong> — out in the world, hands or eyes busy, or you need the camera.</li><li><strong>Desktop</strong> — deep work at your computer; you want ChatGPT one shortcut away with screen context.</li><li><strong>Connectors</strong> — the answer depends on files or tools you already use.</li></ul><p><strong>Try this right now:</strong> install the ChatGPT app on whichever device you use most and set it up so it's one tap or one shortcut away. Then use it for the very next question you'd normally have Googled or ignored. The whole game is shrinking the distance between "I wonder…" and "let me just ask."</p>`,
        },
      ],
    },
    {
      title: "Analyze Files & Data",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm uploading a spreadsheet of [my monthly expenses]. Profile it first, then tell me the three most interesting things in this data and one thing I should double-check. Show me which columns you used to get there.",
        note: "Verify that one flagged number yourself before trusting the rest — you're the analyst-in-charge.",
      },
      summary: "Upload PDFs and spreadsheets, get instant insight",
      content: `<p>Upload a file — PDF, Word doc, spreadsheet, CSV, even a screenshot — and ChatGPT can read it, summarize it, extract from it and analyze it. This is where it stops being a writing tool and becomes an analyst that works in seconds.</p><p>The most important thing to understand: when you ask it to crunch numbers, ChatGPT actually <strong>writes and runs real code</strong> behind the scenes. Calculations are computed, not guessed. That makes data analysis genuinely reliable — as long as you stay the analyst-in-charge.</p>`,
      estimatedMinutes: 15,
      steps: [
        {
          html: `<h3>Uploading documents: PDFs & contracts</h3><p>Drop in a document and ask questions instead of reading every line. The attach button (the paperclip or "+") accepts PDFs, Word files, text files and more.</p><ul><li><strong>Contracts:</strong> "Summarize the key terms and flag anything unusual or risky for me as the client."</li><li><strong>Reports:</strong> "What are the three most important findings, and what do they mean for a small business?"</li><li><strong>Extract specifics:</strong> "Pull out every date, deadline and dollar amount into a list."</li></ul><p>ChatGPT reads the entire document, so a 40-page report becomes a two-minute conversation. It's like having a smart assistant who's already read everything and is ready to answer.</p>`,
          question: {
            text: "You've been sent a long contract. What's a strong first ask after uploading it?",
            options: [
              "'Sign this for me.'",
              "'Summarize the key terms and flag anything unusual or risky for me as the client.'",
              "'Make it longer.'",
            ],
            correctIndex: 1,
            explanation:
              "Asking for key terms plus a flag on anything unusual turns a dense contract into a clear, reviewable briefing.",
          },
        },
        {
          html: `<h3>Spreadsheets & CSV: it writes real code</h3><p>Here's the feature that surprises people. Upload a spreadsheet or CSV and ask analytical questions — ChatGPT writes and runs actual code (in a sandbox) to compute the answer.</p><ul><li>"What are the top trends in this sales data?"</li><li>"Which product is underperforming, and by how much?"</li><li>"Calculate month-over-month growth and show the biggest jump."</li></ul><div class="discovery"><p>💡 <strong>First Discovery</strong></p><p>For math on your data, ChatGPT doesn't "guess" — it runs code, like a data scientist writing a quick script. That's why spreadsheet analysis is far more trustworthy than asking it to do arithmetic in plain conversation. You get computed results, not estimates.</p></div>`,
          question: {
            text: "Why is uploading a CSV and asking for calculations more reliable than typing numbers into a chat?",
            options: [
              "It isn't — both just guess at the answer",
              "For file analysis, ChatGPT writes and runs real code, so calculations are computed",
              "Spreadsheets can't be uploaded to ChatGPT",
            ],
            correctIndex: 1,
            explanation:
              "When analyzing uploaded data, ChatGPT executes real code to do the math — computed results, not conversational guesses.",
          },
        },
        {
          html: `<h3>Multi-file Q&A and charts</h3><p>You're not limited to one file at a time.</p><p><strong>Multiple files:</strong> upload several documents — say three vendor proposals or a few monthly reports — and ask across all of them: "Compare these three proposals on price, timeline and risk in a table," or "How did performance change from January to March?"</p><p><strong>Charts:</strong> ask ChatGPT to visualize your data. "Turn this into a clear bar chart and explain what it shows." It generates the chart and walks you through the insight, so you can drop a visual straight into a report or presentation.</p><p>This is the difference between having raw data and having an <em>answer</em> — ChatGPT bridges the gap in one conversation.</p>`,
          question: {
            text: "You have three vendor proposals as separate PDFs. What can ChatGPT do?",
            options: [
              "Only read one file, so you must combine them yourself first",
              "Take all three and compare them side by side on price, timeline and risk",
              "Only summarize them one at a time with no comparison",
            ],
            correctIndex: 1,
            explanation:
              "You can upload multiple files and ask ChatGPT to compare across all of them — a table of price, timeline and risk is a perfect use case.",
          },
        },
        {
          html: `<h3>Stay the analyst — your challenge</h3><p>ChatGPT is a very fast assistant, but <strong>you're the analyst</strong>. Because it runs code, results are usually solid — yet a wrong column reference or a misread question can still produce a confident but off answer. So sanity-check anything important: does the total roughly match your expectation? Ask it to show its work: "Explain how you calculated that and which columns you used."</p><p><strong>Try this right now:</strong> find any spreadsheet or export you have — expenses, sales, a subscription list — upload it and ask: "What are the three most interesting things in this data, and one thing I should double-check?" Then verify that one thing yourself. That habit — fast analysis plus a quick human check — is exactly how professionals use ChatGPT with data every day.</p>`,
        },
      ],
    },
  ],
};
