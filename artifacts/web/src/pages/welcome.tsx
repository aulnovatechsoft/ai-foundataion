import { useState } from "react";
import { Redirect, useLocation } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetMe, 
  useListCourses, 
  useSaveCertificateSetup,
  getGetMeQueryKey 
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Zap, BookOpen, Target, Sparkles } from "lucide-react";
import { Shell } from "@/components/layout/Shell";

export default function WelcomePage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <WelcomeWizard />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function WelcomeWizard() {
  const { data: me, isLoading: meLoading } = useGetMe();
  const { data: courses, isLoading: coursesLoading } = useListCourses();
  const saveSetup = useSaveCertificateSetup();
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const [step, setStep] = useState(1);
  const [certName, setCertName] = useState("");
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | null>(null);

  if (meLoading || coursesLoading) {
    return <div className="flex items-center justify-center h-[60vh]">Loading...</div>;
  }

  if (me?.certOnboardingDone) {
    return <Redirect to="/dashboard" />;
  }

  const handleNext = () => setStep(s => s + 1);

  const handleComplete = () => {
    saveSetup.mutate({
      data: {
        certificateName: certName || me?.displayName || "Learner",
        activeCourseSlug: selectedCourseSlug || courses?.[0]?.slug
      }
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
        setLocation(selectedCourseSlug ? `/course/${selectedCourseSlug}` : "/dashboard");
      }
    });
  };

  const currentStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center max-w-md mx-auto text-center animate-slide-up">
            <div className="w-16 h-16 bg-[hsl(var(--accent))/0.1] rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-[hsl(var(--accent))]" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4 text-[hsl(var(--text))]">What name should go on your certificates?</h1>
            <p className="text-[hsl(var(--text-muted))] mb-8">We'll print this on your official certificates when you master each AI tool.</p>
            <Input 
              value={certName} 
              onChange={e => setCertName(e.target.value)} 
              placeholder={me?.displayName || "Your Full Name"}
              className="text-center text-lg h-14 mb-8"
              autoFocus
            />
            <Button onClick={() => { if (!certName && me?.displayName) setCertName(me.displayName); handleNext(); }} className="w-full h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full">
              I'm ready <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center animate-slide-up">
            <h1 className="text-3xl font-heading font-bold mb-4 text-[hsl(var(--text))]">Unlock the Ultimate AI Toolkit</h1>
            <p className="text-[hsl(var(--text-muted))] mb-10">Master these 4 essential tools to 10x your productivity.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10">
              {courses?.map(c => (
                <div key={c.id} className="p-4 rounded-xl border border-[hsl(var(--border))] flex items-center gap-4 bg-[hsl(var(--surface))]">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{ backgroundColor: c.color }}>
                    {c.icon}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-bold text-[hsl(var(--text))]">{c.title}</h3>
                    <p className="text-xs text-[hsl(var(--text-muted))]">{c.lessonCount} lessons</p>
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={handleNext} className="w-full max-w-md h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full">
              Next <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center max-w-md mx-auto text-center animate-slide-up">
            <div className="w-16 h-16 bg-[hsl(var(--accent-2))/0.1] rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[hsl(var(--accent-2))]" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-10 text-[hsl(var(--text))]">Your Learning Path</h1>
            <div className="space-y-6 w-full text-left mb-10 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-[hsl(var(--border))]"></div>
              {[
                { icon: BookOpen, text: "Bite-sized daily lessons" },
                { icon: CheckCircle2, text: "Interactive check questions" },
                { icon: Award, text: "Earn your course certificate" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--surface))] border-2 border-[hsl(var(--accent))] flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5 text-[hsl(var(--accent))]" />
                  </div>
                  <span className="text-lg font-medium text-[hsl(var(--text))]">{item.text}</span>
                </div>
              ))}
            </div>
            <Button onClick={handleNext} className="w-full h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full">
              Continue <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center max-w-md mx-auto text-center animate-slide-up">
            <h1 className="text-3xl font-heading font-bold mb-4 text-[hsl(var(--text))]">How it works</h1>
            <p className="text-[hsl(var(--text-muted))] mb-8">Learn by doing. No boring lectures.</p>
            <div className="os-card p-6 w-full text-left mb-8 shadow-xl">
              <div className="flex gap-4">
                <div className="w-1.5 bg-[hsl(var(--accent))] rounded-full"></div>
                <div>
                  <h3 className="font-bold text-[hsl(var(--text))] mb-2">1. Read a concept</h3>
                  <p className="text-sm text-[hsl(var(--text-muted))] mb-4">Learn a specific AI technique in 2 minutes.</p>
                  <h3 className="font-bold text-[hsl(var(--text))] mb-2">2. Answer to prove it</h3>
                  <p className="text-sm text-[hsl(var(--text-muted))] mb-4">Check your understanding immediately.</p>
                  <h3 className="font-bold text-[hsl(var(--text))]">3. Unlock the next step</h3>
                  <p className="text-sm text-[hsl(var(--text-muted))]">Momentum keeps you moving forward.</p>
                </div>
              </div>
            </div>
            <Button onClick={handleNext} className="w-full h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full">
              Got it <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col items-center max-w-md mx-auto text-center animate-slide-up">
            <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-10 h-10 text-orange-500 fill-orange-500" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4 text-[hsl(var(--text))]">Build the habit</h1>
            <p className="text-[hsl(var(--text-muted))] mb-8">Just one lesson a day builds unstoppable momentum.</p>
            <div className="flex items-center justify-center gap-2 mb-10">
              {[1, 2, 3, 4, 5].map(d => (
                <div key={d} className="w-10 h-12 rounded-md border border-[hsl(var(--border))] flex flex-col items-center justify-center bg-[hsl(var(--surface-2))]">
                  <span className="text-[10px] text-[hsl(var(--text-muted))] uppercase">D{d}</span>
                  <div className="w-4 h-4 mt-1 rounded-full border border-[hsl(var(--border))]"></div>
                </div>
              ))}
            </div>
            <Button onClick={handleNext} className="w-full h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full">
              Commit to 1 lesson/day <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center animate-slide-up">
            <h1 className="text-3xl font-heading font-bold mb-4 text-[hsl(var(--text))]">Where should we start?</h1>
            <p className="text-[hsl(var(--text-muted))] mb-8">Pick your first tool to master. You can access all of them later.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {courses?.map(c => (
                <button 
                  key={c.id} 
                  onClick={() => setSelectedCourseSlug(c.slug)}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center text-center ${selectedCourseSlug === c.slug ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.05]' : 'border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))/0.5]'}`}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 shadow-sm" style={{ backgroundColor: c.color }}>
                    {c.icon}
                  </div>
                  <h3 className="font-bold text-[hsl(var(--text))] mb-1">{c.title}</h3>
                  <p className="text-xs text-[hsl(var(--text-muted))]">{c.tagline}</p>
                </button>
              ))}
            </div>
            <Button onClick={handleNext} disabled={!selectedCourseSlug} className="w-full max-w-md h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full">
              Start Program <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col items-center max-w-md mx-auto text-center animate-slide-up">
            <div className="w-20 h-20 bg-[hsl(var(--accent-2))/0.1] rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-[hsl(var(--accent-2))]" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4 text-[hsl(var(--text))]">You're all set!</h1>
            <p className="text-[hsl(var(--text-muted))] mb-10">Your learning environment is configured. Let's get your first win.</p>
            <Button onClick={handleComplete} disabled={saveSetup.isPending} className="w-full h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full shadow-lg shadow-[hsl(var(--accent))/0.3]">
              {saveSetup.isPending ? "Setting up..." : "Enter OS"} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="w-full max-w-xs mx-auto mb-12">
        <div className="h-1.5 bg-[hsl(var(--surface-2))] rounded-full overflow-hidden">
          <div className="h-full bg-[hsl(var(--accent))] transition-all duration-500" style={{ width: `${(step / 7) * 100}%` }}></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
