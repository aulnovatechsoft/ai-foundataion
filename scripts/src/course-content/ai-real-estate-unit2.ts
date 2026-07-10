import type { UnitSeed } from "./types";

export const AI_REAL_ESTATE_UNIT_2: UnitSeed = {
  title: "Scaling Your System",
  lessons: [
    {
      title: "Your Marketing Engine",
      summary: "Build a repeatable content system: a month of posts, videos, and emails from one planning session",
      content: `<p>Random posting doesn't build a brand — a system does. This lesson turns AI into your marketing department: a month of content planned in one sitting, batched in your voice, and consistent enough that leads start coming to you.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my real estate marketing director. My market: [area]. My niche: [e.g. first-time buyers, downsizers, relocations]. My brand voice: [e.g. warm, straight-talking, data-friendly]. Build a 4-week content calendar: 3 posts per week across these pillars — local market education, neighborhood spotlights, client stories/behind-the-scenes, and practical buyer/seller tips. For each post: hook line, 3-4 bullet outline, suggested format (carousel, reel script, photo caption), and a call to action. Mark which two posts each week are worth turning into short videos.",
        note: "Run this once a month, batch-draft the posts in a second session, and your marketing runs on 2 focused hours instead of daily scrambling.",
      },
      steps: [
        {
          html: `<h3>From random acts of marketing to a system</h3><p>Most agents market in bursts: three posts one week, silence for a month. The problem isn't discipline — it's that <em>deciding what to post</em> is the exhausting part.</p><p>AI removes the deciding:</p><ul><li><strong>Content pillars:</strong> pick 3-4 recurring themes — market education, neighborhood spotlights, client stories, practical tips — so every post has a home</li><li><strong>Monthly calendar session:</strong> one AI session plans the month; one more batch-drafts it</li><li><strong>Consistency beats brilliance:</strong> the agent who shows up 3× a week for a year owns the neighborhood feed — the algorithm and the audience both reward rhythm</li></ul>`,
          question: {
            text: "What's the real bottleneck AI removes from an agent's marketing?",
            options: [
              "The cost of running ads",
              "The daily 'what do I even post?' decision — replaced by a pillar-based monthly plan",
              "The need to ever appear in your own content",
            ],
            correctIndex: 1,
            explanation:
              "Deciding is the exhausting part. With pillars and a monthly AI planning session, daily marketing becomes execution — and consistency is what compounds into a local brand.",
          },
        },
        {
          html: `<h3>Local expertise is your moat</h3><p>Generic content ("5 tips for home buyers!") is everywhere and builds nothing. What no out-of-town competitor can copy is <strong>your ground truth</strong>:</p><ul><li>Feed AI your local knowledge: "The coffee shop on Main just expanded, the new elementary school opens in fall, inventory in [neighborhood] is the tightest I've seen in 3 years" — and let it craft the post</li><li><strong>Market updates in plain language:</strong> paste the month's local stats and ask for a 150-word explanation a normal human enjoys reading</li><li><strong>Neighborhood spotlights:</strong> a monthly series that makes you <em>the</em> name attached to your farm area</li></ul><div class="discovery"><p>💡 <strong>The video multiplier</strong></p><p>Ask AI to turn any written post into a 30-second video script with hook, three beats, and a closing line. Reading a teleprompter script you approved takes one take — and video reach is routinely 3-5× a photo post.</p></div>`,
          question: {
            text: "What makes an agent's content impossible for competitors to copy?",
            options: [
              "Using the newest AI model before they do",
              "Ground-truth local knowledge fed into the drafts — things only someone working that neighborhood knows",
              "Posting more frequently than anyone else, regardless of content",
            ],
            correctIndex: 1,
            explanation:
              "AI gives everyone the same writing ability — your unfair advantage is the input: real local observations, real market feel, real client stories only you have.",
          },
        },
        {
          html: `<h3>The database is the goldmine</h3><p>New followers are nice; your <strong>existing database</strong> is where the deals are. Past clients and warm leads generate repeat and referral business — if you stay usefully in touch:</p><ul><li><strong>Monthly value email:</strong> AI drafts a short newsletter from your content pillars — market pulse, one neighborhood note, one practical tip. Ten minutes to personalize and send</li><li><strong>Anniversary and milestone touches:</strong> home purchase anniversaries, birthdays — AI drafts warm, non-salesy notes that keep you the obvious answer to "know a good agent?"</li><li><strong>Re-engagement:</strong> for leads gone quiet, ask AI for a no-pressure check-in referencing their last known situation from your CRM notes</li></ul><p>Marketing engine complete: pillars, calendar, local moat, database rhythm. Every piece verified by you before it ships — your name is on all of it.</p>`,
          question: {
            text: "Why does the monthly database email often out-earn chasing new followers?",
            options: [
              "Email is cheaper than social media ads",
              "Past clients and warm leads drive repeat and referral deals — staying usefully in touch keeps you their default agent",
              "Databases grow automatically without any effort",
            ],
            correctIndex: 1,
            explanation:
              "The highest-ROI marketing audience already knows you. A consistent, genuinely useful monthly touch keeps you top of mind for the moment they — or their friends — need an agent.",
          },
        },
      ],
    },
    {
      title: "Market Intelligence and CMA Narratives",
      summary: "Turn raw comps and market data into pricing stories clients actually understand — and believe",
      content: `<p>A CMA spreadsheet convinces nobody. A clear pricing story does. This lesson uses AI to turn comps and market data into plain-language narratives that win pricing conversations — with every number verified by you.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me build a CMA narrative. Subject property: [beds/baths, sq ft, condition, standout features]. Comparables I've selected: [for each — address area, sale price, sq ft, days on market, condition notes, and how it differs from subject]. Current local conditions: [months of inventory, median days on market, list-to-sale ratio]. Write: (1) a plain-language pricing story for the sellers that walks from the comps to my recommended range of [range], (2) an explanation of how each comp adjusts up or down versus their home, (3) a gentle but honest paragraph on what happens to overpriced listings in this market. Conversational tone, no jargon.",
        note: "You pick the comps and the range — AI only narrates the reasoning. That division of labor is what keeps the CMA professionally yours.",
      },
      steps: [
        {
          html: `<h3>The narrative gap</h3><p>Here's the strange truth about CMAs: the analysis rarely loses the listing — <strong>the explanation does</strong>. Sellers stare at a grid of comps and adjustments, don't really follow it, and default to the agent who quoted the highest number.</p><p>AI closes the gap:</p><ul><li><strong>You do the analysis:</strong> select the comps, judge the adjustments, set the range — that's licensed judgment and local expertise</li><li><strong>AI does the translation:</strong> "Explain to a homeowner, in plain language, how these three sales point to this range"</li><li><strong>The story lands:</strong> "The house on Elm sold in 9 days because it was priced with the market, not ahead of it" persuades where a spreadsheet cell never will</li></ul>`,
          question: {
            text: "In an AI-assisted CMA, what stays firmly in the agent's hands?",
            options: [
              "Only the printing and binding",
              "Comp selection, adjustments, and the pricing recommendation — AI just narrates the reasoning clearly",
              "Nothing — AI handles the full valuation end to end",
            ],
            correctIndex: 1,
            explanation:
              "Valuation judgment is licensed professional work built on local knowledge AI doesn't have. AI's job is translation — turning your analysis into a story sellers actually follow.",
          },
        },
        {
          html: `<h3>Reading the market faster</h3><p>Beyond individual CMAs, AI is a tireless market analyst — if you feed it real data:</p><ul><li><strong>Paste monthly stats</strong> (inventory, days on market, list-to-sale ratio, price per sq ft trends) and ask: "What are the three headlines, and what do they mean for buyers vs. sellers right now?"</li><li><strong>Trend translation:</strong> "Months of inventory moved from 1.8 to 2.6 — explain what that shift means in plain language"</li><li><strong>Hyperlocal contrast:</strong> "The county is cooling but my zip code isn't — help me explain the divergence to clients"</li></ul><div class="discovery"><p>💡 <strong>Data in, never data out</strong></p><p>Never ask AI what your market is doing — it doesn't know, and it will answer anyway with confident, outdated, or invented numbers. You bring the data; AI brings the explanation. Always in that order.</p></div>`,
          question: {
            text: "Why should you paste market data INTO AI instead of asking AI for market numbers?",
            options: [
              "Pasting data is faster to type",
              "AI doesn't have current local data and will confidently invent plausible numbers — it should explain your verified data, not source it",
              "AI charges extra for data lookups",
            ],
            correctIndex: 1,
            explanation:
              "AI's market 'knowledge' is stale or hallucinated — dangerous in a pricing conversation. Its real skill is translating the verified numbers you provide into client-ready insight.",
          },
        },
        {
          html: `<h3>The pricing conversation, rehearsed</h3><p>Armed with the narrative, prepare for the hard part — the seller who wants 10% more:</p><ul><li><strong>Role-play it:</strong> "You're a seller convinced your home is worth $X because of your renovation. Push back on my pricing logic — hard." Practice until your responses stay warm and factual</li><li><strong>The cost-of-overpricing story:</strong> have AI help you narrate the sequence — fewer first-week showings, the stale-listing question ('what's wrong with it?'), the price cut that signals weakness, the below-market final sale</li><li><strong>The empathy layer:</strong> ask AI to rewrite your key points so they honor the seller's emotional attachment while keeping the math honest</li></ul><p>Verify every number in every narrative against your MLS data before presenting — the analysis is yours, the license is yours, and so is the trust you're building.</p>`,
          question: {
            text: "A seller insists on listing 10% above your CMA range. What's the AI-prepared response built on?",
            options: [
              "Agreeing to their price to win the listing, then cutting later",
              "A rehearsed, empathetic narrative of what overpricing actually costs — fewer showings, stale-listing stigma, weaker final sale",
              "Showing them the raw spreadsheet again, but slower",
            ],
            correctIndex: 1,
            explanation:
              "The overpricing conversation is won with a clear, kind, rehearsed story about consequences — not by repeating the data louder or surrendering to a doomed price.",
          },
        },
      ],
    },
    {
      title: "Offers & Negotiation Support",
      summary: "Prepare offers, decode terms, and rehearse negotiations with AI — while you stay the negotiator",
      content: `<p>Negotiation is the most human part of the deal — and the part where preparation pays most. AI helps you compare offers clearly, anticipate the other side, and rehearse the hard conversations before they happen.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "My sellers received 3 offers on their home listed at [price]. Offer A: [price, financing type, down payment, contingencies, closing timeline, extras]. Offer B: [same details]. Offer C: [same details]. My sellers' priorities: [e.g. certainty of closing, fastest timeline, highest net]. Build: (1) a side-by-side comparison table highlighting the real differences, (2) a plain-language summary of each offer's strengths and risks given their priorities, (3) five clarifying questions I should ask each buyer's agent before my clients decide. Do NOT recommend which offer to take — that decision belongs to my clients with my counsel.",
        note: "The 'do not recommend' instruction matters: AI organizes the decision, but the advice — and the fiduciary duty — is yours.",
      },
      steps: [
        {
          html: `<h3>Offers, decoded</h3><p>Multiple offers are a great problem that turns into a real one at 9pm when three contracts hit your inbox and your sellers want answers <em>now</em>.</p><p>The AI workflow:</p><ul><li><strong>Structured comparison:</strong> feed AI each offer's terms and get a clean side-by-side — price, financing strength, contingencies, timeline, extras</li><li><strong>Risk translation:</strong> "Explain in plain language what this appraisal gap clause means for my sellers if the appraisal comes in low"</li><li><strong>The net sheet story:</strong> highest price isn't always highest net or highest certainty — ask AI to narrate the tradeoffs against your clients' stated priorities</li></ul><p>The boundary: AI <em>organizes</em> the decision. The recommendation — and the fiduciary duty behind it — is yours and your clients'.</p>`,
          question: {
            text: "Three offers arrive at once. What's AI's proper role in the response?",
            options: [
              "Pick the winning offer so nobody has to decide",
              "Build the clear comparison and translate the risks — while the recommendation stays with you and your clients",
              "Auto-reply to all three buyer agents with counters",
            ],
            correctIndex: 1,
            explanation:
              "AI turns contract chaos into a clear decision framework fast. But weighing offers against client interests is fiduciary work — that judgment is what your clients hired.",
          },
        },
        {
          html: `<h3>Think like the other side</h3><p>Great negotiators prepare by inhabiting the other side's position. AI makes that a 10-minute exercise:</p><ul><li><strong>Position analysis:</strong> "The buyer waived inspection but asked for a 60-day close and a leaseback. What does this combination suggest about their situation and constraints?"</li><li><strong>Counter anticipation:</strong> "If we counter at [price] with these terms, what are the three most likely responses, and how should I prepare for each?"</li><li><strong>Role-play the call:</strong> "You're the listing agent defending an inflated price on a stale listing. I represent the buyer — push back on my arguments"</li></ul><div class="discovery"><p>💡 <strong>The emotion firewall</strong></p><p>When a deal gets heated, draft your response with AI first: "Here's what I want to say — make it firm but professional and remove anything that escalates." The 10 minutes between feeling and sending has saved a thousand deals.</p></div>`,
          question: {
            text: "A tense negotiation email has you fuming. What's the AI-powered move?",
            options: [
              "Send your first draft while the energy is authentic",
              "Have AI rewrite your response to be firm but de-escalating — then send after a cool-down read",
              "Forward the offending email to your clients with commentary",
            ],
            correctIndex: 1,
            explanation:
              "Deals die from escalation, not firmness. AI as your emotion firewall — keeping the substance, stripping the heat — protects the transaction and your reputation.",
          },
        },
        {
          html: `<h3>Know your limits — and use them</h3><p>Two professional boundaries keep AI negotiation support safe:</p><ul><li><strong>Contract language is licensed territory:</strong> AI can <em>explain</em> what a standard clause does in plain terms, but drafting or modifying contract language belongs to the approved forms, your broker, and — when it's non-standard — a real estate attorney. "AI wrote the addendum" is not a defense</li><li><strong>Confidentiality in prompts:</strong> negotiating positions, client motivations, and financial details are confidential. Anonymize before prompting: "a buyer" not the client's name; "$X" not the actual pre-approval amount when it isn't yours to share</li></ul><p>Used this way, AI makes you the calmest, best-prepared person in every negotiation — which, as any veteran will tell you, is who usually wins.</p>`,
          question: {
            text: "The buyer wants a non-standard leaseback clause. AI offers to draft it. What's correct?",
            options: [
              "Use AI's draft — modern models know contract law",
              "Use approved forms, your broker, or an attorney for the language; AI may only help explain terms in plain language",
              "Copy a clause from an old deal and have AI update the names",
            ],
            correctIndex: 1,
            explanation:
              "Drafting contract language is licensed and liability-heavy work. AI explains; approved forms, brokers, and attorneys draft. That line protects your clients and your license.",
          },
        },
      ],
    },
    {
      title: "Transaction Coordination and After-Close Systems",
      summary: "Run flawless contract-to-close checklists and turn every closing into years of referrals",
      content: `<p>The deal isn't done at 'offer accepted' — and the relationship isn't done at closing. This final lesson builds two systems: an AI-managed path from contract to close, and an after-close rhythm that turns every client into a referral engine.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build my contract-to-close system for a [purchase/sale] closing on [date], with these milestone dates: [inspection deadline, appraisal, financing contingency, final walkthrough]. Create: (1) a master checklist ordered by date with who owns each item (me, client, lender, title, other agent), (2) a weekly plain-language update email template for my clients ('here's where we are, here's what's next'), (3) drafts of the milestone emails — inspection scheduled, appraisal in, clear to close, walkthrough reminder, closing day details. Then add an after-close plan: day-1 thank you, week-1 check-in, month-1 'how's the house', and the 1-year anniversary note.",
        note: "Load the checklist dates into your calendar the moment escrow opens — the system only protects you if the reminders actually fire.",
      },
      steps: [
        {
          html: `<h3>Contract to close, systematized</h3><p>Between accepted offer and closing table live 40+ tasks, five parties, and a dozen deadlines — and one missed date can cost the deal. This is pure systems work, which makes it perfect AI territory:</p><ul><li><strong>The master checklist:</strong> feed AI the contract's key dates and get a day-by-day task list with owners — you, client, lender, title, co-op agent</li><li><strong>Deadline math:</strong> "Inspection contingency is 10 days from acceptance on [date] — list every date I need on my calendar, including the day-before reminders"</li><li><strong>Party-specific nudges:</strong> AI drafts the polite-but-firm check-in to the lender, the document reminder to the client, the status request to title</li></ul>`,
          question: {
            text: "Why is contract-to-close coordination such a strong fit for AI support?",
            options: [
              "Because closings no longer require human attention",
              "It's structured, deadline-driven systems work — checklists, dates, and reminder drafts AI generates reliably from the contract terms",
              "Because AI can legally sign closing documents",
            ],
            correctIndex: 1,
            explanation:
              "Dozens of tasks, hard deadlines, five parties — it's exactly the structured coordination AI systematizes well, with you supervising and handling the judgment calls.",
          },
        },
        {
          html: `<h3>The anxiety-killing update</h3><p>Ask past clients what they remember about their transaction and few mention the price — they remember <strong>how informed they felt</strong>. Silence between milestones is where client anxiety (and 9pm panic calls) breeds.</p><p>The fix costs five minutes a week:</p><ul><li><strong>The Friday update:</strong> AI drafts a plain-language status email — what happened this week, what's next, what (if anything) we need from you</li><li><strong>Milestone translations:</strong> "Explain 'clear to close' to a first-time buyer in two warm sentences"</li><li><strong>Proactive bad news:</strong> when the appraisal comes in low, AI helps you draft the call-first talking points and the follow-up email — honest, calm, options-forward</li></ul><div class="discovery"><p>💡 <strong>Informed clients refer</strong></p><p>The weekly update isn't admin — it's marketing. "They kept us informed the whole way" is the exact sentence that shows up in five-star reviews and referral introductions.</p></div>`,
          question: {
            text: "What do transaction clients actually remember — and refer on — most?",
            options: [
              "The font on the closing documents",
              "How informed and cared-for they felt between milestones",
              "The exact number of days escrow took",
            ],
            correctIndex: 1,
            explanation:
              "Communication is the experience. A five-minute AI-drafted weekly update eliminates anxious silence — and 'they kept us informed' becomes the referral line.",
          },
        },
        {
          html: `<h3>After the close: the referral engine</h3><p>The average homeowner knows their next agent — statistically, it's whoever stayed in touch. Most agents vanish after closing day; your AI system won't let you:</p><ul><li><strong>The touch calendar:</strong> day-1 thank you, week-1 check-in, month-1 "how's the house settling," 1-year home anniversary — all drafted in advance, personalized in minutes</li><li><strong>Useful, not salesy:</strong> AI drafts the "property tax appeal season is coming" note, the "your home's market snapshot, one year in" email — value that earns the inbox space</li><li><strong>The review and referral ask:</strong> timed for the emotional peak (week one, boxes unpacked), drafted warm and specific: "It was an honor helping you land on Maple Street"</li></ul><p>That's the complete system: leads answered in minutes, consults over-prepared, listings launched in an hour, a marketing engine that compounds, negotiations rehearsed, closings flawless, and clients who refer for years. AI runs the machinery — you provide the judgment, the license, and the relationships. Congratulations on completing AI-Powered Real Estate!</p>`,
          question: {
            text: "What's the core principle of the after-close system?",
            options: [
              "Contact clients only when you need a referral",
              "Scheduled, genuinely useful touches keep you their agent for life — and referrals follow naturally",
              "One thank-you card covers the relationship forever",
            ],
            correctIndex: 1,
            explanation:
              "Referrals go to whoever stayed usefully in touch. An AI-drafted touch calendar makes 'agent for life' a system that runs — not a good intention that fades by spring.",
          },
        },
      ],
    },
  ],
};
