# Upskil OS — Learning Experience Plan

**A production plan to evolve the 28-Day AI Challenge into a visual, level-based mastery journey.**

Version 1.0 · Owner: Product · Status: Proposed
Benchmarked against Coursiv.io (coursiv.io/en)

---

## 1. Executive Summary

Upskil OS today delivers a strong, pedagogically sound **28-day AI challenge**: every day pairs a lesson, a hands-on task graded by an AI mentor, a quiz, and a reflection. The content is excellent. What is missing is the **feeling of a journey** — a clear, visual, game-like path that shows the learner where they are, what they have conquered, and what comes next.

Coursiv.io solves exactly this. Its content depth is comparable to ours, but it wraps learning in a **Duolingo-style visual path**: tool-specific tracks, grouped into **levels**, rendered as a connected map of illustrated nodes, reinforced with **streaks**, **per-lesson imagery**, and **percentage progress** everywhere.

This document analyzes Coursiv, compares it to our current build, and proposes a concrete, phased plan to give Upskil OS the same clarity and momentum — **without discarding our differentiators** (AI mentor grading, reflections, adaptive pace). The recommended direction keeps our signature "28 days" identity but reframes it as a **4-level visual journey** with a dedicated image per day.

**The core recommendation in one line:** keep our superior content and AI-grading engine, and adopt Coursiv's visual level-path, per-day imagery, and streak-forward UI so learners always see a clear cut path from Level 1 to graduation.

---

## 2. Competitive Analysis — Coursiv.io

Observations from the Coursiv product (marketing site + the shared in-app screenshot of the web dashboard and mobile path).

### 2.1 Product model
- **Multi-track catalog.** Learning is split into tool-specific guides: *ChatGPT, MidJourney, Jasper, Claude 3.7, Stable Diffusion, DeepSeek*, and more. Each is its own mini-course.
- **Courses → Levels → Lessons.** Every track is labeled like *"Lessons 14 · 3 levels."* A track is broken into **3 levels**, each level containing several lessons. This gives a built-in sense of graduation ("Level 1 → Level 2 → Level 3").
- **"Your Mastery Path."** The home screen surfaces a horizontal carousel of track cards, each with cover art and progress.

### 2.2 The visual learning path (their signature move)
- On mobile, a level opens into a **vertical, winding node map** — visually similar to Duolingo. The shared screenshot shows *MidJourney: Level 1* with connected nodes: *Basic usage → Crafting Simple Prompts → Enhancing Prompt Quality → Contextual Prompting → …*.
- **Each node is an illustrated icon** (play button, book, sparkle) indicating the lesson type, connected by a drawn path line.
- The current node is highlighted; upcoming nodes trail below. Progress is shown as a **level completion percentage** ("50%") in the header.
- This is the single biggest UX difference from us: **the path is a picture, not a list.**

### 2.3 Gamification
- **Weekly streaks.** A Mon–Sun row with checkmarks and a nudge: *"Finish 1 lesson to begin your streak."*
- **Progress everywhere.** "7/18 lessons completed · 44%" on the active guide; per-track percentages; per-level percentages.
- **Challenges — "Tailored just for you."** A separate surface of bite-size, personalized challenges.
- **Continue learning** as the primary CTA — one tap resumes exactly where you left off.

### 2.4 Visual design
- Premium **dark theme**, violet/indigo accent, soft glows.
- **Rich per-lesson/per-track illustration** — every track card and many nodes carry custom art. Visuals do heavy lifting for motivation and scannability.

### 2.5 Onboarding & monetization
- Quiz-driven onboarding personalizes the recommended path.
- Freemium funnel: a taste is free, the full path is paywalled/subscription.

### 2.6 What makes it work
1. **Legibility of progress** — you always know where you are and how far to the next milestone.
2. **Momentum** — streaks + percentages + "continue" reduce the activation energy to return.
3. **Visual reward** — imagery makes each step feel like a place, not a row in a list.

---

## 3. Our Current State — Upskil OS 28-Day Challenge

### 3.1 Model
- A **single linear 28-day journey**, themed in **4 weeks**:
  - Week 1 — **AI Foundations** (Days 1–7)
  - Week 2 — **Prompt Engineering** (Days 8–14)
  - Week 3 — **AI Tools & Workflows** (Days 15–21)
  - Week 4 — **Building & Monetizing** (Days 22–28)
- Every 7th day is a **Review** day; Day 28 is **Graduation**.

### 3.2 Anatomy of a day (our depth advantage)
Each day is a multi-step flow, richer than a single Coursiv lesson:
1. **Lesson** — reading content, plus an optional **AI-narrated Audio Deep Dive**.
2. **Practice** (bonus) — a short "try it now" exercise with instant AI feedback.
3. **Task** — a real deliverable, **graded by an AI mentor** (GPT-4o-mini) that returns strengths, improvements, and a score.
4. **Quiz** — 3–5 multiple-choice questions; pass at ≥60%.
5. **Reflection** — a written prompt the learner can optionally share to the community feed.

### 3.3 Progression & access
- `currentDay` gates forward progress; learners can revisit past days.
- **Paywall:** Day 1 free; Days 2–28 require access (402 handled by `requireDayAccess`).
- **Adaptive pace:** onboarding time budget (10 / 20 / 40 min) changes which steps are *required* to complete a day.

### 3.4 Gamification (what we already have)
- **XP** per step and per day (100–200 XP/day), **levels** from accumulated XP, **achievements**, and **streak** tracking with reminders.

### 3.5 Platforms
- **Web** `/path` — vertical timeline of 28 nodes (locked / active / completed) + per-day view with a floating audio player.
- **Mobile** `/learn` — vertical list with "Week X of 4" header and an overall progress bar; day view uses a segmented control (Lesson | Task | Quiz | Reflect).

---

## 4. Side-by-Side Comparison

| Dimension | Coursiv.io | Upskil OS (today) |
|---|---|---|
| Structure | Multi-track → 3 levels → lessons | Single 28-day journey → 4 weekly themes |
| Progression visual | **Illustrated winding node map** | Vertical timeline / list |
| Per-step imagery | **Yes — art on tracks & nodes** | Icons only; no per-day image |
| Levels | Explicit Level 1/2/3 per track | Implicit (weeks + XP levels) |
| Depth per unit | Lesson (read/watch) | **Lesson + Practice + Task + Quiz + Reflection** |
| AI grading of work | Not evident | **Yes — AI mentor scores tasks** |
| Reflection / journaling | Not evident | **Yes, shareable to community** |
| Adaptive pace | Not evident | **Yes (10/20/40 min)** |
| Streaks | Yes (weekly Mon–Sun row) | Yes (count + **streak freezes**), no weekly row yet |
| Progress %, "Continue" | Prominent everywhere | **Present** ("Continue Flow" on dashboard), less visual |
| Audio narration | Not evident | **Yes — AI Deep Dive** |
| Community | Not evident | **Yes — feed, posts, likes** |
| Leaderboards / ranking | Not evident | **Yes — weekly XP leaderboard** |
| Achievements / badges | Not evident | **Yes — gallery on profile** |
| Certificates | On completion | **Yes — generated on graduation** |
| Reference library | "Guide" tab | **Yes — Prompts + Projects library** |
| Daily reminders / push | Likely (mobile app) | **No — not implemented** |
| AI tool recommender quiz | **Yes — "find your perfect tool"** | **No** |
| Offline / download | Mobile app | **No** |
| Spaced-repetition review | Not evident | **No (linear only)** |

**Read:** Coursiv wins on *presentation and momentum*. We win on *depth, feedback, personalization, and social* (AI grading, reflections, leaderboards, streak freezes, certificates). The opportunity is to keep our depth and borrow their presentation, then close a short list of genuinely missing retention features.

---

## 5. Gap Analysis

This analysis was validated against the actual codebase (web + mobile + api). Several things that *look* like gaps compared to Coursiv are **already built** in Upskil OS — those are listed first so we protect them rather than rebuild them. The genuinely missing items follow as a prioritized backlog.

### 5.1 Already built — protect & promote (do NOT rebuild)
Confirmed present in code today:
1. **AI mentor grading** of tasks (GPT-4o-mini strengths/improvements/score) — our biggest differentiator; make it *more visible and celebrated*.
2. **Reflections + community feed** (posts, likes, shareable reflections) — depth and belonging Coursiv lacks.
3. **Adaptive pace** (10/20/40 min changes required steps).
4. **Audio Deep Dive** (AI narration) — accessibility + multitasking.
5. **Weekly XP leaderboard** (resets Monday, toggleable) — social competition.
6. **Streak freezes** (earned, auto-consumed to bridge missed days).
7. **Achievements/badges gallery** (unlocked + locked) on profile.
8. **Level-up / completion celebrations** (CelebrationProvider, web + mobile).
9. **"Continue Flow" resume CTA** on the dashboard.
10. **Certificates** generated on graduation.
11. **Prompts + Projects library** (browsable reference outside the daily flow).
12. **Onboarding personalization** (quiz → `programFocus`/`programTitle` emphasis) and **daily goal** (`dailyMinutesGoal`).

> Implication: our foundation is strong. The work is mostly **presentation** (make the depth *visible*) plus a **short list of missing retention mechanics**, not a rebuild.

### 5.2 Where Coursiv is clearly ahead (top priorities)
1. **No visual/Duolingo-style path.** Our progression reads as a list/timeline; theirs reads as an illustrated adventure map. *(Biggest perceived gap.)*
2. **No per-day imagery.** We rely on icons; imagery drives motivation, scannability, and recall.
3. **Levels are implicit.** "Week 3" is less compelling than "Level 3 of 4 — 75% to graduation."
4. **Momentum surfaces are under-visualized.** We *have* streaks, progress, and Continue, but they aren't front-and-center (e.g., no Mon–Sun streak row; percentages not shown at level scope).

### 5.3 Additional observations & new opportunities (the build backlog)
Beyond matching Coursiv, these are features common to best-in-class learning apps (Coursiv, Duolingo) that we do **not** yet have and could build. Prioritized for later implementation.

| # | Opportunity | Why it matters | Rough effort | Priority |
|---|---|---|---|---|
| G1 | **Visual level-path (winding node map)** — mobile then web | Signature engagement upgrade; turns a list into a journey | M–L | **P0** |
| G2 | **Per-day illustration** (`imageUrl` per day) | Motivation, recall, premium feel; unblocks the path art | S–M | **P0** |
| G3 | **Weekly streak row (Mon–Sun)** on home/path | Proven habit driver; we already track the data | S | **P0** |
| G4 | **Level/overall % everywhere** + celebrated AI-grade reveal | Legibility of progress; showcases our AI grading | S | **P1** |
| G5 | **Push / email daily reminders** (with custom reminder time) | Highest-leverage retention lever; currently absent | M | **P1** |
| G6 | **Level "boss" checkpoint** — a combined review quiz at each level end (Days 7/14/21) | Consolidation + a satisfying milestone gate | M | **P1** |
| G7 | **AI tool recommender** — "find your perfect AI tool" 1-min quiz | Coursiv has it; drives discovery + engagement | M | **P2** |
| G8 | **Smart review / light spaced-repetition** — resurface previously-missed quiz questions on review days | Better retention of concepts | M | **P2** |
| G9 | **Certificate social sharing** — shareable image + "Add to LinkedIn" | Organic growth loop from graduates | S–M | **P2** |
| G10 | **Referral / invite-a-friend** | Growth loop (Duolingo-style) | M | **P2** |
| G11 | **Micro-step sub-nodes** — reveal a day's Lesson/Task/Quiz/Reflect as mini-steps within the node | Matches Coursiv's lesson-level granularity; smaller wins | M | **P2** |
| G12 | **Offline / downloadable lessons + audio** (mobile) | Learn anywhere; reduces drop-off | L | **P3** |
| G13 | **Home-screen streak widget** (mobile) | Daily re-entry point outside the app | M | **P3** |
| G14 | **Test-out / skill check** — let advanced users skip ahead in Level 1 | Respects experienced learners; reduces early churn | M | **P3** |
| G15 | **Learner insights page** — time spent, quiz accuracy, streak history | Self-motivation via personal stats | S–M | **P3** |
| G16 | **Personalized daily nudge copy** via Nova AI mentor on the path | Ties our AI mentor into re-engagement | S | **P3** |

*Effort key: S = small, M = medium, L = large. Priority: P0 = do first, P3 = later.*

---

## 6. Strategic Direction & Recommendation

**Keep the "28 days" brand. Reframe it as a 4-Level visual journey.** Do **not** fragment into many tool tracks — our strength is one coherent, guided arc from beginner to builder. We adopt Coursiv's *presentation* without diluting our *narrative*.

### 6.1 Reframe weeks as Levels
| Level | Days | Theme | Learner promise |
|---|---|---|---|
| **Level 1 — Foundations** | 1–7 | AI Foundations | "I understand what AI is and can talk to it well." |
| **Level 2 — Prompt Mastery** | 8–14 | Prompt Engineering | "I can get reliable, expert results on demand." |
| **Level 3 — Tools & Workflows** | 15–21 | AI Tools & Workflows | "I can chain tools into real workflows." |
| **Level 4 — Build & Monetize** | 22–28 | Building & Monetizing | "I shipped something and know how to earn from it." |

Each Level ends in a **Review node** (Days 7/14/21) and the journey ends in **Graduation** (Day 28) with a certificate — a natural "boss level."

### 6.2 The Visual Path (the headline feature)
Replace the list with a **winding vertical node map**, one node per day, grouped by Level:
- **Node states:** Locked (dimmed + padlock), Available (accent glow, pulsing "Start"), In-progress (partial ring showing % of steps done), Completed (green check), Review (star), Graduation (trophy).
- **Node art:** each day gets its **own illustration** (see §7). The node shows the image in a rounded medallion.
- **Connectors:** a drawn path line links nodes; completed segments fill with accent color.
- **Level dividers:** a banner between levels — "Level 2 · Prompt Mastery · 0/7" with a level progress bar.
- **Sticky header:** overall "Day X of 28 · NN%" and current streak.
- **Primary CTA:** floating **"Continue"** that jumps to the current node.

Mobile gets the full winding map (Coursiv-style). Web uses a wider two-column serpentine or centered spine to use the space.

### 6.3 Per-day imagery system
Every curriculum day carries an `imageUrl`. Art is themed by Level (consistent palette per level) with a unique subject per day (see §7 for the shot list). This is the most visible upgrade and should ship early.

### 6.4 Momentum polish
- Elevate **streak** to the top of the path (weekly Mon–Sun row like Coursiv).
- Show **percentages** at three scopes: overall, per-level, per-day.
- Make **AI mentor grading** a celebrated moment (animated score reveal) — lean into our advantage.
- Add a lightweight **Challenges** surface later (P3) sourced from practice prompts.

---

## 7. Curriculum Map (28 Days → 4 Levels) with Image Shot List

Consistent per-level palette; each day a distinct subject. Node type drives the badge icon.

### Level 1 — Foundations (Days 1–7) · palette: indigo/blue
| Day | Title | Lesson | Node | Image concept |
|---|---|---|---|---|
| 1 | Welcome to the AI Era | What AI Really Is (and Isn't) | Start | Sunrise over a neural-network horizon |
| 2 | How Models Think | Tokens, Context, and Limits | Lesson | Glowing tokens flowing into a window frame |
| 3 | Your First Real Conversations | Talking to AI Like a Pro | Lesson | Two speech bubbles, human + AI, in dialogue |
| 4 | AI for Writing | Drafting at the Speed of Thought | Lesson | A pen writing a trail of light |
| 5 | AI for Research | Learning Anything Faster | Lesson | An open book emitting a beam of insight |
| 6 | Understanding Hallucinations | When AI Confidently Gets It Wrong | Lesson | A mirage / cracked-but-confident reflection |
| 7 | Week 1 Review | Consolidating Your Foundations | Review ★ | A completed foundation / laid bricks glowing |

### Level 2 — Prompt Mastery (Days 8–14) · palette: violet/magenta
| Day | Title | Lesson | Node | Image concept |
|---|---|---|---|---|
| 8 | Prompt Engineering Basics | The Anatomy of a Great Prompt | Lesson | A prompt exploded into 4 labeled parts |
| 9 | Few-Shot Prompting | Teaching by Example | Lesson | Example cards feeding a machine |
| 10 | Chain-of-Thought | Making AI Reason Step by Step | Lesson | A glowing chain of reasoning links |
| 11 | System Prompts | Setting the Rules of Engagement | Lesson | A control panel / rulebook |
| 12 | Prompt Iteration | The Refinement Loop | Lesson | A looping refinement spiral tightening |
| 13 | Prompt Libraries | Building Your Personal Arsenal | Lesson | A shelf of labeled prompt vials/cards |
| 14 | Week 2 Review | Mastering the Craft | Review ★ | A crafted, polished gem |

### Level 3 — Tools & Workflows (Days 15–21) · palette: teal/cyan
| Day | Title | Lesson | Node | Image concept |
|---|---|---|---|---|
| 15 | The AI Tool Landscape | Choosing the Right Tool | Lesson | A toolbox of AI app icons |
| 16 | AI for Images | Creating Visuals with Words | Lesson | Words morphing into a picture |
| 17 | AI for Data | Turning Numbers into Insight | Lesson | Spreadsheet rising into a chart |
| 18 | AI Automation | Connecting the Dots | Lesson | Connected nodes / automation flow |
| 19 | AI Coding Assistants | Building Without a CS Degree | Lesson | Code assembling itself into blocks |
| 20 | Building Workflows | Stacking Tools into Systems | Lesson | Stacked modular blocks / pipeline |
| 21 | Week 3 Review | Your AI Toolkit | Review ★ | A full, organized toolkit |

### Level 4 — Build & Monetize (Days 22–28) · palette: amber/gold
| Day | Title | Lesson | Node | Image concept |
|---|---|---|---|---|
| 22 | Planning Your AI Project | From Idea to Plan | Lesson | A blueprint / project map |
| 23 | Building with AI | Shipping Your First Version | Lesson | A rocket on the pad, v1 launching |
| 24 | Testing and Improving | Getting Real Feedback | Lesson | A feedback dial / user reactions |
| 25 | Monetization Basics | Turning Skills into Income | Lesson | Skills converting into coins |
| 26 | Building Your Brand | Becoming Known for AI Skills | Lesson | A rising personal-brand spotlight |
| 27 | Staying Current | Keeping Your Edge as AI Evolves | Lesson | A surfer riding an ever-moving wave |
| 28 | Graduation Day | Your AI Journey Begins | Graduation 🏆 | A trophy / certificate with confetti |

---

## 8. Delivery Roadmap (Phased)

Each phase is independently shippable and adds visible value.

### Phase 0 — Foundations for the path (data & assets)
- Add `imageUrl` (and optional `nodeType`) to `curriculum_days`; add a `level` grouping (derivable from day, but store for clarity).
- Generate the 28 day images per the §7 shot list (4 palettes, one per level).
- Backfill via the seed script; expose `imageUrl`/`level` through the curriculum API contract.
- **Done when:** every day returns an image and level via the API.

### Phase 1 — The Visual Path (mobile-first)
- Build the winding node map on mobile `/learn`: node states, connectors, level dividers, sticky progress header, floating "Continue".
- Wire node medallions to `imageUrl`; reflect real progress states.
- **Done when:** a learner sees an illustrated Level-1→4 map and can resume in one tap.

### Phase 2 — Visual Path on Web + momentum polish
- Bring the serpentine/spine path to web `/path` with day imagery.
- Elevate streaks (weekly row), add per-level and overall percentages, celebrate AI-grade reveal.
- **Done when:** web and mobile share the same visual-journey language.

### Phase 3 — Retention mechanics
- **Push / email daily reminders** with a custom reminder time (G5).
- **Level "boss" checkpoint** quiz at Days 7/14/21 (G6).
- **Smart review** — resurface previously-missed quiz questions on review days (G8).
- **Done when:** learners get timely nudges and a satisfying milestone gate per level.

### Phase 4 — Discovery, growth & polish
- **AI tool recommender** "find your perfect tool" quiz (G7).
- **Certificate social sharing** + "Add to LinkedIn" (G9) and **referral / invite-a-friend** (G10).
- **Micro-step sub-nodes** on the path (G11), **learner insights page** (G15), **Nova daily nudge copy** (G16).
- **Done when:** graduates can share, friends can be invited, and the path shows step-level granularity.

### Phase 5 — Mobile depth (later)
- **Offline / downloadable lessons + audio** (G12), **home-screen streak widget** (G13), **test-out / skill check** (G14).
- **Done when:** the mobile experience works anywhere and respects advanced learners.

> Sequencing rationale: imagery + visual path (Phases 0–2) deliver the biggest perceived jump for the least architectural risk, so they go first. Retention mechanics (Phase 3) compound the momentum. Growth and mobile-depth features (Phases 4–5) build on top once the core journey feels great. Each backlog item (G1–G16) maps to a phase here; see §5.3 for effort and priority.

---

## 9. Data Model & API Changes (high level)

- `curriculum_days`: add `image_url TEXT`, `node_type TEXT` (start | lesson | review | graduation), `level INT` (1–4).
- Curriculum API responses include `imageUrl`, `nodeType`, `level` so both clients render the path without hardcoding.
- Progress payloads already expose per-step completion; add derived **per-level %** and **overall %** helpers so clients don't recompute inconsistently.
- Keep the paywall (`requireDayAccess`) and adaptive-pace logic unchanged — the path is a presentation layer over existing state.

> Follow the contract-first flow: update the OpenAPI schema and shared lib types first, run codegen/typecheck, then implement clients.

---

## 10. Design System Notes

- **Theme:** keep our premium dark base; introduce a **per-level accent palette** (indigo → violet → teal → amber) so learners feel the terrain change as they climb.
- **Node medallions:** rounded-square image tiles with a status ring; consistent 1:1 art.
- **Motion:** subtle path-line fill on completion, gentle pulse on the active node, celebratory burst on level-up and graduation.
- **Accessibility:** node state must not rely on color alone (pair with icons: lock / check / star / trophy); keep audio Deep Dive prominent.

---

## 11. Success Metrics

- **Activation:** % of new users who complete Day 1 (target: ↑ vs. current).
- **Streak formation:** % reaching a 3-day streak in week one.
- **Level completion:** % completing each Level (1→4) — watch the Level 1→2 cliff.
- **28-day completion / graduation rate.**
- **AI task submissions per active day** (depth engagement).
- **D7 / D28 retention** and **paywall conversion** (Day 1 → paid).

---

## 12. Open Questions / Decisions Needed

1. **Structure:** Confirm we keep the **single 28-day journey** reframed as 4 levels (recommended), rather than splitting into multiple tool-specific tracks like Coursiv.
2. **Art direction:** AI-generated illustrations (fast, consistent, cheap) vs. commissioned art (premium, slower). Recommendation: AI-generated per the §7 shot list for launch.
3. **Path shape on web:** centered spine vs. serpentine two-column — decide during Phase 2 design.
4. **Reminders channel (G5):** push notifications (mobile), email, or both? Push needs Expo notification setup; email needs a provider — decide before Phase 3.
5. **Boss checkpoint (G6):** should the level checkpoint quiz *gate* progression to the next level, or be optional-but-rewarded?
6. **Referrals (G10):** what's the incentive — free days, streak freezes, or cosmetic — and does it fit the paywall model?
7. **Tool recommender (G7):** recommend external AI tools (ChatGPT, MidJourney, etc.) or map to our internal prompts/projects library?

---

## 13. Funnel Comparison — Upskil OS vs Coursiv.io

Coursiv's growth engine is a **pay-first quiz funnel**: the visitor is emotionally invested through a long personalization quiz *before* ever seeing the product, then hits a paywall at the moment of peak motivation. Upskil OS now adopts the same pay-first structure, adapted to our AI-mentor product and Razorpay checkout.

### 13.1 Coursiv's funnel (observed pattern)

1. **Ad / landing** → single dominant CTA into a quiz (no product tour first).
2. **Long personalization quiz** (20–30+ steps): goals, role, experience, income ambition, time commitment, plus interstitial "social proof" and commitment screens between questions.
3. **"Building your plan" loader** — a progress animation ("analyzing your answers…") that manufactures perceived effort and value.
4. **Results / plan reveal** — a personalized program summary with a projected-progress chart and testimonials.
5. **Paywall** — priced offer (often a discounted trial or one-time plan) presented immediately after the reveal, with urgency.
6. **Account creation + payment** — email/account captured at checkout; access is granted only after payment.
7. **Full app access** — the learner lands in the product already committed and paying. **Zero free lessons.**

### 13.2 Upskil OS funnel (implemented)

| Stage | Coursiv | Upskil OS (now) |
|---|---|---|
| Entry | Ad → quiz | Rich landing page → quiz (landing intentionally deeper than Coursiv's: proof, curriculum peek, differentiators) |
| Quiz | 20–30+ steps w/ interstitials | Long multi-step quiz with testimonials, commitment & social-proof interstitials |
| Loader | "Building your plan" | "Building your program" animated loader |
| Reveal | Plan summary + chart + reviews | Personalized program reveal: title, focus, projected-growth chart, highlights, testimonials |
| Paywall | Discounted trial / one-time | One-time lifetime unlock (Razorpay), shown right after account creation |
| Account | Captured at checkout | Clerk account created after reveal, then routed straight to paywall |
| Access model | **Zero free lessons** | **Zero free days — hard paywall** (`FREE_PREVIEW_THROUGH_DAY = 0`) |

**Flow:** Landing → Quiz → Building loader → Results reveal → Create account → Paywall → Pay → Full 28-day access.

### 13.3 Key differences & rationale

- **Hard paywall (zero free days).** Previously Day 1 was a free preview; we now gate the entire curriculum behind payment, matching Coursiv. Enforced server-side (`requireDayAccess` returns 402 for any day when unpaid), so both web and mobile are covered by one change. Signed-in but unpaid users are redirected to the paywall and never reach course content.
- **Account-before-payment, not before-value.** Razorpay checkout requires an authenticated user, so account creation is deliberately placed *after* the value-building reveal and *immediately before* payment — the account step doubles as the checkout gate.
- **Richer landing than Coursiv.** Coursiv pushes visitors into the quiz almost immediately. We keep a substantive landing page (social proof, curriculum preview, AI-mentor differentiators) so organic/SEO visitors get context, while the primary CTA still funnels into the quiz.
- **Differentiators preserved.** Unlike Coursiv, our reveal and product lead with the **AI-mentor grading** and **reflection** loop — the paywall promises graded feedback, not just video lessons.

### 13.4 Risks / watch-items

- **Conversion vs. reach trade-off.** Zero free days maximizes commitment but removes the "try before you buy" on-ramp; monitor paywall conversion and top-of-funnel drop-off (§11 metrics).
- **Trust at the paywall.** With no free lesson, the reveal + testimonials + secure-checkout signals must carry credibility — keep proof elements strong.
- **Refund/guarantee copy.** A visible guarantee can offset the friction of paying before experiencing the product (open question for Product).

---

### Appendix A — Source references
- Competitive: Coursiv.io (`coursiv.io/en`) + shared in-app dashboard/path screenshot (`attached_assets/Levels2_1783142705257.webp`).
- Current curriculum: seeded 28 days (`scripts/src/seed-curriculum.ts`), 4 themes, review + graduation days.
- Current path UI: web `artifacts/web/src/pages/path.tsx`, mobile `artifacts/mobile/app/(app)/(tabs)/learn.tsx`.
- Day data model: `lib/db/src/schema/curriculumDays.ts`, `dayProgress.ts`.
