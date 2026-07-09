import type { UnitSeed } from "./types";

export const PERPLEXITY_UNIT_2: UnitSeed = {
  title: "Workflows and Automation",
  lessons: [
    {
      title: "Perplexity Computer",
      summary: "Comet, the assistant that reads your tabs and acts on your behalf — while you stay in control",
      estimatedMinutes: 14,
      content: `<p>So far you've been the one clicking around. Comet flips that: it's Perplexity's browser and assistant that can <strong>read what's on your screen</strong> and take small actions for you. The skill here isn't just switching it on — it's knowing what to hand off and how to keep control.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Hand Perplexity a small on-screen task to do for you: open a long article or report you need to get through and ask, 'Summarize this page in five key points and pull out any dates, numbers, or action items I should note.' Then check its summary against the actual page.",
        note: "Start by delegating low-stakes reading and summarizing — verify the result before trusting it with anything that matters.",
      },
      steps: [
        {
          html: `<h3>From answering to acting</h3><p>Plain Perplexity answers questions. <strong>Comet</strong> — Perplexity's assistant, available in its browser — can also <em>see the page you're on</em> and do things with it: summarize an article, pull the key points out of a long report, or compare what's across your open tabs.</p><p>The mental shift is from "search box" to "assistant sitting next to you." Instead of copying text into a chat, you can ask about <strong>whatever you're already looking at</strong>.</p>`,
          question: {
            text: "You're reading a dense 20-page vendor contract in your browser and want the key obligations without leaving the page. What's the natural way to use Comet?",
            options: [
              "Copy the whole PDF into a separate note app and read it line by line yourself",
              "Ask Comet to summarize the key obligations from the page you're already viewing",
              "Start a fresh unrelated search and hope it guesses the contract",
            ],
            correctIndex: 1,
            explanation:
              "Comet's edge is that it can read what's on your screen. Asking it about the page you're already viewing skips the copy-paste and keeps you in flow.",
          },
        },
        {
          html: `<h3>Comparing across your tabs</h3><p>One of the most everyday wins: you're shopping or researching and have five tabs open — three laptops, two insurance quotes. Instead of eyeballing each, you can ask Comet to <strong>compare what's across those tabs</strong> and lay out the differences.</p><p>Think of it as a research assistant who has already read everything you have open and can build the comparison table you were about to make by hand.</p>`,
          question: {
            text: "You have four laptop product pages open and can't decide. You want a side-by-side on price, battery, and weight. What's the smart move?",
            options: [
              "Ask Comet to compare the open tabs on price, battery, and weight",
              "Close all tabs and start your research over from scratch",
              "Pick randomly since comparing is too much effort",
            ],
            correctIndex: 0,
            explanation:
              "Comparing what's across your open tabs is exactly what the assistant is built for. Naming the criteria (price, battery, weight) gives you a focused, decision-ready answer.",
          },
        },
        {
          html: `<h3>Drafting from context</h3><p>Because Comet can see the page, it can also help you <strong>respond</strong> to it. Reading a long email thread? Ask it to draft a reply that hits the open questions. Looking at a job posting? Ask for a first-pass cover note tailored to it.</p><p>It's pulling context from what's in front of you, so the draft starts far closer to done than a blank page would.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Always read Comet's draft before sending. Treat it as a fast first draft to edit, not a finished message — you know the relationship and tone; it doesn't.</p></div>`,
          question: {
            text: "Comet drafts a reply to a client email that's polite but promises a delivery date you haven't confirmed. What should you do before hitting send?",
            options: [
              "Send it immediately — the assistant wouldn't get a date wrong",
              "Edit out or correct the unconfirmed date, then send once it's accurate",
              "Delete the draft and write the whole thing from scratch",
            ],
            correctIndex: 1,
            explanation:
              "A draft is a starting point, not a final word. Fixing the one wrong detail keeps the speed benefit while making sure you don't over-promise something the assistant invented.",
          },
        },
        {
          html: `<h3>Small agent tasks</h3><p>Comet can also chain a few steps together — a light "do it for me" mode. Point it at a goal like <strong>find a highly-rated dentist nearby, check hours, and start a booking</strong>, and it can navigate pages and fill in details as it goes.</p><p>Keep these tasks <strong>bounded and low-stakes</strong> at first: things that are easy to check and easy to undo. The more consequential the action, the more you want to watch it happen.</p>`,
          question: {
            text: "You want to try a multi-step agent task for the first time. Which is the safest one to start with?",
            options: [
              "Have it book and pay for a non-refundable international flight unattended",
              "Have it find three nearby dry cleaners and pull up their hours and prices",
              "Have it send money to a new payee from your bank on its own",
            ],
            correctIndex: 1,
            explanation:
              "Start bounded and low-stakes: gathering dry-cleaner info is easy to verify and harmless if wrong. Irreversible payments are exactly what you should not hand off blindly.",
          },
        },
        {
          html: `<h3>Staying in control</h3><p>Handing off actions only works if you stay the one in charge. A few habits keep it safe:</p><ul><li><strong>Watch the important steps</strong> — especially anything involving money, sending, or account changes</li><li><strong>Confirm before commit</strong> — let it prepare a booking or form, but you press the final button</li><li><strong>Check the sources</strong> — Comet still shows where its info comes from; open a citation when it matters</li></ul><p>You're the director; the assistant is the crew. It moves fast, but you call the final shot.</p>`,
          question: {
            text: "Comet is filling out a form to sign you up for a paid subscription and reaches the payment confirmation step. What's the right level of control?",
            options: [
              "Let it auto-confirm everything so you never have to look",
              "Have it prepare the form, but you review the charge and press confirm yourself",
              "Turn off all citations and stop checking what it does",
            ],
            correctIndex: 1,
            explanation:
              "Prepare-then-confirm is the safe pattern for anything involving money. You keep the speed of automation without giving up the final decision on a real charge.",
          },
        },
        {
          html: `<h3>A day with Comet</h3><p>Put together, a normal workday might look like: summarize the three articles you have open, compare two vendor quotes in other tabs, draft a reply to your manager referencing them, and queue a quick task to find a meeting-room caterer nearby.</p><p>None of these are dramatic — they're the small friction points that eat your day. Offloading them is where the assistant quietly earns its keep.</p><h3>Where you're headed</h3><p>You can now let Comet read your screen and take bounded actions while you stay in control. Next up: <strong>Skills for Repeatable Workflows</strong> — turning the research you do again and again into reusable routines you don't have to rebuild each time.</p>`,
          question: {
            text: "You realize you run the same 'summarize these tabs and draft a status update' flow every Friday. What does that signal for the next lesson?",
            options: [
              "Nothing — repeated tasks just have to be redone manually forever",
              "It's a candidate to turn into a reusable, repeatable workflow instead of rebuilding it weekly",
              "You should stop doing status updates entirely",
            ],
            correctIndex: 1,
            explanation:
              "Anything you repeat on a schedule is a prime candidate for a saved, reusable routine — which is exactly what the next lesson on repeatable workflows covers.",
          },
        },
      ],
    },
    {
      title: "Skills for Repeatable Workflows",
      summary: "Turn the research you keep redoing into reusable templates, saved instructions, and scheduled tasks",
      estimatedMinutes: 13,
      content: `<p>Most people rebuild the same research from scratch every time. The pros don't. This lesson is about spotting the work you repeat and turning it into <strong>routines</strong> — prompt templates, saved Space instructions, and scheduled tasks that run without you.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Turn a recurring task into a reusable routine. Write a solid template prompt for something you do regularly — e.g. 'Every Monday, summarize the top developments in [my industry] from the past week as five bullets, each with why it matters and a source.' Refine it until it's good, then set it up as a scheduled task.",
        note: "Perfect the prompt by hand first, then schedule it — automation only helps if the underlying prompt already gives you what you want.",
      },
      steps: [
        {
          html: `<h3>Spot the repeat</h3><p>The first skill is noticing patterns. If you find yourself typing nearly the same prompt each week — "summarize this week's news in my industry," "check the going price for X" — that's a workflow hiding in plain sight.</p><p>Once you name the repeat, you can standardize it. A good workflow starts as a <strong>reusable prompt template</strong>: the same structure every time, with just the specifics swapped in.</p>`,
          question: {
            text: "Every Monday you retype a long prompt asking for a competitor news roundup, tweaking a few names. What's the efficient fix?",
            options: [
              "Keep retyping the whole thing from memory each week",
              "Save it as a reusable prompt template and swap in only the changing details",
              "Stop doing competitor research because it takes too long",
            ],
            correctIndex: 1,
            explanation:
              "A template captures the stable structure once, so each week you only change the specifics. That's the foundation of every repeatable workflow.",
          },
        },
        {
          html: `<h3>Templates that travel</h3><p>A strong template spells out the parts you always want, so results stay consistent:</p><ul><li><strong>Scope</strong> — the topic and time window ("past 7 days")</li><li><strong>Format</strong> — bullets, a short brief, a comparison table</li><li><strong>Filters</strong> — which sources to lean on (web, academic, finance)</li></ul><p>With those fixed, the output looks the same shape every time — which makes it far easier to skim and act on than a differently-formatted answer each run.</p>`,
          question: {
            text: "Your weekly market brief comes back in a different format every time, making it slow to read. What should your template lock down?",
            options: [
              "Nothing — inconsistent formatting is unavoidable",
              "A fixed format (e.g. 'five bullets, each with a source') so every brief looks the same",
              "Only the color of the text",
            ],
            correctIndex: 1,
            explanation:
              "Locking the output format into your template gives you consistent, skimmable results week after week, so you spend time acting on the brief instead of reformatting it.",
          },
        },
        {
          html: `<h3>Spaces with standing instructions</h3><p>Templates live in your head or notes; <strong>Spaces</strong> (Collections) let the workflow live in Perplexity itself. A Space groups related threads and lets you set <strong>custom instructions</strong> that apply to everything you ask inside it.</p><p>Set up a "Competitor Watch" Space once — tell it your industry, your competitors, and the format you want — and every question you ask there already carries that context. No re-explaining.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Put your standing context (who you are, your goals, preferred format) in the Space instructions, not in every prompt. Then your day-to-day questions can be short and the context still applies.</p></div>`,
          question: {
            text: "You do ongoing research on three competitors and re-explain your industry in every single prompt. What's the cleaner setup?",
            options: [
              "Keep pasting the same background paragraph into every question",
              "Create a Space with custom instructions holding that context, and ask short questions inside it",
              "Never mention your industry and hope the answers are relevant",
            ],
            correctIndex: 1,
            explanation:
              "Standing context belongs in the Space's custom instructions. Set it once and every thread inside inherits it, so your individual questions stay short and focused.",
          },
        },
        {
          html: `<h3>Scheduled and recurring tasks</h3><p>The next level is not running the workflow yourself at all. Perplexity can run <strong>scheduled tasks</strong> — a prompt that fires on a recurring basis and delivers the result to you.</p><p>Everyday examples:</p><ul><li>A <strong>weekly industry digest</strong> every Friday morning</li><li>A <strong>price watch</strong> that checks a product and flags big drops</li><li>A <strong>Monday prep</strong> summary of news in your field before your week starts</li></ul><p>You set it up once; it shows up on its own after that.</p>`,
          question: {
            text: "You want a roundup of your industry's news waiting for you every Friday at 8am without lifting a finger. What fits best?",
            options: [
              "Set a phone alarm to remind yourself to run the search manually",
              "Set up a scheduled recurring task that runs the digest and delivers it Friday mornings",
              "Ask a coworker to do it for you each week",
            ],
            correctIndex: 1,
            explanation:
              "A recurring scheduled task is built exactly for this: define it once and the digest arrives on its own each Friday, no manual trigger needed.",
          },
        },
        {
          html: `<h3>Pick the right depth</h3><p>Automating doesn't mean always going deep. Match the mode to the job so a recurring task stays useful and fast:</p><ul><li>A quick daily price check → a light, quick search is plenty</li><li>A weekly strategic digest you'll act on → <strong>Pro Search</strong> or <strong>Deep Research</strong> earns its keep</li></ul><p>Over-powering a trivial recurring task just makes it slower and noisier; under-powering an important one leaves you with a shallow answer.</p>`,
          question: {
            text: "You're setting up a recurring task that produces a thorough monthly competitive-landscape report your boss will read. Which depth fits?",
            options: [
              "The lightest quick search, to save time",
              "A deeper mode like Pro Search or Deep Research, since the report needs thoroughness",
              "No search at all — just guess the landscape",
            ],
            correctIndex: 1,
            explanation:
              "A thorough report someone acts on justifies a deeper mode. Match effort to stakes: light for quick checks, deep for reports that carry weight.",
          },
        },
        {
          html: `<h3>Build a personal library</h3><p>Over time, your best templates, Spaces, and scheduled tasks become a <strong>personal library of go-to workflows</strong> — your industry digest, your price watch, your meeting-prep routine, your vendor-research template.</p><p>The payoff compounds: the tenth time you need a competitor brief, you don't design it — you reuse it. That's the difference between using Perplexity as a search box and running it as a system.</p><h3>Where you're headed</h3><p>You can now turn repeated research into reusable, scheduled routines. Next up: <strong>Connectors for Cross-App Tasks</strong> — hooking up your email, calendar, and files so these workflows can draw on your own data, not just the open web.</p>`,
          question: {
            text: "You've built five reliable workflows you reuse constantly. A colleague asks how you're so fast. What's the real reason?",
            options: [
              "You type faster than everyone else",
              "You reuse a library of proven workflows instead of rebuilding research from scratch each time",
              "You skip research entirely and guess",
            ],
            correctIndex: 1,
            explanation:
              "Speed comes from reuse. A library of proven templates, Spaces, and scheduled tasks means you're recalling workflows, not reinventing them every time.",
          },
        },
      ],
    },
    {
      title: "Connectors for Cross-App Tasks",
      summary: "Connect email, calendar, and files so Perplexity can answer using your own data — safely",
      estimatedMinutes: 13,
      content: `<p>Everything so far searched the open web. <strong>Connectors</strong> change the game: link your email, calendar, and files, and Perplexity can weave <em>your own information</em> into its answers — with permission and privacy front of mind.</p>`,
      tryIt: {
        tool: "Perplexity",
        url: "https://www.perplexity.ai",
        prompt:
          "Connect one source you actually use — your calendar or email — then ask a cross-app question like: 'What meetings do I have this week, and for each one draft a short list of prep points based on any related emails.' Review what it pulls in before acting on it.",
        note: "Only connect what you're comfortable sharing, and double-check the first cross-app answer to confirm it's using your data correctly.",
      },
      steps: [
        {
          html: `<h3>Answers that know your data</h3><p>A connector links an app you already use — like your <strong>email, calendar, or cloud drive</strong> — so Perplexity can reference what's in it when you ask. Instead of only knowing the public web, it can now answer questions about <em>your</em> schedule, messages, and documents.</p><p>That turns "what's the industry news?" into "what do I need to know before my 2pm with Acme, based on our recent emails?"</p>`,
          question: {
            text: "You want Perplexity to answer 'what did we agree with this supplier last month?' using your actual email history. What makes that possible?",
            options: [
              "A web search, since your private emails are on the public internet",
              "Connecting your email so Perplexity can reference your own messages",
              "Nothing — it can never use personal data",
            ],
            correctIndex: 1,
            explanation:
              "Private emails aren't on the web. A connector links your inbox so Perplexity can draw on your own messages to answer — something a plain web search never could.",
          },
        },
        {
          html: `<h3>Searching across your documents</h3><p>Connect a cloud drive and your files become searchable by meaning, not just filename. "Find the pricing figures from last quarter's planning deck" works even if you don't remember which file it's in.</p><p>It's the difference between hunting through folders and just <strong>asking</strong> for the answer — with a pointer back to the exact document it came from.</p>`,
          question: {
            text: "You know a number lives in 'some slide deck from Q3' but can't find the file. With a drive connector, what's the fastest path?",
            options: [
              "Open every folder and skim each deck by hand",
              "Ask Perplexity to find the Q3 pricing figure across your connected files",
              "Give up and re-create the number from memory",
            ],
            correctIndex: 1,
            explanation:
              "A connector lets you search your files by meaning and get a pointer to the source document. Asking beats manually opening folders when you don't remember the filename.",
          },
        },
        {
          html: `<h3>Meeting prep, automatically</h3><p>Connectors shine when combined. Link your <strong>calendar and inbox</strong>, and Perplexity can prep you for a meeting by pulling the event details from your calendar and the recent thread from your email — then adding public context on the company from the web.</p><p>One question — "prep me for my 3pm" — draws on all three: your schedule, your correspondence, and the open web.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>For recurring meetings, pair this with a scheduled task from the last lesson: have your prep brief ready in your inbox each morning before your first call.</p></div>`,
          question: {
            text: "Before a client call you want your calendar's meeting details, the latest email thread, and background on the client's company — in one go. What setup delivers that?",
            options: [
              "Only a web search, ignoring your calendar and email entirely",
              "Calendar and email connectors combined with web search, so one prompt pulls all three",
              "Manually opening your calendar, inbox, and a browser in separate windows",
            ],
            correctIndex: 1,
            explanation:
              "Combining connectors is the point: calendar plus inbox plus web lets a single prompt assemble your schedule, your correspondence, and public context together.",
          },
        },
        {
          html: `<h3>Permission awareness</h3><p>Connectors ask for access, and you decide what to grant. Good habits:</p><ul><li><strong>Connect only what you need</strong> — link the calendar if you want meeting prep; skip apps you won't use</li><li><strong>Know the scope</strong> — understand what each connector can read before you approve it</li><li><strong>Review and revoke</strong> — you can disconnect an app anytime if you no longer need it</li></ul><p>The goal is useful, not maximal. Fewer, well-chosen connections keep things both handy and tidy.</p>`,
          question: {
            text: "You only ever want meeting-prep help and have no use for document search right now. What's the sensible connector choice?",
            options: [
              "Connect every app available just in case, and grant the broadest access",
              "Connect just your calendar and email for now, and skip the drive until you need it",
              "Connect nothing and manually do all prep forever",
            ],
            correctIndex: 1,
            explanation:
              "Grant access on a need-to-use basis. Connecting only calendar and email covers your actual goal and keeps your data footprint minimal — you can always add the drive later.",
          },
        },
        {
          html: `<h3>When your data matters vs. when it doesn't</h3><p>Not every question needs your private data. Knowing which is which keeps answers relevant and your info out of the picture when it's irrelevant:</p><ul><li>"What's the market cap of a public company?" → the open web is enough</li><li>"What did our team decide about this account?" → needs your connected email</li></ul><p>Reach for connectors when the answer lives in <strong>your</strong> world, and stick to plain search when it lives in the public one.</p>`,
          question: {
            text: "A colleague asks you to check the current inflation rate for a report. Do you need your connectors for this?",
            options: [
              "Yes — always route every question through your private email and files",
              "No — a public figure like the inflation rate is answered fine by web search alone",
              "Yes — you must connect your bank account to answer it",
            ],
            correctIndex: 1,
            explanation:
              "Public facts don't need your private data. Save connectors for questions whose answers live in your own email, calendar, or files — a plain web search handles the inflation rate.",
          },
        },
        {
          html: `<h3>Putting the unit together</h3><p>You've now built a full working system: Comet acting on your screen, reusable workflows and scheduled tasks running on their own, and connectors feeding your own data into the answers. Together they turn Perplexity from a search box into a genuine <strong>work assistant</strong>.</p><h3>Where you're headed</h3><p>Next up is <strong>Unit 3</strong>, where you'll put all of this into real, everyday use cases — comparing products before you buy, checking a claim in the news, researching a vendor, planning a trip, and writing that report for the boss. Time to make it practical.</p>`,
          question: {
            text: "You now have Comet, saved workflows, and connectors all set up. What's the best way to think about what you've built?",
            options: [
              "A collection of unrelated features you'll rarely touch",
              "An integrated work assistant — screen actions, automated routines, and your own data working together",
              "A replacement for reading and thinking entirely",
            ],
            correctIndex: 1,
            explanation:
              "The pieces reinforce each other: acting on your screen, running routines automatically, and drawing on your own data combine into one assistant — which Unit 3 puts to practical, everyday use.",
          },
        },
      ],
    },
  ],
};
