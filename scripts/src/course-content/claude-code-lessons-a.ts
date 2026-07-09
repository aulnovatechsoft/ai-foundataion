import type { UnitSeed } from "./types";

export const CLAUDE_CODE_LESSONS_A: UnitSeed["lessons"] = [
  {
    title: "Build Your First Asset",
    summary: "What Claude Code really is, and building a one-page bakery site from a single description",
    estimatedMinutes: 14,
    content: `<p>Most AI tools hand you words. Claude Code hands you <strong>real files on your own computer</strong> — a working website, an app, a tool you can open and use. In this lesson you'll build your first one from a plain description, no code required.</p>`,
    tryIt: {
      tool: "Claude Code",
      url: "https://claude.com/product/claude-code",
      prompt:
        "Describe a simple one-page website for a small business you know and let Claude Code build it: 'Build a one-page site for [my business] — warm and welcoming, with our name, what we offer, our hours, and a contact section.' Then open the preview and look at what it made.",
      note: "Describe it in plain English and judge the result with your eyes, not the code — the clearer your description, the closer the first version lands.",
    },
    steps: [
      {
        html: `<h3>A builder, not a chatbot</h3><p>You've chatted with AI before: you ask, it replies with text. Claude Code is different. It <strong>builds things</strong> — it creates and edits actual files in a folder on your computer, the same files that become a live website or app.</p><p>You never touch the code yourself. You describe what you want in plain English, Claude writes the files, and you look at the result. Think of it less like texting an assistant and more like <strong>directing a very fast builder</strong> who does the hands-on work for you.</p>`,
        question: {
          text: "A friend says, \"Isn't Claude Code just ChatGPT that gives you code to copy?\" What's the honest correction?",
          options: [
            "They're right — you copy and paste everything it writes yourself",
            "It builds and edits the real files on your computer directly, so there's nothing to copy",
            "It only works for professional programmers, not everyday projects",
          ],
          correctIndex: 1,
          explanation:
            "The whole point is that Claude Code acts on your actual files — you don't copy anything. And it's built for non-coders describing what they want, not just professionals.",
        },
      },
      {
        html: `<h3>Your first project: the bakery</h3><p>Let's make this real. Say you run a small bakery and all you have online is an Instagram bio. You want a proper homepage — something you can send people to.</p><p>You don't need a design, a template, or any technical setup. You just <strong>describe it</strong>: "Build a one-page website for my bakery, Rosewood Bakes. Warm and cozy, with our name, what we sell, our hours, and a way to get in touch."</p><p>That single description is enough for Claude to create a real, viewable page. The clearer your description, the closer the first version lands.</p>`,
        question: {
          text: "You want your first homepage to come out close to what's in your head. Which opening request works best?",
          options: [
            "\"Make me a website.\"",
            "\"Build a one-page site for Rosewood Bakes — warm and cozy, with our name, what we sell, our hours, and a contact section.\"",
            "\"Do something creative, surprise me.\"",
          ],
          correctIndex: 1,
          explanation:
            "Naming the business, the mood, and the sections gives Claude something concrete to build. \"Make me a website\" or \"surprise me\" forces it to guess, and you'll spend longer correcting the guesses.",
        },
      },
      {
        html: `<h3>The rhythm: describe, review, refine</h3><p>Working with Claude Code has a natural loop you'll use forever:</p><ul><li><strong>Describe</strong> — say what you want in plain language</li><li><strong>Review</strong> — look at what it built in the preview</li><li><strong>Refine</strong> — ask for the next change</li></ul><p>You don't try to get everything perfect in one giant instruction. You build a little, look, and adjust — like shaping something on a potter's wheel rather than casting it in one pour.</p>`,
        question: {
          text: "Your homepage appears, but the colors feel too cold for a bakery. What does the describe-review-refine rhythm suggest?",
          options: [
            "Delete it and write one enormous perfect instruction from scratch",
            "Review what's there, then ask for one refinement: warmer colors",
            "Live with it — you already sent your description",
          ],
          correctIndex: 1,
          explanation:
            "Refining is the normal next step, not a failure. Starting over throws away a good base, and settling for \"close enough\" wastes the easiest fix — one small follow-up request.",
        },
      },
      {
        html: `<h3>Small, targeted changes</h3><p>When you refine, change <strong>one thing at a time</strong>. "Make the header warmer and bigger" is easy to check. "Redo the whole thing but better" is not — you won't know what actually changed or why.</p><ul><li>✅ "Make the hours section easier to read and move it above the contact form."</li><li>❌ "Fix everything that feels off."</li></ul><p>Targeted requests give you targeted results you can actually judge. Stack several small wins and the page steadily becomes exactly what you pictured.</p>`,
        question: {
          text: "The contact section is buried at the bottom and the font feels tiny. What's the cleanest way to ask?",
          options: [
            "\"This page is a mess, redo all of it.\"",
            "\"Move the contact section higher and increase the body text size a little.\"",
            "\"Make it better.\"",
          ],
          correctIndex: 1,
          explanation:
            "Naming the two specific changes lets you see exactly whether each one worked. Vague \"redo it all\" or \"make it better\" requests give you unpredictable results you can't evaluate.",
        },
      },
      {
        html: `<h3>It asks before it acts</h3><p>By default, Claude Code works in <strong>"ask permissions"</strong> mode. Before it changes a file, it pauses and shows you what it's about to do, and waits for your okay.</p><p>That's a safety net, especially while you're learning. Nothing happens to your project without you approving it first, so you can never be surprised by a change you didn't want.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Read those approval prompts at first instead of clicking through on autopilot. Seeing which file Claude wants to touch quietly teaches you how your project is put together — no code-reading required.</p></div>`,
        question: {
          text: "You're brand new and a little nervous about breaking something. Why is \"ask permissions\" mode reassuring here?",
          options: [
            "It makes Claude work faster by skipping steps",
            "It pauses and shows each change for your approval before anything happens to your files",
            "It hides what Claude is doing so you don't have to worry",
          ],
          correctIndex: 1,
          explanation:
            "\"Ask permissions\" puts you in control by surfacing each change for approval — the opposite of hiding it. It's about safety and visibility, not speed.",
        },
      },
      {
        html: `<h3>Reading the result without reading code</h3><p>You might worry you need to understand the code to know if it's good. You don't. You judge Claude Code the way a customer would judge your page: <strong>look at the preview and use it.</strong></p><ul><li>Does the bakery name stand out?</li><li>Are the hours correct and easy to find?</li><li>Does the contact section actually work when you try it?</li></ul><p>If something's off, you describe the symptom in plain words and ask for a fix. Your eyes and common sense are the real review tools.</p>`,
        question: {
          text: "You can't read code, but the preview shows your closing time as 5 PM when it should be 6 PM. What's the right move?",
          options: [
            "Assume you can't fix it without learning to code",
            "Tell Claude in plain words: \"Our closing time should say 6 PM, not 5 PM.\"",
            "Ignore it — small details don't matter on a website",
          ],
          correctIndex: 1,
          explanation:
            "Describing what you see in plain language is exactly how you direct fixes — no code needed. And a wrong closing time is precisely the kind of detail a real customer would notice.",
        },
      },
      {
        html: `<h3>You built something real</h3><p>From a single description, you now have a genuine homepage living in a folder on your computer — and you shaped it with nothing but plain English and the describe-review-refine loop.</p><p>But one page is just the front door. A real bakery site needs a menu, an about page, a way to order. Next lesson, <strong>Plan and Build the Website</strong>, you'll learn the settings that control how Claude works and use Plan mode to build a whole connected site — then put it on the internet.</p>`,
        question: {
          text: "Your one-page site looks great. What's the honest way to think about it right now?",
          options: [
            "It's the finished product — nothing more to do",
            "It's a real, working front door you can now grow into a full site",
            "It doesn't count until a professional rebuilds it properly",
          ],
          correctIndex: 1,
          explanation:
            "What you made is real and usable, and it's the foundation you'll expand next. It's neither \"finished forever\" nor somehow illegitimate because you built it yourself.",
        },
      },
    ],
  },
  {
    title: "Plan and Build the Website",
    summary: "The three dials, making usage last, and using Plan mode to build a full multi-page site — then publishing it",
    estimatedMinutes: 16,
    content: `<p>Last lesson you built a real homepage from a simple description and learned the rhythm: describe, review, refine. Now you'll set the controls that shape how Claude works, plan a whole site around your homepage, and put it live on the internet.</p>`,
    tryIt: {
      tool: "Claude Code",
      url: "https://claude.com/product/claude-code",
      prompt:
        "Take a one-page site you've started and grow it into a full site. Switch to Plan mode and ask: 'Plan a multi-page site for [my business] with Home, About, Services, and Contact — tell me how the pages connect and what order to build them.' Review the plan, revise anything off, then approve it to build.",
      note: "Start in Plan mode so you can catch structural problems before any files change — the cheapest time to fix them.",
    },
    steps: [
      {
        html: `<h3>Three dials that shape the work</h3><p>Before bigger builds, get to know three settings near the prompt box. Each changes how a build goes:</p><ul><li><strong>Model</strong> — which version of Claude does the work</li><li><strong>Effort</strong> — how hard it thinks before acting</li><li><strong>Permission mode</strong> — how much it checks with you</li></ul><p>You don't set these once and forget them. You match them to the job in front of you, and that's most of the skill.</p>`,
        question: {
          text: "You're about to make one tiny text edit to your homepage. Which dial is most worth adjusting for this?",
          options: [
            "None of them ever need changing — the defaults are fixed",
            "Effort — a tiny edit doesn't need deep thinking, so a lower setting fits",
            "You must always use the most powerful settings for everything",
          ],
          correctIndex: 1,
          explanation:
            "Matching effort to a small job avoids wasting time and usage on overthinking. The dials are meant to be adjusted per task, and max settings for a tiny edit is pure waste.",
        },
      },
      {
        html: `<h3>Choosing the model</h3><p>From a menu near the prompt box you pick which model does the work. They trade power against speed and cost:</p><ul><li><strong>Haiku</strong> — the lighter version, for quick and basic tasks</li><li><strong>Sonnet</strong> — the medium version, for routine pages</li><li><strong>Opus</strong> — the most capable, for genuinely tricky work</li></ul><p>The most capable model thinks hardest but uses the most of your usage; lighter ones are faster and cheaper. Match the model to the job.</p>`,
        question: {
          text: "You need to build a straightforward menu page — nothing unusual. Which model is the sensible default?",
          options: [
            "Opus, because more powerful is always safer",
            "Sonnet — the medium version handles routine pages well without burning extra usage",
            "It doesn't matter which model you pick, ever",
          ],
          correctIndex: 1,
          explanation:
            "A routine page is exactly what the medium model is for. Reaching for Opus on ordinary work spends your usage faster with no real benefit.",
        },
      },
      {
        html: `<h3>Effort, and making usage last</h3><p><strong>Effort</strong> sets how much Claude thinks before acting — from quick and direct to deep and deliberate. Higher effort suits complex builds; the lowest suits small edits, where extra thinking just costs time.</p><p>Your plan includes a set amount of <strong>usage</strong> that refills on a schedule, shared with the regular Claude app. Heavier models and longer sessions use it faster.</p><div class="discovery"><p>💡 <strong>Make your usage last</strong></p><p>Match the model to the job, start a fresh session for a new task (every message re-reads the whole conversation, so long chats quietly cost more), and don't crank effort on tiny jobs.</p></div>`,
        question: {
          text: "You've finished the menu page and want to start something totally different — a photo gallery. What habit saves usage?",
          options: [
            "Keep going in the same long chat forever to save time",
            "Start a fresh session for the new task, since every message re-reads the whole conversation",
            "Switch to the most powerful model to be safe",
          ],
          correctIndex: 1,
          explanation:
            "Long conversations quietly cost more because each message re-reads everything before it. A fresh session for a new task keeps usage lean; jumping to a heavier model does the opposite.",
        },
      },
      {
        html: `<h3>The permission mode — including Auto</h3><p>The permission mode, set from the selector at the bottom-left of the prompt box, decides how much Claude does on its own:</p><ul><li><strong>Ask permissions</strong> — pauses for your okay before each change (last lesson's default)</li><li><strong>Accept edits</strong> — makes changes without stopping</li><li><strong>Plan mode</strong> — reads and plans, but builds nothing</li><li><strong>Auto</strong> — runs straight through, with a background safety check that pauses only when something looks risky</li></ul><p>"Ask permissions" is safest, but on a long build it means clicking through dozens of approvals you'd have said yes to anyway. That's where Auto earns its place.</p>`,
        question: {
          text: "You're doing a long, routine build and \"ask permissions\" has you approving obvious change after obvious change. What's a reasonable switch?",
          options: [
            "Plan mode, so it stops building entirely",
            "Auto mode — it runs through routine work but still pauses on anything risky",
            "Stay in ask permissions no matter how tedious it gets",
          ],
          correctIndex: 1,
          explanation:
            "Auto keeps a long routine build moving while its safety check still catches risky moments. Plan mode wouldn't build at all, and clicking through dozens of obvious approvals is the tedium you're trying to avoid.",
        },
      },
      {
        html: `<h3>Plan mode for a whole site</h3><p>Your bakery has one page. A real site needs several — Home, Menu, About, Order, Contact — that link together and stay consistent. Asking for that all at once, page by page, invites repetition and gaps.</p><p><strong>Plan mode</strong> is for working out <em>how</em> to build before any file changes. Staying in the same chat as your homepage, you switch to Plan mode and ask how to approach the site. Claude reads your folder, asks what it needs, and proposes the pages, how they connect, and the order to build them.</p><p>It helps to picture the pages you want first, so you can judge whether Claude's approach is right.</p>`,
        question: {
          text: "You're ready to expand from one page to a five-page site. Why start in Plan mode instead of just asking it to build everything?",
          options: [
            "Plan mode builds faster than the other modes",
            "It lays out how the pages connect and in what order before any files change, so you can catch problems early",
            "Because building multiple pages isn't possible any other way",
          ],
          correctIndex: 1,
          explanation:
            "Plan mode's value is deciding the structure while your folder is still untouched — the cheapest moment to fix mistakes. It's about planning, not speed, and you could build pages other ways (just less coherently).",
        },
      },
      {
        html: `<h3>Review, revise, then approve</h3><p>Claude lays out its approach — the pages, how they link, where it'll start — and your folder is still untouched. Read it carefully: is anything missing, doubled, or out of order?</p><p>Say you asked for Order to be its own page, but the plan tucks the order form at the bottom of the Menu page. You don't restart and you don't approve as-is — you click <strong>revise</strong>, tell Claude what's off, and it rewrites the plan. When it looks right, you accept, and Claude builds all the pages at once, linked together with starter copy.</p>`,
        question: {
          text: "The plan buries your order form inside the Menu page, but you wanted Order as its own page. Best response?",
          options: [
            "Start the whole plan over from scratch",
            "Click revise, ask for Order to be its own page, then approve",
            "Approve as-is — one less page is simpler",
          ],
          correctIndex: 1,
          explanation:
            "One targeted revision fixes it while the plan is still just words. Restarting throws away a mostly-right plan, and approving as-is buries buying inside browsing — the exact mix-up you wanted to avoid.",
        },
      },
      {
        html: `<h3>Refine page by page, and point with @</h3><p>After the big build you have the skeleton: every page in place and linked, with placeholder copy. Now you go back to small, targeted changes — one page at a time.</p><p>For the About page, your real story sits in a notes file in your project folder. Instead of copy-pasting, type <strong>"@"</strong> followed by the file's name to pull it into the chat, then ask Claude to use it. That's a <strong>mention</strong> — a quick way to point Claude at one specific file.</p>`,
        question: {
          text: "Your genuine founder's story lives in a file called story.txt in your project folder. What's the cleanest way to get it onto the About page?",
          options: [
            "Re-type the whole story into the chat from memory",
            "Type @story.txt to pull the file in, then ask Claude to use it for the About page",
            "Re-plan the entire site so the story is included",
          ],
          correctIndex: 1,
          explanation:
            "An @-mention points Claude straight at the exact file, no copy-paste or retyping. Re-planning the whole site is wildly out of proportion for a one-page content swap.",
        },
      },
      {
        html: `<h3>From your folder to the internet</h3><p>Your site works in the preview, but it only lives on your computer. To share it you <strong>publish</strong> it via a host — a service that stores your files and serves them to visitors at a URL. For a small site, free hosts like <strong>Netlify</strong>, Vercel, or GitHub Pages are plenty.</p><p>Right now you publish manually: create a free Netlify account, choose "Deploy manually," and drag your project folder into the upload area. Netlify hands you a live URL that works on any device. When you change something, drag the folder in again to update.</p><p>Later in the course you'll set up a connector so Claude can do this for you — but doing it by hand once shows you exactly what's happening.</p>`,
        question: {
          text: "Your site is live on Netlify. The next day you refine your hours in the preview, but visitors still see the old hours. Why?",
          options: [
            "The live site updates itself automatically after any preview change",
            "Manual publishing means you must drag the updated folder to Netlify again for the change to go live",
            "The change didn't actually save on your computer",
          ],
          correctIndex: 1,
          explanation:
            "With manual publishing, the live site only reflects the last folder you uploaded — you re-upload to push changes. The edit did save locally; it just hasn't been published yet.",
        },
      },
      {
        html: `<h3>Your bakery is on the map</h3><p>You went from one page to a connected, published multi-page site — and you now know the three dials, how to keep your usage lasting, and how Plan mode structures a big build before a single file changes.</p><p>So far you've built <strong>websites</strong>: pages that sit and wait for visitors. Next lesson, <strong>Make Your Project Interactive</strong>, you'll cross into <strong>apps</strong> — things that hold your data, respond to you, and grow feature by feature. Same Claude Code, a different kind of work.</p>`,
        question: {
          text: "You've mastered building and publishing sites. What's the key difference coming up with apps?",
          options: [
            "Apps use a completely different, harder tool than Claude Code",
            "Apps store data and respond to actions, so they grow feature by feature — a different kind of work",
            "Apps are just websites with more pages",
          ],
          correctIndex: 1,
          explanation:
            "The real shift is that apps hold data and react to you, which changes how you build and protect them. It's still Claude Code, and it's more than just \"extra pages.\"",
        },
      },
    ],
  },
  {
    title: "Make Your Project Interactive",
    summary: "From sites to apps — building a personal tracker, using checkpoints and /rewind, and fixing bugs by symptom",
    estimatedMinutes: 16,
    content: `<p>Last lesson you built and published a five-page site. This one is different: you'll build an <strong>app</strong> for yourself — one that holds data, changes as you use it, and grows feature by feature. You'll also learn how experienced builders try big changes without losing what already works.</p>`,
    tryIt: {
      tool: "Claude Code",
      url: "https://claude.com/product/claude-code",
      prompt:
        "Build a small personal app you'd actually use: 'Build a [habit / reading / workout] tracker with a daily streak, a list I can add items to, and progress bars. Clean, friendly, and easy to read on my phone.' Use it, then add one feature at a time.",
      note: "Name the features and the look so Claude has a concrete target — and remember checkpoints let you rewind if a change breaks something.",
    },
    steps: [
      {
        html: `<h3>From a site to an app</h3><p>Websites and apps serve different purposes:</p><ul><li><strong>Websites</strong> help people discover information, services, or businesses.</li><li><strong>Apps</strong> help people complete tasks.</li></ul><p>Because apps store data, respond to your actions, and juggle more moving parts behind the scenes, building one well takes a different set of habits — the ones you'll pick up here.</p>`,
        question: {
          text: "You want something that tracks your daily language study and updates as you log sessions. Site or app — and why?",
          options: [
            "A website, because it just needs to display information",
            "An app, because it stores your data and responds as you use it day to day",
            "Neither — Claude Code only makes static pages",
          ],
          correctIndex: 1,
          explanation:
            "Tracking and updating over time is task-completion with stored data — the definition of an app. A static website only displays; and Claude Code builds apps just as readily.",
        },
      },
      {
        html: `<h3>Build a tracker you'll actually use</h3><p>Here's the project: you're learning a language and want something that keeps you going. Not another store app — a custom one you build today: a <strong>streak</strong> for days you study, a <strong>word list</strong> you're learning with a weekly goal, and <strong>progress bars</strong> to glance at.</p><p>Like the bakery site, you describe it. A good build request covers both what it does and how it looks: "Build a language-study tracker with a daily streak, a word list with a weekly goal, and progress bars. Clean, friendly, easy to read on my phone."</p>`,
        question: {
          text: "Which first request is most likely to give you a tracker you can start using right away?",
          options: [
            "\"Make a language app.\"",
            "\"Build a tracker with a daily streak, a word list with a weekly goal, and progress bars — clean and phone-friendly.\"",
            "\"Build the best study app ever, you decide everything.\"",
          ],
          correctIndex: 1,
          explanation:
            "Naming the features and the look gives Claude a concrete target you can judge. \"Make a language app\" or \"you decide everything\" leaves it guessing at the very things you already have in mind.",
        },
      },
      {
        html: `<h3>Checkpoints: a safety net you didn't set up</h3><p>With a static site, a bad change shows up as a page that looks broken. With an app, a wrong change can quietly break <em>behavior</em> you only notice when you actually use it.</p><p>So before big changes, Claude Code already protects you. Every time you send a prompt, it takes a <strong>checkpoint</strong> — a snapshot of your project from just before that change. These happen automatically; you don't create them, you just know a recent version is almost always there to return to.</p>`,
        question: {
          text: "You're nervous about attempting a big change to your working tracker. What's genuinely reassuring about checkpoints?",
          options: [
            "You have to remember to save a checkpoint before each risky change",
            "Claude automatically snapshots your project before every prompt, so a recent version is almost always recoverable",
            "Checkpoints prevent Claude from ever making mistakes",
          ],
          correctIndex: 1,
          explanation:
            "Checkpoints are automatic — one is taken before each prompt, so you don't manage them. They don't stop mistakes; they let you undo one after the fact.",
        },
      },
      {
        html: `<h3>/rewind when something breaks</h3><p>You add a calendar heat map that fills in the days you studied. It renders, cells fill in — until you notice the <strong>Add word</strong> button does nothing. The heat map broke the word list in a non-obvious way.</p><p>To undo it, type <strong>/rewind</strong> into the chat. A dialog shows your past prompts; pick the one you want to undo, and Claude takes the project back to right before that prompt was sent. Rewind reverses only Claude's file changes — it doesn't touch things you did yourself outside the chat.</p>`,
        question: {
          text: "The calendar change silently broke your Add word button. In the /rewind dialog, what's the cleanest fix?",
          options: [
            "Pick the very first prompt and start the whole build fresh",
            "Pick the prompt where you asked for the calendar, undoing just that change",
            "Skip rewind and ask Claude to \"delete the calendar\"",
          ],
          correctIndex: 1,
          explanation:
            "Rewinding to the calendar prompt removes exactly the change that caused the problem, keeping everything else. Starting fresh throws away your whole build, and \"delete the calendar\" might miss the hidden side effect that broke the word list.",
        },
      },
      {
        html: `<h3>Add without breaking what works</h3><p>After the rewind, the tracker is right back where it was — adding words works, no heat map yet. Now you add the calendar again, but deliberately. The habit for any change to a working app: <strong>name what to change, name what to protect, and ask for a check.</strong></p><ul><li>✅ "Add a calendar heat map of my study days. Don't change the word list or the Add word button, and confirm they still work after."</li><li>❌ "Add the calendar."</li></ul><p>Spelling out what to leave alone is how you grow an app feature by feature without collateral damage.</p>`,
        question: {
          text: "You're re-adding the calendar that broke things last time. Which request best protects your working word list?",
          options: [
            "\"Add a calendar heat map.\"",
            "\"Add a calendar heat map. Leave the word list and Add word button untouched, and confirm they still work afterward.\"",
            "\"Add the calendar and fix anything that breaks later.\"",
          ],
          correctIndex: 1,
          explanation:
            "Naming what to protect and asking for a check guards the feature that broke before. A bare \"add the calendar\" repeats last time's mistake, and \"fix it later\" invites the same silent breakage.",
        },
      },
      {
        html: `<h3>Ask Claude to explain its own work</h3><p>As an app grows, you stop holding its whole shape in your head — there are features you asked for weeks ago and can't recall the details of. You don't have to read the code to direct it. You <strong>ask Claude</strong>.</p><p>Two kinds of questions cover most needs:</p><ul><li>"Where does the streak logic live?" — it names the file and part.</li><li>"Walk me through how the streak resets." — it explains its own code back to you in plain language.</li></ul><p>Run that second one before touching any logic you don't fully remember.</p>`,
        question: {
          text: "You want to change how streaks work but can't remember how you set them up. What's the smart first step?",
          options: [
            "Start editing and hope you don't break something",
            "Ask Claude to walk you through how the streak currently works, in plain language",
            "Rebuild the whole tracker so you understand it again",
          ],
          correctIndex: 1,
          explanation:
            "Having Claude explain its own code refreshes your understanding before you change anything — no code-reading needed. Guessing risks breakage, and rebuilding from scratch is a huge overreaction.",
        },
      },
      {
        html: `<h3>Describe the symptom, not the fix</h3><p>A week in, something's wrong: you logged a session at 11 p.m. last night and the streak counter now shows <strong>zero</strong> — even though yesterday's entry is still in the list. The number is just wrong.</p><p>That's a <em>symptom</em> — what you can see. The <em>cause</em> is buried in the code that decides when one day ends and the next begins. The strong habit is to describe the symptom carefully — timing and specifics — and let Claude find the cause. Then, when it proposes a fix, apply the same rule: name what to change, protect what works, ask for a check.</p>`,
        question: {
          text: "Your streak reset to zero after an 11 p.m. entry, though the entry is still listed. What's the best way to get it fixed?",
          options: [
            "Guess the cause and tell Claude exactly which code line to rewrite",
            "Describe the symptom precisely — the 11 p.m. entry, the streak showing zero, the entry still present — and let Claude find the cause",
            "Delete last night's entry so the number looks right",
          ],
          correctIndex: 1,
          explanation:
            "You can see the symptom, not the cause — which often sits somewhere you'd never guess. Describing it precisely lets Claude locate it; guessing at code or hiding the entry treats the surface, not the bug.",
        },
      },
      {
        html: `<h3>Publish it — and put it on your phone</h3><p>Just like your website, the tracker only lives in the preview until you publish it. The process is the same: choose a host (Netlify works perfectly here too), upload your project folder, and your app goes live at its own URL.</p><p>Then open that URL on your phone and tap <strong>Add to Home Screen</strong> (the share button in Safari on iOS, or the three-dot menu on Android). It now opens fullscreen, one tap away — like an app, with no app store involved. And remember: after any fix, re-upload the folder so the live version matches your screen.</p>`,
        question: {
          text: "You fixed the streak bug and it works in the preview, but your phone's home-screen tracker still shows the bug. Why?",
          options: [
            "Add to Home Screen permanently freezes the old version",
            "The live URL still serves your last upload — re-upload the folder to your host to push the fix live",
            "The fix only works on computers, never phones",
          ],
          correctIndex: 1,
          explanation:
            "Your home-screen app opens the live URL, which reflects the last folder you published — so you re-upload after a fix. Add to Home Screen just bookmarks the live site; it doesn't freeze anything.",
        },
      },
      {
        html: `<h3>A repeatable loop — and what's next</h3><p>You've done the whole cycle once: tried a big change, rewound when it broke something, tried again carefully, and fixed a real bug by describing what you saw. That's a workflow you can reuse for every app from here.</p><p>Right now your tracker's word list lives inside its own folder. But your real vocabulary might live somewhere else — a Google Doc, a Notion page, a note on your phone. Next lesson, <strong>Connect Claude to Your Tools</strong>, you'll bring that outside content in, and even let Claude publish updates for you.</p>`,
        question: {
          text: "You've published your tracker and learned the safe-change loop. What capability would make it even more useful next?",
          options: [
            "Rebuilding it from scratch in a different style",
            "Connecting it to content that already lives in your Google Docs, Notion, or phone notes",
            "Nothing — a self-contained app can never use outside information",
          ],
          correctIndex: 1,
          explanation:
            "Pulling in vocabulary you already keep elsewhere saves duplicate work and is exactly what connectors enable next. Apps absolutely can reach outside sources, and a rebuild adds no new capability.",
        },
      },
    ],
  },
  {
    title: "Connect Claude to Your Tools",
    summary: "Using connectors to pull in real content, publish for you, and act on your calendar — with permissions granted thoughtfully",
    estimatedMinutes: 15,
    content: `<p>So far, Claude Code has worked only with files in your project folder. But your real content lives elsewhere — a Google Doc, a Notion page, your calendar. <strong>Connectors</strong> let Claude reach those tools, so your projects use the information you already keep, and Claude can even act on your behalf.</p>`,
    tryIt: {
      tool: "Claude Code",
      url: "https://claude.com/product/claude-code",
      prompt:
        "Connect one tool where your real content lives — a Google Doc or Notion page — then ask Claude Code to use it: 'Pull the copy from my [document] and use it to fill in the About and Services pages of my site.' Review each change before you approve it.",
      note: "Only connect tools you trust, and check what Claude pulls in before approving — connectors let it act on your behalf, so stay in the loop.",
    },
    steps: [
      {
        html: `<h3>What a connector is</h3><p>A <strong>connector</strong> is a secure bridge between Claude and another tool you use — Google Drive, Notion, your calendar, and more. (You may see this called MCP, the underlying standard; you don't need the jargon to use it.)</p><p>Once connected, Claude can read from or act in that tool as part of your normal chat. Instead of you copying content back and forth, Claude reaches for it directly — the same describe-review-refine rhythm, now reaching beyond your project folder.</p>`,
        question: {
          text: "Your study vocabulary lives in a Google Doc. What does adding a Google Drive connector actually let you do?",
          options: [
            "It automatically merges every file you own into your project without asking",
            "It lets Claude read from your Drive as part of the chat, so it can pull that doc in directly",
            "It replaces Claude Code with a different app",
          ],
          correctIndex: 1,
          explanation:
            "A connector is a bridge Claude uses within the chat to reach a tool like Drive — it doesn't dump everything you own into your project. It extends Claude Code, not replaces it.",
        },
      },
      {
        html: `<h3>Pulling real content into your project</h3><p>Remember your tracker's word list living inside its own folder? Your actual vocabulary is in a Google Doc you update on the go. With the Drive connector on, you just ask: "Pull my vocabulary from my 'Spanish Words' doc and load it into the tracker's word list."</p><p>Claude reads the doc and fills your list — no copy-paste, no re-typing. The same works for a Notion page of bakery recipes or a note full of blog ideas. Your project draws on the source you already maintain.</p>`,
        question: {
          text: "You keep adding words to a Google Doc all week. With the connector on, what's the cleanest way to get them into your tracker?",
          options: [
            "Copy each word by hand into the app one at a time",
            "Ask Claude to pull the vocabulary from your Google Doc into the word list",
            "Rebuild the tracker so it has more empty slots",
          ],
          correctIndex: 1,
          explanation:
            "The connector's whole benefit is letting Claude read the doc directly and load it in. Copying by hand defeats the point, and adding empty slots doesn't bring in the actual words.",
        },
      },
      {
        html: `<h3>Let Claude publish for you</h3><p>Last time, you published by dragging your folder to Netlify by hand and re-uploading after every change. A <strong>hosting connector</strong> changes that: once Claude is connected to your host, you can just ask, "Publish the latest version of my bakery site," and it pushes the update live for you.</p><p>That turns the tedious re-upload step into a single sentence — the payoff hinted at back when you published manually.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Even with a publish connector, review your change in the preview first. "Publish for me" is only as good as what you're about to send live — check, then ship.</p></div>`,
        question: {
          text: "You've connected Claude to your host and just fixed a typo on your bakery site. What's the smoothest safe path to make it live?",
          options: [
            "Ask Claude to publish immediately without looking at anything",
            "Glance at the fix in the preview, then ask Claude to publish the update",
            "Go back to dragging your folder to Netlify by hand every time",
          ],
          correctIndex: 1,
          explanation:
            "The connector removes the manual upload, but a quick preview check ensures you don't ship something wrong. Publishing blind skips that safety, and manual dragging throws away the connector's whole benefit.",
        },
      },
      {
        html: `<h3>Calendar- and email-aware tasks</h3><p>Connectors also let Claude act on time and messages. Connect your calendar and it can factor in your real schedule; connect email and it can draft or send based on what's there.</p><p>For the bakery, that means asks like: "Look at next week's calendar and draft a short 'this week at Rosewood' update for the website," or "Check my orders inbox and summarize what needs baking tomorrow." Claude works from your real, current information instead of you feeding it in by hand.</p>`,
        question: {
          text: "You want a weekly website blurb that reflects your actual events. With a calendar connector, what's the natural request?",
          options: [
            "\"Write a generic weekly update and I'll fix the dates myself.\"",
            "\"Read next week's calendar and draft a 'this week at Rosewood' update from what's scheduled.\"",
            "\"Guess what might be happening this week.\"",
          ],
          correctIndex: 1,
          explanation:
            "The connector lets Claude use your real schedule, so the draft matches reality. Writing generic text or guessing ignores the very information the connector makes available.",
        },
      },
      {
        html: `<h3>Grant permissions thoughtfully</h3><p>A connector can be powerful — reading your documents, changing your live site, sending email. That power deserves care. When you connect a tool, you approve what Claude may do, and you should grant only what a task actually needs.</p><ul><li>Pulling in a word list? <strong>Read access</strong> to that Drive is enough.</li><li>Publishing your site? That needs permission to <strong>update</strong> the host.</li></ul><p>The principle mirrors "ask permissions" mode from lesson one: stay aware of what you've allowed, and don't hand over more reach than the job requires.</p>`,
        question: {
          text: "You only want Claude to read vocabulary from one Google Doc. What's the thoughtful way to set up the connector?",
          options: [
            "Grant full send-and-delete access across all your accounts to be safe",
            "Grant just the read access needed to pull that document",
            "Skip permissions entirely — connectors don't need approval",
          ],
          correctIndex: 1,
          explanation:
            "Matching the permission to the task — read access for a read-only job — limits risk. Handing over broad send-and-delete power is unnecessary reach, and connectors always require your approval.",
        },
      },
      {
        html: `<h3>You've plugged Claude into your world</h3><p>Your projects now draw on the tools you already use: content flows in from Docs and Notion, your site updates with a sentence, and Claude can work from your calendar and email — all with permissions you granted deliberately.</p><p>Connectors link Claude to <em>other</em> tools. But you can also add capabilities <em>into</em> Claude Code itself. Next up: <strong>plugins and extensions</strong> — reusable setups, custom instructions, and skills that make Claude work the way you do, every time. Let's keep going!</p>`,
        question: {
          text: "You've mastered connectors. How are the upcoming plugins and extensions different?",
          options: [
            "They're the same thing as connectors, just renamed",
            "Connectors link Claude to outside tools; plugins add new capabilities into Claude Code itself",
            "They remove the need to ever grant permissions again",
          ],
          correctIndex: 1,
          explanation:
            "Connectors reach outward to other tools, while plugins and extensions build capability into Claude Code. They're distinct ideas, and they don't erase permission choices.",
        },
      },
    ],
  },
];
