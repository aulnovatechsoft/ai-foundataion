import type { UnitSeed } from "./types";

export const AI_ACCOUNTANT_UNIT_2: UnitSeed = {
  title: "Research & Communication",
  lessons: [
    {
      title: "Tax Research & Review",
      summary: "Accelerate tax research with AI — while keeping every citation verified and every conclusion yours",
      content: `<p>Tax research is the classic AI-assisted task: AI can survey rules, surface relevant provisions, and structure the question in minutes — but the conclusion, the citation check, and the sign-off are always yours.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Research this tax question: [describe your question — e.g. 'How is a home office deduction treated for a sole proprietor vs. an S-corp owner?']. Structure your answer as: (1) the general rule, (2) key conditions and exceptions, (3) what's ambiguous or fact-dependent, (4) the specific primary sources I should read to verify — with citations. Note anything where rules changed recently or vary by jurisdiction.",
        note: "Use a tool that cites sources, then actually open the primary sources. AI's answer is your research map, not your authority.",
      },
      steps: [
        {
          html: `<h3>What AI changes about research</h3><p>The slow part of tax research was never the reading — it was <strong>finding the right things to read</strong>. Which provision applies? What are the exceptions? Did anything change this year?</p><p>AI collapses that discovery phase:</p><ul><li>Describe the fact pattern in plain language and get the relevant concepts, provisions, and terminology in seconds</li><li>Ask for the exceptions and edge cases up front — the places where "it depends" lives</li><li>Get a structured map of what to verify, instead of starting from a blank search box</li></ul><p>What AI does <em>not</em> change: tax authority comes from primary sources — statutes, regulations, rulings — not from a chatbot's summary of them.</p>`,
          question: {
            text: "What part of tax research does AI genuinely accelerate?",
            options: [
              "The discovery phase — finding what's relevant to read and verify",
              "The authority phase — its answers can replace primary sources",
              "The sign-off phase — AI can take responsibility for the conclusion",
            ],
            correctIndex: 0,
            explanation:
              "AI is a discovery engine: it maps the terrain fast. Authority still lives in primary sources, and responsibility still lives with you.",
          },
        },
        {
          html: `<h3>The hallucination problem — and its fix</h3><p>AI's known weakness hits tax work hardest: it can <strong>invent plausible-sounding citations</strong> — a regulation section that doesn't exist, a case that says the opposite of what's claimed, a rule from three years ago presented as current.</p><p>The professional workflow neutralizes this:</p><ul><li><strong>Demand citations</strong>, then open every one you'll rely on</li><li><strong>Check currency:</strong> ask "did this change recently?" and verify against current-year sources</li><li><strong>Prefer research tools that link sources</strong> over pure chatbots for tax questions</li></ul><div class="discovery"><p>💡 <strong>The verification ratio</strong></p><p>AI turns 3 hours of research into 30 minutes of research plus 20 minutes of verification. The verification isn't overhead — it's the part that makes the speed professionally usable.</p></div>`,
          question: {
            text: "AI cites \"Regulation §1.280-4(b)\" supporting a client deduction. What do you do?",
            options: [
              "Cite it in your memo — AI citations are reliable",
              "Open and read the actual provision before relying on it — AI can fabricate citations",
              "Ask the same AI to confirm its own citation",
            ],
            correctIndex: 1,
            explanation:
              "Fabricated citations are AI's most dangerous failure mode in tax work. Every citation you rely on gets opened and read — asking AI to check itself just repeats the risk.",
          },
        },
        {
          html: `<h3>AI as your review partner</h3><p>Beyond research, AI shines in the <strong>review direction</strong> — checking work instead of creating it:</p><ul><li><em>"Here's my draft position memo. What counterarguments or missed exceptions should I address?"</em></li><li><em>"Review this list of deductions for a [client type]. What commonly-missed items should I consider? What looks aggressive?"</em></li><li><em>"Play the examiner: what would you challenge in this return summary?"</em></li></ul><p>This is AI as a skeptical second pair of eyes — cheap to consult, surprisingly good at spotting the gap in an argument. The final judgment call on every position remains exactly where the regulator expects it: with you.</p>`,
          question: {
            text: "What's a high-value 'review direction' use of AI in tax work?",
            options: [
              "Having AI file the return directly with the tax authority",
              "Asking AI to play examiner and challenge your draft position",
              "Letting AI decide which aggressive positions are worth the risk",
            ],
            correctIndex: 1,
            explanation:
              "AI as devil's advocate surfaces weak points and missed exceptions before a reviewer or examiner does — while risk decisions and sign-offs stay with you.",
          },
        },
      ],
    },
    {
      title: "Drafting Client Communication",
      summary: "Turn technical findings into clear client emails, memos, and explanations — in your voice",
      content: `<p>You understand the numbers. The client needs to understand them too. AI is exceptional at translating technical findings into clear, warm, client-ready communication — with you as editor-in-chief.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Draft a client email explaining this: [paste your technical finding — e.g. 'Q3 margin dropped 4 points, driven by a supplier price increase and one-time legal fees']. The client is [describe: e.g. a non-financial small business owner]. Requirements: plain language, no jargon, lead with what it means for their business, then the numbers, then 1-2 recommended next steps. Warm but professional tone. Keep it under 200 words. Here's an example of an email I've written so you can match my voice: [paste a sample].",
        note: "Pasting one of your own past emails as a style sample is the single biggest upgrade to AI drafting quality.",
      },
      steps: [
        {
          html: `<h3>The translation problem</h3><p>Accountants lose more client trust to <em>communication</em> than to competence. The finding is right, but the email reads like a technical memo: jargon, passive voice, the "so what" buried in paragraph four.</p><p>AI solves the translation:</p><ul><li><strong>Give it the technical fact</strong> and the audience: "non-financial business owner"</li><li><strong>Specify the structure:</strong> lead with what it means, then the numbers, then next steps</li><li><strong>Set the tone:</strong> warm, direct, no jargon — or formal, when the situation calls for it</li></ul><p>The result: the same expertise, finally landing the way you intended.</p>`,
          question: {
            text: "What's the most effective way to brief AI for a client email?",
            options: [
              "\"Write an email about the Q3 results\"",
              "Provide the finding, the audience, the structure, and the tone you want",
              "Paste the full trial balance and let AI decide what matters",
            ],
            correctIndex: 1,
            explanation:
              "Specific briefs produce usable drafts: what happened, who's reading, what order to present it in, and what tone to strike.",
          },
        },
        {
          html: `<h3>Your voice, not the robot's</h3><p>Generic AI drafts sound generic. Two fixes make drafts sound like <em>you</em>:</p><ul><li><strong>Style samples:</strong> paste 1–2 of your own past emails and say "match this voice" — tone, length, sign-off and all</li><li><strong>A reusable brief:</strong> save a short description of your standard style ("plain language, short paragraphs, one clear recommendation, friendly-professional") and prepend it to every drafting request</li></ul><div class="discovery"><p>💡 <strong>The template library</strong></p><p>Ask AI to help you build reusable templates for your recurring communications: monthly close summary, missing-documents nudge, tax deadline reminder, fee discussion. Ten minutes of setup, reused every month.</p></div>`,
          question: {
            text: "How do you stop AI drafts from sounding generic?",
            options: [
              "Use longer words to sound more professional",
              "Give AI samples of your own writing and a saved style brief to match",
              "Accept it — AI can only write one way",
            ],
            correctIndex: 1,
            explanation:
              "AI mirrors what you show it. A style sample plus a saved brief makes every draft start 90% in your voice instead of 0%.",
          },
        },
        {
          html: `<h3>The editor's checklist</h3><p>Every AI draft passes through you before it reaches a client. Check:</p><ul><li><strong>Numbers:</strong> verify every figure against your workpapers — AI will confidently repeat a wrong number you gave it, or worse, "fix" a right one</li><li><strong>Promises:</strong> did the draft commit you to something you didn't intend? ("We'll have this done by Friday")</li><li><strong>Sensitivity:</strong> bad news, fees, and errors need <em>your</em> judgment on framing — and sometimes a phone call instead of an email</li></ul><p>Remember the boundary from lesson one: AI drafts the memo, but it can't navigate a difficult client conversation. When the stakes are relational — pushback on fees, a mistake to own, a hard strategic message — AI prepares your talking points, and you deliver them personally.</p>`,
          question: {
            text: "When is an AI-drafted email the wrong tool entirely?",
            options: [
              "When the message is a routine monthly summary",
              "When the situation is relationally sensitive and needs a personal conversation",
              "When the client prefers short emails",
            ],
            correctIndex: 1,
            explanation:
              "Difficult conversations — errors, fees, hard news — are human-only territory. AI can prep your talking points, but trust is built by you showing up personally.",
          },
        },
      ],
    },
    {
      title: "Variance Analysis Support",
      summary: "Use AI to explain variances in plain language and surface the drivers worth investigating",
      content: `<p>Flagging a variance is mechanical. Explaining it — quickly, in plain language, with the right drivers identified — is where AI turns a reporting chore into advisory value.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here's a budget-vs-actual summary by line item for [period]: [paste data]. For each variance over [threshold, e.g. 10% or a fixed amount]: (1) state the variance in plain language, (2) list the 2-3 most plausible drivers I should investigate, (3) classify it as likely timing difference, one-time event, or structural change, (4) rank all variances by which deserve management's attention first. Format as a table I can walk through with the client.",
        note: "The timing / one-time / structural classification is the analytical gold — it's the difference between noise and a trend.",
      },
      steps: [
        {
          html: `<h3>From flagging to explaining</h3><p>Your software already flags variances — that's the easy 10%. The valuable 90% is the explanation:</p><ul><li><em>What happened?</em> "Utilities ran 22% over budget"</li><li><em>Why, plausibly?</em> Rate increase? Seasonal usage? New equipment? An error?</li><li><em>Does it matter?</em> Timing blip, one-time event, or a structural change that reshapes the forecast?</li></ul><p>Give AI the budget-vs-actual data plus context ("we opened a second location in March") and it drafts this narrative in seconds — plausible drivers, classifications, and plain-language summaries ready for your validation.</p>`,
          question: {
            text: "What's the most valuable classification question for any variance?",
            options: [
              "Whether it's a timing difference, a one-time event, or a structural change",
              "Whether it's an even or odd dollar amount",
              "Whether the software flagged it in red or yellow",
            ],
            correctIndex: 0,
            explanation:
              "Timing blips self-correct, one-time events get noted, structural changes reshape forecasts and decisions. This classification is what turns a variance report into advice.",
          },
        },
        {
          html: `<h3>AI proposes, you diagnose</h3><p>Here's the critical boundary: AI generates <strong>plausible</strong> drivers, not <strong>confirmed</strong> ones. It doesn't know the client fired their biggest customer in April, or that the "supplies spike" was a warehouse restock you approved.</p><p>The professional workflow:</p><ul><li>AI drafts the hypothesis list for each variance</li><li>You confirm or kill each hypothesis with client knowledge and source documents</li><li>What survives becomes the explanation you stand behind</li></ul><div class="discovery"><p>💡 <strong>The context multiplier</strong></p><p>The more business context you give AI up front — industry, seasonality, known events — the better its hypotheses. A two-sentence client background can double the usefulness of the analysis.</p></div>`,
          question: {
            text: "AI suggests a revenue dip was driven by seasonality. Before telling the client, you…",
            options: [
              "Pass it along — AI's drivers are statistically confirmed",
              "Validate it against what you actually know about the client and the source data",
              "Soften it to \"probably nothing\" to avoid alarm",
            ],
            correctIndex: 1,
            explanation:
              "AI produces hypotheses, not diagnoses. Your client knowledge and the source documents decide which explanation survives — that's the judgment clients pay for.",
          },
        },
        {
          html: `<h3>The monthly variance ritual</h3><p>Make this systematic and it compounds:</p><ul><li><strong>Same prompt, every month:</strong> a saved template with your thresholds and format — consistency makes trends visible</li><li><strong>Rolling context:</strong> keep prior months' explanations in the conversation, and ask "which of last month's one-time events turned out to be recurring?"</li><li><strong>Client-ready output:</strong> end with "summarize the three variances management should care about, in plain language" — that's your meeting agenda, done</li></ul><p>This is the pattern from lesson one in action: AI accelerates the analysis, you validate the drivers, and the client hears the strategic story only you can tell.</p>`,
          question: {
            text: "Why run variance analysis with the same saved prompt every month?",
            options: [
              "It saves you from ever looking at the numbers again",
              "Consistent structure makes month-over-month trends visible and builds a rolling narrative",
              "AI charges less for repeated prompts",
            ],
            correctIndex: 1,
            explanation:
              "Consistency is what turns isolated monthly reports into a trend narrative — including catching 'one-time' events that quietly become recurring problems.",
          },
        },
      ],
    },
  ],
};
