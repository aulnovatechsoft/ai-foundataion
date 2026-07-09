import type { UnitSeed } from "./types";

export const LOVABLE_LESSONS_A: UnitSeed["lessons"] = [
  {
    title: "Intro to Lovable",
    summary: "What Lovable is, who it's for, and the mindset shift from asking for a website to owning one",
    estimatedMinutes: 14,
    content: `<p>Lovable doesn't just help you write a website — it builds one for you. Before any prompt or setting, the thing that decides whether Lovable works for you is a shift in how you think: you're not learning to code, you're describing what you want and directing the result.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "Describe, in plain English, a simple one-page website for [my side project or small business]: what it's for, who it's for, the sections I want (a hero, what we offer, and a contact section), and the overall vibe. Let Lovable build a first version, then look at what it made.",
      note: "Focus on describing what you want, not how to build it — treat the first result as a draft you'll direct into shape.",
    },
    steps: [
      {
        html: `<h3>Describe it, and it gets built</h3><p>Lovable is an <strong>AI app builder</strong>. You type what you want in plain English — "a booking page for my yoga studio" — and it generates a real, working website or web app for you.</p><p>There's no code to write by hand and no drag-and-drop grid to fight with. You <strong>have a conversation</strong>, and Lovable turns that conversation into something you can open in a browser.</p><h3>Why this matters for you</h3><p>If you've ever wanted a simple site or tool but stalled because you "aren't technical," this is the shift: the skill isn't coding, it's <strong>explaining what you need clearly</strong>.</p>`,
        question: {
          text: "A freelance photographer says, \"I can't build a portfolio because I don't know how to code.\" How does Lovable change that assumption?",
          options: [
            "It teaches them to become a professional developer first",
            "It lets them describe the portfolio they want in plain English and builds it for them",
            "It only works if they already own website templates",
          ],
          correctIndex: 1,
          explanation:
            "Lovable's whole point is removing the coding barrier. The photographer describes what they want and Lovable generates it — no coding course required first.",
        },
      },
      {
        html: `<h3>What daily problems it solves</h3><p>Lovable shines for the everyday things regular professionals actually need built:</p><ul><li>A <strong>personal portfolio</strong> or resume site to show your work</li><li>A <strong>small business site</strong> — a bakery, a salon, a consultancy</li><li>An <strong>event invite or RSVP page</strong> for a workshop or launch</li><li>A <strong>waitlist page</strong> to collect early sign-ups</li><li>A simple <strong>internal team tool</strong> or client dashboard</li></ul><p>These are the projects that used to mean hiring someone or wrestling with a template. Now you can describe them and iterate the same afternoon.</p>`,
        question: {
          text: "You run a small bakery and want a page where locals can see your menu and pre-order for the weekend. Is this a good fit for Lovable?",
          options: [
            "No — Lovable only builds large enterprise software",
            "Yes — a small business site with a menu and ordering is exactly the everyday use it's built for",
            "No — this kind of page can only be made with a hired developer",
          ],
          correctIndex: 1,
          explanation:
            "A bakery menu and pre-order page is a classic everyday small-business use. Describing it to Lovable and refining it is far faster than starting from scratch.",
        },
      },
      {
        html: `<h3>Lovable vs. hiring a developer or using a template</h3><p>You have three common paths to a website. Each has a personality:</p><ul><li><strong>Hiring a developer</strong> — powerful and custom, but slower and more expensive, and every change means another request</li><li><strong>Using a template</strong> — cheap and fast, but you bend your idea to fit someone else's layout</li><li><strong>Lovable</strong> — you describe your own idea and get a custom result you can keep changing yourself</li></ul><p>The big unlock is <strong>control</strong>: you don't wait on anyone, and you're not boxed into a fixed template.</p>`,
        question: {
          text: "You expect to tweak your event page many times in the week before the event as details change. Why might Lovable beat hiring a developer here?",
          options: [
            "Because a developer can never make an event page",
            "Because you can describe each change yourself and see it immediately, without waiting on someone else's schedule",
            "Because templates always look more professional than custom work",
          ],
          correctIndex: 1,
          explanation:
            "Frequent last-minute changes are painful when every edit is a request to someone else. With Lovable you make changes yourself, on your own timeline.",
        },
      },
      {
        html: `<h3>How credits and plans work</h3><p>Lovable runs on a <strong>credits-based model</strong>. Building and changing your project uses credits, and your plan sets how many you get over time.</p><p>Practically, that means <strong>each request has a cost</strong>. A well-thought-out prompt that gets you close in one go is more efficient than ten vague ones that each need fixing.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Think before you type. Bundling a clear, complete idea into one request usually costs fewer credits than firing off many half-formed ones and cleaning up after each.</p></div>`,
        question: {
          text: "You have a clear picture of the three sections your landing page needs. What's the more credit-efficient approach?",
          options: [
            "Send one vague request, then a dozen tiny corrections afterward",
            "Describe the page and its three sections clearly in a well-planned request to get close on the first try",
            "Avoid describing anything specific so Lovable has more freedom",
          ],
          correctIndex: 1,
          explanation:
            "Because building uses credits, a clear, complete request gets you closer up front and wastes fewer credits than many scattered fixes.",
        },
      },
      {
        html: `<h3>The mindset: you're the product owner</h3><p>The people who get the most from Lovable stop thinking like a customer filling out a form and start thinking like a <strong>product owner</strong>.</p><p>A product owner knows <strong>who the site is for, what it should do, and what "done" looks like</strong>. They make decisions and give direction. Lovable is your builder — but you own the vision.</p><ul><li>❌ "Make me a nice website" — Lovable has to guess almost everything</li><li>✅ "A one-page site for my freelance copywriting service, with an intro, three services, and a contact button" — now you're directing</li></ul>`,
        question: {
          text: "Which request reflects the product-owner mindset that gets better results from Lovable?",
          options: [
            '"Build something cool for me"',
            '"A resume site for a marketing manager, with a short bio, work history, and a link to download my CV"',
            '"Just make it professional"',
          ],
          correctIndex: 1,
          explanation:
            "The strong request names the audience, purpose, and key sections. Vague requests force Lovable to guess, which is where generic results come from.",
        },
      },
      {
        html: `<h3>Where you're headed</h3><p>You now know what Lovable is, the daily problems it solves, how it compares to developers and templates, how credits work, and the product-owner mindset that drives good results.</p><p>Next up: <strong>Starting Your First Project</strong> — how to write that all-important first prompt, start simple and grow, use the live preview, and read what the AI actually built for you.</p>`,
        question: {
          text: "Having learned the basics, what's the healthiest expectation to carry into your first build?",
          options: [
            "The first result will be perfect and final, so plan no changes",
            "The first result is a strong starting point you'll direct and refine as the owner",
            "You'll need to learn to code before it works",
          ],
          correctIndex: 1,
          explanation:
            "Lovable gives you a fast starting point, and your job as owner is to direct and refine it — no coding required, and no expectation of perfection on run one.",
        },
      },
    ],
  },
  {
    title: "Starting Your First Project",
    summary: "Writing a strong first prompt, starting simple, using the live preview, and reading what the AI built",
    estimatedMinutes: 14,
    content: `<p>A great Lovable project almost always starts with a well-built first prompt. In this lesson you'll learn what to include, why starting simple wins, and how to actually read the result in the live preview instead of just glancing at it.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "Write one strong first prompt to start a project: name the purpose, the audience, the main sections, and the style — but keep the first version simple. For example: 'Build a landing page for my freelance [service]. Audience: small business owners. Sections: hero with a headline and call-to-action, three services, a short about, and a contact form. Clean and modern.' Then open the live preview and actually click through it.",
      note: "Start simple and check the preview properly — you'll build faster by adding features one at a time rather than asking for everything at once.",
    },
    steps: [
      {
        html: `<h3>Three things a first prompt needs</h3><p>Nearly every strong first prompt answers three questions:</p><ul><li><strong>Purpose</strong> — what is this site or tool <em>for</em>?</li><li><strong>Audience</strong> — who is going to use it?</li><li><strong>Key sections</strong> — what main parts should it have?</li></ul><p>Miss one and Lovable fills the gap with a guess. Include all three and you're steering the whole build.</p>`,
        question: {
          text: 'A user types: "Make me a website." Which of the three essentials are missing?',
          options: [
            "Nothing — that's a complete first prompt",
            "All three — purpose, audience, and key sections are absent",
            "Only the colour scheme is missing",
          ],
          correctIndex: 1,
          explanation:
            '"Make me a website" names no purpose, no audience, and no sections. Lovable has to guess all of it, so the result will be generic.',
        },
      },
      {
        html: `<h3>Everyday examples of a good first prompt</h3><p>See how the recipe looks for real, daily projects:</p><ul><li><strong>Portfolio:</strong> "A portfolio site for a freelance illustrator, for potential clients, with a gallery, an about section, and a contact form."</li><li><strong>Bakery:</strong> "A site for a neighbourhood bakery, for local customers, with a menu, opening hours, and a pre-order button."</li><li><strong>Event invite:</strong> "An invite page for a product launch party, for invited guests, with the date, location, and an RSVP form."</li></ul><p>Notice the pattern: <strong>purpose + audience + key sections</strong> every time.</p>`,
        question: {
          text: "You're planning a workshop and want an invite page. Which first prompt follows the recipe best?",
          options: [
            '"Event page, make it look good"',
            '"An invite page for my weekend photography workshop, for people who signed up locally, with the schedule, the venue, and an RSVP form"',
            '"Something about a workshop"',
          ],
          correctIndex: 1,
          explanation:
            "The middle option names purpose (workshop invite), audience (local sign-ups), and key sections (schedule, venue, RSVP) — exactly the three essentials.",
        },
      },
      {
        html: `<h3>Start simple, then grow</h3><p>It's tempting to describe your dream site with ten features in the first message. Resist it. A <strong>simple, clear first version</strong> is easier for Lovable to get right — and easier for you to review.</p><p>Get the core working first: the main page and its key sections. Then add features one layer at a time: a contact form, then a gallery, then a booking flow.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Think of your first prompt as version one, not the finished product. Building in small steps makes it far easier to spot what changed and to fix a single piece when something's off.</p></div>`,
        question: {
          text: "You want a client dashboard with logins, charts, file uploads, and messaging. What's the smartest way to begin?",
          options: [
            "Ask for every feature at once in one giant first prompt",
            "Start with the core dashboard and main layout, then add features like uploads and messaging one at a time",
            "Skip planning and add features in random order until it looks right",
          ],
          correctIndex: 1,
          explanation:
            "Starting simple gets a solid foundation you can actually review, then layering features one at a time keeps each change easy to check and fix.",
        },
      },
      {
        html: `<h3>The live preview is your set</h3><p>As Lovable builds, it shows a <strong>live preview</strong> — a working version of your site you can see and click right away. This is where you direct, not just admire.</p><p>Use it actively:</p><ul><li>Click buttons and links to see what actually works</li><li>Check that the sections you asked for are present</li><li>Read the text Lovable wrote — it's placeholder-style until you refine it</li></ul><p>The preview turns feedback into a fast loop: see it, judge it, describe the next change.</p>`,
        question: {
          text: "Your bakery site's preview loads and looks nice at a glance. What's the best way to use the preview before moving on?",
          options: [
            "Assume it's fine because the first screen looks good",
            "Click through the menu and pre-order button to confirm the sections you asked for actually exist and work",
            "Ignore the preview and publish immediately",
          ],
          correctIndex: 1,
          explanation:
            "A nice-looking first screen can still be missing pieces. Actively clicking through confirms the sections you asked for are really there and functioning.",
        },
      },
      {
        html: `<h3>Reading what the AI built</h3><p>Before you ask for changes, take a moment to <strong>read the result carefully</strong>. Lovable makes reasonable choices, but it's guessing about anything you didn't specify.</p><p>Ask yourself:</p><ul><li>Did it include every section I asked for?</li><li>Did it <em>add</em> something I didn't ask for?</li><li>Is the placeholder text and imagery roughly right for my audience?</li></ul><p>Naming the gap precisely ("the contact form is missing an email field") gives you a much better next request than a vague "fix it."</p>`,
        question: {
          text: "You asked for a portfolio with a gallery, about, and contact section, but the preview has no contact section. What's the best next move?",
          options: [
            "Start a brand-new project from scratch",
            "Tell Lovable specifically to add the missing contact section with the fields you need",
            "Just accept the site as-is without the contact section",
          ],
          correctIndex: 1,
          explanation:
            "You've diagnosed exactly what's missing, so a precise follow-up request — add the contact section — is faster and cheaper than rebuilding everything.",
        },
      },
      {
        html: `<h3>Wrapping up</h3><p>You can now write a first prompt with purpose, audience, and key sections, start simple and grow, use the live preview actively, and read what the AI built with a critical eye.</p><p>Next up: <strong>Editing with Chat</strong> — how to describe changes conversationally, why one change at a time wins, and how to target a specific element you want to tweak.</p>`,
        question: {
          text: "Your first version is close but not perfect. Based on this lesson, what's the right attitude heading into editing?",
          options: [
            "A close first version is a failure and should be scrapped",
            "A close first version is exactly the point — you'll refine it through chat from here",
            "You should never change the first version once it's built",
          ],
          correctIndex: 1,
          explanation:
            "Starting simple means the first version is meant to be refined. Editing through chat is the normal next step, not a sign something went wrong.",
        },
      },
    ],
  },
  {
    title: "Editing with Chat",
    summary: "Describing changes conversationally, one at a time, being specific, and using targeted element edits",
    estimatedMinutes: 13,
    content: `<p>Editing in Lovable is a conversation. You describe the change you want and it updates your project. This lesson is about doing that well: being specific, changing one thing at a time, targeting the right spot, and treating undo and iteration as a normal part of the work.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "Open an existing Lovable project and make a series of small, specific edits one at a time: first 'make the hero headline larger and change the button colour to match my brand,' then review it, then 'move the contact form above the footer.' Change one thing per message and check the preview after each.",
      note: "One clear change at a time makes it easy to see what worked — if an edit misses, undo and rephrase rather than piling on more requests.",
    },
    steps: [
      {
        html: `<h3>You edit by describing</h3><p>To change your site, you don't hunt through menus — you <strong>tell Lovable what to change</strong>. "Move the contact button to the top" or "add a testimonials section below the gallery" and it updates.</p><p>This is the same conversation that built the site, continued. The skill is describing the change clearly enough that Lovable knows exactly what you mean.</p>`,
        question: {
          text: "You want your bakery's opening hours to appear near the top of the page instead of the footer. How do you make that change in Lovable?",
          options: [
            "Open a code editor and rewrite the layout by hand",
            "Describe the change in chat — e.g. \"move the opening hours to just below the menu\"",
            "Delete the site and rebuild it from scratch",
          ],
          correctIndex: 1,
          explanation:
            "Editing in Lovable means describing what you want. A clear instruction to move the hours is all it takes — no code and no rebuild.",
        },
      },
      {
        html: `<h3>Specific beats "nicer"</h3><p>The single biggest upgrade to your edits is <strong>specificity</strong>. Vague requests make Lovable guess; specific ones give it a target.</p><ul><li>❌ "Make it nicer" — nicer how? Lovable has to guess</li><li>✅ "Make the header background dark blue and the title text white"</li><li>❌ "Fix the spacing" → ✅ "Add more space between the three service cards"</li></ul><p>Describe <strong>what</strong> to change and <strong>how</strong> you want it to end up.</p>`,
        question: {
          text: "You think your portfolio's top section feels cramped. Which request will get you the result you want most reliably?",
          options: [
            '"Make the top look better"',
            '"Add more spacing around the headline and center it, with a larger font for the title"',
            '"Improve it"',
          ],
          correctIndex: 1,
          explanation:
            "The specific request names what to change and how it should end up. \"Better\" and \"improve it\" leave Lovable guessing at what you actually dislike.",
        },
      },
      {
        html: `<h3>One change at a time</h3><p>When several things need fixing, resist bundling them into one sprawling instruction. Make changes <strong>one at a time</strong> so you can see exactly what each one did.</p><p>Changing one thing per request tells you precisely what worked — and makes it easy to undo just the change that didn't.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>If a request changes several things at once and something looks off, it's hard to tell which part caused it. Small, single-purpose edits keep you in control of the result.</p></div>`,
        question: {
          text: "Your event page needs a new colour, a reordered section, and a bigger RSVP button. What's the best way to make these edits?",
          options: [
            "Ask for all three in one long message and hope it all lands",
            "Make each change as its own request so you can check the result of each step",
            "Change nothing and hope it looks fine on the day",
          ],
          correctIndex: 1,
          explanation:
            "One change at a time lets you confirm each result and isolate any problem. Bundling everything makes it hard to tell which edit caused an issue.",
        },
      },
      {
        html: `<h3>Targeted edits with select-element</h3><p>Sometimes you want to change <strong>one specific thing</strong> on the page — this exact button, that heading. Lovable lets you <strong>select an element</strong> and then describe the change, so it knows precisely what you mean.</p><p>This is perfect when a page has several similar items:</p><ul><li>Three buttons, but you only want to recolour one</li><li>Several headings, but only one should be larger</li><li>One image out of a gallery that needs replacing</li></ul><p>Selecting first removes the ambiguity of "which one?"</p>`,
        question: {
          text: "Your pricing page has three plan cards and you want only the middle one highlighted. What's the cleanest way to do that?",
          options: [
            "Describe it vaguely and hope Lovable picks the right card",
            "Select the middle card, then describe the highlight change so Lovable targets exactly that one",
            "Recolour all three cards and then undo two of them",
          ],
          correctIndex: 1,
          explanation:
            "Select-element removes the \"which one?\" ambiguity. Targeting the middle card directly is more reliable than a vague request across three similar cards.",
        },
      },
      {
        html: `<h3>Undo and iterate as normal workflow</h3><p>Not every edit will land the way you pictured — and that's completely fine. Iteration <em>is</em> the workflow, not a sign of failure.</p><p>When a change misses:</p><ul><li><strong>Undo</strong> it and try describing it differently</li><li>Or send a follow-up that adjusts what went wrong</li></ul><p>Because you're changing one thing at a time, undoing a single miss is easy and doesn't cost you the good work you've already done.</p>`,
        question: {
          text: "You asked to restyle the header and the new version looks worse than before. What's the sensible response?",
          options: [
            "Conclude Lovable can't do it and abandon the project",
            "Undo the change and describe the header restyle differently, treating it as a normal iteration",
            "Keep the worse version because undoing feels like wasted effort",
          ],
          correctIndex: 1,
          explanation:
            "Iteration is expected. Undoing a miss and re-describing it is the normal loop — it protects your earlier work and gets you to the look you want.",
        },
      },
      {
        html: `<h3>Fixing things the AI got wrong</h3><p>Sometimes Lovable misreads a request or invents a detail you didn't ask for. Don't rewrite the whole page — <strong>diagnose, then correct just that piece</strong>.</p><ul><li>Added a section you didn't want? Ask it to remove that section.</li><li>Used the wrong wording? Give it the exact text you want instead.</li><li>Placed something in the wrong spot? Tell it where it should go.</li></ul><p>A precise correction preserves everything that's already right.</p><h3>Where you're headed</h3><p>You can now edit by describing changes clearly, one at a time, with targeted element edits and a comfortable undo-and-iterate loop. Next up: <strong>Working with Design Imports</strong> — starting from a Figma design or a screenshot when you already have a look in mind.</p>`,
        question: {
          text: "Lovable added a newsletter signup box you never asked for, but everything else looks great. What's the best fix?",
          options: [
            "Rebuild the entire page to remove one box",
            "Ask Lovable to remove just the newsletter signup box, leaving the rest as-is",
            "Leave the unwanted box because changing it might break the page",
          ],
          correctIndex: 1,
          explanation:
            "A precise, targeted correction removes the unwanted box while keeping everything that already works — far better than rebuilding the whole page.",
        },
      },
    ],
  },
  {
    title: "Working with Design Imports",
    summary: "Starting from Figma or a screenshot, matching a brand, and refining imported designs with chat",
    estimatedMinutes: 13,
    content: `<p>Sometimes you don't start from a blank prompt — you already have a look in mind. Lovable can use a <strong>Figma design or a screenshot</strong> as a starting point, so your build matches an existing brand or layout. This lesson covers when to import, when to describe, and how to refine what comes in.</p>`,
    tryIt: {
      tool: "Lovable",
      url: "https://lovable.dev",
      prompt:
        "Take a screenshot of a webpage or design whose layout you like (or one of your own brand assets), upload it to Lovable, and ask it to build a page that matches that style for [my project]. Then refine what comes in — 'keep this layout but use my colours and swap the headline to say ___.'",
      note: "Importing gets you close fast, but expect to refine — use it as a starting point and describe the adjustments to make it truly yours.",
    },
    steps: [
      {
        html: `<h3>Bringing in a design</h3><p>Instead of describing every visual detail, you can hand Lovable a <strong>reference to work from</strong>:</p><ul><li>A <strong>Figma design</strong> — a layout a designer has already prepared</li><li>A <strong>screenshot</strong> — an image of a page or look you want to match</li></ul><p>Lovable uses that as a starting point and builds toward it, saving you from describing colours, spacing, and layout word by word.</p>`,
        question: {
          text: "A designer already gave you a polished Figma layout for your consultancy's landing page. What's the most efficient way to start in Lovable?",
          options: [
            "Ignore the Figma file and describe the whole layout in words from memory",
            "Import the Figma design as the starting point so the build matches what's already been designed",
            "Recreate the design pixel by pixel yourself before touching Lovable",
          ],
          correctIndex: 1,
          explanation:
            "When a design already exists, importing it is faster and more faithful than trying to describe every visual detail from scratch.",
        },
      },
      {
        html: `<h3>Matching an existing brand look</h3><p>Design imports are especially handy when you need to <strong>match a brand you already have</strong> — your company colours, fonts, and style.</p><p>If your business already has a website, deck, or brand kit, a screenshot gives Lovable a concrete visual target so the new page feels like it belongs with everything else you've made.</p>`,
        question: {
          text: "Your bakery already has a printed menu with a specific colour scheme and logo style, and you want the site to feel consistent with it. What helps most?",
          options: [
            "Describe the colours vaguely as \"warm and cozy\" and hope for a match",
            "Give Lovable a screenshot of the existing menu so it can match the brand's colours and style",
            "Use a completely different look so the site stands out from the menu",
          ],
          correctIndex: 1,
          explanation:
            "A screenshot gives Lovable a concrete visual target, making a brand match far more reliable than a vague description like \"warm and cozy.\"",
        },
      },
      {
        html: `<h3>When to import vs. when to describe</h3><p>Importing isn't always the right call. Use judgment:</p><ul><li><strong>Import</strong> when you already have a specific design or brand look to match</li><li><strong>Describe</strong> when you don't have a reference and want Lovable to propose a look</li></ul><p>If you have no design yet, forcing a random screenshot can actually box you in. A clear description often gives Lovable more room to produce something clean and fitting.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Import when you're matching something that already exists. Describe when you're exploring a look you haven't pinned down yet — don't import a screenshot that isn't really the style you want.</p></div>`,
        question: {
          text: "You're starting a brand-new personal portfolio with no existing brand or design, and you're open to ideas. What's the better approach?",
          options: [
            "Import a random screenshot of someone else's site even though it's not your style",
            "Describe your purpose, audience, and the vibe you want, and let Lovable propose a look",
            "Refuse to build anything until you hire a designer to make a Figma file first",
          ],
          correctIndex: 1,
          explanation:
            "With no existing design to match, describing what you want gives Lovable room to propose a fitting look. Importing an off-style screenshot would only box you in.",
        },
      },
      {
        html: `<h3>An import is a starting point, not the finish</h3><p>Even a great import is <strong>version one</strong>. Lovable builds toward your reference, but it may not capture every detail perfectly, and your real content still needs to go in.</p><p>Expect to:</p><ul><li>Swap placeholder text for your actual words</li><li>Adjust spacing or colours that came in slightly off</li><li>Add sections the reference didn't include</li></ul><p>Treat the imported result the way you'd treat any first build: review it, then direct the changes.</p>`,
        question: {
          text: "Your Figma import comes in looking close to the design but with placeholder text and one section slightly misaligned. How should you react?",
          options: [
            "Assume the import failed and go back to a blank prompt",
            "Treat it as version one — replace the placeholder text and ask Lovable to fix the misaligned section",
            "Publish it immediately with the placeholder text still in place",
          ],
          correctIndex: 1,
          explanation:
            "An import is a strong starting point, not a finished site. Reviewing and refining it — real text, aligned sections — is the normal next step.",
        },
      },
      {
        html: `<h3>Refining an import with chat</h3><p>Once a design is in, you refine it the exact same way you learned in the last lesson: <strong>describe changes conversationally, one at a time</strong>.</p><ul><li>"Replace the placeholder headline with 'Fresh bread, baked daily'"</li><li>"Widen the gap between the two columns"</li><li>Select a specific button and adjust just that one</li></ul><p>The import gets you the overall look; chat gets you the details right. It's the same conversational workflow, just with a head start on the visuals.</p>`,
        question: {
          text: "After importing a screenshot, you notice the hero heading font is bigger than your brand uses. What's the cleanest fix?",
          options: [
            "Re-import a different screenshot hoping the font changes",
            "Describe the change in chat — e.g. \"make the hero heading smaller to match our brand\" — refining one thing at a time",
            "Leave it wrong because imports can't be edited",
          ],
          correctIndex: 1,
          explanation:
            "Imports are fully editable through chat. A specific, single-purpose request fixes the heading without disturbing the rest of the imported design.",
        },
      },
      {
        html: `<h3>Where you're headed next</h3><p>You can now use a Figma design or screenshot as a starting point, match an existing brand, judge when to import versus describe, and refine an import through chat.</p><p>So far you've built and styled pages. But real sites often need more: a place to store sign-ups, a way to take payments, a custom web address. Next, you'll learn to <strong>connect Lovable with other tools</strong> — adding data, accounts, payments, and publishing — so your project goes from a good-looking page to a working product.</p>`,
        question: {
          text: "Your imported, refined landing page looks great, but you also need it to actually collect waitlist sign-ups. What does that tell you about your next step?",
          options: [
            "The look is all that matters, so the project is finished",
            "A polished page is the visual layer — connecting tools for data and publishing is the natural next step",
            "Collecting sign-ups is impossible with Lovable",
          ],
          correctIndex: 1,
          explanation:
            "Design gets you a great-looking page; collecting sign-ups needs data and integrations. That's exactly what connecting Lovable to other tools covers next.",
        },
      },
    ],
  },
];
