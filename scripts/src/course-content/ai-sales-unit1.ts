import type { UnitSeed } from "./types";

export const AI_SALES_UNIT_1: UnitSeed = {
  title: "Boost Your Sales with AI",
  lessons: [
    {
      title: "Why AI is Your Sales Superpower",
      summary:
        "See exactly where your selling hours disappear — and how AI hands them back",
      content: `<p>You're drowning in admin work. Emails pile up. Follow-ups slip through the cracks. You spend more time on CRM updates than actual selling. Meanwhile, AI could handle the busy work — this lesson shows you how to automate your routine and focus on what actually closes deals.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Write a short prospecting email to Sarah Chen, Operations Director at a 50-person logistics company. My product: [describe your product in one sentence]. Goal: get a 15-minute intro call next week. Tone: friendly and direct, no buzzwords, under 120 words. Include a subject line and one specific question about her operations challenges.",
        note: "Watch how AI produces a complete, personalized email in seconds. Add one specific detail about the prospect's company and it's ready to send.",
      },
      steps: [
        {
          html: `<h3>The sales time trap</h3><p>Most sales professionals spend only about <strong>30% of their time actually selling</strong>. The rest? Admin tasks that AI can handle in seconds:</p><ul><li><strong>Email writing and responses:</strong> outreach, follow-up sequences, answering common questions</li><li><strong>CRM data entry:</strong> logging calls, updating deal stages, adding contact notes</li><li><strong>Follow-up tracking:</strong> remembering who to contact, when, and about what</li><li><strong>Proposal creation:</strong> customizing templates, finding pricing, formatting documents</li></ul><p>Most sales pros lose <strong>5–10 hours weekly</strong> to tasks AI can automate. Imagine reclaiming that time for actual conversations.</p>`,
          question: {
            text: "What is the biggest thing holding most salespeople back from hitting their targets?",
            options: [
              "Not enough product knowledge",
              "Too much time on repetitive tasks like emails, data entry, and follow-ups",
              "An unclear sales process",
            ],
            correctIndex: 1,
            explanation:
              "Most sales pros lose 5–10 hours weekly to tasks AI can automate. Imagine reclaiming that time for actual conversations.",
          },
        },
        {
          html: `<h3>AI won't replace you</h3><p>Let's address the fear head-on: AI isn't taking sales jobs. It's making salespeople more effective. AI handles:</p><ul><li>Routine emails and follow-ups</li><li>Organizing customer data and notes</li><li>Drafting proposals and presentations</li><li>Analyzing call patterns and wins</li></ul><p>And what only <em>you</em> can do:</p><ul><li>Build genuine relationships</li><li>Read emotional cues and adapt in the moment</li><li>Negotiate complex deals</li><li>Close based on trust and rapport</li></ul><p><strong>AI is your assistant, not your replacement.</strong></p>`,
          question: {
            text: "Which part of the sales job stays fully human?",
            options: [
              "Drafting follow-up emails and proposals",
              "Logging calls and updating the CRM",
              "Building trust, reading emotional cues, and closing complex deals",
            ],
            correctIndex: 2,
            explanation:
              "AI drafts, organizes, and analyzes — but relationships, rapport, and negotiation judgment are yours. That's exactly where reclaimed hours should go.",
          },
        },
        {
          html: `<h3>Where your time actually goes</h3><p>Track a typical sales day and you'll find hours disappearing into tasks AI can handle faster:</p><ul><li><strong>Email writing and responses — 2 hours:</strong> initial outreach, follow-up sequences, answering common questions</li><li><strong>CRM data entry — 1.5 hours:</strong> logging calls and meetings, updating deal stages, adding notes</li><li><strong>Follow-up reminders — 1 hour:</strong> checking who to contact, remembering context, scheduling next steps</li><li><strong>Proposal creation — 1.5 hours:</strong> customizing templates, finding pricing info, formatting</li></ul><p>That's <strong>6 hours daily</strong> on tasks AI can do in minutes. What could you accomplish with those hours? More discovery calls. Deeper relationships. Strategic account planning. That's where deals happen.</p>`,
          question: {
            text: "According to the time audit, which single activity eats the most hours in a sales day?",
            options: [
              "Email writing and responses",
              "Follow-up reminders",
              "CRM data entry",
            ],
            correctIndex: 0,
            explanation:
              "Email alone eats around 2 hours a day — which is exactly why the next lesson teaches you to write better emails in 60 seconds instead of 15 minutes.",
          },
        },
        {
          html: `<h3>Real impact: the numbers</h3><p>Sales teams using AI aren't just saving time — they're seeing measurable results:</p><ul><li><strong>6+ hours saved weekly</strong> — time you'd spend on emails, data entry, follow-ups</li><li><strong>Response in minutes, not hours</strong> — AI drafts emails instantly</li><li><strong>No more forgotten follow-ups</strong> — AI reminds you and drafts your outreach</li><li><strong>Consistent message quality</strong> — every email is well-written, even at 5pm on a Friday</li></ul><div class="discovery"><p>💡 <strong>You don't need to be technical</strong></p><p>If you can type a text message, you can use AI. Type what you want like you're texting a colleague, be specific, review and adjust, and save the prompts that work. No coding, no complicated setup.</p></div>`,
          question: {
            text: "What skill do you need before you can start using AI for sales?",
            options: [
              "Basic programming and API knowledge",
              "None beyond typing — if you can text a colleague, you can prompt an AI",
              "A data-science certification",
            ],
            correctIndex: 1,
            explanation:
              "Using AI is a conversation, not a coding project. Be specific about what you want, review the draft, refine — that's the whole workflow.",
          },
        },
        {
          html: `<h3>Your first week with AI</h3><p>Top performers adopt AI the same way: <strong>start small, see results, then scale.</strong></p><ul><li><strong>Day 1–2:</strong> pick ONE task that eats your time (usually email)</li><li><strong>Day 3–4:</strong> use AI for that task every single time it comes up</li><li><strong>Day 5:</strong> compare — how much time did you save? How was the quality?</li><li><strong>Week 2:</strong> add the next time drain (follow-ups, call notes, proposals)</li></ul><p>Most people overcomplicate this. AI can draft an email and prep you for an objection in under 60 seconds. That's the power you're unlocking — one task at a time.</p>`,
          question: {
            text: "What's the biggest benefit of using AI in sales?",
            options: [
              "It completely automates the sales process, so you don't have to work",
              "It handles repetitive tasks and gives you back 5–10 hours weekly for actual selling",
              "It replaces the need to build customer relationships",
            ],
            correctIndex: 1,
            explanation:
              "AI frees you from busy work so you focus on what actually closes deals — relationships and conversations. It's an assistant, not a replacement.",
          },
        },
      ],
    },
    {
      title: "Write Better Emails in 60 Seconds",
      summary:
        "Master the #1 sales task: emails that get responses — in 60 seconds instead of 15 minutes",
      content: `<p>Email is where salespeople lose the most time — and where AI delivers the fastest win. This lesson gives you a repeatable prompt formula for outreach, follow-ups, and replies that sound like you on your best day.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "You're my sales email assistant. Context: I sell [your product] to [your target customer]. Write a first-touch outreach email to [name], [job title] at [company]. Goal: book a 15-minute call. Personalization: [one specific fact about them or their company]. Tone: warm, direct, zero jargon, under 120 words. Give me a subject line plus two variants of the email so I can pick the stronger one.",
        note: "Save this prompt with your product details filled in — then every new prospect email takes 60 seconds: paste, add one personal fact, send.",
      },
      steps: [
        {
          html: `<h3>Why your emails take 15 minutes</h3><p>Watch yourself write a cold email and you'll see the real time sinks: staring at the blank screen, rewriting the opening line five times, second-guessing the tone, fiddling with the closing. AI eliminates all of that by giving you a <strong>strong first draft in seconds</strong> — and editing a draft is 10x faster than writing from scratch.</p><p>The quality bar matters too: a rushed 5pm email from a tired human loses to a well-structured AI draft you polished for one minute. <strong>Consistency is the hidden win</strong> — every email goes out sharp, not just the ones you wrote before lunch.</p>`,
          question: {
            text: "Why does AI make email writing so much faster?",
            options: [
              "It sends emails automatically without your review",
              "Editing a strong draft is far faster than writing from a blank screen",
              "It writes longer emails than humans can",
            ],
            correctIndex: 1,
            explanation:
              "The blank screen is the time thief. AI hands you a solid draft in seconds — your job shifts from writer to editor, which is dramatically faster.",
          },
        },
        {
          html: `<h3>The 4-part email prompt formula</h3><p>Generic prompt, generic email. Great sales emails come from prompts with four ingredients:</p><ul><li><strong>1. Context:</strong> what you sell and to whom — "I sell scheduling software to dental clinics"</li><li><strong>2. Recipient:</strong> who they are — name, role, company, one specific detail</li><li><strong>3. Goal:</strong> the ONE action you want — book a call, get a reply, confirm a meeting</li><li><strong>4. Tone + limits:</strong> "friendly and direct, under 120 words, no buzzwords"</li></ul><div class="discovery"><p>💡 <strong>The one-detail rule</strong></p><p>Add one specific fact about the prospect — a recent hire, a product launch, a LinkedIn post. One real detail beats five paragraphs of flattery.</p></div>`,
          question: {
            text: "Your AI email drafts feel generic. What's the most likely fix?",
            options: [
              "Ask for longer emails with more adjectives",
              "Add the missing ingredients: context, recipient details, one clear goal, and tone limits",
              "Switch to a different AI tool",
            ],
            correctIndex: 1,
            explanation:
              "Generic output almost always means a generic prompt. Feed AI the four ingredients — context, recipient, goal, tone — and the draft sharpens immediately.",
          },
        },
        {
          html: `<h3>Follow-ups and replies in seconds</h3><p>Outreach is only a third of your email load. AI handles the rest just as fast:</p><ul><li><strong>Follow-up after no reply:</strong> "Write a short, friendly follow-up to this email [paste]. Add one new piece of value, don't guilt-trip."</li><li><strong>Post-meeting recap:</strong> "Turn these rough notes [paste] into a recap email with agreed next steps and owners."</li><li><strong>Tough reply:</strong> "The prospect said [paste objection]. Draft a reply that acknowledges their concern and offers a low-pressure next step."</li></ul><p>The pattern is always the same: <strong>paste the context, state the goal, review, send.</strong> Sixty seconds instead of fifteen minutes of agonizing.</p>`,
          question: {
            text: "A prospect went silent after your demo. What's the fastest AI-powered move?",
            options: [
              "Wait another month so you don't seem pushy",
              "Paste the email thread into AI and ask for a short follow-up that adds one new piece of value",
              "Resend the same email with \"bumping this\" added on top",
            ],
            correctIndex: 1,
            explanation:
              "Give AI the thread and a goal, and you get a value-adding follow-up in seconds. \"Bumping this\" adds nothing; a fresh insight or resource reopens the conversation.",
          },
        },
        {
          html: `<h3>Make it sound like you</h3><p>The #1 worry: "AI emails sound robotic." They do — when you skip the last step. Your polish pass takes 60 seconds:</p><ul><li><strong>Teach AI your voice:</strong> paste 2–3 emails you've written and say "match this tone" — it will</li><li><strong>Cut the AI tells:</strong> delete phrases like "I hope this email finds you well" and any word you'd never say out loud</li><li><strong>Check the facts:</strong> AI happily invents product details and statistics — verify every claim before sending</li><li><strong>Read it aloud:</strong> if a sentence feels awkward to say, rewrite it</li></ul><p><strong>AI drafts, you deliver.</strong> Every email ships under your name — the final read is never optional.</p>`,
          question: {
            text: "What's the non-negotiable last step before sending an AI-drafted email?",
            options: [
              "Adding more exclamation points so it sounds enthusiastic",
              "Reviewing it yourself — checking facts, tone, and anything you'd never actually say",
              "Running it through a second AI tool to double-check the first",
            ],
            correctIndex: 1,
            explanation:
              "AI can invent details and default to a generic voice. The 60-second human review — facts, tone, read-aloud test — is what makes the speed safe.",
          },
        },
      ],
    },
    {
      title: "Find Customers Who Will Actually Buy",
      summary:
        "Use AI to define your ideal customer, research prospects, and focus on leads that close",
      content: `<p>More leads isn't the goal — better leads is. This lesson shows you how AI helps you define exactly who buys from you, research prospects in minutes instead of hours, and rank your pipeline so you spend time where deals actually happen.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me build an ideal customer profile. My product: [describe it]. My three best customers and why they bought: [describe them]. My three worst-fit deals that stalled or churned: [describe them]. Based on this, define: (1) the traits my best customers share, (2) three qualifying questions I should ask every new lead, (3) three red flags that predict a bad-fit deal. Format as a one-page cheat sheet I can keep next to my screen.",
        note: "Real examples beat guesses — the more honest you are about your worst-fit deals, the sharper the red-flag list becomes.",
      },
      steps: [
        {
          html: `<h3>The problem isn't leads — it's fit</h3><p>Chasing every lead feels productive, but bad-fit prospects are the most expensive mistake in sales: they eat your demos, drag out negotiations, and churn after signing. The fix starts with a sharp <strong>ideal customer profile (ICP)</strong> — and AI builds one fast.</p><p>Feed AI your best and worst customers: "Here are my three best customers and why they bought. Here are three deals that went nowhere. What traits separate them?" AI spots patterns you're too close to see — company size, trigger events, roles, budget signals.</p>`,
          question: {
            text: "Why are bad-fit leads so costly?",
            options: [
              "They consume demos, negotiations, and support — then stall or churn anyway",
              "They always complain publicly about your product",
              "They only buy the cheapest plan",
            ],
            correctIndex: 0,
            explanation:
              "Every hour on a bad-fit lead is an hour stolen from a deal that could close. A sharp ICP is how you stop paying that tax.",
          },
        },
        {
          html: `<h3>Prospect research in minutes, not hours</h3><p>Before AI: 45 minutes of tab-hopping per prospect. With AI, research becomes a single prompt:</p><ul><li><strong>Company brief:</strong> "Summarize what [company] does, their likely priorities this year, and recent news. I'm selling [product] — flag anything relevant."</li><li><strong>Role translation:</strong> "What does an Operations Director at a logistics company care about day-to-day? What problems keep them up at night?"</li><li><strong>Conversation starters:</strong> "Based on this LinkedIn profile [paste], suggest three genuine, non-creepy openers."</li></ul><div class="discovery"><p>💡 <strong>Verify before you personalize</strong></p><p>AI sometimes mixes up companies or invents "recent news." Spot-check any fact you plan to mention in an email — a wrong detail is worse than no detail.</p></div>`,
          question: {
            text: "AI tells you a prospect's company \"just raised Series B funding.\" What do you do before mentioning it in your outreach?",
            options: [
              "Mention it immediately — speed beats accuracy in outreach",
              "Verify it with a quick search — AI sometimes invents or confuses company facts",
              "Avoid personalization entirely so you can't get it wrong",
            ],
            correctIndex: 1,
            explanation:
              "AI can hallucinate news or mix up similar companies. A 30-second check protects you — congratulating a company on funding they never raised kills your credibility instantly.",
          },
        },
        {
          html: `<h3>Score your pipeline like a pro</h3><p>When you can't call everyone, AI helps you decide who's first. Paste your lead list (no sensitive data) with what you know — company size, industry, how they found you, engagement so far — and ask:</p><p><em>"Score each lead 1–10 against this ideal customer profile [paste your ICP]. Explain each score in one line and tell me which five to contact today."</em></p><p>The magic isn't the number — it's the <strong>forced reasoning</strong>. AI explains why a lead is promising or weak, which sharpens your own instincts every time you disagree with it.</p>`,
          question: {
            text: "What's the real value of asking AI to score and explain each lead?",
            options: [
              "The scores are always objectively correct",
              "The one-line reasoning helps you prioritize and sharpens your own judgment",
              "It removes the need to ever qualify leads on calls",
            ],
            correctIndex: 1,
            explanation:
              "AI scoring is a prioritization aid, not an oracle. The explanations are the gold — they force clear reasoning about fit that you can accept, reject, or refine.",
          },
        },
        {
          html: `<h3>Protect the data, keep the speed</h3><p>One rule before you paste anything into a public AI tool: <strong>anonymize customer data.</strong></p><ul><li>Use "a 200-person logistics company in Texas" instead of the company name when the details are sensitive</li><li>Never paste contract values, personal phone numbers, or private financial details</li><li>Check your company's AI policy — many teams have approved tools with proper data agreements</li></ul><p>You lose nothing by anonymizing: AI reasons about patterns, not names. The advice is just as sharp with "Prospect A" as with the real company.</p>`,
          question: {
            text: "You want AI to help prioritize deals, but the list includes contract values. What's the right move?",
            options: [
              "Paste everything — AI tools are all confidential by default",
              "Anonymize: replace names with labels and describe deals in ranges before pasting",
              "Skip AI for anything pipeline-related",
            ],
            correctIndex: 1,
            explanation:
              "AI reasons about patterns, not names — \"Prospect A, mid-five-figures, stalled at legal\" gets you the same quality advice with none of the data risk.",
          },
        },
      ],
    },
    {
      title: "Never Forget a Follow-Up Again",
      summary:
        "Build AI-drafted follow-up sequences and effortless CRM notes so no deal slips away",
      content: `<p>Most deals aren't lost — they're forgotten. Research consistently shows the majority of sales need five or more touches, yet most salespeople stop after one or two. This lesson builds your AI-powered follow-up system: sequences drafted in advance, CRM notes that write themselves, and reminders with full context.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Design a 5-touch follow-up sequence for a prospect who [describe situation — e.g. attended a demo but went quiet]. My product: [describe]. For each touch give me: the day to send it (spacing over 3 weeks), the channel (email or LinkedIn), a subject line, and a draft under 100 words. Each touch must add NEW value — an insight, resource, or relevant example — never just \"checking in.\" Tone: helpful peer, not desperate salesperson.",
        note: "Approve the sequence once, save it, and reuse it for every similar prospect — that's hours of future follow-up writing done in one sitting.",
      },
      steps: [
        {
          html: `<h3>The follow-up math</h3><p>Here's the uncomfortable truth about persistence:</p><ul><li>Most sales require <strong>5+ touches</strong> before a decision</li><li>Nearly half of salespeople <strong>give up after one</strong></li><li>The gap between those two numbers is where deals quietly die</li></ul><p>It's not laziness — it's memory. After touch two, you forget who's due, what you last said, and what to say next. That's a systems problem, and AI is very good at systems: it drafts the whole sequence in advance, so following up takes one click instead of one act of willpower.</p>`,
          question: {
            text: "Why do most follow-ups never happen?",
            options: [
              "Prospects explicitly ask salespeople to stop",
              "Tracking who's due, remembering context, and writing each message from scratch overwhelms memory",
              "Follow-ups are proven to annoy buyers",
            ],
            correctIndex: 1,
            explanation:
              "The failure is logistical, not motivational. When AI pre-drafts the sequence and keeps the context, following up stops depending on your memory.",
          },
        },
        {
          html: `<h3>Sequences that add value, not pressure</h3><p>The difference between persistence and pestering is <strong>value per touch</strong>. A strong 5-touch sequence looks like:</p><ul><li><strong>Touch 1 (day 1):</strong> recap + the one thing they cared about most</li><li><strong>Touch 2 (day 4):</strong> a relevant resource — case study, article, quick tip</li><li><strong>Touch 3 (day 9):</strong> a new angle — an insight about their industry or a question</li><li><strong>Touch 4 (day 15):</strong> social proof — how a similar company solved the same problem</li><li><strong>Touch 5 (day 21):</strong> the graceful close — "Should I close your file, or is this still on your radar?"</li></ul><div class="discovery"><p>💡 <strong>The banned phrase</strong></p><p>Tell AI: "never write 'just checking in.'" Every touch must give the prospect something — a reason to reply that isn't guilt.</p></div>`,
          question: {
            text: "What separates a welcome follow-up from an annoying one?",
            options: [
              "Following up less than once a month",
              "Every touch adds something new — an insight, resource, or relevant example",
              "Always apologizing for bothering them",
            ],
            correctIndex: 1,
            explanation:
              "\"Just checking in\" asks the prospect to do your job. A resource, insight, or relevant story gives them a reason to re-engage — that's persistence they appreciate.",
          },
        },
        {
          html: `<h3>CRM notes that write themselves</h3><p>The CRM is where selling time goes to die — unless AI does the typing. After any call or meeting, brain-dump your messy notes and prompt:</p><p><em>"Turn these rough notes into a structured CRM entry: contact, key points discussed, objections raised, budget/timeline signals, agreed next step with date, and a one-line deal summary."</em></p><p>Thirty seconds of dictation becomes a clean, complete record. The compound benefit: <strong>your future follow-ups get smarter</strong>, because every AI-drafted message can pull from rich notes instead of your fading memory.</p>`,
          question: {
            text: "What's the compound benefit of AI-structured CRM notes?",
            options: [
              "They make your CRM look impressive in team reviews",
              "Rich, consistent notes give AI the context to draft sharper follow-ups later",
              "They eliminate the need to ever talk to prospects again",
            ],
            correctIndex: 1,
            explanation:
              "Good notes are fuel. When every call is captured cleanly, AI can reference exact objections, timelines, and interests in the next follow-up — that's what makes it feel personal.",
          },
        },
        {
          html: `<h3>Your weekly follow-up ritual</h3><p>Tie it together with one 20-minute ritual — same time every week:</p><ul><li><strong>1. Export the list:</strong> everyone with no touch in 7+ days</li><li><strong>2. Batch the drafts:</strong> paste the list with last-contact context, ask AI to draft each follow-up</li><li><strong>3. Review and personalize:</strong> 30 seconds each — adjust tone, verify facts, add a human detail</li><li><strong>4. Send and log:</strong> AI drafts the CRM updates too</li></ul><p>Twenty minutes replaces the daily anxiety of "who am I forgetting?" — because the honest answer becomes <strong>no one</strong>.</p>`,
          question: {
            text: "What makes the weekly batch ritual so effective?",
            options: [
              "It sends every prospect the same message at once",
              "Batching turns scattered follow-up guilt into one 20-minute reviewed-and-sent session",
              "It removes the need for a CRM entirely",
            ],
            correctIndex: 1,
            explanation:
              "Batching wins because it's a system, not a memory feat: one list, one drafting session, one review pass — and nobody slips through the cracks.",
          },
        },
      ],
    },
    {
      title: "Turn Objections into Closed Deals",
      summary:
        "Prep for every tough question with AI frameworks and roleplay — before the call happens",
      content: `<p>"It's too expensive." "We're happy with our current vendor." "Call me next quarter." Objections lose deals only when they catch you unprepared. This lesson turns AI into your objection-handling coach: frameworks in 30 seconds and a roleplay partner available at midnight before the big call.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Roleplay with me. You are a skeptical [job title] at a [industry] company evaluating my product: [describe]. Your hidden concerns: [e.g. price, switching costs, a bad past experience]. Raise realistic objections one at a time and respond the way a real buyer would — push back if my answers are weak, warm up if they're good. After 5 exchanges, break character and score me on: acknowledging your concern, clarifying before answering, and offering a low-pressure next step.",
        note: "Do this the night before any high-stakes call. Five minutes of rehearsal against a realistic skeptic changes how you sound in the room.",
      },
      steps: [
        {
          html: `<h3>Why objections beat unprepared salespeople</h3><p>An objection isn't a rejection — it's a request for confidence. The prospect is saying "convince me it's safe to say yes." The problem: in the moment, your brain is juggling the relationship, the next question, and the clock. That's why prepared frameworks win: <strong>you can't think clearly and improvise under pressure at the same time.</strong></p><p>The old way to prepare was years of getting burned. The new way: ask AI for the likely objections before every call — <em>"I'm selling [product] to [role]. List the 5 most likely objections and the concern hiding under each one."</em></p>`,
          question: {
            text: "What is an objection, really?",
            options: [
              "A polite way of ending the conversation",
              "A request for confidence — the prospect asking you to make a yes feel safe",
              "Proof the prospect can't afford your product",
            ],
            correctIndex: 1,
            explanation:
              "Buyers object when they're interested but not yet confident. Treat the objection as the question under the words, and it becomes a doorway instead of a wall.",
          },
        },
        {
          html: `<h3>Frameworks in 30 seconds</h3><p>For any objection, AI gives you multiple angles instantly. Prompt: <em>"A prospect says [objection]. Give me three response frameworks: one that reframes the concern, one that uses a customer story, and one that asks a clarifying question first. Keep each under 60 words."</em></p><p>You're not memorizing a script — you're building a <strong>mental menu</strong>. On the call, you pick the angle that fits the moment and say it in your own words.</p><div class="discovery"><p>💡 <strong>Clarify before you counter</strong></p><p>The strongest first move is almost always a question: "When you say it's too expensive — is it the total price, or fitting it into this year's budget?" Half the time, the real objection is different from the stated one.</p></div>`,
          question: {
            text: "A prospect says \"it's too expensive.\" What's the strongest first move?",
            options: [
              "Immediately offer a 20% discount",
              "Ask a clarifying question to find the real concern under the words",
              "List every feature to justify the price",
            ],
            correctIndex: 1,
            explanation:
              "\"Too expensive\" can mean budget timing, unclear value, or a cheaper competitor — three different problems with three different answers. Clarify first, then respond to the real one.",
          },
        },
        {
          html: `<h3>Rehearse with an AI buyer</h3><p>Reading frameworks is studying. Saying them out loud against pushback is training. AI roleplay gives you unlimited reps:</p><ul><li><strong>Set the scene:</strong> "You're a skeptical CFO evaluating my product. Push back hard on ROI."</li><li><strong>Make it realistic:</strong> give the AI hidden concerns and tell it to warm up only when you earn it</li><li><strong>Get scored:</strong> after the exchange, ask for honest feedback on what you handled well and where you got defensive</li></ul><p>Five minutes of rehearsal the night before beats an hour of anxious re-reading. You've already heard the hard question — so on the real call, it doesn't rattle you.</p>`,
          question: {
            text: "Why is AI roleplay more effective than re-reading your notes before a big call?",
            options: [
              "AI roleplay guarantees the prospect will say exactly what the AI said",
              "Practicing responses out loud against live pushback builds reflexes notes can't",
              "It's faster than reading",
            ],
            correctIndex: 1,
            explanation:
              "Objection handling is a performance skill. Rehearsing against a pushing-back buyer builds the calm reflexes you need — the real call feels like your second time, not your first.",
          },
        },
        {
          html: `<h3>Learn from every lost deal</h3><p>Objections you couldn't handle are your best curriculum. After a tough call, debrief with AI:</p><p><em>"On today's call, the prospect said [objection] and I responded [what you said]. They didn't move forward. What was the concern under their words, what did my answer miss, and what would a stronger response have been?"</em></p><p>Do this for a month and you'll own a personal playbook of <strong>your</strong> hardest objections with battle-tested answers — not generic scripts from a sales book, but responses built from your actual conversations.</p>`,
          question: {
            text: "What's the best use of an objection that cost you a deal?",
            options: [
              "Forget it quickly and stay positive",
              "Debrief it with AI to find what the concern really was and build a stronger answer for next time",
              "Add that prospect to a do-not-call list",
            ],
            correctIndex: 1,
            explanation:
              "Every lost deal carries a lesson you paid full price for. A five-minute AI debrief converts the loss into a sharper answer — so the same objection never beats you twice.",
          },
        },
      ],
    },
    {
      title: "Let a Chatbot Answer Questions",
      summary:
        "Set up an AI assistant that handles routine questions and captures leads while you sell",
      content: `<p>A third of your inbox is the same ten questions on repeat: pricing, features, "do you integrate with…?" This lesson shows you how a chatbot answers them instantly — around the clock — while capturing lead details and routing the real buying conversations to you.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me build a chatbot knowledge base. My product: [describe]. Here are the 10 questions prospects ask most, with my usual answers: [list them roughly]. For each: (1) rewrite my answer to be clear, friendly, and under 80 words, (2) suggest a follow-up question the bot should ask to keep the conversation going, (3) flag which questions signal buying intent and should trigger a handoff to me with the visitor's contact details.",
        note: "Your last 50 emails are a gold mine — the questions you keep answering manually are exactly what the bot should handle first.",
      },
      steps: [
        {
          html: `<h3>The questions that eat your day</h3><p>Audit your inbox and you'll find the pattern: most inbound questions aren't sales conversations — they're <strong>lookups</strong>. Pricing tiers, feature checks, integration questions, onboarding time. Each takes you five minutes; a chatbot answers in five seconds, at 2am, on holidays, while you're on another call.</p><p>The math is stark: prospects who get an answer within minutes convert dramatically better than those who wait hours. Speed isn't a luxury in sales — <strong>it's often the whole game</strong>, and a bot never sleeps on a hot lead.</p>`,
          question: {
            text: "Which inbound questions should a chatbot handle?",
            options: [
              "Complex negotiations about contract terms",
              "Repetitive lookup questions — pricing, features, integrations — that have standard answers",
              "Complaints from angry customers",
            ],
            correctIndex: 1,
            explanation:
              "Bots excel at instant, consistent answers to repeat questions. Negotiations and sensitive conversations stay human — that's the handoff working as designed.",
          },
        },
        {
          html: `<h3>Build the brain: your FAQ knowledge base</h3><p>A chatbot is only as good as what you feed it. The setup takes one afternoon:</p><ul><li><strong>1. Mine your inbox:</strong> pull the 10–15 questions you answer over and over</li><li><strong>2. Draft with AI:</strong> paste your rough answers and ask AI to make each clear, friendly, and under 80 words</li><li><strong>3. Add follow-ups:</strong> every answer ends with a question that moves the conversation forward — "Want to see how that works for your team size?"</li><li><strong>4. Load it:</strong> most website chat tools (Intercom, Tidio, HubSpot, and others) let you paste a knowledge base and connect AI in minutes, no coding</li></ul><div class="discovery"><p>💡 <strong>Honest beats clever</strong></p><p>Tell the bot to say "Good question — let me get you a human answer on that" when it's unsure. A wrong answer about pricing costs far more than an honest handoff.</p></div>`,
          question: {
            text: "The bot gets a question that isn't in its knowledge base. What should it do?",
            options: [
              "Improvise a plausible-sounding answer to keep the conversation going",
              "Admit it's unsure and offer to connect the visitor with you, capturing their contact details",
              "End the chat immediately",
            ],
            correctIndex: 1,
            explanation:
              "A confidently wrong answer about pricing or features creates real damage. An honest handoff keeps trust intact — and hands you a warm lead with contact details.",
          },
        },
        {
          html: `<h3>From answering machine to lead machine</h3><p>Answering questions is table stakes. The real win is what the bot does <em>while</em> answering:</p><ul><li><strong>Capture contact info naturally:</strong> "Happy to send you the full pricing sheet — what's the best email?"</li><li><strong>Qualify as it chats:</strong> team size, use case, timeline — logged before you ever join</li><li><strong>Spot buying signals:</strong> questions like "how fast can we start?" or "do you offer annual billing?" trigger an instant alert to you</li><li><strong>Book meetings directly:</strong> connect your calendar and hot leads schedule themselves</li></ul><p>You wake up to a summary: who visited, what they asked, who's worth calling first. <strong>The bot did the triage; you do the selling.</strong></p>`,
          question: {
            text: "A visitor asks the bot \"how fast can we get started?\" What should happen?",
            options: [
              "The bot answers and lets the visitor leave anonymously",
              "That's a buying signal — the bot should answer, capture contact details, and alert you immediately",
              "The bot should refuse to answer implementation questions",
            ],
            correctIndex: 1,
            explanation:
              "\"How fast can we start?\" is a hand raised high. The bot's job is to answer, grab the contact details, and get that lead in front of you while the interest is hot.",
          },
        },
        {
          html: `<h3>Keep it human where it counts</h3><p>Chatbots fail when they pretend to be something they're not. The trust rules:</p><ul><li><strong>Be transparent:</strong> visitors should know it's an assistant — hiding it backfires the moment they notice</li><li><strong>Escalate fast:</strong> frustration, complex needs, or "can I talk to a person?" get a human handoff immediately, never a loop</li><li><strong>Review weekly:</strong> skim the chat logs — wrong answers get fixed, new questions join the knowledge base</li><li><strong>Never let the bot negotiate:</strong> pricing exceptions, discounts, and contract terms are yours alone</li></ul><p>Run it this way and the bot becomes what it should be: a tireless junior assistant that handles the routine and hands you the moments that matter.</p>`,
          question: {
            text: "Which task should NEVER be delegated to the chatbot?",
            options: [
              "Answering what integrations you support",
              "Negotiating discounts and contract terms",
              "Sending a pricing sheet to an interested visitor",
            ],
            correctIndex: 1,
            explanation:
              "Negotiation needs judgment, authority, and relationship reading — a bot has none of these. It handles the routine; the deals stay with you.",
          },
        },
      ],
    },
    {
      title: "Analyze and Learn From Your Calls",
      summary:
        "Turn call recordings into summaries, CRM notes, and a personal sales coach",
      content: `<p>Your sales calls are a gold mine you've been leaving unmined: every objection, every buying signal, every phrase that worked or flopped. This lesson shows you how AI turns recordings into instant summaries, effortless CRM notes, and honest coaching on your own performance.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here's a transcript of my recent sales call: [paste transcript]. Analyze it as my sales coach: (1) summarize the call in 5 bullets, (2) list every objection or concern the prospect raised and how well I handled each, (3) note buying signals I may have missed, (4) calculate roughly how much of the call I talked versus listened, (5) give me the single biggest thing to do differently on my next call. Be honest, not polite.",
        note: "No transcript yet? Most meeting tools (Zoom, Teams, Meet) have built-in recording and transcription — turn it on for your next call and always tell participants you're recording.",
      },
      steps: [
        {
          html: `<h3>The gold mine in your calendar</h3><p>Every week you run hours of sales calls — and within a day, most of the detail is gone. What the prospect hesitated on, the exact phrase that made them lean in, the concern they mentioned once and never repeated. <strong>Memory keeps the plot; the money is in the details.</strong></p><p>Recording changes everything: most meeting tools transcribe automatically now, and a transcript is something AI can chew through in seconds. One rule first: <strong>always tell participants you're recording</strong> — it's the law in many places, and basic respect everywhere.</p>`,
          question: {
            text: "What must happen before you record any sales call?",
            options: [
              "Nothing — business calls are always fair to record",
              "Participants are informed you're recording — it's legally required in many places",
              "You get written approval from your CEO",
            ],
            correctIndex: 1,
            explanation:
              "Consent laws vary by region, and many require all parties to know. Announcing the recording protects you legally and keeps trust — most buyers don't mind when asked openly.",
          },
        },
        {
          html: `<h3>From one-hour call to 30-second summary</h3><p>Paste any transcript and AI gives you the whole picture instantly:</p><ul><li><strong>The 5-bullet summary:</strong> what was discussed, decided, and promised</li><li><strong>Objections raised:</strong> every concern, plus how (or whether) it got resolved</li><li><strong>Buying signals:</strong> budget mentions, timeline questions, "who else needs to see this?"</li><li><strong>Next steps:</strong> who owes what by when — straight into your follow-up email</li></ul><p>The recap email that used to take 20 minutes now takes two: <em>"Turn this summary into a friendly recap email confirming next steps."</em> Sent while competitors are still typing.</p>`,
          question: {
            text: "What's the fastest post-call win from an AI transcript summary?",
            options: [
              "Posting the full transcript to your team channel",
              "A same-hour recap email with confirmed next steps, drafted from the summary in minutes",
              "Deleting the recording to save storage",
            ],
            correctIndex: 1,
            explanation:
              "Speed impresses buyers: a sharp recap arriving within the hour signals you listened and you're organized — and AI makes it a two-minute task.",
          },
        },
        {
          html: `<h3>AI as your private sales coach</h3><p>The braver use of transcripts: pointing the lens at yourself. Ask AI:</p><ul><li><strong>Talk ratio:</strong> "How much did I talk versus listen?" (great discovery calls skew heavily toward listening)</li><li><strong>Question quality:</strong> "Which of my questions opened the prospect up, and which got one-word answers?"</li><li><strong>Missed moments:</strong> "Where did the prospect show interest or concern that I talked past?"</li><li><strong>The habit check:</strong> "Do I have filler phrases or patterns that weaken my delivery?"</li></ul><div class="discovery"><p>💡 <strong>Ask for honesty</strong></p><p>End coaching prompts with "be honest, not polite." AI defaults to flattery — invite the critique and the feedback gets dramatically more useful.</p></div>`,
          question: {
            text: "AI shows you talked 75% of a discovery call. Why does that matter?",
            options: [
              "It doesn't — talking a lot shows expertise and enthusiasm",
              "Discovery calls are for learning the prospect's world — a high talk ratio means you pitched instead of listened",
              "It means the call ran too long",
            ],
            correctIndex: 1,
            explanation:
              "Discovery is where you earn the right to pitch later — by understanding their problem deeply. If you're talking three-quarters of the time, you're learning almost nothing.",
          },
        },
        {
          html: `<h3>Find the patterns across all your calls</h3><p>One call teaches a lesson; ten calls reveal your patterns. Feed AI summaries from your recent wins and losses and ask:</p><p><em>"Here are summaries of my last 5 closed-won and 5 closed-lost calls. What patterns separate the wins? Which objections show up most in losses? What do I consistently do well, and what's my most expensive habit?"</em></p><p>This is the analysis elite sales teams pay coaches and call-intelligence platforms for — and you can start with transcripts and one prompt. Review monthly, fix your one most expensive habit, repeat. <strong>That's compounding improvement.</strong></p>`,
          question: {
            text: "Why analyze wins AND losses together instead of just studying lost deals?",
            options: [
              "Losses are too depressing to analyze on their own",
              "The contrast reveals what you do differently when you win — patterns invisible in either pile alone",
              "Wins don't contain any useful information",
            ],
            correctIndex: 1,
            explanation:
              "Insight lives in the contrast: maybe wins had a budget conversation in call one, or fewer slides and more questions. You only see it when both piles sit side by side.",
          },
        },
      ],
    },
    {
      title: "From Learning to Doing: Your Action Plan",
      summary:
        "Turn everything you've learned into a 30-day plan — three workflows, real results",
      content: `<p>You've seen what AI can do across your whole sales day: emails, prospecting, follow-ups, objections, chatbots, and call analysis. Knowledge without action changes nothing — this final lesson turns it all into a concrete 30-day plan that starts tomorrow morning.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build my 30-day AI sales adoption plan. My role: [describe what you sell and to whom]. My three biggest time drains: [e.g. outreach emails, follow-up tracking, call notes]. Create a week-by-week plan: Week 1 — master ONE workflow with specific daily actions; Week 2 — add the second; Week 3 — add the third; Week 4 — measure and systematize. For each week include: the exact prompts to save as templates, how many minutes per day to invest, and one number to track so I know it's working.",
        note: "Print the plan or pin it somewhere visible. The difference between this course working and not working is entirely in the next 30 days.",
      },
      steps: [
        {
          html: `<h3>Start with three, not ten</h3><p>The biggest mistake after a course like this: trying to automate everything Monday morning, drowning by Wednesday, quitting by Friday. The salespeople who make AI stick start with <strong>exactly three workflows</strong> — chosen by one criterion: <em>where do I lose the most time every single week?</em></p><p>For most salespeople the big three are: <strong>email drafting</strong> (biggest daily drain), <strong>follow-up sequences</strong> (biggest revenue leak), and <strong>call notes</strong> (biggest CRM pain). Yours may differ — pick from your own time audit in lesson one.</p>`,
          question: {
            text: "How should you choose your first three AI workflows?",
            options: [
              "Pick the most impressive-sounding ones to mention in team meetings",
              "Pick where you lose the most time every single week — frequency beats flash",
              "Pick whatever your competitors are rumored to use",
            ],
            correctIndex: 1,
            explanation:
              "A daily 15-minute save compounds into weeks of reclaimed selling time per year. High-frequency workflows deliver that; impressive-but-rare ones don't.",
          },
        },
        {
          html: `<h3>The 30-day rollout</h3><p>One workflow per week, then a measurement week:</p><ul><li><strong>Week 1 — one workflow only:</strong> use AI for it every single time it comes up. Save the prompts that work as templates</li><li><strong>Week 2 — add the second:</strong> workflow one is becoming habit; the second gets your attention</li><li><strong>Week 3 — add the third:</strong> you now have a system covering your top three drains</li><li><strong>Week 4 — measure and lock in:</strong> hours saved, response rates, follow-ups completed — and your saved-prompt library becomes your permanent toolkit</li></ul><div class="discovery"><p>💡 <strong>The template library is the asset</strong></p><p>Every prompt you refine and save is a tool you own forever. By day 30 you should have 10–15 battle-tested prompts — that library is worth more than any single deal it helps close.</p></div>`,
          question: {
            text: "Why add one workflow per week instead of all three at once?",
            options: [
              "AI tools limit how many features you can use per week",
              "Each workflow becomes a habit before the next arrives — three at once usually means zero stick",
              "It gives you an excuse to delay the hard ones",
            ],
            correctIndex: 1,
            explanation:
              "Habit formation needs repetition without overload. One-per-week feels slow for three weeks and then pays off for years — the all-at-once approach usually collapses by Friday.",
          },
        },
        {
          html: `<h3>Measure what matters</h3><p>"It feels faster" won't survive a busy quarter — numbers will. Track three simple metrics:</p><ul><li><strong>Time reclaimed:</strong> minutes saved per task × times per week (email alone often returns 5+ hours)</li><li><strong>Response rate:</strong> are AI-polished emails getting more replies than your old ones?</li><li><strong>Follow-up completion:</strong> what percentage of due follow-ups actually went out this week?</li></ul><p>Numbers do two jobs: they prove the system works when motivation dips, and they show you where to tune — if response rates aren't moving, your prompts need work, and now you know.</p>`,
          question: {
            text: "Why track hard numbers instead of relying on \"it feels faster\"?",
            options: [
              "Numbers look professional in your email signature",
              "Numbers prove the system works when motivation dips — and show exactly where to tune",
              "Feelings are always wrong",
            ],
            correctIndex: 1,
            explanation:
              "In week one, novelty carries you. In month three, evidence does. Tracked hours and response rates keep the system alive — and tell you which prompts to improve.",
          },
        },
        {
          html: `<h3>Your unfair advantage starts tomorrow</h3><p>Here's the honest summary of everything in this course:</p><ul><li>AI handles the busy work — <strong>emails, follow-ups, notes, research, analysis</strong></li><li>You keep the human work — <strong>relationships, trust, negotiation, the close</strong></li><li>No technical skills required — if you can type a message, you're qualified</li><li>Start small, measure, expand — <strong>that's the whole method</strong></li></ul><p>Most of your competitors are still writing every email by hand and forgetting half their follow-ups. Every week you wait is reclaimed hours — and deals — left on the table. <strong>Pick your first workflow tonight. Use it tomorrow.</strong></p>`,
          question: {
            text: "What's the very first action to take after finishing this course?",
            options: [
              "Research AI tools for a few more weeks to find the perfect one",
              "Pick your single biggest time drain and use AI for it starting tomorrow",
              "Wait until your company rolls out an official AI policy and toolkit",
            ],
            correctIndex: 1,
            explanation:
              "Action beats research paralysis. The tools you already have are enough — one workflow, starting tomorrow, is how six lessons of knowledge become hours of reclaimed selling time.",
          },
        },
      ],
    },
  ],
};
