import type { UnitSeed } from "./types";

export const AI_SEO_UNIT_1: UnitSeed = {
  title: "AI for SEO",
  lessons: [
    {
      title: "SEO in the AI Era",
      summary:
        "How search engines really rank pages — and where AI makes the whole process faster",
      content: `<p>Every second, Google processes hundreds of thousands of searches. Some of those people are looking for exactly what you offer — but they're finding your competitors instead. That's an SEO problem, and it's fixable. In this lesson you'll learn how search engines work, what they reward, and where AI fits in to make the whole process faster and smarter.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my SEO coach. My business: [describe what you offer and where]. My website: [URL or 'not live yet']. (1) List the 10 searches my ideal customers most likely type into Google, and label each with its search intent: informational, navigational, commercial, or transactional. (2) For each, tell me what type of page would satisfy it (guide, comparison, product page, etc.). (3) Tell me which 3 I should target first and why — explain in plain English, no jargon.",
        note: "Save the output — it becomes your raw material for the keyword research lesson next. Notice how intent labels instantly tell you WHAT to build, not just what to target.",
      },
      steps: [
        {
          html: `<h3>What Google actually rewards</h3><p>When someone searches, Google's job is simple: show the pages that <strong>best answer that specific search</strong>. Not the prettiest site. Not the newest. Not the biggest ad budget — ads sit in their own labeled slots, while the organic results below are ranked on relevance and quality.</p><p>That's genuinely good news for small businesses: <strong>helpful content beats big budgets</strong> in organic search. A local bakery with a genuinely useful "how to store sourdough" page can outrank a national chain for that search. SEO is the craft of being that most-helpful answer — and AI is about to make the craft much faster.</p>`,
          question: {
            text: "What does Google prioritize when ranking organic search results?",
            options: [
              "Pages that best match what the searcher is looking for",
              "Pages with the most professional design",
              "The newest pages published recently",
              "Pages that pay the most for advertising",
            ],
            correctIndex: 0,
            explanation:
              "While ads appear at the top in labeled slots, organic results are ranked by relevance and quality — not by payment, age, or polish. Google rewards helpful content.",
          },
        },
        {
          html: `<h3>Search intent: the why behind the search</h3><p>To match what searchers want, you need to understand <em>why</em> people search — not just what they type. There are four types of search intent:</p><ul><li><strong>Informational</strong> = learn — "how to decorate small spaces"</li><li><strong>Navigational</strong> = find a specific site — "IKEA"</li><li><strong>Commercial</strong> = compare before buying — "best coffee tables"</li><li><strong>Transactional</strong> = ready to purchase — "buy modern floor lamp"</li></ul><p>Why it matters: if you build a product page but target informational keywords, people land there looking for free advice, not to buy. Traffic that never converts. <strong>Match content type to intent, and you attract the right visitors at the right moment.</strong></p>`,
          question: {
            text: "Someone searches \"best running shoes for flat feet\". What's their intent — and what page wins?",
            options: [
              "Transactional — they need a checkout page immediately",
              "Commercial — they're comparing options, so a comparison guide with recommendations wins",
              "Navigational — they're looking for one specific brand's website",
            ],
            correctIndex: 1,
            explanation:
              "\"Best X for Y\" is classic commercial intent — they're researching before buying. A comparison guide with honest recommendations satisfies them; a bare product page feels premature and gets skipped.",
          },
        },
        {
          html: `<p>Time to train your intent radar with Nova, your SEO coach.</p>`,
          chat: [
            {
              bot: "Hey! Nova here 👋 SEO starts with reading minds — well, reading search intent. Let's practice.",
            },
            {
              bot: "Quick fire: someone types \"buy ergonomic office chair free delivery\".",
              ask: "Is this transactional intent?",
              inputType: "binary",
              options: ["Yes — transactional", "No — informational"],
              correctIndex: 0,
              feedback:
                "Yes! \"Buy\" plus delivery details = wallet out, ready to purchase. This searcher needs a product page with a clear path to checkout — not a blog post.",
              hint: "Look at the first word they typed.",
            },
            {
              bot: "Now match each search to its intent type.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "\"how to fix a leaky tap\"", right: "Informational" },
                { left: "\"IKEA opening hours\"", right: "Navigational" },
                { left: "\"best plumbers near me reviews\"", right: "Commercial" },
                { left: "\"book emergency plumber now\"", right: "Transactional" },
              ],
              feedback:
                "Perfect — learn, find, compare, buy. Every search on Earth falls into one of these four buckets.",
              hint: "Learn / find a site / compare / buy.",
            },
            {
              bot: "Let's lock in the core rule. Fill in the blank.",
              ask: "Match your content type to the searcher's ___, and your traffic converts.",
              inputType: "fill-blank",
              template: "Match your content type to the searcher's ___, and your traffic converts.",
              options: ["intent", "budget", "location"],
              correctIndex: 0,
              feedback:
                "Exactly — intent is the whole game. Guides for learners, comparisons for shoppers, product pages for buyers.",
              hint: "It's the WHY behind the search.",
            },
            {
              bot: "Real scenario: a candle shop writes a beautiful blog post targeting \"buy scented candles online\" — informational-style content on a transactional keyword.",
              ask: "What happens?",
              inputType: "choice",
              options: [
                "It ranks and sells — good content always wins",
                "Buyers land on an article when they wanted a shop, and leave — mismatch kills conversion",
                "Google penalizes the site permanently",
              ],
              correctIndex: 1,
              feedback:
                "Right — visitors leave immediately when the page type doesn't match their moment, even if the writing is great. Intent mismatch is the most common SEO mistake, and now you'll never make it.",
              hint: "Imagine clicking ready-to-buy and landing on an essay.",
            },
          ],
        },
        {
          html: `<h3>What makes Google choose YOUR page</h3><p>Intent match gets you in the race; multiple ranking factors win it. Picture a page that matches searcher intent, loads fast, AND earns links from 10 industry blogs — it satisfies several signals at once:</p><ul><li><strong>Helpful content:</strong> genuinely answers the search, in depth</li><li><strong>Credibility:</strong> other reputable sites linking to you tells Google you're trusted</li><li><strong>User experience:</strong> fast loading, easy reading, works on phones</li></ul><div class="discovery"><p>💡 <strong>Where AI fits</strong></p><p>AI won't rank your site by magic — but it compresses every SEO task: keyword research in minutes, content outlines in seconds, technical checklists in plain English. Same craft, a fraction of the hours. That's this whole course.</p></div>`,
          question: {
            text: "A detailed guide matches search intent, loads fast, and earns links from 10 industry blogs. What does this achieve?",
            options: [
              "Matching search intent is the only factor that counts here",
              "It satisfies multiple ranking factors at once — helpful content, credibility signals, and smooth user experience",
              "Fast load speed alone determines the ranking",
              "Only the 10 backlinks matter",
            ],
            correctIndex: 1,
            explanation:
              "Rankings come from stacked signals, not one silver bullet. Relevance, credibility, and experience each contribute — and pages that combine them are the ones that win competitive searches.",
          },
        },
      ],
    },
    {
      title: "Keyword Research",
      summary:
        "Find searches you can actually win — AI turns hours of keyword digging into minutes",
      content: `<p>Keywords are the bridge between what people search and what you offer. Pick ones too competitive and you're invisible; too obscure and nobody's searching. This lesson teaches you to find the sweet spot — realistic keywords with real demand — using AI to do in minutes what used to take an afternoon.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my keyword researcher. My business: [describe offer + city/area if local]. My website is [new/small/established]. Generate 25 keyword ideas grouped into: (1) long-tail keywords I can realistically win soon (specific, 4+ words, clear intent), (2) medium-competition keywords to target within 6 months, (3) dream keywords for the long game. For each: label the search intent and the content type that would satisfy it. Then pick my top 5 quick wins and explain why in one sentence each.",
        note: "Cross-check the promising ones in a free tool (Google Keyword Planner, or just type them into Google and study what ranks). AI generates the ideas; real search results confirm the demand.",
      },
      steps: [
        {
          html: `<h3>Head terms vs. long-tail: pick fights you can win</h3><p>Keywords come in two sizes:</p><ul><li><strong>Head terms:</strong> "coffee" or "yoga" — massive volume, brutal competition. New sites have near-zero chance</li><li><strong>Long-tail:</strong> "beginner yoga classes for seniors in Leeds" — smaller volume, but specific intent and winnable competition</li></ul><p>Here's the counterintuitive math: <strong>long-tail searches add up to more total traffic than head terms</strong> — and they convert better, because specific searches mean specific needs. Ten winnable long-tails beat one impossible head term every time.</p>`,
          question: {
            text: "Your new bakery website wants search traffic. Which keyword strategy actually works?",
            options: [
              "Target \"bakery\" — maximum search volume means maximum traffic",
              "Target specific long-tails like \"custom birthday cakes same day delivery [your city]\" that you can realistically rank for",
              "Target keywords with zero searches — no competition at all",
            ],
            correctIndex: 1,
            explanation:
              "\"Bakery\" is a fight you can't win yet, and zero-search keywords bring zero visitors. Specific long-tails have real demand, clear intent, and competition a small site can actually beat.",
          },
        },
        {
          html: `<h3>AI as your keyword brainstorming engine</h3><p>Traditional keyword research: hours in spreadsheets. With AI, you start with a conversation:</p><ul><li><em>"List 30 searches someone would type before buying [your product]"</em></li><li><em>"What questions do people ask about [your topic]? Group by intent."</em></li><li><em>"Give me long-tail variations of [keyword] a small site could win"</em></li></ul><div class="discovery"><p>💡 <strong>AI generates, reality validates</strong></p><p>AI doesn't know live search volumes — it predicts what people plausibly search. So the workflow is: AI brainstorms wide → you verify the shortlist in a free tool like Google Keyword Planner, or simply Google the phrase and see if strong pages already rank. Ideas from AI, evidence from reality.</p></div>`,
          question: {
            text: "Why should you verify AI-suggested keywords in a real tool or live Google search?",
            options: [
              "AI suggestions are always wrong",
              "AI predicts plausible searches but doesn't know live volumes or competition — reality confirms which ideas have demand",
              "Google penalizes AI-generated keyword lists",
            ],
            correctIndex: 1,
            explanation:
              "AI is a brilliant brainstormer, not a live database. It widens your idea funnel in seconds; a quick reality check on the shortlist tells you where real demand and beatable competition exist.",
          },
        },
        {
          html: `<p>Keyword bootcamp with Nova — spot the winners.</p>`,
          chat: [
            {
              bot: "Nova here 🔑 Let's sharpen your keyword instincts. Three rounds.",
            },
            {
              bot: "A brand-new dog grooming site can target one keyword first.",
              ask: "Which one is the smart pick?",
              inputType: "choice",
              options: [
                "\"dogs\" — 10 million searches a month",
                "\"dog grooming\" — 100k searches a month",
                "\"anxious dog grooming near Camden\" — 90 searches a month",
              ],
              correctIndex: 2,
              feedback:
                "Yes! 90 searches from people with EXACTLY that need, in a fight you can win, beats 10 million searches you'll never see a click from. Win small, then climb.",
              hint: "Which fight can a brand-new site actually win?",
            },
            {
              bot: "Fill in the long-tail law.",
              ask: "Specific searches mean specific needs — so long-tail traffic ___ better.",
              inputType: "fill-blank",
              template: "Specific searches mean specific needs — so long-tail traffic ___ better.",
              options: ["converts", "bounces", "costs"],
              correctIndex: 0,
              feedback:
                "Right — someone searching \"anxious dog grooming near Camden\" is practically booking already. Specificity is pre-qualification.",
              hint: "What do visitors do when the page matches their exact need?",
            },
            {
              bot: "Build the research workflow. Tap the words in order.",
              ask: "Arrange the keyword workflow:",
              inputType: "arrange",
              words: ["AI", "brainstorms", "wide", "you", "verify", "demand", "then", "target", "winners"],
              feedback:
                "That's the loop — wide with AI, narrow with evidence, then commit to the winnable ones.",
              hint: "It starts with AI going wide.",
            },
            {
              bot: "Gut-check: a consultant wants to rank #1 for \"marketing\" as her first SEO goal.",
              ask: "Realistic plan?",
              inputType: "binary",
              options: ["Realistic", "Not realistic"],
              correctIndex: 1,
              feedback:
                "Not realistic — that head term belongs to global giants with decade-old sites. Her winnable version: \"marketing consultant for dental clinics [city]\". Same customer, beatable fight.",
              hint: "Who currently owns page one for one-word terms?",
            },
          ],
        },
        {
          html: `<h3>From list to plan: prioritize like a strategist</h3><p>A keyword list isn't a strategy until it's prioritized. Ask AI to score your shortlist:</p><ul><li><strong>Relevance:</strong> does this searcher actually want what I sell?</li><li><strong>Winnability:</strong> Google it — are the current results weak, generic, or outdated? That's your opening</li><li><strong>Value:</strong> transactional and commercial intent first if you need revenue; informational to build audience</li></ul><p>The output of this lesson is a ranked shortlist of 5–10 target keywords. Next lesson, AI turns that list into a content plan — <strong>every keyword becomes a page with a job to do.</strong></p>`,
          question: {
            text: "You Google a target keyword and page one is full of thin, outdated, generic pages. What does that mean?",
            options: [
              "The keyword is worthless — nobody serious targets it",
              "That's your opening — weak current results mean a genuinely helpful page can break in",
              "You should avoid it — old pages are impossible to outrank",
            ],
            correctIndex: 1,
            explanation:
              "Weak page-one results are the single best signal of a winnable keyword. Google ranks the best available answer — if the available answers are mediocre, yours gets to be the best.",
          },
        },
      ],
    },
    {
      title: "AI-Assisted Content Planning",
      summary:
        "Turn keywords into a content calendar — topic clusters that build authority, planned in one sitting",
      content: `<p>Random blog posts don't build rankings — organized content does. This lesson turns your keyword list into a real content plan: topic clusters that make Google see you as an authority, mapped to the customer journey, and scheduled at a pace you can actually sustain. AI does the organizing; you make the calls.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my content strategist. My business: [describe]. My target keywords: [paste your shortlist from the last lesson]. (1) Organize these into 2–3 topic clusters, each with one pillar page topic and 4–6 supporting article topics. (2) Label each piece with search intent and where it sits in the customer journey (discovering / comparing / ready to buy). (3) Put it into a 3-month calendar at [X] pieces per month — quick wins first. (4) For the first piece, give me a full outline: title options, headings, questions to answer, and internal links to plan.",
        note: "Publish pace matters less than consistency. Two solid pieces a month, every month, beats eight in January and silence until June.",
      },
      steps: [
        {
          html: `<h3>Topic clusters: how sites become authorities</h3><p>Google trusts sites that cover a topic thoroughly, not sites with scattered one-off posts. The structure that wins:</p><ul><li><strong>Pillar page:</strong> one comprehensive guide on your big topic — "The Complete Guide to Home Coffee Brewing"</li><li><strong>Cluster content:</strong> focused articles on subtopics — grind sizes, water temperature, best beans for espresso — each linking back to the pillar</li></ul><p>The links between them tell Google: <em>this site owns this topic</em>. One strong cluster beats twenty disconnected posts — and clusters are exactly the kind of structured thinking AI organizes brilliantly.</p>`,
          question: {
            text: "Why do topic clusters outrank the same number of scattered, unrelated posts?",
            options: [
              "Clusters use more keywords per page",
              "Interlinked coverage of one topic signals to Google that your site is an authority on it",
              "Google counts the total number of internal links only",
            ],
            correctIndex: 1,
            explanation:
              "Depth beats breadth. A pillar page plus linked supporting articles shows comprehensive expertise on one topic — and Google rewards demonstrated authority with better rankings across the whole cluster.",
          },
        },
        {
          html: `<h3>Map content to the customer journey</h3><p>Different searchers are at different moments — your plan should meet all of them:</p><ul><li><strong>Discovering</strong> (informational): "why does my espresso taste bitter" → how-to guides that introduce you</li><li><strong>Comparing</strong> (commercial): "best home espresso machines under $500" → honest comparisons that build trust</li><li><strong>Ready to buy</strong> (transactional): "buy [product] with free shipping" → product/service pages that close</li></ul><div class="discovery"><p>💡 <strong>The mistake AI helps you avoid</strong></p><p>Most businesses only create ready-to-buy pages — then wonder why nobody arrives. Discovery content is how strangers find you; comparison content is how they learn to trust you. Ask AI: "check my content plan — which journey stage am I neglecting?"</p></div>`,
          question: {
            text: "A business has great product pages but zero guides or comparisons. What's the predictable result?",
            options: [
              "Perfect efficiency — every page can convert",
              "Almost no one finds them — there's no discovery or trust-building content bringing strangers in",
              "Google ranks product pages higher because there's no dilution",
            ],
            correctIndex: 1,
            explanation:
              "Product pages convert visitors who already arrived — but discovery and comparison content is what brings them in. A plan with only bottom-of-journey pages is a shop with no doors.",
          },
        },
        {
          html: `<p>Planning drills with Nova — build the cluster.</p>`,
          chat: [
            {
              bot: "Nova here 🗂️ Let's build a topic cluster together — architect hat on.",
            },
            {
              bot: "A personal trainer's big topic is \"strength training for beginners\".",
              ask: "Which is the PILLAR page?",
              inputType: "choice",
              options: [
                "\"The Complete Beginner's Guide to Strength Training\"",
                "\"5 dumbbell mistakes to avoid\"",
                "\"What I ate this Tuesday\"",
              ],
              correctIndex: 0,
              feedback:
                "Exactly — the pillar is the comprehensive hub. The dumbbell mistakes piece is perfect cluster content linking back to it. (Tuesday's lunch is... a different genre.)",
              hint: "Which one could contain links to all the others?",
            },
            {
              bot: "Match each searcher to the content they need.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "\"why am I always sore after gym\"", right: "How-to guide (discovering)" },
                { left: "\"best personal trainers near me\"", right: "Comparison/reviews page (comparing)" },
                { left: "\"book personal training session\"", right: "Service page (ready to buy)" },
              ],
              feedback:
                "Perfect — one plan, three doors, every stage of the journey covered.",
              hint: "Learn → compare → buy.",
            },
            {
              bot: "Fill in the cluster rule.",
              ask: "Supporting articles ___ back to the pillar page.",
              inputType: "fill-blank",
              template: "Supporting articles ___ back to the pillar page.",
              options: ["link", "copy", "redirect"],
              correctIndex: 0,
              feedback:
                "Right — those internal links are the wiring that makes the cluster work as one authority signal.",
              hint: "It's what connects the cluster together.",
            },
            {
              bot: "Last call: the trainer can publish 2 pieces/month. AI suggests a 40-article plan for month one.",
              ask: "Accept the plan?",
              inputType: "binary",
              options: ["Accept it", "Resize it"],
              correctIndex: 1,
              feedback:
                "Resize it — a plan you can't sustain is a plan that fails silently. Tell AI your real capacity and let it prioritize the 2 highest-impact pieces per month. Consistency compounds; bursts fizzle.",
              hint: "What happens in month two of an impossible plan?",
            },
          ],
        },
        {
          html: `<h3>From plan to production: the AI outline</h3><p>For each planned piece, have AI build the outline before you write a word:</p><ul><li><em>"Outline an article targeting [keyword]. Include: 3 title options, H2/H3 headings, the questions searchers want answered (check 'People Also Ask' on Google for real ones), and which cluster pages to link to."</em></li><li>Review the outline against your expertise: what would YOU add that generic advice misses? That addition is your ranking edge</li><li>Batch it: outline a month of content in one 30-minute session</li></ul><p>An outline-first workflow means writing becomes filling in structure — faster, better organized, and always aimed at a keyword with a job to do. <strong>Next lesson: turning outlines into pages that actually rank.</strong></p>`,
          question: {
            text: "What's the biggest advantage of having AI outline every piece before writing?",
            options: [
              "Outlines eliminate the need to write the article",
              "Every piece starts aimed at a keyword, structured around real searcher questions, and wired into your cluster",
              "Google ranks outlines directly",
            ],
            correctIndex: 1,
            explanation:
              "The outline stage is where SEO happens: keyword focus, searcher questions, heading structure, internal links. Writing from a strategic outline beats polishing an unfocused draft every time.",
          },
        },
      ],
    },
    {
      title: "On-Page SEO & Content Writing",
      summary:
        "Write pages that rank AND read like a human — titles, headings, and AI drafting done right",
      content: `<p>You have keywords and a plan — now the craft: writing pages that Google understands and humans enjoy. This lesson covers the on-page elements that matter (titles, headings, meta descriptions), how to draft with AI without sounding robotic, and the editing pass that turns AI drafts into content that genuinely deserves to rank.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Write a first draft for my page targeting [keyword]. Outline: [paste from last lesson]. My business: [describe]. My voice: [paste 2 short samples of your writing and say 'match this']. Rules: answer the searcher's question in the first 100 words; use the keyword naturally in the title, first paragraph, and one heading — never force it; short paragraphs; no fluff like 'in today's fast-paced world'. Then give me: 3 title tag options under 60 characters, and a meta description under 155 characters that makes someone want to click.",
        note: "Now do the human pass: add one real example from your business, one detail only you would know, and cut anything you wouldn't say out loud. That 20% edit is what separates ranking content from AI wallpaper.",
      },
      steps: [
        {
          html: `<h3>The on-page elements Google reads first</h3><p>Before Google reads your paragraphs, it reads your structure:</p><ul><li><strong>Title tag:</strong> the clickable headline in search results — keyword near the front, under 60 characters, written to earn the click</li><li><strong>Headings (H1, H2, H3):</strong> your page's table of contents — Google uses them to understand what each section answers</li><li><strong>Meta description:</strong> the preview text under your title — doesn't affect ranking directly, but a compelling one wins clicks over the pages around you</li><li><strong>First 100 words:</strong> answer the search fast; both Google and impatient humans decide here</li></ul><p>None of this is exotic — it's clarity, formalized. AI handles the formatting flawlessly once you know what to ask for.</p>`,
          question: {
            text: "What's the job of a meta description?",
            options: [
              "It's Google's #1 ranking factor",
              "It's the search-result preview text — its job is earning the click over neighboring results",
              "It's hidden text only crawlers see, so keyword-stuff it",
            ],
            correctIndex: 1,
            explanation:
              "Meta descriptions don't directly boost rankings — but they're your ad in the search results. A compelling one steals clicks from positions above you, and clicks are the whole point.",
          },
        },
        {
          html: `<h3>Keywords: seasoning, not the meal</h3><p>The old SEO trick of repeating keywords twenty times died years ago — Google now understands topics and synonyms, and keyword-stuffed pages read terribly AND rank worse.</p><p>The modern rule: <strong>use your keyword naturally in the title, first paragraph, and a heading or two — then write for the human.</strong> Cover the topic thoroughly, use natural variations ("coffee grinder", "grinding coffee", "burr grinder"), and answer the questions a real searcher has next.</p><div class="discovery"><p>💡 <strong>The AI-draft trap</strong></p><p>Raw AI drafts are grammatically perfect and personality-free — and Google's systems reward content showing real experience and expertise. The fix isn't avoiding AI; it's the human pass: your examples, your data, your opinions, your customer stories. AI provides the skeleton; you provide the life.</p></div>`,
          question: {
            text: "What makes AI-drafted content rank well after your editing pass?",
            options: [
              "Adding the keyword to every single sentence",
              "Adding real experience — your examples, specific details, and knowledge generic content can't fake",
              "Making it three times longer than every competitor",
            ],
            correctIndex: 1,
            explanation:
              "Google increasingly rewards demonstrated first-hand experience. Your real examples and specific details are exactly what mass-produced content lacks — that's your unfair advantage over pure-AI pages.",
          },
        },
        {
          html: `<p>Editing-room session with Nova — sharpen the draft.</p>`,
          chat: [
            {
              bot: "Nova here ✍️ Editor hats on — let's fix some on-page mistakes.",
            },
            {
              bot: "A florist's page title: \"Flowers flowers best flowers cheap flowers buy flowers London flowers\".",
              ask: "What's the verdict?",
              inputType: "choice",
              options: [
                "Great — seven keyword mentions!",
                "Keyword stuffing — reads like spam to humans AND signals low quality to Google",
                "Fine, as long as the page content is good",
              ],
              correctIndex: 1,
              feedback:
                "Right — that title died in 2012. Modern winner: \"Same-Day Flower Delivery in London | [Shop Name]\" — one keyword, one promise, fully human.",
              hint: "Would you click that in search results?",
            },
            {
              bot: "Fill in the writing rule.",
              ask: "Answer the searcher's question in the first ___ words.",
              inputType: "fill-blank",
              template: "Answer the searcher's question in the first ___ words.",
              options: ["100", "1000", "10"],
              correctIndex: 0,
              feedback:
                "Yes — fast answers keep humans on the page and tell Google you're relevant. Depth comes after, for those who want more.",
              hint: "Enough for a real answer, short enough for the impatient.",
            },
            {
              bot: "Build the drafting workflow. Tap in order.",
              ask: "Arrange the content workflow:",
              inputType: "arrange",
              words: ["AI", "drafts", "the", "skeleton", "you", "add", "experience", "then", "publish"],
              feedback:
                "That's the winning split — AI speed plus your lived expertise. Neither alone ranks like both together.",
              hint: "AI first, human second.",
            },
            {
              bot: "Quick check: an AI draft opens with \"In today's fast-paced digital landscape, flowers are more important than ever.\"",
              ask: "Keep or cut?",
              inputType: "binary",
              options: ["Keep it", "Cut it"],
              correctIndex: 1,
              feedback:
                "Cut with prejudice 🔪 — it says nothing and screams 'AI wrote this'. Open with the answer: \"Yes, we can deliver flowers in London today — order by 2pm.\" Instant value, instant trust.",
              hint: "Does it answer anything the searcher asked?",
            },
          ],
        },
        {
          html: `<h3>The pre-publish checklist</h3><p>Before any page goes live, run this 2-minute check — or paste the draft into AI and have it check for you:</p><ul><li>✅ Title under 60 characters, keyword near the front, click-worthy</li><li>✅ Searcher's question answered in the first 100 words</li><li>✅ Headings form a logical outline someone could skim</li><li>✅ At least one real example, detail, or opinion only YOU could add</li><li>✅ Internal links to your related cluster pages</li><li>✅ Meta description under 155 characters that sells the click</li><li>✅ Read one paragraph aloud — does it sound like a person?</li></ul><p>Prompt to save: <em>"Review this draft as an SEO editor: check title length, first-100-words answer, heading structure, keyword naturalness, and flag anything that sounds AI-generic."</em> <strong>AI checks AI — and you make the final call.</strong></p>`,
          question: {
            text: "Which item on the pre-publish checklist can ONLY come from you, not AI?",
            options: [
              "A title tag under 60 characters",
              "A real example, detail, or opinion from your actual experience",
              "Headings in a logical structure",
            ],
            correctIndex: 1,
            explanation:
              "AI can format titles and structure headings all day — but your first-hand experience is unfakeable. It's precisely the ingredient that separates your page from a thousand generic ones on the same keyword.",
          },
        },
      ],
    },
    {
      title: "Technical SEO Simplified",
      summary:
        "Speed, mobile, and crawlability — fix the invisible blockers without hiring a developer",
      content: `<p>Technical SEO sounds intimidating — but for most small sites it comes down to a short list: load fast, work on phones, let Google find your pages. This lesson demystifies each item and shows you how AI translates the scary audit reports into plain-English fixes you can actually do.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I ran Google's free PageSpeed Insights test (pagespeed.web.dev) on my site and here are the results: [paste the scores and the list of opportunities/diagnostics — screenshots described in words are fine]. My site runs on [WordPress/Shopify/Wix/etc.] and I'm not a developer. (1) Translate each issue into plain English — what is it and why does it matter? (2) Sort them: which can I fix myself in under 30 minutes (with steps for my platform), and which need a developer? (3) If I fix only ONE thing this week, which gives the biggest improvement?",
        note: "Run the PageSpeed test first — it's free and takes 30 seconds. The AI translation turns a wall of jargon into this week's to-do list.",
      },
      steps: [
        {
          html: `<h3>The big three: speed, mobile, crawlability</h3><p>Google can love your content and still rank you poorly if the technical basics fail:</p><ul><li><strong>Speed:</strong> pages taking over ~3 seconds lose half their visitors before anything loads — and Google notices the abandonment</li><li><strong>Mobile:</strong> most searches happen on phones, and Google ranks your MOBILE version. A site that's clunky on a phone is clunky in the rankings</li><li><strong>Crawlability:</strong> Google discovers pages by following links. Pages with no links pointing to them ("orphan pages") may never get found — or ranked</li></ul><p>The good news: free tools diagnose all three, and AI translates the diagnosis into fixes.</p>`,
          question: {
            text: "Your beautiful new services page isn't linked from anywhere on your site. What's the SEO risk?",
            options: [
              "None — Google finds everything eventually",
              "It's an orphan page — Google may never discover it, and it earns no authority from your other pages",
              "It gets a penalty for hiding content",
            ],
            correctIndex: 1,
            explanation:
              "Google discovers and values pages by following links. An unlinked page is invisible to crawlers AND cut off from your site's internal authority. Every page needs at least one internal link pointing to it.",
          },
        },
        {
          html: `<h3>Speed wins you can get without code</h3><p>The most common speed killer on small business sites is almost embarrassingly simple: <strong>giant images</strong>. A phone photo uploaded straight from the camera can be 20x larger than needed.</p><ul><li><strong>Compress images</strong> before uploading (free tools like TinyPNG) or install a compression plugin</li><li><strong>Trim the plugins:</strong> every extra widget, popup, and tracker slows the page — audit what you actually use</li><li><strong>Decent hosting:</strong> if your host is slow, everything is slow — a $10/month upgrade often beats hours of optimization</li></ul><div class="discovery"><p>💡 <strong>The AI translation trick</strong></p><p>Audit tools output jargon: "Eliminate render-blocking resources. Serve images in next-gen formats." Paste it all into AI: <em>"Explain each in plain English and give me the fix for [my platform]"</em>. Suddenly it's a checklist, not a wall.</p></div>`,
          question: {
            text: "PageSpeed says \"serve images in next-gen formats\" and you have no idea what that means. Best move?",
            options: [
              "Ignore it — jargon means it's for developers only",
              "Paste the full report into AI and ask for a plain-English explanation plus fixes for your specific platform",
              "Rebuild the site from scratch on a new platform",
            ],
            correctIndex: 1,
            explanation:
              "Audit jargon is a translation problem, not a skill problem. AI turns \"next-gen formats\" into \"your photos are too heavy — here's the compression plugin for WordPress and how to set it up\".",
          },
        },
        {
          html: `<p>Technical triage with Nova — no code required.</p>`,
          chat: [
            {
              bot: "Nova here 🔧 Don't worry — this is the no-code zone. Let's triage some sites.",
            },
            {
              bot: "A café's site takes 8 seconds to load. The culprit: the homepage hero is a 12MB photo straight off a phone camera.",
              ask: "What's the fix?",
              inputType: "choice",
              options: [
                "Hire a developer for a full site rebuild",
                "Compress the image — same photo, a fraction of the size, seconds saved",
                "Remove all photos from the website",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — a 12MB photo compresses to ~200KB with zero visible difference. The most common speed problem on small sites has a 5-minute fix.",
              hint: "The photo isn't the problem — the file size is.",
            },
            {
              bot: "Match each symptom to the technical issue.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Page loads slowly everywhere", right: "Huge uncompressed images" },
                { left: "Text tiny, buttons unclickable on phones", right: "Not mobile-friendly" },
                { left: "New page never appears in Google", right: "Orphan page — no links to it" },
              ],
              feedback:
                "Perfect triage — you just diagnosed the three most common technical SEO problems on small business sites.",
              hint: "Speed, mobile, crawlability — in that order.",
            },
            {
              bot: "Fill in the mobile rule.",
              ask: "Google ranks the ___ version of your website.",
              inputType: "fill-blank",
              template: "Google ranks the ___ version of your website.",
              options: ["mobile", "desktop", "printed"],
              correctIndex: 0,
              feedback:
                "Right — mobile-first indexing means your phone experience IS your ranking experience. Test your own site on your own phone today.",
              hint: "Where do most searches happen?",
            },
            {
              bot: "Gut-check: an owner spends 3 weeks obsessing over a 92→96 PageSpeed score while publishing zero content.",
              ask: "Time well spent?",
              inputType: "binary",
              options: ["Well spent", "Misspent"],
              correctIndex: 1,
              feedback:
                "Misspent — 92 is already excellent. Technical SEO is a foundation, not a hobby: get it good enough, then pour the hours into content and authority, where rankings are actually won.",
              hint: "Was speed the thing holding the site back?",
            },
          ],
        },
        {
          html: `<h3>Your quarterly 30-minute technical check</h3><p>Technical SEO isn't a daily job — it's a quarterly routine:</p><ul><li><strong>PageSpeed Insights</strong> (pagespeed.web.dev): run it on your homepage and top pages → paste results into AI for the plain-English fix list</li><li><strong>Phone test:</strong> open your site on your own phone — can you read, tap, and buy without pinching and zooming?</li><li><strong>Google Search Console</strong> (free): check the Pages report for anything marked "not indexed" — AI explains what each reason means</li><li><strong>Click-through check:</strong> click through your own menu — can every important page be reached in 2–3 clicks?</li></ul><p>The mindset: <strong>technical SEO is pass/fail, not perfectionism.</strong> Pass the basics, then spend your energy where rankings are truly won — content and authority. Which is exactly where we go next.</p>`,
          question: {
            text: "What's the healthy mindset for technical SEO on a small business site?",
            options: [
              "Perfectionism — chase a 100/100 score before doing anything else",
              "Pass/fail — fix the real blockers quarterly, then invest your time in content and authority",
              "Ignore it completely — content quality overrides everything",
            ],
            correctIndex: 1,
            explanation:
              "Technical problems are blockers to remove, not a game to max out. Once speed, mobile, and crawlability pass, additional polish yields little — while content and authority keep compounding.",
          },
        },
      ],
    },
    {
      title: "Authority and Off-Page SEO",
      summary:
        "Earn the links and mentions that make Google trust you — no spam, no shortcuts",
      content: `<p>Google's original insight still drives rankings today: when reputable sites link to yours, that's a vote of confidence. This lesson covers off-page SEO — earning links, mentions, and reviews that build your site's authority — and how AI helps you find opportunities and write outreach that actually gets replies.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my digital PR assistant. My business: [describe + city]. My best content: [list 2–3 pages/guides you're proud of]. (1) Brainstorm 15 realistic link opportunities for a business like mine: local directories, industry associations, local news angles, partner businesses, guest post targets, and communities where my expertise helps. (2) Rank them by effort vs. impact. (3) Draft a short, personal outreach email for the top 3 — no templates that scream mass-mail; reference something specific about their site, and lead with what's in it for THEM.",
        note: "Send 2–3 personal emails a week, not 50 template blasts. One genuine link from a relevant local site beats twenty from spammy directories.",
      },
      steps: [
        {
          html: `<h3>Backlinks: votes of confidence</h3><p>When another website links to yours, Google reads it as a citation — someone found you worth referencing. But votes aren't equal:</p><ul><li><strong>Quality:</strong> one link from a respected industry site or local news outlet outweighs dozens from random blog spam</li><li><strong>Relevance:</strong> a bakery linked by a food blog counts more than the same bakery linked by a crypto forum</li><li><strong>Earned beats bought:</strong> buying links violates Google's rules and risks penalties — the sustainable play is being genuinely worth linking to</li></ul><p>The strategy in one line: <strong>create things worth citing, then make sure the right people see them.</strong></p>`,
          question: {
            text: "Which backlink helps a local bakery's SEO most?",
            options: [
              "50 links from random international directory sites",
              "One link from the city's popular food blog reviewing their sourdough",
              "A link they paid $20 for on a link marketplace",
            ],
            correctIndex: 1,
            explanation:
              "Relevance and reputation beat raw volume. A respected local food blog is exactly the kind of citation Google trusts — while bought links and spam directories range from worthless to actively risky.",
          },
        },
        {
          html: `<h3>Link-worthy assets: give people a reason</h3><p>Nobody links to a generic services page. People link to things that are useful, surprising, or citable:</p><ul><li><strong>Genuinely useful guides:</strong> the definitive local resource — "Every farmers market in [city], updated monthly"</li><li><strong>Original data or observations:</strong> "We analyzed 200 customer orders — here's when people actually buy flowers"</li><li><strong>Free tools and templates:</strong> checklists, calculators, printable planners</li></ul><div class="discovery"><p>💡 <strong>AI's role in link building</strong></p><p>AI brainstorms the asset ideas, identifies who'd care, and drafts the personal outreach — but the asset itself needs your real knowledge, and the relationships need your genuine voice. AI scales the process; authenticity closes it.</p></div>`,
          question: {
            text: "Why does \"original data from your own business\" attract links so well?",
            options: [
              "Google gives an automatic bonus for numbers",
              "Writers and bloggers need citable sources — unique data only you have makes YOU the source they must link to",
              "Data pages load faster than text pages",
            ],
            correctIndex: 1,
            explanation:
              "Anyone writing about your industry needs sources to cite. Generic opinions are everywhere, but data only you possess — your own observations, patterns, numbers — makes linking to you unavoidable.",
          },
        },
        {
          html: `<p>Authority-building scenarios with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 🤝 Off-page SEO is really just reputation-building. Let's practice the judgment calls.",
            },
            {
              bot: "An email arrives: \"We will build 500 backlinks to your site for $49! Guaranteed ranking!\"",
              ask: "What's the move?",
              inputType: "binary",
              options: ["Great deal — buy it", "Delete immediately"],
              correctIndex: 1,
              feedback:
                "Delete 🗑️ — 500 spam links can trigger penalties that take months to recover from. If links were legitimately purchasable for $49, everyone would rank #1. Earned links only.",
              hint: "If it sounds too easy to be true in SEO...",
            },
            {
              bot: "A wedding photographer wants links. Match each opportunity to why it works.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Local wedding venues' \"preferred vendors\" pages", right: "Relevant + partner relationship" },
                { left: "City lifestyle magazine's \"best of\" roundup", right: "Respected local publication" },
                { left: "Her guide: \"Every wedding venue in [city], compared\"", right: "Link-worthy asset others cite" },
              ],
              feedback:
                "Perfect — partnerships, press, and citable assets. That's the whole off-page playbook, no spam required.",
              hint: "Relationships, reputation, resources.",
            },
            {
              bot: "Fill in the outreach rule.",
              ask: "Great outreach emails lead with what's in it for ___.",
              inputType: "fill-blank",
              template: "Great outreach emails lead with what's in it for ___.",
              options: ["them", "you", "Google"],
              correctIndex: 0,
              feedback:
                "Exactly — \"your venue guide is missing X, my comparison covers it and your couples would find it useful\" gets replies. \"Please link to me\" gets deleted.",
              hint: "Whose inbox is it?",
            },
            {
              bot: "One more: AI drafts her outreach email and it opens \"Dear Webmaster, I hope this finds you well in these unprecedented times.\"",
              ask: "Send or fix?",
              inputType: "choice",
              options: [
                "Send — it's polite and professional",
                "Fix — personalize with their name and something specific about their site, in her real voice",
                "Add more formal language to be safe",
              ],
              correctIndex: 1,
              feedback:
                "Fix it — template-speak gets template treatment (the bin). Thirty seconds of genuine personalization is the entire difference between outreach that works and outreach that annoys.",
              hint: "How do YOU treat emails that start 'Dear Webmaster'?",
            },
          ],
        },
        {
          html: `<h3>Beyond links: mentions, reviews, and presence</h3><p>Authority is bigger than backlinks — Google reads your whole reputation footprint:</p><ul><li><strong>Reviews:</strong> steady, genuine Google reviews build trust signals (and feed local SEO — a whole lesson coming up)</li><li><strong>Consistent listings:</strong> same business name, address, and phone everywhere — directories, social profiles, maps. AI prompt: "list the top directories and platforms a [your type] business should be listed on"</li><li><strong>Community presence:</strong> answering questions in local groups and industry forums builds the recognition that turns into searches for your name — and branded searches are an authority signal themselves</li></ul><p>Think in years, not weeks: <strong>authority compounds.</strong> Every genuine link, review, and mention is a brick in a wall competitors can't quickly copy.</p>`,
          question: {
            text: "Why is authority-building described as \"compounding\"?",
            options: [
              "Links expire and must be rebuilt monthly",
              "Every genuine link, review, and mention adds to a reputation that keeps working and growing — and can't be quickly copied",
              "Google charges compound interest on rankings",
            ],
            correctIndex: 1,
            explanation:
              "Unlike ads that stop when spending stops, earned authority accumulates. Each citation keeps voting for you year after year — which is why the businesses that start earliest become hardest to displace.",
          },
        },
      ],
    },
    {
      title: "UX & Behavioral Signals",
      summary:
        "How visitor behavior shapes rankings — and how AI helps you fix the pages people abandon",
      content: `<p>Google watches what happens after the click: do visitors stay, read, and act — or bounce straight back to the results? This lesson covers the user experience signals that influence rankings, how to spot the pages quietly failing, and how AI helps you diagnose and fix them.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as a UX reviewer for my web page. The page: [paste the full text/content of one important page, and describe its layout — what's at the top, where the buttons are, what a visitor sees first]. The search it targets: [keyword]. Tell me: (1) Within 5 seconds of landing, is it obvious the visitor is in the right place? What's the first thing they see? (2) Where will they get bored, confused, or stuck? (3) Is there ONE clear next step (call, book, buy, read more) — or too many competing options? (4) Give me the 3 highest-impact changes, ranked. Be brutally honest.",
        note: "Then watch one real person (friend, family) use the page on THEIR phone while you stay silent. Sixty awkward seconds of watching teaches more than any report.",
      },
      steps: [
        {
          html: `<h3>The pogo-stick problem</h3><p>Imagine searching, clicking a result, realizing it's not what you wanted, and bouncing straight back to try another. That's <strong>pogo-sticking</strong> — and when many searchers do it on YOUR page, it signals the page didn't satisfy the search.</p><p>The most common causes are fixable:</p><ul><li><strong>Slow loading</strong> — they leave before seeing anything</li><li><strong>The answer is buried</strong> — 400 words of throat-clearing before the point</li><li><strong>Intent mismatch</strong> — the page isn't what the search promised (sound familiar? Lesson 1's lesson, measured)</li><li><strong>Wall of text</strong> — no headings, no paragraphs, no mercy</li></ul>`,
          question: {
            text: "Visitors keep landing on your page and leaving within seconds. What does this pattern suggest to Google?",
            options: [
              "The page is so efficient people find answers instantly",
              "The page isn't satisfying the search — which can weaken its ranking over time",
              "Nothing — Google only reads the page text, not behavior",
            ],
            correctIndex: 1,
            explanation:
              "Instant abandonment en masse is a dissatisfaction signal. Google's job is showing results searchers are happy with — pages that consistently send people bouncing back struggle to hold rankings.",
          },
        },
        {
          html: `<h3>The 5-second test</h3><p>Every page must answer three questions within five seconds of loading:</p><ul><li><strong>Where am I?</strong> — clear headline matching what they searched</li><li><strong>Is this what I wanted?</strong> — the answer (or product) visible without scrolling</li><li><strong>What do I do next?</strong> — one obvious action: read on, book, call, buy</li></ul><div class="discovery"><p>💡 <strong>Formatting IS user experience</strong></p><p>The same content, reformatted, can halve abandonment: short paragraphs, descriptive headings every few hundred words, bullet lists for anything list-like, bold for the key phrases skimmers need. AI prompt: <em>"Reformat this page for skimmability without changing the substance."</em> Two minutes, real impact.</p></div>`,
          question: {
            text: "A page has great information but visitors leave quickly. It's one giant block of text. What's the highest-impact fix?",
            options: [
              "Write completely new information",
              "Reformat: short paragraphs, clear headings, bullets — make the same value skimmable",
              "Add an auto-playing video to grab attention",
            ],
            correctIndex: 1,
            explanation:
              "People skim before they commit to reading. A wall of text fails the skim test regardless of quality — reformatting the same substance for scannability is the fastest UX win there is.",
          },
        },
        {
          html: `<p>UX detective work with Nova — find why they leave.</p>`,
          chat: [
            {
              bot: "Nova here 🕵️ Let's diagnose some real page problems. Detective mode on.",
            },
            {
              bot: "A recipe site buries the actual recipe under 900 words of life story. Visitors keep leaving before reaching it.",
              ask: "What's the fix?",
              inputType: "choice",
              options: [
                "Write an even longer, more engaging life story",
                "Put the recipe (or a jump-to-recipe button) at the top — story optional below",
                "Delete the story and the personality entirely",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — serve the search first, personality second. The story can stay for those who want it, but the answer leads. That's respecting the visitor's intent.",
              hint: "What did the searcher actually come for?",
            },
            {
              bot: "Fill in the rule.",
              ask: "Every page should pass the ___-second test: where am I, is this it, what's next.",
              inputType: "fill-blank",
              template: "Every page should pass the ___-second test: where am I, is this it, what's next.",
              options: ["five", "sixty", "thirty"],
              correctIndex: 0,
              feedback:
                "Right — five seconds is roughly the patience budget of a searcher with nine other results one tap away.",
              hint: "Shorter than you'd hope.",
            },
            {
              bot: "Match each visitor complaint to the UX fix.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "\"I couldn't find the price\"", right: "Put key info above the fold" },
                { left: "\"Too much text, I gave up\"", right: "Headings + bullets + short paragraphs" },
                { left: "\"I didn't know what to click\"", right: "One clear call-to-action" },
              ],
              feedback:
                "Detective work complete — visibility, skimmability, and clarity solve most abandonment on small business sites.",
              hint: "See it, skim it, click it.",
            },
            {
              bot: "Last case: a consultant's homepage has 6 competing buttons — Newsletter! Ebook! Webinar! Call! Quiz! Podcast!",
              ask: "More options = more conversions?",
              inputType: "binary",
              options: ["Yes — options help", "No — choice overload"],
              correctIndex: 1,
              feedback:
                "Choice overload is real — six equal options often produce zero clicks. Pick the ONE action that matters most, make it unmissable, and demote the rest to the footer.",
              hint: "What happens at a restaurant with a 40-page menu?",
            },
          ],
        },
        {
          html: `<h3>Find your problem pages with data</h3><p>You don't have to guess which pages fail — free tools tell you:</p><ul><li><strong>Google Search Console:</strong> pages with high impressions but terrible click-through — your titles aren't earning the click</li><li><strong>Google Analytics:</strong> pages with high traffic but instant exits — the page fails the 5-second test</li><li><strong>The AI diagnosis:</strong> paste the numbers: <em>"This page gets 500 visits/month but 80% leave in under 10 seconds and it targets [keyword] — what are the likely causes, in order of probability?"</em></li></ul><p>Then fix ONE page a week: reformat, front-load the answer, clarify the call-to-action. <strong>Improving pages that already get traffic is the highest-ROI hour in SEO</strong> — the visitors are already arriving; you're just finally serving them well.</p>`,
          question: {
            text: "Why is fixing an existing high-traffic page often better ROI than writing a new one?",
            options: [
              "New pages are penalized by Google for six months",
              "The visitors are already arriving — converting them better pays off immediately, no waiting to rank",
              "Old pages can't be edited without losing rankings",
            ],
            correctIndex: 1,
            explanation:
              "A new page must earn rankings from zero. A page already receiving visitors just needs to serve them better — every improvement pays out instantly on traffic you already own.",
          },
        },
      ],
    },
    {
      title: "Local & Mobile SEO",
      summary:
        "Win \"near me\" searches — your Google Business Profile is the highest-ROI hour in local SEO",
      content: `<p>When someone searches "coffee near me" or "plumber [your city]", Google shows a special local pack — map, three businesses, done. For local businesses, appearing there matters more than any blog post. This lesson shows you how local rankings work and how AI helps you win them.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my local SEO manager. My business: [name, type, city/neighborhood]. (1) Write my Google Business Profile description (750 characters max): natural, specific, mentions what makes us different and the areas we serve — no keyword stuffing. (2) List every category and attribute I should select for my business type. (3) Draft warm, personal reply templates for reviews: a glowing 5-star, a mixed 3-star, and an unfair 1-star — professional, human, never defensive. (4) Give me 8 ideas for weekly Google Business Profile posts a [business type] could publish.",
        note: "If you haven't claimed your free Google Business Profile yet (google.com/business), do that first — it's the single highest-impact hour in all of local SEO.",
      },
      steps: [
        {
          html: `<h3>The local pack: SEO's most valuable real estate</h3><p>Local searches get special treatment: a map with three highlighted businesses above the normal results. Ranking there depends on three factors:</p><ul><li><strong>Relevance:</strong> how well your profile matches the search — categories, services, description</li><li><strong>Distance:</strong> how close you are to the searcher (can't change it — but you can win YOUR neighborhood)</li><li><strong>Prominence:</strong> reviews, ratings, mentions, and how complete and active your profile is</li></ul><p>The tool that controls most of this is free: your <strong>Google Business Profile</strong>. Most businesses claim it, fill in half the fields, and never touch it again — which is exactly why an actively managed profile stands out.</p>`,
          question: {
            text: "What are the three factors that decide local pack rankings?",
            options: [
              "Website age, page count, and ad spend",
              "Relevance, distance, and prominence",
              "Follower count, post frequency, and hashtags",
            ],
            correctIndex: 1,
            explanation:
              "Relevance (does your profile match the search), distance (how close you are), and prominence (reviews, activity, reputation). You control relevance and prominence completely — and they're where most competitors are lazy.",
          },
        },
        {
          html: `<h3>Reviews: the local ranking currency</h3><p>Reviews power local SEO twice — they influence rankings AND convince humans scanning the map pack. The system that works:</p><ul><li><strong>Ask consistently:</strong> the moment of delight (happy pickup, successful job) is the moment to ask — a card with a QR code, a follow-up text</li><li><strong>Reply to every review:</strong> replies signal an active, caring business to both Google and readers. AI drafts them in your voice in seconds</li><li><strong>Never fake it:</strong> purchased reviews violate Google's rules and customer trust simultaneously</li></ul><div class="discovery"><p>💡 <strong>The 1-star opportunity</strong></p><p>A calm, gracious reply to an unfair review impresses READERS more than another 5-star does. You're not writing to the angry customer — you're writing to the hundred future customers reading over their shoulder.</p></div>`,
          question: {
            text: "Who is the real audience when you reply to a negative review?",
            options: [
              "The angry customer — win the argument publicly",
              "Future customers reading the exchange — your grace under fire is what they judge",
              "Google's review moderation team",
            ],
            correctIndex: 1,
            explanation:
              "Prospects read negative reviews specifically to see how you handle problems. A calm, solution-focused reply turns your worst review into a trust asset — arguing turns it into a warning sign.",
          },
        },
        {
          html: `<p>Local SEO field training with Nova.</p>`,
          chat: [
            {
              bot: "Nova here 📍 Local SEO is won in the details. Let's drill.",
            },
            {
              bot: "Two pizza shops, same street. Shop A: claimed profile, 12 photos, 200 replied-to reviews, weekly posts. Shop B: unclaimed profile Google auto-generated.",
              ask: "Who owns \"pizza near me\"?",
              inputType: "binary",
              options: ["Shop A", "Coin flip — distance decides"],
              correctIndex: 0,
              feedback:
                "Shop A, decisively — at equal distance, prominence and relevance decide, and Shop A wins both by simply showing up. Half of local SEO is genuinely just completing your profile.",
              hint: "Distance is equal — what's left?",
            },
            {
              bot: "Match each profile action to what it signals.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Replying to every review", right: "Active, caring business" },
                { left: "Complete categories & services", right: "Relevance for more searches" },
                { left: "Fresh photos & weekly posts", right: "Open, alive, worth visiting" },
              ],
              feedback:
                "Exactly — every field you complete and every reply you post is a signal competitors are too lazy to send.",
              hint: "Care, match, activity.",
            },
            {
              bot: "Fill in the local content rule.",
              ask: "Your business name, address, and phone should be ___ everywhere online.",
              inputType: "fill-blank",
              template: "Your business name, address, and phone should be ___ everywhere online.",
              options: ["identical", "different", "hidden"],
              correctIndex: 0,
              feedback:
                "Right — consistent name/address/phone across your site, profile, and directories builds confidence in your data. Mismatches ('St.' here, 'Street' there, old number somewhere) quietly erode it.",
              hint: "Mixed signals confuse machines too.",
            },
            {
              bot: "A restaurant owner gets a scathing 1-star review she feels is unfair. She drafts: \"This customer is LYING and was rude to my staff!!\"",
              ask: "Post it?",
              inputType: "choice",
              options: [
                "Post it — defending staff publicly matters",
                "Rewrite calm and gracious: acknowledge, state your side briefly, offer to resolve offline",
                "Ignore the review entirely",
              ],
              correctIndex: 1,
              feedback:
                "Rewrite — future customers judge the reply, not the review. \"We're sorry your experience didn't match our standards — we remember this differently, and we'd welcome the chance to make it right: [contact]\" wins every reader.",
              hint: "Who's actually reading this exchange?",
            },
          ],
        },
        {
          html: `<h3>Mobile: where local actually happens</h3><p>Local searches overwhelmingly happen on phones, often mid-errand: "open now", "near me", "directions to". Your mobile checklist:</p><ul><li><strong>Tap-to-call phone number</strong> — a number they must memorize is a customer lost</li><li><strong>Hours, address, and directions</strong> visible without scrolling or hunting</li><li><strong>Location pages</strong> if you serve multiple areas — a genuine page per area, not one page stuffed with every town name</li><li><strong>Local keywords naturally placed:</strong> "[service] in [neighborhood]" in your titles and headings where it's true</li></ul><p>AI prompt worth saving: <em>"Audit this page as a mobile visitor searching '[service] near me' — what's missing for someone who wants to act right now?"</em> Local searchers are the highest-intent visitors you'll ever get — <strong>make acting on that intent effortless.</strong></p>`,
          question: {
            text: "Why are \"near me\" searchers described as the highest-intent visitors?",
            options: [
              "They're usually just browsing for fun",
              "They're often ready to visit, call, or buy right now — the search itself signals immediate need",
              "They spend the most time reading blog content",
            ],
            correctIndex: 1,
            explanation:
              "Someone searching \"plumber near me open now\" isn't researching — they're choosing. That's why local pack visibility plus a friction-free mobile page (tap-to-call, hours, directions) converts like nothing else.",
          },
        },
      ],
    },
    {
      title: "SEO Measurement & Iteration",
      summary:
        "Read your SEO numbers in plain English — and turn monthly data into next month's wins",
      content: `<p>SEO without measurement is guesswork with extra steps. The free tools — Google Search Console and Analytics — hold the answers, but bury them in dashboards. This lesson builds your monthly measurement routine: what to check, what it means, and how AI turns exported numbers into plain-English decisions.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Act as my SEO analyst. From Google Search Console, here's my data for the last 3 months: [paste or describe: top queries with clicks + impressions + average position, and top pages with clicks]. My goal: [e.g. more inquiries for X service]. Tell me in plain English: (1) Which queries are my 'almost there' opportunities — ranking positions 5–15 with high impressions but few clicks? (2) Which pages should I improve first, and what's the likely issue for each — title not earning clicks, content not deep enough, or wrong intent? (3) What ONE action this month would most likely move my goal? (4) What should I expect to see next month if it works?",
        note: "Search Console is free — connect it at search.google.com/search-console if you haven't. The 'positions 5–15' list is pure gold: pages Google already half-trusts that need one push.",
      },
      steps: [
        {
          html: `<h3>The only four numbers you need monthly</h3><p>Ignore the dashboard overwhelm — these four tell the story:</p><ul><li><strong>Impressions:</strong> how often you appeared in searches — your visibility</li><li><strong>Clicks:</strong> how many actually visited — your pull</li><li><strong>Average position:</strong> where you typically rank per query — your progress</li><li><strong>Conversions:</strong> inquiries, calls, sales from search traffic — your actual point</li></ul><p>The relationships matter more than the raw numbers: high impressions with few clicks means your titles aren't earning the click; clicks without conversions means the page (or the keyword intent) needs work. <strong>Each mismatch has a known fix.</strong></p>`,
          question: {
            text: "A page gets 10,000 impressions but only 40 clicks. What's the likely problem?",
            options: [
              "The page loads too slowly",
              "The title and description aren't earning the click — you're seen but skipped",
              "Google has penalized the page",
            ],
            correctIndex: 1,
            explanation:
              "Impressions prove visibility; missing clicks point at the search listing itself. Rewriting the title tag and meta description to be more specific and compelling is the direct fix — often the fastest win in SEO.",
          },
        },
        {
          html: `<h3>Mine the "almost there" list</h3><p>The most profitable report in Search Console: queries where you rank in <strong>positions 5–15</strong> — page one's bottom or page two's top. Google already half-trusts you for these; one focused push often moves them into the traffic zone (top 3–5 positions get the overwhelming majority of clicks).</p><p>The push, per page:</p><ul><li>Deepen the content: answer the 3–4 related questions searchers also have (check "People Also Ask")</li><li>Refresh the title to match the exact query phrasing people use</li><li>Add internal links from your stronger pages to this one</li></ul><div class="discovery"><p>💡 <strong>Improving beats creating</strong></p><p>A position-8 page pushed to position 3 can multiply its traffic — for a couple hours of work. A new page starts at position 100. Alternate months: improve, then create.</p></div>`,
          question: {
            text: "Why are queries ranking in positions 5–15 called your best opportunities?",
            options: [
              "Those positions get the most clicks already",
              "Google already half-trusts your page — a focused improvement often pushes it into the high-click top positions",
              "Positions 5–15 are immune to competition",
            ],
            correctIndex: 1,
            explanation:
              "Moving from invisible to page one is hard; moving from position 8 to position 3 is very achievable — and that's where the click volume lives. Half-won battles are the cheapest ones to finish.",
          },
        },
        {
          html: `<p>Analyst drills with Nova — read the data like a pro.</p>`,
          chat: [
            {
              bot: "Nova, data mode 📊 Four quick reads — plain English only, promise.",
            },
            {
              bot: "A florist's data: \"wedding flowers [city]\" — position 6, 2,000 impressions, 30 clicks.",
              ask: "What's the smartest move?",
              inputType: "choice",
              options: [
                "Abandon the keyword — position 6 is a failure",
                "Push it: deepen the page, sharpen the title, add internal links — it's an 'almost there' winner",
                "Start a brand new page on the same keyword",
              ],
              correctIndex: 1,
              feedback:
                "Exactly — position 6 with 2,000 impressions is a treasure map. One focused improvement session could triple those clicks. Never abandon a half-won battle.",
              hint: "Is this battle half-lost or half-won?",
            },
            {
              bot: "Match each data pattern to its diagnosis.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "High impressions, low clicks", right: "Title isn't earning the click" },
                { left: "High clicks, zero inquiries", right: "Page or intent mismatch" },
                { left: "Position 8 with high impressions", right: "'Almost there' — push it" },
              ],
              feedback:
                "That's the whole diagnostic toolkit — three patterns cover most of what monthly SEO review ever finds.",
              hint: "Seen-but-skipped, visited-but-unmoved, nearly-there.",
            },
            {
              bot: "Fill in the iteration rhythm.",
              ask: "SEO iteration: measure monthly, change one thing, then ___ next month.",
              inputType: "fill-blank",
              template: "SEO iteration: measure monthly, change one thing, then ___ next month.",
              options: ["remeasure", "restart", "relax"],
              correctIndex: 0,
              feedback:
                "Right — the loop closes when you check whether the change moved the number. That's how guessing becomes knowing.",
              hint: "How do you know if it worked?",
            },
            {
              bot: "Reality check: a business owner checks rankings every morning and panics at every wobble.",
              ask: "Healthy habit?",
              inputType: "binary",
              options: ["Healthy — stay on top of it", "Unhealthy — rankings wobble daily"],
              correctIndex: 1,
              feedback:
                "Unhealthy — daily fluctuation is noise, not signal. SEO moves in months. A monthly review catches every real trend and costs 30 minutes instead of 30 daily panics.",
              hint: "Is day-to-day movement signal or noise?",
            },
          ],
        },
        {
          html: `<h3>Your monthly 30-minute SEO review</h3><p>The complete ritual, first Monday of each month:</p><ul><li><strong>Minute 0–10:</strong> Search Console — top queries and pages, clicks vs. impressions, find the positions 5–15 list</li><li><strong>Minute 10–20:</strong> paste it into AI — "what's working, what's the ONE priority, what should I expect next month?"</li><li><strong>Minute 20–30:</strong> schedule the action: one page to improve OR one new piece from your content plan — never five things, one thing</li></ul><p>Write down each month's action and prediction. Next month, check: did it work? <strong>Twelve measured experiments a year will outperform any amount of unmeasured effort</strong> — and you'll actually know WHY your traffic grows. One lesson left: assembling everything into a system that runs itself.</p>`,
          question: {
            text: "Why write down your predicted outcome before making each month's SEO change?",
            options: [
              "Google rewards documented SEO strategies",
              "Comparing prediction to result is what turns each month into real learning — you discover what actually works for YOUR site",
              "It's required for Search Console access",
            ],
            correctIndex: 1,
            explanation:
              "A change without a prediction is just activity. Predict, act, compare — twelve times a year. That loop builds something priceless: evidence-based knowledge of what moves YOUR rankings, not generic advice.",
          },
        },
      ],
    },
    {
      title: "SEO as a Scalable System",
      summary:
        "Everything assembled: your weekly SEO routine, powered by AI, that compounds for years",
      content: `<p>You now hold every piece: intent, keywords, content, on-page craft, technical health, authority, UX, local, and measurement. This final lesson assembles them into a lightweight system — a few hours a week that compound into rankings competitors can't easily take back. SEO stops being a project and becomes a habit.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build my complete SEO operating system. My business: [describe]. My keyword shortlist: [paste]. My content plan status: [where you are]. My realistic time: [e.g. 3 hours/week]. Create: (1) a weekly routine (what happens every week, with time estimates and the exact AI prompt for each task), (2) a monthly routine (measurement review, one improvement, planning), (3) a quarterly routine (technical check, strategy review, cluster planning), (4) my '90-day sprint' — what to do in the next 12 weeks specifically, in order, so the system is fully running by the end. Keep every week inside my time budget.",
        note: "Put the weekly routine in your actual calendar as a recurring block. SEO done in a scheduled 90-minute block every week will quietly outperform every competitor doing it 'when they find time'.",
      },
      steps: [
        {
          html: `<h3>Why systems beat sprints in SEO</h3><p>SEO rewards consistency with compounding returns:</p><ul><li><strong>Content compounds:</strong> every published piece keeps earning traffic — a 2-year-old article can be your top performer</li><li><strong>Authority compounds:</strong> links and reviews accumulate into a moat</li><li><strong>Knowledge compounds:</strong> every monthly measurement makes the next month's decisions sharper</li></ul><p>This is why a sustainable 3-hour weekly system beats a heroic 40-hour month followed by abandonment. <strong>The competitor who shows up every week for a year becomes nearly impossible to displace</strong> — and AI is what makes weekly showing-up affordable for a busy owner.</p>`,
          question: {
            text: "Why does a modest weekly SEO routine beat occasional intense sprints?",
            options: [
              "Google timestamps effort and rewards regularity directly",
              "SEO's returns compound — consistent content, authority, and learning accumulate into a lead that sprints can't match",
              "Sprints violate search engine guidelines",
            ],
            correctIndex: 1,
            explanation:
              "Every week of the system adds pages that keep earning, links that keep voting, and lessons that keep sharpening. Compounding favors the consistent — the math is simply on the side of showing up.",
          },
        },
        {
          html: `<h3>The weekly, monthly, quarterly rhythm</h3><ul><li><strong>Weekly (~2–3 hours):</strong> one content action (draft, improve, or publish — AI-assisted), one authority action (an outreach email, review replies, a profile post), ten minutes noting new customer questions for the content list</li><li><strong>Monthly (30 min):</strong> the measurement review from last lesson — data into AI, one priority out, prediction written down</li><li><strong>Quarterly (1 hour):</strong> technical check (PageSpeed, Search Console indexing, phone test), strategy review — which cluster next, what to stop doing</li></ul><div class="discovery"><p>💡 <strong>The prompt library</strong></p><p>By now you've collected a working prompt for every task: keyword research, outlines, drafting, UX audits, review replies, data analysis. Save them in one document — your personal SEO toolkit. Each reuse gets faster and better as you refine them.</p></div>`,
          question: {
            text: "What belongs in the WEEKLY routine (vs. monthly or quarterly)?",
            options: [
              "Full technical audit and strategy overhaul",
              "One content action and one authority action — the compounding work",
              "Deep measurement analysis of all historical data",
            ],
            correctIndex: 1,
            explanation:
              "Weekly is for the compounding engines: content and authority. Measurement is monthly (trends need time), technical checks are quarterly (they're pass/fail). Right task, right rhythm — that's what makes it sustainable.",
          },
        },
        {
          html: `<p>Final systems check with Nova — then the flag is yours 🏁</p>`,
          chat: [
            {
              bot: "Nova, one last time 🏆 Let's prove the whole system is in your head. Full course review!",
            },
            {
              bot: "First: rebuild the master workflow. Tap in order.",
              ask: "Arrange the SEO system loop:",
              inputType: "arrange",
              words: ["Research", "keywords", "create", "content", "build", "authority", "measure", "improve", "repeat"],
              feedback:
                "That's the flywheel — and 'repeat' is the word that makes it unstoppable. Each loop spins faster than the last.",
              hint: "It ends with the word that makes it compound.",
            },
            {
              bot: "Match each course lesson to its one-line essence.",
              ask: "Connect the pairs:",
              inputType: "match",
              pairs: [
                { left: "Search intent", right: "Match the page to the WHY behind the search" },
                { left: "Long-tail keywords", right: "Pick fights you can win" },
                { left: "Positions 5–15 report", right: "Finish half-won battles first" },
                { left: "Google Business Profile", right: "The free hour that wins 'near me'" },
              ],
              feedback:
                "Perfect recall — that's four of the highest-leverage ideas in all of SEO, and they're yours now.",
              hint: "Why → what → where to push → where locals look.",
            },
            {
              bot: "Fill in the course's deepest truth.",
              ask: "In SEO, returns ___ — the consistent competitor becomes impossible to displace.",
              inputType: "fill-blank",
              template: "In SEO, returns ___ — the consistent competitor becomes impossible to displace.",
              options: ["compound", "expire", "plateau"],
              correctIndex: 0,
              feedback:
                "Compound — content keeps earning, links keep voting, knowledge keeps sharpening. Time is your ally now.",
              hint: "It's what interest does.",
            },
            {
              bot: "Final scenario: it's week 6. Rankings haven't visibly moved yet. The owner wonders if it's all pointless.",
              ask: "What do you tell them?",
              inputType: "choice",
              options: [
                "It failed — six weeks is a fair test, stop now",
                "Normal — SEO moves in months; check leading indicators (impressions, positions creeping up) and keep the routine running",
                "Restart from scratch with entirely new keywords",
              ],
              correctIndex: 1,
              feedback:
                "Exactly right — impressions and average position improve before clicks do; clicks improve before conversions. The system IS working during the quiet weeks. That patience is what separates the winners. Course complete — go run your system! 🎉",
              hint: "What do the leading indicators say before rankings show it?",
            },
          ],
        },
        {
          html: `<h3>Your 90-day launch sequence</h3><p>The whole course, sequenced into action:</p><ul><li><strong>Weeks 1–2, Foundations:</strong> Search Console + Analytics connected, Google Business Profile completed, technical pass (compress those images), keyword shortlist finalized with AI</li><li><strong>Weeks 3–6, Engine on:</strong> first cluster planned, weekly routine begins — publish or improve one piece per week, one authority action per week</li><li><strong>Weeks 7–10, First data:</strong> first monthly reviews, mine the positions 5–15 report, push your two best 'almost there' pages</li><li><strong>Weeks 11–12, System locked:</strong> quarterly check, prompt library organized, next quarter planned — the routine now runs on rails</li></ul><p>Remember where you started: competitors were winning searches for things YOU do better. Now you have what they likely don't — <strong>a system, a toolkit of prompts, and the patience of someone who knows compounding math.</strong> Generate your 90-day plan today and put week one in the calendar.</p>`,
          question: {
            text: "What's the single most important action after finishing this course?",
            options: [
              "Study three more SEO courses before touching anything",
              "Generate your 90-day plan with AI and put the first weekly block in your actual calendar",
              "Wait for the perfect website redesign before starting SEO",
            ],
            correctIndex: 1,
            explanation:
              "Compounding only starts when you do. The plan takes ten minutes to generate, week one is a calendar block away — and a year from now, the version of your site that started today will be very hard to catch.",
          },
        },
      ],
    },
  ],
};
