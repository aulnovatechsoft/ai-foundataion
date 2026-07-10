import type { UnitSeed } from "./types";

export const PERSONAL_FINANCE_UNIT_3: UnitSeed = {
  title: "Long-Term Thinking & Financial Confidence",
  lessons: [
    {
      title: "Learning Investment Concepts",
      summary: "Use AI as a patient tutor to finally understand investing — at your level, jargon-free",
      content: `<p>Investing feels gated behind jargon: index funds, compounding, diversification, risk tolerance. AI is the patient tutor that explains each concept at exactly your level — and connects it to your situation.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm a complete beginner to investing. Explain these concepts to me one at a time, in plain language with everyday analogies: compounding, index funds, diversification, and risk tolerance. After each one, ask me a quick question to check I understood before moving to the next.",
        note: "Ask it to quiz you — explaining a concept back in your own words is the fastest way to make it stick.",
      },
      steps: [
        {
          html: `<h3>Why investing feels harder than it is</h3><p>Most people delay investing for years — not because the core ideas are hard, but because the <em>language</em> is intimidating. Every article assumes you already know what an index fund is. Every explanation of compounding uses three other terms you don't know yet.</p><p>AI removes this barrier completely. It can explain any concept:</p><ul><li><strong>At your level</strong> — "explain like I'm new to this" actually works</li><li><strong>With analogies from your life</strong> — cooking, sports, whatever clicks for you</li><li><strong>Patiently</strong> — you can ask the same thing five different ways without embarrassment</li></ul><p>The core ideas of long-term investing fit on a notecard. AI helps you truly own them.</p>`,
          question: {
            text: "What's the main barrier that keeps most beginners away from investing?",
            options: [
              "The math is too advanced for most people",
              "Intimidating jargon that explanations assume you already know",
              "Investing is only available to wealthy people",
            ],
            correctIndex: 1,
            explanation:
              "The concepts are simple; the vocabulary is the gatekeeper. AI translates jargon at your level, which removes the main reason people delay for years.",
          },
        },
        {
          html: `<h3>The notecard concepts</h3><p>Ask AI to teach you these four, one at a time:</p><ul><li><strong>Compounding:</strong> returns earning their own returns. Small amounts + long time = surprisingly large outcomes. Time in the market matters more than timing the market.</li><li><strong>Index funds:</strong> instead of picking winners, own a small slice of the whole market at very low cost.</li><li><strong>Diversification:</strong> don't bet everything on one company, industry, or country — spread the risk.</li><li><strong>Risk tolerance:</strong> how much volatility you can endure <em>without panic-selling</em> — the honest input that shapes everything else.</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Ask AI: "Show me what [amount] per month becomes over 10, 20, and 30 years at a modest average return." Seeing compounding applied to your own numbers is usually the moment investing stops being abstract.</p></div>`,
          question: {
            text: "What does compounding mean?",
            options: [
              "Buying more stocks whenever prices fall",
              "Your returns start earning their own returns over time",
              "Splitting money across many different accounts",
            ],
            correctIndex: 1,
            explanation:
              "Compounding is growth on growth — which is why starting early with modest amounts often beats starting late with large ones.",
          },
        },
        {
          html: `<h3>The boundary that matters</h3><p>Here's the critical distinction for using AI with investing:</p><ul><li><strong>AI is excellent for:</strong> explaining concepts, defining terms, illustrating scenarios, helping you understand what questions to ask</li><li><strong>AI is not:</strong> a licensed financial advisor. It doesn't know today's market, your full situation, or your local tax rules — and specific "buy this" advice deserves a professional or your own verified research</li></ul><p>Used this way, AI gives you something arguably more valuable than stock tips: <strong>literacy</strong>. When you understand the concepts, you can evaluate any advice you receive — instead of following it blindly.</p>`,
          question: {
            text: "What's the right role for AI in your investing journey?",
            options: [
              "Telling you exactly which stocks to buy this week",
              "Building your financial literacy so you can evaluate any advice you receive",
              "Replacing all professional financial guidance permanently",
            ],
            correctIndex: 1,
            explanation:
              "AI's superpower here is education, not prediction. Concept fluency lets you judge advice critically — the foundation of every confident investor.",
          },
        },
      ],
    },
    {
      title: "Scenario Planning",
      summary: "Model big life decisions with AI before you make them — job changes, moves, major purchases",
      content: `<p>"What would happen if…?" is the most powerful question in personal finance. AI lets you run the scenario — job change, big move, major purchase — before real money is on the line.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm considering: [describe the decision — e.g. changing jobs, moving cities, a major purchase]. My current numbers: income [amount], monthly expenses [amount], savings [amount]. Model this scenario for me: best case, realistic case, and worst case over the next 12 months. What would each case do to my savings? What early warning signs should I watch for? What would make this clearly safe vs. clearly risky?",
        note: "Run the same scenario again with one variable changed — that's how you find which assumption your decision really depends on.",
      },
      steps: [
        {
          html: `<h3>Rehearsing the future</h3><p>Big financial decisions are scary because they feel irreversible and unknowable: <em>Should I take the lower-paying job I'd love? Can I afford to move? What if I take six months off?</em></p><p>Scenario planning replaces vague dread with concrete numbers. Give AI your current financial snapshot — income, expenses, savings — and describe the change you're considering. Then ask for three versions:</p><ul><li><strong>Best case:</strong> everything goes to plan</li><li><strong>Realistic case:</strong> normal friction and surprises</li><li><strong>Worst case:</strong> the setback happens — how long until it hurts, and what's the recovery path?</li></ul><p>Decisions made against three modeled outcomes are calmer and better than decisions made against a single imagined catastrophe.</p>`,
          question: {
            text: "Why model best, realistic, AND worst cases instead of just one prediction?",
            options: [
              "Three answers look more thorough than one",
              "It replaces vague dread with a concrete range, including how bad 'bad' really is",
              "The worst case is always what actually happens",
            ],
            correctIndex: 1,
            explanation:
              "Fear thrives on vagueness. Seeing the actual range — including a survivable, planned-for worst case — turns anxiety into information.",
          },
        },
        {
          html: `<h3>Finding the assumption that matters</h3><p>Every scenario rests on assumptions: your rent stays stable, the new salary is what was promised, you find work within three months. Most assumptions barely matter. Usually <strong>one or two carry the whole decision</strong>.</p><p>Find them by asking AI to vary one input at a time: <em>"Re-run the scenario if it takes 6 months instead of 3 to find clients."</em> <em>"What if the moving costs are double the estimate?"</em></p><p>When a small change in one assumption flips the outcome, you've found the load-bearing assumption — and now you know exactly what to research, negotiate, or buffer before deciding.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Ask AI directly: "Which assumption in this plan, if wrong, would change the decision?" This one question is most of what professional analysts do.</p></div>`,
          question: {
            text: "You change one assumption slightly and the scenario flips from 'safe' to 'risky'. What have you found?",
            options: [
              "Proof the decision is impossible to make",
              "The load-bearing assumption you should verify or buffer before deciding",
              "A reason to stop using scenario planning",
            ],
            correctIndex: 1,
            explanation:
              "That sensitivity is gold: it tells you precisely where to focus your research, negotiation, or safety margin before committing.",
          },
        },
        {
          html: `<h3>From scenario to safeguards</h3><p>The output of scenario planning isn't just a yes/no — it's a <strong>decision with built-in safeguards</strong>:</p><ul><li><strong>Early warning signs:</strong> "What should I watch in the first 3 months that tells me I'm heading toward the worst case?"</li><li><strong>Tripwires:</strong> "At what savings level should I activate plan B?"</li><li><strong>Plan B itself:</strong> designed now, calmly — not improvised later in a panic</li></ul><p>This is how confident people make big moves: not by being fearless, but by having rehearsed the failure modes and knowing the exits. In the final lesson, you'll assemble everything from this course into a personal system for calm, confident money decisions.</p>`,
          question: {
            text: "What does a well-planned scenario give you besides a yes/no answer?",
            options: [
              "A guarantee the plan will succeed",
              "Early warning signs, tripwires, and a pre-designed plan B",
              "Permission to stop monitoring your finances",
            ],
            correctIndex: 1,
            explanation:
              "Safeguards designed in advance are what make bold moves survivable — you'll spot trouble early and already know the response.",
          },
        },
      ],
    },
    {
      title: "Confident Decision-Making",
      summary: "Assemble your personal AI-powered system for calm, confident money decisions",
      content: `<p>You've built every piece: clarity, budgets, comparisons, debt strategy, savings, investing literacy, and scenario planning. This lesson assembles them into one repeatable system — your financial operating rhythm.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me design a monthly 30-minute 'money check-in' routine using AI. It should cover: reviewing last month's spending vs. budget, checking progress on savings and debt goals, flagging anything unusual, and one question to reflect on. Give me a reusable prompt template I can paste each month with my updated numbers.",
        note: "Save the template it gives you. A recurring 30-minute ritual is worth more than any single financial insight.",
      },
      steps: [
        {
          html: `<h3>The system, assembled</h3><p>Look at what you've built across this course:</p><ul><li><strong>Clarity</strong> — organized expenses, a structured snapshot, jargon translated (Unit 1)</li><li><strong>A living budget</strong> — built from your real life, improved monthly (Unit 1)</li><li><strong>Decision tools</strong> — objective comparisons, debt strategy, resilient savings plans (Unit 2)</li><li><strong>A long-term lens</strong> — investing literacy and scenario planning (Unit 3)</li></ul><p>Individually, each is useful. Together they form something bigger: a <strong>system</strong> where clarity feeds decisions, decisions feed plans, and plans get checked against reality — with AI handling the heavy structural work at every step.</p>`,
          question: {
            text: "What turns these individual skills into a system?",
            options: [
              "Using the most expensive AI model available",
              "Connecting them in a loop: clarity feeds decisions, decisions feed plans, plans get reviewed",
              "Doing all of them perfectly on the first try",
            ],
            correctIndex: 1,
            explanation:
              "A system is skills connected in a repeating loop. Each monthly cycle compounds: clearer data → better decisions → better plans → better data.",
          },
        },
        {
          html: `<h3>The monthly check-in</h3><p>The whole system runs on one ritual: a <strong>30-minute monthly money check-in</strong> with AI as your analyst.</p><ul><li><strong>Minutes 1–10:</strong> paste last month's numbers, ask for spending vs. budget and anything unusual</li><li><strong>Minutes 10–20:</strong> review progress on savings and debt goals; adjust for what changed in your life</li><li><strong>Minutes 20–30:</strong> one forward-looking question — an upcoming decision to model, a term to finally understand, next month's one improvement</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Keep it in the same AI conversation month over month (or paste in last month's summary). Context makes each review sharper than the last.</p></div><p>Thirty minutes a month is nothing — and it's more deliberate financial attention than most people give their money in a year.</p>`,
          question: {
            text: "What makes the monthly check-in so powerful despite taking only 30 minutes?",
            options: [
              "It's a consistent feedback loop — deliberate attention most people never give their money",
              "It removes the need for a budget entirely",
              "AI makes all the decisions during it",
            ],
            correctIndex: 0,
            explanation:
              "Consistency beats intensity. A small, regular, structured review compounds into financial control that sporadic bursts of effort never achieve.",
          },
        },
        {
          html: `<h3>Confidence, defined</h3><p>Financial confidence was never about knowing everything or never making mistakes. It's this:</p><ul><li>You can <strong>see your reality clearly</strong> — no fog, no dread</li><li>You have a <strong>process for any decision</strong> — organize, compare, model, decide</li><li>You know your plans <strong>bend instead of break</strong> — bad months and surprises are handled by design</li><li>You can <strong>evaluate any advice</strong> — because you understand the concepts underneath</li></ul><p>AI didn't replace your judgment anywhere in this course. It structured your thinking so your judgment had something solid to work on. That's the partnership: <strong>you decide, AI clarifies.</strong></p><p>Congratulations — you've completed Managing Personal Finances with AI. Your check-in ritual starts this month.</p>`,
          question: {
            text: "What is the AI's role in your financial life, as this course defines it?",
            options: [
              "Making your financial decisions so you don't have to",
              "Structuring your thinking and information so your judgment works on solid ground",
              "Predicting markets and guaranteeing outcomes",
            ],
            correctIndex: 1,
            explanation:
              "You decide, AI clarifies. It organizes, compares, models, and explains — and that structure is what turns anxious guessing into confident decision-making.",
          },
        },
      ],
    },
  ],
};
