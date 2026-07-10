import type { UnitSeed } from "./types";

export const AI_ACCOUNTANT_UNIT_1: UnitSeed = {
  title: "Foundations & Automation",
  lessons: [
    {
      title: "How AI Fits in Accounting",
      summary: "Map your weekly workflow to see exactly where AI belongs — and where it doesn't",
      content: `<p>Accounting software already handles the rules-based work — categorization, reconciliation, matching. So what's actually left for AI to do? Everything the software can't: explaining a variance in plain language, researching a tax question, drafting a client memo. But some tasks will create real liability if you hand them off. This lesson maps out where AI belongs in your week — and where it doesn't.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "Gemini",
        url: "https://gemini.google.com",
        prompt:
          "Here is a list of my typical weekly tasks as an accountant: [list your tasks — e.g. transaction categorization, bank reconciliation, variance analysis, client emails, tax research, month-end close, final review]. Classify each task into three categories: (1) Automatable — repetitive and rules-based, AI can handle with minimal oversight; (2) AI-assisted — AI accelerates but I must validate and finalize; (3) Human-only — requires my judgment, client relationship, or regulatory accountability. Explain your reasoning for each.",
        note: "Be honest and complete with your task list — the classification is only as useful as the workflow you feed it.",
      },
      steps: [
        {
          html: `<h3>Start with your workflow, not the tools</h3><p>Most accountants approach AI backward: they start with <em>"What can AI do?"</em> instead of <em>"What do I actually need AI to do?"</em></p><p>This leads to three common problems:</p><ul><li>Tools that don't fit your actual workflow</li><li>Automation that breaks under real-world conditions</li><li>Time spent managing AI instead of benefiting from it</li></ul><p>The smarter approach is <strong>workflow mapping</strong>: audit what you actually do each week, then classify tasks by how AI can realistically support them. This shows you where AI fits safely, what to avoid, and which tasks benefit from assistance versus full automation.</p>`,
          question: {
            text: "What's the right first question when bringing AI into your accounting practice?",
            options: [
              "\"What can the newest AI tools do?\"",
              "\"What do I actually need AI to do in my weekly workflow?\"",
              "\"Which AI tools are my competitors using?\"",
            ],
            correctIndex: 1,
            explanation:
              "Starting from your real workflow — not tool hype — prevents mismatched tools, broken automation, and wasted time managing AI instead of benefiting from it.",
          },
        },
        {
          html: `<h3>The three categories</h3><p>Different accounting tasks relate to AI differently:</p><ul><li><strong>Automatable:</strong> repetitive, rules-based tasks AI can handle with minimal oversight — transaction categorization, data entry, invoice matching. Here, AI <em>replaces</em> the work.</li><li><strong>AI-assisted:</strong> complex tasks where AI accelerates the work but <em>you validate and finalize</em> — variance analysis, tax research, forecast modeling. Here, AI augments your judgment.</li><li><strong>Human-only:</strong> tasks requiring your judgment, client relationships, or regulatory accountability — final reviews, client strategy, audit sign-offs.</li></ul><p>Most accounting AI falls into the second category. <strong>Confusing "assist" with "replace" is where over-reliance and professional liability start.</strong></p><div class="discovery"><p>💡 <strong>Start with low-risk automation</strong></p><p>Your first AI implementations should be <strong>reversible</strong> (easy to undo), <strong>high-volume</strong> (frequent enough to justify setup), and <strong>low-stakes</strong> (errors don't create regulatory or client issues). Transaction categorization fits. Tax sign-offs don't.</p></div>`,
          question: {
            text: "Why is it critical to distinguish automatable tasks from AI-assisted ones?",
            options: [
              "Automatable tasks are more important and cheaper to implement",
              "Automatable tasks can run independently, while AI-assisted tasks require your professional review",
              "Automatable tasks are always faster than AI-assisted ones",
            ],
            correctIndex: 1,
            explanation:
              "Automatable tasks can run with minimal oversight once set up. AI-assisted tasks still need your expertise to interpret, validate, and finalize. Confusing these categories leads to automation failures or professional liability.",
          },
        },
        {
          html: `<h3>What AI can't replace</h3><p>This is what matters most: <strong>AI doesn't understand context the way you do.</strong></p><ul><li>It can categorize transactions — but it doesn't know when a client's spending pattern signals business trouble</li><li>It can draft memos — but it can't navigate a difficult client conversation</li><li>It can flag variances — but it can't explain why they matter strategically</li></ul><p>Your value as an accountant isn't data processing — it's <strong>interpretation, judgment, and client relationships</strong>. Used appropriately, AI handles processing so you can focus on what actually differentiates you: turning numbers into business insight and building trust through advisory work.</p><p>And adoption isn't binary. Successful accountants build competence incrementally: start with one automatable task, master it, add another — then move to AI-assisted work with professional oversight throughout. This prevents both over-automation (liability risk) and under-adoption (efficiency left on the table).</p>`,
          question: {
            text: "A client asks you to fully automate their audit sign-offs with AI. What's the right response?",
            options: [
              "Agree — sign-offs are repetitive, so they're automatable",
              "Decline — sign-offs are human-only tasks carrying regulatory accountability",
              "Agree, but have AI double-check its own work first",
            ],
            correctIndex: 1,
            explanation:
              "Final sign-offs carry your professional and regulatory accountability — they stay human. The biggest AI mistakes happen when human-only tasks get delegated.",
          },
        },
      ],
    },
    {
      title: "Bookkeeping Automation",
      summary: "Set up reliable AI-powered categorization, reconciliation, and data entry — without breaking your books",
      content: `<p>Bookkeeping is where AI automation pays off first: high-volume, rules-based, reversible. This lesson shows you how to set it up so it's reliable — and how to catch the errors before they compound.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here are 20 sample transactions from my books (anonymized): [paste description + amount for each]. Categorize each into my chart of accounts: [list your main categories]. For each, give a confidence level (high/medium/low) and flag any transaction where you're uncertain or where two categories are plausible. Then write 5 categorization rules I could document so a bookkeeper or automation tool applies them consistently.",
        note: "The confidence flags are the point — they show you exactly which transactions still need human eyes.",
      },
      steps: [
        {
          html: `<h3>Why bookkeeping goes first</h3><p>Remember the low-risk profile: reversible, high-volume, low-stakes. Bookkeeping tasks fit perfectly:</p><ul><li><strong>Transaction categorization</strong> — hundreds per month, each one reversible with a click</li><li><strong>Invoice matching</strong> — pairing invoices to payments is pattern recognition, AI's home turf</li><li><strong>Data entry from receipts and bills</strong> — extraction from documents into structured fields</li></ul><p>Modern accounting platforms (QuickBooks, Xero, and others) already embed AI for these. Your job isn't to build automation from scratch — it's to <strong>configure, supervise, and correct</strong> so the automation learns your rules.</p>`,
          question: {
            text: "Why is transaction categorization an ideal first automation?",
            options: [
              "It's high-volume, reversible, and errors are low-stakes",
              "It's the most intellectually demanding accounting task",
              "It never requires any human review at all",
            ],
            correctIndex: 0,
            explanation:
              "High volume justifies the setup effort, reversibility makes errors cheap to fix, and low stakes mean mistakes don't create regulatory or client damage.",
          },
        },
        {
          html: `<h3>The exception workflow</h3><p>Automated bookkeeping doesn't mean unsupervised bookkeeping. The professional pattern is <strong>management by exception</strong>:</p><ul><li>Let AI handle the confident matches automatically</li><li>Route <strong>low-confidence items to a review queue</strong> — new vendors, unusual amounts, ambiguous descriptions</li><li>When you correct one, the system learns — your corrections are training, not just fixes</li></ul><div class="discovery"><p>💡 <strong>The 80/20 of automation</strong></p><p>A well-tuned setup auto-handles 80–90% of transactions and surfaces the rest for review. Chasing 100% automation is where errors slip through — the review queue IS the system working, not failing.</p></div>`,
          question: {
            text: "In a healthy automated bookkeeping setup, what happens to a transaction the AI isn't confident about?",
            options: [
              "It gets categorized anyway — the monthly totals will smooth it out",
              "It's routed to a human review queue, and the correction teaches the system",
              "It's deleted so it doesn't contaminate the books",
            ],
            correctIndex: 1,
            explanation:
              "Management by exception: AI handles confident cases, humans handle the uncertain ones, and every correction improves future accuracy.",
          },
        },
        {
          html: `<h3>Guardrails that keep books clean</h3><p>Three habits prevent automated errors from compounding:</p><ul><li><strong>Weekly exception review:</strong> clear the low-confidence queue on a schedule — a pile of unreviewed exceptions is a pile of future misstatements</li><li><strong>Monthly spot-check:</strong> sample a handful of auto-categorized transactions across categories; drift happens quietly</li><li><strong>Reconciliation stays sacred:</strong> AI can prepare and suggest matches, but the reconciliation conclusion is yours — it's the control that catches everything else</li></ul><p>Set up this way, bookkeeping automation gives you hours back every week — hours you'll invest in the higher-value work covered in the rest of this course.</p>`,
          question: {
            text: "What's the danger of letting the exception queue pile up unreviewed?",
            options: [
              "The AI gets offended and stops working",
              "Nothing — exceptions resolve themselves over time",
              "Unreviewed exceptions become misstatements that compound in your books",
            ],
            correctIndex: 2,
            explanation:
              "Exceptions are the system asking for your judgment. Ignore them and uncertain guesses harden into errors that surface at close, review, or audit — when they're most expensive to fix.",
          },
        },
      ],
    },
    {
      title: "Document Analysis Tools",
      summary: "Extract, summarize, and cross-check contracts, invoices, and statements with AI",
      content: `<p>Accountants drown in documents: contracts, leases, invoices, bank statements, prior-year workpapers. AI reads them in seconds — if you know how to ask, and how to verify.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm uploading a contract [attach or paste the document]. Extract into a table: parties, effective date, term and renewal conditions, payment amounts and schedule, escalation clauses, termination provisions, and any accounting-relevant terms (deposits, penalties, contingencies). Quote the exact source text next to each extracted item so I can verify it against the original.",
        note: "The 'quote the source text' instruction is your verification shortcut — never book numbers from an AI summary without checking them against the document.",
      },
      steps: [
        {
          html: `<h3>From reading to interrogating</h3><p>The old way: read a 40-page lease line by line, highlighting the terms that affect the books. The AI way: upload the document and <strong>interrogate it</strong>:</p><ul><li><em>"Extract all payment obligations with amounts and dates"</em></li><li><em>"What are the renewal and termination conditions?"</em></li><li><em>"List every clause with accounting implications — deposits, escalations, penalties, contingencies"</em></li></ul><p>This works across the document pile: summarizing client contracts, pulling key figures from bank statements, comparing this year's agreement against last year's to spot what changed.</p>`,
          question: {
            text: "What's the most effective way to use AI on a long contract?",
            options: [
              "Ask for a one-line summary and book from that",
              "Interrogate it with specific extraction questions about terms that affect the books",
              "Have AI rewrite the contract in simpler language for the client",
            ],
            correctIndex: 1,
            explanation:
              "Targeted extraction questions — payments, renewals, accounting-relevant clauses — turn a 40-page read into minutes of focused review.",
          },
        },
        {
          html: `<h3>The verification habit</h3><p>Document AI has one critical failure mode: <strong>confident extraction of wrong details</strong>. A misread date, a missed exception clause, an amount pulled from the wrong column — delivered in perfectly fluent prose.</p><p>The professional countermeasure is simple: <strong>always ask for the source</strong>.</p><ul><li>Require quoted text next to every extracted item: <em>"Quote the exact sentence you got this from"</em></li><li>Verify any number you'll book or advise on against the original document</li><li>Treat AI extraction as a <em>preparer's draft</em> — it gets reviewed like a junior's work would</li></ul><div class="discovery"><p>💡 <strong>Preparer, not partner</strong></p><p>Think of document AI as a fast, tireless junior preparer. You'd never sign off a junior's workpaper without review — apply exactly the same standard here.</p></div>`,
          question: {
            text: "AI extracts \"annual rent escalation: 3%\" from a lease. Before using it, you should…",
            options: [
              "Use it — AI extraction is more accurate than manual reading",
              "Verify it against the quoted source text in the original lease",
              "Round it up to 5% for safety",
            ],
            correctIndex: 1,
            explanation:
              "AI can extract wrong details with total confidence. Any figure that touches the books or your advice gets verified against the original — that's the same review standard you'd apply to any preparer.",
          },
        },
        {
          html: `<h3>Cross-checking at scale</h3><p>Where document AI gets genuinely powerful is <strong>comparison</strong> — work that's brutal manually:</p><ul><li><em>"Compare these two versions of the agreement and list every change"</em></li><li><em>"Check this invoice batch against the price list and flag mismatches"</em></li><li><em>"Does anything in this statement contradict the loan covenant terms I've pasted?"</em></li></ul><p>One caution that outranks all others: <strong>client confidentiality</strong>. Before uploading client documents to any AI tool, confirm your firm's policy and the tool's data handling — use business-grade tools with no-training guarantees, and anonymize where you can. A time-saver is never worth a confidentiality breach.</p>`,
          question: {
            text: "Before uploading a client's contract to an AI tool, what must you check?",
            options: [
              "Whether the tool's data handling meets your confidentiality obligations",
              "Whether the contract is interesting enough to analyze",
              "Nothing — all AI tools are confidential by default",
            ],
            correctIndex: 0,
            explanation:
              "Client confidentiality is a professional obligation. Use business-grade tools with clear no-training data policies, follow firm policy, and anonymize where possible.",
          },
        },
      ],
    },
  ],
};
