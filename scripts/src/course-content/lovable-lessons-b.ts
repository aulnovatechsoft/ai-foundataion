import type { UnitSeed } from "./types";

export const LOVABLE_LESSONS_B: UnitSeed["lessons"] = [
  {
    title: "Using Lovable with Other Tools",
    summary: "Connecting Supabase, Stripe, GitHub, and embeds — and knowing when you actually need each",
    estimatedMinutes: 14,
    content: `<p>A good-looking site is only half the job. The moment you want to <strong>store a sign-up, take a payment, or grow beyond a simple page</strong>, Lovable can reach out to other tools. This lesson is about knowing which connection solves which everyday problem — and not adding a single one you don't need yet.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "In an existing Lovable project, add one real capability that solves an actual need: 'Add a working contact form that stores each submission so I can see who reached out.' Let Lovable set up the connection it needs, then test the form by submitting an entry yourself.",
      note: "Only add the connection your project genuinely needs right now — test it end to end rather than adding features you won't use yet.",
    },
    steps: [
      {
        html: `<h3>Static vs. connected</h3><p>Many everyday sites are <strong>static</strong>: an about page, a portfolio, a menu. They show information and nothing needs to be saved. That's the simplest, cheapest, most reliable kind of site — and often all you need.</p><p>You only reach for an integration when your site has to <em>remember</em> or <em>do</em> something: capture an email, log a booking, charge a card. Lovable connects to specialized services for exactly those jobs so you don't have to build them from scratch.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Ask yourself: "Does anything on this page need to be saved or paid for?" If the honest answer is no, skip integrations entirely and ship the simple version.</p></div>`,
        question: {
          text: "You're building a one-page restaurant site showing the menu, hours, and address. Do you need to connect a database?",
          options: [
            "Yes — every site needs a database to work",
            "No — nothing is being saved or submitted, so a static page is perfect",
            "Yes — otherwise the menu can't display",
          ],
          correctIndex: 1,
          explanation:
            "The page only displays fixed information. Nothing gets saved or paid for, so a static site is simpler, faster, and cheaper. Add a database only when data needs to be stored.",
        },
      },
      {
        html: `<h3>Supabase: your site's memory</h3><p>When you need to <strong>store what visitors submit</strong> or let people <strong>sign in</strong>, Lovable connects to Supabase. Think of it as your site's memory and front door:</p><ul><li><strong>Store submissions</strong> — contact forms, waitlist emails, event RSVPs</li><li><strong>Accounts and sign-in</strong> — let clients or team members log in</li><li><strong>Save records</strong> — bookings, requests, simple lists</li></ul><p>You describe what you want to collect in plain language, and Lovable sets up the connection and the place to view it.</p>`,
        question: {
          text: "Your freelancer landing page needs a 'Join my waitlist' form so you can email people later. What's the right move?",
          options: [
            "Just add a form field — it will save emails automatically",
            "Connect Supabase so the submitted emails are actually stored somewhere you can retrieve",
            "Add a Stripe payment so people pay to join",
          ],
          correctIndex: 1,
          explanation:
            "A form field alone doesn't remember anything. To keep and later use those emails, you need a place to store them — that's what Supabase provides. Stripe is for payments, not sign-ups.",
        },
      },
      {
        html: `<h3>Stripe: taking payments</h3><p>When money needs to change hands, Lovable connects to Stripe — a trusted payments service. It handles the sensitive card details so you never have to.</p><p>Everyday uses:</p><ul><li><strong>Bookings</strong> — a stylist or coach taking a deposit</li><li><strong>A small shop</strong> — selling a handful of products</li><li><strong>Paid events or downloads</strong> — a ticket or a template</li></ul><p>You ask Lovable to add a checkout or pay button, and it wires up Stripe to process it securely.</p>`,
        question: {
          text: "A yoga instructor wants clients to pay a deposit when they book a class on her site. Which integration fits?",
          options: [
            "Supabase — because payments are just stored data",
            "GitHub — to export the payment code",
            "Stripe — it securely processes the actual card payment",
          ],
          correctIndex: 2,
          explanation:
            "Taking real money means a payments processor. Stripe handles the card securely and legally. Supabase stores data; GitHub is for code — neither charges a card.",
        },
      },
      {
        html: `<h3>GitHub: when you outgrow the nest</h3><p>Most professionals never touch this — and that's fine. But Lovable can <strong>sync with GitHub</strong>, a place where the underlying code lives. It matters in two everyday situations:</p><ul><li>You've hired a developer who wants to extend the project in their own tools</li><li>You want a portable copy of your work that isn't locked to one platform</li></ul><p>GitHub is an <em>escape hatch and backup</em>, not a starting requirement. You can build and publish for a long time without ever opening it.</p>`,
        question: {
          text: "Your simple booking site has grown, and a developer friend offers to add advanced features in their own code editor. What does GitHub export enable here?",
          options: [
            "It lets the developer access the project's code to extend it outside Lovable",
            "It automatically takes payments for you",
            "It's required before you can publish anything",
          ],
          correctIndex: 0,
          explanation:
            "GitHub sync gives a developer the actual code so they can work in their own tools. It's an escape hatch for when you outgrow the builder — not a payment tool or a publishing requirement.",
        },
      },
      {
        html: `<h3>Embeds: borrowing tools you already use</h3><p>Sometimes the fastest integration isn't an integration at all — it's an <strong>embed</strong>. If a tool you already use gives you a link or snippet, Lovable can often drop it right into your page:</p><ul><li><strong>A booking calendar</strong> from a scheduling tool</li><li><strong>A map</strong> for your location</li><li><strong>A form or survey</strong> you already built elsewhere</li></ul><p>Embeds keep the data in that other tool while showing it on your site — great when you don't want to rebuild something that already works.</p>`,
        question: {
          text: "You already manage all your appointments in a scheduling app you love. You just want clients to book from your new site. What's the simplest approach?",
          options: [
            "Rebuild the entire scheduling system with Supabase from scratch",
            "Embed your existing scheduling tool's booking widget into the page",
            "Export the site to GitHub first",
          ],
          correctIndex: 1,
          explanation:
            "If a tool already works and offers an embed, reuse it. Embedding your scheduler is far faster than rebuilding booking logic — and your appointments stay in the app you already trust.",
        },
      },
      {
        html: `<h3>Choosing the right one</h3><p>A quick everyday map:</p><ul><li>Need to <strong>save what people submit</strong> or let them <strong>log in</strong>? → Supabase</li><li>Need to <strong>take a payment</strong>? → Stripe</li><li>Need a <strong>developer or a code backup</strong>? → GitHub</li><li>Already have a tool that works? → <strong>Embed</strong> it</li><li>Just showing information? → <strong>Nothing</strong> — stay static</li></ul><p>Add integrations one at a time, only when a real need appears. Each one you skip is one less thing to manage.</p><h3>Where you're headed</h3><p>Your site can now remember, charge, and connect. But a site also has to <em>speak</em> well. Next up: <strong>Writing Website Copy</strong> — getting Lovable to draft headlines and pages that actually sound like you.</p>`,
        question: {
          text: "You're mapping out a small business site: a menu (display only), an email waitlist, and a deposit for large-party bookings. Which combination fits?",
          options: [
            "Supabase for everything, including the menu",
            "Static menu, Supabase for the waitlist emails, Stripe for the deposit",
            "Stripe for all three since it's a business",
          ],
          correctIndex: 1,
          explanation:
            "Match each need to its tool: the menu just displays (static), the waitlist stores emails (Supabase), and the deposit takes money (Stripe). Using one tool for everything either overcomplicates or can't do the job.",
        },
      },
    ],
  },
  {
    title: "Writing Website Copy",
    summary: "Getting Lovable to draft headlines and pages in your voice — then editing for accuracy",
    estimatedMinutes: 13,
    content: `<p>Lovable can write the words on your site, not just the layout. But AI copy is a <strong>first draft, not a final one</strong>. This lesson is about feeding it your real facts and voice, then editing what it gives you so every claim is true and every sentence sounds like you.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "In your Lovable project, give it your real facts and ask it to write the homepage copy: 'Write the hero headline, a short intro, and three benefit points for [my business]. Here are the true details: ___. Tone: warm and straightforward, no hype.' Then read every line and fix anything that isn't accurate or doesn't sound like you.",
      note: "Treat the generated copy as a first draft — check every claim is true and rewrite anything that sounds generic before publishing.",
    },
    steps: [
      {
        html: `<h3>Lovable can draft the words too</h3><p>When you describe a page, Lovable often fills it with placeholder or suggested copy — headlines, buttons, section text. You can ask it directly: "Write an about section for a wedding photographer" and it'll produce a starting draft.</p><p>That's a huge time-saver against a blank page. But remember the golden rule: the AI knows <em>how</em> web copy usually reads, not the <strong>truth about your business</strong>. Everything it writes is a guess until you give it facts.</p>`,
        question: {
          text: "Lovable fills your new services page with confident copy about '10 years of experience' and 'award-winning results.' You started last year. What's your move?",
          options: [
            "Keep it — it sounds impressive and that's what matters",
            "Edit it to reflect the truth; AI copy is a draft, not verified fact",
            "Assume Lovable checked your background before writing it",
          ],
          correctIndex: 1,
          explanation:
            "AI invents plausible-sounding claims. Impressive but false copy erodes trust and can be misleading. Always edit generated copy to match your real story.",
        },
      },
      {
        html: `<h3>Feed it your facts</h3><p>Vague prompts get vague, generic copy. The fix is to hand Lovable the specifics:</p><ul><li>What you actually do and for whom</li><li>Real details — years, locations, specialties, prices</li><li>What makes you different in plain terms</li></ul><p>Compare "write my about page" with "write an about page for Maya, a Chicago-based freelance illustrator who specializes in children's books and has illustrated three published titles." The second gives Lovable something true to work with.</p>`,
        question: {
          text: "You want an about page that doesn't sound like every other freelancer site. What most improves the result?",
          options: [
            "Asking for 'more professional-sounding words'",
            "Giving Lovable your real specifics — your niche, your background, your clients",
            "Making the prompt as short as possible",
          ],
          correctIndex: 1,
          explanation:
            "Generic prompts produce generic copy. Real, specific facts are what make the draft distinctive and accurate — the model can only reflect the detail you give it.",
        },
      },
      {
        html: `<h3>Giving it your voice</h3><p>Facts make copy true; <strong>voice</strong> makes it yours. Tell Lovable the tone you want, ideally with an example:</p><ul><li>"Warm and casual, like I'm talking to a friend"</li><li>"Confident and concise, no fluff"</li><li>"Playful, with a bit of humor"</li></ul><p>If you have writing you like — an old bio, a favorite email — paste it and say "match this tone." Lovable is far better at copying a sample than guessing what "sounds like you" means.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Naming the tone <em>and</em> pasting a short sample beats either alone. The example anchors abstract words like "friendly" to how you actually write.</p></div>`,
        question: {
          text: "The draft reads stiff and corporate, but you're a laid-back personal trainer. What's the most reliable fix?",
          options: [
            "Ask again with the exact same prompt and hope it changes",
            "Tell Lovable the tone you want and paste a sample of your own casual writing to match",
            "Manually rewrite every word yourself before trying anything else",
          ],
          correctIndex: 1,
          explanation:
            "Naming the tone and giving a real sample lets Lovable match your voice directly. Repeating the same prompt won't change the style, and rewriting everything by hand skips the tool's biggest strength.",
        },
      },
      {
        html: `<h3>Editing AI copy for accuracy</h3><p>Treat every generated line as a claim to verify. Read the draft with one question: <strong>"Is this actually true about me?"</strong></p><ul><li>Numbers and dates — did it invent stats?</li><li>Promises — can you really deliver "24-hour turnaround"?</li><li>Names and details — spelled right, real?</li></ul><p>You can fix copy the same way you build: describe the change. "Change '15 years' to '3 years' and remove the line about awards." Small, specific edits keep the good parts and correct the rest.</p>`,
        question: {
          text: "Your restaurant's generated blurb says 'family-owned since 1985' — but you opened in 2022. How should you handle it in Lovable?",
          options: [
            "Leave it; older-sounding restaurants seem more trustworthy",
            "Ask Lovable to correct it to your real opening year, or rewrite the line to be accurate",
            "Delete the whole about section to be safe",
          ],
          correctIndex: 1,
          explanation:
            "False history is misleading and easily disproven. Just tell Lovable the true detail and have it fix the line — no need to lose an otherwise good section.",
        },
      },
      {
        html: `<h3>SEO-friendly basics</h3><p>You don't need to be an SEO expert to help people find your site. A few plain-language habits go a long way:</p><ul><li>Use words your customers actually search — "Portland dog groomer," not just "pawfect pals"</li><li>Give each page a clear <strong>title and short description</strong></li><li>Write real headings that describe each section</li></ul><p>You can ask Lovable to "add a clear page title and description for search engines that mentions Portland dog grooming." It'll help set those up.</p>`,
        question: {
          text: "Your bakery's homepage headline is just your brand name in fancy script. A friend can't find you on Google. What's a simple copy improvement?",
          options: [
            "Make the script font bigger",
            "Add plain, searchable words like 'artisan bakery in Austin' to the headline and page description",
            "Remove all text so the page loads faster",
          ],
          correctIndex: 1,
          explanation:
            "Search engines and customers rely on real, descriptive words. Including what people actually search — location plus what you do — makes you findable. A stylish name alone tells Google nothing.",
        },
      },
      {
        html: `<h3>Putting it together</h3><p>A reliable copy workflow with Lovable:</p><ul><li><strong>Draft</strong> — ask for the page, giving real facts</li><li><strong>Voice</strong> — set the tone, paste a sample</li><li><strong>Verify</strong> — check every claim for truth</li><li><strong>Polish</strong> — small described edits, plus searchable words</li></ul><p>The AI gets you 80% of the way in seconds; your job is the 20% that makes it true and unmistakably yours.</p><h3>Where you're headed</h3><p>Your site now looks good and reads well. Time to get it in front of people. Next: <strong>Publishing and Sharing</strong> — going live, custom domains, and gathering feedback safely.</p>`,
        question: {
          text: "You've got Lovable's draft for a freelancer services page. What's the best order to finish it?",
          options: [
            "Publish immediately, then never look at the copy again",
            "Set the tone, correct every factual claim, then add searchable words — before publishing",
            "Only change the font colors and leave the words untouched",
          ],
          correctIndex: 1,
          explanation:
            "The value is in the edit: match your voice, verify facts, and make it findable. Publishing an unverified draft risks false claims, and styling alone doesn't fix the words.",
        },
      },
    ],
  },
  {
    title: "Publishing and Sharing",
    summary: "Going live, custom domains, feedback links, safe updates, and checking mobile first",
    estimatedMinutes: 12,
    content: `<p>Building is only worth it once people can see your work. Lovable makes going live a <strong>one-click</strong> affair — but there's a smart order to it: check your site, share it for feedback, then connect a real domain. This lesson covers publishing without nasty surprises.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "Get a Lovable project ready to go live: click through every page and link, fix anything broken, then publish it and copy the share link. Send that link to a friend or colleague and ask them to try it on their phone and tell you what's confusing.",
      note: "Always test on a phone and get one outside opinion before sharing widely — fresh eyes catch problems you've stopped seeing.",
    },
    steps: [
      {
        html: `<h3>One-click publish</h3><p>When your site is ready, Lovable can <strong>publish it in a click</strong>, giving it a live web address you can share immediately. No servers, no uploads, no technical setup.</p><p>Publishing creates a live version of what you've built. Importantly, your live site and your <em>working draft</em> are separate — you can keep editing without your changes instantly appearing to visitors, until you publish again.</p>`,
        question: {
          text: "You publish your portfolio, then start experimenting with a bold new layout you're unsure about. What's true about your live site meanwhile?",
          options: [
            "Every edit you make is instantly live for all visitors to see",
            "Your published site stays as it was until you choose to publish again",
            "Editing automatically takes your live site offline",
          ],
          correctIndex: 1,
          explanation:
            "The published version stays put while you experiment in your draft. You control when new changes go live by publishing again — so risky experiments don't reach visitors prematurely.",
        },
      },
      {
        html: `<h3>Check mobile before you share</h3><p>Most people will open your link on a phone. A site that looks great on your laptop can break on a small screen — squished text, cut-off buttons, images out of place.</p><p>Before sharing anything, preview the <strong>mobile view</strong>. If something's off, just describe the fix: "Make the hero text smaller on mobile and stack the columns." Catching this first saves you from sending a broken-looking link.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Preview mobile <em>before</em> desktop, not after. If it works on a phone, it almost always works on a bigger screen — but the reverse often isn't true.</p></div>`,
        question: {
          text: "You're about to text your event page link to 50 guests. You've only viewed it on your laptop. What should you do first?",
          options: [
            "Send it — laptops and phones show sites identically",
            "Check the mobile view and fix any layout issues, since most guests will open it on a phone",
            "Ask each guest to use a computer",
          ],
          correctIndex: 1,
          explanation:
            "Most visitors are on phones, and layouts can break on small screens. A quick mobile check (and fix) before sharing prevents 50 people from seeing a broken page.",
        },
      },
      {
        html: `<h3>Share preview links for feedback</h3><p>Before the big launch, you can share a <strong>link for feedback</strong>. Send it to a colleague, a client, or a friend and ask what's confusing or missing.</p><p>This is perfect for everyday work:</p><ul><li>A client approving their landing page before it's public</li><li>A teammate reviewing an internal tool</li><li>A friend catching a typo you've read past ten times</li></ul><p>Feedback on a real, clickable page beats describing your plans — people react to what they can actually see.</p>`,
        question: {
          text: "A client hired you to build their booking page. Before pointing their business address at it, what's the smart step?",
          options: [
            "Connect their domain immediately and let them discover it live",
            "Share a preview link so they can review and approve it first",
            "Keep it entirely private until you personally think it's perfect",
          ],
          correctIndex: 1,
          explanation:
            "A preview link lets the client react to the real page and approve it before it's public. That prevents surprises on their live domain and catches issues while they're easy to fix.",
        },
      },
      {
        html: `<h3>Custom domains</h3><p>Your first live address works, but for a professional look you'll want a <strong>custom domain</strong> — your own <em>yourname.com</em> instead of a generic address. Lovable supports connecting a domain you own.</p><p>Two common paths:</p><ul><li>You already own a domain → connect it to your Lovable site</li><li>You need one → buy it from a domain provider, then connect it</li></ul><p>A custom domain makes a resume site, freelancer page, or small business look established and trustworthy.</p>`,
        question: {
          text: "Your freelance design site is live at a generic Lovable address, but you want it to look professional on your business cards. What do you set up?",
          options: [
            "Nothing — the generic address looks just as professional",
            "Connect a custom domain like yourname.com to the published site",
            "Rebuild the entire site from scratch on a different platform",
          ],
          correctIndex: 1,
          explanation:
            "A custom domain is what makes a site look established and card-worthy. You can connect one to your existing published site — no rebuild needed.",
        },
      },
      {
        html: `<h3>Updating a live site safely</h3><p>Your site isn't frozen once it's live — you'll update prices, add sections, fix typos. The safe rhythm:</p><ul><li>Make changes in your working draft</li><li><strong>Preview</strong> them, including on mobile</li><li>Publish again when you're happy</li></ul><p>Because editing doesn't instantly change the live site, you're free to work in progress without visitors seeing a half-finished update. Big change? Preview and get a second look before you publish.</p>`,
        question: {
          text: "Your live booking page needs updated pricing, but you're mid-edit and not done. A customer visits right now. What do they see?",
          options: [
            "Your half-finished edits, because changes are always instant",
            "The last published version — your in-progress edits aren't live until you publish",
            "An error page while you edit",
          ],
          correctIndex: 1,
          explanation:
            "Editing happens in your draft; visitors keep seeing the last published version until you publish again. That's what makes updating a live site safe.",
        },
      },
      {
        html: `<h3>Remixing and sharing your work</h3><p>Lovable also lets you <strong>remix</strong> — duplicate a project as a starting point for a new one. It's a real time-saver for repeatable work:</p><ul><li>Made one event RSVP page? Remix it for the next event.</li><li>Built a client landing page you love? Remix it as a template for the next client.</li></ul><p>You can also share projects so others can view or build on them. Remixing turns a one-off build into a reusable head start.</p><h3>Where you're headed</h3><p>You can now build, connect, write, publish, and share. In the final lesson — <strong>Real-World Applications & Tips</strong> — we'll tour everyday projects you can ship fast and the habits that make Lovable users effective.</p>`,
        question: {
          text: "You run monthly meetups and rebuild a similar RSVP page each time. What's the efficient Lovable approach?",
          options: [
            "Start every month completely from scratch",
            "Remix last month's page as a starting point and just update the details",
            "Use one unchanged page and never update the date",
          ],
          correctIndex: 1,
          explanation:
            "Remixing duplicates your proven page so you only tweak what's new. It's far faster than rebuilding, and unlike reusing one static page, each event gets its own correct details.",
        },
      },
    ],
  },
  {
    title: "Real-World Applications & Tips",
    summary: "A gallery of everyday builds, the habits of effective users, and when to reach for something else",
    estimatedMinutes: 14,
    content: `<p>You've learned the whole toolkit — now let's make it real. This finale tours <strong>everyday projects</strong> you can ship fast, the <strong>habits</strong> that separate smooth builds from frustrating ones, and the honest cases where Lovable isn't the right tool. Then we'll wrap up your Lovable journey.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "Pick one small, genuinely useful project you could ship this week — an event RSVP page, a simple portfolio, a booking page for [my service] — and build a first version in Lovable using the habits from this course: start simple, one change at a time, test as you go. Aim to have something shareable by the end of the session.",
      note: "Choose something small and real over something ambitious — finishing and shipping one modest project teaches more than half-building a big one.",
    },
    steps: [
      {
        html: `<h3>The daily-use gallery</h3><p>Lovable shines on small, real projects that used to mean hiring someone or waiting weeks:</p><ul><li><strong>A waitlist page</strong> for a product idea — built in an afternoon</li><li><strong>A client proposal microsite</strong> instead of another slide deck</li><li><strong>An internal team tool</strong> — a shared tracker or request form</li><li><strong>An event RSVP page</strong> for a workshop or party</li></ul><p>None require a developer. Each starts with describing what you need and refining from the live preview.</p>`,
        question: {
          text: "You have a new product idea and want to gauge interest before building anything. What's a fast, fitting first project?",
          options: [
            "A full e-commerce store with inventory and shipping",
            "A simple waitlist page that collects interested emails",
            "A complex internal analytics dashboard",
          ],
          correctIndex: 1,
          explanation:
            "To test interest, you just need to capture sign-ups — a waitlist page does exactly that and can go live in an afternoon. A full store or dashboard is far more than the goal requires.",
        },
      },
      {
        html: `<h3>Habit 1: small prompts, one change at a time</h3><p>The most effective users don't ask for everything at once. Instead of "build my whole business site with shop, blog, booking, and newsletter," they build in <strong>small steps</strong>:</p><ul><li>Start with the core page</li><li>Add one feature, check it works</li><li>Then add the next</li></ul><p>Small changes are easier to review, easier to fix, and let you catch problems before they pile up.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>If a single prompt tries to change five things and one comes out wrong, you can't tell which instruction caused it. One change per step keeps cause and effect clear.</p></div>`,
        question: {
          text: "You want a portfolio with a gallery, contact form, blog, and store. What's the effective way to build it?",
          options: [
            "Ask for all four in one giant prompt and accept whatever comes back",
            "Build the core portfolio first, then add each feature step by step, checking as you go",
            "Build four separate sites and link them awkwardly",
          ],
          correctIndex: 1,
          explanation:
            "Building incrementally lets you verify each piece and isolate problems. One massive prompt makes errors hard to trace and fixes harder to apply.",
        },
      },
      {
        html: `<h3>Habit 2: review every change</h3><p>AI is fast but not infallible. After each change, <strong>look at the live preview</strong> before moving on. Did it do what you asked? Did it accidentally alter something else?</p><p>For targeted tweaks, remember you can <strong>select the exact element</strong> you mean and describe the change, so Lovable edits that piece rather than guessing. Reviewing as you go means you never build ten steps on top of a mistake made at step two.</p>`,
        question: {
          text: "You asked Lovable to change your header color, and it looks right — but you haven't scrolled through the rest of the page. What's the wise habit?",
          options: [
            "Move on immediately; if the header's right, everything's right",
            "Quickly review the rest of the page to confirm nothing else shifted unexpectedly",
            "Undo everything and start the page over to be safe",
          ],
          correctIndex: 1,
          explanation:
            "A quick review catches unintended side effects while they're easy to fix. Assuming everything's fine risks building on a hidden problem; starting over is overkill.",
        },
      },
      {
        html: `<h3>Habit 3: keep a copy doc</h3><p>Your real facts — prices, service descriptions, bios, contact details — live better in a <strong>separate document</strong> than only inside your site. Effective users keep a simple copy doc so they can:</p><ul><li>Paste accurate details into prompts quickly</li><li>Reuse the same text across pages and projects</li><li>Update once and re-apply everywhere</li></ul><p>It also means your words aren't trapped in one place — handy when you remix or build something new.</p>`,
        question: {
          text: "You're building your third client site this month and keep retyping your standard service descriptions from memory. What habit would help?",
          options: [
            "Keep a copy doc of your standard text to paste in, ensuring consistency and speed",
            "Rewrite them differently each time from scratch",
            "Ask Lovable to remember them across all your separate projects",
          ],
          correctIndex: 0,
          explanation:
            "A reusable copy doc saves time and keeps your details consistent and accurate. Retyping from memory invites errors, and you shouldn't rely on the tool to carry your facts between unrelated projects.",
        },
      },
      {
        html: `<h3>When Lovable is the wrong tool</h3><p>Part of mastery is knowing the limits. Lovable is fantastic for web apps and sites, but some jobs fit other tools better:</p><ul><li>A <strong>native mobile app</strong> in the app stores — that's a different kind of build</li><li>A <strong>quick static flyer or graphic</strong> — a design tool may be faster</li><li>Highly <strong>specialized software</strong> with complex custom logic — may need a developer</li><li>Just <strong>writing a document</strong> — a word processor is simpler</li></ul><p>Reaching for the right tool isn't giving up — it's the mark of someone who understands each tool's strengths.</p>`,
        question: {
          text: "A colleague asks you to make a single printable one-page flyer for the office bulletin board. Is Lovable the best fit?",
          options: [
            "Yes — always use Lovable for everything now",
            "Not really — a design tool is likely faster for a simple printable flyer; Lovable shines for web apps and sites",
            "Yes, but only after connecting Stripe",
          ],
          correctIndex: 1,
          explanation:
            "Lovable's strength is interactive web apps and sites. A one-off printable flyer is a design task better suited to a graphics tool. Choosing the right tool is a sign of skill, not defeat.",
        },
      },
      {
        html: `<h3>You're ready — your Lovable journey</h3><p>Look how far you've come. You can now:</p><ul><li><strong>Build</strong> full sites and apps by describing them, refining from the live preview</li><li><strong>Target edits</strong> precisely and import designs from Figma or screenshots</li><li><strong>Connect</strong> Supabase, Stripe, and GitHub — only when you truly need them</li><li><strong>Write</strong> accurate, on-voice copy that people can find</li><li><strong>Publish, share, and remix</strong> with confidence</li></ul><p>Most importantly, you've built the <em>habits</em> of an effective creator: small steps, careful review, honest copy, and the wisdom to pick the right tool for the job.</p><p>The internet used to be built by specialists. Now, when you have an idea — a waitlist, a client site, a team tool, an event page — you can bring it to life yourself, this afternoon. Go build something. 🚀</p>`,
        question: {
          text: "You finish this course with an idea for a simple RSVP page for a workshop next week. What's the mindset you've built?",
          options: [
            "Wait months and hire a developer before attempting anything",
            "Start small in Lovable today — describe it, preview, refine, check mobile, and publish when ready",
            "Give up unless you learn to code first",
          ],
          correctIndex: 1,
          explanation:
            "That's the whole point: you can now bring everyday ideas to life yourself. Start small, iterate from the preview, review your work, and ship — no developer or coding required.",
        },
      },
    ],
  },
];
