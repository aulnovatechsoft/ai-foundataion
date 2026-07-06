import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClerkProvider, SignIn, SignUp } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { CelebrationProvider } from "@/providers/CelebrationProvider";

import LandingPage from "@/pages/landing";
import AboutPage from "@/pages/about";
import ReviewsPage from "@/pages/reviews";
import SupportPage from "@/pages/support";
import QuizPage from "@/pages/quiz";
import UpgradePage from "@/pages/upgrade";
import DashboardPage from "@/pages/dashboard";
import PathPage from "@/pages/path";
import DayPage from "@/pages/day";
import MentorPage from "@/pages/mentor";
import ProjectsPage from "@/pages/projects";
import PromptsPage from "@/pages/prompts";
import PlaygroundPage from "@/pages/playground";
import CertificatesPage from "@/pages/certificates";
import SettingsPage from "@/pages/settings";
import SignInPage from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import NotFound from "@/pages/not-found";
import LeaderboardPage from "@/pages/leaderboard";
import CommunityPage from "@/pages/community";
import ProfilePage from "@/pages/profile";
import WelcomePage from "@/pages/welcome";
import CoursePathPage from "@/pages/course-path";
import CourseLearnPage from "@/pages/course-learn";
import { OnboardingSync } from "@/components/OnboardingSync";
import { Show } from "@clerk/react";

const clerkPubKey = publishableKeyFromHost(window.location.hostname, import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
function stripBase(path: string) { return basePath && path.startsWith(basePath) ? path.slice(basePath.length) || "/" : path; }

if (!clerkPubKey) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY in .env file');
}

const queryClient = new QueryClient();

const clerkAppearance = {
  variables: {
    colorPrimary: 'hsl(var(--accent))',
    colorBackground: 'hsl(var(--surface))',
    colorText: 'hsl(var(--text))',
    colorTextSecondary: 'hsl(var(--text-muted))',
    colorInputBackground: 'hsl(var(--surface-2))',
    colorInputText: 'hsl(var(--text))',
    colorDanger: 'hsl(var(--destructive))',
    borderRadius: '0.5rem',
  },
  elements: {
    card: 'bg-[hsl(var(--surface))] border border-[hsl(var(--border))] shadow-lg rounded-xl',
    headerTitle: 'font-heading text-2xl font-semibold tracking-tight text-[hsl(var(--text))]',
    headerSubtitle: 'text-[hsl(var(--text-muted))]',
    socialButtonsBlockButton: 'bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))/0.8]',
    formButtonPrimary: 'bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white',
    formFieldInput: 'bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--text))] focus:ring-1 focus:ring-[hsl(var(--accent))]',
    formFieldLabel: 'text-[hsl(var(--text))] font-medium',
    footerActionLink: 'text-[hsl(var(--accent))] hover:text-[hsl(var(--accent))/0.8]',
    dividerLine: 'bg-[hsl(var(--border))]',
    dividerText: 'text-[hsl(var(--text-muted))]',
  }
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/support" component={SupportPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/upgrade" component={UpgradePage} />
      <Route path="/sign-in/*?" component={SignInPage} />
      <Route path="/sign-up/*?" component={SignUpPage} />
      <Route path="/welcome" component={WelcomePage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/path" component={PathPage} />
      <Route path="/day/:day" component={DayPage} />
      <Route path="/course/:slug" component={CoursePathPage} />
      <Route path="/course/:slug/learn" component={CourseLearnPage} />
      <Route path="/mentor" component={MentorPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/prompts" component={PromptsPage} />
      <Route path="/playground" component={PlaygroundPage} />
      <Route path="/certificates" component={CertificatesPage} />
      <Route path="/leaderboard" component={LeaderboardPage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/profile/:id" component={ProfilePage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ClerkRouterSync({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  
  return (
    <ClerkProvider 
      publishableKey={clerkPubKey!} 
      proxyUrl={clerkProxyUrl} 
      appearance={clerkAppearance} 
      signInUrl={`${basePath}/sign-in`} 
      signUpUrl={`${basePath}/sign-up`} 
      routerPush={(to: string) => setLocation(stripBase(to))} 
      routerReplace={(to: string) => setLocation(stripBase(to), { replace: true })}
    >
      {children}
    </ClerkProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={basePath}>
          <ClerkRouterSync>
            <ThemeProvider>
              <CelebrationProvider>
                <Show when="signed-in">
                  <OnboardingSync />
                </Show>
                <Router />
              </CelebrationProvider>
            </ThemeProvider>
          </ClerkRouterSync>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
