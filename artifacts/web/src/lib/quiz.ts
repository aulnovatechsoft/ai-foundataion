import companyImg from "@/assets/onboarding/company.png";
import selfImg from "@/assets/onboarding/self.png";
import studentImg from "@/assets/onboarding/student.png";
import exploringImg from "@/assets/onboarding/exploring.png";
import goalCareerImg from "@/assets/onboarding/goal-career.png";
import goalBusinessImg from "@/assets/onboarding/goal-business.png";
import goalProductivityImg from "@/assets/onboarding/goal-productivity.png";
import goalCuriosityImg from "@/assets/onboarding/goal-curiosity.png";
import fieldMarketingImg from "@/assets/onboarding/field-marketing.png";
import fieldEngineeringImg from "@/assets/onboarding/field-engineering.png";
import fieldDesignImg from "@/assets/onboarding/field-design.png";
import fieldOperationsImg from "@/assets/onboarding/field-operations.png";
import fieldSalesImg from "@/assets/onboarding/field-sales.png";
import fieldOtherImg from "@/assets/onboarding/field-other.png";
import expBeginnerImg from "@/assets/onboarding/exp-beginner.png";
import expSomeImg from "@/assets/onboarding/exp-some.png";
import expAdvancedImg from "@/assets/onboarding/exp-advanced.png";
import time10Img from "@/assets/onboarding/time-10.png";
import time20Img from "@/assets/onboarding/time-20.png";
import time40Img from "@/assets/onboarding/time-40.png";
import avatar1Img from "@/assets/onboarding/avatar-1.png";
import avatar2Img from "@/assets/onboarding/avatar-2.png";
import avatar3Img from "@/assets/onboarding/avatar-3.png";

export const ONBOARDING_STORAGE_KEY = "upskil_onboarding_answers_v1";

export type QuizOption = {
  value: string;
  label: string;
  description?: string;
  emoji?: string;
  image?: string;
};

export type QuizStep =
  | {
      kind: "question";
      id: string;
      question: string;
      subtitle?: string;
      coachLine?: string;
      layout?: "list" | "grid";
      options: QuizOption[];
    }
  | {
      kind: "scale";
      id: string;
      question: string;
      statement: string;
      coachLine?: string;
      options: QuizOption[];
    }
  | {
      kind: "interstitial";
      id: string;
      title: string;
      body: string;
      stat?: string;
      statLabel?: string;
    }
  | {
      kind: "testimonial";
      id: string;
      quote: string;
      name: string;
      role: string;
      avatar: string;
      rating: number;
    }
  | {
      kind: "commitment";
      id: string;
      title: string;
      body: string;
      confirmLabel: string;
    };

const AGREE_OPTIONS: QuizOption[] = [
  { value: "strongly_disagree", label: "Strongly disagree" },
  { value: "disagree", label: "Disagree" },
  { value: "neutral", label: "Neutral" },
  { value: "agree", label: "Agree" },
  { value: "strongly_agree", label: "Strongly agree" },
];

const CONFIDENCE_OPTIONS: QuizOption[] = [
  { value: "not", label: "Not at all confident" },
  { value: "a_little", label: "A little confident" },
  { value: "somewhat", label: "Somewhat confident" },
  { value: "very", label: "Very confident" },
];

export const QUIZ_STEPS: QuizStep[] = [
  {
    kind: "question",
    id: "work_context",
    question: "Which best describes you?",
    subtitle: "We'll tailor your program to how you'll use AI.",
    coachLine: "Hi, I'm Nova — your AI coach. Let's build a program that fits you. First up:",
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
    id: "ai_frequency",
    question: "How often do you use AI in your work today?",
    subtitle: "Be honest — there's no wrong answer.",
    coachLine: "This helps me set the right starting point for you.",
    options: [
      { value: "never", label: "Never — I haven't started", emoji: "🚫" },
      { value: "rarely", label: "A few times a month", emoji: "🌥️" },
      { value: "weekly", label: "Most weeks", emoji: "📅" },
      { value: "daily", label: "Every single day", emoji: "⚡" },
    ],
  },
  {
    kind: "question",
    id: "goal",
    question: "What's your #1 goal with AI?",
    subtitle: "Pick the outcome that matters most to you.",
    coachLine: "Got it. Now, what are we really working toward?",
    options: [
      { value: "career", label: "Advance my career", image: goalCareerImg },
      { value: "business", label: "Grow my business", image: goalBusinessImg },
      { value: "productivity", label: "Save time & be more productive", image: goalProductivityImg },
      { value: "curiosity", label: "Understand AI from the ground up", image: goalCuriosityImg },
    ],
  },
  {
    kind: "scale",
    id: "stmt_behind",
    question: "How much do you agree?",
    statement: "\u201cI worry I'm falling behind on AI at work.\u201d",
    coachLine: "There are no right answers here — just tell me how you feel.",
    options: AGREE_OPTIONS,
  },
  {
    kind: "scale",
    id: "stmt_tried",
    question: "And this one?",
    statement: "\u201cI've tried to learn AI before, but it never stuck.\u201d",
    coachLine: "You're not alone — most people start and stall. We fix that.",
    options: AGREE_OPTIONS,
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
    subtitle: "Your daily missions will focus here.",
    coachLine: "Perfect. I'll aim every lesson at the work you actually do.",
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
    kind: "question",
    id: "experience",
    question: "How much experience do you have with AI tools?",
    coachLine: "This sets your difficulty — I'll keep it challenging but never overwhelming.",
    options: [
      { value: "beginner", label: "Total beginner", description: "I've barely touched them", image: expBeginnerImg },
      { value: "some", label: "Some experience", description: "I've dabbled with ChatGPT", image: expSomeImg },
      { value: "advanced", label: "Pretty confident", description: "I use AI regularly", image: expAdvancedImg },
    ],
  },
  {
    kind: "scale",
    id: "confidence",
    question: "How confident are you today?",
    statement: "Using AI tools to get real work done.",
    coachLine: "We'll turn this number up, day by day.",
    options: CONFIDENCE_OPTIONS,
  },
  {
    kind: "scale",
    id: "stmt_hands_on",
    question: "One more:",
    statement: "\u201cI learn best by doing, not just watching videos.\u201d",
    coachLine: "Good — because every day here ends with a hands-on mission.",
    options: AGREE_OPTIONS,
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
    coachLine: "Let's keep your 'why' front and center.",
    options: [
      { value: "raise", label: "A promotion or raise", emoji: "💰" },
      { value: "time", label: "Hours back every week", emoji: "⏳" },
      { value: "venture", label: "Launch or grow a venture", emoji: "🚀" },
      { value: "confidence", label: "Confidence & peace of mind", emoji: "🧘" },
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

export const TESTIMONIALS: { quote: string; name: string; role: string; avatar: string; rating: number }[] = [
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
