import type { UnitSeed } from "./types";

export const geminiInteractiveUnit1: UnitSeed = {
  title: "Gemini",
  lessons: [
    {
      title: "Meet Gemini",
      summary:
        "Get to know Gemini, Google's AI helper that lives right inside the Google apps you already use every day.",
      estimatedMinutes: 6,
      content:
        `<p>Gemini is Google's AI assistant — and its superpower is that it lives inside the tools you already use, from Gmail to Docs to Search on your phone.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Help me plan a cozy family movie night for [who's coming, e.g. two kids under 10] — suggest a film, a couple of easy snacks, and a start time so everyone's in bed by [time]. Keep it short and practical.",
        note: "Notice how the specific details get a usable plan — try it again with a vague 'plan a movie night' and compare the difference.",
      },
      steps: [
        {
          html: `<h3>What Gemini actually is</h3><p>Gemini is Google's smart AI helper. You can chat with it at gemini.google.com, but the magic is that it also shows up <strong>inside your Google apps</strong> — Gmail, Docs, Sheets, and even Search.</p><p>Ask it plain-English things like "help me plan a birthday party for my 7-year-old" or "summarize this long email," and it writes back like a helpful, patient friend.</p>`,
        },
        {
          html: `<h3>Where Gemini lives</h3><p>Because Gemini is built by Google, it pops up in the places you already work:</p><ul><li><strong>Gmail</strong> — draft or shorten emails without leaving your inbox</li><li><strong>Docs</strong> — write and polish documents</li><li><strong>Search & Android</strong> — quick answers on your phone, hold the power button to ask</li></ul><p>It's also <strong>grounded in Google Search</strong>, so it can pull in fresh, up-to-date info.</p>`,
          question: {
            text: "What makes Gemini different from a standalone chatbot for everyday Google users?",
            options: [
              "It only works on expensive computers",
              "It lives inside Google apps like Gmail and Docs, so help is right where you already work",
              "It can only answer questions about Google itself",
              "It refuses to help with personal tasks",
            ],
            correctIndex: 1,
            explanation:
              "Gemini's big advantage is that it's built into Gmail, Docs, Sheets, and Search — so you get help without switching apps or copying text back and forth.",
          },
        },
        {
          html: `<h3>How Gemini thinks — and free vs Advanced</h3><p>Gemini makes smart guesses based on what you tell it, so clear requests get better answers:</p><ul><li>❌ "Write something" — too vague, you'll get a bland guess</li><li>✅ "Write a friendly thank-you note to my kid's teacher, about 4 sentences"</li></ul><p>The <strong>free</strong> version handles most daily tasks. <strong>Gemini Advanced</strong> (a paid plan) adds deeper reasoning, longer documents, and extras like Deep Research for big projects.</p>`,
          question: {
            text: "You want a quick, personal thank-you note. Which request will Gemini handle best?",
            options: [
              '"Write something nice"',
              '"Do a note"',
              '"Write a warm thank-you note to my neighbor for watching our dog, about 3 sentences"',
              '"Thanks"',
            ],
            correctIndex: 2,
            explanation:
              "It names who it's for, why you're writing, the tone, and the length — so Gemini has everything it needs instead of guessing.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey, I'm Nova 👋 Let's get comfy with what Gemini is and where it can help you. Ready?",
            },
            {
              bot: "Your friend wants to shorten a long email but hates copying text into other apps.",
              ask: "Why is Gemini handy for this?",
              inputType: "choice",
              options: [
                "It can only be used on a separate website",
                "It's built right into Gmail, so it can shorten the email where it already is",
                "It can't help with emails at all",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — Gemini lives inside Gmail, so there's no copying back and forth. Help is right where you're already working.",
              hint: "Think about where Gemini shows up.",
            },
            {
              bot: "You need today's opening hours for a local shop, so you ask Gemini right now.",
              ask: "Smart move or not?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 0,
              feedback:
                "Useful! Gemini is grounded in Google Search, so it can pull fresh, up-to-date info like current opening hours.",
              hint: "Remember what Google tool keeps Gemini current.",
            },
            {
              bot: "Let's lock in why Gemini stays current.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "Gemini is grounded in Google ___, so it can pull fresh, up-to-date answers.",
              options: ["Search", "Maps", "Photos"],
              correctIndex: 0,
              feedback:
                "Right — being grounded in Google Search is what lets Gemini bring in current information.",
              hint: "Which Google tool finds fresh info?",
            },
            {
              bot: "Gemini shows up across your Google apps. Match each app to what it helps you do.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Gmail", right: "Draft or shorten emails" },
                { left: "Docs", right: "Write and polish documents" },
                { left: "Sheets", right: "Help with formulas" },
              ],
              feedback:
                "Perfect — Gemini lives inside all of these, so help is right where you already work.",
              hint: "Think about what each Google app is for.",
            },
            {
              bot: "Clear requests beat vague ones. Arrange these into a strong request.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Write", "a", "friendly", "thank-you", "note", "in", "four", "sentences"],
              feedback:
                "Nice — naming the tone and length gives Gemini everything it needs instead of a bland guess.",
              hint: "Start with the action word.",
            },
            {
              bot: "Let's write a real request. You want Gemini to help plan a simple family movie night.",
              ask: "e.g. Write a clear request for Gemini to plan a family movie night",
              inputType: "text",
              keywords: ["plan", "family", "movie", "snacks", "kids", "time", "night"],
              feedback:
                'Nice! A strong version: "Help me plan a cozy family movie night for two kids under 10 — suggest a film, easy snacks, and a start time so they\'re in bed by 9." Clear details give Gemini everything it needs.',
              hint: "Name who it's for, what you want, and any limits like bedtime.",
            },
            {
              bot: "One more. You want Gemini to summarize a long school newsletter you got by email.",
              ask: "e.g. Write a request asking Gemini to summarize it usefully",
              inputType: "text",
              keywords: ["summarize", "email", "short", "dates", "important", "bullet", "newsletter"],
              feedback:
                'Great. A clear version: "Summarize this school newsletter in 5 short bullet points and list any important dates I need to remember." Now Gemini knows the format and what matters to you.',
              hint: "Say what to summarize, how short, and what details to keep.",
            },
            {
              bot: "You've got the idea! Gemini is Google's helper that lives where you work and stays current with Search. See you next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>The one habit to keep</h3><p>Whenever you're in Gmail, Docs, or Search and think "ugh, this'll take a while," pause and ask Gemini first. It's usually one click away.</p><p>You don't need fancy words — just tell it clearly what you want, like you'd tell a helpful friend.</p>`,
        },
      ],
    },
    {
      title: "Write and Edit With Confidence",
      summary:
        "Use Gemini inside Gmail and Docs to draft, rewrite, and polish emails, messages, and documents in seconds.",
      estimatedMinutes: 7,
      content:
        `<p>Staring at a blank screen is the worst. Gemini lives right inside Gmail and Docs, so you can draft, shorten, and fine-tune any message without ever leaving the page.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Write a short, polite email to [who it's for, e.g. my landlord or my boss] asking [what you need, e.g. to fix a leaking kitchen tap]. Keep it friendly but firm and under 80 words.",
        note: "Once you have the draft, reply with 'make this shorter' or 'make it warmer' and watch Gemini reshape it instantly.",
      },
      steps: [
        {
          html: `<h3>From blank page to first draft</h3><p>Gemini is brilliant at getting words started. In Gmail, the "Help me write" button turns a one-line idea into a full draft.</p><p>Try: "Write an email to my landlord asking to fix the leaking kitchen tap, polite but firm." Gemini writes it — then you just tweak and send.</p>`,
        },
        {
          html: `<h3>Control the tone and length</h3><p>The real magic is editing. Gemini can reshape the same message instantly:</p><ul><li>"Make this <strong>shorter</strong>" — trims a rambling email to the point</li><li>"Make it <strong>friendlier</strong>" — warms up a stiff message</li><li>"Make it more <strong>professional</strong>" — smartens up a casual note</li></ul><p>In Gmail's draft box, the Refine tools let you do this with a tap.</p>`,
          question: {
            text: "You wrote a long, rambling email to a client and want it tighter and more polished. What's the best Gemini move?",
            options: [
              "Ask Gemini to make it longer",
              'Ask Gemini to "make this shorter and more professional"',
              "Delete it and start over by hand",
              "Send it as-is and hope for the best",
            ],
            correctIndex: 1,
            explanation:
              "Gemini shines at reshaping what you already have. Asking it to shorten and professionalize gives you a tight, polished version in one step.",
          },
        },
        {
          html: `<h3>Polish beats perfection</h3><p>Watch the difference between a vague ask and a clear one:</p><ul><li>❌ "Fix my email" — Gemini doesn't know what's wrong</li><li>✅ "Rewrite this to sound warmer and cut it to 3 sentences"</li></ul><p>In Docs, Gemini can also help with bigger writing — a birthday speech, a school fundraiser flyer, or a first draft of your side-hustle's About page. Tell it the goal, tone, and length.</p>`,
          question: {
            text: "You want Gemini in Docs to help write a warm welcome note for your bake-sale flyer. Which request works best?",
            options: [
              '"Fix this"',
              '"Write words"',
              '"Write a warm, cheerful 2-sentence welcome for a school bake-sale flyer inviting families to join"',
              '"Make a flyer good"',
            ],
            correctIndex: 2,
            explanation:
              "It names the tone (warm, cheerful), the length (2 sentences), the purpose (bake-sale flyer), and the audience (families). Gemini can nail it with those details.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Welcome back! 👋 Today we make writing and editing easy with Gemini inside Gmail and Docs.",
            },
            {
              bot: "You've got a stiff, formal email that sounds cold to a friend.",
              ask: "What should you ask Gemini to do?",
              inputType: "choice",
              options: [
                "Make it longer and more formal",
                "Rewrite it to sound warmer and more friendly",
                "Leave it exactly as it is",
              ],
              correctIndex: 1,
              feedback:
                "Yes — Gemini can instantly warm up the tone so it sounds like you actually talking to a friend.",
              hint: "Think about the tone you want for a friend.",
            },
            {
              bot: "You've got a rambling, cold email and you send it exactly as-is, no changes.",
              ask: "Good idea?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Not useful — a quick 'make this shorter and warmer' from Gemini turns a wall of text into a message people actually read.",
              hint: "Would you want to read a long, cold email?",
            },
            {
              bot: "Gemini can start a draft for you in Gmail. Fill in the button name.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "In Gmail, the '___ me write' button turns a one-line idea into a full draft.",
              options: ["Help", "Let", "Show"],
              correctIndex: 0,
              feedback:
                "Right — the 'Help me write' button turns your one-line idea into a full draft.",
              hint: "It's the same word you'd use asking a friend for a hand.",
            },
            {
              bot: "Editing is the real magic. Match each request to what it does to your message.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Make this shorter", right: "Trims it to the point" },
                { left: "Make it friendlier", right: "Warms up the tone" },
                { left: "Make it professional", right: "Smartens up a casual note" },
              ],
              feedback:
                "Exactly — Gemini can reshape the same message instantly with one clear instruction.",
              hint: "Match each verb to the change it makes.",
            },
            {
              bot: "Let's build a clear edit request. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Make", "this", "shorter", "and", "more", "professional"],
              feedback:
                "Nice — a clear, specific instruction gets you a tight, polished version in one step.",
              hint: "Start with the action word.",
            },
            {
              bot: "Let's write a real one. You need an email asking your boss for a day off next Friday.",
              ask: "e.g. Write a clear request for Gemini to draft that email",
              inputType: "text",
              keywords: ["email", "boss", "polite", "day", "friday", "short", "professional"],
              feedback:
                'Strong example: "Write a short, polite email to my boss requesting next Friday off for a family event — professional tone, under 80 words." Gemini has the goal, tone, and length.',
              hint: "Say who it's for, why, the tone, and how long.",
            },
            {
              bot: "Nice. Now use Docs — you want a first draft of an About page for your handmade candle side hustle.",
              ask: "e.g. Write a request for Gemini to draft that About page",
              inputType: "text",
              keywords: ["about", "page", "candles", "friendly", "short", "business", "handmade"],
              feedback:
                'Great. A clear one: "Write a friendly, short About page for my handmade candle business — mention it\'s family-run and eco-friendly, about 4 sentences." Now Gemini knows the story and style.',
              hint: "Name the business, the vibe, key facts, and length.",
            },
            {
              bot: "Beautiful work! Draft fast, then tell Gemini exactly how to reshape it — shorter, warmer, sharper. See you next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>The one habit to keep</h3><p>Don't aim for a perfect email on the first try. Let Gemini give you a rough draft, then steer it: "shorter," "warmer," "more professional."</p><p>Editing an existing draft is always faster than writing from scratch — and Gemini does it in seconds.</p>`,
        },
      ],
    },
    {
      title: "Solve Technical Tasks Easily",
      summary:
        "Let Gemini walk you through everyday tech headaches — wifi fixes, phone settings, spreadsheet formulas, and error messages — in plain English.",
      estimatedMinutes: 7,
      content:
        `<p>You don't need to be "techy." Gemini can explain confusing settings, fix spreadsheet formulas, and troubleshoot errors with calm, step-by-step guidance.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "I'm having a tech problem: [describe it plainly, e.g. my wifi keeps dropping only in the back bedroom on my phone]. Walk me through simple things to check, step by step, in plain English — no jargon.",
        note: "If you get an error code or message anywhere, paste it in and ask 'what does this mean and how do I fix it?'",
      },
      steps: [
        {
          html: `<h3>Your patient tech helper</h3><p>Gemini is great at turning frustrating tech problems into simple steps. Instead of searching ten forums, just describe what's happening.</p><p>Try: "My home wifi keeps dropping on my phone — walk me through simple things to check, step by step." Gemini gives you a clear, numbered list you can actually follow.</p>`,
        },
        {
          html: `<h3>Spreadsheets without the stress</h3><p>Gemini lives inside <strong>Google Sheets</strong>, so it can help with formulas in plain English. No memorizing syntax.</p><p>Say what you want — "add up column B," "work out 15% of each price," or "count how many entries say 'paid'" — and Gemini gives you the exact formula and tells you where to put it.</p>`,
          question: {
            text: "You want to total your monthly expenses in a Google Sheet but don't know formulas. What's the smart move?",
            options: [
              "Give up and use a calculator by hand",
              'Ask Gemini "give me the formula to add up all the numbers in column B, and tell me where to type it"',
              "Type random symbols and hope",
              "Ask Gemini to buy you a new spreadsheet",
            ],
            correctIndex: 1,
            explanation:
              "Gemini can hand you the exact formula and explain where it goes — no formula knowledge needed. Describing the task plainly is all it takes.",
          },
        },
        {
          html: `<h3>Describe the problem clearly</h3><p>The clearer you describe the issue, the better the fix:</p><ul><li>❌ "My phone is broken" — Gemini has to guess everything</li><li>✅ "My Android phone won't connect to wifi even though other devices do — what should I try, step by step?"</li></ul><p>You can even paste an <strong>error message</strong> and ask "what does this mean and how do I fix it?" Plain-English troubleshooting, minus the jargon.</p>`,
          question: {
            text: "Your printer shows a confusing error code. What's the most useful thing to tell Gemini?",
            options: [
              '"My printer is annoying"',
              '"Fix it"',
              '"My printer shows error \'E-04\' and won\'t print — what does this mean and how do I fix it, step by step?"',
              '"Printers are the worst"',
            ],
            correctIndex: 2,
            explanation:
              "It includes the exact error code, what's happening, and asks for step-by-step help. Gemini can give a real fix instead of a vague guess.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey! 👋 Let's turn Gemini into your calm, patient tech helper for everyday problems.",
            },
            {
              bot: "Your laptop is running slow and you're not sure why.",
              ask: "What should you give Gemini for the best help?",
              inputType: "choice",
              options: [
                'Just say "it\'s slow"',
                "Describe what happens, when it started, and ask for simple steps to try",
                "Ask it to fix the laptop remotely",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — the more you describe what's happening, the more specific and useful Gemini's step-by-step fix will be.",
              hint: "What details would a helpful friend want to know first?",
            },
            {
              bot: "A printer shows a confusing error code, so you paste it to Gemini and ask what it means.",
              ask: "Smart move?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 0,
              feedback:
                "Useful! You can paste an error message and ask Gemini what it means and how to fix it — plain-English troubleshooting.",
              hint: "Gemini can read that error and explain it.",
            },
            {
              bot: "Gemini helps with spreadsheets because of where it lives. Fill the gap.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "Gemini lives inside Google ___, so it can give you formulas in plain English.",
              options: ["Sheets", "Slides", "Meet"],
              correctIndex: 0,
              feedback:
                "Right — Gemini is built into Google Sheets, so it can hand you the exact formula and tell you where it goes.",
              hint: "Which Google app is for numbers and formulas?",
            },
            {
              bot: "Match each everyday tech problem to what you'd ask Gemini for.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Add up column B", right: "Give me the SUM formula" },
                { left: "Wifi keeps dropping", right: "Steps to check and fix" },
                { left: "Confusing error code", right: "Explain it and fix it" },
              ],
              feedback:
                "Perfect — describe the problem plainly and Gemini turns it into a clear answer.",
              hint: "Match each problem to the kind of help it needs.",
            },
            {
              bot: "Let's build a clear troubleshooting request. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Walk", "me", "through", "the", "fix", "step", "by", "step"],
              feedback:
                "Nice — asking for step-by-step help gets you a clear, numbered list you can actually follow.",
              hint: "Start with the action word.",
            },
            {
              bot: "Let's write a real request. Your wifi keeps dropping only in the back bedroom.",
              ask: "e.g. Write a clear request for Gemini to troubleshoot it",
              inputType: "text",
              keywords: ["wifi", "drops", "bedroom", "steps", "fix", "check", "phone"],
              feedback:
                'Nice! A strong version: "My wifi keeps dropping only in the back bedroom on my phone — walk me through simple things to check, step by step." Clear details get a clear fix.',
              hint: "Say what's happening, where, and ask for steps.",
            },
            {
              bot: "One more. You want a Sheets formula to work out 10% tax on each price in column C.",
              ask: "e.g. Write a request asking Gemini for that formula",
              inputType: "text",
              keywords: ["formula", "sheets", "tax", "percent", "column", "each", "calculate"],
              feedback:
                'Great. A clear one: "Give me a Google Sheets formula to work out 10% of each price in column C, and tell me which cell to put it in." Now Gemini can hand you the exact answer.',
              hint: "Say the calculation, the column, and ask where it goes.",
            },
            {
              bot: "You've got it! Describe the problem plainly and ask for steps — Gemini turns tech headaches into simple lists. See you next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>The one habit to keep</h3><p>When tech confuses you, don't panic or scroll forums for an hour. Describe exactly what's happening — and paste any error message — then ask Gemini for step-by-step help.</p><p>Clear problem in, clear fix out. You've got a patient helper on call.</p>`,
        },
      ],
    },
    {
      title: "Create and Transform Images",
      summary:
        "Use Gemini's picture skills to generate images, understand photos you upload, and turn screenshots into text or plans.",
      estimatedMinutes: 6,
      content:
        `<p>Gemini isn't just about words — it can see and make pictures too. Generate images from an idea, or upload a photo and ask Gemini what to do with it.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Create a warm, cheerful cartoon image for [what you need it for, e.g. a family game-night invite or a kid's birthday party]. Show [the main subject, e.g. board games and popcorn] in soft, friendly colors.",
        note: "You can also upload a photo or screenshot and ask Gemini to identify it, describe it, or turn it into a list — try it with a receipt or a flyer.",
      },
      steps: [
        {
          html: `<h3>Make an image from words</h3><p>Gemini can create pictures from a plain description. Handy for party invites, social posts, or a fun visual for the kids.</p><p>Try: "Create a cheerful cartoon image of a birthday cake with balloons for a 6-year-old's party invite." The more detail — style, colors, mood — the closer it lands.</p>`,
        },
        {
          html: `<h3>Gemini can see your photos</h3><p>Gemini is <strong>multimodal</strong>, meaning you can upload a photo and ask about it:</p><ul><li>"What kind of plant is this and how do I care for it?"</li><li>"Here's my fridge — what can I cook with these ingredients?"</li><li>"Describe this photo for a caption"</li></ul><p>You just add the picture and ask your question in plain words.</p>`,
          question: {
            text: "You snap a photo of a mystery plant in your garden. How can Gemini help?",
            options: [
              "It can't look at photos at all",
              "Upload the photo and ask Gemini to identify the plant and give care tips",
              "You must type a full description with no picture",
              "It can only make new images, never read them",
            ],
            correctIndex: 1,
            explanation:
              "Gemini is multimodal — it can look at the photo you upload, identify the plant, and give you care advice. Just add the image and ask.",
          },
        },
        {
          html: `<h3>Turn screenshots into something useful</h3><p>This is a daily-life gem. Upload a screenshot and Gemini can pull out the text or make a plan:</p><ul><li>❌ Retyping a whole recipe screenshot by hand</li><li>✅ "Turn this recipe screenshot into a clean shopping list"</li></ul><p>You can also snap a photo of a flyer, event poster, or handwritten note and say "add these dates to a list" or "type this out for me."</p>`,
          question: {
            text: "You have a screenshot of a party invite with the date, time, and address. What's a great use of Gemini?",
            options: [
              '"Delete this screenshot"',
              '"Make it prettier"',
              '"Read this invite and turn the date, time, and address into a short note I can save"',
              '"Ignore the details"',
            ],
            correctIndex: 2,
            explanation:
              "Gemini can read the text in your screenshot and pull the key details into a tidy note — no retyping needed.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hi again! 👋 Let's explore Gemini's picture powers — making images and understanding the ones you upload.",
            },
            {
              bot: "You want a fun image for your kid's lemonade-stand poster.",
              ask: "What helps Gemini make a great image?",
              inputType: "choice",
              options: [
                'Just say "make a picture"',
                "Describe the style, colors, and mood you want",
                "Give no details so it surprises you",
              ],
              correctIndex: 1,
              feedback:
                "Yes — the more you describe style, colors, and mood, the closer Gemini's image lands to what you pictured.",
              hint: "What details would help someone draw it for you?",
            },
            {
              bot: "You snap a photo of a mystery plant and upload it, asking Gemini to identify it.",
              ask: "Will that work?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 0,
              feedback:
                "Useful! Gemini is multimodal — it can look at your photo, identify the plant, and give care tips.",
              hint: "Gemini can see the photos you upload.",
            },
            {
              bot: "There's a word for Gemini's picture-understanding power. Fill the gap.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "Gemini is ___, meaning you can upload a photo and ask about it.",
              options: ["multimodal", "offline", "text-only"],
              correctIndex: 0,
              feedback:
                "Right — 'multimodal' means Gemini works with pictures as well as words.",
              hint: "It's the word for handling more than just text.",
            },
            {
              bot: "Match each photo you might upload to what Gemini can do with it.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Photo of a plant", right: "Identify it and give care tips" },
                { left: "Photo of your fridge", right: "Suggest meals to cook" },
                { left: "Screenshot of a recipe", right: "Turn it into a shopping list" },
              ],
              feedback:
                "Perfect — just add the picture and ask your question in plain words.",
              hint: "Match each image to the useful result.",
            },
            {
              bot: "Let's build a clear image request. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Create", "a", "cheerful", "cartoon", "birthday", "cake", "with", "balloons"],
              feedback:
                "Nice — naming the style, subject, and mood gets you closer to the picture you imagined.",
              hint: "Start with the action word.",
            },
            {
              bot: "Let's write a real request. You want Gemini to create a cozy image for a family game-night invite.",
              ask: "e.g. Write a clear request for Gemini to make that image",
              inputType: "text",
              keywords: ["create", "image", "cozy", "game", "night", "colors", "invite"],
              feedback:
                'Nice! A strong version: "Create a warm, cozy cartoon image of board games and popcorn in soft colors for a family game-night invite." Style and mood give Gemini a clear target.',
              hint: "Name the subject, the style, colors, and the purpose.",
            },
            {
              bot: "One more. You have a screenshot of a school supply list and want it as a shopping list.",
              ask: "e.g. Write a request for Gemini to convert that screenshot",
              inputType: "text",
              keywords: ["screenshot", "read", "list", "shopping", "supplies", "turn", "items"],
              feedback:
                'Great. A clear one: "Read this screenshot of the school supply list and turn it into a clean shopping list I can check off." Now Gemini knows exactly what to pull out.',
              hint: "Say what to read and what format you want it in.",
            },
            {
              bot: "You've got it! Gemini can make images from words and understand photos and screenshots you upload. See you next lesson! 🎉",
            },
          ],
        },
        {
          html: `<h3>The one habit to keep</h3><p>Before you retype a recipe, a flyer, or a list from a photo — stop. Upload it to Gemini and ask it to read or reshape it for you.</p><p>Words in, pictures out; pictures in, answers out. Let Gemini do the seeing.</p>`,
        },
      ],
    },
    {
      title: "Create Music and Soundscapes",
      summary:
        "Turn to Gemini for audio ideas — song lyrics, playlists, party soundtracks, podcast outlines, and describing the exact sound you need.",
      estimatedMinutes: 6,
      content:
        `<p>Planning a party, a road trip, or a little podcast? Gemini is a great brainstorm partner for anything audio — from playlists to lyrics to describing the perfect vibe.</p>`,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Suggest a [number]-song playlist for [the occasion and crowd, e.g. a relaxed grown-up dinner party or a 5-year-old's birthday]. Match the vibe [e.g. soft and jazzy, or upbeat and fun], and list real songs and artists I can look up.",
        note: "Gemini plans the music but won't play it — ask for real, current song titles you can search in your music app.",
      },
      steps: [
        {
          html: `<h3>Your audio brainstorm buddy</h3><p>Gemini can help with the words and ideas behind music and sound. It won't play a song, but it's brilliant at planning one.</p><p>Try: "Write fun, simple birthday-song lyrics for my mum, to the tune of a happy pop song." Or "Suggest a 10-song upbeat playlist for a summer BBQ." Gemini gives you ideas you can build on.</p>`,
        },
        {
          html: `<h3>Playlists and party soundtracks</h3><p>Gemini can tailor music ideas to your exact moment. Just describe the vibe, the crowd, and the mood:</p><ul><li>"A calm playlist for focusing while I work"</li><li>"Kid-friendly party songs for a 5-year-old's birthday"</li><li>"A road-trip mix of feel-good classics everyone knows"</li></ul><p>Because it's <strong>grounded in Google Search</strong>, it can suggest real, current songs and artists to look up.</p>`,
          question: {
            text: "You're hosting a relaxed dinner party and want the right background music. What's the best way to ask Gemini?",
            options: [
              '"Give me songs"',
              '"Suggest a laid-back dinner-party playlist of about 12 soft, jazzy songs for a relaxed grown-up evening"',
              '"Music please"',
              '"Play something"',
            ],
            correctIndex: 1,
            explanation:
              "It names the vibe (laid-back, jazzy), the length (12 songs), and the crowd (relaxed grown-up evening). Gemini can build a fitting list from that.",
          },
        },
        {
          html: `<h3>Describe the sound you need</h3><p>Being specific about the feeling gets you far better ideas:</p><ul><li>❌ "Make a podcast" — Gemini doesn't know your topic or style</li><li>✅ "Outline a 5-part podcast episode about easy home cooking for busy parents, friendly and upbeat"</li></ul><p>Gemini can also plan an episode structure, suggest talking points, or describe the kind of intro music mood you want — great for side hustles and small businesses.</p>`,
          question: {
            text: "You want Gemini to help plan a short podcast for your small baking business. Which request works best?",
            options: [
              '"Do a podcast"',
              '"Sounds"',
              '"Outline a 4-part podcast episode sharing beginner baking tips, warm and encouraging, about 15 minutes"',
              '"Make it good"',
            ],
            correctIndex: 2,
            explanation:
              "It names the structure (4 parts), the topic (beginner baking tips), the tone (warm, encouraging), and the length. Gemini can build a real outline from that.",
          },
        },
        {
          html: `<p>Practice time — chat with Nova, your AI coach.</p>`,
          chat: [
            {
              bot: "Hey! 👋 Last one — let's use Gemini for audio ideas: playlists, lyrics, and podcast plans.",
            },
            {
              bot: "You want a playlist for your morning workouts.",
              ask: "What helps Gemini suggest the right one?",
              inputType: "choice",
              options: [
                'Just say "give me music"',
                "Describe the vibe, energy level, and how long you want it",
                "Give no details at all",
              ],
              correctIndex: 1,
              feedback:
                "Yes — naming the vibe, energy, and length lets Gemini build a playlist that actually fits your workout.",
              hint: "What would make the playlist match your morning?",
            },
            {
              bot: "You ask Gemini to press play and stream a song for you right now.",
              ask: "Will that work?",
              inputType: "binary",
              options: ["Useful", "Not useful"],
              correctIndex: 1,
              feedback:
                "Not useful — Gemini won't press play, but it's brilliant at planning: playlists, lyrics, and podcast outlines.",
              hint: "Gemini plans the music; it doesn't play it.",
            },
            {
              bot: "Gemini can suggest real, current songs because of one connection. Fill the gap.",
              ask: "Fill the gap:",
              inputType: "fill-blank",
              template: "Gemini is grounded in Google ___, so it can suggest real, current songs.",
              options: ["Search", "Drive", "Photos"],
              correctIndex: 0,
              feedback:
                "Right — being grounded in Google Search lets Gemini point you to real songs and artists to look up.",
              hint: "Which Google tool keeps Gemini current?",
            },
            {
              bot: "Match each audio idea to what Gemini can help you make.",
              ask: "Pair them up:",
              inputType: "match",
              pairs: [
                { left: "Summer BBQ", right: "Upbeat playlist" },
                { left: "Mum's birthday", right: "Fun song lyrics" },
                { left: "Baking business", right: "Podcast outline" },
              ],
              feedback:
                "Perfect — describe the vibe and crowd, and Gemini gives you ideas to build on.",
              hint: "Match each moment to the audio idea.",
            },
            {
              bot: "Let's build a clear playlist request. Arrange the words in order.",
              ask: "Tap the words in order:",
              inputType: "arrange",
              words: ["Suggest", "a", "calm", "playlist", "for", "focusing", "while", "working"],
              feedback:
                "Nice — naming the vibe and the moment gets you a playlist that actually fits.",
              hint: "Start with the action word.",
            },
            {
              bot: "Let's write a real request. You need a fun playlist for your 5-year-old's birthday party.",
              ask: "e.g. Write a clear request for Gemini to suggest that playlist",
              inputType: "text",
              keywords: ["playlist", "kids", "birthday", "fun", "songs", "party", "upbeat"],
              feedback:
                'Nice! A strong version: "Suggest a 10-song upbeat, kid-friendly playlist for a 5-year-old\'s birthday party that little ones will love to dance to." Clear vibe and crowd get great ideas.',
              hint: "Name the crowd, the vibe, and how many songs.",
            },
            {
              bot: "One more. You want Gemini to outline a short podcast for your gardening side hustle.",
              ask: "e.g. Write a request for Gemini to outline that podcast",
              inputType: "text",
              keywords: ["podcast", "outline", "gardening", "tips", "friendly", "episode", "parts"],
              feedback:
                'Great. A clear one: "Outline a 4-part podcast episode with beginner gardening tips, friendly and encouraging, about 12 minutes." Now Gemini knows the topic, tone, and shape.',
              hint: "Say the structure, topic, tone, and length.",
            },
            {
              bot: "You've done it! Gemini is a fantastic partner for planning audio — describe the vibe and let the ideas flow. Congrats on finishing the unit! 🎉",
            },
          ],
        },
        {
          html: `<h3>The one habit to keep</h3><p>Gemini won't press play, but it's a superb planner. Whenever you need lyrics, a playlist, or a podcast plan, describe the vibe, crowd, and length clearly.</p><p>The more you paint the mood, the better the ideas Gemini hands back.</p>`,
        },
      ],
    },
  ],
};
