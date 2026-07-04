import {
  db,
  pool,
  curriculumDays,
  quizQuestions,
  type InsertCurriculumDay,
} from "@workspace/db";
import { QUIZ_EXPLANATIONS } from "./quiz-explanations";

interface QuizSeed {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface DaySeed extends Omit<InsertCurriculumDay, "id"> {
  quiz: QuizSeed[];
}

/**
 * Inline "Try it now" practice exercises, one per day. The user answers
 * directly inside the lesson and an AI grader gives pass/retry feedback.
 */
const PRACTICE_PROMPTS: Record<number, string> = {
  1: "Write 2-3 sentences explaining to a friend what a large language model actually does under the hood, without using the words 'magic' or 'smart'.",
  2: "In your own words, explain why pasting only half of a document into an AI chat can change the quality of a summary. Mention tokens or context in your answer.",
  3: "Take this lazy prompt: 'write about dogs'. Rewrite it into a specific, detailed prompt that includes an audience, a format, and a goal.",
  4: "Write a prompt that asks AI to turn messy meeting notes into a short, friendly update email for your team. Include the tone and length you want.",
  5: "Write a prompt that asks AI to explain a topic you're curious about in three layers: like you're 10, like a college student, and like an expert.",
  6: "Describe one concrete way you would verify an AI answer before trusting it. Be specific about what you would check and where.",
  7: "Summarize the single most useful thing you learned this week about how AI works, in 2-3 sentences, as if teaching it to a colleague.",
  8: "Write a prompt with all four parts: a role for the AI, clear context, a specific task, and the output format you want.",
  9: "Write a few-shot prompt: give the AI two example input/output pairs for a task of your choice, then a new input for it to complete.",
  10: "Write a prompt that forces the AI to reason step by step before giving a final answer to a tricky question of your choice.",
  11: "Write a system prompt for an AI assistant with a specific personality, area of expertise, and two rules it must always follow.",
  12: "Take any prompt you've written before and improve it. Show the original and the improved version, and note what you changed.",
  13: "Write one reusable prompt template with placeholder variables (like {topic} or {audience}) that you could use every week.",
  14: "Write one prompt that combines at least three techniques from this week: role, examples, step-by-step reasoning, or output format.",
  15: "Pick a real task from your week and describe which type of AI tool you would use for it and why that category fits.",
  16: "Write a detailed image-generation prompt: subject, style, lighting, mood, and composition for an image you would actually use.",
  17: "Write a prompt asking AI to analyze a small table of data: state what the data is, and ask for two specific insights and one chart suggestion.",
  18: "Describe one repetitive task in your week as an automation recipe: trigger, steps, and where AI fits in the middle.",
  19: "Write a prompt asking an AI coding assistant to build a tiny tool you'd find useful. Describe what it does, inputs, and outputs.",
  20: "Sketch a three-step AI workflow for a real task: what you feed in at each step, which prompt you use, and what comes out.",
  21: "Write the elevator pitch for the AI project you want to build in week four: who it helps, what it does, why AI makes it possible.",
  22: "Write the MVP scope for your project as three bullet points: the one core feature, who will use it first, and what you'll cut.",
  23: "Write the exact first prompt you would give an AI assistant to start building version one of your project. Make it detailed.",
  24: "Write three specific questions you would ask a tester to get honest, useful feedback on your project.",
  25: "Describe one realistic way your project or AI skills could earn money, and the very first step you'd take this week.",
  26: "Draft a short post (2-4 sentences) sharing something you built or learned this month, written for your real audience.",
  27: "Design your ongoing AI learning routine: one source you'll follow, one skill you'll practice, and a weekly time slot.",
  28: "Write the 90-day goal you're committing to after this challenge, with one measurable outcome and the first action you'll take tomorrow.",
};

const CURRICULUM: DaySeed[] = [
  {
    day: 1,
    title: "Welcome to the AI Era",
    theme: "AI Foundations",
    lessonTitle: "What AI Really Is (and Isn't)",
    lessonContent:
      "Artificial intelligence is software that learns patterns from data instead of following hand-written rules. Modern AI, especially large language models, predicts the most likely next piece of text given everything before it. That simple idea powers chatbots, coding assistants, and content tools. Today you will build an accurate mental model: AI is a powerful pattern engine, not a conscious mind. Understanding this helps you use it as a leverage tool rather than a magic box.",
    taskTitle: "Map your AI opportunities",
    taskDescription:
      "List five tasks in your work or study week that involve writing, summarizing, or researching. These are your first automation targets for the next 28 days.",
    reflectionPrompt:
      "Which single task, if AI handled 80 percent of it, would give you back the most time each week?",
    estimatedMinutes: 15,
    xpReward: 100,
    quiz: [
      {
        question: "At its core, a large language model works by:",
        options: [
          "Looking up answers in a fixed database",
          "Predicting the most likely next token from context",
          "Following rules a programmer wrote by hand",
          "Searching the live internet for every answer",
        ],
        correctIndex: 1,
        explanation:
          "LLMs generate text by repeatedly predicting the next token based on the preceding context.",
      },
      {
        question: "A healthy mental model of today's AI is that it is:",
        options: [
          "A conscious mind with goals",
          "A flawless source of truth",
          "A powerful pattern engine you direct",
          "A replacement for all human judgment",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    day: 2,
    title: "How Models Think",
    theme: "AI Foundations",
    lessonTitle: "Tokens, Context, and Limits",
    lessonContent:
      "Models read and write in tokens, small chunks of text roughly the size of a word piece. The context window is how many tokens a model can consider at once. When you understand tokens and context, you understand why long documents get truncated, why being concise matters, and why the order of information changes results. You will also learn about the knowledge cutoff, the reason a model may not know recent events unless you supply them.",
    taskTitle: "Test the context window",
    taskDescription:
      "Paste a long article into any AI chat and ask for a summary. Then paste only the first half and compare. Notice how available context changes the answer.",
    reflectionPrompt:
      "How could you feed a model better context to get sharper answers in your own work?",
    estimatedMinutes: 20,
    xpReward: 100,
    quiz: [
      {
        question: "The context window determines:",
        options: [
          "How fast the model types",
          "How many tokens the model can consider at once",
          "How many users can chat at the same time",
          "The color theme of the interface",
        ],
        correctIndex: 1,
      },
      {
        question: "A model's knowledge cutoff means:",
        options: [
          "It stops working after a date",
          "It may not know events after its training data ended",
          "It can only answer two questions per day",
          "It deletes your chats automatically",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 3,
    title: "Your First Real Conversations",
    theme: "AI Foundations",
    lessonTitle: "Talking to AI Like a Pro",
    lessonContent:
      "The quality of your output depends on the quality of your input. Good AI conversations are specific, provide context, and state the desired format. Instead of asking write about marketing, you specify the audience, tone, length, and goal. You will learn to treat each prompt as a briefing you would give a talented new assistant who knows a lot but cannot read your mind.",
    taskTitle: "Rewrite a lazy prompt",
    taskDescription:
      "Take a vague request you might normally type, then rewrite it with audience, context, tone, and desired format. Run both and compare the results.",
    reflectionPrompt:
      "What context do you usually leave out that the model would need to nail your request?",
    estimatedMinutes: 20,
    xpReward: 100,
    quiz: [
      {
        question: "The biggest lever on output quality is:",
        options: [
          "The time of day you ask",
          "The specificity and context of your input",
          "How politely you phrase things",
          "The length of your account history",
        ],
        correctIndex: 1,
      },
      {
        question: "A strong prompt usually specifies:",
        options: [
          "Audience, context, tone, and format",
          "Only the topic",
          "Your favorite color",
          "Nothing, to keep the model creative",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 4,
    title: "AI for Writing",
    theme: "AI Foundations",
    lessonTitle: "Drafting at the Speed of Thought",
    lessonContent:
      "Writing is where most people feel AI's leverage first. The winning workflow is draft, direct, refine: let AI produce a fast first draft, then steer it with specific edits, then polish in your own voice. AI removes the terror of the blank page while you stay the editor in chief. You will practice turning bullet points into a clear message and adapting one piece of writing for different audiences.",
    taskTitle: "Turn notes into a message",
    taskDescription:
      "Take five rough bullet points and have AI draft a short email. Then ask it to rewrite the same email for a more senior audience.",
    reflectionPrompt:
      "Where does keeping your own voice matter most, and where is a generic draft good enough?",
    estimatedMinutes: 20,
    xpReward: 100,
    quiz: [
      {
        question: "The recommended AI writing workflow is:",
        options: [
          "Publish the first output immediately",
          "Draft, direct, refine",
          "Only edit, never draft",
          "Avoid editing to save time",
        ],
        correctIndex: 1,
      },
      {
        question: "In an AI writing workflow, you remain:",
        options: [
          "The passive reader",
          "The editor in chief",
          "Uninvolved",
          "Only a proofreader of typos",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 5,
    title: "AI for Research",
    theme: "AI Foundations",
    lessonTitle: "Learning Anything Faster",
    lessonContent:
      "AI is a patient tutor available at any hour. You can ask it to explain a concept at different levels, compare options, or quiz you. The key skill is verification: treat AI explanations as a strong starting point, then confirm important facts with primary sources. You will learn the explain it three ways technique and how to use AI to build a study plan for any new subject.",
    taskTitle: "Learn a new concept in layers",
    taskDescription:
      "Pick something you do not fully understand. Ask AI to explain it like you are twelve, then at a professional level, then with a real-world example.",
    reflectionPrompt:
      "How will you verify the AI's claims before you rely on them for something important?",
    estimatedMinutes: 20,
    xpReward: 100,
    quiz: [
      {
        question: "When using AI to research, you should:",
        options: [
          "Trust every fact without checking",
          "Verify important claims with primary sources",
          "Never ask follow-up questions",
          "Only use it for trivia",
        ],
        correctIndex: 1,
      },
      {
        question: "The explain it three ways technique helps you:",
        options: [
          "Confuse the model",
          "Understand a concept at multiple depths",
          "Make responses shorter",
          "Avoid learning",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 6,
    title: "Understanding Hallucinations",
    theme: "AI Foundations",
    lessonTitle: "When AI Confidently Gets It Wrong",
    lessonContent:
      "A hallucination is when a model produces something plausible but false. Because models predict likely text, they can invent citations, statistics, or facts with total confidence. Knowing this is a superpower: you learn to ask for sources, cross-check numbers, and design prompts that reduce fabrication. You will learn warning signs and how grounding a model with your own documents dramatically improves reliability.",
    taskTitle: "Catch a hallucination",
    taskDescription:
      "Ask AI for five sources on a niche topic, then check whether they actually exist. Note how confident the wrong answers sound.",
    reflectionPrompt:
      "In your work, where would a confident but wrong AI answer cause the most damage?",
    estimatedMinutes: 20,
    xpReward: 100,
    quiz: [
      {
        question: "An AI hallucination is:",
        options: [
          "A visual glitch",
          "Plausible-sounding but false output",
          "A type of error message",
          "A slow response",
        ],
        correctIndex: 1,
      },
      {
        question: "A good way to reduce hallucinations is to:",
        options: [
          "Ask the same question louder",
          "Ground the model with your own source documents",
          "Never ask for details",
          "Use shorter passwords",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 7,
    title: "Week 1 Review",
    theme: "AI Foundations",
    lessonTitle: "Consolidating Your Foundations",
    lessonContent:
      "You have built a working understanding of what AI is, how it processes tokens and context, how to converse effectively, and how to write, research, and stay safe from hallucinations. Today is about consolidation. Review your notes, revisit your five automation targets from Day 1, and pick the one you will focus on as prompt engineering begins next week. Foundations make everything that follows faster.",
    taskTitle: "Build your AI cheat sheet",
    taskDescription:
      "Write a one-page personal cheat sheet: your best prompt structure, three lessons learned this week, and the task you most want to automate next.",
    reflectionPrompt:
      "What surprised you most this week about working with AI?",
    estimatedMinutes: 25,
    xpReward: 150,
    quiz: [
      {
        question: "The main goal of a review day is to:",
        options: [
          "Learn brand new tools",
          "Consolidate and apply what you learned",
          "Skip ahead",
          "Delete your notes",
        ],
        correctIndex: 1,
      },
      {
        question: "Strong foundations mainly help you:",
        options: [
          "Move faster on everything that follows",
          "Impress people at parties",
          "Avoid ever using AI again",
          "Slow down future learning",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 8,
    title: "Prompt Engineering Basics",
    theme: "Prompt Engineering",
    lessonTitle: "The Anatomy of a Great Prompt",
    lessonContent:
      "A reliable prompt has four parts: role, task, context, and format. You assign the model a role to set its perspective, state the task clearly, provide the context it needs, and specify the output format. This structure turns vague requests into repeatable results. You will practice writing prompts with all four parts and see how each part changes the output.",
    taskTitle: "Write a four-part prompt",
    taskDescription:
      "Compose a prompt that includes a role, a specific task, relevant context, and a required output format. Run it and refine until the output is exactly what you wanted.",
    reflectionPrompt:
      "Which of the four parts do you most often forget, and how will you remember it?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "The four parts of a reliable prompt are:",
        options: [
          "Role, task, context, format",
          "Hello, please, thanks, bye",
          "Who, what, when, where",
          "Draft, edit, publish, share",
        ],
        correctIndex: 0,
      },
      {
        question: "Assigning the model a role helps by:",
        options: [
          "Slowing it down",
          "Setting a useful perspective for the answer",
          "Hiding your intent",
          "Reducing accuracy",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 9,
    title: "Few-Shot Prompting",
    theme: "Prompt Engineering",
    lessonTitle: "Teaching by Example",
    lessonContent:
      "Few-shot prompting means showing the model a few examples of the input and output you want before asking it to continue the pattern. Examples communicate tone, structure, and edge cases far better than description alone. You will learn when a single example is enough, when to add more, and how to keep examples consistent so the model generalizes correctly.",
    taskTitle: "Create a few-shot prompt",
    taskDescription:
      "Give the model two or three examples of a task done the way you like, then ask it to produce a fourth. Compare against a version with no examples.",
    reflectionPrompt:
      "For which recurring task would a saved set of examples save you the most effort?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "Few-shot prompting means:",
        options: [
          "Asking many questions quickly",
          "Providing example input-output pairs to guide the model",
          "Using very short prompts",
          "Limiting the model to a few words",
        ],
        correctIndex: 1,
      },
      {
        question: "Examples are powerful because they communicate:",
        options: [
          "Tone, structure, and edge cases",
          "Only the topic",
          "Nothing useful",
          "The current date",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 10,
    title: "Chain-of-Thought",
    theme: "Prompt Engineering",
    lessonTitle: "Making AI Reason Step by Step",
    lessonContent:
      "For complex problems, asking the model to work step by step improves accuracy. This is chain-of-thought prompting. By requesting the reasoning before the final answer, you help the model avoid jumping to conclusions, and you can spot where logic breaks down. You will learn how to ask for structured reasoning and when to hide or show that reasoning in your final output.",
    taskTitle: "Force step-by-step reasoning",
    taskDescription:
      "Take a multi-step problem and add think step by step to your prompt. Compare the accuracy against a direct-answer version.",
    reflectionPrompt:
      "Where in your work would seeing the AI's reasoning help you trust the result?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "Chain-of-thought prompting asks the model to:",
        options: [
          "Answer instantly with no explanation",
          "Show its reasoning step by step",
          "Use only one sentence",
          "Ignore the question",
        ],
        correctIndex: 1,
      },
      {
        question: "Step-by-step reasoning is most useful for:",
        options: [
          "Simple greetings",
          "Complex, multi-step problems",
          "Changing fonts",
          "Making text shorter",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 11,
    title: "System Prompts",
    theme: "Prompt Engineering",
    lessonTitle: "Setting the Rules of Engagement",
    lessonContent:
      "A system prompt sets persistent instructions that apply to an entire conversation, such as persona, constraints, and formatting rules. While a normal message is one turn, a system prompt shapes every response. You will learn to write system prompts that keep an assistant on brand, enforce a tone, and prevent it from drifting off task across a long session.",
    taskTitle: "Design a system prompt",
    taskDescription:
      "Write a system prompt for an assistant that always answers in your preferred tone and format. Test it across several different questions.",
    reflectionPrompt:
      "What persistent rules would make an AI assistant feel truly yours?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "A system prompt is best described as:",
        options: [
          "A one-time question",
          "Persistent instructions for the whole conversation",
          "An error log",
          "A billing setting",
        ],
        correctIndex: 1,
      },
      {
        question: "System prompts help prevent:",
        options: [
          "The assistant drifting off task over a long session",
          "The screen from turning off",
          "Your internet from slowing",
          "New messages from arriving",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 12,
    title: "Prompt Iteration",
    theme: "Prompt Engineering",
    lessonTitle: "The Refinement Loop",
    lessonContent:
      "Great prompts are rarely written in one shot. The pros iterate: run, inspect what is wrong, adjust one variable, and run again. Treating prompting as an experiment rather than a guess produces reliable results. You will learn to change one thing at a time, keep a record of what works, and turn a winning prompt into a reusable template.",
    taskTitle: "Run three iterations",
    taskDescription:
      "Start with a rough prompt and improve it across three iterations, changing only one thing each time. Save the final version as a template.",
    reflectionPrompt:
      "What made the biggest difference between your first and final prompt?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "When iterating on a prompt you should:",
        options: [
          "Change many things at once",
          "Change one variable at a time",
          "Never change anything",
          "Restart from scratch every time",
        ],
        correctIndex: 1,
      },
      {
        question: "A winning prompt should be turned into:",
        options: [
          "A reusable template",
          "A secret you forget",
          "A single-use message",
          "A screenshot only",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 13,
    title: "Prompt Libraries",
    theme: "Prompt Engineering",
    lessonTitle: "Building Your Personal Arsenal",
    lessonContent:
      "Once you find prompts that work, save them. A prompt library is a personal collection of tested prompts organized by task, so you never start from zero. You will learn how to name, tag, and store prompts, and how a small, well-curated library beats a huge messy one. This is the habit that compounds your productivity over months.",
    taskTitle: "Start your prompt library",
    taskDescription:
      "Save your three best prompts so far with clear titles and categories. Note what each one is for and when to use it.",
    reflectionPrompt:
      "Which three prompts will you reach for most often, and why?",
    estimatedMinutes: 20,
    xpReward: 100,
    quiz: [
      {
        question: "A prompt library is:",
        options: [
          "A collection of tested, reusable prompts",
          "A book about libraries",
          "A list of errors",
          "A social feed",
        ],
        correctIndex: 0,
      },
      {
        question: "A good prompt library is:",
        options: [
          "As large and messy as possible",
          "Small, curated, and well organized",
          "Never used",
          "Kept only in your head",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 14,
    title: "Week 2 Review",
    theme: "Prompt Engineering",
    lessonTitle: "Mastering the Craft",
    lessonContent:
      "You now command the core techniques of prompt engineering: structured prompts, few-shot examples, chain-of-thought, system prompts, iteration, and a personal library. Today you consolidate these into a repeatable method you can apply to any task. Prompt engineering is the multiplier that makes every AI tool in the coming weeks far more powerful.",
    taskTitle: "Combine every technique",
    taskDescription:
      "Write one advanced prompt that uses a role, an example, step-by-step reasoning, and a required format. Save it to your library.",
    reflectionPrompt:
      "Which technique from this week changed how you work the most?",
    estimatedMinutes: 30,
    xpReward: 150,
    quiz: [
      {
        question: "Prompt engineering is best described as:",
        options: [
          "A one-time trick",
          "A repeatable method that multiplies AI value",
          "Only for programmers",
          "Unnecessary if you type fast",
        ],
        correctIndex: 1,
      },
      {
        question: "An advanced prompt can combine:",
        options: [
          "Role, examples, reasoning, and format",
          "Only a greeting",
          "Random words",
          "Nothing at all",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 15,
    title: "The AI Tool Landscape",
    theme: "AI Tools and Workflows",
    lessonTitle: "Choosing the Right Tool",
    lessonContent:
      "There is a growing universe of AI tools for writing, images, audio, code, and automation. The skill is not memorizing them all but knowing how to evaluate a tool for a job: what it does well, its limits, and its cost. You will learn a simple framework to assess any new AI tool and avoid shiny-object syndrome that wastes time and money.",
    taskTitle: "Evaluate three tools",
    taskDescription:
      "Pick three AI tools relevant to your work and rate each on capability, ease of use, and cost. Decide which one earns a place in your workflow.",
    reflectionPrompt:
      "What job are you hiring an AI tool to do, and how will you know it succeeded?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "The key tool skill is:",
        options: [
          "Memorizing every tool",
          "Evaluating a tool for a specific job",
          "Buying the most expensive option",
          "Avoiding all tools",
        ],
        correctIndex: 1,
      },
      {
        question: "Shiny-object syndrome refers to:",
        options: [
          "Chasing new tools without a clear purpose",
          "A hardware defect",
          "A design trend",
          "A pricing model",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 16,
    title: "AI for Images",
    theme: "AI Tools and Workflows",
    lessonTitle: "Creating Visuals with Words",
    lessonContent:
      "Image generation turns text descriptions into pictures. The craft is visual prompting: describing subject, style, composition, lighting, and mood clearly. You will learn how word choice steers the result, how to iterate on an image, and where AI images are appropriate versus where original photography or licensed art is required.",
    taskTitle: "Generate and refine an image",
    taskDescription:
      "Write a detailed image prompt with subject, style, and mood. Generate it, then refine the prompt twice to get closer to your vision.",
    reflectionPrompt:
      "Where could custom AI visuals improve something you already create?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "Effective image prompts describe:",
        options: [
          "Only the subject",
          "Subject, style, composition, lighting, and mood",
          "The file name only",
          "Nothing specific",
        ],
        correctIndex: 1,
      },
      {
        question: "AI images are least appropriate when:",
        options: [
          "You need a quick concept sketch",
          "Original or licensed art is legally required",
          "You are brainstorming",
          "You want many variations",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 17,
    title: "AI for Data",
    theme: "AI Tools and Workflows",
    lessonTitle: "Turning Numbers into Insight",
    lessonContent:
      "AI can help you clean, summarize, and interpret data, and explain analyses in plain language. The rule is to keep a human in the loop for decisions and to verify calculations on anything that matters. You will learn how to describe a dataset to an AI, ask for patterns, and request the reasoning so you can check the logic.",
    taskTitle: "Analyze a small dataset",
    taskDescription:
      "Give AI a small table of numbers and ask for three insights plus the reasoning. Verify at least one calculation yourself.",
    reflectionPrompt:
      "What decision could better data analysis improve for you this month?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "When using AI for data you should:",
        options: [
          "Trust every number blindly",
          "Verify calculations that matter",
          "Never look at the data",
          "Avoid asking for reasoning",
        ],
        correctIndex: 1,
      },
      {
        question: "Keeping a human in the loop means:",
        options: [
          "People make the final decisions",
          "No one reviews anything",
          "The AI is turned off",
          "Only machines decide",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 18,
    title: "AI Automation",
    theme: "AI Tools and Workflows",
    lessonTitle: "Connecting the Dots",
    lessonContent:
      "Automation chains AI with your other tools so work happens without manual steps. Think triggers and actions: when something happens, AI does a task and passes the result onward. You will learn to spot repetitive workflows worth automating and to map a simple automation before building it, starting small and expanding as trust grows.",
    taskTitle: "Design an automation",
    taskDescription:
      "Map one repetitive workflow as a trigger, an AI step, and an action. Describe exactly what each step receives and produces.",
    reflectionPrompt:
      "Which repetitive task drains your energy most and could run on autopilot?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "A basic automation is built from:",
        options: [
          "Triggers and actions",
          "Only colors",
          "Random events",
          "Manual steps only",
        ],
        correctIndex: 0,
      },
      {
        question: "A smart way to start automating is to:",
        options: [
          "Automate everything at once",
          "Start small and expand as trust grows",
          "Never test anything",
          "Avoid mapping the steps",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 19,
    title: "AI Coding Assistants",
    theme: "AI Tools and Workflows",
    lessonTitle: "Building Without a CS Degree",
    lessonContent:
      "AI coding assistants let you describe what you want and get working code, even with little programming background. The winning approach is to build in small steps, test often, and ask the assistant to explain what it wrote. You will learn how to phrase a build request, how to debug with AI, and why understanding the output keeps you in control.",
    taskTitle: "Build something tiny",
    taskDescription:
      "Ask an AI coding assistant to build a very small script or page. Then ask it to explain each part in plain language.",
    reflectionPrompt:
      "What small tool would make your week easier if you could build it yourself?",
    estimatedMinutes: 30,
    xpReward: 100,
    quiz: [
      {
        question: "The best approach with AI coding assistants is to:",
        options: [
          "Build huge features blindly",
          "Build in small steps and test often",
          "Never read the code",
          "Avoid asking questions",
        ],
        correctIndex: 1,
      },
      {
        question: "Asking the assistant to explain its code helps you:",
        options: [
          "Stay in control and learn",
          "Slow the computer down",
          "Hide mistakes",
          "Skip testing",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 20,
    title: "Building Workflows",
    theme: "AI Tools and Workflows",
    lessonTitle: "Stacking Tools into Systems",
    lessonContent:
      "Real leverage comes from combining tools into a repeatable system, where the output of one step feeds the next. You will learn to document a workflow so it runs the same way every time, to identify the weakest step, and to improve one part without breaking the whole. Systems, not single tricks, are what turn AI into durable productivity.",
    taskTitle: "Document a full workflow",
    taskDescription:
      "Write out a multi-step workflow you use, showing where AI fits at each stage. Identify the one step most worth improving.",
    reflectionPrompt:
      "What is the weakest link in your current workflow, and how could AI strengthen it?",
    estimatedMinutes: 30,
    xpReward: 100,
    quiz: [
      {
        question: "A workflow becomes a system when:",
        options: [
          "Each step reliably feeds the next",
          "Steps are random",
          "It only runs once",
          "No one documents it",
        ],
        correctIndex: 0,
      },
      {
        question: "To improve a system safely you should:",
        options: [
          "Change everything at once",
          "Improve one step without breaking the whole",
          "Never measure results",
          "Remove all documentation",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 21,
    title: "Week 3 Review",
    theme: "AI Tools and Workflows",
    lessonTitle: "Your AI Toolkit",
    lessonContent:
      "You can now evaluate tools, generate images, analyze data, automate tasks, use coding assistants, and stack them into systems. Today you consolidate your toolkit and choose the workflow you will turn into a real project next week. The final week is about creating and sharing something of value with everything you have learned.",
    taskTitle: "Choose your project direction",
    taskDescription:
      "Review your workflows and pick one problem you will solve with an AI-powered project in the final week. Write a one-sentence goal.",
    reflectionPrompt:
      "Which tool from this week unlocked the most possibility for you?",
    estimatedMinutes: 30,
    xpReward: 150,
    quiz: [
      {
        question: "The purpose of building a toolkit is to:",
        options: [
          "Collect tools you never use",
          "Have reliable options ready for real problems",
          "Impress others",
          "Avoid doing work",
        ],
        correctIndex: 1,
      },
      {
        question: "A good project goal is:",
        options: [
          "Vague and open-ended",
          "A clear, single-sentence outcome",
          "Impossible to measure",
          "Kept secret from yourself",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 22,
    title: "Planning Your AI Project",
    theme: "Building and Monetizing",
    lessonTitle: "From Idea to Plan",
    lessonContent:
      "A good project starts with a clear problem, a specific user, and a small first version. You will learn to scope a minimum viable version you can finish, to list the steps, and to define what done looks like. Ambition is great, but shipping something small and real beats planning something huge you never finish.",
    taskTitle: "Scope your MVP",
    taskDescription:
      "Write the problem, the user, and the smallest version you can complete this week. List the three main steps to build it.",
    reflectionPrompt:
      "What is the smallest version of your idea that would still be useful?",
    estimatedMinutes: 30,
    xpReward: 100,
    quiz: [
      {
        question: "A good project starts with:",
        options: [
          "A clear problem and specific user",
          "As many features as possible",
          "No plan at all",
          "A large budget",
        ],
        correctIndex: 0,
      },
      {
        question: "An MVP is:",
        options: [
          "The biggest version possible",
          "The smallest useful version you can finish",
          "A finished company",
          "A marketing slogan",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 23,
    title: "Building with AI",
    theme: "Building and Monetizing",
    lessonTitle: "Shipping Your First Version",
    lessonContent:
      "Today you build. Use your prompts, tools, and workflows to create the first working version of your project. Expect rough edges; the goal is something real you can test, not perfection. You will practice building in small increments, testing each piece, and using AI to unblock yourself whenever you get stuck.",
    taskTitle: "Build version one",
    taskDescription:
      "Create the first working version of your project. Focus on the core function, not polish. Test that the main path works end to end.",
    reflectionPrompt:
      "What was harder than expected, and how did you get unstuck?",
    estimatedMinutes: 40,
    xpReward: 100,
    quiz: [
      {
        question: "The goal of a first version is:",
        options: [
          "Perfection",
          "Something real you can test",
          "Maximum features",
          "To never ship",
        ],
        correctIndex: 1,
      },
      {
        question: "When you get stuck building, you should:",
        options: [
          "Give up",
          "Use AI to help unblock yourself",
          "Delete everything",
          "Ignore the problem",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 24,
    title: "Testing and Improving",
    theme: "Building and Monetizing",
    lessonTitle: "Getting Real Feedback",
    lessonContent:
      "A project improves fastest when real people use it. Today you test your version, gather feedback, and prioritize what to fix. You will learn to watch how people actually use your work rather than only asking their opinion, and to separate must-fix problems from nice-to-have ideas so you improve the things that matter.",
    taskTitle: "Get three pieces of feedback",
    taskDescription:
      "Show your project to at least one person or test it yourself against real use. Write down three specific improvements and rank them.",
    reflectionPrompt:
      "What did feedback reveal that you could not see yourself?",
    estimatedMinutes: 30,
    xpReward: 100,
    quiz: [
      {
        question: "The best feedback comes from:",
        options: [
          "Watching real usage",
          "Guessing alone",
          "Ignoring users",
          "Only your own opinion",
        ],
        correctIndex: 0,
      },
      {
        question: "You should prioritize:",
        options: [
          "Every idea equally",
          "Must-fix problems over nice-to-haves",
          "Only cosmetic changes",
          "Nothing at all",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 25,
    title: "Monetization Basics",
    theme: "Building and Monetizing",
    lessonTitle: "Turning Skills into Income",
    lessonContent:
      "AI skills can create income through services, products, or improving your current role. You will learn the main paths: offering AI-powered services, selling a product, or increasing your value at work. The foundation of any of them is delivering real value to a specific person who has a problem worth solving.",
    taskTitle: "Map one income path",
    taskDescription:
      "Choose one monetization path for your skills. Write who you would help, what you would offer, and why they would pay.",
    reflectionPrompt:
      "Which income path fits your strengths and situation best right now?",
    estimatedMinutes: 30,
    xpReward: 100,
    quiz: [
      {
        question: "The foundation of monetization is:",
        options: [
          "Delivering real value to a specific person",
          "Using the newest tool",
          "Charging as much as possible",
          "Keeping skills secret",
        ],
        correctIndex: 0,
      },
      {
        question: "A common path to income from AI skills is:",
        options: [
          "Offering AI-powered services",
          "Never working",
          "Ignoring customers",
          "Avoiding all value",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 26,
    title: "Building Your Brand",
    theme: "Building and Monetizing",
    lessonTitle: "Becoming Known for AI Skills",
    lessonContent:
      "People hire and buy from those they trust. Sharing what you learn and build establishes you as someone who understands AI. You will learn how to document your work publicly, tell simple before-and-after stories, and be consistent. You do not need to be an expert, only a step ahead and willing to share honestly.",
    taskTitle: "Share one thing you built",
    taskDescription:
      "Write a short post about something you learned or built in this challenge, framed as a before-and-after story.",
    reflectionPrompt:
      "What story from these 26 days would be most useful to someone starting out?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "Building a brand is mainly about:",
        options: [
          "Establishing trust by sharing your work",
          "Pretending to be an expert",
          "Never posting anything",
          "Copying others exactly",
        ],
        correctIndex: 0,
      },
      {
        question: "To share credibly you need to be:",
        options: [
          "The world's top expert",
          "A step ahead and willing to share honestly",
          "Completely anonymous",
          "Silent about your work",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    day: 27,
    title: "Staying Current",
    theme: "Building and Monetizing",
    lessonTitle: "Keeping Your Edge as AI Evolves",
    lessonContent:
      "AI moves fast, but the fundamentals you learned endure. The skill now is a system for staying current without drowning: follow a few trusted sources, experiment with one new thing at a time, and focus on principles over hype. You will design a lightweight learning routine you can sustain long after this challenge ends.",
    taskTitle: "Design your learning routine",
    taskDescription:
      "Choose two trusted sources and a weekly time to experiment with one new AI capability. Write your simple ongoing routine.",
    reflectionPrompt:
      "How will you keep learning without being overwhelmed by the pace of AI?",
    estimatedMinutes: 25,
    xpReward: 100,
    quiz: [
      {
        question: "The best way to stay current is to:",
        options: [
          "Follow everything at once",
          "Use a focused, sustainable routine",
          "Ignore all new developments",
          "Chase every hype cycle",
        ],
        correctIndex: 1,
      },
      {
        question: "What endures as AI changes is:",
        options: [
          "The fundamentals and principles",
          "Only specific tool names",
          "Nothing at all",
          "The exact interfaces",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    day: 28,
    title: "Graduation Day",
    theme: "Building and Monetizing",
    lessonTitle: "Your AI Journey Begins",
    lessonContent:
      "You made it. Over 28 days you built foundations, mastered prompting, assembled a toolkit, and shipped a real project. This is not the end but a launch point. Today you consolidate everything, claim your certificate, and set your next goal. The habits you built here, curiosity, iteration, and shipping, will carry you far as AI keeps evolving.",
    taskTitle: "Claim your certificate and set a goal",
    taskDescription:
      "Complete this final day, then write one specific goal for how you will use AI in the next 30 days beyond this challenge.",
    reflectionPrompt:
      "Who were you 28 days ago, and what can you do now that you could not do then?",
    estimatedMinutes: 25,
    xpReward: 200,
    quiz: [
      {
        question: "Completing the challenge is best seen as:",
        options: [
          "The end of learning",
          "A launch point for what comes next",
          "A reason to stop",
          "Unimportant",
        ],
        correctIndex: 1,
      },
      {
        question: "The habits that carry you forward are:",
        options: [
          "Curiosity, iteration, and shipping",
          "Waiting and hoping",
          "Avoiding new tools",
          "Working alone in secret",
        ],
        correctIndex: 0,
      },
    ],
  },
];

async function seed(): Promise<void> {
  if (CURRICULUM.length !== 28) {
    throw new Error(`Expected 28 days, got ${CURRICULUM.length}`);
  }

  await db.delete(quizQuestions);
  await db.delete(curriculumDays);

  for (const { quiz, ...day } of CURRICULUM) {
    const practicePrompt = PRACTICE_PROMPTS[day.day];
    if (!practicePrompt) {
      throw new Error(`Missing practice prompt for day ${day.day}`);
    }
    await db.insert(curriculumDays).values({ ...day, practicePrompt });
    if (quiz.length > 0) {
      await db.insert(quizQuestions).values(
        quiz.map((q, i) => {
          const explanation =
            q.explanation ?? QUIZ_EXPLANATIONS[day.day]?.[i] ?? null;
          if (!explanation) {
            throw new Error(
              `Missing quiz explanation for day ${day.day}, question ${i}`,
            );
          }
          return {
            day: day.day,
            question: q.question,
            options: q.options,
            correctIndex: q.correctIndex,
            explanation,
            orderIndex: i,
          };
        }),
      );
    }
  }

  const totalQuiz = CURRICULUM.reduce((n, d) => n + d.quiz.length, 0);
  // eslint-disable-next-line no-console
  console.log(
    `Seeded ${CURRICULUM.length} curriculum days and ${totalQuiz} quiz questions.`,
  );
}

seed()
  .then(() => pool.end())
  .then(() => process.exit(0))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    return pool.end().finally(() => process.exit(1));
  });
