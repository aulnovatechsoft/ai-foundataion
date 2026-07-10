import type { UnitSeed } from "./types";

export const AI_REAL_ESTATE_UNIT_1: UnitSeed = {
  title: "First Steps",
  lessons: [
    {
      title: "AI for Real Estate: First Steps",
      summary: "See where AI fits in an agent's day — and set up your first three time-saving workflows",
      content: `<p>Real estate runs on speed, follow-up, and communication — exactly the things AI is best at. This lesson maps AI onto an agent's actual day and gets your first three workflows running before the end of the week.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm a real estate agent. Here's what my typical week looks like: [describe — e.g. prospecting calls, showing appointments, writing listing descriptions, social media posts, follow-up emails, paperwork]. Classify each activity into: (1) AI can draft it and I polish, (2) AI can help me prepare or research, (3) this stays fully human (face-to-face, negotiation, relationships). Then tell me which THREE activities would save me the most hours per week if I started using AI on them tomorrow.",
        note: "Be specific about hours spent per activity — the ranking gets dramatically better when AI knows where your time actually goes.",
      },
      steps: [
        {
          html: `<h3>Where an agent's hours really go</h3><p>Ask any agent what they do, and they'll say "sell homes." But track a week honestly and the picture changes:</p><ul><li><strong>Writing:</strong> listing descriptions, follow-up emails, social posts, market updates</li><li><strong>Admin:</strong> CRM updates, scheduling, transaction paperwork, checklist chasing</li><li><strong>Research:</strong> comps, neighborhood data, prep for listing appointments</li><li><strong>Face time:</strong> showings, consults, negotiations — the part that actually earns the commission</li></ul><p>The uncomfortable math: most agents spend <strong>60–70% of their week on the first three</strong>. AI can't hold an open house — but it can draft, organize, and research at a level that hands you those hours back for the work that pays.</p>`,
          question: {
            text: "Which part of an agent's week is AI best positioned to take over?",
            options: [
              "Face-to-face showings and negotiations",
              "Writing, admin, and research work that eats 60–70% of the week",
              "Deciding which clients deserve attention",
            ],
            correctIndex: 1,
            explanation:
              "AI excels at drafting, organizing, and researching — the invisible majority of an agent's week. The face-to-face work stays yours; AI just buys you more time to do it.",
          },
        },
        {
          html: `<h3>The three-workflow start</h3><p>Don't try to "AI everything" on day one. The agents who make this stick start with exactly three workflows:</p><ul><li><strong>1. Lead reply drafts:</strong> every inquiry gets a fast, personalized response drafted by AI, reviewed and sent by you</li><li><strong>2. Listing descriptions:</strong> feed AI the property facts and get three description drafts in your brand voice</li><li><strong>3. Follow-up sequences:</strong> AI drafts the 5-touch follow-up series for new leads — you approve once, reuse forever</li></ul><div class="discovery"><p>💡 <strong>The 15-minute rule</strong></p><p>Pick workflows where AI saves at least 15 minutes every single time they run. Small-but-frequent beats impressive-but-rare — a daily 15-minute save is 65+ hours a year.</p></div>`,
          question: {
            text: "Why start with just three AI workflows instead of adopting everything at once?",
            options: [
              "AI tools charge per workflow, so fewer is cheaper",
              "Mastering a few high-frequency workflows builds real skill and compounding time savings",
              "Three is the legal limit for AI use in real estate",
            ],
            correctIndex: 1,
            explanation:
              "Small-but-frequent wins compound: master three daily workflows and you've reclaimed hours every week — then expand from a foundation that actually works.",
          },
        },
        {
          html: `<h3>The golden rule: AI drafts, you deliver</h3><p>Before we go further, lock in the rule that protects your license and your reputation:</p><ul><li><strong>AI drafts — you verify and send.</strong> Every fact about a property, every claim in a listing, every number in a market update gets checked by you</li><li><strong>Fair housing is non-negotiable:</strong> AI-written marketing must describe the <em>property</em>, never the <em>ideal buyer</em>. "Perfect for young families" is a violation whether a human or an AI wrote it</li><li><strong>Confidentiality:</strong> never paste a client's financial details or personal circumstances into a public AI tool — anonymize first</li></ul><p>Treat AI like a talented new assistant: enormous output, zero license, and everything it produces ships under <em>your</em> name.</p>`,
          question: {
            text: "AI drafts a listing post saying the home is \"ideal for young professional couples.\" What do you do?",
            options: [
              "Post it — AI-generated text isn't subject to fair housing rules",
              "Rewrite it to describe the property's features, not the ideal buyer — that phrasing risks a fair housing violation",
              "Add \"AI-generated\" as a disclaimer and post it",
            ],
            correctIndex: 1,
            explanation:
              "Fair housing rules apply to every word you publish, no matter who — or what — wrote it. Marketing describes the property; describing preferred buyers invites discrimination claims.",
          },
        },
      ],
    },
    {
      title: "Speed-to-Lead, Scheduling, CRM Notes",
      summary: "Respond to every lead in minutes, automate scheduling, and keep your CRM effortlessly clean",
      content: `<p>The agent who responds first usually wins the client — and most leads go cold in under an hour. This lesson builds your speed-to-lead system: instant AI-drafted replies, friction-free scheduling, and CRM notes that write themselves.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Create 5 reusable lead-reply templates for me, a real estate agent: (1) online inquiry about a specific listing, (2) open house sign-in follow-up, (3) referral introduction, (4) past client checking the market, (5) cold lead re-engagement after 3 months of silence. Each: warm and personal, under 100 words, one clear next step (a call or showing time), and a spot for me to insert one personalized detail. Match this tone: [paste a short email you've written].",
        note: "Save the five templates in your phone's notes — speed-to-lead only works if the draft is one tap away.",
      },
      steps: [
        {
          html: `<h3>The 5-minute window</h3><p>The data has been consistent for years: <strong>lead conversion drops off a cliff after the first minutes</strong>. A lead who inquires about a listing is often messaging three other agents at the same moment — the first thoughtful reply usually gets the appointment.</p><p>The problem was never willingness — it's that you're at a showing, in a negotiation, or driving. The AI fix:</p><ul><li><strong>Pre-built reply templates</strong> for your five most common inquiry types, drafted by AI in your voice, saved and ready</li><li><strong>Personalize in 30 seconds:</strong> swap in the property, their name, one specific detail — then send</li><li><strong>Every reply ends with a next step:</strong> two proposed times beats "let me know when works"</li></ul>`,
          question: {
            text: "Why do pre-drafted AI reply templates beat writing each lead response from scratch?",
            options: [
              "They let you respond within minutes even mid-showing — and speed is what converts leads",
              "Leads prefer generic messages over personal ones",
              "Templates are required by most MLS rules",
            ],
            correctIndex: 0,
            explanation:
              "The first thoughtful response usually wins the appointment. Templates plus 30 seconds of personalization gets you there while competitors are still typing.",
          },
        },
        {
          html: `<h3>Scheduling without the ping-pong</h3><p>"What time works for you?" — "How about Tuesday?" — "Tuesday's bad, Wednesday?" Every showing booked by email ping-pong costs 15 minutes and a day of delay.</p><p>The fix is a two-part system:</p><ul><li><strong>A booking link</strong> (Calendly-style) with your showing availability — leads pick a slot, it lands on your calendar, confirmations send automatically</li><li><strong>AI-drafted confirmations and reminders:</strong> the night-before reminder with parking details and your cell number, drafted once, sent every time</li></ul><div class="discovery"><p>💡 <strong>Protect your power hours</strong></p><p>Block your prospecting and prep time in the calendar tool so leads can only book showings in the windows you choose. The system should protect your schedule, not surrender it.</p></div>`,
          question: {
            text: "What's the main payoff of a booking link plus automated reminders?",
            options: [
              "It eliminates scheduling ping-pong and no-shows drop thanks to automatic reminders",
              "It makes you look busier than you are",
              "It removes the need to ever confirm appointments",
            ],
            correctIndex: 0,
            explanation:
              "Leads book instantly instead of trading emails for a day, and the automated reminder — with parking info and your number — measurably cuts no-shows.",
          },
        },
        {
          html: `<h3>CRM notes that write themselves</h3><p>The best agents' superpower is memory: the client's dog's name, the school district worry, the reason they passed on the last house. That memory lives — or dies — in your CRM notes.</p><p>The AI workflow that makes it effortless:</p><ul><li><strong>Voice-dump after every call or showing:</strong> talk for 60 seconds into your phone — messy is fine</li><li><strong>AI structures it:</strong> "Turn this into a CRM note: contact summary, preferences mentioned, objections, next action with date"</li><li><strong>Paste into the CRM</strong> — 60 seconds of talking becomes a note your future self will thank you for</li></ul><p>Do this consistently and every follow-up you send references real details — which is exactly what makes clients say <em>"my agent really listens."</em></p>`,
          question: {
            text: "What's the fastest reliable way to keep rich CRM notes using AI?",
            options: [
              "Type detailed notes manually at the end of each week from memory",
              "Voice-dump 60 seconds after each interaction and let AI structure it into a clean note",
              "Skip notes — good agents remember everything",
            ],
            correctIndex: 1,
            explanation:
              "Memory fades by end of day, let alone end of week. A 60-second voice dump captured immediately, structured by AI, preserves the details that make follow-ups feel personal.",
          },
        },
      ],
    },
    {
      title: "Buyer & Seller Consults",
      summary: "Walk into every consultation over-prepared — with AI-built agendas, market briefs, and objection prep",
      content: `<p>Consultations are where clients decide if you're the agent. AI can't sit in the meeting for you — but it can make you the most prepared person in the room, every single time.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I have a listing consultation tomorrow with homeowners selling a [property type] in [area]. They've lived there [X years], and mentioned they're moving because [reason]. Build my prep pack: (1) a 5-part meeting agenda, (2) the 8 questions I should ask to understand their real priorities, (3) the 5 objections sellers most commonly raise about pricing and commission — with a suggested response to each, (4) a one-paragraph explanation of the current market I can deliver in plain language. Keep it all conversational, not scripted.",
        note: "Rehearse the objection responses out loud once — AI gives you the words, but delivery is what wins the room.",
      },
      steps: [
        {
          html: `<h3>Preparation is the differentiator</h3><p>Two agents pitch the same seller. One shows up with a generic slideshow. The other opens with: <em>"I looked at the three homes that sold on your street this year, and here's what they tell us about yours."</em> Who gets the listing?</p><p>AI compresses that preparation from hours to minutes:</p><ul><li><strong>Property homework:</strong> summarize the tax record, prior listing history, and neighborhood sales into a one-page brief</li><li><strong>Client homework:</strong> draft discovery questions tailored to what you already know — first-time buyer? Downsizing? Relocating on a deadline?</li><li><strong>Agenda:</strong> a clear 5-part meeting structure signals professionalism before you say a word</li></ul>`,
          question: {
            text: "What does AI actually change about consultation prep?",
            options: [
              "It attends the meeting so you don't have to",
              "It compresses hours of property, market, and client homework into minutes — so you're over-prepared every time",
              "It replaces the need to ask clients questions",
            ],
            correctIndex: 1,
            explanation:
              "The prepared agent wins the room. AI does the compression — briefs, agendas, tailored questions — so deep preparation becomes something you do for every consult, not just the big ones.",
          },
        },
        {
          html: `<h3>Objection rehearsal</h3><p>Every consult has predictable friction points: <em>"Another agent said they'd list it higher."</em> <em>"Why is your commission what it is?"</em> <em>"We want to wait until spring."</em></p><p>The AI move: rehearse before the meeting.</p><ul><li>Ask AI for the <strong>most common objections</strong> for your exact meeting type — then a calm, non-defensive response to each</li><li>Go further: <strong>role-play.</strong> "You're a skeptical seller who thinks their home is worth 10% more than the comps. I'll respond — push back on me."</li><li>Refine your answers until they sound like you on your best day</li></ul><div class="discovery"><p>💡 <strong>The overpricing conversation</strong></p><p>Ask AI to help you explain — with plain-language market logic — why overpricing costs sellers money: fewer early showings, stale-listing stigma, price cuts that signal weakness. This one rehearsed explanation wins more listings than any slideshow.</p></div>`,
          question: {
            text: "How does AI role-play sharpen your consultation skills?",
            options: [
              "It replaces the consult with a chatbot session for the client",
              "You practice against a skeptical simulated client until your responses are calm and natural",
              "It proves clients are always wrong to object",
            ],
            correctIndex: 1,
            explanation:
              "Rehearsing against AI pushback — the overpriced-home seller, the commission challenger — means the real meeting is never the first time you've handled the objection.",
          },
        },
        {
          html: `<h3>The follow-up that closes</h3><p>Most agents lose the listing <em>after</em> a great meeting — because the follow-up is a generic "great meeting you!" email three days later.</p><p>The AI-powered close:</p><ul><li><strong>Same-day recap:</strong> voice-dump the meeting highlights, have AI draft a recap email — what was discussed, what you'll do next, and the specific things <em>they</em> said that matter</li><li><strong>Their words, mirrored:</strong> "You mentioned the school timeline is the top priority — here's how we work around it" is worth ten brochures</li><li><strong>A clear next step with a date</strong> — always</li></ul><p>Verify every market figure and property fact before it goes out. The recap ships under your name and your license — AI drafts, you deliver.</p>`,
          question: {
            text: "What makes a post-consult follow-up actually win the client?",
            options: [
              "Sending it within the same day, mirroring their own priorities, with a dated next step",
              "Waiting three days so you don't seem desperate",
              "Attaching as many brochures as possible",
            ],
            correctIndex: 0,
            explanation:
              "Speed shows hunger, mirrored priorities show you listened, and a dated next step keeps momentum. AI makes this a 5-minute habit instead of a sometimes-thing.",
          },
        },
      ],
    },
    {
      title: "Listing Launch Kit",
      summary: "Turn one property into a full launch: description, photos plan, social posts, and email — in an hour",
      content: `<p>A listing launch used to take a full day of writing and coordination. With an AI launch kit, one set of property facts becomes the description, social campaign, email blast, and open house materials — in about an hour, at higher quality.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build a listing launch kit. Property facts: [address area, beds/baths, sq ft, lot, year built, 3-5 standout features, recent upgrades, neighborhood highlights]. Create: (1) an MLS description under 250 words — factual, vivid, fair-housing safe (describe the property, never the buyer), (2) three Instagram captions in different tones (elegant, energetic, storytelling) with hashtag suggestions, (3) a just-listed email to my database under 150 words, (4) an open house invitation text message under 60 words. Everything must only use facts I provided — flag anything you were tempted to assume.",
        note: "That last instruction — 'flag anything you assumed' — is your safety net against AI inventing granite countertops the home doesn't have.",
      },
      steps: [
        {
          html: `<h3>One input, many outputs</h3><p>The core insight of the launch kit: <strong>every marketing piece comes from the same property facts</strong>. So gather the facts once — thoroughly — and let AI adapt them to each channel:</p><ul><li><strong>MLS description:</strong> vivid but factual, under the word limit, leading with the strongest features</li><li><strong>Social posts:</strong> same facts, punchier voice, three tone options to match your brand</li><li><strong>Email blast:</strong> your database gets the story plus the showing details</li><li><strong>Open house materials:</strong> invitation texts, sign-in follow-ups, feature sheets</li></ul><p>The input quality rule: <strong>AI can only be as accurate as your fact sheet.</strong> Walk the property, note the real upgrades, and feed it specifics — "new roof 2024" beats "well maintained."</p>`,
          question: {
            text: "What determines the quality of an entire AI listing launch?",
            options: [
              "The number of exclamation points in the prompts",
              "The completeness and accuracy of the property fact sheet you feed AI",
              "Using a different AI tool for each marketing piece",
            ],
            correctIndex: 1,
            explanation:
              "Every output flows from the same input. A thorough, accurate fact sheet — real upgrades, real dates, real features — is the difference between vivid marketing and generic filler.",
          },
        },
        {
          html: `<h3>Descriptions that sell the feature, not the buyer</h3><p>Two rules make AI listing copy both effective and safe:</p><ul><li><strong>Feature → benefit:</strong> don't stop at "south-facing windows" — "south-facing windows fill the kitchen with afternoon light." Ask AI to convert every feature into the experience it creates</li><li><strong>Property, never people:</strong> fair-housing-safe copy describes the home. The moment copy describes who <em>should</em> live there — families, professionals, retirees — you're exposed. Instruct AI explicitly, and check every draft anyway</li></ul><div class="discovery"><p>💡 <strong>The hallucination check</strong></p><p>AI loves to embellish: it will invent "gleaming hardwood floors" from thin air. Add "only use facts I provided — flag anything you assumed" to every marketing prompt, then verify the draft against your fact sheet line by line.</p></div>`,
          question: {
            text: "AI's draft mentions \"stunning hardwood floors\" — but you never told it about the flooring. What happened, and what do you do?",
            options: [
              "AI probably looked up the property records — trust it",
              "AI embellished beyond your facts; cut or verify the claim before publishing",
              "Leave it in — buyers expect some exaggeration",
            ],
            correctIndex: 1,
            explanation:
              "AI fills gaps with plausible-sounding invention. Every claim in published marketing must trace back to a fact you verified — misrepresentation complaints name the agent, not the AI.",
          },
        },
        {
          html: `<h3>The launch sequence</h3><p>Materials are half the kit; timing is the other half. The AI-drafted launch calendar:</p><ul><li><strong>Day -2:</strong> "coming soon" teaser post (where your MLS rules allow it)</li><li><strong>Day 0:</strong> MLS live, just-listed email to your database, launch posts on every channel</li><li><strong>Day 2-3:</strong> feature-highlight post — the best single room or upgrade gets its own moment</li><li><strong>Day 5-6:</strong> open house invitations by email and text</li><li><strong>Day 7+:</strong> open house recap post, plus AI-drafted personal follow-ups to every sign-in</li></ul><p>Ask AI to generate this calendar with every post pre-drafted, and a week of marketing is done in one sitting. You've completed First Steps — next unit, we scale the system.</p>`,
          question: {
            text: "Why draft the entire launch sequence in one AI session instead of writing posts day by day?",
            options: [
              "Posts written in advance perform better in social algorithms",
              "One focused session produces a coordinated week of marketing — and daily execution becomes copy-paste instead of creative work",
              "AI is only available at certain times of day",
            ],
            correctIndex: 1,
            explanation:
              "Batching the creative work keeps the story coherent across channels and turns launch week into simple execution — which means it actually happens, even during a busy week.",
          },
        },
      ],
    },
  ],
};
