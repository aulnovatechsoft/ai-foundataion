import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import * as LucideIcons from "lucide-react";
import { Achievement } from "@workspace/api-client-react";

type CelebrationContextType = {
  triggerXpBurst: (xp: number, event?: React.MouseEvent) => void;
  triggerLevelUp: (newLevel: number) => void;
  triggerDayComplete: (day: number, totalXp: number, streakExtended: boolean) => void;
  triggerAchievementUnlock: (achievement: Achievement) => void;
};

const CelebrationContext = createContext<CelebrationContextType | null>(null);

export function useCelebration() {
  const ctx = useContext(CelebrationContext);
  if (!ctx) throw new Error("useCelebration must be used within CelebrationProvider");
  return ctx;
}

export function CelebrationProvider({ children }: { children: ReactNode }) {
  const [levelUpData, setLevelUpData] = useState<{ level: number } | null>(null);
  const [dayCompleteData, setDayCompleteData] = useState<{ day: number; xp: number; streakExtended: boolean } | null>(null);
  const [xpToasts, setXpToasts] = useState<{ id: string; xp: number; x: number; y: number }[]>([]);

  const triggerXpBurst = useCallback((xp: number, event?: React.MouseEvent) => {
    // Burst confetti from the button or center
    const x = event ? event.clientX / window.innerWidth : 0.5;
    const y = event ? event.clientY / window.innerHeight : 0.8;
    
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ['#8A2BE2', '#4169E1', '#00FFFF'], // Theme accents
      disableForReducedMotion: true
    });

    const id = Math.random().toString(36).substring(7);
    setXpToasts(prev => [...prev, { id, xp, x: event ? event.clientX : window.innerWidth / 2, y: event ? event.clientY : window.innerHeight / 2 }]);
    setTimeout(() => {
      setXpToasts(prev => prev.filter(t => t.id !== id));
    }, 2000);
  }, []);

  const triggerLevelUp = useCallback((newLevel: number) => {
    setLevelUpData({ level: newLevel });
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.4 },
      colors: ['#FFD700', '#FFA500', '#FF8C00'],
      disableForReducedMotion: true
    });
  }, []);

  const triggerDayComplete = useCallback((day: number, xp: number, streakExtended: boolean) => {
    setDayCompleteData({ day, xp, streakExtended });
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#4169E1', '#00FFFF']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#4169E1', '#00FFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  const triggerAchievementUnlock = useCallback((achievement: Achievement) => {
    const IconComponent = (LucideIcons as any)[
      achievement.icon.charAt(0).toUpperCase() + achievement.icon.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    ] || LucideIcons.Trophy;

    toast.custom((t) => (
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[hsl(var(--surface-2))] border-2 border-[hsl(var(--accent))] p-4 rounded-2xl shadow-[0_0_30px_hsl(var(--accent)/0.3)] flex items-center gap-4 w-80"
      >
        <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))/0.2] flex items-center justify-center shrink-0">
          <IconComponent className="w-6 h-6 text-[hsl(var(--accent))]" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--accent))] mb-1">Achievement Unlocked!</p>
          <h4 className="text-sm font-semibold text-[hsl(var(--text))]">{achievement.title}</h4>
          <p className="text-xs text-[hsl(var(--text-muted))]">{achievement.description}</p>
        </div>
      </motion.div>
    ), { duration: 5000 });
  }, []);

  return (
    <CelebrationContext.Provider value={{ triggerXpBurst, triggerLevelUp, triggerDayComplete, triggerAchievementUnlock }}>
      {children}
      
      {/* Floating XP Numbers */}
      <AnimatePresence>
        {xpToasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 1, y: toast.y - 20, x: toast.x }}
            animate={{ opacity: 0, y: toast.y - 100, x: toast.x }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="fixed pointer-events-none z-50 text-2xl font-black text-[hsl(var(--accent))] font-heading drop-shadow-md"
            style={{ left: 0, top: 0 }}
          >
            +{toast.xp} XP
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Level Up Fullscreen */}
      <AnimatePresence>
        {levelUpData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLevelUpData(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-3xl p-8 max-w-sm w-full text-center relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent))/0.2] to-transparent pointer-events-none" />
              <div className="w-24 h-24 mx-auto rounded-full bg-[hsl(var(--surface-2))] border-4 border-[hsl(var(--accent))] flex items-center justify-center mb-6 shadow-[0_0_40px_hsl(var(--accent)/0.4)]">
                <span className="text-4xl font-black font-heading text-[hsl(var(--accent))]">{levelUpData.level}</span>
              </div>
              <h2 className="text-3xl font-heading font-bold text-[hsl(var(--text))] mb-2">Level Up!</h2>
              <p className="text-[hsl(var(--text-muted))] mb-8">You've reached level {levelUpData.level}. Keep up the incredible momentum.</p>
              <button 
                onClick={() => setLevelUpData(null)}
                className="w-full py-3 rounded-xl bg-[hsl(var(--accent))] text-white font-semibold hover:bg-[hsl(var(--accent))/0.9] transition-colors"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Day Complete Fullscreen */}
      <AnimatePresence>
        {dayCompleteData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setDayCompleteData(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-3xl p-8 max-w-sm w-full text-center relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(var(--accent-2))/0.2] to-transparent pointer-events-none" />
              <div className="w-20 h-20 mx-auto rounded-full bg-[hsl(var(--surface-2))] border-4 border-[hsl(var(--accent-2))] flex items-center justify-center mb-6 shadow-[0_0_40px_hsl(var(--accent-2)/0.4)]">
                <LucideIcons.CheckCircle2 className="w-10 h-10 text-[hsl(var(--accent-2))]" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-[hsl(var(--text))] mb-2">Day {dayCompleteData.day} Complete</h2>
              <div className="space-y-4 my-8">
                <div className="bg-[hsl(var(--surface-2))] p-4 rounded-2xl flex items-center justify-between border border-[hsl(var(--border))]">
                  <span className="font-semibold text-[hsl(var(--text-muted))]">XP Earned Today</span>
                  <span className="text-xl font-bold text-[hsl(var(--accent))]">+{dayCompleteData.xp}</span>
                </div>
                {dayCompleteData.streakExtended && (
                  <div className="bg-[hsl(var(--surface-2))] p-4 rounded-2xl flex items-center justify-between border border-[hsl(var(--border))]">
                    <div className="flex items-center gap-2 text-[hsl(var(--text-muted))]">
                      <LucideIcons.Flame className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold">Streak Extended!</span>
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setDayCompleteData(null)}
                className="w-full py-3 rounded-xl bg-[hsl(var(--accent-2))] text-white font-semibold hover:bg-[hsl(var(--accent-2))/0.9] transition-colors"
              >
                Awesome
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </CelebrationContext.Provider>
  );
}
