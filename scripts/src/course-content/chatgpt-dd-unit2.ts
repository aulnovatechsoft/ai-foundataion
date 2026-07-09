import type { UnitSeed } from "./types";

export const CHATGPT_DD_UNIT_2: UnitSeed = {
  title: "Creating and Coding",
  lessons: [
    {
      title: "Image Generation: Cohesive Design Sets",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I need a coherent set of [6 illustrations for a pitch deck]. First, help me lock one style anchor: medium, an exact color palette, lighting, and composition rules. Generate the first reference image, then reuse that exact style for the rest, changing only the subject each time.",
        note: "Reuse the style-anchor line verbatim for every image and change one variable at a time — that's what keeps the set consistent.",
      },
      summary: "Produce consistent multi-image sets that share one style, palette, and character",
      estimatedMinutes: 14,
      content: `<p>Anyone can prompt ChatGPT for a single nice image. The real professional skill is producing a <em>set</em> — five slides, a social series, a brand kit — that looks like it came from one designer. That's a different discipline, and it starts before you generate the first image.</p>`,
      steps: [
        {
          html: `<h3>One image is easy. A set is the job.</h3><p>You've made single images before. But real work rarely needs one image — it needs a <strong>coherent set</strong>: a slide deck's illustrations, a week of social posts, a product's icon family.</p><p>The trap: generating each image fresh with a new prompt. You get five good images that don't belong together — different lighting, different proportions, a character whose face keeps changing.</p><h3>The mindset shift</h3><p>Stop thinking "make an image." Start thinking "<strong>establish a style, then apply it repeatedly</strong>." The first image isn't the deliverable — it's the reference every later image inherits from.</p>`,
        },
        {
          html: `<h3>Lock the style before you scale</h3><p>Before generating the whole set, spend your effort nailing <strong>one</strong> reference image. Define it explicitly:</p><ul><li><strong>Medium & rendering:</strong> flat vector, 3D clay, watercolor, photoreal</li><li><strong>Palette:</strong> name the exact colors or give hex values</li><li><strong>Lighting & mood:</strong> soft daylight, high-contrast studio, warm dusk</li><li><strong>Composition rules:</strong> centered subject, generous negative space, consistent margins</li></ul><p>Once that first image is right, you have a <strong>style anchor</strong>. Everything else references it: "same style, palette, and lighting as before, but now show…"</p>`,
          question: {
            text: 'You need six illustrations for a pitch deck. You write a fresh, detailed prompt for each one, describing the scene from scratch every time. The results are all attractive but clearly don\'t match. What went wrong?',
            options: [
              "The prompts weren't detailed enough — each needed more description",
              "You never established a single style anchor to carry across all six",
              "ChatGPT can't produce more than one image in a project",
              "Pitch-deck art should always be photos, not illustrations",
            ],
            correctIndex: 1,
            explanation:
              "Detail per-image isn't the problem — consistency is. Without one locked reference that every image inherits from, each generation drifts into its own look. Nail the style once, then reuse it.",
          },
        },
        {
          html: `<h3>Keeping a character consistent</h3><p>Character consistency is the hardest part of a set — and where ChatGPT's image model shines. Once you have a character you like, refer back to it rather than re-describing from zero.</p><ul><li>Generate the character once and describe their <strong>fixed traits</strong>: hair, outfit, build, color scheme.</li><li>For each new image, say "the <strong>same character</strong> from before, now doing X."</li><li>Keep the identity anchors stable while only the <em>action or setting</em> changes.</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Uploading your reference image back into the conversation and saying "match this character exactly" often beats trying to describe them perfectly in words. Show, don't just tell.</p></div>`,
          question: {
            text: 'You built a friendly mascot for a series of onboarding screens. On screen three, the mascot suddenly has a different jacket color and a rounder face. What\'s the most reliable fix?',
            options: [
              "Regenerate screen three repeatedly until the face happens to match",
              "Re-upload the original mascot image and ask ChatGPT to match it exactly, changing only the pose",
              "Add more adjectives about 'consistency' to the prompt",
              "Start a brand-new chat so the model forgets the drift",
            ],
            correctIndex: 1,
            explanation:
              "Showing the model the exact reference beats hoping a re-roll lands. Anchor identity with the actual image and change only what needs to change — here, the pose.",
          },
        },
        {
          html: `<h3>Iteration, not lottery</h3><p>Weak users treat image generation like a slot machine — regenerate and pray. Strong users iterate like an art director:</p><ul><li><strong>Change one variable at a time:</strong> "same image, warmer lighting" tells you exactly what that dial does.</li><li><strong>Name the problem, not just the wish:</strong> "the text is too cramped — add breathing room at the top."</li><li><strong>Build a small style guide in the chat:</strong> once a look works, restate it in one line so you can reuse it verbatim.</li></ul><p>This turns a random process into a <strong>repeatable one</strong> — the whole point of a set.</p>`,
          question: {
            text: 'Your first social-post image is 90% there but the color feels slightly off-brand. What move keeps the rest of the series on track?',
            options: [
              'Regenerate from scratch with a completely new prompt',
              'Ask for "the same image, but shift the palette toward our exact brand blue" — one controlled change',
              'Accept it and manually recolor every image later in an editor',
              'Generate ten random variations and pick whichever looks closest',
            ],
            correctIndex: 1,
            explanation:
              "Controlled, single-variable iteration both fixes this image and gives you a reusable instruction for the whole series. Random regeneration throws away the 90% that already works.",
          },
        },
        {
          html: `<h3>Assembling the full set</h3><p>With a locked style and a stable character, producing the set becomes almost mechanical:</p><ul><li>State the shared style once as your reusable line.</li><li>For each asset, keep that line and swap only the subject: "…now the checkout screen," "…now the empty-state illustration."</li><li>Do a final <strong>consistency pass</strong>: view them together and flag any outlier to regenerate against the anchor.</li></ul><h3>Formats and delivery</h3><p>Ask for the aspect ratios you actually need — square for social, wide for slides, tall for stories. Requesting the right dimensions up front beats awkward cropping later, and keeps composition intact across formats.</p>`,
          question: {
            text: 'You have a beautiful, consistent 8-image set at square ratio, but you need three of them as wide slide banners. What\'s the cleaner approach?',
            options: [
              "Crop the squares down — it's faster than regenerating",
              "Regenerate those three from the style anchor specifying a wide aspect ratio",
              "Stretch the squares to fit the wide frame",
              "Leave them square and let the slides letterbox them",
            ],
            correctIndex: 1,
            explanation:
              "Regenerating from your established anchor at the right ratio preserves composition and style. Cropping or stretching a square into a wide frame usually breaks the layout you carefully built.",
          },
        },
        {
          html: `<h3>What you can now do</h3><p>You've moved from "make me an image" to <strong>directing a coherent visual system</strong>: lock a style, hold a character steady, iterate one variable at a time, and deliver in the formats you need.</p><h3>Next: building things that work</h3><p>Images are one kind of output. Next, we shift from things you look at to things you <em>use</em> — small tools, pages, and apps you build just by describing what you want. That's vibe coding, and it's the next lesson.</p>`,
        },
      ],
    },
    {
      title: "Vibe Coding With ChatGPT",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "Let's vibe code a small single-page tool: [a cost-per-use calculator]. Start with the simplest working version, show me the code and how to preview it, then add one feature at a time so I can confirm each step works before moving on. Explain in plain English what each part does.",
        note: "If something breaks, paste the exact error message back — and keep it to one new feature per turn.",
      },
      summary: "Build small tools and pages by describing outcomes and iterating conversationally",
      estimatedMinutes: 14,
      content: `<p>You don't need to know how to code to build something that runs. "Vibe coding" means describing the outcome you want and steering ChatGPT toward it — reading just enough of the result to guide the next step. It's powerful, and it has clear limits worth knowing.</p>`,
      steps: [
        {
          html: `<h3>What "vibe coding" actually means</h3><p>Vibe coding is building software by describing <strong>outcomes</strong> instead of writing instructions line by line. You say what you want to happen; ChatGPT writes the code and, in many cases, runs it for you.</p><p>You stay in the driver's seat at the level of <em>intent</em> — "make a tip calculator that splits the bill," "add a dark mode toggle" — without touching the syntax yourself.</p><h3>Why it works now</h3><p>ChatGPT can generate a working page or small tool, show you a preview, and revise it conversationally. The loop is: describe → see result → react → refine. You're directing, not typing code.</p>`,
        },
        {
          html: `<h3>Where vibe coding genuinely shines</h3><p>It's a superpower for <strong>small, self-contained things</strong>:</p><ul><li>A single-page tool: a calculator, a converter, a quiz</li><li>A personal landing page or simple portfolio section</li><li>A quick prototype to show an idea before committing to it</li><li>A one-off script to reshape some data</li></ul><p>These share a trait: the goal is <strong>describable in plain language</strong> and small enough that you can see whether it works by just looking at it.</p>`,
          question: {
            text: 'A colleague wants to test whether a "cost-per-use" calculator would help customers decide on a subscription. They have no coding background. What\'s the ideal vibe-coding task here?',
            options: [
              "It's too risky — they should hire a developer before trying anything",
              "Build a single-page calculator prototype by describing the inputs and the formula, then iterate on it",
              "Write a full production billing system in one prompt",
              "Skip the tool and just describe the idea in a document",
            ],
            correctIndex: 1,
            explanation:
              "A self-contained, describable, look-and-see tool is exactly vibe coding's sweet spot. It lets a non-coder validate the idea fast without over-building.",
          },
        },
        {
          html: `<h3>Where it collapses</h3><p>Vibe coding breaks down as complexity grows. Watch for these warning signs:</p><ul><li>The project spans <strong>many files</strong> that must stay in sync</li><li>It needs real <strong>security, accounts, or payments</strong></li><li>You can't tell by looking whether it's <em>correct</em> (not just whether it runs)</li><li>Each fix quietly breaks something you fixed earlier</li></ul><p>When you hit "it works but I have no idea why, and I'm scared to change it," you've reached the edge. That's the signal to slow down, add structure, or bring in someone who reads the code.</p>`,
          question: {
            text: 'Your vibe-coded app started as a simple form. Now every change you request fixes one thing and breaks two others, and you can\'t tell why. What does this signal?',
            options: [
              "You just need to prompt more forcefully",
              "You've outgrown pure vibe coding — the project needs real structure or someone reading the code",
              "ChatGPT is broken and you should start over from scratch",
              "The app is finished and shouldn't be changed further",
            ],
            correctIndex: 1,
            explanation:
              "Whack-a-mole bugs and 'I don't know why it works' are the classic collapse signals. Pure vibe coding has hit its ceiling; the fix is structure and comprehension, not louder prompts.",
          },
        },
        {
          html: `<h3>Read just enough to steer</h3><p>You don't need to understand every line — but reading <em>a little</em> makes you dramatically better at directing. Aim to grasp:</p><ul><li><strong>The shape:</strong> what are the main pieces and how do they connect?</li><li><strong>The knobs:</strong> where do the values you care about live (prices, colors, text)?</li><li><strong>The errors:</strong> when something breaks, paste the exact error back — it's the fastest fix.</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Ask ChatGPT to "explain what this code does in plain English, section by section." You'll learn the map without learning the language — and your next requests get sharper.</p></div>`,
          question: {
            text: 'Your page throws an error and goes blank. You\'re not a coder. What gets you unstuck fastest?',
            options: [
              "Rewrite the entire request from scratch and hope the error disappears",
              "Copy the exact error message back to ChatGPT and ask it to diagnose and fix it",
              "Delete the section you think might be responsible and move on",
              "Ignore the error since the code was generated by AI and should be correct",
            ],
            correctIndex: 1,
            explanation:
              "The exact error text is the highest-signal thing you can give the model. Pasting it back usually pinpoints the fix immediately — far faster than guessing or starting over.",
          },
        },
        {
          html: `<h3>Iterate in small, testable steps</h3><p>The reliable rhythm for vibe coding:</p><ul><li><strong>Start minimal:</strong> get the simplest version working before adding features.</li><li><strong>One feature per turn:</strong> add, look, confirm it works, then move on.</li><li><strong>Confirm before building on it:</strong> a broken foundation makes every later change harder.</li><li><strong>Save working versions:</strong> when something works, copy it out so you can return to a known-good point.</li></ul><p>Big-bang requests ("build the whole thing at once") feel efficient but make failures impossible to locate. Small steps keep every problem findable.</p>`,
          question: {
            text: 'You want a landing page with a hero, a pricing table, a contact form, and animations. What\'s the smarter way to build it via vibe coding?',
            options: [
              "Ask for everything in one giant prompt so it's done in one shot",
              "Build the hero first, confirm it works, then add each section one at a time",
              "Build all four sections separately in four chats and merge them yourself",
              "Start with the animations since they're the hardest part",
            ],
            correctIndex: 1,
            explanation:
              "Incremental, confirm-as-you-go building keeps every failure locatable and every foundation solid. One giant prompt makes it nearly impossible to tell what broke when something inevitably does.",
          },
        },
        {
          html: `<h3>From describing to delegating</h3><p>You now know the vibe-coding loop — describe, preview, read just enough, iterate small — and, just as important, where it stops being the right tool.</p><h3>Next: real automation, no coding required</h3><p>Vibe coding builds things you look at. Next, we put ChatGPT's code execution to work on <em>chores</em> — converting files, cleaning up messy text, reshaping spreadsheets — using Codex without needing to program at all. That's the next lesson.</p>`,
        },
      ],
    },
    {
      title: "Codex for Non-Coding Tasks",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I'll upload [a messy CSV of orders]. Here's the outcome I want: every date reformatted to YYYY-MM-DD, blanks left empty, and no guessing at missing values. Run it on a small 5-row sample first and show me the result before applying it to the whole file.",
        note: "Reconcile the row counts (rows in should equal rows out) before you trust the full run.",
      },
      summary: "Use code execution for everyday automation — no programming knowledge needed",
      estimatedMinutes: 13,
      content: `<p>Some chores are pure drudgery: renaming 200 files, cleaning a messy export, converting formats, splitting a giant spreadsheet. ChatGPT can write and run the code to do these for you — while you just describe the chore in plain English. You never see the programming unless you want to.</p>`,
      steps: [
        {
          html: `<h3>The chores hiding in your week</h3><p>Think about the repetitive, fiddly tasks you tolerate:</p><ul><li>Converting a folder of files from one format to another</li><li>Renaming hundreds of files to a consistent pattern</li><li>Cleaning up messy, inconsistent text or exported data</li><li>Merging, splitting, or reshaping spreadsheets</li></ul><p>Each is tedious by hand and trivial for code. The catch used to be: you had to <em>write</em> the code. Now you just describe the outcome and let ChatGPT execute it.</p><h3>How it works</h3><p>You upload your files, describe what you want done, and ChatGPT writes a small program, <strong>runs it in a sandbox</strong>, and hands you back the results — no setup, no installs, no syntax.</p>`,
        },
        {
          html: `<h3>Describe the outcome, not the method</h3><p>You don't need to know <em>how</em> — just be crystal clear about <strong>what</strong> and <strong>the rules</strong>:</p><ul><li><strong>Input:</strong> "Here's a CSV of orders with messy date formats."</li><li><strong>Desired output:</strong> "I want every date as YYYY-MM-DD."</li><li><strong>Edge cases:</strong> "If a date is missing, leave the cell blank, don't guess."</li></ul><p>The clearer your rules, the fewer surprises. Vague instructions ("clean this up") make ChatGPT guess what "clean" means — and it might guess differently than you.</p>`,
          question: {
            text: 'You upload a spreadsheet of customer records and say only "clean this up." ChatGPT removes duplicate rows — but it also dropped rows you wanted to keep, because two customers happened to share a name. What would have prevented this?',
            options: [
              "Nothing — deduplication is always unpredictable",
              "Specifying the exact rule: 'treat rows as duplicates only if the email matches, not the name'",
              "Uploading the file as a PDF instead of a spreadsheet",
              "Asking ChatGPT to clean it up more forcefully",
            ],
            correctIndex: 1,
            explanation:
              "'Clean this up' left the definition of a duplicate to ChatGPT. Stating the precise rule — match on email, not name — removes the guesswork and protects the rows you needed.",
          },
        },
        {
          html: `<h3>Everyday wins you can copy</h3><p>Concrete tasks that work reliably:</p><ul><li><strong>Batch rename:</strong> "Rename these to invoice-2026-01.pdf, invoice-2026-02.pdf, in date order."</li><li><strong>Format conversion:</strong> "Turn these images into a single PDF," "convert this CSV to a clean Excel file with headers frozen."</li><li><strong>Text cleanup:</strong> "Strip the extra blank lines, fix the double spaces, and standardize the bullet characters."</li><li><strong>Spreadsheet surgery:</strong> "Split this master sheet into one file per region."</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Ask ChatGPT to run the task on a <strong>small sample first</strong> and show you the result. Once the sample looks right, tell it to apply the same logic to the full batch. You catch mistakes cheaply.</p></div>`,
          question: {
            text: 'You need to rename and reformat 500 files a specific way. What\'s the safest way to run this?',
            options: [
              "Run it on all 500 immediately to save time",
              "Have ChatGPT process 5 files first, verify the output matches what you want, then apply it to all 500",
              "Rename them manually to be sure it's correct",
              "Ask for the code and run it yourself somewhere else",
            ],
            correctIndex: 1,
            explanation:
              "Testing on a small sample catches misunderstandings before they hit all 500 files. Once the sample is right, scaling up is safe and instant.",
          },
        },
        {
          html: `<h3>Always sanity-check the output</h3><p>Code runs exactly as written — which means a small misunderstanding gets applied <em>perfectly</em> to everything. Protect yourself:</p><ul><li><strong>Spot-check the results:</strong> open a few of the output files or rows.</li><li><strong>Check the counts:</strong> "I uploaded 500, did 500 come back?" A mismatch is a red flag.</li><li><strong>Keep your originals:</strong> work on copies so a bad run is never destructive.</li></ul><p>ChatGPT is fast and tireless, but it does <em>what you asked</em>, not necessarily <em>what you meant</em>. The check is your safety net.</p>`,
          question: {
            text: 'You asked ChatGPT to split a 10,000-row master sheet into one file per region. It returns the files quickly. What\'s the single most valuable check before you trust them?',
            options: [
              "Confirm the files have nice names",
              "Add the row counts of all the regional files and confirm they total 10,000",
              "Check that the font in the spreadsheet looks professional",
              "Nothing — code execution doesn't make mistakes",
            ],
            correctIndex: 1,
            explanation:
              "A total that doesn't reconcile to 10,000 reveals dropped or duplicated rows instantly. Reconciling counts is the fastest way to catch a logic error before it costs you.",
          },
        },
        {
          html: `<h3>You've automated the drudgery</h3><p>You can now hand off the repetitive, fiddly file-and-data chores that used to eat your afternoons — describe the outcome, test on a sample, sanity-check the result — all without writing a line of code.</p><h3>Next: bigger, multi-step projects</h3><p>Single chores are one thing. Next, we scale up to <em>complex workflows</em> — multi-file projects where Codex plans before it executes, and you review its work like a manager reviewing a draft. That's the unit checkpoint, and it's next.</p>`,
        },
      ],
    },
    {
      title: "Codex for Complex Workflows",
      tryIt: {
        tool: "ChatGPT",
        url: "https://chatgpt.com",
        prompt:
          "I want to [reorganize a large set of files into a new folder structure]. Before changing anything, lay out a step-by-step plan and what each step produces, then wait for my go-ahead. After executing, list every file you changed and why, in plain English.",
        note: "Approve the plan first, then review the summary of changes like a manager — you don't need to read every line to stay in control.",
      },
      summary: "Run multi-file projects where Codex plans, executes, and shows its work for review",
      estimatedMinutes: 15,
      content: `<p>Single chores are one thing; real projects are another. When a task spans many files and steps, the winning approach is to let Codex <em>plan before it executes</em>, then review its work like a manager reviewing a draft — approving, correcting, and steering rather than doing. This is the unit checkpoint.</p>`,
      steps: [
        {
          html: `<h3>From chores to projects</h3><p>A one-file cleanup is a chore. A <strong>project</strong> is different: it has multiple moving parts, steps that depend on each other, and a result you can't verify at a glance.</p><p>Examples:</p><ul><li>Restructuring a whole folder of documents into a new system</li><li>Building a small multi-page tool with data behind it</li><li>Running a multi-stage data pipeline: clean, merge, analyze, export</li></ul><p>For these, firing off one instruction and hoping is a recipe for confusion. You need a <strong>plan you can see</strong> before any work happens.</p>`,
        },
        {
          html: `<h3>Plan first, then execute</h3><p>The single most powerful habit for complex work: <strong>ask for the plan before the doing</strong>.</p><p>Say: "Before you make any changes, lay out the steps you'll take and what each one produces. Wait for my go-ahead."</p><p>This gives you a checkpoint to:</p><ul><li>Catch a misunderstanding while it's still cheap to fix</li><li>Reorder or drop steps you don't want</li><li>Add constraints you forgot ("don't touch the archive folder")</li></ul><p>Approving a plan takes a minute. Unwinding a wrong execution across ten files takes an hour.</p>`,
          question: {
            text: 'You want Codex to reorganize a large project folder into a new structure. What\'s the highest-leverage first move?',
            options: [
              "Tell it to just do it — you'll fix problems as they come up",
              "Ask it to propose a step-by-step plan and wait for your approval before changing anything",
              "Upload only half the files to keep the task small",
              "Ask it to work as fast as possible to save time",
            ],
            correctIndex: 1,
            explanation:
              "A plan-first checkpoint catches misunderstandings before they're applied across many files. Approving a plan is cheap; unwinding a wrong multi-file execution is expensive.",
          },
        },
        {
          html: `<h3>Review the diffs, not every line</h3><p>When Codex changes multiple files, you don't need to read all the code — you need to understand <strong>what changed and why</strong>. Ask for a summary of changes: "List each file you modified and what you did to it, in plain English."</p><ul><li><strong>Scan for surprises:</strong> did it touch something it shouldn't have?</li><li><strong>Verify the intent:</strong> does each change match a step from the approved plan?</li><li><strong>Question anything unexpected:</strong> "Why did you also edit the config file?"</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Treat Codex like a capable junior teammate: you're not rewriting their work, you're reviewing it. Good questions ("why this approach?") catch more problems than trying to check every character.</p></div>`,
          question: {
            text: 'Codex reports it finished your multi-file task and, in its summary, mentions it "also updated a settings file to make things work." That file wasn\'t in the plan. What\'s the right response?',
            options: [
              "Ignore it — Codex knows best",
              "Ask why that file was changed and confirm the change is safe before accepting it",
              "Immediately undo everything and start over",
              "Accept it silently since the task is reported as done",
            ],
            correctIndex: 1,
            explanation:
              "An out-of-plan change is exactly what a review is meant to catch. Asking 'why' surfaces whether it's a legitimate necessity or an unwanted side effect — before it causes problems later.",
          },
        },
        {
          html: `<h3>Work in reviewable chunks</h3><p>Even with a plan, don't let Codex run the entire project end to end unsupervised. Break it into <strong>stages with checkpoints</strong>:</p><ul><li>Finish stage one → review the output → approve → continue.</li><li>Keep each stage small enough that you can actually verify it.</li><li>If a stage looks wrong, fix direction <em>there</em>, before it poisons later stages.</li></ul><p>This is the same small-steps principle from vibe coding, scaled up: the bigger the project, the more it pays to have solid, verified ground under each new stage.</p>`,
          question: {
            text: 'A four-stage data pipeline (clean → merge → analyze → export) is running. Stage two\'s merged output already looks wrong. What should you do?',
            options: [
              "Let all four stages finish, then fix everything at the end",
              "Stop and correct the merge now, before the analysis and export build on bad data",
              "Delete the whole project and restart from scratch",
              "Skip straight to the export and hope it self-corrects",
            ],
            correctIndex: 1,
            explanation:
              "Errors compound downstream. Analysis and export built on a bad merge will be garbage. Fixing at the checkpoint where the problem appears saves the later stages from inheriting it.",
          },
        },
        {
          html: `<h3>Combining plan-execute with delegation</h3><p>The most powerful setups combine what you've learned: Codex <strong>plans and executes</strong> the technical work, while agent-style delegation handles the surrounding steps — fetching inputs, running the stages, collecting outputs.</p><p>You stay in the role you're best at: <strong>setting direction and judging results</strong>. You define the goal and guardrails; the tools handle the mechanical execution; you review at each checkpoint.</p><p>This is the same delegate-and-supervise mindset from Agent Mode, now applied to multi-step technical projects.</p>`,
          question: {
            text: 'For a recurring monthly report that pulls data, cleans it, analyzes it, and formats the output, what\'s the most sustainable division of labor?',
            options: [
              "Do every step manually each month so you stay in full control",
              "Let the tools handle the mechanical execution while you set the goal, guardrails, and review checkpoints",
              "Hand over the goal once and never look at the output again",
              "Rebuild the whole workflow from scratch each month",
            ],
            correctIndex: 1,
            explanation:
              "Delegate the mechanical work, keep the judgment. Defining goals and guardrails plus reviewing at checkpoints gives you leverage without losing control — and it scales month after month.",
          },
        },
        {
          html: `<h3>What you've mastered in this unit</h3><p>You can now direct ChatGPT across the full creative-and-technical range:</p><ul><li><strong>Cohesive image sets</strong> — lock a style, hold a character, iterate deliberately.</li><li><strong>Vibe coding</strong> — build small tools by describing outcomes, and know where it collapses.</li><li><strong>Codex for chores</strong> — automate file and data drudgery with no code.</li><li><strong>Codex for projects</strong> — plan-execute, review diffs, checkpoint in stages, delegate the mechanical work.</li></ul><h3>Next up</h3><p>You've learned to create and build. In the final unit, we turn to thinking at scale: <strong>research and analysis</strong> — using Deep Research to investigate, and Advanced Data Analysis to interrogate real data. That's where we head next.</p>`,
        },
      ],
    },
  ],
};
