const companyImg = require("@/assets/images/onboarding/company.png");
const selfImg = require("@/assets/images/onboarding/self.png");
const studentImg = require("@/assets/images/onboarding/student.png");
const exploringImg = require("@/assets/images/onboarding/exploring.png");
const goalCareerImg = require("@/assets/images/onboarding/goal-career.png");
const goalBusinessImg = require("@/assets/images/onboarding/goal-business.png");
const goalProductivityImg = require("@/assets/images/onboarding/goal-productivity.png");
const goalCuriosityImg = require("@/assets/images/onboarding/goal-curiosity.png");
const fieldMarketingImg = require("@/assets/images/onboarding/field-marketing.png");
const fieldEngineeringImg = require("@/assets/images/onboarding/field-engineering.png");
const fieldDesignImg = require("@/assets/images/onboarding/field-design.png");
const fieldOperationsImg = require("@/assets/images/onboarding/field-operations.png");
const fieldSalesImg = require("@/assets/images/onboarding/field-sales.png");
const fieldOtherImg = require("@/assets/images/onboarding/field-other.png");
const expBeginnerImg = require("@/assets/images/onboarding/exp-beginner.png");
const expSomeImg = require("@/assets/images/onboarding/exp-some.png");
const expAdvancedImg = require("@/assets/images/onboarding/exp-advanced.png");
const time10Img = require("@/assets/images/onboarding/time-10.png");
const time20Img = require("@/assets/images/onboarding/time-20.png");
const time40Img = require("@/assets/images/onboarding/time-40.png");
const avatar1Img = require("@/assets/images/onboarding/avatar-1.png");
const avatar2Img = require("@/assets/images/onboarding/avatar-2.png");
const avatar3Img = require("@/assets/images/onboarding/avatar-3.png");
const proofPersonImg = require("@/assets/images/onboarding/proof-person.png");
const nextLevelImg = require("@/assets/images/onboarding/next-level.png");

export const ONBOARDING_STORAGE_KEY = "upskil_onboarding_answers_v1";

export type QuizOption = {
  value: string;
  label: string;
  description?: string;
  emoji?: string;
  image?: number;
};

/**
 * Copy that is either static text or computed from the user's prior answers.
 * Resolved at render time so later screens can reference earlier choices.
 */
export type QuizText = string | ((answers: Record<string, string>) => string);

export type QuizStep =
  | {
      kind: "question";
      id: string;
      question: string;
      subtitle?: QuizText;
      coachLine?: QuizText;
      layout?: "list" | "grid";
      options: QuizOption[];
      /** When set, the option list is chosen from `optionsByAnswer` using the answer to this step id. */
      dependsOn?: string;
      /** Map of a prior step's answer value -> the options to show. Falls back to `options`. */
      optionsByAnswer?: Record<string, QuizOption[]>;
    }
  | {
      kind: "scale";
      id: string;
      question: string;
      statement: string;
      coachLine?: QuizText;
      options: QuizOption[];
    }
  | {
      kind: "interstitial";
      id: string;
      title: string;
      body: string;
      stat?: string;
      statLabel?: string;
      image?: number;
    }
  | {
      kind: "testimonial";
      id: string;
      quote: string;
      name: string;
      role: string;
      avatar: number;
      rating: number;
    }
  | {
      kind: "commitment";
      id: string;
      title: string;
      body: string;
      confirmLabel: string;
    };

const CONFIDENCE_OPTIONS: QuizOption[] = [
  { value: "not", label: "Not at all confident" },
  { value: "a_little", label: "A little confident" },
  { value: "somewhat", label: "Somewhat confident" },
  { value: "very", label: "Very confident" },
];

// Natural-language fragments used to weave earlier answers into later coach copy.
const WORK_CONTEXT_PHRASE: Record<string, string> = {
  company: "working at a company",
  self: "running your own thing",
  student: "still studying",
  exploring: "eyeing a fresh start",
};

const INDUSTRY_PHRASE: Record<string, string> = {
  technology: "tech",
  healthcare: "healthcare",
  finance: "finance",
  education: "education",
  media: "marketing & media",
  retail: "retail & e-commerce",
  services: "professional services",
  other: "your field",
};

export const GOAL_PHRASE: Record<string, string> = {
  career: "advancing your career",
  business: "growing your business",
  productivity: "getting your time back",
  curiosity: "understanding AI deeply",
};

// Second-person payoff phrases for the `aspiration` answer, used to reinforce
// the outcome on the reveal screen (e.g. "…so you can get your promotion").
export const ASPIRATION_PHRASE: Record<string, string> = {
  raise: "get your promotion",
  standout: "lead and stand out at work",
  time: "reclaim your time",
  confidence: "master AI with confidence",
  revenue: "grow your revenue",
  scale: "scale your venture",
  job: "land your dream job",
  ahead: "graduate ahead of your peers",
  venture: "launch your own venture",
  newrole: "break into a new field",
};

export const QUIZ_STEPS: QuizStep[] = [
  {
    kind: "question",
    id: "age",
    question: "How old are you?",
    subtitle: "We'll personalize your AI program based on your answers.",
    coachLine: "Hi, I'm Nova — your AI coach. Let's build a program that fits you. First up:",
    options: [
      { value: "18-24", label: "18–24" },
      { value: "25-34", label: "25–34" },
      { value: "35-44", label: "35–44" },
      { value: "45-54", label: "45–54" },
      { value: "55+", label: "55+" },
    ],
  },
  {
    kind: "question",
    id: "work_context",
    question: "Which best describes you?",
    subtitle: "We'll tailor your program to how you'll use AI.",
    coachLine: (a) =>
      a.age === "18-24"
        ? "Getting ahead of AI this early is a real edge. Which best describes you?"
        : a.age === "45-54" || a.age === "55+"
          ? "It's never too late to make AI your advantage. Which best describes you?"
          : "Perfect timing to make AI work for you. Which best describes you?",
    layout: "grid",
    options: [
      { value: "company", label: "I work for a company", image: companyImg },
      { value: "self", label: "I work for myself", image: selfImg },
      { value: "student", label: "I'm a student", image: studentImg },
      { value: "exploring", label: "I'm exploring a career change", image: exploringImg },
    ],
  },
  {
    kind: "question",
    id: "career_level",
    question: "What best describes your career level?",
    subtitle: "So I can pitch everything at the right level.",
    coachLine: (a) =>
      a.work_context
        ? `Since you're ${WORK_CONTEXT_PHRASE[a.work_context] ?? "here"}, I'll match the difficulty and examples to you.`
        : "This helps me match the difficulty and examples to you.",
    dependsOn: "work_context",
    optionsByAnswer: {
      company: [
        { value: "entry", label: "Entry level or junior", emoji: "🌱" },
        { value: "ic", label: "Individual contributor", emoji: "💼" },
        { value: "manager", label: "Manager or team lead", emoji: "👥" },
        { value: "exec", label: "Director or executive", emoji: "🏆" },
      ],
      self: [
        { value: "solo", label: "Solo freelancer", emoji: "🧑‍💻" },
        { value: "founder", label: "Founder building a team", emoji: "🚀" },
        { value: "owner", label: "Established business owner", emoji: "🏢" },
        { value: "side", label: "Side hustle, still building", emoji: "🌙" },
      ],
      student: [
        { value: "highschool", label: "High school", emoji: "🎒" },
        { value: "undergrad", label: "Undergraduate", emoji: "🎓" },
        { value: "grad", label: "Graduate or postgrad", emoji: "📚" },
        { value: "recent", label: "Recent graduate", emoji: "🌟" },
      ],
      exploring: [
        { value: "returning", label: "Returning to the workforce", emoji: "🔄" },
        { value: "switching", label: "Switching industries", emoji: "🧭" },
        { value: "upskilling", label: "Upskilling to advance", emoji: "📈" },
        { value: "unsure", label: "Still figuring it out", emoji: "🤔" },
      ],
    },
    options: [
      { value: "early", label: "Student or early career", emoji: "🌱" },
      { value: "ic", label: "Individual contributor", emoji: "💼" },
      { value: "manager", label: "Manager or team lead", emoji: "👥" },
      { value: "exec", label: "Director or executive", emoji: "🏆" },
      { value: "founder", label: "Founder or self-employed", emoji: "🚀" },
    ],
  },
  {
    kind: "question",
    id: "industry",
    question: "What industry do you work in?",
    subtitle: "I'll pull in examples from your world.",
    coachLine: (a) =>
      a.work_context === "student"
        ? "I'll pull in examples that fit your studies and where you're headed."
        : "I'll pull in real examples from your world — starting with your industry.",
    layout: "grid",
    options: [
      { value: "technology", label: "Technology", emoji: "💻" },
      { value: "healthcare", label: "Healthcare", emoji: "🏥" },
      { value: "finance", label: "Finance", emoji: "💰" },
      { value: "education", label: "Education", emoji: "🎓" },
      { value: "media", label: "Marketing & media", emoji: "📣" },
      { value: "retail", label: "Retail & e-commerce", emoji: "🛍️" },
      { value: "services", label: "Professional services", emoji: "🧾" },
      { value: "other", label: "Something else", emoji: "🌐" },
    ],
  },
  {
    kind: "question",
    id: "experience",
    question: "How much experience do you have with AI tools?",
    coachLine: (a) =>
      a.industry
        ? `AI is moving fast in ${INDUSTRY_PHRASE[a.industry] ?? "your field"} — let's see where you're at.`
        : "This sets your difficulty — challenging but never overwhelming.",
    options: [
      { value: "beginner", label: "Total beginner", description: "I've barely touched them", image: expBeginnerImg },
      { value: "some", label: "Some experience", description: "I've dabbled with ChatGPT", image: expSomeImg },
      { value: "advanced", label: "Pretty confident", description: "I use AI regularly", image: expAdvancedImg },
    ],
  },
  {
    kind: "question",
    id: "overwhelmed",
    question: "Do you feel overwhelmed by AI?",
    subtitle: "There's a new tool every week — it's a lot.",
    coachLine: (a) =>
      a.experience === "advanced"
        ? "Even confident users feel the firehose. Be honest:"
        : "Totally normal if you do — that's exactly what we'll fix.",
    options: [
      { value: "yes", label: "Yes, completely", emoji: "😵‍💫" },
      { value: "sometimes", label: "Sometimes", emoji: "😅" },
      { value: "rarely", label: "Not really", emoji: "🙂" },
      { value: "no", label: "Not at all", emoji: "😎" },
    ],
  },
  {
    kind: "interstitial",
    id: "social_proof_1",
    title: "You're in good company",
    body: "Thousands of professionals have used Upskil OS to go from AI-curious to AI-confident in under a month.",
    stat: "40,000+",
    statLabel: "learners upskilled",
    image: proofPersonImg,
  },
  {
    kind: "question",
    id: "goal",
    question: "What's your #1 goal with AI?",
    subtitle: "Pick the outcome that matters most to you.",
    coachLine: (a) =>
      a.work_context === "self"
        ? "Got it. What's the win that matters most for your business?"
        : "Got it. Now — what are we really working toward?",
    dependsOn: "work_context",
    optionsByAnswer: {
      company: [
        { value: "career", label: "Advance my career", image: goalCareerImg },
        { value: "business", label: "Start a side income", image: goalBusinessImg },
        { value: "productivity", label: "Save time at work", image: goalProductivityImg },
        { value: "curiosity", label: "Understand AI deeply", image: goalCuriosityImg },
      ],
      self: [
        { value: "business", label: "Grow my business", image: goalBusinessImg },
        { value: "productivity", label: "Reclaim my time", image: goalProductivityImg },
        { value: "career", label: "Level up my expertise", image: goalCareerImg },
        { value: "curiosity", label: "Understand AI deeply", image: goalCuriosityImg },
      ],
      student: [
        { value: "career", label: "Land a great job", image: goalCareerImg },
        { value: "business", label: "Start a side hustle", image: goalBusinessImg },
        { value: "productivity", label: "Study smarter, not harder", image: goalProductivityImg },
        { value: "curiosity", label: "Understand AI deeply", image: goalCuriosityImg },
      ],
      exploring: [
        { value: "career", label: "Break into a new field", image: goalCareerImg },
        { value: "business", label: "Start something of my own", image: goalBusinessImg },
        { value: "productivity", label: "Work smarter every day", image: goalProductivityImg },
        { value: "curiosity", label: "Understand AI deeply", image: goalCuriosityImg },
      ],
    },
    options: [
      { value: "career", label: "Advance my career", image: goalCareerImg },
      { value: "business", label: "Grow my business", image: goalBusinessImg },
      { value: "productivity", label: "Save time & be more productive", image: goalProductivityImg },
      { value: "curiosity", label: "Understand AI from the ground up", image: goalCuriosityImg },
    ],
  },
  {
    kind: "question",
    id: "help_first",
    question: "What do you want AI to help you with first?",
    subtitle: "We'll aim your very first wins here.",
    coachLine: (a) =>
      a.goal
        ? `Since you're focused on ${GOAL_PHRASE[a.goal] ?? "your goal"}, let's pick your first win.`
        : "Let's pick where you'll feel the difference fastest.",
    dependsOn: "goal",
    optionsByAnswer: {
      career: [
        { value: "writing", label: "Sharper writing & emails", emoji: "✍️" },
        { value: "interviews", label: "Interview & review prep", emoji: "🎤" },
        { value: "automation", label: "Automate the busywork", emoji: "⚙️" },
        { value: "skills", label: "Build in-demand skills", emoji: "📈" },
      ],
      business: [
        { value: "marketing", label: "Create marketing content", emoji: "📣" },
        { value: "customers", label: "Win & serve customers", emoji: "🤝" },
        { value: "automation", label: "Automate operations", emoji: "⚙️" },
        { value: "numbers", label: "Make sense of my numbers", emoji: "📊" },
      ],
      productivity: [
        { value: "writing", label: "Draft & summarize faster", emoji: "✍️" },
        { value: "organize", label: "Organize my day", emoji: "🗂️" },
        { value: "automation", label: "Automate repetitive tasks", emoji: "⚙️" },
        { value: "research", label: "Research in minutes", emoji: "🔎" },
      ],
      curiosity: [
        { value: "basics", label: "Understand how AI works", emoji: "🧠" },
        { value: "prompts", label: "Try practical prompts", emoji: "💬" },
        { value: "creative", label: "Explore creative tools", emoji: "🎨" },
        { value: "project", label: "Build a small project", emoji: "🛠️" },
      ],
    },
    options: [
      { value: "writing", label: "Writing & communication", emoji: "✍️" },
      { value: "research", label: "Research & analysis", emoji: "🔎" },
      { value: "automation", label: "Automating repetitive tasks", emoji: "⚙️" },
      { value: "creative", label: "Creative & design work", emoji: "🎨" },
      { value: "code", label: "Coding & data", emoji: "💻" },
    ],
  },
  {
    kind: "question",
    id: "field",
    question: "Where do you most want to apply AI?",
    subtitle: "Your daily missions will focus here.",
    coachLine: (a) =>
      a.industry
        ? `In ${INDUSTRY_PHRASE[a.industry] ?? "your field"}, AI shows up everywhere — where should it help first?`
        : "Perfect. I'll aim every lesson at the work you actually do.",
    layout: "grid",
    options: [
      { value: "marketing", label: "Marketing & content", image: fieldMarketingImg },
      { value: "engineering", label: "Engineering & data", image: fieldEngineeringImg },
      { value: "design", label: "Design & creative", image: fieldDesignImg },
      { value: "operations", label: "Operations & admin", image: fieldOperationsImg },
      { value: "sales", label: "Sales & outreach", image: fieldSalesImg },
      { value: "other", label: "Something else", image: fieldOtherImg },
    ],
  },
  {
    kind: "testimonial",
    id: "testimonial_1",
    quote:
      "I went from copy-pasting prompts I didn't understand to automating half my weekly reports. The daily missions made it stick.",
    name: "Sarah Mitchell",
    role: "Marketing Lead",
    avatar: avatar1Img,
    rating: 5,
  },
  {
    kind: "question",
    id: "tried_courses",
    question: "Have you tried other courses or resources to learn AI?",
    subtitle: "No judgment — most people have a false start or two.",
    coachLine: "If they didn't stick, it wasn't your fault — the format was wrong.",
    options: [
      { value: "stuck", label: "Yes, but it didn't stick", emoji: "😕" },
      { value: "some", label: "Yes, with some success", emoji: "👍" },
      { value: "first", label: "No — this is my first", emoji: "🌟" },
    ],
  },
  {
    kind: "scale",
    id: "confidence",
    question: "How confident are you today?",
    statement: "Using AI tools to get real work done.",
    coachLine: (a) =>
      a.experience === "beginner"
        ? "Wherever you start is fine — we'll turn this number up together."
        : "We'll turn this number up, day by day.",
    options: CONFIDENCE_OPTIONS,
  },
  {
    kind: "interstitial",
    id: "next_level",
    title: "Awesome — let's get you to the next level",
    body: "We've helped over 40,000 professionals master AI, and we can do the same for you. Your program is backed by hundreds of hours of research, tailored to your goals and skills.",
    image: nextLevelImg,
  },
  {
    kind: "question",
    id: "week_result",
    question: "What result do you want in your first week?",
    subtitle: "We'll design your early wins around this.",
    coachLine: (a) =>
      a.help_first
        ? "Let's turn that focus into a concrete first-week win."
        : "Let's define an early win worth chasing.",
    dependsOn: "help_first",
    optionsByAnswer: {
      writing: [
        { value: "faster", label: "Write 2x faster", emoji: "✍️" },
        { value: "tough", label: "Nail a tough email or doc", emoji: "📧" },
        { value: "library", label: "A reusable prompt library", emoji: "📚" },
        { value: "confidence", label: "Feel genuinely confident", emoji: "💪" },
      ],
      research: [
        { value: "minutes", label: "Research in minutes, not hours", emoji: "🔎" },
        { value: "summary", label: "A clear summary I can share", emoji: "📄" },
        { value: "decide", label: "Make a faster decision", emoji: "✅" },
        { value: "ontop", label: "Feel on top of it", emoji: "💪" },
      ],
      automation: [
        { value: "onetask", label: "Automate one full task", emoji: "🔧" },
        { value: "hours", label: "Save 3+ hours", emoji: "⏱️" },
        { value: "reuse", label: "A workflow I reuse daily", emoji: "♻️" },
        { value: "impress", label: "Impress my team", emoji: "🌟" },
      ],
      skills: [
        { value: "applied", label: "One new skill, applied", emoji: "📈" },
        { value: "portfolio", label: "A portfolio-ready result", emoji: "🗂️" },
        { value: "proof", label: "Proof I can show off", emoji: "🌟" },
        { value: "confidence", label: "Feel genuinely confident", emoji: "💪" },
      ],
      interviews: [
        { value: "mock", label: "Ace a mock interview", emoji: "🎤" },
        { value: "story", label: "A standout resume or story", emoji: "📄" },
        { value: "prep", label: "Prep in half the time", emoji: "⏱️" },
        { value: "confident", label: "Walk in confident", emoji: "💪" },
      ],
      marketing: [
        { value: "halftime", label: "Publish content in half the time", emoji: "📣" },
        { value: "batch", label: "A batch of posts ready to go", emoji: "🗓️" },
        { value: "message", label: "Sharper messaging", emoji: "✨" },
        { value: "impress", label: "Impress my clients", emoji: "🌟" },
      ],
      customers: [
        { value: "replies", label: "Faster, warmer replies", emoji: "🤝" },
        { value: "flow", label: "A repeatable outreach flow", emoji: "📈" },
        { value: "followup", label: "Never miss a follow-up", emoji: "🔔" },
        { value: "win", label: "Win a new customer", emoji: "🏆" },
      ],
      numbers: [
        { value: "story", label: "Turn data into a clear story", emoji: "📊" },
        { value: "dashboard", label: "A dashboard I actually use", emoji: "📈" },
        { value: "trends", label: "Spot trends faster", emoji: "🔍" },
        { value: "decide", label: "Decide with confidence", emoji: "✅" },
      ],
      organize: [
        { value: "planned", label: "A calmer, planned day", emoji: "🗂️" },
        { value: "control", label: "Inbox & tasks under control", emoji: "✅" },
        { value: "hours", label: "Save 3+ hours", emoji: "⏱️" },
        { value: "incontrol", label: "Feel in control", emoji: "💪" },
      ],
      basics: [
        { value: "get", label: "Finally get how AI works", emoji: "🧠" },
        { value: "first", label: "My first real result", emoji: "🌟" },
        { value: "keepgoing", label: "Confidence to keep going", emoji: "💪" },
        { value: "habit", label: "A habit that sticks", emoji: "🔥" },
      ],
      prompts: [
        { value: "works", label: "A prompt that just works", emoji: "💬" },
        { value: "cheatsheet", label: "My own prompt cheat-sheet", emoji: "📚" },
        { value: "daily", label: "Save time every day", emoji: "⏱️" },
        { value: "confidence", label: "Feel genuinely confident", emoji: "💪" },
      ],
      creative: [
        { value: "proud", label: "Create something I'm proud of", emoji: "🎨" },
        { value: "share", label: "A finished piece to share", emoji: "🖼️" },
        { value: "ideas", label: "Ideas on tap", emoji: "✨" },
        { value: "impress", label: "Impress my friends", emoji: "🌟" },
      ],
      project: [
        { value: "ship", label: "Ship a small project", emoji: "🛠️" },
        { value: "show", label: "Something real to show", emoji: "🌟" },
        { value: "buildmore", label: "Confidence to build more", emoji: "💪" },
        { value: "process", label: "A repeatable process", emoji: "♻️" },
      ],
      code: [
        { value: "datatask", label: "Automate a data task", emoji: "💻" },
        { value: "script", label: "A script that saves time", emoji: "⏱️" },
        { value: "debug", label: "Debug in half the time", emoji: "🐞" },
        { value: "shipcode", label: "Ship something working", emoji: "🌟" },
      ],
    },
    options: [
      { value: "time", label: "Save a few hours", emoji: "⏱️" },
      { value: "workflow", label: "Build my first AI workflow", emoji: "🔧" },
      { value: "confidence", label: "Feel genuinely confident", emoji: "💪" },
      { value: "impress", label: "Impress my team or boss", emoji: "🌟" },
    ],
  },
  {
    kind: "question",
    id: "time",
    question: "How much time can you invest each day?",
    subtitle: "We'll size your daily missions to fit.",
    coachLine: "Consistency beats intensity. Pick what you can truly keep up.",
    options: [
      { value: "10", label: "~10 minutes", description: "Quick and consistent", image: time10Img },
      { value: "20", label: "~20 minutes", description: "The sweet spot", image: time20Img },
      { value: "40", label: "~40 minutes", description: "I'm all in", image: time40Img },
    ],
  },
  {
    kind: "question",
    id: "aspiration",
    question: "What would mastering AI unlock for you?",
    subtitle: "This is the finish line we'll keep in sight.",
    coachLine: (a) =>
      a.goal
        ? `Keep your 'why' — ${GOAL_PHRASE[a.goal] ?? "your goal"} — front and center. What does success unlock?`
        : "Let's keep your 'why' front and center.",
    dependsOn: "work_context",
    optionsByAnswer: {
      company: [
        { value: "raise", label: "A promotion or raise", emoji: "💰" },
        { value: "standout", label: "Lead & stand out at work", emoji: "🏅" },
        { value: "time", label: "Hours back every week", emoji: "⏳" },
        { value: "confidence", label: "Confidence & peace of mind", emoji: "🧘" },
      ],
      self: [
        { value: "revenue", label: "More revenue, less grind", emoji: "💰" },
        { value: "time", label: "Reclaim my time", emoji: "⏳" },
        { value: "scale", label: "Scale my venture", emoji: "🚀" },
        { value: "confidence", label: "Confidence & peace of mind", emoji: "🧘" },
      ],
      student: [
        { value: "job", label: "Land my dream job", emoji: "🎯" },
        { value: "ahead", label: "Graduate ahead of my peers", emoji: "🎓" },
        { value: "venture", label: "Start something of my own", emoji: "🚀" },
        { value: "confidence", label: "Confidence & peace of mind", emoji: "🧘" },
      ],
      exploring: [
        { value: "newrole", label: "Land a role in a new field", emoji: "🧭" },
        { value: "venture", label: "Build something of my own", emoji: "🚀" },
        { value: "time", label: "Freedom over my time", emoji: "⏳" },
        { value: "confidence", label: "Confidence & peace of mind", emoji: "🧘" },
      ],
    },
    options: [
      { value: "raise", label: "A promotion or raise", emoji: "💰" },
      { value: "time", label: "Hours back every week", emoji: "⏳" },
      { value: "venture", label: "Launch or grow a venture", emoji: "🚀" },
      { value: "confidence", label: "Confidence & peace of mind", emoji: "🧘" },
    ],
  },
  {
    kind: "question",
    id: "celebrate",
    question: "How would you celebrate your first results with AI?",
    subtitle: "Because progress deserves a moment.",
    coachLine: (a) =>
      a.aspiration
        ? "Love it. Something real to celebrate is coming — let's plan the moment."
        : "You'll have something real to celebrate — let's plan it.",
    options: [
      { value: "treat", label: "Treat myself", emoji: "🎉" },
      { value: "share", label: "Share it with friends", emoji: "📣" },
      { value: "bigger", label: "Set an even bigger goal", emoji: "🎯" },
      { value: "momentum", label: "Just keep the momentum", emoji: "🔥" },
    ],
  },
  {
    kind: "commitment",
    id: "commitment",
    title: "Ready to commit to 28 days?",
    body: "Real change takes showing up. Give me a few minutes a day and I'll turn AI from intimidating into your everyday advantage.",
    confirmLabel: "I'm in — build my program",
  },
];

/**
 * Return the user-facing label of the option the user selected for a question
 * step, resolving answer-dependent option lists (dependsOn/optionsByAnswer).
 * Returns null when the step is missing, unanswered, or not a question — so
 * callers can fall back gracefully.
 */
export function getSelectedLabel(
  stepId: string,
  answers: Record<string, string>,
): string | null {
  const step = QUIZ_STEPS.find((s) => s.id === stepId);
  if (!step || step.kind !== "question") return null;
  const value = answers[stepId];
  if (!value) return null;
  let options = step.options;
  if (step.optionsByAnswer && step.dependsOn) {
    const dep = answers[step.dependsOn];
    const dynamic = dep ? step.optionsByAnswer[dep] : undefined;
    if (dynamic) options = dynamic;
  }
  return options.find((o) => o.value === value)?.label ?? null;
}

export const TESTIMONIALS: { quote: string; name: string; role: string; avatar: number; rating: number }[] = [
  {
    quote: "The daily missions made it stick. I automated half my weekly reports.",
    name: "Sarah Mitchell",
    role: "Marketing Lead",
    avatar: avatar1Img,
    rating: 5,
  },
  {
    quote: "Finally an AI course that's hands-on. I ship AI features at work now.",
    name: "David Chen",
    role: "Software Engineer",
    avatar: avatar2Img,
    rating: 5,
  },
  {
    quote: "In a month I went from AI-anxious to running my business on it.",
    name: "Priya Sharma",
    role: "Founder",
    avatar: avatar3Img,
    rating: 5,
  },
];
