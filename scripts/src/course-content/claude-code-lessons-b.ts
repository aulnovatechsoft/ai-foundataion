import type { UnitSeed } from "./types";

export const CLAUDE_CODE_LESSONS_B: UnitSeed["lessons"] = [
  {
    title: "Install Plugins",
    summary: "Extending Claude Code with plugins — what they add, how to install one, and staying lean and safe",
    estimatedMinutes: 13,
    content: `<p>By now your bakery site is live and your language tracker sits on your phone's home screen. You've been asking Claude for everything from scratch. But some jobs come up again and again — and for those, there's a shortcut: <strong>plugins</strong>. This lesson is about adding new powers to Claude Code without cluttering your setup.</p>`,
    tryIt: {
      tool: "Claude Code",
      url: "https://claude.com/product/claude-code",
      prompt:
        "Browse the plugin marketplace in Claude Code and find one that matches a task you actually repeat — for example a pre-publish accessibility or link check. Read its description to see exactly what it adds and what it accesses, then install it and try it on one of your projects.",
      note: "Only install what solves a real, recurring need from a source you trust — keep your setup lean rather than grabbing everything that looks interesting.",
    },
    steps: [
      {
        html: `<h3>What a plugin actually is</h3><p>Out of the box, Claude Code can build almost anything you describe. A <strong>plugin</strong> (sometimes called an extension) adds ready-made abilities on top of that — so you don't have to explain a common task every time.</p><p>Plugins tend to add three kinds of things:</p><ul><li><strong>New commands</strong> — a shortcut for a task you'd otherwise describe by hand</li><li><strong>Integrations</strong> — a built-in link to an outside tool or service</li><li><strong>Checks</strong> — automatic reviews that catch problems before you do</li></ul><p>Think of Claude Code as a capable assistant, and a plugin as handing that assistant a specialized tool belt for one type of job.</p>`,
        question: {
          text: "You keep asking Claude the same way to run an accessibility review on every page of your bakery site. What could a plugin offer here?",
          options: [
            "A brand-new version of Claude that replaces the app",
            "A ready-made command or check that runs that same review without you re-explaining it",
            "Nothing — plugins only work for professional developers",
          ],
          correctIndex: 1,
          explanation:
            "A plugin packages a repeated task into a command or automatic check, so you stop re-typing the same request. It doesn't replace Claude, and it's not developer-only — it's exactly for repeated everyday jobs.",
        },
      },
      {
        html: `<h3>Finding and installing one</h3><p>Claude Code has a place to browse available plugins — a marketplace of add-ons, each with a short description of what it does. You skim for one that matches a real need, read what it adds, and install it with a click or a short confirmation.</p><p>Once installed, its abilities simply become available in your chat — a new command to call, or a check that runs on its own. Nothing about your existing project changes; you've just widened what Claude can do.</p>`,
        question: {
          text: "Before installing a plugin, what's the most useful thing to check?",
          options: [
            "Its description — what it actually adds and whether it matches a need you really have",
            "Only how many stars it has, and install the flashiest one",
            "Nothing — install several and see which feel nice",
          ],
          correctIndex: 0,
          explanation:
            "Matching the plugin to a genuine, recurring need is the whole point. Picking on looks or grabbing a handful blindly leaves you with clutter you don't use — and possibly tools you don't fully trust.",
        },
      },
      {
        html: `<h3>When a plugin beats asking from scratch</h3><p>You don't need a plugin for a one-off. If you're only ever going to do something once, just describe it to Claude — that's faster than hunting for an add-on.</p><p>A plugin earns its place when a task is <strong>repeated</strong> and <strong>consistent</strong>: the weekly check on your tracker, the same pre-publish review on every client site, the same way of connecting to a tool you use daily.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Ask: "Will I want this exact thing again and again?" If yes, a plugin saves you re-explaining. If it's a one-time job, just ask Claude directly and move on.</p></div>`,
        question: {
          text: "You need to reorganize your About page once — a task you'll almost certainly never repeat. Plugin or plain request?",
          options: [
            "Search for a plugin first, always",
            "Just describe the change to Claude directly — it's a one-off",
            "Install three plugins in case one helps",
          ],
          correctIndex: 1,
          explanation:
            "A one-time change is faster to simply ask for. Plugins pay off on repeated, consistent tasks; reaching for one here only adds a hunting step and clutter for no repeat benefit.",
        },
      },
      {
        html: `<h3>Keeping the setup lean</h3><p>It's tempting to install every plugin that looks interesting. Resist it. Each add-on is one more thing that can behave unexpectedly, one more layer between you and a clean result — and a crowded set of commands is harder to remember than it is helpful.</p><p>A lean setup is easier to trust and easier to reason about. Install what solves a real, current problem. If you stop using one, remove it.</p>`,
        question: {
          text: "You installed five plugins months ago and only ever use one. What's the sensible move?",
          options: [
            "Leave them all — more tools is always better",
            "Remove the four you don't use to keep your setup lean and trustworthy",
            "Install five more to balance it out",
          ],
          correctIndex: 1,
          explanation:
            "Unused plugins add clutter and surface area for surprises without giving you anything. Trimming to what you actually use keeps the setup simple and easy to trust — more tools is not the goal.",
        },
      },
      {
        html: `<h3>Only install what you trust</h3><p>A plugin can act on your project and, in some cases, reach out to outside tools on your behalf. That power is useful — but it means you should only install ones from sources you trust.</p><p>Before installing, favor plugins that are well-known, clearly described, and honest about what they touch. If a plugin's description is vague about what it does or what it can access, that's a reason to pass.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Treat installing a plugin like giving someone a key to your project. You'd only hand a key to someone you trust — apply the same instinct here.</p></div>`,
        question: {
          text: "A plugin promises to 'supercharge everything' but won't say clearly what it changes or what it can access. What should you do?",
          options: [
            "Install it — bold promises usually mean it's powerful",
            "Pass on it — vague about what it touches is a reason not to trust it",
            "Install it but only on your bakery site, not your tracker",
          ],
          correctIndex: 1,
          explanation:
            "Vagueness about what a plugin does or accesses is exactly the warning sign to heed. A big promise doesn't offset unknown access, and installing it on 'only one' project still hands over trust you haven't earned reason to give.",
        },
      },
      {
        html: `<h3>What you've gained</h3><p>You now know that plugins add commands, integrations, and checks; that you install them from a marketplace when a task keeps coming back; and that a lean, trusted set beats a crowded one every time.</p><p>Plugins are pre-made powers someone else packaged. But the most personal shortcut of all is one you build for yourself — teaching Claude <em>your</em> preferences, once, so it works your way on every project.</p><h3>Where you're headed</h3><p>Next lesson: <strong>Make a Reusable Setup</strong> — how to hand Claude your brand, your tone, and your rules once, then reuse that setup for every new site and client.</p>`,
        question: {
          text: "A friend asks why you didn't install a dozen plugins 'just in case.' What's the best reflection of what you learned?",
          options: [
            "More plugins always means a better setup",
            "You install what solves a real, repeated need from a source you trust — and keep it lean",
            "Plugins are too risky to ever use",
          ],
          correctIndex: 1,
          explanation:
            "The balanced takeaway is selective, trusted, lean — install for genuine repeated needs. 'More is always better' invites clutter and risk, while 'never use them' throws away a real shortcut.",
        },
      },
    ],
  },
  {
    title: "Make a Reusable Setup",
    summary: "Teaching Claude your preferences once with project memory, templates, and saved skills",
    estimatedMinutes: 14,
    content: `<p>Every time you start something new, you find yourself re-explaining the same things: use these colors, keep the tone warm, always check the word list still works. What if you only had to say it once? That's what a reusable setup gives you — and it's the difference between starting from zero and starting from <em>your</em> zero.</p>`,
    tryIt: {
      tool: "Claude Code",
      url: "https://claude.com/product/claude-code",
      prompt:
        "In one of your projects, ask Claude Code to create a CLAUDE.md file that captures your standing preferences: 'Create a CLAUDE.md with my brand colours [___], a warm and friendly tone, and a rule to confirm all links work after any change.' Then start a fresh session and see that it follows those rules without being reminded.",
      note: "Turn every recurring instruction or past bug into a one-line rule in CLAUDE.md so you never have to re-explain it again.",
    },
    steps: [
      {
        html: `<h3>The problem with re-explaining</h3><p>You've noticed it on the bakery site: you tell Claude your brand colors in one chat, then a week later, in a fresh session, you have to say them again. Claude reads the whole conversation each time, but it doesn't carry your preferences between separate projects unless you write them down somewhere it looks.</p><p>The fix is a small, plain-language file that lives in your project — a place Claude reads automatically so your rules are always in the room.</p>`,
        question: {
          text: "You keep re-typing 'use warm cream and brown, friendly tone' in every new session. What does that tell you?",
          options: [
            "Claude can never remember anything, so just accept it",
            "Your preferences should be written into the project so Claude reads them automatically",
            "You should switch to a more powerful model to fix it",
          ],
          correctIndex: 1,
          explanation:
            "Repeating yourself is the signal to write preferences down where Claude looks. A bigger model won't remember across separate projects either — the answer is a written setup, not more power.",
        },
      },
      {
        html: `<h3>Project memory: CLAUDE.md</h3><p>Claude Code looks for a special notes file in your project — <strong>CLAUDE.md</strong> — and reads it at the start of its work. Think of it as a briefing you hand every new assistant: it's written in plain language, and you can ask Claude to create or update it for you.</p><p>Good things to put in it:</p><ul><li>Your <strong>brand</strong> — colors, fonts, logo, spacing you like</li><li>Your <strong>tone</strong> — "warm and welcoming, never salesy"</li><li>Your <strong>rules</strong> — "always check the word list still works after a change"</li><li>How the project is <strong>organized</strong>, so Claude finds things fast</li></ul>`,
        question: {
          text: "What belongs in your project's CLAUDE.md file?",
          options: [
            "A one-time question you'll never ask again",
            "The standing preferences and rules you want honored on every change",
            "Nothing — it's only for programmers writing code",
          ],
          correctIndex: 1,
          explanation:
            "CLAUDE.md is for standing preferences that should apply every time — brand, tone, rules. A one-off question doesn't need to persist, and the file is plain language, not a coding-only tool.",
        },
      },
      {
        html: `<h3>Rules that protect what works</h3><p>The most valuable lines in a setup file are often the guardrails. Remember how a calendar feature quietly broke the tracker's Add word button? A rule prevents that whole class of surprise.</p><p>Write it plainly: <em>"After any change, confirm the word list still adds and saves entries."</em> Now every future change carries that check automatically — you don't have to remember to ask.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Turn every painful bug into a one-line rule in CLAUDE.md. Each rule is a lesson your project never has to relearn.</p></div>`,
        question: {
          text: "Your tracker broke once when a new feature disturbed the word list. What's the best way to stop it happening again?",
          options: [
            "Just try to remember to mention the word list every single time",
            "Add a standing rule to CLAUDE.md to verify the word list after any change",
            "Stop adding features to the tracker entirely",
          ],
          correctIndex: 1,
          explanation:
            "A written rule makes the check automatic on every change, so it no longer depends on your memory. Relying on remembering will eventually fail, and freezing the app throws away its whole point.",
        },
      },
      {
        html: `<h3>Templates you can reuse</h3><p>Say a neighbor loves your bakery site and wants one for their flower shop. You don't start over. A finished project you keep as a starting point is a <strong>template</strong>: the page structure, the navigation, the CLAUDE.md rules — all there, ready to be re-skinned.</p><p>You copy the template, then tell Claude the new brand and content. Hours of structural work you already solved come along for free; you only change what's genuinely different.</p>`,
        question: {
          text: "A second client wants a small business site much like your bakery's. What's the efficient move?",
          options: [
            "Build it from a blank folder, re-explaining every preference",
            "Start from your bakery site as a template, then swap in the new brand and content",
            "Tell them it isn't possible without starting completely fresh",
          ],
          correctIndex: 1,
          explanation:
            "Reusing a proven project as a template carries the structure and rules forward, so you only change what differs. Starting blank re-does solved work, and it's certainly possible — that's the whole value of a template.",
        },
      },
      {
        html: `<h3>Skills: saved how-to recipes</h3><p>Beyond preferences, you can save <strong>skills</strong> — reusable how-to recipes that teach Claude a specific procedure the way you like it done. Where CLAUDE.md says <em>who you are</em>, a skill says <em>how to do a particular job</em>.</p><p>For example: a "prepare for publish" skill that always runs your checks, tidies the pages, and readies the folder — the same steps, the same way, every time. You set it up once and call on it whenever the job comes up.</p>`,
        question: {
          text: "You do the exact same five-step routine every time before publishing a site. How could a skill help?",
          options: [
            "It stores those five steps as a reusable recipe you can trigger instead of re-listing them",
            "It replaces your CLAUDE.md brand and tone preferences",
            "It permanently deletes the need to review anything yourself",
          ],
          correctIndex: 0,
          explanation:
            "A skill saves a specific procedure so you invoke it instead of re-listing steps. It complements CLAUDE.md rather than replacing your preferences, and it doesn't remove your role in reviewing the result.",
        },
      },
      {
        html: `<h3>Why setup time pays back</h3><p>Writing a CLAUDE.md, saving a template, building a skill — each takes a few minutes up front. It can feel like a detour when you just want to build. But that time is spent <em>once</em> and saved <em>every day after</em>.</p><p>The more projects you run, the bigger the payback: every new site starts already knowing your brand, your rules, and your routines.</p><h3>Where you're headed</h3><p>You've taught Claude to work your way. Next lesson, <strong>Routines: Work That Runs Itself</strong> — how to hand off recurring work so parts of your projects update and check themselves while you get on with your day.</p>`,
        question: {
          text: "Investing ten minutes in a setup file before a busy month of projects — worth it?",
          options: [
            "No — setup is always wasted time you could spend building",
            "Yes — it's paid once and saves re-explaining on every project that follows",
            "Only if you have exactly one project ever",
          ],
          correctIndex: 1,
          explanation:
            "Setup is a one-time cost that pays back on every later project, and the payback grows with more work. It's least valuable for a single lifetime project — the opposite of a busy month ahead.",
        },
      },
    ],
  },
  {
    title: "Routines: Work That Runs Itself",
    summary: "Scheduled and background routines — plus a look back at everything you've built",
    estimatedMinutes: 15,
    content: `<p>So far, everything happened because you asked for it in the moment. This lesson crosses a line: setting up work that runs <strong>on its own</strong> — on a schedule, or in the background — so your projects keep moving even when you're not watching. It's the last skill in your Claude Code toolkit, and it ties the whole course together.</p>`,
    tryIt: {
      tool: "Claude Code",
      url: "https://claude.com/product/claude-code",
      prompt:
        "Set up one small routine that runs without you. Ask Claude Code to schedule a recurring task like: 'Every Monday morning, check that all the links on my live site still work and give me a short summary of anything broken.' Have it report first rather than change things unattended, then review its first run.",
      note: "Start conservative — let a new routine propose or report before you let it make changes on its own, and always review what it did.",
    },
    steps: [
      {
        html: `<h3>From asking to scheduling</h3><p>A <strong>routine</strong> is a task you set up once to run automatically — either on a schedule (every Monday morning) or in the background (while you do something else). Instead of you kicking off the same job by hand, Claude Code does it for you and reports back.</p><p>The shift is the same one you made with templates and skills, taken one step further: you're not just saving <em>how</em> to do a job, you're deciding <em>when</em> it happens without you.</p>`,
        question: {
          text: "You post a new bakery special every Monday and always ask Claude to update the site's specials section. How could a routine change that?",
          options: [
            "It couldn't — updates always need you to start them by hand",
            "A scheduled routine could refresh the specials section every Monday and report back to you",
            "It would delete your specials section to save effort",
          ],
          correctIndex: 1,
          explanation:
            "A scheduled routine runs a recurring job automatically and reports back, which is exactly what a weekly update needs. Routines start work for you rather than requiring a manual kick-off, and they do the task, not undo it.",
        },
      },
      {
        html: `<h3>Everyday routines worth having</h3><p>Routines shine for small, repeated jobs you'd rather not remember:</p><ul><li>A <strong>weekly content refresh</strong> — rotate the bakery's featured item every Monday</li><li>A <strong>morning summary</strong> — a quick recap of your tracker's streak and word-goal progress</li><li><strong>Auto-checks after every change</strong> — confirm the word list still works, without you asking</li></ul><p>Each one takes a nagging little task off your plate and turns it into something that just happens.</p>`,
        question: {
          text: "Which task is the best fit for a routine?",
          options: [
            "A one-time redesign of your whole homepage",
            "A weekly check that your live site's links all still work",
            "Deciding your business's name for the first time",
          ],
          correctIndex: 1,
          explanation:
            "Routines fit small, repeated jobs like a recurring weekly check. A one-time redesign and a first-time naming decision are single events — there's nothing recurring to automate.",
        },
      },
      {
        html: `<h3>Background agents</h3><p>Some jobs are big enough that you don't want to sit and wait — reviewing every page of a large site, or reorganizing a pile of notes. A <strong>background agent</strong> takes on a longer task and works through it while you do something else, then hands you the result.</p><p>It's like giving a capable colleague an assignment: you brief them, walk away, and come back to a finished draft to review.</p><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Hand a background agent the long, patient jobs — a full-site review, a big cleanup — and keep the quick, judgment-heavy edits for when you're at the keyboard.</p></div>`,
        question: {
          text: "You want every page of your growing site checked for tone and typos — a slow job. What's the smart approach?",
          options: [
            "Sit and watch Claude do each page one at a time",
            "Set a background agent on the full review, then come back to check its results",
            "Skip the review — long tasks aren't worth doing",
          ],
          correctIndex: 1,
          explanation:
            "A long, patient job is exactly what a background agent is for — it works while you don't wait, then you review. Watching it wastes your time, and skipping the review sacrifices quality for no good reason.",
        },
      },
      {
        html: `<h3>Reviewing what ran</h3><p>Automatic doesn't mean invisible. A routine or agent leaves a record of what it did, and your habit stays the same as it's always been: <strong>review before you trust</strong>. You read the summary, glance at the changes, and confirm they're right.</p><p>Remember checkpoints? They still have your back here. If a routine made a change you don't like, you can look back at what happened and rewind it — the same safety net you've relied on all along.</p>`,
        question: {
          text: "Your weekly refresh routine ran overnight and changed the homepage. What's the right habit the next morning?",
          options: [
            "Assume it's fine because it ran automatically",
            "Review what it did and confirm the change is right, rewinding if it's not",
            "Delete the routine so it never runs again",
          ],
          correctIndex: 1,
          explanation:
            "Review-before-trust applies to automated work too — you check the record and keep it or rewind. Blind trust skips your safety habit, and scrapping a useful routine over one review is an overreaction.",
        },
      },
      {
        html: `<h3>Keeping control</h3><p>The point of routines is leverage, not surrender. You decide what runs, when it runs, and how much it's allowed to do on its own — the same way permission modes let you choose how much Claude acts without checking in.</p><p>Start conservative: let a routine <em>propose</em> or <em>report</em> before you let it change things unattended. As you build trust in a specific routine, you can loosen the leash. You're always the one holding it.</p>`,
        question: {
          text: "You're setting up a brand-new routine to edit your live site unattended. What's the safest way to begin?",
          options: [
            "Give it full freedom immediately and hope for the best",
            "Have it propose or report first, then loosen control once you trust it",
            "Never use routines because any automation is dangerous",
          ],
          correctIndex: 1,
          explanation:
            "Starting with propose-or-report lets you build trust before granting unattended changes — control stays with you. Full freedom on day one is a needless risk, and avoiding automation entirely gives up all its leverage.",
        },
      },
      {
        html: `<h3>Look how far you've come</h3><p>Take a moment. You started with a single homepage built from an Instagram bio — describe, review, refine. From there you:</p><ul><li>Planned and built a whole multi-page bakery site, then published it live</li><li>Crossed into apps, building a tracker that holds your data — with checkpoints and <em>/rewind</em> to protect it</li><li>Connected your projects to the tools where your real content lives</li><li>Extended Claude with trusted plugins, and taught it your way with a reusable setup</li><li>And now — work that runs itself, with you still holding the controls</li></ul><p>You went from one page to self-running routines, never once needing to write code. That's not a small thing. That's a builder's toolkit.</p><h3>Where you go next</h3><p>The best next step is a real project of your own. Pick something small and useful, and build it the way you learned here: describe, review, refine — and let your setup and routines carry the rest. Congratulations on finishing the course. Now go build something. 🎉</p>`,
        question: {
          text: "Looking back across the whole course, what's the core loop that carried you from one page to self-running routines?",
          options: [
            "Memorizing code so you never need Claude",
            "Describe what you want, review what you get, and refine — with safety nets and setups doing the heavy lifting",
            "Installing as many plugins and routines as possible",
          ],
          correctIndex: 1,
          explanation:
            "Describe-review-refine, backed by checkpoints, setups, and routines, is the through-line of everything you built — no coding required. The goal was never to memorize code or to pile on tools for their own sake.",
        },
      },
    ],
  },
];
