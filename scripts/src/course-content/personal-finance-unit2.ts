import type { UnitSeed } from "./types";

export const PERSONAL_FINANCE_UNIT_2: UnitSeed = {
  title: "Making Better Decisions",
  lessons: [
    {
      title: "Comparing Financial Options",
      summary: "Use AI to compare loans, plans, and purchases objectively — side by side",
      content: `<p>Financial choices rarely come with a clear "right answer" printed on them. AI can lay competing options side by side, translate the fine print, and show which one actually fits your situation.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm choosing between these options: [describe option A and option B — e.g. two phone plans, two loan offers, buying vs. renting something]. My situation: [income, how long I'll use it, what matters most to me]. Build a side-by-side comparison table with total cost over time, risks, and hidden catches. Then tell me which fits my situation better and why.",
        note: "Always include your timeframe — an option that wins over 1 year often loses over 5.",
      },
      steps: [
        {
          html: `<h3>Why comparisons go wrong</h3><p>Two loan offers. Two phone plans. Buy or rent. Financial options are hard to compare because each one is presented in its own format, with its own fine print, each designed to look like the best deal.</p><p>The classic mistakes:</p><ul><li><strong>Comparing headline numbers only</strong> — the lower monthly payment might cost far more over the full term</li><li><strong>Ignoring the timeframe</strong> — an option that wins over 1 year can lose badly over 5</li><li><strong>Missing the fine print</strong> — fees, penalties, and rate changes hide in paragraphs nobody reads</li></ul><p>AI fixes the format problem: it can restructure any set of options into <strong>one consistent comparison</strong>, so you're finally comparing apples to apples.</p>`,
          question: {
            text: "What's the most common mistake when comparing financial options?",
            options: [
              "Taking too long to decide",
              "Comparing headline numbers instead of total cost over your actual timeframe",
              "Asking other people for their opinions",
            ],
            correctIndex: 1,
            explanation:
              "Headline numbers are marketing. Total cost over your real timeframe — including fees and fine print — is what you'll actually pay.",
          },
        },
        {
          html: `<h3>The comparison framework</h3><p>When you hand AI a decision, structure your ask:</p><ul><li><strong>The options:</strong> paste the details of each, however messy</li><li><strong>Your situation:</strong> income, timeframe, and what you value (flexibility? lowest total cost? predictability?)</li><li><strong>The format:</strong> ask for a side-by-side table with total cost over time, risks, and hidden catches</li></ul><p>Then ask the question that turns analysis into advice: <em>"Given my situation, which one fits better and why?"</em></p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>AI's recommendation is a reasoning aid, not a verdict. The value is in the <em>why</em> — if the reasoning doesn't match your reality, tell it what's different and let it re-run the comparison.</p></div>`,
          question: {
            text: "What's the most valuable part of AI's recommendation in a comparison?",
            options: [
              "The reasoning behind it, which you can check against your reality",
              "The speed at which it answers",
              "That it removes the need for you to decide",
            ],
            correctIndex: 0,
            explanation:
              "The 'why' is the product. Sound reasoning you can verify — and correct with your own context — is what makes the comparison trustworthy.",
          },
        },
        {
          html: `<h3>Stress-testing the decision</h3><p>Before committing, ask AI to argue against its own recommendation: <em>"What would have to be true for the other option to be better? What's the worst-case scenario for the one you recommended?"</em></p><p>This is the same technique analysts use — deliberately seeking the strongest case against a decision before making it. It takes two minutes and regularly surfaces the one consideration you hadn't thought of: the early-exit penalty, the rate that resets after the promo period, the assumption about your future that might not hold.</p><p>For any decision involving significant money, verify the key numbers against the official documents — AI structures your thinking, but the contract is the source of truth.</p>`,
          question: {
            text: "What's a smart final step before committing to a financial choice AI helped you compare?",
            options: [
              "Ask AI to argue against its own recommendation and check the worst case",
              "Choose the option with the nicest website",
              "Commit immediately so you don't second-guess yourself",
            ],
            correctIndex: 0,
            explanation:
              "Asking AI to make the case against its own pick surfaces hidden risks cheaply — and the official documents remain the final source of truth for key numbers.",
          },
        },
      ],
    },
    {
      title: "Strategic Debt Repayment",
      summary: "Build a debt payoff plan with AI — ordered, realistic, and motivating",
      content: `<p>Debt feels overwhelming when it's a fog of balances and due dates. AI can turn it into an ordered, motivating plan — and show you exactly how much faster you can be free.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here are my debts: [for each — balance, interest rate/APR, minimum payment]. I can put [amount] per month toward debt in total. Compare the avalanche vs. snowball strategies for my exact situation: show the payoff order, the debt-free date, and total interest paid for each. Then recommend one based on the numbers AND on what will keep me motivated.",
        note: "Be honest about the motivation question — the mathematically perfect plan only wins if you stick to it.",
      },
      steps: [
        {
          html: `<h3>From fog to list</h3><p>The first step of any debt strategy has nothing to do with strategy: it's simply seeing everything in one place. Balances, interest rates, minimum payments — scattered across statements and apps, they form a fog of anxiety. Listed in one table, they become a solvable problem.</p><p>Give AI your full picture and ask for it structured: every debt, its rate, its minimum, and the total. For many people this single step is transformative — the fog has edges, and the number, while maybe uncomfortable, is <em>finite</em>.</p>`,
          question: {
            text: "What's the essential first step of strategic debt repayment?",
            options: [
              "Immediately paying extra on the biggest debt",
              "Getting every debt visible in one structured list — balance, rate, minimum",
              "Opening a new credit card for balance transfers",
            ],
            correctIndex: 1,
            explanation:
              "Strategy requires visibility. One structured list turns a fog of anxiety into a finite, solvable problem — and gives AI the data it needs to plan.",
          },
        },
        {
          html: `<h3>Avalanche vs. snowball</h3><p>The two classic strategies:</p><ul><li><strong>Avalanche:</strong> pay minimums on everything, throw every extra unit at the <em>highest-interest</em> debt. Mathematically optimal — least total interest paid.</li><li><strong>Snowball:</strong> attack the <em>smallest balance</em> first for quick wins. Slightly more expensive on paper, but the early victories keep many people going.</li></ul><p>Which is right? That depends on your numbers <em>and</em> your psychology — and this is where AI shines. It can run both scenarios on your exact debts and show the real difference: <em>"Avalanche saves you X in interest and gets you debt-free 2 months sooner; snowball gives you your first paid-off debt in 3 months instead of 11."</em></p><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>The best plan is the one you'll follow. If the interest difference is small and you need momentum, the "suboptimal" snowball can be the winning choice.</p></div>`,
          question: {
            text: "The avalanche method saves you a small amount of interest, but you tend to lose motivation without visible progress. What should you weigh?",
            options: [
              "Always choose avalanche — math beats feelings",
              "Whether snowball's early wins will keep you consistent, since the best plan is the one you follow",
              "Neither — just pay minimums on everything",
            ],
            correctIndex: 1,
            explanation:
              "A plan you abandon saves you nothing. AI can quantify the trade-off precisely so you can choose between mathematical optimality and psychological sustainability.",
          },
        },
        {
          html: `<h3>Keeping the plan alive</h3><p>A payoff plan isn't static. Life changes — a bonus arrives, a rate changes, an emergency hits. Instead of the plan silently dying, bring the change to AI:</p><ul><li><em>"I got an unexpected [amount]. Where does it do the most good in my plan?"</em></li><li><em>"I had to skip this month's extra payment. Rebuild my timeline."</em></li><li><em>"My card's promo rate ends next month. Does my payoff order change?"</em></li></ul><p>Each update takes a minute and keeps the plan matched to reality. And ask AI for your <strong>debt-free date</strong> — a concrete date on the calendar is far more motivating than an abstract balance shrinking.</p>`,
          question: {
            text: "An unexpected windfall arrives mid-plan. What's the smart move?",
            options: [
              "Ask AI where the money does the most good in your payoff plan",
              "Ignore the plan — windfalls are for fun",
              "Split it evenly across all debts regardless of interest rates",
            ],
            correctIndex: 0,
            explanation:
              "A one-minute question keeps your plan optimal as life changes. (And a plan that allows some fun money is often the one that survives.)",
          },
        },
      ],
    },
    {
      title: "Personalized Savings Plans",
      summary: "Design savings goals with AI that survive contact with your real life",
      content: `<p>"Save more" is a wish, not a plan. AI can turn your goals into specific, automated, realistic savings systems — sized to your actual budget.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to save for: [goal(s) — e.g. emergency fund, a trip, a purchase]. My monthly income is [amount] and after my budget I can realistically set aside about [amount] per month. Build me a savings plan: how to split between goals, realistic target dates, what to automate, and what to do in months when I can't save the full amount. Keep it simple enough to run on autopilot.",
        note: "Ask for a 'bad month protocol' — knowing in advance what to do when you can't save prevents one setback from killing the plan.",
      },
      steps: [
        {
          html: `<h3>Why "save more" fails</h3><p>Almost everyone intends to save. The intention fails for predictable reasons:</p><ul><li><strong>No specific target</strong> — "more" can't be achieved, so it's never satisfying</li><li><strong>Saving what's left over</strong> — and there's rarely anything left over</li><li><strong>Unrealistic amounts</strong> — a plan that ignores your real budget dies in month two</li><li><strong>All-or-nothing thinking</strong> — one missed month feels like failure, so the whole plan gets abandoned</li></ul><p>A savings plan that works inverts each of these: specific goals, saving <em>first</em> instead of last, amounts derived from your actual budget, and a built-in protocol for imperfect months.</p>`,
          question: {
            text: "Which approach gives a savings plan the best chance of surviving?",
            options: [
              "Saving whatever happens to be left at month's end",
              "Specific goals, saving first, realistic amounts, and a plan for bad months",
              "Committing to the largest amount that's theoretically possible",
            ],
            correctIndex: 1,
            explanation:
              "Plans fail at their weakest assumption. Specificity, pay-yourself-first, realism, and a bad-month protocol remove the four most common failure points.",
          },
        },
        {
          html: `<h3>Designing the plan with AI</h3><p>Bring AI your goals and your real numbers — the budget you built in Unit 1 — and let it do the structuring:</p><ul><li><strong>Prioritize:</strong> "I want an emergency fund, a vacation, and a new laptop. In what order, and in what proportion?"</li><li><strong>Size the targets:</strong> "How many months of expenses should my emergency fund cover, given my situation?"</li><li><strong>Set the dates:</strong> realistic target dates based on your actual monthly capacity — not wishful ones</li><li><strong>Automate:</strong> ask what to automate so saving happens without daily willpower</li></ul><div class="discovery"><p>💡 <strong>Pay yourself first</strong></p><p>The single highest-impact mechanic: move savings out on payday, automatically, before spending starts. Ask AI to design your plan around this principle.</p></div>`,
          question: {
            text: "What does \"pay yourself first\" mean in a savings plan?",
            options: [
              "Buying something nice before paying bills",
              "Automatically moving savings out on payday, before spending begins",
              "Paying off all debt before ever saving anything",
            ],
            correctIndex: 1,
            explanation:
              "Savings that wait until the end of the month rarely happen. Automating the transfer on payday makes saving the default instead of a daily decision.",
          },
        },
        {
          html: `<h3>The bad month protocol</h3><p>Every savings plan meets a bad month — the car repair, the medical bill, the month where everything happens at once. What kills plans isn't the bad month itself; it's having no answer for it, so one miss becomes permanent abandonment.</p><p>Design the answer in advance with AI: <em>"In months where I can't save the full amount, what's my minimum viable contribution, and how do I catch up without breaking the plan?"</em> Maybe the answer is a reduced amount, a paused secondary goal, or simply a recalculated target date.</p><p>The point is that the plan <strong>bends instead of breaking</strong>. You've now got clarity (Unit 1) and decision tools (this unit). Next, you'll extend the horizon: investment concepts, scenario planning, and confident long-term thinking.</p>`,
          question: {
            text: "What usually kills a savings plan?",
            options: [
              "One bad month combined with having no protocol for it",
              "Setting target dates for goals",
              "Automating transfers",
            ],
            correctIndex: 0,
            explanation:
              "Bad months are inevitable; abandonment is optional. A pre-designed 'bend, don't break' protocol turns a missed month into a recalculation instead of a failure.",
          },
        },
      ],
    },
  ],
};
