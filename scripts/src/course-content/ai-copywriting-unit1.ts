import type { UnitSeed } from "./types";

export const AI_COPYWRITING_UNIT_1: UnitSeed = {
  title: "Copywriting Foundations",
  lessons: [
    {
      title: "AI Copywriting Foundation",
      summary: "Understand what copy actually does, where AI fits, and why the human strategist still wins",
      content: `<p>Copywriting is words that make people act — click, sign up, buy. AI can now produce endless words. This lesson shows you the difference between words and copy, and why that difference is your career opportunity.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to see the difference between generic AI writing and directed AI copywriting. First: 'Write a paragraph promoting a fitness app.' Then, after it answers, send this: 'Now rewrite it for a specific reader: a busy parent who has tried and quit three fitness apps, skeptical of hype, has 20 minutes a day max. The single action we want: start a free 7-day trial. Lead with their frustration, keep it under 80 words, end with one clear call to action.' Compare the two outputs side by side.",
        note: "That before/after gap — generic vs. directed — is the entire skill of AI copywriting in one exercise.",
      },
      steps: [
        {
          html: `<h3>Copy is not content</h3><p>Words that inform are <em>content</em>. Words that move someone to act are <em>copy</em>. The distinction matters because AI produces the first effortlessly — and the second only when a human directs it.</p><p>Every piece of real copy has three ingredients:</p><ul><li><strong>A specific reader:</strong> not "everyone" — one person with a real frustration or desire</li><li><strong>A single action:</strong> click, subscribe, buy, reply — one, not five</li><li><strong>A reason to act now:</strong> the benefit, made vivid and believable</li></ul><p>When AI copy falls flat, it's almost never the sentences — it's that nobody decided the reader, the action, and the reason before prompting.</p>`,
          question: {
            text: "What separates copy from ordinary content?",
            options: [
              "Copy is shorter and uses more exclamation points",
              "Copy is engineered to move a specific reader toward one action",
              "Copy is written by professionals; content is written by AI",
            ],
            correctIndex: 1,
            explanation:
              "Copy has a job: one reader, one action, one compelling reason. Judging every sentence against that job is what turns writing into copywriting.",
          },
        },
        {
          html: `<h3>What AI changed — and what it didn't</h3><p>Be clear-eyed about the shift:</p><ul><li><strong>AI commoditized:</strong> producing grammatical sentences, generating variations, first drafts at any volume, adapting tone on command</li><li><strong>AI did NOT commoditize:</strong> knowing the audience, choosing the angle, judging what's persuasive versus what's noise, brand strategy, and taste</li></ul><p>This is why "AI will replace copywriters" gets it backward. AI replaced <em>typing</em>. The copywriters winning right now use AI to produce 10× the drafts while owning the strategy layer — audience insight, angles, judgment — that clients actually pay for.</p><div class="discovery"><p>💡 <strong>The director's mindset</strong></p><p>Stop thinking of AI as a writer you compete with. Think of it as a fast, tireless junior writer you direct. Directors who give sharp briefs get sharp work — from humans and machines alike.</p></div>`,
          question: {
            text: "In the AI era, where does a copywriter's irreplaceable value concentrate?",
            options: [
              "Typing speed and vocabulary size",
              "Audience insight, choosing angles, and the judgment to know what persuades",
              "Access to premium AI subscriptions",
            ],
            correctIndex: 1,
            explanation:
              "AI made drafting cheap. Strategy — knowing the reader, picking the angle, judging the output — became the scarce, valuable layer. That's the layer this course trains.",
          },
        },
        {
          html: `<h3>The workflow you'll master</h3><p>Every lesson ahead runs on the same five-step loop — learn it once, apply it everywhere:</p><ul><li><strong>1. Research:</strong> who's the reader, what do they want, what words do they use? (AI accelerates this)</li><li><strong>2. Brief:</strong> reader, action, angle, tone — written down before any drafting</li><li><strong>3. Draft:</strong> AI generates multiple versions from your brief — never just one</li><li><strong>4. Edit:</strong> you cut, sharpen, and fact-check; AI polishes on your instruction</li><li><strong>5. Test:</strong> variants go head-to-head in the real world; results feed the next brief</li></ul><p>Notice where the human sits: steps 1, 2, 4, and 5 are judgment-heavy — AI owns the middle. That's the shape of professional AI copywriting, and by the end of this course it will be muscle memory.</p>`,
          question: {
            text: "In the five-step AI copywriting loop, which step belongs mostly to AI?",
            options: [
              "Writing the brief that defines reader, action, and angle",
              "Drafting multiple versions fast from your brief",
              "Judging which version is persuasive enough to ship",
            ],
            correctIndex: 1,
            explanation:
              "AI dominates the drafting middle — volume and speed. Research framing, the brief, the edit, and the ship/kill decision stay with you: that's where persuasion is engineered.",
          },
        },
      ],
    },
    {
      title: "Copywriter's Toolkit and Prompting",
      summary: "Build your prompting system: briefs, voice profiles, and the iteration moves that get great copy from AI",
      content: `<p>The difference between mediocre and magnetic AI copy is the prompt — or more precisely, the brief behind it. This lesson gives you the reusable prompting toolkit professionals run every day.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me build my reusable Copy Brief template. Create a fill-in-the-blank brief with these fields: PRODUCT (what it is, one sentence), READER (who exactly, their situation and frustration), ACTION (the one thing we want them to do), ANGLE (the main persuasive idea), TONE (3 adjectives), MUST INCLUDE (facts, offer, deadline), MUST AVOID (claims we can't make, clichés I hate). Then show me the template filled in with an example for [your product or any product you know well], and generate 3 short pieces of copy from that completed brief so I can see the system working.",
        note: "Save the empty template. From now on, every copy project starts by filling it in — 5 minutes of brief saves 5 rounds of bad drafts.",
      },
      steps: [
        {
          html: `<h3>The brief is the prompt</h3><p>Amateurs prompt: <em>"Write copy for my product."</em> Professionals feed AI a brief:</p><ul><li><strong>Product:</strong> what it is and the one thing that makes it different</li><li><strong>Reader:</strong> who exactly — their situation, frustration, and desire</li><li><strong>Action:</strong> the single thing this copy must make them do</li><li><strong>Angle:</strong> the persuasive idea (save time? status? fear of missing out? proof?)</li><li><strong>Tone:</strong> three adjectives — "warm, direct, lightly funny"</li><li><strong>Constraints:</strong> word count, must-include facts, banned claims and clichés</li></ul><p>Same AI, same product — the briefed prompt produces copy that sounds like it cost money. Build the template once, fill it in per project, and your floor quality jumps permanently.</p>`,
          question: {
            text: "Why does a structured brief transform AI copy quality?",
            options: [
              "Longer prompts always produce longer, better copy",
              "The brief forces the strategic decisions — reader, action, angle — that AI can't make for you",
              "AI models charge less for structured input",
            ],
            correctIndex: 1,
            explanation:
              "Vague prompts outsource strategy to a machine that doesn't know your reader. The brief locks in the human decisions first, so AI's drafting power aims at the right target.",
          },
        },
        {
          html: `<h3>Voice profiles: sounding like the brand</h3><p>Generic AI voice is instantly recognizable — and instantly forgettable. The fix is a <strong>voice profile</strong> you attach to every prompt:</p><ul><li><strong>Build it from samples:</strong> paste 2-3 pieces of the brand's best existing copy and ask AI to "describe this voice: rhythm, vocabulary, sentence length, personality, what it never does"</li><li><strong>Save the description</strong> — that paragraph IS the voice profile</li><li><strong>Prepend it forever:</strong> "Write in this voice: [profile]" turns any draft on-brand from the first try</li></ul><div class="discovery"><p>💡 <strong>The banned list</strong></p><p>Every voice profile needs a "never" section: "Never say unleash, elevate, game-changer, unlock, or seamless. No rhetorical questions. No 'In today's fast-paced world.'" Banning AI's favorite clichés is half the battle against generic copy.</p></div>`,
          question: {
            text: "What's the fastest way to make AI write in a specific brand voice?",
            options: [
              "Ask it to 'sound professional but friendly' and hope",
              "Build a voice profile from real brand copy samples and prepend it to every prompt",
              "Manually rewrite every AI draft from scratch",
            ],
            correctIndex: 1,
            explanation:
              "AI mirrors what you show it. A voice profile distilled from real samples — including the banned-words list — makes drafts start on-brand instead of needing rescue.",
          },
        },
        {
          html: `<h3>The iteration moves</h3><p>First drafts are raw material. Professionals run a standard set of iteration moves:</p><ul><li><strong>Variations:</strong> "Give me 10 versions of this headline — 3 benefit-led, 3 curiosity-led, 2 with numbers, 2 addressing the objection"</li><li><strong>The dial:</strong> "Make it 20% more casual" / "cut it by half without losing the offer" / "more specific, less hype"</li><li><strong>The critique flip:</strong> "Act as a skeptical reader who's seen a hundred ads today. Why would you scroll past this? Now rewrite to fix that"</li><li><strong>The extraction:</strong> "Version 3's opening + version 7's ending — combine and smooth"</li></ul><p>Ten variations cost ten seconds. The skill is directing the iteration — knowing which dial to turn — and that's exactly what the rest of this course drills.</p>`,
          question: {
            text: "AI's first headline draft is mediocre. What's the professional move?",
            options: [
              "Accept it — first drafts are what AI does",
              "Give up and write it manually",
              "Direct iteration: demand 10 angled variations, turn the tone dials, run the skeptic critique, combine the best parts",
            ],
            correctIndex: 2,
            explanation:
              "AI's superpower is cheap iteration — but only if you direct it. Variations, dials, critique flips, and recombination turn a mediocre draft into shippable copy in minutes.",
          },
        },
      ],
    },
    {
      title: "Research and Audience",
      summary: "Mine reviews, forums, and interviews with AI to find the exact words that make your audience buy",
      content: `<p>Great copy is assembled from the audience's own words — their frustrations, desires, and objections, phrased the way they phrase them. AI turns days of that research into an afternoon.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm researching the audience for [product/service]. Here are real customer reviews and comments I collected from [Amazon/G2/Reddit/App Store — paste 15-30 of them]. Analyze them: (1) the top 5 pain points in the customers' own words — quote them exactly, (2) the top 5 desired outcomes, quoted, (3) recurring objections or hesitations before buying, (4) surprising word choices or metaphors customers use that marketing language misses, (5) a 'voice of customer' bank: 10 quoted phrases I should consider using in copy almost verbatim.",
        note: "The quoted phrases are gold — copy that echoes the customer's exact words reads as 'they get me' instead of 'they're selling me.'",
      },
      steps: [
        {
          html: `<h3>Copy is research wearing nice clothes</h3><p>The most persuasive line in your copy has probably already been written — by a customer, in a review, complaining or raving. Legendary copywriters have always known this: <strong>you don't write copy, you assemble it from the audience's own language</strong>.</p><p>Where that language lives:</p><ul><li><strong>Reviews</strong> of your product and competitors' (the 3-star reviews are the richest — honest pros AND cons)</li><li><strong>Forums and communities</strong> where your audience complains freely</li><li><strong>Support tickets and sales call notes</strong> — objections in the wild</li><li><strong>Social comments</strong> under competitor ads</li></ul><p>The old bottleneck: reading a thousand reviews takes days. AI reads them in seconds — your job is collecting the raw material and directing the analysis.</p>`,
          question: {
            text: "Why do experienced copywriters mine customer reviews before writing a word?",
            options: [
              "To count the star ratings for the testimonial section",
              "Because the audience's own phrases for pains and desires are the most persuasive raw material copy can use",
              "To report fake reviews to the platform",
            ],
            correctIndex: 1,
            explanation:
              "Copy that mirrors the reader's inner monologue — in their exact words — creates the 'they get me' effect that no clever invented slogan matches.",
          },
        },
        {
          html: `<h3>The AI research pipeline</h3><p>Turn raw voice-of-customer data into a copy-ready asset:</p><ul><li><strong>Collect:</strong> paste 20-50 reviews/comments into AI (more is better, messy is fine)</li><li><strong>Extract:</strong> pains, desires, objections, and surprising phrasings — <em>all quoted, not paraphrased</em></li><li><strong>Rank:</strong> "Which pain appears most often? Which desire has the most emotional charge?"</li><li><strong>Bank it:</strong> save the output as your <strong>message bank</strong> — every future brief for this audience draws from it</li></ul><div class="discovery"><p>💡 <strong>Quote, don't paraphrase</strong></p><p>Always instruct AI to quote exactly. Paraphrasing sands off the texture: "I was drowning in spreadsheets" becomes "users found manual tracking inefficient" — and the persuasive power dies in the translation.</p></div>`,
          question: {
            text: "When AI analyzes customer reviews, why demand exact quotes instead of summaries?",
            options: [
              "Quotes are legally required in all advertising",
              "Paraphrasing flattens the vivid, emotional phrasing that makes copy feel human and true",
              "Summaries take longer for AI to generate",
            ],
            correctIndex: 1,
            explanation:
              "'Drowning in spreadsheets' persuades; 'inefficient manual processes' doesn't. The customer's raw texture is the asset — protect it from being summarized away.",
          },
        },
        {
          html: `<h3>From research to reader profile</h3><p>Finish the research phase by building the one-page <strong>reader profile</strong> that powers every brief:</p><ul><li><strong>The moment:</strong> what's happening in their life when they hit your copy? (Overwhelmed at work? Comparing three tools at midnight?)</li><li><strong>Stage of awareness:</strong> do they know the problem? Know solutions exist? Comparing options? This decides your entire angle — you don't pitch features to someone who doesn't know they have the problem yet</li><li><strong>The one belief:</strong> what single thing must they believe for the sale to happen? All copy bends toward installing that belief</li></ul><p>Ask AI to draft this profile from your message bank, then correct it with what you know. Fifteen minutes — and suddenly every headline, email, and ad you brief has a real person behind it.</p>`,
          question: {
            text: "Why does the reader's 'stage of awareness' change everything about the copy?",
            options: [
              "It determines which font size to use",
              "Someone who doesn't know they have the problem needs a completely different angle than someone comparing solutions",
              "Awareness only matters for luxury products",
            ],
            correctIndex: 1,
            explanation:
              "Pitching features to a problem-unaware reader is invisible; educating a comparison-stage reader wastes their time. Matching angle to awareness is the strategist's core move.",
          },
        },
      ],
    },
    {
      title: "Persuasive Frameworks and Clear Copy",
      summary: "Master AIDA, PAS, and the clarity rules — the persuasion structures that make AI drafts convert",
      content: `<p>Persuasion has structure — patterns refined over a century of advertising. Give AI a framework and a brief, and drafts stop rambling and start converting. This lesson installs the classics.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Using this brief — product: [describe], reader: [describe], action: [the one action] — write the same short piece of copy (under 120 words) three times: (1) with PAS (Problem, Agitate, Solution), (2) with AIDA (Attention, Interest, Desire, Action), (3) with BAB (Before, After, Bridge). Label each. Then tell me which framework fits this product and reader best, and why. Finally, take the strongest version and cut it by 30% without losing persuasive power.",
        note: "Watching the same message through three frameworks teaches you more about structure than a textbook — and the 30% cut teaches you about editing.",
      },
      steps: [
        {
          html: `<h3>The big three frameworks</h3><p>Frameworks are persuasion skeletons — proven orders in which to say things:</p><ul><li><strong>PAS — Problem, Agitate, Solution:</strong> name their pain, twist it (what it costs them daily), then present the way out. The workhorse for emails and ads</li><li><strong>AIDA — Attention, Interest, Desire, Action:</strong> hook them, hold them with relevance, build want with benefits and proof, tell them exactly what to do. The classic for landing pages</li><li><strong>BAB — Before, After, Bridge:</strong> paint life now, paint life after, position your product as the bridge. Perfect for transformations</li></ul><p>In prompts, frameworks are magic words: "Write this as PAS" instantly gives AI's draft a persuasive spine instead of a feature list.</p>`,
          question: {
            text: "What does naming a framework (like PAS) in your prompt actually do?",
            options: [
              "It makes the AI write faster",
              "It gives the draft a proven persuasive structure instead of a rambling feature list",
              "It's required by advertising law",
            ],
            correctIndex: 1,
            explanation:
              "Frameworks encode a century of tested persuasion order. 'Write as PAS' turns AI from a sentence generator into a structured persuader in three letters.",
          },
        },
        {
          html: `<h3>Benefits, proof, and the 'so what' chain</h3><p>Two upgrades that separate converting copy from pretty copy:</p><ul><li><strong>The 'so what' chain:</strong> features are facts; benefits are outcomes. Run every feature through "so what?" until you hit the reader's life: <em>256-bit encryption → so what? → your data can't be stolen → so what? → you sleep at night.</em> Ask AI to run the chain on your whole feature list</li><li><strong>Proof beats promises:</strong> every claim needs backup — a number, a testimonial, a demo, a guarantee. Ask AI: "List every claim in this draft, and tell me which ones lack proof"</li></ul><div class="discovery"><p>💡 <strong>Specificity sells</strong></p><p>"Loved by thousands" is wallpaper. "4,217 dentists switched last year" stops the scroll. Push AI for specifics — and supply the real numbers, because AI will invent them if you let it. Never ship an unverified statistic.</p></div>`,
          question: {
            text: "AI's draft claims \"trusted by thousands of happy customers.\" What's the professional fix?",
            options: [
              "Ship it — vague social proof is standard practice",
              "Replace it with a real, specific, verified number — or cut the claim entirely",
              "Change it to \"millions\" for more impact",
            ],
            correctIndex: 1,
            explanation:
              "Specific and true beats vague — and invented numbers are a liability. Every statistic in shipped copy is either verified by you or deleted.",
          },
        },
        {
          html: `<h3>Clarity is the conversion multiplier</h3><p>The most underrated persuasion technique: being effortless to read. The rules:</p><ul><li><strong>One idea per sentence.</strong> Short sentences. Like this</li><li><strong>Reader words, not brand words:</strong> "you" appears 2-3× more than "we" in strong copy</li><li><strong>Concrete beats abstract:</strong> "reply to every lead in 4 minutes" not "optimize response efficiency"</li><li><strong>The grade-level test:</strong> ask AI to "rewrite at a 6th-grade reading level without dumbing down the ideas" — clarity, not condescension</li></ul><p>Your editing prompt for every draft: <em>"Cut every unnecessary word. Break long sentences. Replace abstractions with concrete specifics. Make 'you' the subject wherever possible."</em> Run it, compare, learn from the diff — that's how AI edits you into a sharper writer.</p>`,
          question: {
            text: "Why does simplifying copy to a lower reading level usually increase conversions?",
            options: [
              "It doesn't — sophisticated buyers demand sophisticated prose",
              "Effortless reading keeps momentum toward the action; friction and confusion kill sales",
              "Search engines only index simple words",
            ],
            correctIndex: 1,
            explanation:
              "Every ounce of reading effort is a chance to leave. Clear, concrete, 'you'-centered copy keeps the reader moving — smart people prefer easy reading too.",
          },
        },
      ],
    },
    {
      title: "Editing & Iteration With AI",
      summary: "Turn AI drafts into shippable copy: the edit pass, the variant test, and the feedback loop",
      content: `<p>Drafting is 30% of the job — the money is in the edit and the test. This lesson builds your quality-control system: the edit checklist, head-to-head variants, and the feedback loop that makes every next draft better.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Here's a piece of copy I'm working on: [paste any draft — yours or AI's]. Run my full edit protocol: (1) CUT — remove every word that doesn't earn its place; show me the tightened version, (2) CLAIMS — list every factual claim and flag which need verification or proof, (3) CLICHÉ SCAN — find generic AI-isms and marketing clichés; suggest specific replacements, (4) SKEPTIC READ — as a distracted, skeptical reader, tell me where you'd stop reading and why, (5) FINAL — give me the revised version plus two alternative openings to test against it.",
        note: "Save this as your standard edit protocol. Every draft — human or AI — goes through it before anyone else sees it.",
      },
      steps: [
        {
          html: `<h3>The edit pass: where copy gets good</h3><p>Professional secret: nobody ships first drafts — they ship fifth drafts that took ten minutes because AI ran the edits. The standard passes:</p><ul><li><strong>The cut pass:</strong> "Remove every word that doesn't earn its place" — expect 20-30% to vanish and the copy to get stronger</li><li><strong>The cliché pass:</strong> hunt the AI-isms — "unlock," "elevate," "game-changer," "in today's world" — and replace with specifics</li><li><strong>The claims pass:</strong> every fact, number, and promise flagged and verified by you — this one is non-negotiable and non-delegable</li><li><strong>The read-aloud test:</strong> paste the draft and ask "where does the rhythm stumble?" — or actually read it aloud yourself</li></ul>`,
          question: {
            text: "Which edit pass can never be delegated to AI?",
            options: [
              "The cut pass — trimming unnecessary words",
              "The claims pass — verifying every fact, number, and promise is true",
              "The rhythm check — finding awkward sentences",
            ],
            correctIndex: 1,
            explanation:
              "AI can trim and polish, but it can't know what's true about your product and offer — and it will confidently repeat or invent false claims. Verification is yours alone.",
          },
        },
        {
          html: `<h3>Variants and the head-to-head test</h3><p>You never know which copy wins — you find out. The testing habit:</p><ul><li><strong>Always ship with a challenger:</strong> two subject lines, two headlines, two openings — real audiences decide, not opinions</li><li><strong>Test one variable:</strong> if version B changes the headline AND the offer AND the length, the result teaches nothing. Change one thing</li><li><strong>Let AI build the matrix:</strong> "Here's the control. Give me 5 challengers: one changes the emotional angle, one the specificity, one the length, one the CTA, one the opening hook"</li></ul><div class="discovery"><p>💡 <strong>Losing copy is data</strong></p><p>A losing variant isn't failure — it's a fact about your audience you didn't have yesterday. "Curiosity beat urgency with this list" is worth more than any guru's swipe file.</p></div>`,
          question: {
            text: "Why should A/B test variants differ by only one variable?",
            options: [
              "Testing platforms charge per changed word",
              "If multiple things change, you can't know what caused the win — the test teaches nothing reusable",
              "Audiences get confused by very different versions",
            ],
            correctIndex: 1,
            explanation:
              "The point of testing is learning what moves YOUR audience. One variable per test turns each result into a reusable insight instead of a coin flip.",
          },
        },
        {
          html: `<h3>The feedback loop: your compounding advantage</h3><p>The final piece separates dabblers from professionals — <strong>results feed the system</strong>:</p><ul><li><strong>Keep a results log:</strong> winning subject lines, losing hooks, open rates, click rates — a simple doc</li><li><strong>Feed it back:</strong> "Here are my last 10 winning headlines and 10 losers for this audience. What patterns do you see? Apply them to this new draft"</li><li><strong>Update the brief:</strong> every insight ("this list responds to numbers, not questions") goes into your brief template and message bank</li></ul><p>This closes the loop you learned in lesson one: research → brief → draft → edit → test → <em>and the test results improve the next brief</em>. Foundations complete — next unit, you apply the system to every major copy format, from SEO headlines to full sales pages.</p>`,
          question: {
            text: "What turns AI copywriting from a series of one-off drafts into a compounding system?",
            options: [
              "Buying a faster AI model every year",
              "Logging real results and feeding the winning/losing patterns back into future briefs",
              "Writing more drafts per day",
            ],
            correctIndex: 1,
            explanation:
              "The feedback loop is the moat: every test teaches AI (and you) what YOUR audience responds to — an asset no competitor can copy-paste.",
          },
        },
      ],
    },
  ],
};
