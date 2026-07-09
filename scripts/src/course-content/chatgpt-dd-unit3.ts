import type { UnitSeed } from "./types";

export const CHATGPT_DD_UNIT_3: UnitSeed = {
  title: "Research and Analysis",
  lessons: [
    {
      title: "Dig Deeper With Deep Research",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Use Deep Research for this brief: compare [Asana, Linear, and Jira] for [a 15-person software team] on [pricing, native automation, and reporting]. Prioritize sources from the last 12 months. Output a comparison table plus a one-paragraph recommendation with the trade-offs.",
        note: "Answer its clarifying questions up front, then spot-check the citations before trusting any specific number.",
      },
      summary: "Turn ChatGPT into a research analyst that reads dozens of sources and cites its work",
      estimatedMinutes: 14,
      content: `<p>A normal chat answers from memory in seconds. Deep Research does something different: it goes out, reads dozens of live sources, and comes back with a cited report. The skill isn't clicking the button — it's writing a brief good enough to be worth the wait.</p>`,
      steps: [
        {
          html: `<h3>Two very different modes</h3><p>By now you know ChatGPT can answer instantly. <strong>Deep Research</strong> trades speed for depth: instead of one quick reply, it plans a line of investigation, browses many sources over several minutes, and returns a structured report with inline citations.</p><p>Think of the difference as <em>asking a colleague</em> versus <em>commissioning an analyst</em>. One is fast and conversational; the other is slower, thorough, and shows its sources.</p><h3>The cost is time</h3><p>A Deep Research run can take five to thirty minutes. That's the trade. You use it when the answer is worth waiting for — and when being able to check the sources actually matters.</p>`,
          question: {
            text: 'You need a one-line reminder of the difference between two ChatGPT pricing tiers you already mostly remember. Should you fire off a Deep Research run?',
            options: [
              "Yes — Deep Research is always more accurate, so use it every time",
              "No — a normal chat answers instantly; Deep Research's minutes-long run is overkill for a quick recall",
              "Yes — only Deep Research can access pricing information",
            ],
            correctIndex: 1,
            explanation:
              "Deep Research earns its wait when depth and citations matter. For a quick fact you half-know already, a normal chat is faster and perfectly adequate.",
          },
        },
        {
          html: `<h3>When Deep Research pays off</h3><p>Reach for it when the work involves reading widely and synthesizing, not just recalling. Strong fits:</p><ul><li>Comparing several products, vendors, or approaches on specific criteria</li><li>Market or competitor landscapes that need current, cited data</li><li>Literature-style reviews where you need to trust the sources</li><li>Decisions where you'll be asked "where did this come from?"</li></ul><h3>When to skip it</h3><ul><li>Quick facts you can verify in one glance</li><li>Creative drafting or brainstorming</li><li>Anything where you don't care about citations</li></ul>`,
        },
        {
          html: `<h3>The brief is everything</h3><p>Deep Research runs for minutes before you can course-correct, so a vague prompt wastes real time. Treat your opening message as a <strong>research brief</strong>, not a question. A good brief names four things:</p><ul><li><strong>The question:</strong> exactly what you're trying to decide or learn</li><li><strong>The scope:</strong> what's in bounds and what's explicitly out</li><li><strong>The criteria:</strong> what "good" looks like — the dimensions you care about</li><li><strong>The output:</strong> format, length, and how you'll use it</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Add a recency bound ("prioritize sources from the last 18 months") and a geography or segment ("focus on the EU mid-market"). Constraints don't limit Deep Research — they aim it.</p></div>`,
          question: {
            text: 'Which opening brief will give Deep Research the clearest target?',
            options: [
              '"Tell me about project management tools."',
              '"Compare Asana, Linear, and Jira for a 15-person software team on pricing, native automation, and reporting. Prioritize sources from the last 12 months. Output a comparison table plus a one-paragraph recommendation."',
              '"What\'s the best project management tool? Be thorough."',
            ],
            correctIndex: 1,
            explanation:
              "The second brief names the question, scope, criteria, recency, and output format — so the whole multi-minute run stays aimed at exactly what you need instead of wandering.",
          },
        },
        {
          html: `<h3>Answer the clarifying questions</h3><p>Deep Research often pauses before it starts and asks you a few clarifying questions — budget, audience, region, which options to include. This is the cheapest moment to steer the entire run.</p><p>Don't rush past it. Thirty seconds spent answering here beats a polished report aimed at the wrong target. If it doesn't ask, you can still add the same details yourself up front.</p><h3>Steering scope mid-flight</h3><p>If early framing was off, it's usually better to stop and restart with a corrected brief than to let a long run finish on the wrong premise. A precise restart costs less than reading — and mistrusting — a report built on the wrong assumptions.</p>`,
          question: {
            text: 'Deep Research pauses and asks: "Should I include enterprise-only tools, or stay within your stated 15-person team budget?" What\'s the best move?',
            options: [
              "Ignore it and let it run — clarifying questions just slow things down",
              'Answer precisely ("stay within the small-team budget, exclude enterprise-only tools") so the whole run stays on target',
              "Tell it to include everything, then filter the report yourself afterward",
            ],
            correctIndex: 1,
            explanation:
              "The clarifying question is your cheapest steering lever. A precise answer shapes every source it reads next — far more efficient than letting it over-collect and cleaning up later.",
          },
        },
        {
          html: `<h3>Read the report like an analyst, not a fan</h3><p>A Deep Research report looks authoritative — structured sections, confident prose, neat citations. That polish is exactly why you should stay skeptical. Your job is to <strong>verify, not admire</strong>.</p><p>Work through it deliberately:</p><ul><li><strong>Spot-check the citations:</strong> click through the claims that matter most and confirm the source actually says that</li><li><strong>Watch for stale or thin sources:</strong> one blog post cited five times is a weak spine for a big decision</li><li><strong>Note what's missing:</strong> a fair comparison that never mentions a leading option is a red flag</li></ul>`,
          question: {
            text: 'A Deep Research report confidently states a competitor "leads the market with 60% share," citing a single source. The number will go straight into a board deck. What should you do first?',
            options: [
              "Paste it into the deck — it's cited, so it's verified",
              "Click through to the source, confirm it actually says 60%, check the date, and look for a second source before using it",
              "Delete the whole report — one weak citation means all of it is wrong",
            ],
            correctIndex: 1,
            explanation:
              "Citations show where a claim came from, not that it's true or current. For a high-stakes number, open the source, confirm the figure and its date, and corroborate — without throwing out the rest of a useful report.",
          },
        },
        {
          html: `<h3>Iterate on the report</h3><p>The first report is a foundation, not the final word. Because the whole run stays in context, you can push on it conversationally:</p><ul><li>"You didn't cover the open-source options — add them with the same criteria."</li><li>"Section 3's sources are all from one vendor. Find independent ones."</li><li>"Turn the findings into a one-page brief for a non-technical exec."</li></ul><h3>A professional scenario</h3><p>You're evaluating whether to switch payroll providers. Deep Research reads provider docs, review sites, and compliance guides, then returns a criteria-based comparison. You spot-check the compliance claims, ask it to add two providers you know of, and have it reshape the result into a recommendation memo. That loop — brief, verify, refine — is where the real value lives.</p>`,
          question: {
            text: "Your first payroll-provider report leans heavily on the vendors' own marketing pages. What's the most useful follow-up?",
            options: [
              '"Make it sound more confident."',
              '"Re-run the comparison using independent review sites and compliance sources, and flag any claim that only appears in vendor marketing."',
              '"Start a brand-new Deep Research run and hope for better sources."',
            ],
            correctIndex: 1,
            explanation:
              "Naming the source problem and pointing it at independent evidence fixes the weakness directly, in the same context — far better than a vague nudge or throwing away the work you've already done.",
          },
        },
        {
          html: `<h3>What you've learned</h3><p>Deep Research turns ChatGPT into an analyst that reads widely and cites its work — but only if you brief it well, steer it early, and verify what comes back. The tool does the reading; the judgment stays yours.</p><h3>Next: from sources to spreadsheets</h3><p>Deep Research is about synthesizing what others have written. But often the most important data is <em>your own</em> — the messy CSV of last quarter's sales, the export from your survey tool. In the final lesson, you'll turn ChatGPT into a data analyst that works directly on your files.</p>`,
        },
      ],
    },
    {
      title: "Advanced Data Analysis",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'll upload [a sales CSV]. First profile the file — columns, types, row count, missing values, and anything that looks off. Then tell me total revenue by region and which segment grew fastest quarter over quarter, and show how you defined each term.",
        note: "Investigate any dramatic surprise — a huge spike is more often a data error than a real discovery.",
      },
      summary: "Upload your own spreadsheets and let ChatGPT chart, analyze, and pressure-test the numbers",
      estimatedMinutes: 15,
      content: `<p>Deep Research reads the world's data. Advanced Data Analysis reads yours. Upload a spreadsheet and ChatGPT writes and runs real code to clean, analyze, and chart it — but the analyst's discipline of sanity-checking every result is what separates insight from confident nonsense.</p>`,
      steps: [
        {
          html: `<h3>Your data, actually computed</h3><p><strong>Advanced Data Analysis</strong> lets you upload files — CSVs, Excel workbooks, even JSON — and ChatGPT works on them by writing and running real code in a sandbox. It isn't guessing at your numbers; it's computing them.</p><p>That distinction matters. When ChatGPT tells you "average order value rose 12%," it got there by actually running the calculation on your rows, and you can ask to see exactly how.</p><h3>What it handles well</h3><ul><li>Cleaning messy data — duplicates, blanks, inconsistent formats</li><li>Aggregations, trends, and comparisons across segments</li><li>Charts: bar, line, scatter, distributions</li><li>Combining multiple files on a shared key</li></ul>`,
          question: {
            text: 'You upload a 4,000-row sales CSV and ask for total revenue by region. How is ChatGPT arriving at the answer here?',
            options: [
              "It estimates from patterns it saw in similar data during training",
              "It writes and runs actual code that sums your real rows, and can show you that code",
              "It reads the first few rows and extrapolates the rest",
            ],
            correctIndex: 1,
            explanation:
              "Advanced Data Analysis executes real code against your uploaded file. The numbers come from your actual rows — not from estimation — and you can ask to inspect the code that produced them.",
          },
        },
        {
          html: `<h3>Start with the data, not the question</h3><p>Before asking for insight, ask ChatGPT to describe what it received. A quick <em>"profile this file: columns, data types, row count, missing values, and anything that looks off"</em> saves you from analyzing garbage.</p><p>This first pass catches the problems that silently wreck analysis: a "date" column stored as text, revenue with stray currency symbols, duplicate rows, or a region field with "US", "U.S.", and "USA" all meaning the same thing.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Ask "what assumptions did you have to make to load this?" Its answer reveals hidden decisions — how it parsed dates, what it did with blanks — before those decisions distort your results.</p></div>`,
          question: {
            text: 'You upload a messy export and immediately ask "which month had the highest revenue?" Why is profiling the file first the smarter opening move?',
            options: [
              "Profiling makes ChatGPT run faster on later questions",
              "A messy file may have text-formatted dates, duplicates, or inconsistent labels that would silently corrupt the monthly totals",
              "You can't ask analytical questions until the file is profiled",
            ],
            correctIndex: 1,
            explanation:
              "Insight built on dirty data is confident nonsense. Profiling surfaces bad date formats, duplicates, and inconsistent categories first — so the monthly totals are trustworthy before you act on them.",
          },
        },
        {
          html: `<h3>Ask analytical questions, not lookups</h3><p>The power isn't in retrieving cells — it's in asking questions a pivot table can't answer quickly:</p><ul><li>"Which customer segments grew fastest quarter over quarter, and by how much?"</li><li>"Is there a correlation between discount depth and repeat purchase rate?"</li><li>"Flag any products whose returns are more than two standard deviations above the mean."</li></ul><p>Let it compute, then ask it to explain <em>how</em> it defined each term. "How did you define a repeat purchase?" often reveals an assumption you'd want to change.</p>`,
          question: {
            text: 'ChatGPT reports "customers who used discounts have a 40% higher repeat-purchase rate." Before you act on it, what\'s the most important thing to ask?',
            options: [
              '"Can you make that into a nicer chart?"',
              '"How did you define \'repeat purchase\' and \'discount user,\' and does this show correlation or causation?"',
              '"Are you sure? Please double-check."',
            ],
            correctIndex: 1,
            explanation:
              "The headline depends entirely on the definitions behind it, and a correlation isn't proof discounts cause loyalty. Interrogating the definitions and the causal claim is what turns a number into a trustworthy insight. A vague 'are you sure?' rarely surfaces the real issue.",
          },
        },
        {
          html: `<h3>Charts that actually communicate</h3><p>ChatGPT can generate charts directly from your data — and refine them conversationally. Don't settle for the first render:</p><ul><li>"Use a line chart instead, with months on the x-axis."</li><li>"Sort the bars descending and label each with its value."</li><li>"Highlight the three months where we missed target in red."</li></ul><p>Then push for meaning: "What's the one sentence a busy exec should take from this chart?" The goal is a visual that makes the point on its own.</p>`,
          question: {
            text: "ChatGPT produces a cluttered chart with 30 overlapping categories. What's the best way to make it useful?",
            options: [
              "Accept it — the data is all there, which is what matters",
              'Ask it to group the long tail into "Other," keep the top categories, and sort descending so the story is readable at a glance',
              "Ask for the raw numbers instead and build the chart yourself in a spreadsheet",
            ],
            correctIndex: 1,
            explanation:
              "A chart's job is to communicate, not to dump every category. Grouping the long tail and sorting focuses attention on what matters — and you can do it conversationally without leaving the tool.",
          },
        },
        {
          html: `<h3>Sanity-check like your reputation depends on it</h3><p>Because the output looks so polished, the biggest risk is trusting a wrong answer. Build a habit of pressure-testing:</p><ul><li><strong>Check the totals:</strong> do the segment numbers add up to the grand total you expected?</li><li><strong>Eyeball a few rows by hand:</strong> pick one customer and verify the calculation manually</li><li><strong>Question surprises:</strong> a 300% spike is often a data error, not a discovery</li><li><strong>Watch for dropped rows:</strong> ask "how many rows did you exclude, and why?"</li></ul>`,
          question: {
            text: 'The analysis shows Q3 revenue tripling — far beyond anything you\'d expect. What\'s the disciplined first reaction?',
            options: [
              "Celebrate and put it in the report — the tool computed it, so it's real",
              'Investigate before believing it: check for duplicated rows, a currency or units mix-up, or double-counted orders inflating Q3',
              "Assume the tool made an error and discard the entire analysis",
            ],
            correctIndex: 1,
            explanation:
              "Dramatic surprises are more often data artifacts than genuine findings. Investigating the spike — duplicates, unit mismatches, double-counting — protects you from reporting nonsense, without throwing away the whole analysis.",
          },
        },
        {
          html: `<h3>Analysis as a conversation</h3><p>Real analysis is iterative. One finding raises the next question, and because the file and prior steps stay in context, you can keep building:</p><ul><li>"Now break that same trend down by acquisition channel."</li><li>"Filter to enterprise customers only and re-run the comparison."</li><li>"Combine this with the support-tickets file on customer ID and see if churned accounts had more tickets."</li></ul><p>When you're done, ask for the deliverable: "Summarize the three findings that matter, each with the chart and the caveat a skeptical exec would raise." You get analysis <em>and</em> the honest footnotes.</p>`,
          question: {
            text: "You've found that churned customers filed more support tickets. What's the strongest next step in the same conversation?",
            options: [
              '"Great, we\'re done — churn is caused by support issues."',
              '"Before concluding, check whether high-ticket customers who didn\'t churn exist too, and control for account size — heavy users may just file more tickets regardless."',
              '"Make a chart of it and end the analysis there."',
            ],
            correctIndex: 1,
            explanation:
              "A correlation between tickets and churn isn't causation. Testing the counter-case and controlling for a confounder like account size is exactly the iterative rigor that separates real insight from a tempting story.",
          },
        },
        {
          html: `<h3>You've completed the Deep Dive</h3><p>Step back and look at how far you've come. Across this course you've turned ChatGPT into far more than a chatbot:</p><ul><li><strong>Custom GPTs, Apps, and Agents</strong> — reusable workflows, connected tools, and delegated multi-step tasks</li><li><strong>Creating and Coding</strong> — cohesive image sets, vibe coding, and Codex for real automation</li><li><strong>Research and Analysis</strong> — Deep Research for the world's data, Advanced Data Analysis for your own</li></ul><h3>The thread through all of it</h3><p>Every advanced feature rewarded the same discipline: a clear frame, active steering, and skeptical verification. The tools got more powerful — but your judgment is what made them trustworthy. That's the real deep dive. Now go put it to work on something that matters.</p>`,
        },
      ],
    },
  ],
};
