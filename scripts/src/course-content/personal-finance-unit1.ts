import type { UnitSeed } from "./types";

export const PERSONAL_FINANCE_UNIT_1: UnitSeed = {
  title: "Financial Clarity",
  lessons: [
    {
      title: "Financial Clarity Essentials",
      summary: "Turn scattered transactions and confusing jargon into a clear picture of your money",
      content: `<p>You know that feeling when you check your bank balance and wonder where your money has gone? The most common reason is that tracking every transaction takes more mental energy than you have at the end of most days. AI can solve this by turning financial chaos into structured clarity.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here is a list of my transactions from last month: [paste your transactions]. Organize them into categories (groceries, utilities, dining out, subscriptions, transport, other), show the total per category, and point out anything unusual or easy to cut.",
        note: "Use an export from your banking app or just type the amounts from memory — even a rough list reveals patterns.",
      },
      steps: [
        {
          html: `<h3>The clarity problem</h3><p>You were careful with your spending, didn't buy anything crazy. But somehow, you're looking at less than you expected — and you can't quite piece together why.</p><p>Financial confusion comes from <strong>volume, not ignorance</strong>. You have dozens of transactions scattered across apps, statements, and receipts. Some charges are clear. Others are cryptic abbreviations you don't recognize. And the more you try to organize it manually, the more exhausting it becomes.</p><p>This is where AI becomes valuable: instead of staring at a pile of numbers hoping patterns emerge, you can ask AI to <strong>organize, categorize, and explain</strong> what you're looking at. Think of AI as a reasoning assistant that takes messy inputs — scattered expenses, confusing terms, incomplete summaries — and structures them so patterns become visible and decisions become clearer.</p>`,
          question: {
            text: "According to this lesson, where does most financial confusion come from?",
            options: [
              "Not knowing enough about finance",
              "The sheer volume of scattered, unorganized transactions",
              "Banks hiding information from customers",
            ],
            correctIndex: 1,
            explanation:
              "Financial confusion comes from volume, not ignorance. Dozens of scattered transactions are exhausting to organize manually — which is exactly the kind of structuring work AI does well.",
          },
        },
        {
          html: `<h3>Organizing expenses with AI</h3><p>Let's start with the most common frustration: scattered expenses that don't tell you anything useful. Individually, transactions are just numbers. Together, they should reveal something — but only if they're organized.</p><p>Give AI your transaction list for the last month and ask it to organize by type: groceries, utilities, dining out, subscriptions, and so on. Suddenly you're looking at <strong>spending patterns</strong> — and that's when clarity starts, not at a list of 40 random charges.</p><div class="discovery"><p>💡 <strong>From chaos to categories</strong></p><p>When you can see where money goes by type — groceries, subscriptions, dining — patterns become visible and decisions become clearer.</p></div><h3>Turning numbers into summaries</h3><p>Once expenses are organized, the next step is the bigger picture. Give AI your income, expenses, and any debt or savings information, and ask for a structured snapshot. It shows your net position, where the pressure points are, and what deserves attention first — so you can act strategically, not reactively.</p>`,
          question: {
            text: "What's the right order for building financial clarity with AI?",
            options: [
              "Ask AI to invest your money, then track what happens",
              "Organize expenses into categories, then summarize your overall position",
              "Memorize financial definitions first, then look at your numbers",
            ],
            correctIndex: 1,
            explanation:
              "Clarity is built in layers: first organize scattered transactions into categories, then zoom out to a structured snapshot of your whole position.",
          },
        },
        {
          html: `<h3>Explaining financial terms</h3><p>As you look at your snapshot, you'll hit terms like <strong>"APR"</strong> or <strong>"net monthly position"</strong>. Understanding these isn't just about definitions — it's about knowing how they affect <em>your</em> decisions.</p><p>Say your snapshot flagged high-interest debt. Instead of Googling "What is APR" and getting a generic definition, ask AI: <em>"I keep seeing APR on credit card offers — what does it actually mean for my situation?"</em> AI connects the term to your specific decision context, so you're not just learning definitions, you're understanding what to do with them.</p><h3>Quick summary</h3><p>AI doesn't manage your money for you. It organizes what you already have so you can see it clearly:</p><ul><li><strong>Organizing expenses</strong> reveals where money goes</li><li><strong>Summarizing your position</strong> shows you what to focus on</li><li><strong>Explaining terms</strong> removes confusion from decisions</li></ul><p>Clarity comes first. Better decisions follow. AI isn't replacing your judgment — it's structuring your thinking.</p>`,
          question: {
            text: "Why is asking AI about \"APR\" more useful than just Googling the definition?",
            options: [
              "AI provides more accurate definitions than search results",
              "AI eliminates the need to learn financial concepts",
              "AI connects the term to your specific decision context",
            ],
            correctIndex: 2,
            explanation:
              "AI's strength is personalized explanation. It takes a general concept and shows you how it matters for your specific choice.",
          },
        },
      ],
    },
    {
      title: "Building Your Budget",
      summary: "Use AI to build a realistic monthly budget that reflects how you actually live",
      content: `<p>Most budgets fail because they describe an idealized person, not you. AI can help you build a budget from your real spending data — one you'll actually keep.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "My monthly take-home income is [amount]. My typical monthly spending by category is: [paste categories from your expense analysis]. Build me a realistic monthly budget: keep my fixed costs as they are, suggest gentle reductions only where my spending is clearly above normal, and include a small buffer for surprises. Present it as a simple table.",
        note: "Tell it what you refuse to give up (e.g. your gym or one dinner out a week) — a budget that respects your priorities is one you'll keep.",
      },
      steps: [
        {
          html: `<h3>Why budgets usually fail</h3><p>The classic budget failure goes like this: in a burst of motivation, you write down aggressive limits — groceries slashed, zero dining out, every spare unit of money to savings. Two weeks later, real life happens and the whole plan collapses. Then you feel guilty and stop budgeting entirely.</p><p>The problem isn't discipline. The problem is that the budget described <strong>an idealized version of you</strong>, not the real one.</p><p>AI helps you flip the process: instead of starting from how you <em>wish</em> you spent, you start from how you <em>actually</em> spend — the categorized data you built in the last lesson — and make targeted, realistic adjustments from there.</p>`,
          question: {
            text: "Why do most budgets fail within weeks?",
            options: [
              "People don't have enough willpower",
              "They're built for an idealized version of you, not how you actually live",
              "Budgeting only works with expensive software",
            ],
            correctIndex: 1,
            explanation:
              "Budgets built on wishful thinking collapse on contact with real life. Starting from your actual spending data produces a plan you can keep.",
          },
        },
        {
          html: `<h3>Building from real data</h3><p>Here's the AI-powered budgeting flow:</p><ul><li><strong>Start with reality:</strong> give AI your income and your actual categorized spending from last month</li><li><strong>Ask for a realistic plan:</strong> request gentle, targeted reductions — not across-the-board cuts</li><li><strong>Protect what matters:</strong> tell AI which expenses are non-negotiable for your quality of life</li><li><strong>Include a buffer:</strong> ask for a "surprises" category, because there's always something</li></ul><p>The result is a budget that fits your life like clothes tailored to your measurements — not a costume for somebody else.</p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>A budget you keep at 80% beats a perfect budget you abandon after two weeks. Ask AI to optimize for sustainability, not perfection.</p></div>`,
          question: {
            text: "What should you give AI as the starting point for a realistic budget?",
            options: [
              "Your actual categorized spending from recent months",
              "A list of financial goals you hope to achieve someday",
              "An example budget from a personal finance blog",
            ],
            correctIndex: 0,
            explanation:
              "Real spending data is the foundation. AI can then suggest targeted adjustments that respect how you actually live.",
          },
        },
        {
          html: `<h3>Iterating month by month</h3><p>A budget isn't a one-time document — it's a living plan. At the end of each month, bring your actual numbers back to AI and ask: <em>"Here's what I budgeted and here's what I spent. What worked, what didn't, and what should change next month?"</em></p><p>This turns budgeting from a guilt exercise into a feedback loop. Overspent on dining? Maybe the limit was unrealistic — or maybe one specific week drove it all. AI spots those distinctions instantly, without judgment.</p><p>After two or three cycles, your budget stops being aspirational and starts being <strong>descriptive with intent</strong>: an accurate picture of your life, adjusted deliberately toward your goals.</p>`,
          question: {
            text: "What's the best way to treat your budget after the month ends?",
            options: [
              "If you missed a limit, start over with stricter numbers",
              "Compare plan vs. reality with AI and adjust the next month's plan",
              "Ignore it — the plan matters less than good intentions",
            ],
            correctIndex: 1,
            explanation:
              "Budgeting works as a feedback loop. AI makes the review step fast and judgment-free, so the plan keeps improving instead of being abandoned.",
          },
        },
      ],
    },
    {
      title: "Analyzing Spending Behavior",
      summary: "Spot the hidden patterns and triggers behind your spending — and act on them",
      content: `<p>Numbers tell you what you spent. Behavior analysis tells you why. AI can find the patterns behind your transactions — the triggers, habits, and leaks you don't notice day to day.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here are my categorized expenses for the last 2-3 months: [paste data]. Analyze my spending behavior: Which categories are trending up? What patterns do you see by time (weekends, late nights, start vs. end of month)? Which small recurring charges add up the most over a year? Give me the top 3 behavioral insights and one gentle suggestion for each.",
        note: "The goal is insight, not shame. Ask follow-up questions about any pattern that surprises you.",
      },
      steps: [
        {
          html: `<h3>From what to why</h3><p>Your categorized expenses tell you <em>what</em> you spent. The next level of clarity is <em>why</em>. Almost everyone has spending patterns they can't see from inside their own life:</p><ul><li>The 11pm online orders that happen after stressful days</li><li>The "small" subscriptions that quietly total a meaningful sum every year</li><li>The grocery bill that doubles when you shop without a list</li><li>The end-of-month spike that erases mid-month discipline</li></ul><p>These patterns are invisible in a transaction list but obvious in an analysis. AI is exceptionally good at finding them, because pattern-spotting across messy data is exactly what it does.</p>`,
          question: {
            text: "What does behavioral analysis add on top of categorized expenses?",
            options: [
              "It reveals the patterns and triggers behind the numbers",
              "It guarantees you will stop overspending",
              "It replaces the need to track expenses at all",
            ],
            correctIndex: 0,
            explanation:
              "Categories show what you spent; behavior analysis shows when, why, and what keeps repeating — the insight you need to actually change something.",
          },
        },
        {
          html: `<h3>Asking the right questions</h3><p>Give AI a few months of data and ask questions a spreadsheet can't easily answer:</p><ul><li><em>"Which categories are trending up over the last three months?"</em></li><li><em>"What do my weekend vs. weekday patterns look like?"</em></li><li><em>"Which recurring charges would save me the most over a year if I cancelled them?"</em></li><li><em>"If I could only change one habit, which would have the biggest impact?"</em></li></ul><div class="discovery"><p>💡 <strong>The one-change rule</strong></p><p>Don't try to fix five patterns at once. Ask AI to identify the single highest-impact change, make that one stick, then come back for the next.</p></div>`,
          question: {
            text: "You want the biggest financial improvement with the least effort. What's the smartest question to ask AI?",
            options: [
              "\"List everything I'm doing wrong with money\"",
              "\"If I could only change one spending habit, which would have the biggest impact?\"",
              "\"Create a plan to cut every category by 50%\"",
            ],
            correctIndex: 1,
            explanation:
              "One high-impact change that sticks beats a sweeping overhaul that collapses. AI can rank your patterns by impact so you focus your energy where it counts.",
          },
        },
        {
          html: `<h3>Turning insight into action</h3><p>Insight without action is trivia. Once AI surfaces a pattern, close the loop:</p><ul><li><strong>Name the trigger:</strong> "I order food when I haven't planned dinner by 6pm"</li><li><strong>Design a countermeasure with AI:</strong> "Suggest 5 fifteen-minute dinners I can default to"</li><li><strong>Set a checkpoint:</strong> revisit the pattern next month and ask AI if it improved</li></ul><p>Notice what happened across this unit: you went from a chaotic pile of transactions → to organized categories → to a realistic budget → to understanding your own behavior. That's financial clarity. In the next unit, you'll use it to make better decisions: comparing options, repaying debt strategically, and building savings plans that fit your life.</p>`,
          question: {
            text: "What's the final step that makes behavioral insight valuable?",
            options: [
              "Sharing the analysis on social media",
              "Memorizing your spending statistics",
              "Designing a specific countermeasure and checking back on it later",
            ],
            correctIndex: 2,
            explanation:
              "Insight becomes value when it changes behavior: name the trigger, design a countermeasure with AI's help, and verify the change at your next check-in.",
          },
        },
      ],
    },
  ],
};
