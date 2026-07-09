import type { UnitSeed } from "./types";

export const CLAUDE_UNIT_2: UnitSeed = {
  title: "Prompting for Claude",
  lessons: [
    {
      title: "Creativity Stimulation",
      summary: "Give Claude a frame and watch it explore deeply inside it",
      estimatedMinutes: 12,
      content: `<p>Claude's creativity is thoughtful rather than flashy — it explores deeply inside a clear frame and plays it safe without one. This lesson teaches you how to build that frame.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "Write a short announcement for [something you need to promote, e.g. a product launch, an event, or a team update]. The audience is [who it's for], and it should feel [tone, e.g. warm but confident — no hype]. Keep it under 150 words, no exclamation marks, and avoid clichés like 'unlock' and 'seamless'. Give me 3 meaningfully different versions, not variations of one idea.",
        note: "Pick your favourite of the three and ask Claude to 'take that one further' — that's how you push past the safe first draft.",
      },
      steps: [
        {
          html: `<h3>Why "be creative" falls flat</h3><p>Ask Claude to "write something creative" and you'll usually get something competent and forgettable. That's not a limitation — it's the design philosophy you met in lesson one: without a frame, Claude plays it safe.</p><p>Claude's creativity is <strong>guided by structure and intent</strong>. The counterintuitive truth: constraints don't limit Claude's creativity — they <em>unlock</em> it.</p><h3>The creative frame</h3><p>A strong creative prompt answers four questions:</p><ul><li><strong>Who is it for?</strong> The audience shapes everything.</li><li><strong>What feeling should it create?</strong> Nostalgic? Urgent? Playful?</li><li><strong>What are the boundaries?</strong> Length, format, things to avoid.</li><li><strong>What does success look like?</strong> A reference, an example, a vibe.</li></ul><p>Compare: "Write a product announcement" vs. "Write a product announcement for busy freelancers who distrust hype. Dry humor welcome, no exclamation marks, under 150 words, in the spirit of how Basecamp writes."</p>`,
          question: {
            text: "Which prompt is most likely to get a genuinely creative result from Claude?",
            options: [
              '"Write something creative about coffee"',
              '"Write a 100-word love letter to coffee from a sleep-deprived new parent, funny but tender, no clichés about Mondays"',
              '"Write the most creative coffee text ever written, surprise me"',
            ],
            correctIndex: 1,
            explanation:
              "The second prompt gives Claude a voice, an emotion, boundaries, and things to avoid — a frame to explore deeply inside. The others leave Claude guessing, which produces safe, generic output.",
          },
        },
        {
          html: `<h3>Techniques that spark ideas</h3><p>Once the frame is set, these moves push Claude past its first, most obvious ideas:</p><ul><li><strong>Ask for quantity with variety:</strong> "Give me 10 taglines — make them meaningfully different from each other, not variations of one idea."</li><li><strong>Force a perspective shift:</strong> "How would a chef describe this software?" "Explain our service as a fable."</li><li><strong>Ban the obvious:</strong> "No puns, no 'unlock', no 'seamless', no rocket emojis."</li><li><strong>Combine unrelated things:</strong> "Blend the tone of a nature documentary with the urgency of a sports broadcast."</li></ul><p>Then <strong>iterate on the winner</strong>: pick the most promising option and say "Take #7 further — darker, and half the length."</p>`,
          question: {
            text: "Claude gave you 10 taglines but they all feel like variations of the same idea. What's the best next prompt?",
            options: [
              '"Give me 10 more" and hope for better luck',
              '"These are too similar. Give me 10 new ones, each using a completely different angle — one emotional, one funny, one contrarian, and so on"',
              '"Be more creative"',
            ],
            correctIndex: 1,
            explanation:
              "Naming the problem (too similar) and prescribing the fix (explicitly different angles) gives Claude a new frame. \"Give me more\" or \"be more creative\" leaves it aimed at the same target.",
          },
        },
        {
          html: `<h3>Matching your voice</h3><p>Claude is unusually good at absorbing and maintaining a voice — if you show it one.</p><ul><li><strong>Paste samples:</strong> "Here are three emails I've written. Match this voice for the next draft."</li><li><strong>Name the register:</strong> "Warm but professional; short sentences; never salesy."</li><li><strong>Correct precisely:</strong> "Too formal — loosen paragraph two, keep the rest."</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>Put your voice samples and style rules in a Project's instructions, and every creative chat starts already sounding like you — no re-briefing.</p></div><p>Creative work with Claude is a collaboration: you supply the frame and the taste, Claude supplies the range and the stamina. Next, we'll apply the same framing skill to analytical work.</p>`,
          question: {
            text: "You want Claude to write posts that consistently sound like you. What's the most reliable approach?",
            options: [
              "Paste a few samples of your writing and add the style rules to your Project instructions",
              'Add the words "in my style" to each prompt without ever showing your style',
              "Rewrite everything Claude produces from scratch by hand",
            ],
            correctIndex: 0,
            explanation:
              "Claude can only match a voice it has seen. Samples plus persistent Project instructions give every chat the same reference point — that's how consistency compounds.",
          },
        },
      ],
    },
    {
      title: "Analytical Frameworks",
      summary: "Structure prompts so Claude's reasoning has rails to run on",
      estimatedMinutes: 12,
      content: `<p>Claude's careful reasoning gets dramatically better when you give it a structure to reason within: sections, criteria, and explicit frameworks.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "I'm choosing between a few options for [a real decision you're facing, e.g. software vendors, job offers, or suppliers]. Here are the options: [list them]. Score each one 1–5 on the criteria that matter to me: [e.g. cost, speed, risk] — weight risk double. Show the scores in a table, then recommend one and explain the key tradeoff. Think it through step by step before concluding.",
        note: "If the recommendation surprises you, ask Claude to 'list the assumptions behind this and rate your confidence in each.'",
      },
      steps: [
        {
          html: `<h3>Structure in, structure out</h3><p>Claude especially rewards <strong>structured prompts</strong>. When your request has clear parts, Claude's answer inherits that clarity.</p><h3>Separate instructions from material</h3><p>The single most useful habit: keep the rules and the content visibly apart.</p><p><em>"Here are the rules: keep all figures unchanged, flag anything that sounds like a legal claim, target a 9th-grade reading level.</em></p><p><em>Here is the text to review: [paste]"</em></p><p>Without that separation, instructions get lost inside the material — and Claude may treat your rules as part of the text to edit.</p><h3>Be explicit about depth and shape</h3><ul><li>"Give a balanced view: the strongest argument on each side, then your recommendation."</li><li>"Answer in a table: option, cost, risk, best for."</li><li>"Think through this step by step before answering."</li></ul><p>That last one — asking Claude to reason before concluding — measurably improves answers on hard problems.</p>`,
          question: {
            text: "You want Claude to review a report using five specific rules. How should you structure the prompt?",
            options: [
              "Mix the rules into the middle of the pasted report so they're close to the relevant sections",
              'State the rules first under "Here are the rules:", then paste the report under "Here is the text:"',
              "Paste the report alone and add the rules one at a time in later messages as you remember them",
            ],
            correctIndex: 1,
            explanation:
              "A clear separation between instructions and material is the structure Claude rewards most. Rules buried in the content can be missed — or edited as if they were part of the text.",
          },
        },
        {
          html: `<h3>Borrow proven frameworks</h3><p>You don't have to invent analytical structure — name a framework and Claude applies it rigorously:</p><ul><li><strong>Pros / cons / mitigations:</strong> "…and for each con, suggest a mitigation."</li><li><strong>SWOT:</strong> strengths, weaknesses, opportunities, threats for a plan or competitor.</li><li><strong>Decision matrix:</strong> "Score each option 1–5 on cost, speed, and risk. Weight risk double. Show the math."</li><li><strong>Pre-mortem:</strong> "Assume this project failed one year from now. Write the story of why."</li></ul><p>Frameworks do two jobs: they force <strong>completeness</strong> (no dimension gets skipped) and they make the answer <strong>comparable</strong> (every option judged by the same criteria).</p>`,
          question: {
            text: "You're choosing between three software vendors and want a fair, comparable analysis. Which prompt uses structure best?",
            options: [
              '"Which vendor is best?"',
              '"Score each vendor 1–5 on price, support, and security. Weight security double, show the scores in a table, then recommend one and explain the tradeoff."',
              '"Tell me everything about each vendor in as much detail as possible"',
            ],
            correctIndex: 1,
            explanation:
              "A decision matrix with named criteria, weights, and a required format makes the comparison complete and consistent. The vague version invites an unstructured opinion; the exhaustive version buries the decision in detail.",
          },
        },
        {
          html: `<h3>Make Claude show its work</h3><p>For analysis you'll act on, don't accept conclusions alone:</p><ul><li><strong>"Walk through your reasoning before the recommendation."</strong> Errors hide in leaps; visible steps expose them.</li><li><strong>"State your assumptions explicitly."</strong> If an assumption is wrong, you'll catch it — instead of inheriting it.</li><li><strong>"Rate your confidence on each point and say what would change your mind."</strong> Claude is honest about uncertainty when invited to be.</li></ul><div class="discovery"><p>💡 <strong>Pro tip</strong></p><p>Claude follows long instruction lists unusually well — don't be shy about giving it your full checklist or style guide in one go.</p></div><p>Structure turns Claude from an answer machine into an analyst whose work you can audit. Next: chaining that reasoning across steps and sources.</p>`,
          question: {
            text: "Claude recommends a pricing change for your product. Before acting, what's the smartest follow-up?",
            options: [
              '"Are you sure?" — and accept whatever it says',
              '"List the assumptions behind this recommendation and rate your confidence in each"',
              "Nothing — a confident recommendation means the analysis was sound",
            ],
            correctIndex: 1,
            explanation:
              "Surfacing assumptions and confidence lets you audit the reasoning, not just the conclusion. A confident tone is not evidence — visible assumptions are.",
          },
        },
      ],
    },
    {
      title: "Interconnected Reasoning",
      summary: "Chain steps, connect sources, and reason across an entire conversation",
      estimatedMinutes: 12,
      content: `<p>Claude's deepest strength is holding many threads at once — long documents, earlier decisions, multiple sources — and reasoning across them without losing coherence.</p>`,
      tryIt: {
        tool: "Claude",
        url: "https://claude.ai",
        prompt:
          "I want to work through [a complex project, e.g. a launch plan or a strategy decision] with you step by step, not all at once. Here's my situation: [describe it]. Start by asking me the three most important questions I should answer first — don't try to solve everything yet. We'll tackle them one at a time, and each answer should build on the last.",
        note: "Work through the chain one step at a time — reviewing each conclusion before the next stops errors from compounding.",
      },
      steps: [
        {
          html: `<h3>One question vs. a chain of thought</h3><p>Simple tasks fit in one prompt. Real problems rarely do. Claude's standout ability is <strong>sustained, connected reasoning</strong>: it maintains logic and context across a long conversation, so each step can build on the last.</p><h3>Decompose, then chain</h3><p>Instead of one giant prompt — "analyze my market, pick a strategy, and write the launch plan" — walk it:</p><ul><li><strong>Step 1:</strong> "Here's my product and market. What are the three most important strategic questions I should answer first?"</li><li><strong>Step 2:</strong> "Let's take question one. Here's what I know — reason through it."</li><li><strong>Step 3:</strong> "Given what we concluded, which strategy fits best, and what would falsify that choice?"</li><li><strong>Step 4:</strong> "Now draft the launch plan consistent with everything above."</li></ul><p>Each answer becomes context for the next. The final plan isn't a guess — it's the conclusion of a visible chain you steered.</p>`,
          question: {
            text: "Why does chaining steps usually beat one giant do-everything prompt for complex problems?",
            options: [
              "Claude has a strict word limit on single answers",
              "Each step's conclusion becomes reviewed context for the next, so errors get caught early instead of compounding into the final output",
              "Shorter prompts are always better in every situation",
            ],
            correctIndex: 1,
            explanation:
              "In a chain, you inspect and correct each link before building on it. In one giant prompt, a wrong early assumption silently shapes everything downstream.",
          },
        },
        {
          html: `<h3>Reasoning across documents</h3><p>Claude holds long material in mind — entire reports, contracts, transcripts — and, crucially, reasons <em>between</em> them:</p><ul><li><strong>Find disagreement:</strong> "Across these three reports, where do the authors contradict each other?"</li><li><strong>Trace a thread:</strong> "Follow how the budget assumptions change from the January plan to the June revision."</li><li><strong>Cross-check:</strong> "Does anything in the contract conflict with what we promised in this proposal?"</li></ul><p>Practical tip: give Claude the <strong>whole</strong> document, not fragments — quality collapses when key context is missing, and with Claude you rarely need to trim. Then ask precise questions: "Which clauses create obligations for us after termination?" beats "summarize this contract."</p>`,
          question: {
            text: "You have a supplier contract and a customer proposal, and you're worried they conflict. What's the strongest use of Claude?",
            options: [
              "Ask for a separate summary of each document and compare the summaries yourself",
              'Provide both documents and ask: "Identify any commitments in the proposal that the contract prevents us from fulfilling"',
              "Ask Claude which document is longer",
            ],
            correctIndex: 1,
            explanation:
              "Cross-document reasoning is exactly what Claude's large context enables. Comparing summaries yourself throws away detail — the conflicts often live in clauses a summary would drop.",
          },
        },
        {
          html: `<h3>Keeping the thread over time</h3><p>Connected reasoning also spans <em>sessions</em> — this is where everything you've learned links up:</p><ul><li><strong>Projects</strong> carry your constraints and earlier decisions into every new chat.</li><li><strong>Chained chats</strong> inside a Project let each phase build on settled conclusions.</li><li><strong>Checkpoint summaries</strong> keep long threads sharp: "Summarize what we've decided so far and what's still open" — then continue from that summary.</li></ul><div class="discovery"><p>💡 <strong>Discovery</strong></p><p>When a conversation gets very long, ask Claude for a decisions-so-far summary and start a fresh chat in the same Project with it. You keep the reasoning, and drop the clutter.</p></div><p>You now have Claude's full prompting toolkit: creative frames, analytical structure, and connected chains. Next unit: putting it to work on real jobs.</p>`,
          question: {
            text: "A month-long analysis thread has grown huge and unwieldy. What's the best way to continue without losing the reasoning?",
            options: [
              "Keep adding to the same chat forever, scrolling to find old decisions",
              "Start a blank chat and trust your memory to rebuild the context",
              'Ask Claude to summarize decisions and open questions, then continue from that summary in a fresh chat inside the same Project',
            ],
            correctIndex: 2,
            explanation:
              "A checkpoint summary carries the settled conclusions forward, and the Project preserves your standing context — you keep the chain of reasoning while shedding the clutter.",
          },
        },
      ],
    },
  ],
};
