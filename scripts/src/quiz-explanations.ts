/**
 * Per-question quiz explanations, keyed by curriculum day. Each array is
 * indexed by the question's order within that day (matches the seed's
 * `orderIndex`). These are shown to the learner AFTER they answer, so they
 * learn *why* the correct option is right — a core learning-science practice.
 *
 * Kept separate from the curriculum seed so explanations can be edited and
 * reviewed without touching the large inline quiz arrays.
 */
export const QUIZ_EXPLANATIONS: Record<number, string[]> = {
  1: [
    "LLMs generate text by repeatedly predicting the next token from the preceding context — not by looking answers up or following hand-written rules.",
    "Today's AI is a powerful pattern engine you steer with good input — not a conscious mind or an infallible source of truth.",
  ],
  2: [
    "The context window is how much text (measured in tokens) a model can hold in mind at once; go beyond it and earlier content gets dropped.",
    "A knowledge cutoff is the date the training data ends, so the model may not know newer events unless you supply them yourself.",
  ],
  3: [
    "Output quality tracks input quality — the more specific and well-contextualized your prompt, the better the result.",
    "A strong prompt states who it's for, the relevant context, the tone, and the format you want back.",
  ],
  4: [
    "The reliable pattern is to let AI draft, you direct it with feedback, then refine — speed combined with your judgment.",
    "You stay the editor in chief: AI produces options, but you decide what's good and what ships.",
  ],
  5: [
    "AI can be confidently wrong, so verify important claims against primary sources before relying on them.",
    "Explaining a concept at several depths (like to a 10-year-old, a student, then an expert) helps you understand it at multiple levels.",
  ],
  6: [
    "A hallucination is output that sounds plausible but is actually false.",
    "Grounding the model with your own source documents anchors answers to real information and reduces hallucinations.",
  ],
  7: [
    "A review day is for consolidating and applying what you've learned, not racing ahead to new material.",
    "Solid fundamentals compound — they let you move faster on everything that follows.",
  ],
  8: [
    "A reliable prompt has four parts: a role, the task, the context, and the desired output format.",
    "Assigning the model a role sets a useful perspective, which focuses and improves its answer.",
  ],
  9: [
    "Few-shot prompting means giving example input-output pairs so the model infers the pattern you want.",
    "Examples communicate tone, structure, and edge cases that are hard to capture in instructions alone.",
  ],
  10: [
    "Chain-of-thought prompting asks the model to show its reasoning step by step before answering.",
    "Step-by-step reasoning helps most on complex, multi-step problems where jumping straight to an answer is error-prone.",
  ],
  11: [
    "A system prompt is persistent instruction that shapes the entire conversation.",
    "System prompts keep the assistant on task and stop it from drifting over a long session.",
  ],
  12: [
    "When iterating, change one variable at a time so you can tell what actually improved the result.",
    "Once a prompt works well, turn it into a reusable template so you don't reinvent it every time.",
  ],
  13: [
    "A prompt library is a collection of tested, reusable prompts you can rely on.",
    "A good library is small, curated, and well organized — quality and findability beat sheer volume.",
  ],
  14: [
    "Prompt engineering is a repeatable method that multiplies the value you get from AI.",
    "An advanced prompt can combine several techniques at once: role, examples, reasoning, and output format.",
  ],
  15: [
    "The key skill is evaluating whether a tool fits a specific job — not collecting tools for their own sake.",
    "Shiny-object syndrome is chasing new tools without a clear purpose.",
  ],
  16: [
    "Effective image prompts describe subject, style, composition, lighting, and mood.",
    "AI images are least appropriate when original or licensed art is legally required.",
  ],
  17: [
    "When using AI for data, verify the calculations that matter — it can produce confident arithmetic errors.",
    "Keeping a human in the loop means people make the final decisions, with AI assisting.",
  ],
  18: [
    "A basic automation is built from triggers (what starts it) and actions (what it does).",
    "A smart way to start is small, expanding the automation as your trust in it grows.",
  ],
  19: [
    "With AI coding assistants, build in small steps and test often so you stay in control.",
    "Asking the assistant to explain its code keeps you in control and helps you learn.",
  ],
  20: [
    "A workflow becomes a system when each step reliably feeds the next.",
    "Improve one step at a time so you don't break the whole system while optimizing it.",
  ],
  21: [
    "The purpose of a toolkit is to have reliable options ready for real problems.",
    "A good project goal is a clear, single-sentence outcome.",
  ],
  22: [
    "A good project starts with a clear problem and a specific user in mind.",
    "An MVP is the smallest useful version you can actually finish and test.",
  ],
  23: [
    "The goal of a first version is something real you can test — not perfection.",
    "When you get stuck building, use AI to help unblock yourself and keep moving.",
  ],
  24: [
    "The best feedback comes from watching real usage, not just asking for opinions.",
    "Prioritize must-fix problems over nice-to-haves.",
  ],
  25: [
    "Monetization is built on delivering real value to a specific person.",
    "A common path to income is offering AI-powered services.",
  ],
  26: [
    "Building a brand is mainly about establishing trust by sharing your work.",
    "To share credibly you only need to be a step ahead and willing to share honestly.",
  ],
  27: [
    "The best way to stay current is a focused, sustainable routine — not trying to follow everything.",
    "What endures as AI changes is the fundamentals and principles.",
  ],
  28: [
    "Completing the challenge is best seen as a launch point for what comes next, not the end of learning.",
    "The habits that carry you forward are curiosity, iteration, and shipping.",
  ],
};
