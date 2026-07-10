import type { UnitSeed } from "./types";

export const AI_COPYWRITING_UNIT_2: UnitSeed = {
  title: "Copywriting Across Formats",
  lessons: [
    {
      title: "SEO and Headlines",
      summary: "Write headlines that earn the click and copy that ranks — without sounding like a robot wrote it",
      content: `<p>The headline is 80% of the battle: most readers see nothing else. This lesson trains headline craft with AI — plus the SEO fundamentals that get your copy found in the first place.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm writing about [topic] for [audience], targeting the search phrase [keyword]. Generate 20 headlines in a labeled matrix: 4 benefit-driven, 4 curiosity-driven (no clickbait), 4 with specific numbers, 4 addressing a pain point head-on, 4 how-to formats. Rules: under 60 characters where possible, include the keyword naturally in at least 10, zero clickbait that the content can't deliver. Then pick your top 3 and explain the psychology of why each works.",
        note: "Never brainstorm headlines one at a time — the matrix approach surfaces angles you'd never reach manually, and the top-3 rationale trains your judgment.",
      },
      steps: [
        {
          html: `<h3>Headlines: the 80/20 of copy</h3><p>Old advertising wisdom, still true on every feed and search page: <strong>5× more people read the headline than the body</strong>. If the headline doesn't earn the click, the best body copy on earth converts nobody.</p><p>What working headlines share:</p><ul><li><strong>A specific promise:</strong> "Cut your close time from 45 to 30 days" beats "Improve your closing process"</li><li><strong>One clear reader:</strong> the right person should feel "that's for me" within a second</li><li><strong>Curiosity with integrity:</strong> open a loop the content actually closes — clickbait burns trust exactly once</li></ul><p>The AI advantage: generating 20 angled options costs seconds, so you're choosing from abundance instead of settling for the first idea that came to mind.</p>`,
          question: {
            text: "Why do professionals generate 20 headline options instead of perfecting one?",
            options: [
              "More headlines means more content to publish",
              "Choosing from many angles beats polishing your first idea — and AI makes the abundance free",
              "Editors require a minimum of 20 submissions",
            ],
            correctIndex: 1,
            explanation:
              "Your first instinct is rarely the best angle. A cheap matrix of benefit, curiosity, number, and pain-point options lets judgment — not luck — pick the winner.",
          },
        },
        {
          html: `<h3>SEO in the AI era</h3><p>Search copy has one master rule: <strong>match the intent, not just the keyword</strong>. Someone searching "best CRM for freelancers" wants a comparison — not your product's homepage.</p><p>The AI-assisted SEO workflow:</p><ul><li><strong>Intent check:</strong> "What is someone searching [keyword] actually trying to accomplish? What format do they expect?"</li><li><strong>Coverage outline:</strong> "Outline what a genuinely useful piece on this topic must cover — questions, objections, comparisons"</li><li><strong>Natural placement:</strong> keyword in the headline, first paragraph, and a couple of subheads — then write for humans; stuffing reads as spam to readers and increasingly to search engines too</li></ul><div class="discovery"><p>💡 <strong>Search engines reward what readers reward</strong></p><p>Modern ranking overwhelmingly favors content that satisfies the reader — depth, clarity, real answers. Writing genuinely useful copy IS the SEO strategy; the keyword mechanics are just the address on the envelope.</p></div>`,
          question: {
            text: "What's the master rule of SEO copywriting?",
            options: [
              "Repeat the keyword as many times as possible",
              "Match what the searcher is actually trying to accomplish — intent beats keyword density",
              "Longer pages always rank higher",
            ],
            correctIndex: 1,
            explanation:
              "Rankings follow reader satisfaction. Understand the intent behind the search, deliver it better than competitors, place keywords naturally — in that order.",
          },
        },
        {
          html: `<h3>The headline test kitchen</h3><p>Make headline excellence systematic:</p><ul><li><strong>The scroll test:</strong> "You're scrolling a feed at 11pm, tired. Which of these 10 headlines makes you stop? Be brutal" — AI as jaded reader is surprisingly honest</li><li><strong>The promise audit:</strong> "Does the content fully deliver what this headline promises?" — the trust check before shipping</li><li><strong>Real-world scoreboard:</strong> track which headline styles win YOUR audience's clicks (email subjects and social posts are free testing grounds), and feed winners back into future prompts</li></ul><p>Headline skill compounds fastest of all copy skills — you get dozens of live tests per month. Treat every subject line as practice.</p>`,
          question: {
            text: "A headline gets great clicks but readers bounce immediately. What's wrong?",
            options: [
              "Nothing — clicks are the only metric",
              "The headline promised something the content doesn't deliver — trust is being burned",
              "The page loads too slowly",
            ],
            correctIndex: 1,
            explanation:
              "Click-then-bounce is the clickbait signature: attention won, trust lost. Great headlines open a loop the content genuinely closes — that's what builds an audience.",
          },
        },
      ],
    },
    {
      title: "Web and Landing Page Copy",
      summary: "Structure landing pages that convert: hero, proof, objections, and the one action that matters",
      content: `<p>A landing page is a guided argument: from 'what is this?' to 'I want it' in one scroll. This lesson gives you the page skeleton, the section-by-section AI workflow, and the conversion checks that make pages perform.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Build a landing page copy draft. Brief: product [describe], reader [describe their situation and skepticism], action [sign up / buy / book], main angle [the core persuasive idea]. Write these sections in order: (1) HERO — headline under 10 words + subhead that says who it's for and the outcome + button text, (2) PROBLEM — 3 short lines mirroring the reader's frustration, (3) HOW IT WORKS — 3 steps, one line each, (4) BENEFITS — 3 blocks, each: bold outcome + one supporting sentence, (5) OBJECTIONS — the 3 biggest hesitations with a one-line answer each, (6) FINAL CTA — restate the outcome + the button + a risk-reducer line. Keep every section scannable.",
        note: "Draft section by section, not whole-page-at-once — you'll iterate the hero five times, and the objections section is where most conversions are actually won.",
      },
      steps: [
        {
          html: `<h3>The page is an argument</h3><p>Every converting landing page walks the same psychological path:</p><ul><li><strong>Hero:</strong> in 5 seconds — what is it, who's it for, why care, what to do. If the hero fails, nothing below matters</li><li><strong>Problem:</strong> mirror their frustration in their words (your message bank from Unit 1 lives here)</li><li><strong>Solution & benefits:</strong> outcomes, not features — each one 'so what?'-tested</li><li><strong>Proof:</strong> testimonials, numbers, logos — belief needs evidence</li><li><strong>Objections:</strong> answer the top 3 hesitations before they're asked</li><li><strong>Final CTA:</strong> restate the outcome, reduce the risk, one button</li></ul><p>One page, one action. Every added link and competing button leaks conversions — the page either drives THE action or it's a brochure.</p>`,
          question: {
            text: "Why should a landing page drive exactly one action?",
            options: [
              "Web design tools only allow one button style",
              "Every competing link and choice leaks attention away from the conversion the page exists for",
              "Visitors get angry at multiple options",
            ],
            correctIndex: 1,
            explanation:
              "A landing page is a funnel, not a menu. One reader, one argument, one action — extra choices are exit doors dressed as options.",
          },
        },
        {
          html: `<h3>The hero: five seconds to win</h3><p>Visitors decide in the first screen. The hero formula:</p><ul><li><strong>Headline:</strong> the outcome, specific, under 10 words — "Send invoices that get paid in 3 days"</li><li><strong>Subhead:</strong> who it's for and how it works — "The invoicing tool for freelancers who hate chasing payments"</li><li><strong>CTA button:</strong> verb + outcome, never "Submit" — "Start invoicing free"</li></ul><p>The AI drill: "Give me 10 hero combinations for this brief. Then critique each: is the outcome instantly clear to a stranger? Could a competitor claim the same thing?" That second question kills generic heroes — if anyone could say it, it's not positioning.</p><div class="discovery"><p>💡 <strong>The stranger test</strong></p><p>Show the hero (only the hero) to AI playing a cold visitor: "Based on this alone: what does this product do, who is it for, and what would you do next?" If it can't answer cleanly, neither can a real visitor.</p></div>`,
          question: {
            text: "What's the test for a strong hero headline?",
            options: [
              "It uses the most impressive vocabulary available",
              "A stranger instantly understands the specific outcome — and a competitor couldn't claim the same line",
              "It's long enough to include every feature",
            ],
            correctIndex: 1,
            explanation:
              "Clarity plus differentiation: instantly understandable, and specific enough that it couldn't hang on a competitor's site. Generic heroes are the top conversion killer.",
          },
        },
        {
          html: `<h3>Objections: where conversions are won</h3><p>The visitor who scrolled past your benefits is interested but hesitating. The objections section catches them:</p><ul><li><strong>Source the real objections:</strong> from your research — reviews, sales calls, support tickets. Ask AI: "Given this product and price, list the 7 most likely hesitations, ranked"</li><li><strong>Answer honestly and briefly:</strong> "Will this work with my setup?" — one confident line plus proof beats three defensive paragraphs</li><li><strong>Deploy risk reversal:</strong> free trial, guarantee, "cancel anytime" — placed right at the final CTA where the fear peaks</li></ul><p>Then run the full-page audit: "Read this page as the skeptical reader from my brief. Where do you stop believing? What's still unanswered at the button?" Fix what it finds, verify every claim, ship, and test the hero variants first — heroes move numbers more than anything below the fold.</p>`,
          question: {
            text: "Where does risk reversal (guarantee, free trial, cancel-anytime) belong on the page?",
            options: [
              "Hidden in the footer with the legal links",
              "Right at the final call to action, where buying fear peaks",
              "Only in the hero headline",
            ],
            correctIndex: 1,
            explanation:
              "Hesitation spikes at the moment of commitment. Placing the risk-reducer beside the final button answers the fear exactly when it's felt.",
          },
        },
      ],
    },
    {
      title: "Product Pages",
      summary: "Turn specs into desire: product descriptions that sell the outcome and answer the buyer's doubts",
      content: `<p>Product pages are where browsing becomes buying — or doesn't. This lesson turns dry specs into copy that sells the experience, at catalog scale, without inventing a single feature.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Write a product page for: [product name]. Verified facts only: [paste specs, materials, dimensions, features — everything true you know]. Reader: [who buys this and why]. Create: (1) a title that includes what shoppers actually search, (2) a 40-word opening that sells the main outcome/experience, (3) 5 bullet points — each one 'feature → so what → benefit', (4) a 'details' block with the specs organized scannably, (5) answers to the 4 questions a hesitant buyer would ask before adding to cart. Strict rule: use ONLY the facts I provided — flag anything you were tempted to add.",
        note: "The 'flag anything you added' rule matters most on product pages — an invented material or measurement becomes a return, a refund, and a one-star review.",
      },
      steps: [
        {
          html: `<h3>Sell the experience, list the specs</h3><p>Weak product pages read like inventory printouts. Strong ones run two layers:</p><ul><li><strong>The desire layer:</strong> opening copy that puts the buyer in the after-state — the morning coffee on the new deck chair, the presentation running off the new laptop's battery</li><li><strong>The confidence layer:</strong> specs, materials, dimensions, compatibility — organized for scanning, because buyers who are almost convinced come here to verify</li></ul><p>AI's role in each: it drafts desire copy brilliantly from your fact sheet, and it structures spec blocks instantly. Your role: supplying true facts and knowing which outcome this buyer actually shops for.</p>`,
          question: {
            text: "What are the two layers every strong product page needs?",
            options: [
              "A video layer and a text layer",
              "Desire copy that sells the outcome, plus scannable specs that let the almost-convinced verify",
              "A discount layer and an urgency layer",
            ],
            correctIndex: 1,
            explanation:
              "Emotion opens the wallet; verification keeps it open. Desire copy up top, confident scannable facts below — buyers need both to click 'add to cart.'",
          },
        },
        {
          html: `<h3>The bullet formula and the truth rule</h3><p>Product bullets are where feature-to-benefit translation earns money:</p><ul><li><strong>The formula:</strong> feature → so what → benefit. "700-fill down (feature) traps more warm air (so what) so you stay warm at -10° without the bulk (benefit)"</li><li><strong>Front-load the outcome:</strong> buyers scan the first 3 words of each bullet — lead with "Stays warm at -10°" not "Constructed with"</li></ul><div class="discovery"><p>💡 <strong>The hallucination stakes are higher here</strong></p><p>On product pages, AI invention isn't just embarrassing — it's returns, refunds, and platform penalties. "Machine washable" when it isn't, "genuine leather" when it's synthetic. Every spec in the draft must trace to your verified fact sheet. No exceptions, ever.</p></div>`,
          question: {
            text: "Why is AI hallucination especially costly on product pages?",
            options: [
              "Product pages are longer than other formats",
              "An invented spec — wrong material, wrong size, false 'washable' — becomes returns, refunds, and angry reviews",
              "Search engines penalize creative writing",
            ],
            correctIndex: 1,
            explanation:
              "Product copy is a factual promise about a physical thing. Buyers act on it literally — so every claim traces to verified facts, or it doesn't ship.",
          },
        },
        {
          html: `<h3>Scale without the sameness</h3><p>The catalog problem: 50 products, and by page 30 every description sounds identical. The system fix:</p><ul><li><strong>Template + variation:</strong> lock the structure (title, opening, bullets, specs, questions) but ask AI to vary sentence rhythm and openings across the batch — "never start two descriptions the same way"</li><li><strong>Batch with individual facts:</strong> one prompt per product, each with its own fact sheet — never "write 20 descriptions" in one go, which produces 20 clones with swapped nouns</li><li><strong>The differentiation pass:</strong> for similar products, ask "these two descriptions are for different models — sharpen what makes EACH one the right choice, and for whom"</li></ul><p>That last move converts browsers who are comparing — which on a product page is almost everyone.</p>`,
          question: {
            text: "What's the right way to write descriptions for a 50-product catalog with AI?",
            options: [
              "One prompt: 'write 50 product descriptions' — maximum efficiency",
              "One structured prompt per product with its own verified facts, plus variation rules against sameness",
              "Write one great description and find-and-replace the product names",
            ],
            correctIndex: 1,
            explanation:
              "Batch prompts produce clones. Per-product prompts with individual fact sheets — under a shared structure with anti-repetition rules — deliver scale AND distinctiveness.",
          },
        },
      ],
    },
    {
      title: "Email and Social Media Copy",
      summary: "Write emails that get opened and social posts that get shared — with systems, not willpower",
      content: `<p>Email and social are the highest-frequency copy formats — daily reps where AI systems shine. This lesson builds your subject-line machine, email structure, and the social voice that doesn't read like a robot posted it.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm sending an email to [audience] about [topic/offer], goal: [the one click/reply I want]. Create: (1) 10 subject lines — 3 curiosity, 3 benefit, 2 with a number, 2 plain-spoken like a friend; each under 45 characters, plus a preview-text line that extends (not repeats) each subject, (2) the email body in PAS structure, under 150 words, one link, written like one person emailing another — no 'Dear valued customer,' no corporate voice, (3) a P.S. line that restates the offer for skimmers. Then convert the same message into a 3-post social sequence: one story-based, one tip-based, one direct offer.",
        note: "The email-to-social conversion at the end is the multiplier habit: every message you write should ship in at least two formats.",
      },
      steps: [
        {
          html: `<h3>The subject line is the email</h3><p>An email that isn't opened doesn't exist. Where the open happens:</p><ul><li><strong>Subject line:</strong> under ~45 characters, one clear reason to open — curiosity, benefit, or news. Write it like a text from a friend, not a billboard</li><li><strong>Preview text:</strong> the subject's wingman — extend the thought, don't repeat it. Subject: "Your Q3 numbers surprised me" / Preview: "one of them is really good news"</li><li><strong>The matrix habit:</strong> 10 subjects per email, always — then pick 2 to A/B test. Your open-rate log becomes the pattern bank AI learns from</li></ul><p>One rule above all: <strong>the email must deliver what the subject promises</strong>. Tricked opens are borrowed trust with heavy interest.</p>`,
          question: {
            text: "What's the job of preview text next to the subject line?",
            options: [
              "Repeat the subject line for emphasis",
              "Extend the subject's thought with a second hook — they work as a team",
              "Display legal disclaimers early",
            ],
            correctIndex: 1,
            explanation:
              "Subject and preview appear together in the inbox — a repeated preview wastes the second-best real estate you have. Extend the loop, don't echo it.",
          },
        },
        {
          html: `<h3>Email bodies that get the click</h3><p>The structure for nearly every marketing email:</p><ul><li><strong>Open with them, not you:</strong> first line names their situation — never "We're excited to announce"</li><li><strong>One idea, PAS-shaped:</strong> problem, twist, solution — under 150 words for most sends</li><li><strong>One link, repeated at most twice:</strong> more links, fewer clicks — the choice paradox again</li><li><strong>The P.S. line:</strong> skimmers read it first; restate the offer there</li></ul><div class="discovery"><p>💡 <strong>The human voice test</strong></p><p>Before sending, ask AI: "Does any sentence here sound like a company wrote it instead of a person? Rewrite those." Emails from 'a person' outperform emails from 'a brand' in nearly every inbox on earth.</p></div>`,
          question: {
            text: "Why should a marketing email usually contain just one link?",
            options: [
              "Email platforms charge per link",
              "One clear action beats a menu — every extra link splits attention and lowers total clicks",
              "Multiple links trigger spam filters automatically",
            ],
            correctIndex: 1,
            explanation:
              "Same law as the landing page: the email exists to drive ONE action. Extra links are exit ramps before the destination.",
          },
        },
        {
          html: `<h3>Social copy: native or invisible</h3><p>Social punishes copy that smells like an ad. The platform-native rules:</p><ul><li><strong>The first line is the headline:</strong> feeds truncate — the opening line must stop the scroll on its own</li><li><strong>One post, one idea:</strong> a story, a tip, a hot take, an offer — never all four</li><li><strong>Repurpose with respect:</strong> "Convert this email into a LinkedIn post (professional story), a tweet thread (punchy list), and an Instagram caption (personal, visual)" — same message, native shape for each</li><li><strong>The engagement driver:</strong> posts that invite a response ("What's your version of this?") train both the algorithm and the audience to show up</li></ul><p>Your weekly system: one core message → AI converts to every format → you add the human details AI can't know → schedule. Thirty minutes, a week of presence.</p>`,
          question: {
            text: "What does 'platform-native' repurposing mean?",
            options: [
              "Posting identical text everywhere simultaneously",
              "Reshaping the same core message into each platform's natural format and voice",
              "Only posting on the platform where you have the most followers",
            ],
            correctIndex: 1,
            explanation:
              "Copy-paste across platforms reads as spam everywhere. Same message, reshaped — professional story on LinkedIn, punchy thread on X, personal caption on Instagram — reads as native everywhere.",
          },
        },
      ],
    },
    {
      title: "Ad Copy",
      summary: "Write ads that stop the scroll and survive the auction: hooks, angles, and the testing machine",
      content: `<p>Ad copy is copywriting at its most darwinian: you pay for every impression, and the auction punishes weak copy in cash. This lesson builds your hook library, angle matrix, and the volume-testing system paid channels demand.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Create an ad testing matrix for [product], targeting [audience], goal [click/lead/purchase]. Generate 12 ad variants — 4 angles × 3 hooks each. Angles: (1) pain-relief, (2) desired outcome, (3) social proof, (4) us-vs-the-old-way. For each variant: HOOK (first line, under 10 words, must stop the scroll), BODY (2-3 lines expanding the angle), CTA (3-5 words). Rules: no claim I haven't verified, no 'revolutionary/game-changing', write like a person talking. Label every variant with its angle and hook type so I can track what wins.",
        note: "Run the winners, kill the losers, and ask AI to generate the next 12 variants based on what the data said. That loop IS paid advertising now.",
      },
      steps: [
        {
          html: `<h3>The hook decides the cost</h3><p>Ad platforms are auctions where attention sets the price: ads people engage with cost less per result. And engagement is decided in the first line — <strong>the hook</strong>:</p><ul><li><strong>Call out the reader:</strong> "Freelancers with unpaid invoices:" — self-selection in four words</li><li><strong>Lead with the specific:</strong> "We cut our close time by 15 days" beats any adjective</li><li><strong>Open a real loop:</strong> "The pricing mistake on 80% of the product pages we audited" — curiosity the ad actually resolves</li></ul><p>The discipline: hooks are written 10 at a time, tested, never debated in a conference room. The feed's data outranks everyone's opinion, including yours.</p>`,
          question: {
            text: "Why does better ad copy literally cost less money?",
            options: [
              "Platforms give discounts for good grammar",
              "Ad auctions reward engagement — ads people respond to win cheaper impressions and results",
              "Shorter ads are billed at lower rates",
            ],
            correctIndex: 1,
            explanation:
              "Platforms optimize for user attention. Copy that earns engagement gets rewarded with lower costs per result — the hook is a financial instrument.",
          },
        },
        {
          html: `<h3>Angles: the portfolio approach</h3><p>An angle is the persuasive doorway into the same product — and different audience segments walk through different doors:</p><ul><li><strong>Pain-relief:</strong> "Stop losing weekends to bookkeeping"</li><li><strong>Aspiration:</strong> "The calm of books that close themselves"</li><li><strong>Proof:</strong> "4,000 agencies switched this year — here's why"</li><li><strong>The enemy:</strong> "Spreadsheets were never meant to do this"</li><li><strong>Cost-of-inaction:</strong> "Every month manual is a month of errors compounding"</li></ul><div class="discovery"><p>💡 <strong>Fatigue is the constant</strong></p><p>Every winning ad dies — audiences saturate, costs creep. The professional's answer is a bench: while an angle wins, AI drafts the next two angles for testing. You're never defending one ad; you're running a rotation.</p></div>`,
          question: {
            text: "Why test multiple angles when one ad is already winning?",
            options: [
              "Platforms require a minimum number of active ads",
              "Ad fatigue kills every winner eventually — the bench of next angles is what keeps performance stable",
              "More ads always means more budget spent",
            ],
            correctIndex: 1,
            explanation:
              "Winners have expiration dates. The rotation system — winner running, challengers testing, next angles drafting — is what separates stable accounts from rollercoasters.",
          },
        },
        {
          html: `<h3>Compliance and the honesty edge</h3><p>Two guardrails that keep ad accounts alive and profitable:</p><ul><li><strong>Platform rules are real:</strong> health claims, income promises, before/after implications, "you"-phrasing about personal attributes — each platform bans specific patterns, and violations kill ads or whole accounts. Ask AI: "Review this ad against [platform] ad policies — flag risky phrasing" as a first-pass check (then verify against the actual policy)</li><li><strong>Honesty converts downstream:</strong> the over-promised click costs you at the landing page, the checkout, the refund, the review. The funnel remembers what the ad promised</li></ul><p>The complete ad system: hooks in volume, angles in rotation, claims verified, compliance checked, and every result feeding the next matrix. Paid traffic stops being a slot machine and becomes an engineering loop.</p>`,
          question: {
            text: "An ad over-promises and gets cheap clicks. Where does the bill arrive?",
            options: [
              "Nowhere — cheap clicks are pure win",
              "Downstream: landing page bounces, refunds, bad reviews — the funnel remembers what the ad promised",
              "Only in the design department",
            ],
            correctIndex: 1,
            explanation:
              "The click is the beginning of a promise, not the end of a transaction. Over-promised ads buy expensive disappointment — honest specificity wins the whole funnel.",
          },
        },
      ],
    },
    {
      title: "Long Form Content",
      summary: "Produce articles, guides, and newsletters with AI — depth and personality at production speed",
      content: `<p>Long-form is where authority is built: the guides that rank, the newsletters that get forwarded, the articles that make clients call you. AI collapses the production time — if you keep the thinking and the fingerprints human.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'm writing a definitive guide: [topic] for [audience]. Phase 1 — OUTLINE: propose a structure that covers what the reader actually needs (not generic filler), including the questions they'd ask, the mistakes they make, and a section competitors' articles miss. Wait for my edits. Phase 2 — after I approve the outline, we draft SECTION BY SECTION: I'll say 'next' and you write one section at a time, 150-250 words each, concrete examples over abstractions. Phase 3 — INTERROGATE: after drafting, list every claim that needs a source, every place a personal example from me would strengthen it, and the 3 weakest sections with fixes.",
        note: "Outline → approve → section-by-section → interrogate. Never 'write me a 2000-word article' in one shot — that's how you get 2000 words of wallpaper.",
      },
      steps: [
        {
          html: `<h3>Why one-shot long form fails</h3><p>"Write a 2,000-word article about X" produces exactly what floods the internet now: grammatically perfect, structurally sound, <em>completely hollow</em>. The fix is phased production:</p><ul><li><strong>Outline first:</strong> AI proposes, you cut the filler sections and add what only you know — this is the highest-leverage edit of the whole process</li><li><strong>Section by section:</strong> each 150-250 word chunk gets full attention (AI's and yours) instead of quality decaying across a marathon generation</li><li><strong>Interrogate after:</strong> "list unsourced claims, weak sections, and where a real example would help" — then supply those examples</li></ul><p>Time cost: maybe 90 minutes for a deep guide. The all-at-once version takes 10 minutes and is worth exactly nothing to readers or rankings.</p>`,
          question: {
            text: "Why does section-by-section drafting beat one-shot article generation?",
            options: [
              "It uses fewer AI tokens overall",
              "Each section gets full quality attention, and your outline edits steer the piece before drafting begins",
              "Long single outputs are against AI terms of service",
            ],
            correctIndex: 1,
            explanation:
              "Quality decays across marathon generations, and unsteered outlines default to generic. Phase the work — outline, approve, draft in chunks, interrogate — and depth survives.",
          },
        },
        {
          html: `<h3>The fingerprint layer</h3><p>What separates your article from the thousand AI articles on the same topic published the same week? <strong>The parts AI can't generate:</strong></p><ul><li><strong>Your examples:</strong> the client story, the experiment you ran, the number from your own dashboard</li><li><strong>Your positions:</strong> "most advice on this is wrong, here's why" — AI hedges; authorities commit</li><li><strong>Your specifics:</strong> screenshots, real figures, named tools, actual timelines</li></ul><div class="discovery"><p>💡 <strong>The 20% rule</strong></p><p>Aim for at least 20% of any long-form piece to be material that could ONLY come from you — experience, data, opinion. That 20% is why readers subscribe to you instead of asking a chatbot.</p></div>`,
          question: {
            text: "In an ocean of AI-generated articles, what makes yours worth reading?",
            options: [
              "Superior grammar and longer word count",
              "The 20%+ only you could write — real experiences, real data, committed opinions",
              "Publishing more frequently than competitors",
            ],
            correctIndex: 1,
            explanation:
              "Generic knowledge is now free everywhere. Your experience, your numbers, your stakes-in-the-ground positions — that's the scarce material that builds an audience.",
          },
        },
        {
          html: `<h3>The repurposing cascade</h3><p>Long form's economic superpower: one deep piece feeds a month of channels:</p><ul><li><strong>The cascade:</strong> guide → newsletter edition → 3 LinkedIn posts → tweet thread → 5 short video scripts → email course sequence. Ask AI to run the whole conversion in one session</li><li><strong>Native, not copied:</strong> each output reshaped for its platform (the lesson from email & social applies)</li><li><strong>The content calendar writes itself:</strong> one long-form piece per month, cascaded, is a complete content operation for most businesses</li></ul><p>System summary: phased drafting for depth, the 20% fingerprint for differentiation, the cascade for reach. Long form stops being a time sink and becomes the engine room of your entire content presence.</p>`,
          question: {
            text: "What's the repurposing cascade?",
            options: [
              "Publishing the same article on multiple blogs",
              "Converting one deep piece into a month of platform-native content — newsletter, posts, threads, scripts",
              "Letting AI write articles about your articles",
            ],
            correctIndex: 1,
            explanation:
              "The thinking is done once, in the long-form piece — then AI reshapes it natively for every channel. One afternoon of depth becomes a month of presence.",
          },
        },
      ],
    },
    {
      title: "Your AI Copywriting Business",
      summary: "Package the skill: positioning, pricing, portfolio, and landing your first paying clients",
      content: `<p>You now run a system that produces agency-grade copy at freelancer speed. The final lesson turns it into income: positioning that attracts clients, pricing that reflects value, and the first-clients playbook.</p>`,
      estimatedMinutes: 20,
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Help me package my AI copywriting service. My background: [describe — any writing, marketing, or industry experience counts]. Niche I'm considering: [industry/type of business]. Build: (1) a positioning statement — who I help, with what outcome, and why me, (2) three productized packages (e.g. 'Landing Page Sprint', 'Email Engine', 'Content Cascade') each with deliverables, timeline, and a suggested price range, (3) my 'why now' pitch: two paragraphs on why businesses need copy help in the AI era — and why they still need a human running it, (4) a 5-message outreach sequence to land my first three portfolio clients.",
        note: "Pick ONE niche and ONE package to start. 'Copywriter for everyone' is invisible; 'landing page sprints for SaaS founders' gets replies.",
      },
      steps: [
        {
          html: `<h3>Positioning: the niche decision</h3><p>The market doesn't hire "a copywriter who uses AI" — it hires <strong>the person who solves a specific expensive problem</strong>:</p><ul><li><strong>Niche by format:</strong> "landing pages for course creators" / "email sequences for e-commerce"</li><li><strong>Niche by industry:</strong> "copy for dental practices" — your research system (Unit 1) makes any industry learnable in a week</li><li><strong>The credibility equation:</strong> specific niche + 3 portfolio pieces + one measurable result beats a decade of generalist claims</li></ul><p>The AI era twist that works in your favor: businesses are drowning in generic AI copy and know it. "Human strategist running an AI-powered system" is exactly what they're looking for — you're not hiding the AI, you're selling the judgment that directs it.</p>`,
          question: {
            text: "Why does a narrow niche beat 'copywriting for everyone' when starting out?",
            options: [
              "Narrow niches have no competition at all",
              "Specific positioning is memorable, referable, and lets your portfolio speak directly to one buyer's exact problem",
              "General copywriting is illegal without certification",
            ],
            correctIndex: 1,
            explanation:
              "'Landing pages for SaaS founders' gets referred and remembered; 'copywriter' gets scrolled past. Specificity is the marketing — and your system makes any niche learnable fast.",
          },
        },
        {
          html: `<h3>Pricing: sell outcomes, not hours</h3><p>AI just made your hours 5× more productive — hourly billing would hand that entire gain to the client. Price the value instead:</p><ul><li><strong>Productized packages:</strong> "Landing Page Sprint: research, copy, two revisions — $X, delivered in 5 days." Clients buy certainty; packages sell it</li><li><strong>Anchor to the outcome:</strong> a landing page that lifts conversions 20% is worth thousands monthly to the client — price against that, not against your afternoon</li><li><strong>The rate ladder:</strong> first 3 clients at portfolio-building rates in exchange for testimonials and results data — then raise prices every 2-3 clients until demand balances</li></ul><div class="discovery"><p>💡 <strong>Results are the real portfolio</strong></p><p>Track every client's numbers: open rates, conversion lifts, revenue. "Rewrote onboarding emails: +34% activation" is worth more than ten beautiful samples — it's the sentence that closes the next client.</p></div>`,
          question: {
            text: "Why is hourly billing the wrong model for AI-powered copywriting?",
            options: [
              "Clients refuse to pay hourly rates anymore",
              "AI made you 5× faster — hourly pricing hands that entire productivity gain to the client instead of you",
              "Hourly billing is only for lawyers",
            ],
            correctIndex: 1,
            explanation:
              "Value pricing (packages anchored to outcomes) captures your speed advantage. The client pays for the converting page, not for how quickly your system produced it.",
          },
        },
        {
          html: `<h3>The first-clients playbook</h3><p>The bootstrapping sequence that works:</p><ul><li><strong>Build 3 spec pieces:</strong> pick 3 real businesses in your niche, rewrite their weakest copy (a landing page, an email, ads) using your full system — that's your portfolio, no permission needed</li><li><strong>Outreach with the work:</strong> "I rewrote your homepage hero — here it is, free, use it either way. If you'd like the full page done, here's my package." Value-first outreach converts 10× the pitch-first kind</li><li><strong>Deliver loudly:</strong> over-communicate like the real-estate weekly update — clients refer process as much as results</li><li><strong>Compound:</strong> results data → case studies → higher rates → referrals. The flywheel from every lesson in this course, now pointed at your own business</li></ul><p>You've completed AI Copywriting: the strategy layer, the toolkit, research, frameworks, editing, and every major format — plus the business to sell it with. The next piece of copy you write is the first one that pays. Go write it.</p>`,
          question: {
            text: "What makes spec work (rewriting a real business's copy unprompted) such an effective way to start?",
            options: [
              "It legally obligates the business to hire you",
              "It builds your portfolio AND becomes value-first outreach — proof of skill delivered before any pitch",
              "It's faster than doing client work",
            ],
            correctIndex: 1,
            explanation:
              "Spec work solves the no-portfolio problem and the cold-outreach problem in one move: the prospect receives finished value, not a promise — and your system makes each piece a fast afternoon.",
          },
        },
      ],
    },
  ],
};
