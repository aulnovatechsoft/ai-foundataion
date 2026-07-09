import type { UnitSeed } from "./types";

export const PERPLEXITY_UNIT_3: UnitSeed = {
  title: "Use Cases",
  lessons: [
    {
      title: "News & Trend Analysis",
      summary: "Stay current without doom-scrolling — daily briefings, topic tracking, and separating signal from noise",
      estimatedMinutes: 14,
      content: `<p>Endless scrolling leaves you tired and no better informed. Perplexity flips that: instead of you hunting through feeds, you ask a clear question and get a cited answer you can actually trust. This lesson turns Perplexity into your calm, reliable news desk.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Build yourself a morning briefing prompt: 'Summarize the three biggest developments in [my industry] from the past week as five bullet points, each with why it matters and a source.' Run it, then refine the timeframe or bullet count until it's exactly the briefing you'd want daily.",
        note: "Once the briefing reliably gives you what you want, save it or schedule it so it's waiting for you each morning.",
      },
      steps: [
        {
          html: `<h3>From feed to answer engine</h3><p>A social feed is designed to keep you <em>there</em>. Perplexity is designed to <strong>answer you and let you leave</strong>. Ask "What are the three biggest developments in electric vehicles this week?" and you get a summarized answer with <strong>links to the sources</strong> behind each claim.</p><p>The shift is subtle but powerful: you go from passively absorbing whatever the algorithm serves to <strong>actively asking for exactly what you need</strong>.</p>`,
          question: {
            text: "You want to catch up on your industry over morning coffee in five minutes. What's the better move?",
            options: [
              "Open three social apps and scroll until something looks relevant",
              "Ask Perplexity for a summary of this week's top developments in your field, with sources",
              "Read one random article and assume it covers everything",
            ],
            correctIndex: 1,
            explanation:
              "A targeted question gives you a bounded, cited summary you can skim fast. Scrolling is open-ended by design and one article rarely covers the full picture.",
          },
        },
        {
          html: `<h3>Build a daily briefing</h3><p>Treat Perplexity like a personal news anchor. A good briefing prompt names three things: <strong>topic, timeframe, and format</strong>.</p><ul><li><strong>Topic</strong> — "commercial real estate in my city"</li><li><strong>Timeframe</strong> — "in the past week"</li><li><strong>Format</strong> — "as five bullet points, each with why it matters"</li></ul><p>The clearer the shape you ask for, the more usable the answer. Vague in, vague out.</p>`,
          question: {
            text: "Your briefing keeps coming back long and unfocused. What's the most effective fix?",
            options: [
              "Ask the exact same question again and hope for a shorter answer",
              "Add structure: specify the timeframe and ask for a set number of bullets, each with a 'why it matters' line",
              "Give up and go back to scrolling headlines",
            ],
            correctIndex: 1,
            explanation:
              "Perplexity follows the shape you request. Naming a timeframe and a fixed bullet count forces a tight, skimmable briefing instead of a wall of text.",
          },
        },
        {
          html: `<h3>Track a topic over time</h3><p>One-off questions are fine, but real trend-watching means <strong>returning to the same subject</strong>. A <strong>Space</strong> (Perplexity's organized workspace) lets you keep all your questions about one topic together, with custom instructions that shape every answer inside it.</p><p>For example, a Space for "renewable energy policy" with an instruction like "always summarize for a non-expert and flag anything that affects small businesses" means every follow-up already knows your angle.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Set a Space's custom instructions once — your role, your industry, the level of detail you want — and every question inside it inherits that context. No more re-explaining yourself each morning.</p></div>`,
          question: {
            text: "You track three separate topics for work and hate re-explaining your role every time. How should you set up Perplexity?",
            options: [
              "Ask everything in one long thread and scroll back to find things",
              "Create a Space per topic with custom instructions describing your role and the angle you care about",
              "Retype your background at the start of every single question",
            ],
            correctIndex: 1,
            explanation:
              "Spaces keep each topic organized and let custom instructions carry your context automatically, so every answer is already tailored without repetition.",
          },
        },
        {
          html: `<h3>Separate signal from noise</h3><p>Not everything trending actually matters. Perplexity can help you <strong>weigh</strong>, not just list. Try asking:</p><ul><li>"Which of these developments is most likely to affect my industry, and why?"</li><li>"Is this a one-off event or part of a larger trend?"</li><li>"What's the actual evidence here versus speculation?"</li></ul><p>Because answers are cited, you can click through and judge whether a claim rests on a solid report or a single anonymous post.</p>`,
          question: {
            text: "A dramatic headline is everywhere today. You need to know if it genuinely matters for your work. What do you ask Perplexity?",
            options: [
              "\"Is this headline true or false?\" and accept the one-word answer",
              "\"What's the evidence behind this, is it a trend or a one-off, and how could it realistically affect my industry?\"",
              "Nothing — if it's trending, it must be important",
            ],
            correctIndex: 1,
            explanation:
              "Asking for evidence, context, and real-world impact turns a scary headline into something you can actually judge. Popularity isn't the same as importance.",
          },
        },
        {
          html: `<h3>Ask for multiple perspectives</h3><p>One of the fastest ways to think clearly is to hear more than one side. Perplexity is comfortable presenting a spread of viewpoints when you ask for it.</p><ul><li>"Give me the strongest arguments <strong>for and against</strong> this policy."</li><li>"How are supporters and critics each framing this?"</li><li>"What would a skeptic say about this claim?"</li></ul><p>You stay the decision-maker — Perplexity just makes sure you're not seeing only one angle before you form a view.</p>`,
          question: {
            text: "You're forming an opinion on an industry shift before a team meeting. What request keeps you best informed?",
            options: [
              "\"Tell me why this shift is good\" — you only need the upside",
              "\"Summarize the strongest arguments both for and against this shift, with sources\"",
              "Ask only your favorite pundit's take and repeat it",
            ],
            correctIndex: 1,
            explanation:
              "Asking for both sides guards against a one-sided view and gives you cited material to reason from. Requesting only the upside builds in bias before you even start.",
          },
        },
        {
          html: `<h3>Automate it with scheduled digests</h3><p>You shouldn't have to remember to ask. Perplexity's <strong>scheduled tasks</strong> can run a question on a recurring basis — say, every weekday at 8am — and deliver a fresh answer so a briefing is waiting when you wake up.</p><p>Pair a scheduled task with a well-crafted briefing prompt and you've built a hands-off news habit: consistent, cited, and on your terms instead of the algorithm's.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Write and refine your briefing prompt manually first. Once it reliably gives you what you want, turn <em>that exact prompt</em> into a scheduled task so the quality carries over automatically.</p></div>`,
          question: {
            text: "You want a solid industry digest every workday morning without lifting a finger. What's the smart sequence?",
            options: [
              "Schedule a vague prompt immediately and hope it improves on its own",
              "Perfect the briefing prompt by hand first, then schedule that proven prompt to run each weekday",
              "Set a phone reminder to manually re-ask the question daily forever",
            ],
            correctIndex: 1,
            explanation:
              "Scheduling only helps if the underlying prompt is good. Nail the prompt manually, then automate the version that already works so quality is consistent.",
          },
        },
        {
          html: `<h3>You've built a news habit</h3><p>You can now pull a cited briefing on demand, keep topics organized in Spaces, separate signal from noise, hear multiple sides, and even automate the whole thing with scheduled digests.</p><p>But a briefing is only as trustworthy as its sources. Next lesson — <strong>Source Credibility & Verification</strong> — you'll learn to read those citations like a pro and catch weak sourcing before it misleads you.</p>`,
          question: {
            text: "Your automated digest lands each morning with tidy bullet points. What's the responsible next habit to build?",
            options: [
              "Trust every bullet completely because it came from Perplexity",
              "Skim the cited sources on anything important before you act or repeat it",
              "Delete the sources so the digest reads faster",
            ],
            correctIndex: 1,
            explanation:
              "Citations exist so you can verify. A quick check of the sources behind key claims is exactly the credibility skill the next lesson develops.",
          },
        },
      ],
    },
    {
      title: "Source Credibility & Verification",
      summary: "Read citations like a pro, spot weak sourcing, and cross-check viral claims before you trust them",
      estimatedMinutes: 14,
      content: `<p>Perplexity's superpower is that it <strong>shows its work</strong> — every answer points to sources. But a citation is only useful if you actually look at it. This lesson turns you from someone who reads answers into someone who <strong>verifies</strong> them.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Fact-check a claim before you'd repeat it. Ask Perplexity about a surprising statistic in [my field], then click each citation and run a who/when/what scan: who published it, when, and does it actually state that number? Finish by asking, 'What's the strongest counterargument to this, and what might be missing?'",
        note: "A citation shows where a claim came from, not that it's trustworthy — always open the source on anything you'll act on or share.",
      },
      steps: [
        {
          html: `<h3>Citations are an invitation, not a rubber stamp</h3><p>When Perplexity attaches numbered sources to a claim, it's saying "here's where this came from — go check." A citation proves a statement has a source; it doesn't prove the source is <strong>good</strong>.</p><p>The habit that matters: for anything you'll act on or repeat, <strong>click through</strong>. See who published it, when, and whether they actually say what the answer claims.</p>`,
          question: {
            text: "An answer cites a source for a surprising statistic you're about to put in a client email. What should you do first?",
            options: [
              "Paste the stat straight into the email — it's cited, so it's fine",
              "Click the citation to confirm the source is credible and actually states that number",
              "Remove the citation so the email looks cleaner",
            ],
            correctIndex: 1,
            explanation:
              "A citation tells you where a claim came from, not that it's trustworthy. Checking the source before sending protects you and your client from an embarrassing error.",
          },
        },
        {
          html: `<h3>Reading a citation quickly</h3><p>You don't need to study every source for an hour. A fast credibility scan asks three things:</p><ul><li><strong>Who</strong> published it — a known outlet, a company blog, an anonymous forum?</li><li><strong>When</strong> — is it current, or five years stale?</li><li><strong>What</strong> — does it actually support the exact claim, or something loosely related?</li></ul><p>Thirty seconds of who/when/what catches most weak sourcing.</p>`,
          question: {
            text: "You're checking a claim about current mortgage rates and the cited source is a well-known finance site — but from three years ago. What's the issue?",
            options: [
              "Nothing — a reputable outlet is always enough",
              "The 'when' fails: rates change constantly, so a three-year-old figure may be outdated",
              "The 'who' fails, so you should ignore the source entirely",
            ],
            correctIndex: 1,
            explanation:
              "Credibility isn't only about the publisher. For fast-moving data like rates, recency is critical — a trusted but stale source can still give you a wrong number.",
          },
        },
        {
          html: `<h3>Spotting weak sourcing</h3><p>Some sources deserve extra caution. Watch for:</p><ul><li>A single source behind a big, dramatic claim</li><li>Sources that only cite <em>each other</em> in a loop</li><li>Marketing pages presented as neutral analysis</li><li>Anonymous social posts standing in for evidence</li></ul><p>Perplexity's <strong>source filters</strong> help here — you can steer it toward <strong>academic</strong> sources for research, or note when an answer leans heavily on <strong>social/Reddit</strong> for something that needs harder evidence.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>When you need rigor, switch the focus to academic or authoritative sources before asking. When you want real-world opinion — like honest product gripes — social sources are a feature, not a flaw. Match the source type to the question.</p></div>`,
          question: {
            text: "You're researching whether a medical supplement actually works. The answer leans mostly on forum posts and a seller's blog. What's the right adjustment?",
            options: [
              "Accept it — lots of people on forums agree",
              "Re-run with an academic/authoritative source focus, since health claims need rigorous evidence",
              "Trust the seller's blog because it's detailed",
            ],
            correctIndex: 1,
            explanation:
              "Health claims demand rigorous evidence. Forums and a seller's own blog are weak and biased for this question — steering toward academic sources matches the rigor the topic requires.",
          },
        },
        {
          html: `<h3>Cross-checking a viral claim</h3><p>Something explosive is spreading online. Before you share it, use Perplexity to <strong>triangulate</strong>:</p><ul><li>"Do multiple independent, reputable outlets report this?"</li><li>"What's the original source of this claim?"</li><li>"Is there any credible source disputing it?"</li></ul><p>If the answer traces back to one anonymous post that everyone else is merely repeating, that's a red flag — lots of mentions isn't the same as lots of <strong>evidence</strong>.</p>`,
          question: {
            text: "A viral claim seems to be 'everywhere,' but Perplexity shows every mention traces back to one anonymous post. What does that tell you?",
            options: [
              "It's well-verified — look how many places mention it",
              "It's weakly sourced: many repeats of a single unverified origin isn't independent confirmation",
              "The number of mentions proves it's true",
            ],
            correctIndex: 1,
            explanation:
              "Independent confirmation means separate sources reporting it firsthand. A hundred echoes of one anonymous post is still just one unverified claim.",
          },
        },
        {
          html: `<h3>Ask Perplexity to challenge itself</h3><p>One of the most underrated verification moves is to make the tool argue against its own answer. Follow up with:</p><ul><li>"What's the strongest counterargument to what you just told me?"</li><li>"What might be wrong or missing in that answer?"</li><li>"What would a skeptic point out here?"</li></ul><p>This surfaces weak spots you'd otherwise miss and keeps you from over-trusting a confident-sounding first reply.</p>`,
          question: {
            text: "Perplexity gives you a clean, confident answer that supports a decision you already favor. What's the wise follow-up?",
            options: [
              "Nothing — a confident answer that agrees with you is ideal",
              "Ask for the strongest counterargument and what might be missing, then weigh both",
              "Ask it to make the same answer sound even more confident",
            ],
            correctIndex: 1,
            explanation:
              "Confidence isn't correctness, and an answer that flatters your existing view is exactly when to stress-test it. Asking for the counterargument guards against confirmation bias.",
          },
        },
        {
          html: `<h3>Healthy skepticism as a habit</h3><p>Verification shouldn't be exhausting — it should be <strong>proportional</strong>. Match your effort to the stakes:</p><ul><li><strong>Low stakes</strong> (trivia, casual curiosity) → a quick read is fine</li><li><strong>Medium stakes</strong> (a work summary) → skim the key sources</li><li><strong>High stakes</strong> (money, health, legal, reputation) → cross-check multiple credible sources and read them yourself</li></ul><p>The point isn't to distrust everything — it's to <strong>trust deliberately</strong>.</p>`,
          question: {
            text: "You're deciding how much to verify two answers: one about a fun weekend trivia fact, one about a $5,000 equipment purchase for your team. How should your effort compare?",
            options: [
              "Verify both equally and exhaustively",
              "Light check on the trivia; carefully cross-check the purchase across multiple credible sources",
              "Skip verification on both to save time",
            ],
            correctIndex: 1,
            explanation:
              "Verification effort should scale with stakes. A costly business decision deserves rigorous cross-checking; a trivia fact doesn't need the same scrutiny.",
          },
        },
        {
          html: `<h3>You're now a discerning researcher</h3><p>You can read citations fast, spot weak sourcing, match source types to the question, cross-check viral claims, and even make Perplexity argue against itself. That's the difference between consuming answers and <strong>verifying</strong> them.</p><p>Next up — <strong>Academic Research</strong> — you'll apply this rigor to the most demanding sources of all: real studies and papers, and how to summarize them without losing the truth.</p>`,
          question: {
            text: "Moving into serious research on published studies, which mindset carries over best from this lesson?",
            options: [
              "Studies are peer-reviewed, so citations never need checking",
              "Even strong sources deserve a who/when/what scan and cross-checking on high-stakes claims",
              "Skepticism only applies to social media, never to academic work",
            ],
            correctIndex: 1,
            explanation:
              "The verification habit scales up, not off. Academic sources are strong but still require careful reading — exactly the discipline the next lesson builds on.",
          },
        },
      ],
    },
    {
      title: "Academic Research",
      summary: "Find papers, summarize studies in plain language, and build literature overviews — with proper limits",
      estimatedMinutes: 15,
      content: `<p>Whether you're a student, or a professional upskilling for a new role, real learning often means engaging with actual research. Perplexity's academic tools make dense papers approachable — as long as you respect their limits. This lesson shows you how.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Switch the source focus to academic and research a topic you're learning about: 'Find recent peer-reviewed studies on [my topic], focusing on [the outcome I care about] in the last five years.' Then upload or link one paper and ask for a plain-language summary of its method, findings, and limitations.",
        note: "Always ask for the study's limitations too — it stops you from overstating what a single paper actually proves.",
      },
      steps: [
        {
          html: `<h3>Switch on academic focus</h3><p>By default Perplexity searches the open web. For research, switch the <strong>focus/source filter to academic</strong> so it prioritizes scholarly sources — papers, journals, and studies — over blogs and news.</p><p>This one change dramatically raises the quality of what you're working with. You're no longer sifting a marketing site's summary of a study; you're closer to the study itself.</p>`,
          question: {
            text: "You're writing an evidence-based section for a work report and need real studies, not opinion pieces. What's the first move in Perplexity?",
            options: [
              "Keep the default web focus and hope studies show up",
              "Set the source focus to academic so scholarly papers are prioritized",
              "Search social sources for what people think the studies say",
            ],
            correctIndex: 1,
            explanation:
              "Academic focus steers Perplexity toward scholarly sources, which is exactly what evidence-based work needs. The default web search mixes in far more opinion and marketing.",
          },
        },
        {
          html: `<h3>Finding the right papers</h3><p>Good academic queries are specific. Instead of "AI in education," try "peer-reviewed studies on the effect of AI tutoring tools on student test scores in the last five years."</p><p>Name your constraints:</p><ul><li><strong>Population or context</strong> — who or what was studied</li><li><strong>Outcome</strong> — what effect you care about</li><li><strong>Recency</strong> — how current it needs to be</li></ul><p>The tighter the query, the more relevant the papers Perplexity surfaces.</p>`,
          question: {
            text: "Your search 'remote work productivity' returns a messy mix of blogs and vague studies. What's the best refinement?",
            options: [
              "Repeat the same two-word search louder",
              "Specify the population, the outcome measured, and a recent timeframe in academic focus",
              "Broaden it to just 'work' to get more results",
            ],
            correctIndex: 1,
            explanation:
              "Narrowing by population, outcome, and recency surfaces relevant, rigorous studies. Broadening or repeating a vague query only increases the noise.",
          },
        },
        {
          html: `<h3>Summaries in plain language</h3><p>Academic writing is dense on purpose, but you don't have to stay stuck in it. Perplexity can translate:</p><ul><li>"Explain this study's method and findings in plain English."</li><li>"What did they actually measure, and what did they conclude?"</li><li>"Explain this like I'm smart but new to the field."</li></ul><p>You can also <strong>upload a PDF</strong> of a paper and ask Perplexity to analyze it directly — great for a study you already have in hand.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Ask for the study's <em>limitations</em> alongside its findings. Good research states what it <strong>can't</strong> conclude — and that context keeps you from overselling a single paper.</p></div>`,
          question: {
            text: "You have a PDF of a dense study and a deadline. What's the most effective way to understand it fast without misreading it?",
            options: [
              "Skim the abstract only and assume the rest agrees",
              "Upload the PDF, ask for a plain-language summary of method, findings, and limitations",
              "Ask a generic question about the topic and never open the actual paper",
            ],
            correctIndex: 1,
            explanation:
              "Uploading the actual paper keeps the summary grounded in that specific study, and asking for limitations too prevents you from overstating what it proves.",
          },
        },
        {
          html: `<h3>Building a literature overview</h3><p>Sometimes you need the <strong>landscape</strong>, not one paper. This is where <strong>Deep Research</strong> earns its keep — it runs many searches, reads across sources, and returns a structured, cited overview of what the research says on a topic.</p><p>Ask it to "review the current research on X, note where studies agree and disagree, and cite each source." You'll get a map of the field you can then dig into paper by paper.</p>`,
          question: {
            text: "You're upskilling into a new specialty and need a broad, cited picture of what the research says. Which Perplexity mode fits best?",
            options: [
              "A single quick search — one fast answer is enough for a whole field",
              "Deep Research, to gather across many sources and produce a structured, cited overview",
              "Ask on social sources what practitioners feel about it",
            ],
            correctIndex: 1,
            explanation:
              "Mapping a whole field needs breadth and structure — exactly what Deep Research provides. A single quick search can't responsibly summarize an entire body of research.",
          },
        },
        {
          html: `<h3>Citing properly</h3><p>If your work will be seen by others — a professor, a boss, a client — you must cite honestly. Perplexity helps by <strong>surfacing the original sources</strong>, but the responsibility to attribute is yours.</p><ul><li>Trace claims back to the <strong>original study</strong>, not a summary of it</li><li>Cite the paper you actually relied on, in the format your context requires</li><li>Never present Perplexity's summary as if it were your own independent reading</li></ul><p>Honest citation protects your credibility and lets others check your work.</p>`,
          question: {
            text: "A key finding in your paper came from a study Perplexity summarized. How should you cite it?",
            options: [
              "Cite 'Perplexity' as the source of the finding",
              "Trace it to the original study, read the relevant part, and cite that paper properly",
              "Don't cite anything — summaries don't need attribution",
            ],
            correctIndex: 1,
            explanation:
              "The finding belongs to the original researchers, so cite their paper — and confirm it says what you claim. Perplexity is a tool that led you there, not the source itself.",
          },
        },
        {
          html: `<h3>Know the limits</h3><p>Perplexity is a brilliant research assistant, not a replacement for your own judgment. Keep these limits in mind:</p><ul><li>Summaries can miss nuance or oversimplify caveats</li><li>A tool can misread a table, a graph, or a subtle conclusion</li><li>Some important papers sit behind paywalls it can't fully access</li></ul><p><strong>For anything that truly matters, read the key sources yourself.</strong> Use Perplexity to find, filter, and orient — then verify the load-bearing claims in the original.</p>`,
          question: {
            text: "One study is the backbone of your entire argument. How do you responsibly use Perplexity here?",
            options: [
              "Rely fully on Perplexity's summary since it's usually accurate",
              "Use Perplexity to find and orient, then read that pivotal study yourself before building on it",
              "Swap in a different study that Perplexity summarized more briefly",
            ],
            correctIndex: 1,
            explanation:
              "A load-bearing claim deserves your own eyes on the original. Summaries can miss nuance, so verify the source your whole argument rests on.",
          },
        },
        {
          html: `<h3>You can research like a scholar</h3><p>You now know how to switch on academic focus, find precise papers, get plain-language summaries with limitations, build literature overviews with Deep Research, cite honestly, and — crucially — read the key sources yourself.</p><p>All this research has to <em>go</em> somewhere. In the finale — <strong>Report Writing with Perplexity</strong> — you'll turn a messy research thread into a polished report you can hand to your boss or client with confidence.</p>`,
          question: {
            text: "Your research is done and now it needs to become a deliverable for your manager. What's the natural next step?",
            options: [
              "Send your manager the raw list of search links",
              "Shape the findings into a structured, fact-checked report — the focus of the next lesson",
              "Assume they'll read all the papers themselves",
            ],
            correctIndex: 1,
            explanation:
              "Research only creates value when it's communicated clearly. Turning findings into a structured, verified report is exactly what the finale teaches.",
          },
        },
      ],
    },
    {
      title: "Report Writing with Perplexity",
      summary: "Turn a research thread into a finished, fact-checked report ready for your boss or client",
      estimatedMinutes: 15,
      content: `<p>This is where everything comes together. You've searched, verified, and researched — now you'll turn that raw material into a clear report someone else can act on. Perplexity helps at every stage, but you stay the author and the final check.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Use Perplexity to draft a short, cited report on [a topic or decision at work]. Ask: 'Research [topic] and write a one-page brief with an executive summary, three key findings each backed by a source, and a short recommendation.' Then edit it in your own voice and verify every cited claim before sharing.",
        note: "Let Perplexity structure and source the draft, but stay the author — check each citation and rewrite the summary so it sounds like you.",
      },
      steps: [
        {
          html: `<h3>Start from your research thread</h3><p>A report shouldn't start from a blank page. It should start from the <strong>thread</strong> of questions and follow-ups you already built while researching. Everything you've asked in a Space or thread is context you can reuse.</p><p>Kick off with: "Based on everything in this thread, help me outline a report on X for my manager." You're building on real work, not starting over.</p>`,
          question: {
            text: "You spent an hour researching a vendor across a Perplexity thread. Now you need a report. What's the efficient start?",
            options: [
              "Open a brand-new blank thread and re-ask everything from scratch",
              "Ask Perplexity to outline the report based on the research thread you already built",
              "Copy random answers into a doc with no structure",
            ],
            correctIndex: 1,
            explanation:
              "Your thread already holds the context and findings. Building the outline from it saves time and keeps the report grounded in the work you actually did.",
          },
        },
        {
          html: `<h3>Outline before you write</h3><p>A strong report is decided at the outline stage. Ask Perplexity to propose a structure, then <strong>shape it to your audience</strong>:</p><ul><li>Executive summary up top for a busy boss</li><li>Sections that answer the questions your reader will actually ask</li><li>A clear recommendation, not just a data dump</li></ul><p>Iterate on the outline until it's right — reordering headings now is far cheaper than rewriting paragraphs later.</p>`,
          question: {
            text: "Your report is for a time-pressed executive who wants the bottom line fast. How should the outline reflect that?",
            options: [
              "Bury the recommendation on the last page after all the detail",
              "Lead with an executive summary and clear recommendation, then supporting detail below",
              "Skip structure entirely and write one long block of text",
            ],
            correctIndex: 1,
            explanation:
              "Busy readers need the conclusion first. Leading with a summary and recommendation respects their time; details belong below for those who want to dig in.",
          },
        },
        {
          html: `<h3>Let Deep Research do the heavy lifting</h3><p>When a section needs real depth — a market overview, a competitive landscape, a thorough background — hand it to <strong>Deep Research</strong>. It gathers across many sources and returns a structured, cited draft you can adapt.</p><p>Use it for the labor-intensive parts, then edit for voice and relevance. Deep Research gives you a strong first draft; <strong>you</strong> make it fit your reader.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Deep Research is your researcher, not your ghostwriter. Take its cited findings and rewrite the key passages in your own words — the report should sound like you and pass any originality expectations your workplace has.</p></div>`,
          question: {
            text: "Your report needs a thorough competitive landscape section, but you're short on time. What's the smart approach?",
            options: [
              "Skip the section — nobody reads those",
              "Use Deep Research to draft the cited landscape, then edit it into your voice and verify the claims",
              "Copy Deep Research's output word-for-word and submit it untouched",
            ],
            correctIndex: 1,
            explanation:
              "Deep Research handles the heavy gathering, but you should adapt and verify it. Submitting raw output untouched risks tone mismatch and unchecked claims.",
          },
        },
        {
          html: `<h3>Fact-check the draft</h3><p>Before anything leaves your hands, verify the load-bearing claims — the same discipline from earlier in this course. For each key figure or statement:</p><ul><li>Confirm the citation actually supports it</li><li>Check that data is current and quoted correctly</li><li>Ask Perplexity: "What in this draft is weakest or most likely to be challenged?"</li></ul><p>A single wrong number can undermine an otherwise excellent report — and your credibility with it.</p>`,
          question: {
            text: "Your draft looks polished, but it drives a decision worth real money. What's the responsible final review?",
            options: [
              "Ship it — polished writing means the facts are fine",
              "Verify each key claim against its source and ask Perplexity what's weakest before sending",
              "Only fix typos; the numbers can be checked later",
            ],
            correctIndex: 1,
            explanation:
              "Polish and accuracy are different things. High-stakes reports demand that every load-bearing claim be verified — a stray wrong figure can sink the whole thing.",
          },
        },
        {
          html: `<h3>Share it as a Page</h3><p>A finished report needs a home. Perplexity <strong>Pages</strong> turns your research into a clean, shareable, well-formatted document you can send with a link — no messy copy-paste into another tool required.</p><p>For richer deliverables — an interactive report or a simple dashboard — <strong>Labs</strong> can help you build outputs that go beyond a plain document. Match the format to what your reader needs: a Page for a readable report, a Labs build for something interactive.</p>`,
          question: {
            text: "Your client wants a clean, professional report they can open from a link and read easily. Which Perplexity feature fits best?",
            options: [
              "Send them the raw chat thread and let them scroll",
              "Publish it as a Page — a formatted, shareable document with a link",
              "Screenshot each answer and email the images",
            ],
            correctIndex: 1,
            explanation:
              "Pages produces a clean, shareable, formatted document — exactly what a client expects. A raw thread or screenshots look unprofessional and are hard to read.",
          },
        },
        {
          html: `<h3>Present with confidence</h3><p>When you present to your boss or client, your Perplexity work pays off twice: once in the quality of the report, and again in your <strong>readiness for questions</strong>.</p><ul><li>Because claims are cited, you can answer "where's that from?" instantly</li><li>You can pull up follow-up research live if someone probes deeper</li><li>You know the limits of your own report, so you won't overstate it</li></ul><p>That combination — clear report, traceable sources, honest limits — is what earns trust.</p>`,
          question: {
            text: "In the meeting, your boss asks, \"Where did this key number come from?\" Why are you ready?",
            options: [
              "You aren't — you never tracked the sources",
              "Your report's claims are cited, so you can show the exact source on the spot",
              "You'll just say it 'came from Perplexity' and move on",
            ],
            correctIndex: 1,
            explanation:
              "Traceable citations mean you can back up any figure instantly, which builds trust. 'It came from Perplexity' isn't a source — the underlying study or outlet is.",
          },
        },
        {
          html: `<h3>You've completed the Perplexity course 🎉</h3><p>Look how far you've come. You started by learning what an answer engine is — and now you can run cited briefings, verify sources like a skeptic, research at an academic level, and turn it all into a polished, fact-checked report you present with confidence.</p><p>The throughline of this whole course is simple: <strong>Perplexity finds and organizes; you judge and decide.</strong> Keep asking sharp questions, keep clicking the citations, and keep matching the tool — quick search, Pro Search, Deep Research, Spaces, Pages, Labs, connectors, and scheduled tasks — to the job in front of you.</p><p>You're no longer just searching. You're researching. Go put it to work. 🚀</p>`,
          question: {
            text: "One idea to carry out of this entire course — which best captures the right way to work with Perplexity?",
            options: [
              "Perplexity replaces your judgment, so accept its answers as final",
              "Perplexity finds and organizes information; you verify, judge, and decide",
              "The more you automate, the less you ever need to check anything",
            ],
            correctIndex: 1,
            explanation:
              "That partnership is the heart of the course: let Perplexity do the finding and structuring, but keep verification and decisions firmly in your hands.",
          },
        },
      ],
    },
  ],
};
