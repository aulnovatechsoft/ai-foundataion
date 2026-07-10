import type { UnitSeed } from "./types";

export const AI_ACCOUNTANT_UNIT_3: UnitSeed = {
  title: "Strategic Value",
  lessons: [
    {
      title: "Forecasting & Scenario Modeling",
      summary: "Build faster forecasts and stress-test assumptions with AI — while owning every assumption yourself",
      content: `<p>Forecasting used to mean hours in spreadsheets for one scenario. With AI, you can model three scenarios, stress-test the assumptions, and translate it all into plain language — in a single afternoon.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here's monthly revenue and key expenses for the last 18 months for a client: [paste data]. Build a 12-month forecast in three scenarios: base case (current trends continue), upside (describe your assumption, e.g. new contract lands), downside (e.g. largest customer churns). For each scenario: monthly projections, the 3 assumptions that drive it most, and the early indicators that would tell us which scenario we're actually in. Present assumptions in a table I can review line by line.",
        note: "Review the assumptions table hardest — a forecast is only as honest as its least realistic assumption.",
      },
      steps: [
        {
          html: `<h3>Forecasting at AI speed</h3><p>The traditional bottleneck: building even one forecast means wrestling formulas, and nobody has time for alternatives. So decisions get made against a single guess.</p><p>AI removes the bottleneck:</p><ul><li>Paste historicals and get a structured base-case projection with the methodology explained</li><li>Ask for <strong>three scenarios</strong> — base, upside, downside — in the time one used to take</li><li>Have AI surface <em>which assumptions drive the model most</em>, so review effort goes where it matters</li></ul><p>You've seen this pattern in the variance lesson: AI does the structural heavy lifting, you supply the judgment about what's realistic.</p>`,
          question: {
            text: "What's the biggest practical change AI brings to forecasting?",
            options: [
              "Forecasts become guaranteed accurate",
              "Multiple scenarios become cheap enough to build for every decision",
              "Historical data is no longer needed",
            ],
            correctIndex: 1,
            explanation:
              "When scenarios cost minutes instead of days, decisions get made against a realistic range instead of a single hopeful guess.",
          },
        },
        {
          html: `<h3>Own the assumptions</h3><p>Here's where professional responsibility concentrates: <strong>a forecast is just assumptions wearing math</strong>. AI will happily project 15% growth forever if the trend line points that way — it doesn't know the market is saturating or the founder plans to slow down.</p><p>Your review targets the assumptions, not the arithmetic:</p><ul><li>Make AI list every assumption explicitly — growth rates, margins, seasonality, collection timing</li><li>Challenge each one against what you know: client plans, industry conditions, capacity limits</li><li>Ask the sensitivity question: <em>"Which single assumption, if wrong, changes the picture most?"</em></li></ul><div class="discovery"><p>💡 <strong>Early indicators</strong></p><p>Ask AI: "What should we watch monthly to know which scenario is unfolding?" A forecast with tripwires becomes a management tool instead of a document that goes stale in a drawer.</p></div>`,
          question: {
            text: "Where should your review effort concentrate in an AI-built forecast?",
            options: [
              "Rechecking the arithmetic in every cell",
              "The assumptions driving the model — their realism against what you know",
              "The color scheme of the charts",
            ],
            correctIndex: 1,
            explanation:
              "AI gets the math right; whether 15% growth is plausible is a judgment call only you and the client can make. Assumptions are where forecasts succeed or fail.",
          },
        },
        {
          html: `<h3>Stress-testing and cash flow</h3><p>Two high-value extensions once the base model exists:</p><ul><li><strong>Stress tests:</strong> "What happens to cash if receivables slow by 15 days? If the top customer leaves? If costs rise 8%?" — each takes one prompt, and each is exactly the question a lender or board will ask</li><li><strong>Cash flow timing:</strong> profit forecasts hide timing problems; ask AI to convert the P&L forecast into a monthly cash view with your collection and payment patterns</li></ul><p>Then translate: <em>"Explain this forecast to the owner in one page: what we expect, what could change it, what to watch."</em> That one-pager — not the spreadsheet — is the deliverable clients remember. It's also the bridge to the final lesson: advisory.</p>`,
          question: {
            text: "Why convert a profit forecast into a monthly cash flow view?",
            options: [
              "Cash views use smaller numbers that look better",
              "Profitable businesses can still hit cash crunches from timing — the cash view exposes them",
              "Regulators require every forecast in cash format",
            ],
            correctIndex: 1,
            explanation:
              "Profit and cash diverge on timing — receivables, payables, seasonality. The monthly cash view is where 'profitable but about to miss payroll' becomes visible in advance.",
          },
        },
      ],
    },
    {
      title: "AI-Driven Advisory",
      summary: "Assemble everything into an advisory practice — AI handles processing, you deliver insight",
      content: `<p>This is where the whole course lands: with AI handling processing, the hours you've reclaimed become advisory capacity — the interpretation, judgment, and trusted relationships that no AI can replace and every client will pay for.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my advisory prep assistant. Here's this month's data for a client: [paste financial summary, variances, and any forecast updates]. Build my quarterly advisory meeting pack: (1) three headlines in plain language — what management must know, (2) one risk that deserves attention with early-warning signs, (3) one opportunity worth exploring with a first step, (4) five smart questions I should ask the owner to understand what the numbers can't tell me. One page maximum.",
        note: "Point 4 is the secret weapon — the questions you ask in the meeting are where advisory value becomes visible to the client.",
      },
      steps: [
        {
          html: `<h3>The advisory shift</h3><p>Recall lesson one: your value isn't data processing — it's interpretation, judgment, and relationships. Everything in this course has been building the machinery for that shift:</p><ul><li><strong>Bookkeeping automation</strong> reclaimed the hours</li><li><strong>Document analysis and tax research</strong> compressed the technical work</li><li><strong>Communication drafting</strong> made every insight land clearly</li><li><strong>Variance analysis and forecasting</strong> generated the raw material for insight</li></ul><p>Advisory is where it converts to value: instead of telling clients what <em>happened</em> (compliance), you help them decide what to <em>do</em> (advisory). Clients pay compliance rates for the first and premium rates for the second.</p>`,
          question: {
            text: "What distinguishes advisory work from compliance work?",
            options: [
              "Advisory means telling clients what happened; compliance means what to do next",
              "Advisory helps clients decide what to do next; compliance reports what happened",
              "There's no real difference — it's a billing label",
            ],
            correctIndex: 1,
            explanation:
              "Compliance looks backward and reports; advisory looks forward and guides decisions. AI compresses the compliance work, freeing you for the premium-value direction.",
          },
        },
        {
          html: `<h3>The advisory prep system</h3><p>The recurring workflow that makes advisory scalable:</p><ul><li><strong>Before each client meeting,</strong> feed AI the month's financials, variances, and forecast updates</li><li><strong>Ask for the pack:</strong> three plain-language headlines, one risk with early warnings, one opportunity with a first step, and five questions to ask the owner</li><li><strong>You edit with what AI can't know:</strong> the industry shift you heard about, the owner's personal goals, the conversation from last quarter</li></ul><div class="discovery"><p>💡 <strong>Questions beat answers</strong></p><p>The five questions matter most. AI knows what the numbers say; your questions uncover what they can't — intentions, worries, plans. That conversation is where trust compounds.</p></div>`,
          question: {
            text: "In the advisory prep workflow, what's your irreplaceable contribution to the meeting pack?",
            options: [
              "Formatting the tables consistently",
              "Context AI can't know — industry shifts, the owner's goals, relationship history",
              "Converting the currency figures",
            ],
            correctIndex: 1,
            explanation:
              "AI assembles what's in the data. You add what isn't: market context, personal knowledge of the client, and the judgment about what matters most to this owner right now.",
          },
        },
        {
          html: `<h3>Your AI-augmented practice</h3><p>Step back and look at the operating model you've built across eight lessons:</p><ul><li><strong>Automated:</strong> categorization, matching, data entry — supervised by exception</li><li><strong>AI-assisted:</strong> documents, tax research, variances, forecasts, drafts — accelerated by AI, validated by you</li><li><strong>Human-only:</strong> sign-offs, difficult conversations, strategy, trust — yours, now with the time to do them well</li></ul><p>And the adoption path stays gradual: master one workflow, add the next, keep professional oversight throughout. That's how you avoid both failure modes — over-automation that creates liability, and under-adoption that leaves you competing on hours against firms competing on insight.</p><p>Congratulations — you've completed AI for Accountants. Your next client meeting is the place to put it to work.</p>`,
          question: {
            text: "What are the two failure modes this gradual AI adoption approach prevents?",
            options: [
              "Spending too little on software and hiring too many juniors",
              "Over-automation that creates liability, and under-adoption that forfeits efficiency",
              "Using more than one AI tool and using none",
            ],
            correctIndex: 1,
            explanation:
              "Build competence incrementally with oversight throughout: that's the middle path between breaking your workflow with reckless automation and falling behind firms that use AI well.",
          },
        },
      ],
    },
  ],
};
