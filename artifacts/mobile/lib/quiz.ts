const companyImg = require("@/assets/images/onboarding/company.png");
const selfImg = require("@/assets/images/onboarding/self.png");
const studentImg = require("@/assets/images/onboarding/student.png");
const exploringImg = require("@/assets/images/onboarding/exploring.png");

export const ONBOARDING_STORAGE_KEY = "upskil_onboarding_answers_v1";

export type QuizOption = {
  value: string;
  label: string;
  description?: string;
  emoji?: string;
  image?: number;
};

export type QuizStep =
  | {
      kind: "question";
      id: string;
      question: string;
      subtitle?: string;
      layout?: "list" | "grid";
      options: QuizOption[];
    }
  | {
      kind: "interstitial";
      id: string;
      title: string;
      body: string;
      stat?: string;
      statLabel?: string;
    };

export const QUIZ_STEPS: QuizStep[] = [
  {
    kind: "question",
    id: "work_context",
    question: "Which best describes you?",
    subtitle: "We'll tailor your program to how you'll use AI.",
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
    id: "goal",
    question: "What's your #1 goal with AI?",
    subtitle: "Pick the outcome that matters most to you.",
    options: [
      { value: "career", label: "Advance my career", emoji: "📈" },
      { value: "business", label: "Grow my business", emoji: "💼" },
      { value: "productivity", label: "Save time & be more productive", emoji: "⚡" },
      { value: "curiosity", label: "Understand AI from the ground up", emoji: "🧠" },
    ],
  },
  {
    kind: "interstitial",
    id: "social_proof_1",
    title: "You're in good company",
    body: "Thousands of professionals have used Upskil OS to go from AI-curious to AI-confident in under a month.",
    stat: "40,000+",
    statLabel: "learners upskilled",
  },
  {
    kind: "question",
    id: "field",
    question: "Where do you most want to apply AI?",
    subtitle: "Your daily tasks will focus here.",
    options: [
      { value: "marketing", label: "Marketing & content", emoji: "✍️" },
      { value: "engineering", label: "Engineering & data", emoji: "💻" },
      { value: "design", label: "Design & creative", emoji: "🎨" },
      { value: "operations", label: "Operations & admin", emoji: "⚙️" },
      { value: "sales", label: "Sales & outreach", emoji: "🤝" },
      { value: "other", label: "Something else", emoji: "✨" },
    ],
  },
  {
    kind: "question",
    id: "experience",
    question: "How much experience do you have with AI tools?",
    options: [
      { value: "beginner", label: "Total beginner", description: "I've barely touched them", emoji: "🌱" },
      { value: "some", label: "Some experience", description: "I've dabbled with ChatGPT", emoji: "🌿" },
      { value: "advanced", label: "Pretty confident", description: "I use AI regularly", emoji: "🌳" },
    ],
  },
  {
    kind: "question",
    id: "time",
    question: "How much time can you invest each day?",
    subtitle: "We'll size your daily lessons to fit.",
    options: [
      { value: "10", label: "~10 minutes", description: "Quick and consistent", emoji: "⏱️" },
      { value: "20", label: "~20 minutes", description: "The sweet spot", emoji: "⏲️" },
      { value: "40", label: "~40 minutes", description: "I'm all in", emoji: "🔥" },
    ],
  },
];
