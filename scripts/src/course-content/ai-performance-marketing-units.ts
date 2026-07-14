import type { UnitSeed } from "./types";

export const PERF_MARKETING_UNIT_1: UnitSeed = {
  title: "Performance Marketing Foundations",
  lessons: [
    {
      title: "Modern Performance Marketing",
      summary:
        "Your first day at TechFlow — what performance marketing measures and where it happens",
      content: `<p>Congratulations — you've just been hired as the performance marketing manager at TechFlow, a launching B2B SaaS startup that helps marketing teams automate their workflows. Your first-day mission: understand what performance marketing actually is, which channels drive measurable results, and how AI tools now handle most of the heavy lifting.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my performance marketing strategist. My business: [describe what you sell, who buys it, average sale value]. My monthly ad budget: [amount]. My goal: [e.g. 20 qualified leads/month]. (1) Recommend which channels to start with — search, social, email, affiliate — and in what order, with reasoning based on MY budget and buyer. (2) Split my budget across the recommended channels for the first 90 days. (3) Tell me what 'good' would look like: a realistic cost per lead for my industry, and the earliest week I should expect judgeable results. Plain English, no jargon without explanation.",
        note: "Save this plan — the rest of the course builds on it. Notice how the channel order depends on YOUR buyer, not on what's trendy.",
      },
      steps: [
        {
          html: `<h3>Pay for actions, not applause</h3><p>Performance marketing means <strong>paying for specific actions</strong>: clicks, leads, sign-ups, sales. Every result is tracked and measured — you always know what each result cost you.</p><p>Brand marketing builds awareness over time through podcasts, billboards, or sponsorships — valuable, but hard to measure directly. Performance marketing tracks every interaction and doubles down on what's working. TechFlow is a startup that needs measurable results fast — that's exactly why you're here.</p><ul><li><strong>Transparency:</strong> know your cost per result, always</li><li><strong>Speed:</strong> test a message today, read results this week</li><li><strong>Control:</strong> scale winners, kill losers, adjust daily</li></ul>`,
          question: {
            text: "What problems does performance marketing solve for TechFlow that brand marketing doesn't?",
            options: [
              "Tracking sales directly, testing messages quickly, and knowing your cost per result",
              "Building long-term awareness through sponsorships",
              "Eliminating the need for a good product",
              "Making advertising free",
            ],
            correctIndex: 0,
            explanation:
              "Performance marketing provides transparency and speed — you always know what you're paying for each result and can test rapidly. Long-term awareness is brand marketing's job, not performance marketing's.",
          },
        },
        {
          html: `<h3>The four channels that drive results</h3><p>Performance marketing happens across specific channels where your customers spend time — each with different strengths, costs, and audiences:</p><ul><li><strong>Search</strong> targets high-intent users actively looking for products on Google or Bing — they're ready NOW</li><li><strong>Social media</strong> builds awareness and engagement on platforms like Facebook, Instagram, LinkedIn — discovery for people who weren't looking</li><li><strong>Email</strong> nurtures leads and drives conversions through personalized messaging — cheapest repeat touch you own</li><li><strong>Affiliate</strong> leverages partners who promote you for commission — you pay only when they deliver</li></ul><p>The rule at TechFlow: <strong>search when users are ready to buy, social for discovery, email for nurturing, affiliate for scaling through partners.</strong></p>`,
          question: {
            text: "TechFlow needs sign-ups from people actively searching \"marketing workflow automation tool\" this week. Which channel fits best?",
            options: [
              "Affiliate — partners take time to recruit but scale well",
              "Search ads — those searchers have high intent right now",
              "A billboard near tech offices",
            ],
            correctIndex: 1,
            explanation:
              "People typing exactly what you sell into Google are the highest-intent audience that exists. Search captures demand that already exists — social and affiliate create and scale it over time.",
          },
        },
        {
          html: `<p>First-day training with Nova, TechFlow's AI marketing coach.</p>`,
          chat: [
            {
              bot: "Welcome to TechFlow! Nova here — your AI marketing coach 👋 Let's make sure day one sticks.",
            },
            {
              bot: "Match each channel to its primary strength for TechFlow.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Search", right: "Captures high-intent buyers right now" },
                { left: "Social media", right: "Discovery — reaches people who weren't looking" },
                { left: "Email", right: "Nurtures leads you already have" },
                { left: "Affiliate", right: "Partners promote you for commission" },
              ],
              feedback:
                "Perfect — right channel for the right goal. That single idea prevents most wasted ad budgets.",
              hint: "Ready-to-buy / browsing / already-yours / partner-powered.",
            },
            {
              bot: "The CEO asks: \"Should we sponsor a podcast to get sign-ups we can measure this month?\"",
              ask: "Is podcast sponsorship performance marketing?",
              inputType: "binary",
              options: ["Yes — it's paid, so it counts", "No — it's brand marketing, hard to measure directly"],
              correctIndex: 1,
              feedback:
                "Right — sponsorships build awareness but you can't cleanly track each listener to a sign-up. Not wrong to do — just the wrong tool for 'measurable this month'.",
              hint: "Can you count exactly what each listener cost you?",
            },
            {
              bot: "Fill in the core definition.",
              ask: "Performance marketing means paying for specific ___ — every result tracked and measured.",
              inputType: "fill-blank",
              template: "Performance marketing means paying for specific ___ — every result tracked and measured.",
              options: ["actions", "impressions", "opinions"],
              correctIndex: 0,
              feedback:
                "Exactly — clicks, leads, sign-ups, sales. If you can't measure the action, it's not performance marketing.",
              hint: "Clicks, leads, sales are all examples of...",
            },
            {
              bot: "Last one: where does AI fit in modern performance marketing?",
              ask: "Pick the accurate picture:",
              inputType: "choice",
              options: [
                "AI replaces the marketer entirely — set it and forget it",
                "AI handles the heavy lifting — bidding, analysis, drafts — while you set strategy, budgets, and judgment calls",
                "AI is only useful for writing ad copy",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — platforms use AI for bidding and delivery, and tools like ChatGPT and Claude accelerate research, copy, and analysis. Your job shifts from button-pushing to strategy and judgment. That's this whole course.",
              hint: "Who still decides the budget and the goal?",
            },
          ],
        },
        {
          html: `<h3>Your role in the AI era</h3><p>Here's what's fundamentally changed: you no longer manually manage every bid and placement. AI now handles most of the heavy lifting:</p><ul><li><strong>Inside the platforms:</strong> Google and Meta use machine learning to decide who sees your ad, when, and at what bid — often better than any human could manually</li><li><strong>Outside the platforms:</strong> ChatGPT and Claude compress the thinking work — channel strategy, ad copy drafts, audience research, results analysis</li><li><strong>Your job:</strong> feed the machines good inputs (clear goals, honest budgets, strong creative, clean tracking) and make the judgment calls AI can't</li></ul><div class="discovery"><p>💡 <strong>The TechFlow mindset</strong></p><p>Bad performance marketers fight the AI ("I'll outsmart the algorithm"). Good ones direct it: clear goal in, clean data in, strong creative in — then read the results and steer. You'll practice that loop in every lesson ahead.</p></div>`,
          question: {
            text: "What's the modern performance marketer's actual job, now that AI handles bidding and delivery?",
            options: [
              "Manually adjusting bids every hour to beat the algorithm",
              "Setting strategy and goals, supplying strong creative and clean data, and making judgment calls on the results",
              "Nothing — campaigns fully run themselves",
            ],
            correctIndex: 1,
            explanation:
              "Platform AI optimizes toward whatever goal and data you give it — garbage in, garbage out. The human edge is strategy, creative, and judgment: exactly the parts you'll build in this course.",
          },
        },
      ],
    },
    {
      title: "Essential Metrics",
      summary:
        "CPC, CPA, ROAS — the numbers that tell you if your money is working",
      content: `<p>Week one at TechFlow: the CEO asks "are the ads working?" — and "we got lots of clicks!" is not an answer. This lesson gives you the handful of metrics that actually answer that question, the math behind them (easier than it looks), and how AI turns a confusing dashboard into a clear verdict.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my performance marketing analyst. Here are my campaign numbers: [paste what you have — e.g. spend, impressions, clicks, leads/sales, and revenue if known. Rough numbers are fine]. My average sale is worth [amount] and my profit margin is roughly [X%]. (1) Calculate my CTR, CPC, conversion rate, CPA, and ROAS — show the math in one line each. (2) Tell me in plain English: is this campaign healthy, borderline, or losing money? (3) Which ONE metric is my weakest link, and what's the most likely fix? (4) What's the maximum CPA I can afford before I'm losing money on each sale?",
        note: "That last number — your break-even CPA — is the single most important number in performance marketing. Write it down; every campaign decision compares against it.",
      },
      steps: [
        {
          html: `<h3>The metric chain: follow the money</h3><p>Every campaign is a chain, and each metric measures one link:</p><ul><li><strong>CTR (click-through rate):</strong> of the people who saw the ad, how many clicked? — measures whether your ad is compelling</li><li><strong>CPC (cost per click):</strong> what each visitor cost — spend ÷ clicks</li><li><strong>Conversion rate:</strong> of the clickers, how many took the action (lead, sale)? — measures your landing page and offer</li><li><strong>CPA (cost per acquisition):</strong> what each RESULT cost — spend ÷ conversions. The number the CEO actually cares about</li><li><strong>ROAS (return on ad spend):</strong> revenue ÷ spend — "for every $1 in, how many dollars out?"</li></ul><p>Memorize the chain: <strong>seen → clicked → converted → profitable.</strong> When a campaign underperforms, the chain tells you exactly which link broke.</p>`,
          question: {
            text: "TechFlow spends $1,000, gets 500 clicks, and 25 people sign up for a demo. What's the CPA?",
            options: [
              "$2 — that's the cost per click",
              "$40 — $1,000 spend ÷ 25 sign-ups",
              "5% — that's the conversion rate",
            ],
            correctIndex: 1,
            explanation:
              "CPA = spend ÷ conversions = $1,000 ÷ 25 = $40 per demo sign-up. ($2 is the CPC and 5% is the conversion rate — same chain, different links.)",
          },
        },
        {
          html: `<h3>ROAS and the break-even line</h3><p>ROAS answers "was it worth it?": revenue ÷ ad spend. Spend $1,000, generate $4,000 in sales → ROAS is 4 (often written 4x or 400%).</p><p>But the trap: <strong>a ROAS above 1 is NOT automatically profitable.</strong> If your product costs money to make and deliver, part of that revenue was never yours. With a 50% margin, you need roughly 2x ROAS just to break even.</p><div class="discovery"><p>💡 <strong>Know your break-even CPA</strong></p><p>The most useful number you'll ever calculate: the maximum you can pay per customer and still profit. If a customer brings you $100 profit, a $40 CPA is a money machine — the same $40 CPA on a $30-profit product is a slow leak. Every bid and budget decision compares against this line.</p></div>`,
          question: {
            text: "A store with 50% profit margins runs ads at 1.5x ROAS. What's really happening?",
            options: [
              "They're profitable — ROAS is above 1",
              "They're losing money — at 50% margins they need about 2x ROAS just to break even",
              "Impossible to say without CTR data",
            ],
            correctIndex: 1,
            explanation:
              "$1 spend → $1.50 revenue → only $0.75 is margin after product costs → 25 cents lost per dollar spent. ROAS only makes sense compared against your margins — that's why break-even ROAS is the first number to compute.",
          },
        },
        {
          html: `<p>Metric drills with Nova — dashboard detective time.</p>`,
          chat: [
            {
              bot: "Nova here 📊 The dashboard looks scary, but it's just a chain with four links. Let's read some real situations.",
            },
            {
              bot: "Campaign A: thousands of impressions, CTR is 0.3% (very low). Everything after the click looks fine.",
              ask: "Which link in the chain is broken?",
              inputType: "choice",
              options: [
                "The landing page — redesign it",
                "The ad itself — it's not compelling enough to earn clicks",
                "The pricing — lower it immediately",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — low CTR means people see the ad and scroll past. The fix lives in the ad: sharper hook, clearer offer, better creative. The landing page never even got its chance.",
              hint: "The problem happens BEFORE anyone clicks.",
            },
            {
              bot: "Campaign B: great CTR, cheap clicks... and almost zero sign-ups.",
              ask: "Where do you look now?",
              inputType: "choice",
              options: [
                "The ad — make it flashier",
                "The landing page and offer — people liked the promise but not what they found",
                "Nowhere — cheap clicks mean success",
              ],
              correctIndex: 1,
              feedback:
                "Right — clicks without conversions means the page broke the promise: slow, confusing, or the offer doesn't match the ad. Fix the page before spending another dollar on traffic.",
              hint: "They clicked... then what did they see?",
            },
            {
              bot: "Match each metric to what it measures.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "CTR", right: "Is the ad compelling?" },
                { left: "Conversion rate", right: "Does the page turn visitors into results?" },
                { left: "CPA", right: "What does each result cost?" },
                { left: "ROAS", right: "Dollars out per dollar in" },
              ],
              feedback:
                "That's the whole diagnostic toolkit — four questions that locate any campaign problem in seconds.",
              hint: "Ad → page → cost → return.",
            },
            {
              bot: "The CEO celebrates: \"Our clicks doubled this month!\" But sign-ups stayed flat and spend doubled too.",
              ask: "Is this good news?",
              inputType: "binary",
              options: ["Yes — more clicks is growth", "No — paying double for the same results"],
              correctIndex: 1,
              feedback:
                "Right — clicks are a means, not the goal. Same conversions at double the spend means CPA doubled. Always judge campaigns by cost per RESULT, not by activity metrics that feel good.",
              hint: "What happened to the cost per sign-up?",
            },
          ],
        },
        {
          html: `<h3>AI as your analyst</h3><p>You don't need to love spreadsheets — you need to ask good questions. The weekly ritual at TechFlow:</p><ul><li><strong>Export or copy the numbers</strong> from your ads dashboard (spend, impressions, clicks, conversions, revenue)</li><li><strong>Paste into AI:</strong> <em>"Calculate CTR, CPC, conversion rate, CPA and ROAS. Compare to last week. Which link in the chain weakened, and what's the most likely cause?"</em></li><li><strong>Sanity-check the verdict:</strong> does the explanation match what you changed this week? AI finds patterns; you know the context</li></ul><p>One warning: <strong>judge campaigns on the metric chain, not vanity metrics.</strong> Impressions, likes, and even clicks feel like progress — CPA and ROAS pay the rent. Next unit: putting these numbers to work in real Google Ads campaigns.</p>`,
          question: {
            text: "Why are impressions and likes called \"vanity metrics\" in performance marketing?",
            options: [
              "They're always fake numbers generated by bots",
              "They feel like progress but don't measure cost per result — campaigns are judged on CPA and ROAS",
              "Google hides them from advertisers",
            ],
            correctIndex: 1,
            explanation:
              "Vanity metrics measure activity, not outcomes. A campaign can win likes while losing money. The chain ends at CPA and ROAS — the numbers that connect ad spend to actual business results.",
          },
        },
      ],
    },
  ],
};

export const PERF_MARKETING_UNIT_2: UnitSeed = {
  title: "Search and Contextual Advertising",
  lessons: [
    {
      title: "Search Intent & Keywords",
      summary:
        "Bid on the searches that convert — match types, negatives, and AI keyword strategy",
      content: `<p>TechFlow's first campaign will be search ads — capturing people already looking for workflow automation. But paid search punishes sloppy keyword choices with real money, fast. This lesson covers choosing keywords by intent, controlling them with match types, and the negative keyword list that stops budget leaks before they start.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my Google Ads keyword strategist. My business: [describe product/service + who buys it]. My monthly search budget: [amount]. (1) Build me a starter keyword list of 15–20 keywords grouped by intent: ready-to-buy terms, comparison/alternative terms, and problem-aware terms. (2) Recommend a match type for each group and explain why in one line. (3) Build my starter NEGATIVE keyword list — at least 15 terms that would waste my budget (free-seekers, job-seekers, DIY researchers, wrong audiences). (4) Tell me which single ad group to launch first with my budget and why.",
        note: "The negative list is where beginners lose the most money — 'free', 'jobs', 'salary', 'course', 'template' can quietly eat half a budget. Add negatives BEFORE launch, not after the bill.",
      },
      steps: [
        {
          html: `<h3>In paid search, intent is money</h3><p>Organic SEO can afford to attract browsers — in paid search, <strong>every click costs cash</strong>, so intent matters double:</p><ul><li>"what is workflow automation" — informational. Cheap clicks, almost no buyers. Let your blog catch these</li><li>"best workflow automation tools" — commercial. Comparers: valuable if you can win the comparison</li><li>"workflow automation software pricing" / "[competitor] alternative" — transactional. Expensive clicks, real buyers. This is where TechFlow's budget goes first</li></ul><p>The starter rule: <strong>with a limited budget, buy the bottom of the funnel first.</strong> Ready-to-buy searches convert at multiples of informational ones — win there, then expand upward as budget grows.</p>`,
          question: {
            text: "TechFlow has a small starting budget. Which keyword deserves it first?",
            options: [
              "\"what is marketing automation\" — huge volume of learners",
              "\"marketing workflow software pricing\" — fewer searches, but searchers ready to evaluate and buy",
              "\"marketing\" — maximum possible reach",
            ],
            correctIndex: 1,
            explanation:
              "Pricing searches signal evaluation mode — small volume, high conversion. Broad and informational terms burn small budgets on curious non-buyers. Bottom-of-funnel first is the golden rule of limited-budget search.",
          },
        },
        {
          html: `<h3>Match types: your precision dial</h3><p>Match types control how loosely Google interprets your keyword:</p><ul><li><strong>Broad match</strong> (workflow automation): Google reaches related searches it deems relevant — widest reach, least control. Works best paired with smart bidding and good conversion data</li><li><strong>Phrase match</strong> ("workflow automation"): the meaning of your phrase must be in the search — balanced reach and control</li><li><strong>Exact match</strong> ([workflow automation software]): only that search and close variants — maximum control, minimum reach</li></ul><div class="discovery"><p>💡 <strong>And the leak-stopper: negative keywords</strong></p><p>Negatives tell Google what you NEVER want to pay for: add "free", "jobs", "course", and your ads stop showing to freebie-hunters, job-seekers, and students. Every account needs a negative list from day one — it's the cheapest optimization in all of paid search.</p></div>`,
          question: {
            text: "TechFlow's ad keeps showing for \"workflow automation manager jobs\" and paying for useless clicks. What's the fix?",
            options: [
              "Pause the whole campaign",
              "Add \"jobs\" (and \"salary\", \"career\") as negative keywords",
              "Switch every keyword to broad match for better reach",
            ],
            correctIndex: 1,
            explanation:
              "Negative keywords surgically remove wasted spend while keeping the good traffic flowing. Job-seekers, free-hunters, and students are the classic budget leaks — negatives are the plug.",
          },
        },
        {
          html: `<p>Keyword bootcamp with Nova — protect that budget.</p>`,
          chat: [
            {
              bot: "Nova here 🔑 In paid search, every keyword decision is a spending decision. Let's drill.",
            },
            {
              bot: "Match each search to its funnel stage for TechFlow.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "\"how do marketing teams save time\"", right: "Problem-aware — blog territory" },
                { left: "\"best workflow tools for agencies\"", right: "Comparing — worth bidding if you can win" },
                { left: "\"techflow pricing\"", right: "Ready to buy — maximum priority" },
              ],
              feedback:
                "Perfect funnel reading — and notice the budget flows bottom-up: buy the buyers first.",
              hint: "Learning → comparing → buying.",
            },
            {
              bot: "Fill in the match type.",
              ask: "___ match gives maximum control but minimum reach.",
              inputType: "fill-blank",
              template: "___ match gives maximum control but minimum reach.",
              options: ["Exact", "Broad", "Phrase"],
              correctIndex: 0,
              feedback:
                "Right — [exact match] shows only for that search and close variants. Great for your proven money keywords; too narrow to discover new ones.",
              hint: "The one written in [square brackets].",
            },
            {
              bot: "A startup launches broad match keywords, no negative list, $50/day. Two weeks later: hundreds of clicks from \"free automation templates\" and \"automation engineer salary\". ",
              ask: "What was the missing piece?",
              inputType: "choice",
              options: [
                "Bigger budget — $50/day is too small to work",
                "A negative keyword list — broad match without negatives leaks money to non-buyers",
                "Prettier ad copy",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — broad match explores, and without negatives it explores your wallet. Broad + negatives + conversion tracking is a system; broad alone is a leak.",
              hint: "What tells Google where NOT to go?",
            },
            {
              bot: "Gut-check: your best friend says \"just bid on the word 'software', everyone searches that!\"",
              ask: "Good idea?",
              inputType: "binary",
              options: ["Sure — huge volume", "No — broad, expensive, and intent-less"],
              correctIndex: 1,
              feedback:
                "Right — one-word head terms attract every possible intent at premium prices. \"Software\" searchers might want games, jobs, or homework help. Specific phrases with commercial intent are where paid search pays.",
              hint: "What fraction of 'software' searchers want YOUR software?",
            },
          ],
        },
        {
          html: `<h3>The AI keyword workflow</h3><p>Your repeatable process for any search campaign:</p><ul><li><strong>Brainstorm with AI:</strong> "list every search a [your buyer] might type when they're ready to evaluate tools like [yours] — group by intent"</li><li><strong>Validate in Google Keyword Planner</strong> (free with an ads account): real volumes and suggested bids for your shortlist</li><li><strong>Structure tight ad groups:</strong> keywords with the same intent share an ad group, so the ad text can speak directly to that intent — relevance is rewarded with cheaper clicks (next lessons explain why)</li><li><strong>Draft negatives BEFORE launch:</strong> "list 20 negative keywords for a [your business] campaign" — then keep adding weekly from real search data</li></ul><p><strong>Launch checklist mindset: every keyword earns its place with intent, every ad group has one job, and the negative list is live from day one.</strong> Next: the targeting layers that decide who actually sees your ads.</p>`,
          question: {
            text: "Why group keywords with the same intent into the same ad group?",
            options: [
              "Google requires a minimum of 20 keywords per group",
              "So the ad text can speak directly to that one intent — relevance earns better positions at cheaper prices",
              "It makes the dashboard look more organized",
            ],
            correctIndex: 1,
            explanation:
              "When someone searches \"workflow software pricing\" and your ad mentions pricing, relevance soars — clicks rise and Google rewards you with cheaper, higher positions. Tight ad groups are how that relevance is built.",
          },
        },
      ],
    },
    {
      title: "Targeting Layers in Google Ads",
      summary:
        "Keywords are just layer one — stack audiences, locations, schedules, and devices for precision",
      content: `<p>Keywords decide what searches trigger your ad — but Google Ads offers far more dials: who the searcher is, where they are, what time it is, what device they're on, and which campaign type carries the message. This lesson maps the targeting layers so TechFlow's budget reaches exactly the right people.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my Google Ads campaign architect. My business: [describe + where you sell/serve]. My budget: [amount/month]. My buyer: [describe them — role, company size or life situation, when they're likely researching]. Design my first campaign's targeting stack: (1) campaign type to start with (Search / Performance Max / Display / YouTube) and why; (2) location targeting — exact areas to include AND exclude; (3) ad schedule — should I run 24/7 or dayparted, given my buyer?; (4) audience layers worth adding in observation mode first; (5) device considerations. Explain each choice in one plain-English line, and flag which layers I should NOT restrict yet because I lack data.",
        note: "Note the 'observation mode' advice — watch how audiences perform before restricting to them. Data first, then narrowing. Restricting too early on guesses is the classic over-targeting mistake.",
      },
      steps: [
        {
          html: `<h3>Campaign types: where your ad can live</h3><p>Google Ads is a family of campaign types, each with a different job:</p><ul><li><strong>Search:</strong> text ads on search results — captures existing demand. TechFlow's starting point</li><li><strong>Display:</strong> banners across millions of websites — cheap awareness and retargeting, low immediate intent</li><li><strong>YouTube (Video):</strong> video ads — powerful for explaining a new product, priced for attention</li><li><strong>Performance Max:</strong> Google's AI runs your ads across ALL surfaces (search, display, YouTube, Gmail, Maps) from one campaign — powerful once you have conversion data to feed it, opaque when you don't</li></ul><p>Sequencing rule: <strong>start where intent is highest (Search), feed the system conversion data, then let AI-driven types like Performance Max scale what's proven.</strong></p>`,
          question: {
            text: "Why is Search the recommended first campaign type before Performance Max?",
            options: [
              "Performance Max costs more per click by rule",
              "Search captures clear existing demand and generates the conversion data that AI-driven campaign types need to perform",
              "Performance Max is being discontinued",
            ],
            correctIndex: 1,
            explanation:
              "Performance Max is Google's AI spending your money across every surface — it excels when trained on solid conversion data. Search gives you controllable, high-intent results first, producing exactly the data that later feeds the machine.",
          },
        },
        {
          html: `<h3>The layers on top of keywords</h3><p>Every layer narrows WHO, WHERE, and WHEN:</p><ul><li><strong>Locations:</strong> countries, cities, radii — and exclusions. A London service business shouldn't pay for Manchester clicks</li><li><strong>Ad schedule:</strong> B2B buyers research on work hours; emergency plumbers need 2am coverage. Match the schedule to the buyer's moment</li><li><strong>Audiences:</strong> layer Google's data on top of keywords — in-market segments (actively shopping for a category), remarketing (visited your site before), customer lists</li><li><strong>Demographics & devices:</strong> age, household income brackets, mobile vs desktop — adjust bids where data shows differences</li></ul><div class="discovery"><p>💡 <strong>Observation before restriction</strong></p><p>Most audience layers can run in "observation" mode: your ads still show to everyone, but you SEE how each audience performs. Watch first, then bid up the winners or restrict once the data speaks. Guess-based narrowing starves campaigns.</p></div>`,
          question: {
            text: "What's the advantage of adding audiences in \"observation\" mode first?",
            options: [
              "Observation mode is free — targeted mode costs extra",
              "You collect performance data per audience without restricting reach — then narrow based on evidence, not guesses",
              "It hides your strategy from competitors",
            ],
            correctIndex: 1,
            explanation:
              "Observation mode is a free experiment running inside your campaign: every audience gets measured while your reach stays full. Restriction should be a conclusion from data — observation mode is how you gather it.",
          },
        },
        {
          html: `<p>Targeting simulations with Nova — set the dials.</p>`,
          chat: [
            {
              bot: "Nova here 🎯 Targeting is a stack of dials. Let's set them for some real businesses.",
            },
            {
              bot: "A Bristol-only wedding caterer is getting ad clicks from all over the UK.",
              ask: "First dial to fix?",
              inputType: "choice",
              options: [
                "Ad schedule — weddings are weekend events",
                "Location targeting — restrict to Bristol + a sensible radius",
                "Device targeting — brides use phones",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — every click from Aberdeen is pure waste for a Bristol caterer. Location is the first dial for any local business, including the EXCLUSIONS.",
              hint: "Where can this business actually deliver?",
            },
            {
              bot: "Match each business to its smartest schedule.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "B2B software (like TechFlow)", right: "Weekday work hours emphasis" },
                { left: "Emergency locksmith", right: "24/7 — crises don't schedule" },
                { left: "Restaurant bookings", right: "Late afternoon and evenings" },
              ],
              feedback:
                "Right — the schedule mirrors the buyer's moment of need. Money spent when your buyer is asleep is money donated.",
              hint: "When does each buyer actually search?",
            },
            {
              bot: "Fill in the layering principle.",
              ask: "Audiences layered on keywords answer WHO is searching, not just ___ they searched.",
              inputType: "fill-blank",
              template: "Audiences layered on keywords answer WHO is searching, not just ___ they searched.",
              options: ["what", "when", "why"],
              correctIndex: 0,
              feedback:
                "Exactly — same keyword, different searcher. \"Workflow software\" from an in-market marketing director is worth more than the same words from a student writing an essay.",
              hint: "Keywords capture the words; audiences capture the person.",
            },
            {
              bot: "A new advertiser stacks EVERY restriction on day one: one postcode, 25–34 only, weekdays 9–11am, mobile only, three audiences required. Result: 12 impressions a week.",
              ask: "Diagnosis?",
              inputType: "binary",
              options: ["Perfectly precise targeting", "Over-targeted — strangled its own reach"],
              correctIndex: 1,
              feedback:
                "Strangled — precision without data is just guessing with extra steps. Start reasonably broad, observe, then narrow where the numbers point. Targeting is carved from evidence, not assumptions.",
              hint: "Can Google learn anything from 12 impressions?",
            },
          ],
        },
        {
          html: `<h3>The TechFlow launch stack</h3><p>Putting the layers together for a first campaign — the pattern works for any business:</p><ul><li><strong>Campaign type:</strong> Search — highest intent, clearest data</li><li><strong>Keywords:</strong> bottom-funnel ad groups from last lesson, negatives live</li><li><strong>Locations:</strong> only where you can sell and serve — with exclusions</li><li><strong>Schedule:</strong> matched to the buyer's research hours, reviewed with real data after 2 weeks</li><li><strong>Audiences:</strong> in-market and remarketing added in observation mode</li><li><strong>AI prompt to save:</strong> <em>"Here's my campaign's performance by audience, device, location and hour [paste]. Which segments over/under-perform, and what bid adjustments or restrictions does the data justify?"</em></li></ul><p><strong>Layers turn one budget into a precision instrument — but only data earns the right to tighten them.</strong> Next: the optimization loop that makes campaigns cheaper every week.</p>`,
          question: {
            text: "What earns you the right to tighten a targeting layer?",
            options: [
              "Instinct — you know your customer best",
              "Performance data showing the segment genuinely over- or under-performs",
              "Competitor behavior — copy what they target",
            ],
            correctIndex: 1,
            explanation:
              "Every restriction is a bet that excluded traffic was worthless. Data turns that bet into a calculation: observe segments first, then tighten where the evidence is clear. Assumptions strangle campaigns; evidence sharpens them.",
          },
        },
      ],
    },
    {
      title: "Search Optimization",
      summary:
        "Quality Score, smart bidding, and the weekly loop that makes every click cheaper",
      content: `<p>Launching a campaign is day one — the profit is in the optimization loop. This lesson covers why Google charges different advertisers different prices for the same keyword (Quality Score), how smart bidding works and when to trust it, and the weekly search terms ritual that steadily sharpens any account.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my Google Ads optimizer. Here's my search terms report from the last 2 weeks: [paste the search terms with clicks, cost, and conversions — or describe the notable ones]. My keywords: [list them]. My goal and target CPA: [state them]. (1) Sort the search terms into: money-makers to keep, irrelevant terms to add as negatives, and surprising terms worth adding as NEW keywords. (2) Draft the exact negative keyword additions. (3) Review my ad copy [paste it] against my top search terms — does the ad mirror what people actually type? Suggest one improved headline per ad group. (4) Should I stay on manual bidding or switch to a smart bidding strategy yet, given [X] conversions in the last 30 days?",
        note: "Run this every week — 20 minutes. The search terms report is literally a list of what real people typed before spending your money. No other report is this honest.",
      },
      steps: [
        {
          html: `<h3>Quality Score: why relevance is a discount</h3><p>Google doesn't just sell ad positions to the highest bidder — it factors in quality, because bad ads drive users away. Your keywords each get a <strong>Quality Score (1–10)</strong> built from three parts:</p><ul><li><strong>Expected CTR:</strong> how likely people are to click your ad</li><li><strong>Ad relevance:</strong> how closely the ad matches the search's intent</li><li><strong>Landing page experience:</strong> is the page relevant, honest, fast, and usable?</li></ul><p>The payoff is real money: <strong>high-quality ads win better positions at LOWER cost per click</strong> — while a poor Quality Score means paying a premium for worse placement. Relevance isn't a virtue in Google Ads; it's a discount.</p>`,
          question: {
            text: "Two advertisers bid on the same keyword. Advertiser A has a highly relevant ad and landing page; B has a generic ad pointing at their homepage. What happens?",
            options: [
              "Whoever bids more always wins the top spot",
              "A can win better positions while paying less per click — quality effectively discounts the auction",
              "Google splits impressions 50/50",
            ],
            correctIndex: 1,
            explanation:
              "The auction ranks ads on bid × quality. Strong relevance lets a lower bid beat a higher one — which is why tight ad groups, matched ad copy, and honest landing pages literally reduce your prices.",
          },
        },
        {
          html: `<h3>Smart bidding: renting Google's brain</h3><p>Bidding strategies range from manual control to full AI:</p><ul><li><strong>Manual / enhanced CPC:</strong> you set bids — full control, works with little data, doesn't scale</li><li><strong>Maximize conversions / target CPA:</strong> Google's AI bids per-auction using thousands of signals you can't see (device, hour, history, behavior) to hit your goal or target cost</li><li><strong>Target ROAS:</strong> the same, but optimizing revenue return — needs conversion values tracked</li></ul><div class="discovery"><p>💡 <strong>The data threshold</strong></p><p>Smart bidding is machine learning — it needs food. With a handful of conversions, it guesses; with 30+ conversions a month, it usually beats any human. The classic path: launch on manual or Maximize Clicks, build conversion volume, then graduate to target CPA once the machine has enough to learn from. And when you switch, expect 1–2 turbulent learning weeks — don't panic-revert.</p></div>`,
          question: {
            text: "When does switching to smart bidding (like target CPA) make sense?",
            options: [
              "Immediately at launch — AI always beats humans",
              "Once your campaign generates steady conversion volume (roughly 30+/month) for the algorithm to learn from",
              "Never — manual control is always superior",
            ],
            correctIndex: 1,
            explanation:
              "Smart bidding is only as good as its training data. Starved of conversions it flails; fed steady volume it out-bids any human, auction by auction. Build the data first, then hand over the keys.",
          },
        },
        {
          html: `<p>Optimization lab with Nova — sharpen the account.</p>`,
          chat: [
            {
              bot: "Nova here 🔧 Optimization is a loop, not an event. Let's run it on some real cases.",
            },
            {
              bot: "Match each Quality Score component to its fix.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Low expected CTR", right: "Sharper ad copy with a stronger hook" },
                { left: "Low ad relevance", right: "Tighter ad groups — ad mirrors the keyword" },
                { left: "Poor landing page experience", right: "Faster, honest, relevant page" },
              ],
              feedback:
                "Exactly — the three dials of Quality Score, each with a concrete fix. Improve them and your clicks literally get cheaper.",
              hint: "Ad appeal, ad match, page quality.",
            },
            {
              bot: "In your search terms report you find you paid for: \"free workflow templates\" (12 clicks, 0 conversions) and \"workflow software for accountants\" (3 clicks, 2 conversions!) — a niche you never targeted.",
              ask: "What's the double move?",
              inputType: "choice",
              options: [
                "Add 'free' as a negative AND add the accountant phrase as a new keyword",
                "Ignore both — the campaign is running fine overall",
                "Pause the campaign to stop all surprises",
              ],
              correctIndex: 0,
              feedback:
                "Perfect — the report giveth and taketh: cut the leak (negative), harvest the discovery (new keyword, maybe its own ad group with accountant-specific copy). That double move IS search optimization.",
              hint: "One term wastes, one term surprises — act on both.",
            },
            {
              bot: "Fill in the bidding rule.",
              ask: "Smart bidding needs conversion ___ to learn — starve it and it guesses.",
              inputType: "fill-blank",
              template: "Smart bidding needs conversion ___ to learn — starve it and it guesses.",
              options: ["data", "vibes", "colors"],
              correctIndex: 0,
              feedback:
                "Right — roughly 30+ conversions/month is the healthy diet. Until then, simpler strategies and manual attention win.",
              hint: "Machine learning eats one thing.",
            },
            {
              bot: "Day 3 after switching to target CPA, costs wobble up and the owner wants to revert everything immediately.",
              ask: "Revert now?",
              inputType: "binary",
              options: ["Yes — the numbers moved!", "No — learning phase turbulence is expected for 1–2 weeks"],
              correctIndex: 1,
              feedback:
                "Hold steady — the algorithm is exploring to learn. Reverting mid-learning wastes the invested data and restarts the clock. Judge smart bidding after the learning period, not during it.",
              hint: "What phase is the algorithm in on day 3?",
            },
          ],
        },
        {
          html: `<h3>The weekly 20-minute search ritual</h3><p>Everything in this unit compresses into one repeatable session:</p><ul><li><strong>Minutes 0–10 — search terms report:</strong> add negatives (cut leaks), harvest surprise winners (new keywords), paste anything confusing into AI for a verdict</li><li><strong>Minutes 10–15 — metric chain check:</strong> CTR, CPC, conversion rate, CPA vs last week. One link weakened? You know where to look</li><li><strong>Minutes 15–20 — one experiment:</strong> a new headline against the current one, a bid adjustment where data justifies it, or one landing page improvement. One change, noted, checked next week</li></ul><p><strong>Accounts optimized 20 minutes weekly quietly destroy accounts \"optimized\" in one heroic quarterly panic.</strong> Search is now working for TechFlow — next unit: the social platforms, where the targeting logic flips upside down.</p>`,
          question: {
            text: "Why is the search terms report called the most honest report in Google Ads?",
            options: [
              "It's audited by an external agency",
              "It shows the literal words real people typed before your money was spent — actual demand, not your assumptions",
              "It's the only report that updates in real time",
            ],
            correctIndex: 1,
            explanation:
              "Keywords are your guess at demand; search terms are the reality. The gap between them — leaks to cut, gems to harvest — is where weekly optimization profit lives.",
          },
        },
      ],
    },
  ],
};

export const PERF_MARKETING_UNIT_3: UnitSeed = {
  title: "Social Media Performance Advertising",
  lessons: [
    {
      title: "Audience Strategy with AI",
      summary:
        "Nobody's searching on social — reach cold, warm, and hot audiences the AI-era way",
      content: `<p>Search captures people looking for you; social ads interrupt people who weren't. That flips the whole game: on Meta, LinkedIn, and TikTok, you choose the audience — or increasingly, feed the platform's AI good signals and let it find buyers for you. This lesson builds TechFlow's social audience strategy from cold to hot.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my social ads audience strategist. My business: [describe + typical customer]. My assets: [email list size? website traffic/month? social followers? none is fine]. My platform: [Meta/Instagram, LinkedIn, or TikTok — or ask me which fits my buyer]. Build my audience strategy: (1) COLD — should I go broad and let the platform's AI optimize, or start with 3–5 interest/job-title based audiences? Give me the exact audiences. (2) WARM — what retargeting audiences can I build from my assets (site visitors, video viewers, engagers) and what message does each deserve? (3) HOT — cart/demo abandoners and past customers: what would I say to each? (4) A budget split across cold/warm/hot for [my monthly budget].",
        note: "If your list and traffic are tiny, that's normal at the start — cold ads BUILD the warm audiences. Retargeting gets cheap and powerful after a few weeks of cold traffic flowing.",
      },
      steps: [
        {
          html: `<h3>The temperature model</h3><p>Every social ads account is organized around audience temperature:</p><ul><li><strong>Cold:</strong> strangers who've never heard of you — the expensive but essential top. Goal: earn attention and a first visit</li><li><strong>Warm:</strong> people who've engaged — visited the site, watched a video, followed you. Goal: build the case, answer objections</li><li><strong>Hot:</strong> people who nearly bought — abandoned a cart, started a demo signup, past customers. Goal: close, with the cheapest and highest-converting ads you'll ever run</li></ul><p>Beginners spend everything on cold and wonder why it's expensive. Pros know: <strong>cold traffic's real job is filling the warm and hot pools, where the profit lives.</strong></p>`,
          question: {
            text: "Why do experienced social advertisers say cold ads' real job is \"filling the pools\"?",
            options: [
              "Cold ads should never generate direct sales",
              "Cold traffic builds the warm and hot retargeting audiences — where cheaper, higher-converting ads close the deal",
              "Pools refer to the platform's data centers",
            ],
            correctIndex: 1,
            explanation:
              "Most strangers don't buy on first contact — but they visit, watch, and engage. Those actions build your retargeting audiences, and the warm/hot ads that follow convert at a fraction of the cold cost.",
          },
        },
        {
          html: `<h3>Targeting in the AI era: broad is the new precise</h3><p>Social targeting has quietly inverted. The old way: stack detailed interests ("marketing managers who like HubSpot and golf"). The new reality: <strong>platform AI (like Meta's Advantage+) often finds buyers better when you target broadly</strong> and let the algorithm learn from conversion signals.</p><ul><li>What the AI needs from you: a clear conversion event (tracked properly), enough budget to learn, and — critically — <strong>creative that calls out your buyer</strong></li><li>Your ad IS the targeting now: "Running a marketing team of 5+?" in the first line filters the audience better than any interest checkbox</li><li>Where manual targeting still earns its keep: LinkedIn job titles for B2B, custom audiences (your lists), and lookalikes of your customers</li></ul><div class="discovery"><p>💡 <strong>The mindset shift</strong></p><p>Stop asking "how do I find my audience?" and start asking "how does my ad make the right person stop scrolling and self-select?" The algorithm handles the finding — your creative does the choosing.</p></div>`,
          question: {
            text: "In the AI-targeting era, what's the most reliable way to \"target\" the right people on Meta?",
            options: [
              "Stack as many detailed interests as possible",
              "Go broad with proper conversion tracking, and let creative that calls out your buyer do the selecting",
              "Only run ads to your existing followers",
            ],
            correctIndex: 1,
            explanation:
              "Platform AI optimizes toward whoever converts — give it room (broad), signal (tracking), and a self-selecting message. \"Running a marketing team of 5+?\" filters better than any interest stack, and the algorithm learns from who responds.",
          },
        },
        {
          html: `<p>Audience war-room with Nova — temperature checks.</p>`,
          chat: [
            {
              bot: "Nova here 🌡️ Audience temperature decides everything on social. Let's calibrate.",
            },
            {
              bot: "Match each person to their temperature for TechFlow.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Scrolled past TechFlow once, never engaged", right: "Cold — earn attention first" },
                { left: "Watched 75% of the demo video last week", right: "Warm — build the case" },
                { left: "Started the free trial signup, didn't finish", right: "Hot — close with a nudge" },
              ],
              feedback:
                "Perfectly calibrated — and each temperature gets its own message. Selling hard to cold and soft to hot are both money-wasters.",
              hint: "Stranger → interested → almost-customer.",
            },
            {
              bot: "TechFlow's hot audience — trial abandoners — is tiny: 40 people. The CEO says retargeting them is pointless at that size.",
              ask: "Is he right?",
              inputType: "binary",
              options: ["Right — too small to matter", "Wrong — small, but the highest conversion rate you'll ever see"],
              correctIndex: 1,
              feedback:
                "Wrong — those 40 nearly signed up! A cheap always-on ad reminding them costs pennies and converts like nothing else. Small hot audiences routinely deliver the account's best ROAS.",
              hint: "How close were those 40 people to becoming customers?",
            },
            {
              bot: "Fill in the modern targeting rule.",
              ask: "In the AI era, your ___ is the targeting — it makes the right person self-select.",
              inputType: "fill-blank",
              template: "In the AI era, your ___ is the targeting — it makes the right person self-select.",
              options: ["creative", "budget", "logo"],
              correctIndex: 0,
              feedback:
                "Exactly — the hook, the visual, the first line. The algorithm finds people; your creative chooses which ones stop.",
              hint: "The thing people actually see in their feed.",
            },
            {
              bot: "A B2B consultancy targeting CFOs must choose a platform for cold outreach ads.",
              ask: "Where does manual targeting still shine?",
              inputType: "choice",
              options: [
                "TikTok — broad targeting reaches everyone eventually",
                "LinkedIn — job title targeting reaches CFOs directly, worth its premium for B2B",
                "No platform — cold ads don't work for B2B",
              ],
              correctIndex: 1,
              feedback:
                "Right — LinkedIn's expensive clicks buy something no other platform sells: precise professional identity. For high-value B2B deals, paying more to reach exactly CFOs beats paying less to reach maybe-CFOs.",
              hint: "Which platform actually knows people's job titles?",
            },
          ],
        },
        {
          html: `<h3>Building the machine with AI</h3><p>Your audience strategy assembly line:</p><ul><li><strong>Persona work:</strong> "Interview me about my best customers, then write the 3 audience personas my social ads should call out" — AI-drafted, you-corrected</li><li><strong>Structure:</strong> one campaign per temperature. Cold (broad + self-selecting creative) → Warm (site visitors, video viewers — 30/60/90-day windows) → Hot (abandoners, customer list)</li><li><strong>Budget shape:</strong> commonly ~60–70% cold, 20–30% warm, ~10% hot — hot audiences are small but never leave them unfunded</li><li><strong>Weekly question for AI:</strong> "Here's spend and CPA by temperature [paste]. Where is the bottleneck — am I filling the pools, or failing to close them?"</li></ul><p><strong>Audiences decide who might see you. Next lesson: the creative and delivery mechanics that decide whether they stop scrolling.</strong></p>`,
          question: {
            text: "Why should the hot audience always keep some budget, despite being tiny?",
            options: [
              "Platforms penalize accounts that pause campaigns",
              "It's the cheapest, highest-converting segment — a small always-on spend closes people who nearly bought",
              "Hot audiences grow faster when funded",
            ],
            correctIndex: 1,
            explanation:
              "Trial abandoners and past customers need only a nudge — reaching them costs pennies and converts at rates cold traffic never touches. Leaving hot audiences unfunded abandons your easiest revenue.",
          },
        },
      ],
    },
    {
      title: "Creative & Delivery Mechanics",
      summary:
        "Win the first 3 seconds — hooks, formats, and how the ad auction actually delivers",
      content: `<p>On social, your ad competes with vacation photos, memes, and friends' babies — not just other ads. This lesson covers the creative mechanics that stop the scroll (the 3-second hook rule), the formats that platforms reward, and the delivery machinery — auctions, learning phase, frequency — that decides who actually sees your work.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my social ads creative director. My business: [describe]. My audience: [who + temperature: cold/warm/hot]. My offer: [what the ad promotes]. Create 5 complete ad concepts, each with: (1) a scroll-stopping HOOK — the first line/first 3 seconds (mix styles: a sharp question, a bold claim, a pain callout, a curiosity gap, a mini-story); (2) body text in my voice [paste a writing sample if you have one]; (3) a visual direction I could shoot on a phone or build in Canva; (4) the call-to-action. Then rank the 5 by which will most likely stop MY audience mid-scroll, and explain the psychology of the top pick in 2 sentences.",
        note: "Shoot the top 2–3 concepts, not just one — next lesson is about testing them against each other. Rough phone-shot authenticity regularly beats polished studio ads on social.",
      },
      steps: [
        {
          html: `<h3>The 3-second law</h3><p>Feed platforms measure attention in milliseconds. If the first 3 seconds (video) or the first line + image (static) don't hook, the scroll continues and nothing else you made matters:</p><ul><li><strong>Call out the buyer:</strong> "Running a marketing team of 5+?" — self-selection as a hook</li><li><strong>Lead with the pain or the payoff:</strong> "Your team wastes 11 hours a week on copy-paste" beats "Introducing TechFlow"</li><li><strong>Open loops:</strong> curiosity gaps that the next seconds resolve — "We cancelled our 6 SaaS tools. Here's what happened"</li><li><strong>Pattern interrupts:</strong> unexpected visuals, native-looking content, movement in frame one</li></ul><p>Brutal but liberating: <strong>the hook is half the ad's performance.</strong> A mediocre offer with a great hook out-delivers a great offer nobody stopped for.</p>`,
          question: {
            text: "Why does the first 3 seconds carry so much weight in social ads?",
            options: [
              "Platforms charge by the second of video",
              "If the hook doesn't stop the scroll, nothing after it is ever seen — attention is the gate everything else sits behind",
              "Longer ads are banned on most platforms",
            ],
            correctIndex: 1,
            explanation:
              "Social ads interrupt people doing something else. The hook either buys the next 10 seconds of attention or the ad effectively never ran — which is why creative testing (next lesson) starts with testing hooks.",
          },
        },
        {
          html: `<h3>The delivery machinery</h3><p>Behind every impression is an auction and an algorithm:</p><ul><li><strong>The auction:</strong> platforms rank ads on bid × predicted engagement × quality — like Google, ads people respond to get cheaper delivery. Creative quality is literally a cost discount</li><li><strong>Learning phase:</strong> new ads/ad sets spend their first ~50 conversions exploring who responds. Performance wobbles — editing the ad mid-learning restarts the clock</li><li><strong>Frequency & fatigue:</strong> the platform re-shows your ad; past ~2–4 views to the same people, response drops and costs climb. Rising frequency + falling CTR = your ad is wearing out</li></ul><div class="discovery"><p>💡 <strong>Formats: feed the platform what it feeds users</strong></p><p>Platforms reward the formats they're pushing — short vertical video is the reach king almost everywhere right now. Native-feeling content (looks like it belongs in the feed) consistently out-delivers obvious ads.</p></div>`,
          question: {
            text: "Your ad's frequency hits 5 and CTR has fallen by half. What's happening?",
            options: [
              "The algorithm is broken — contact support",
              "Ad fatigue — the same people have seen it too often; time for fresh creative",
              "Success — high frequency means the platform loves your ad",
            ],
            correctIndex: 1,
            explanation:
              "Frequency 5 means the average viewer saw the ad five times — they've made their decision. Falling CTR at rising frequency is the classic fatigue signature, and the cure is new creative, not a bigger budget.",
          },
        },
        {
          html: `<p>Creative studio session with Nova — hooks under the microscope.</p>`,
          chat: [
            {
              bot: "Nova here 🎬 The feed is a battlefield for attention. Let's judge some hooks.",
            },
            {
              bot: "Two openings for TechFlow's video ad. A: \"TechFlow is an innovative workflow automation platform founded in...\" B: \"Your marketing team wastes 11 hours a week. Here's where they go.\"",
              ask: "Which hook survives the feed?",
              inputType: "binary",
              options: ["A — professional and complete", "B — pain + curiosity in one line"],
              correctIndex: 1,
              feedback:
                "B, easily — it names the viewer's pain and opens a loop their brain wants closed. A reads like a press release; the scroll never slows for press releases.",
              hint: "Which one is about the VIEWER?",
            },
            {
              bot: "Match each delivery concept to its practical rule.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Learning phase", right: "Don't edit ads mid-learning — it restarts" },
                { left: "Ad fatigue", right: "Rising frequency + falling CTR = refresh creative" },
                { left: "Auction quality ranking", right: "Engaging ads literally cost less to deliver" },
              ],
              feedback:
                "Exactly — respect the learning phase, watch the fatigue signature, and remember: good creative is a discount coupon on the whole auction.",
              hint: "Patience, rotation, quality-pays.",
            },
            {
              bot: "Fill in the creative law.",
              ask: "The ___ is half the ad's performance — nothing else is seen without it.",
              inputType: "fill-blank",
              template: "The ___ is half the ad's performance — nothing else is seen without it.",
              options: ["hook", "logo", "hashtag"],
              correctIndex: 0,
              feedback:
                "Right — the first 3 seconds decide whether the rest of your ad exists. That's why pros test hooks before anything else.",
              hint: "It's what stops the scroll.",
            },
            {
              bot: "A boutique spent $3,000 on one cinematic, studio-polished ad. It's beautiful. It's also being out-performed by a competitor's shaky phone video of the owner talking.",
              ask: "Why?",
              inputType: "choice",
              options: [
                "The algorithm punishes expensive ads",
                "Native, authentic content blends into the feed and earns trust — polish often signals 'ad' and triggers the scroll",
                "Pure luck — creative performance is random",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — feeds are personal spaces, and content that feels human out-performs content that feels corporate. Spend on volume and variety of authentic creative, not on one polished masterpiece.",
              hint: "What does 'too polished' signal in a personal feed?",
            },
          ],
        },
        {
          html: `<h3>The AI creative pipeline</h3><p>Volume and variety win on social — AI makes both affordable:</p><ul><li><strong>Hooks first:</strong> "write 10 hooks for [audience] about [pain] — mix questions, claims, curiosity gaps, and story openers" — then shoot the best 3</li><li><strong>One idea, many formats:</strong> AI turns one winning concept into a 15-second video script, a static image + caption, and a carousel — different formats reach different corners of the audience</li><li><strong>Phone-first production:</strong> a talking-head phone video with AI-drafted script and captions is the highest-ROI ad unit for most small businesses</li><li><strong>Compliance check:</strong> "review this ad for claims that could violate ad policies" — cheaper than a rejected ad or banned account</li></ul><p><strong>You now know what makes creative deliver. Next: the iteration discipline that turns creative from a guessing game into a compounding system.</strong></p>`,
          question: {
            text: "Why does \"volume and variety of authentic creative\" beat \"one perfect polished ad\" on social?",
            options: [
              "Platforms charge less for uploading more ads",
              "Fatigue kills every ad eventually, and different hooks/formats reach different people — a pipeline of fresh, native-feeling creative sustains performance",
              "Polished ads are automatically rejected",
            ],
            correctIndex: 1,
            explanation:
              "Every ad wears out — sustainable social advertising is a creative treadmill, not a monument. AI makes producing many authentic variations affordable, which is exactly what the delivery machinery rewards.",
          },
        },
      ],
    },
    {
      title: "Creative Iteration",
      summary:
        "Test, read, remix — the weekly creative loop that compounds into unbeatable ads",
      content: `<p>Nobody — not even the best creative director — knows which ad will win. Winners are found, not predicted. This lesson builds TechFlow's creative iteration loop: structured testing, reading the results for the WHY, and using AI to remix winners into the next generation of ads.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my creative analyst. Here are my recent ads and their numbers: [for each ad: describe the hook/visual/format + its CTR, CPA or ROAS, and spend. Even 2 ads work]. (1) Diagnose WHY the winner won — hook style, angle, format, or audience fit? State your hypothesis in one sentence. (2) Generate the next test generation: 3 new variations that keep the winning element and change ONE thing each (a different hook style on the same angle, the same hook on a new visual, the same creative for a different audience temperature). (3) Tell me what each variation will teach me if it wins. (4) Which of my losing ads deserves a second chance with a different hook — and which should stay dead?",
        note: "Keep a simple 'creative log': every ad, its hook style, and its result. After 10 entries, ask AI to find your personal winning patterns — that log becomes your unfair advantage.",
      },
      steps: [
        {
          html: `<h3>Test structure: change one thing</h3><p>Random creative changes teach nothing. Structured iteration isolates variables:</p><ul><li><strong>Test hooks first</strong> — same visual, same offer, 3 different opening lines. Hooks move the needle most, so they earn the first test slot</li><li><strong>Then angles:</strong> pain-focused vs. dream-focused vs. proof-focused versions of the same offer</li><li><strong>Then formats:</strong> the winning message as video vs. static vs. carousel</li><li><strong>Give tests a fair run:</strong> enough spend and conversions to judge (a real signal, not day-one noise), then kill losers without sentiment</li></ul><p>The discipline: <strong>when a test wins, you must be able to say WHY it won.</strong> If you changed three things at once, the win teaches you nothing you can repeat.</p>`,
          question: {
            text: "You test a new ad: different hook, different image, AND a different offer — and it wins. What did you learn?",
            options: [
              "Everything — the new hook, image, and offer are all winners",
              "Almost nothing repeatable — three simultaneous changes make it impossible to know what caused the win",
              "That testing is unnecessary going forward",
            ],
            correctIndex: 1,
            explanation:
              "The win is nice, but the learning is lost — was it the hook? The image? The offer? One-variable tests are slower per test but far faster per LESSON, and lessons are what compound.",
          },
        },
        {
          html: `<h3>Reading results for the why</h3><p>Each metric pattern points at a different creative diagnosis:</p><ul><li><strong>Low CTR:</strong> the hook failed — nobody stopped. Next test: new hooks</li><li><strong>High CTR, weak conversions:</strong> the ad over-promised or attracted the wrong crowd — tighten the match between hook, offer, and landing page</li><li><strong>Strong performance, then decay:</strong> fatigue — the creative worked, the audience wore out. Remix, don't retire, the angle</li></ul><div class="discovery"><p>💡 <strong>Winners are seeds, not trophies</strong></p><p>A winning ad is your most valuable data. Remix it: same hook style on new visuals, same angle for the warm audience, same script re-shot by a different face. Champion ads should spawn families of descendants — that's how one insight compounds into a system.</p></div>`,
          question: {
            text: "Your best-performing ad is finally fatiguing. What's the pro move?",
            options: [
              "Retire the concept — its time is over",
              "Remix it — keep the proven hook style and angle, refresh the visuals, faces, or format",
              "Triple the budget to force delivery",
            ],
            correctIndex: 1,
            explanation:
              "Fatigue means the audience tired of the execution, not the insight. The winning angle is validated learning — re-skin it in fresh executions and it usually wins again. Champions spawn dynasties.",
          },
        },
        {
          html: `<p>Iteration lab with Nova — read the tests like a pro.</p>`,
          chat: [
            {
              bot: "Nova here 🧪 Creative testing is a science with a sense of humor. Let's read some experiments.",
            },
            {
              bot: "TechFlow tested 3 hooks on identical visuals. A: \"Meet TechFlow\" (0.4% CTR). B: \"Your team wastes 11 hours a week\" (1.8% CTR). C: \"Marketing managers: stop doing this\" (1.1% CTR).",
              ask: "What's the next test generation?",
              inputType: "choice",
              options: [
                "Remix B: more pain-quantifying hooks — '11 hours' style clearly resonates",
                "Give A more budget — it just needs time",
                "Test 3 completely unrelated new concepts",
              ],
              correctIndex: 0,
              feedback:
                "Exactly — B's specific, quantified pain hook won decisively. The next generation explores AROUND the winner: '$4,300/month in copy-paste salaries', 'The 11-hour audit'. Follow the signal.",
              hint: "Winners are seeds — plant more of what B is.",
            },
            {
              bot: "Match each result pattern to the creative diagnosis.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Low CTR from the start", right: "Hook failed — test new hooks" },
                { left: "High CTR, terrible conversion", right: "Over-promise or wrong crowd — fix the match" },
                { left: "Great weeks 1–3, decaying week 4", right: "Fatigue — remix the winner" },
              ],
              feedback:
                "Perfect diagnostics — three patterns cover nearly every creative situation you'll meet.",
              hint: "Never stopped / stopped-then-left / stopped-then-tired.",
            },
            {
              bot: "Fill in the testing discipline.",
              ask: "Change ___ variable per test, or the win teaches you nothing.",
              inputType: "fill-blank",
              template: "Change ___ variable per test, or the win teaches you nothing.",
              options: ["one", "every", "no"],
              correctIndex: 0,
              feedback:
                "One — slower per test, faster per lesson. And lessons are the only thing that compounds.",
              hint: "Isolate to learn.",
            },
            {
              bot: "Day 2 of a new test: variation X has 1 conversion, Y has 0. The intern declares X the winner and wants to kill Y.",
              ask: "Call it?",
              inputType: "binary",
              options: ["Call it — X leads", "Too early — one conversion is noise, not signal"],
              correctIndex: 1,
              feedback:
                "Too early — a single conversion decides nothing. Let tests reach meaningful spend and conversion counts before judging. Patience in reading results is what separates testing from gambling.",
              hint: "Would you trust a coin after two flips?",
            },
          ],
        },
        {
          html: `<h3>The compounding creative log</h3><p>The system that turns weekly tests into a durable edge:</p><ul><li><strong>Log every ad:</strong> hook style, angle, format, audience temperature, result — one row each, takes 30 seconds</li><li><strong>Monthly AI pattern review:</strong> "here's my creative log [paste] — what patterns predict MY winners? What haven't I tested yet?" Your account's private playbook emerges within 2–3 months</li><li><strong>The weekly rhythm:</strong> launch one structured test, read last week's result, remix or kill accordingly, log it. 30–45 minutes</li><li><strong>Feed wins across channels:</strong> a hook that wins on Meta usually strengthens your Google ad headlines and landing pages too — insights travel</li></ul><p><strong>Testing isn't a phase — it's the engine.</strong> Accounts that never stop iterating own audiences that competitors rent. Next: knowing when TechFlow is ready to expand beyond its first channels.</p>`,
          question: {
            text: "What makes a simple creative log so valuable after a few months?",
            options: [
              "Platforms give discounts to organized advertisers",
              "It reveals YOUR audience's specific winning patterns — a private playbook competitors can't copy",
              "It's required for tax purposes",
            ],
            correctIndex: 1,
            explanation:
              "Generic best practices are public; what makes YOUR buyers stop and convert is private data only your tests generate. Logged and pattern-mined with AI, it becomes a compounding, uncopyable advantage.",
          },
        },
      ],
    },
    {
      title: "Expanding Channels",
      summary:
        "Email, affiliates, and new platforms — when to expand, and when doubling down wins",
      content: `<p>TechFlow's search and social engines are running. Now the tempting question: what about email? Affiliates? TikTok? This lesson gives you the expansion playbook — the readiness test, the channels that multiply what's already working, and the discipline to expand from strength rather than boredom.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my growth strategist. My current channels and results: [e.g. 'Google search: $X/month at $Y CPA; Meta: $Z at CPA W' — rough numbers fine]. My email list: [size]. My monthly budget could stretch by: [amount]. (1) Run the expansion readiness test: is my current core stable and profitable enough to expand, or should the next dollar deepen what works? Be honest. (2) If ready — rank these expansions for MY business: email automation, affiliate/referral program, a new ad platform, retargeting deepening. Explain the ranking. (3) For your #1 pick: give me a minimum viable launch — smallest version, what it costs, what success looks like at 30 days, and the exact AI prompts I'd use to build it. (4) What's my kill criteria — the numbers at which I stop the experiment?",
        note: "The kill criteria matter as much as the launch plan. Channels you'd never kill become budget zombies — decide the exit BEFORE you enter.",
      },
      steps: [
        {
          html: `<h3>The readiness test: expand from strength</h3><p>New channels feel like growth — but expanding from a wobbly core divides attention and budget into two mediocre efforts. You're ready to expand when:</p><ul><li><strong>Your core channel is stable:</strong> predictable CPA at meaningful spend for 2–3 months, not one lucky week</li><li><strong>You've hit real diminishing returns:</strong> pushing more budget into the core genuinely raises CPA — the channel is saturating for your niche</li><li><strong>You have capacity:</strong> the weekly optimization rituals actually happen with time to spare</li></ul><p>Until all three are true, <strong>the highest-ROI move is usually deeper, not wider</strong> — more creative testing, better retargeting, sharper landing pages in the channel that already works.</p>`,
          question: {
            text: "TechFlow's Meta ads are barely 6 weeks old with a CPA that swings wildly week to week. The team wants to add TikTok. What's the right call?",
            options: [
              "Add TikTok — more channels always means more growth",
              "Stabilize Meta first — expanding from an unstable core splits focus into two mediocre channels",
              "Pause Meta and move everything to TikTok",
            ],
            correctIndex: 1,
            explanation:
              "A swinging CPA means the current channel still needs learning, creative, and optimization attention. Expansion divides exactly the attention it needs. Stability and diminishing returns first — then widen.",
          },
        },
        {
          html: `<h3>The multiplier channels: email and affiliate</h3><p>The smartest first expansions usually aren't new ad platforms — they're channels that multiply the traffic you already pay for:</p><ul><li><strong>Email:</strong> you already paid to acquire those leads — email converts them free, forever. Welcome sequences, nurture series, launch campaigns. AI drafts them all; a 5-email welcome sequence is an afternoon's work now. Typical performance-marketing math: email regularly delivers the highest ROI of any channel because the sending cost is nearly zero</li><li><strong>Affiliate/referral:</strong> partners promote you and earn commission per sale — pure pay-for-performance. Your happiest customers and adjacent businesses are the natural first recruits</li></ul><div class="discovery"><p>💡 <strong>The leak-check before scaling</strong></p><p>Before ANY expansion: is every paid visitor being captured? Email signup on the site, retargeting pixels firing, a follow-up sequence live? Expanding while leads leak is buying water for a bucket with holes.</p></div>`,
          question: {
            text: "Why is email usually the smartest first expansion for a business already running paid ads?",
            options: [
              "Email is trendier than social ads",
              "It converts the leads you already paid to acquire — at near-zero sending cost, multiplying every ad dollar's return",
              "Email replaces the need for a website",
            ],
            correctIndex: 1,
            explanation:
              "Every ad click you paid for either converts, joins your list, or vanishes. Email turns the middle group into customers over time without new ad spend — the arithmetic of multiplying paid traffic instead of buying more.",
          },
        },
        {
          html: `<p>Expansion strategy session with Nova — grow like a pro.</p>`,
          chat: [
            {
              bot: "Nova here 🚀 Expansion is a chess move, not a shopping spree. Let's play some positions.",
            },
            {
              bot: "Match each expansion to the situation it fits best.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Leads convert slowly, long sales cycle", right: "Email nurture sequences" },
                { left: "Happy customers who love referring", right: "Affiliate/referral program" },
                { left: "Core channel saturated, budget growing", right: "Second ad platform" },
              ],
              feedback:
                "Exactly — the right expansion answers a specific bottleneck, not a general itch for novelty.",
              hint: "Slow-cookers, fans, and full tanks.",
            },
            {
              bot: "Fill in the expansion law.",
              ask: "Expand from ___, not from boredom.",
              inputType: "fill-blank",
              template: "Expand from ___, not from boredom.",
              options: ["strength", "panic", "rumors"],
              correctIndex: 0,
              feedback:
                "Right — a stable, profitable core earns the right to fund experiments. Boredom-driven channel-hopping is how budgets die young.",
              hint: "What kind of core earns expansion?",
            },
            {
              bot: "A store launches on a new platform with the leftover $200/month from their main budget, no dedicated creative, checking it \"when there's time\".",
              ask: "Predict the outcome:",
              inputType: "choice",
              options: [
                "Success — small tests are always smart",
                "A zombie channel: too underfunded to learn, too ignored to improve, quietly eating $200 forever",
                "The platform will optimize itself automatically",
              ],
              correctIndex: 1,
              feedback:
                "Zombie channel — the saddest creature in performance marketing 🧟 A real test gets enough budget to generate learnable data, dedicated creative, and a decision date. Half-tests cost more than honest ones.",
              hint: "Can the algorithm learn on $200 and recycled ads?",
            },
            {
              bot: "Gut-check: before expanding anywhere, TechFlow's site has no email capture and the retargeting pixel was never installed.",
              ask: "Expand anyway?",
              inputType: "binary",
              options: ["Yes — fix leaks later", "No — plug the leaks first, they multiply every channel"],
              correctIndex: 1,
              feedback:
                "Plug first — capture and retargeting infrastructure multiplies EVERY channel you'll ever run. It's the cheapest fix with the widest payoff in the whole growth stack.",
              hint: "What happens to every future channel's traffic without capture?",
            },
          ],
        },
        {
          html: `<h3>The minimum viable expansion</h3><p>When the readiness test passes, expand like a scientist:</p><ul><li><strong>One channel at a time,</strong> with a real budget (enough for the platform to learn), dedicated creative in that platform's native style, and a 30–60 day decision date</li><li><strong>Define kill criteria upfront:</strong> "if CPA isn't within 2x of my core channel by day 45, we stop" — written down, so the decision makes itself</li><li><strong>Reuse proven assets:</strong> your winning hooks, angles, and offers travel to new platforms — reformatted by AI into native styles, not copy-pasted</li><li><strong>Judge blended, not siloed:</strong> new channels often assist conversions the dashboard credits elsewhere — watch total CPA across everything, not just the newcomer's own numbers</li></ul><p><strong>TechFlow now has a running engine AND an expansion playbook. Final unit: the advanced layer — testing, attribution, fraud, and building a system that lasts years.</strong></p>`,
          question: {
            text: "Why write kill criteria BEFORE launching a new channel?",
            options: [
              "Platforms require an exit plan at signup",
              "Sunk-cost emotions make mid-experiment decisions unreliable — pre-written numbers make the stop/continue call objective",
              "Kill criteria improve the algorithm's learning phase",
            ],
            correctIndex: 1,
            explanation:
              "After 45 days of effort, everyone wants to believe \"one more week\". Deciding the exit numbers while you're still objective turns an emotional argument into a simple comparison — and saves budgets from zombie channels.",
          },
        },
      ],
    },
  ],
};

export const PERF_MARKETING_UNIT_4: UnitSeed = {
  title: "Advanced Optimization and Strategic Growth",
  lessons: [
    {
      title: "Testing & Attribution",
      summary:
        "Which ad REALLY drove the sale? A/B discipline and attribution without the headache",
      content: `<p>A customer saw your Instagram ad, Googled you a week later, clicked a search ad, and bought. Which channel gets the credit? Welcome to attribution — the honest accounting of performance marketing. This lesson pairs it with rigorous A/B testing habits, so TechFlow's decisions rest on evidence instead of dashboard illusions.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my testing and attribution advisor. My channels: [list what you run]. My typical customer journey as far as I can tell: [describe — e.g. 'they see social ads, later search our name, buy on the site' — guesses fine]. (1) Explain which attribution trap most likely distorts MY numbers — is a channel taking credit for sales another channel created? How would I check? (2) Design my next A/B test: I want to test [landing page headline / ad hook / offer / pricing display]. Give me the exact A and B, the single metric that decides, the sample size ballpark I need for a trustworthy answer, and how long that'll take at my traffic level of [visitors or clicks per week]. (3) What's the one incrementality experiment a business my size can actually run (e.g. geo holdout or pause test), and what would it prove?",
        note: "The pause test is the small-business incrementality tool: pause a suspect channel for 2 weeks and watch total sales. If they don't drop, the channel was claiming credit it didn't earn.",
      },
      steps: [
        {
          html: `<h3>Attribution: who gets the credit?</h3><p>Customers rarely see one ad and buy — they touch multiple channels over days or weeks. Attribution models split the credit:</p><ul><li><strong>Last click:</strong> all credit to the final touch — simple, but systematically flatters bottom-funnel channels (brand search, retargeting) while starving the top-funnel ads that created the demand</li><li><strong>First click / linear / position-based:</strong> different manual credit splits — each biased a different way</li><li><strong>Data-driven:</strong> the platform's machine learning estimates each touch's real contribution — the modern default where available</li></ul><p>The practical takeaway: <strong>know which model your dashboard uses, because it silently shapes every budget decision you make.</strong> Under last click, cutting "unprofitable" cold social ads often quietly kills the demand your search ads were harvesting.</p>`,
          question: {
            text: "Under last-click attribution, TechFlow's retargeting ads look like heroes and cold social ads look like losers. What's the trap?",
            options: [
              "There's no trap — kill the cold ads and scale retargeting",
              "Retargeting harvests demand that cold ads created — cutting the cold ads eventually empties the retargeting pool and sales fall",
              "Retargeting numbers are always fabricated",
            ],
            correctIndex: 1,
            explanation:
              "Last click credits the closer, not the opener. Retargeting can only convert people cold ads brought in — the classic mistake is starving the top of the funnel because the dashboard credits the bottom.",
          },
        },
        {
          html: `<h3>A/B testing: the honesty machine</h3><p>Beyond ad creative, A/B testing applies to everything — landing pages, offers, pricing displays, email subject lines. The rules that keep tests honest:</p><ul><li><strong>One variable,</strong> a decision metric chosen in advance, and both versions running simultaneously (never "this month vs last month" — seasons lie)</li><li><strong>Sample size before verdict:</strong> small numbers swing wildly. A 60% vs 40% split after 20 visitors means nothing; after 2,000 it means everything. When in doubt, paste results into AI: "is this difference statistically meaningful?"</li><li><strong>Test big swings first:</strong> a completely different headline teaches more than a comma change. Button-color testing is for sites with millions of visitors</li></ul><div class="discovery"><p>💡 <strong>Incrementality: the ultimate question</strong></p><p>The deepest test of all: "would these sales have happened WITHOUT the ads?" Big companies run geo experiments; small businesses can run the humble pause test — pause a suspect channel for two weeks and watch total sales. Terrifying, honest, and occasionally liberating.</p></div>`,
          question: {
            text: "Your landing page test shows version B winning 6 conversions to 4 after two days. What's the sound conclusion?",
            options: [
              "B wins — ship it immediately",
              "Nothing yet — 10 total conversions is noise; let the test reach a meaningful sample before judging",
              "A wins because it started stronger on day one",
            ],
            correctIndex: 1,
            explanation:
              "Tiny samples produce dramatic-looking splits by pure chance. Deciding on 10 conversions is coin-flip worship — patience until meaningful volume is what separates evidence from anecdote.",
          },
        },
        {
          html: `<p>Evidence bootcamp with Nova — trust nothing, test everything.</p>`,
          chat: [
            {
              bot: "Nova here ⚖️ Attribution and testing are where marketers become scientists. Court is in session.",
            },
            {
              bot: "Match each attribution model to its bias.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Last click", right: "Flatters closers like brand search & retargeting" },
                { left: "First click", right: "Flatters openers, ignores what closed the deal" },
                { left: "Data-driven", right: "ML estimates each touch's real contribution" },
              ],
              feedback:
                "Exactly — every model tells a different story from the same data. Knowing your dashboard's model is knowing its bias.",
              hint: "Closer-bias, opener-bias, machine-estimate.",
            },
            {
              bot: "A store owner compares this January's sales (new ads ON) to December's (ads off) and declares the ads a triumph.",
              ask: "Valid test?",
              inputType: "binary",
              options: ["Valid — clear before/after", "Invalid — seasons lie; December vs January isn't a controlled comparison"],
              correctIndex: 1,
              feedback:
                "Invalid — holiday-to-January comparisons are apples to sleighbells. Honest tests run versions SIMULTANEOUSLY, splitting the same traffic in the same season.",
              hint: "What else changed between December and January? Everything.",
            },
            {
              bot: "Fill in the incrementality question.",
              ask: "Incrementality asks: would these sales have happened ___ the ads?",
              inputType: "fill-blank",
              template: "Incrementality asks: would these sales have happened ___ the ads?",
              options: ["without", "because of", "before"],
              correctIndex: 0,
              feedback:
                "Right — the scariest and most valuable question in the field. Brand-search ads often fail it; genuine demand-creation passes it.",
              hint: "The counterfactual world where you spent $0.",
            },
            {
              bot: "TechFlow suspects its brand-keyword search ads (people searching \"TechFlow\") just intercept customers who'd have arrived anyway.",
              ask: "How to find out?",
              inputType: "choice",
              options: [
                "Ask the sales team's opinion",
                "Pause brand keywords for 2 weeks and watch total signups — if they hold steady, the ads were claiming free traffic",
                "Increase brand bids to be safe",
              ],
              correctIndex: 1,
              feedback:
                "The pause test — small-business incrementality at its finest. If total signups hold, that budget moves to ads that create demand instead of intercepting it. Evidence over opinion, always.",
              hint: "Run the $0 experiment for real, briefly.",
            },
          ],
        },
        {
          html: `<h3>The evidence-based operating rhythm</h3><p>Assembling testing and attribution into TechFlow's routine:</p><ul><li><strong>Always one live test:</strong> the account never runs without an experiment — hook, page, offer, or audience. Each concludes with a logged lesson</li><li><strong>Monthly attribution sanity check:</strong> "here's my performance by channel under my current model [paste] — which channel might be over/under-credited, and what would I check?" AI plays devil's advocate against your dashboard</li><li><strong>Quarterly incrementality question:</strong> pick the most suspicious channel or keyword group and design the pause/holdout test. One honest answer per quarter compounds into a rare skill: knowing your REAL numbers</li></ul><p><strong>Decisions built on evidence survive; decisions built on dashboard defaults quietly bleed.</strong> Next: protecting those hard-won budgets from the fraud that eats ad spend industry-wide.</p>`,
          question: {
            text: "Why should some experiment ALWAYS be running in a healthy ad account?",
            options: [
              "Platforms reward accounts with active tests",
              "Each concluded test adds a compounding lesson — an account that stops testing stops learning while competitors don't",
              "Tests reduce advertising costs automatically",
            ],
            correctIndex: 1,
            explanation:
              "Markets, audiences, and creative fatigue never hold still. A permanent testing cadence — one variable, one lesson, logged — is the only reliable way to keep improving faster than conditions decay.",
          },
        },
      ],
    },
    {
      title: "Ad Fraud Prevention",
      summary:
        "Bots, click farms, and fake clicks — spot the theft in your numbers and shut it down",
      content: `<p>A meaningful slice of global ad spend is stolen — by bots clicking ads, fake sites faking views, and click farms simulating engagement. Small advertisers are targets too. This lesson teaches you to read the fraud signatures in your own reports, the protections each platform offers, and the AI-assisted audit that keeps your budget funding customers instead of criminals.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my ad fraud auditor. Here's my campaign data: [paste or describe: performance by placement/website (if display), by geography, by device, by hour — plus anything that feels 'off': weird traffic spikes, clicks with zero engagement, conversions that never become real customers]. (1) Flag the fraud signatures: placements or geos with abnormal CTR but zero conversions, bounce rates near 100%, engagement patterns no human produces. (2) Give me the exact exclusions to apply — placement exclusion lists, geo exclusions, IP considerations. (3) Which of my campaign types is most fraud-exposed (display/audience network vs search vs social feed) and what settings reduce exposure? (4) Set up my monthly 10-minute fraud check: the 3 reports to glance at and the red flags to scan for.",
        note: "The cheapest fraud protection is placement vigilance: in display campaigns, review WHERE your ads ran each month — mysterious apps and junk sites with high clicks and zero conversions get excluded on sight.",
      },
      steps: [
        {
          html: `<h3>Know the enemy: what ad fraud looks like</h3><p>Fraud isn't exotic — it's a business model built on your budget:</p><ul><li><strong>Bot clicks:</strong> software clicking ads to drain competitor budgets or inflate a fraudulent site's earnings</li><li><strong>Click farms:</strong> rooms of humans (or device racks) generating fake clicks and engagement that filters can't easily distinguish</li><li><strong>Fake placements:</strong> junk websites and apps built purely to host ads no human sees — auto-refreshing, stacked, or invisible</li><li><strong>Lead fraud:</strong> fake form-fills that poison your data AND train smart bidding on garbage signals — the quiet double damage</li></ul><p>Exposure varies by channel: <strong>display networks and app placements carry the most risk; search and major social feeds the least</strong> — but nothing is zero. The defense starts with knowing your numbers well enough to notice theft.</p>`,
          question: {
            text: "Why is fake-lead fraud called \"double damage\"?",
            options: [
              "Fake leads cost exactly twice as much as real ones",
              "You pay for the fake conversion AND it trains your smart bidding on garbage signals, degrading future targeting",
              "It only affects accounts with two campaigns",
            ],
            correctIndex: 1,
            explanation:
              "The wasted spend is visible; the poisoned optimization is not. Smart bidding learns from conversions — feed it fakes and it hunts for more fakes. Filtering junk leads protects both budget and the algorithm's education.",
          },
        },
        {
          html: `<h3>Reading the fraud signatures</h3><p>Fraud leaves fingerprints in ordinary reports:</p><ul><li><strong>CTR too good to be true</strong> from specific placements or geos — with zero conversions behind it</li><li><strong>Sessions of nothing:</strong> near-100% bounce, ~0 seconds on site, no scrolling — humans are messier than that</li><li><strong>Geography you don't serve:</strong> click surges from countries outside your market</li><li><strong>Robot rhythm:</strong> traffic spikes at odd fixed hours, identical session patterns, conversion forms filled faster than humans type</li></ul><div class="discovery"><p>💡 <strong>Your defenses, in order of ROI</strong></p><p>1) Placement exclusions — review where display ads actually ran monthly, exclude junk on sight. 2) Geo targeting hygiene — only markets you serve. 3) Platform protections — major platforms filter "invalid traffic" automatically and refund detected fraud; your job is catching what slips through. 4) For bigger budgets: dedicated click-fraud protection services.</p></div>`,
          question: {
            text: "A display placement shows 8% CTR (your average is 0.5%) with 900 clicks and zero conversions. What's the read?",
            options: [
              "A breakthrough audience — move budget there",
              "Classic fraud signature — inhuman CTR with no real outcomes; exclude the placement",
              "Your landing page must be broken",
            ],
            correctIndex: 1,
            explanation:
              "A 16x CTR with nothing behind it isn't enthusiasm — it's automation. Real interest converts at least occasionally. Exclude the placement and check what that spend was 'earning' elsewhere in the report.",
          },
        },
        {
          html: `<p>Fraud detection drills with Nova — trust the patterns.</p>`,
          chat: [
            {
              bot: "Nova here 🕵️ Fraudsters are lazy — their patterns repeat. Let's learn to see them.",
            },
            {
              bot: "Match each report anomaly to its likely explanation.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Sky-high CTR, zero conversions, one placement", right: "Bot clicks on a junk site" },
                { left: "Click surge from a country you don't serve", right: "Click farm traffic" },
                { left: "Forms filled in 2 seconds flat", right: "Bot-generated fake leads" },
              ],
              feedback:
                "Sharp eyes — three signatures that catch the majority of small-advertiser fraud.",
              hint: "Machines are fast, foreign, and never buy.",
            },
            {
              bot: "Fill in the exposure ranking.",
              ask: "___ networks and app placements carry the highest fraud risk; search and major social feeds the least.",
              inputType: "fill-blank",
              template: "___ networks and app placements carry the highest fraud risk; search and major social feeds the least.",
              options: ["Display", "Email", "Podcast"],
              correctIndex: 0,
              feedback:
                "Right — sprawling display and app networks are hardest to police. It doesn't mean avoid them; it means audit their placements like you'd count change from a stranger.",
              hint: "The channel where ads run on millions of third-party sites.",
            },
            {
              bot: "TechFlow's display campaign ran on 400 sites last month. The intern says checking them all is impossible.",
              ask: "What's the efficient move?",
              inputType: "choice",
              options: [
                "He's right — skip placement review entirely",
                "Sort placements by spend and clicks, review the top 20, exclude the junk — 10 minutes covers 90% of the risk",
                "Manually visit all 400 websites",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — fraud concentrates where the money went. The top-spend placements review is the 80/20 of fraud defense, and AI can pre-flag the suspicious names on the list for you.",
              hint: "Follow the money, not the whole list.",
            },
            {
              bot: "Gut-check: a fraud-protection vendor cold-emails claiming 90% of your traffic is bots and only their $500/month tool can save you.",
              ask: "Panic-buy?",
              inputType: "binary",
              options: ["Buy now — better safe than sorry", "No — verify in your own data first; fear-selling is its own red flag"],
              correctIndex: 1,
              feedback:
                "Verify first — your own reports (bounce, geo, placements, conversion quality) will confirm or debunk the claim in 20 minutes. Some businesses do need paid protection; the decision should come from your data, not their pitch.",
              hint: "Who profits from your panic?",
            },
          ],
        },
        {
          html: `<h3>The monthly 10-minute fraud check</h3><p>Fraud defense as a boring, reliable routine:</p><ul><li><strong>Placement report (display/app campaigns):</strong> top spenders reviewed, junk excluded — the single highest-ROI check</li><li><strong>Geo report:</strong> any spend outside your served markets? Tighten targeting and exclusions</li><li><strong>Quality-of-conversion glance:</strong> are leads becoming real conversations/customers at the usual rate? A falling lead-to-real ratio is the lead-fraud tell</li><li><strong>AI on anomaly duty:</strong> paste the three reports — "flag anything that doesn't look like human behavior, and draft my exclusion list"</li></ul><p><strong>You can't make fraud disappear — you can make your account a hard target.</strong> Vigilant accounts leak pennies; unwatched ones fund the whole criminal industry. Final lesson: assembling everything into a performance marketing system built to last years.</p>`,
          question: {
            text: "What's the single highest-ROI fraud defense for a small advertiser running display ads?",
            options: [
              "Hiring a full-time fraud analyst",
              "The monthly placement review — sort by spend, inspect the top placements, exclude junk on sight",
              "Stopping all advertising permanently",
            ],
            correctIndex: 1,
            explanation:
              "Fraud concentrates where budget flows, and junk placements have obvious tells (absurd CTR, zero conversions, mystery names). Ten minutes a month closes the door most small-advertiser fraud walks through.",
          },
        },
      ],
    },
    {
      title: "Sustainable Performance Marketing",
      summary:
        "The complete system — blended numbers, owned audiences, and the rhythm that lasts years",
      content: `<p>Final lesson at TechFlow — and the graduation from running campaigns to owning a system. Sustainable performance marketing means economics that survive rising ad costs, audiences you own instead of rent, and a weekly rhythm that compounds. Here's the complete operating system, assembled from everything you've learned.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build my complete performance marketing operating system. My business: [describe]. My channels and rough numbers: [what you run and results]. My realistic weekly time: [hours]. Create: (1) WEEKLY routine — the metric-chain check, one creative test, search terms/placement hygiene, with time estimates and the exact AI prompt for each task; (2) MONTHLY routine — blended CAC calculation (total marketing spend ÷ total new customers), attribution sanity check, fraud check, one experiment concluded and logged; (3) QUARTERLY — incrementality question, channel expansion/kill review, owned-audience growth check (email list, retargeting pools); (4) my dashboard — the 5 numbers that tell me everything, defined precisely; (5) the 90-day plan to get this whole system running from where I am today, sized to my hours.",
        note: "Put the weekly block in your real calendar before closing this lesson. A 90-minute weekly ritual, kept for a year, beats any amount of sporadic brilliance — that's the entire secret.",
      },
      steps: [
        {
          html: `<h3>Blended CAC: the number that keeps you honest</h3><p>Channel dashboards each tell their own flattering story. The north star that can't lie: <strong>blended CAC — total marketing spend ÷ total new customers, all channels combined.</strong></p><ul><li>It absorbs attribution confusion: credit disputes between channels don't change the blended total</li><li>Paired with <strong>customer lifetime value (LTV)</strong>, it answers the only strategic question: does a customer bring in meaningfully more than they cost to acquire? A healthy business keeps LTV comfortably above CAC — with room for margins and growth</li><li>Watch its trend: blended CAC creeping up quarter over quarter is the early warning that channels are saturating or creative is stale — visible long before any single dashboard admits it</li></ul>`,
          question: {
            text: "Why is blended CAC harder to fool than channel-by-channel dashboards?",
            options: [
              "It updates more frequently than platform metrics",
              "Total spend ÷ total new customers ignores attribution credit disputes entirely — the money and the customers are simply counted",
              "Platforms are legally required to verify it",
            ],
            correctIndex: 1,
            explanation:
              "Channels argue over credit; the bank account doesn't. Blended CAC measures the whole machine's output against its whole cost — the trend line that catches problems every per-channel view can hide.",
          },
        },
        {
          html: `<h3>Own the audience, don't just rent it</h3><p>Every ad click is rented attention — the platform charges you again tomorrow. Sustainable systems convert rented attention into owned audiences:</p><ul><li><strong>Email list:</strong> the classic — every paid visitor should meet a genuinely valuable reason to subscribe</li><li><strong>First-party data:</strong> your customer list powers lookalikes, exclusions, and smarter bidding — and gets MORE valuable as privacy changes weaken third-party tracking</li><li><strong>Brand searches:</strong> the compounding gift — people who saw your ads later searching your name is demand you no longer pay per-click prices to create</li></ul><div class="discovery"><p>💡 <strong>The sustainability test</strong></p><p>Ask quarterly: "if ad costs doubled tomorrow, what survives?" Businesses with strong email lists, referral engines, repeat customers, and brand recognition answer calmly. That calm is what this whole system builds toward — paid ads as an accelerant, not a life-support machine.</p></div>`,
          question: {
            text: "Why does converting paid traffic into an email list make the whole system more sustainable?",
            options: [
              "Email lists improve Quality Score directly",
              "Owned audiences can be reached repeatedly at near-zero cost — reducing dependence on ever-rising ad prices",
              "Platforms charge less to advertisers with big lists",
            ],
            correctIndex: 1,
            explanation:
              "Ad platforms re-charge you for every touch; your list doesn't. Each subscriber converts rented attention into owned attention — the asset that keeps working when ad auctions get more expensive every year.",
          },
        },
        {
          html: `<p>Final systems review with Nova — the whole course in one session 🏁</p>`,
          chat: [
            {
              bot: "Nova, one last time 🏆 You started as TechFlow's new hire — let's prove you leave as its systems-builder. Full review!",
            },
            {
              bot: "Rebuild the master loop. Tap in order.",
              ask: "Arrange the performance marketing flywheel:",
              inputType: "arrange",
              words: ["Target", "intent", "launch", "creative", "measure", "the", "chain", "test", "and", "scale"],
              feedback:
                "That's the flywheel — intent-based targeting, creative that stops the scroll, the metric chain as your instrument panel, and testing as the engine. Every week spins it faster.",
              hint: "Targeting → creative → measurement → iteration.",
            },
            {
              bot: "Match each course pillar to its one-line essence.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Metric chain", right: "Seen → clicked → converted → profitable" },
                { left: "Quality Score & auction quality", right: "Relevance is a literal discount" },
                { left: "Creative iteration", right: "Winners are found, then remixed" },
                { left: "Blended CAC vs LTV", right: "The whole machine's honest scoreboard" },
              ],
              feedback:
                "Perfect recall — four ideas that outlive any platform update or interface redesign.",
              hint: "The chain, the discount, the treadmill, the scoreboard.",
            },
            {
              bot: "Fill in the sustainability principle.",
              ask: "Convert rented attention into ___ audiences — email lists, customer data, brand recognition.",
              inputType: "fill-blank",
              template: "Convert rented attention into ___ audiences — email lists, customer data, brand recognition.",
              options: ["owned", "borrowed", "expensive"],
              correctIndex: 0,
              feedback:
                "Owned — the difference between a business that survives rising ad costs and one that doesn't. Every campaign should feed the assets you keep.",
              hint: "Rent vs...",
            },
            {
              bot: "Final scenario: eight weeks in, TechFlow's CEO sees a competitor's flashy TikTok campaign and wants to drop everything and copy it — abandoning the weekly system.",
              ask: "Your answer as the performance marketing manager?",
              inputType: "choice",
              options: [
                "Agree — competitors always know best",
                "Hold the system: evaluate TikTok with the expansion readiness test, and if it passes, enter with real budget, kill criteria, and native creative — the system decides, not envy",
                "Ban all discussion of new channels forever",
              ],
              correctIndex: 1,
              feedback:
                "Spoken like a systems-owner 🎓 New channels enter through the front door — readiness test, real budget, kill criteria — not through panic. The system you built makes every future decision easier. Congratulations, manager: TechFlow's growth engine is yours. 🎉",
              hint: "You built a process for exactly this question.",
            },
          ],
        },
        {
          html: `<h3>The complete operating system</h3><p>Everything from this course, on one page:</p><ul><li><strong>Weekly (~90 min):</strong> metric chain check across channels · search terms & placement hygiene · one creative test launched or concluded · results logged</li><li><strong>Monthly (~45 min):</strong> blended CAC and trend · attribution sanity check with AI as devil's advocate · fraud check · one lesson added to the playbook</li><li><strong>Quarterly (~2 hours):</strong> incrementality question on the most suspicious spend · expansion/kill review via readiness test · owned-audience growth check — is the list growing? Are brand searches rising?</li><li><strong>Always:</strong> every campaign feeds an owned asset; every test ends in a logged lesson; every decision traces to a number</li></ul><p>You arrived at TechFlow knowing nothing about performance marketing. You leave owning a system: <strong>intent-based targeting, creative that stops scrolls, honest measurement, fraud-hardened budgets, and economics built to outlast rising ad costs.</strong> Generate your own 90-day plan today — and put the first weekly block in your calendar before this tab closes.</p>`,
          question: {
            text: "What's the defining habit of sustainable performance marketing, according to this course?",
            options: [
              "Finding the one perfect campaign and never touching it again",
              "A kept rhythm — weekly, monthly, quarterly rituals where testing compounds, numbers stay honest, and every campaign feeds owned assets",
              "Switching to whatever channel competitors are using each month",
            ],
            correctIndex: 1,
            explanation:
              "Platforms change, ads fatigue, costs rise — the rhythm is what endures. Ninety minutes a week, honestly measured and always testing, quietly outperforms every burst of sporadic brilliance. That's the system you now own.",
          },
        },
      ],
    },
  ],
};
