import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { View, StyleSheet, Modal, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  withSequence,
  withDelay,
  runOnJS,
  Easing,
  FadeInUp,
  FadeOutUp,
  ZoomIn,
  ZoomOut,
  SlideInUp,
  SlideOutUp,
} from "react-native-reanimated";
import { AppText, Icon, type IconName, IconCircle, GlassCard } from "./ui";
import { useColors } from "@/hooks/useColors";
import { Achievement } from "@workspace/api-client-react";

type CelebrationEvent = {
  id: string;
  type: "xp" | "achievement" | "levelup" | "day_complete";
  title?: string;
  description?: string;
  xp?: number;
  icon?: string;
  level?: number;
};

type CelebrationContextType = {
  celebrate: (events: Omit<CelebrationEvent, "id">[]) => void;
};

const CelebrationContext = createContext<CelebrationContextType | null>(null);

export function useCelebration() {
  const ctx = useContext(CelebrationContext);
  if (!ctx) throw new Error("useCelebration must be used within a CelebrationProvider");
  return ctx;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export function CelebrationProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<CelebrationEvent[]>([]);
  const isAnimating = useRef(false);

  const processQueue = useCallback(() => {
    if (isAnimating.current || queue.length === 0) return;
    isAnimating.current = true;
    
    // Automatically dismiss the current event after a delay
    setTimeout(() => {
      setQueue((q) => q.slice(1));
      isAnimating.current = false;
      // The next item will process on the next render due to useEffect
    }, 3000);
  }, [queue]);

  React.useEffect(() => {
    processQueue();
  }, [queue, processQueue]);

  const celebrate = useCallback((events: Omit<CelebrationEvent, "id">[]) => {
    const newEvents = events.map(e => ({ ...e, id: Math.random().toString() }));
    setQueue((q) => [...q, ...newEvents]);
  }, []);

  const activeEvent = queue[0];

  return (
    <CelebrationContext.Provider value={{ celebrate }}>
      {children}
      {activeEvent && (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          {activeEvent.type === "xp" && (
            <Animated.View
              entering={FadeInUp.springify().damping(12)}
              exiting={FadeOutUp}
              style={{ position: "absolute", top: 100, alignSelf: "center" }}
            >
              <GlassCard padded={false} style={{ paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: "rgba(34,197,94,0.15)", borderColor: "rgba(34,197,94,0.4)" }}>
                <Icon name="zap" size={20} color="#22c55e" />
                <AppText variant="subheading" color="#22c55e">+{activeEvent.xp} XP</AppText>
              </GlassCard>
            </Animated.View>
          )}

          {activeEvent.type === "achievement" && (
            <Animated.View
              entering={SlideInUp.springify().damping(15)}
              exiting={SlideOutUp}
              style={{ position: "absolute", top: 60, left: 20, right: 20 }}
            >
              <GlassCard style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                <IconCircle name={(activeEvent.icon as IconName) || "award"} size={48} iconSize={24} bg="rgba(245,158,11,0.15)" color="#f59e0b" />
                <View style={{ flex: 1 }}>
                  <AppText variant="caption" uppercase color="#f59e0b" style={{ marginBottom: 4 }}>Achievement Unlocked</AppText>
                  <AppText variant="subheading">{activeEvent.title}</AppText>
                  <AppText variant="caption" muted numberOfLines={2}>{activeEvent.description}</AppText>
                </View>
              </GlassCard>
            </Animated.View>
          )}

          {activeEvent.type === "levelup" && (
            <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.6)", alignItems: "center", justifyContent: "center" }]}>
              <Animated.View entering={ZoomIn.springify().damping(12)} exiting={ZoomOut}>
                <View style={{ alignItems: "center", gap: 16 }}>
                  <IconCircle name="crown" size={100} iconSize={48} bg="rgba(168,85,247,0.2)" color="#a855f7" />
                  <AppText variant="display" color="#fff">Level {activeEvent.level}</AppText>
                  <AppText variant="heading" color="rgba(255,255,255,0.8)">You've leveled up!</AppText>
                </View>
              </Animated.View>
            </View>
          )}

          {activeEvent.type === "day_complete" && (
            <Animated.View
              entering={ZoomIn.springify().damping(12)}
              exiting={ZoomOut}
              style={{ position: "absolute", top: "30%", alignSelf: "center", width: "80%" }}
            >
              <GlassCard style={{ alignItems: "center", gap: 16, backgroundColor: "rgba(59,130,246,0.15)", borderColor: "rgba(59,130,246,0.3)" }}>
                <IconCircle name="check-circle" size={80} iconSize={40} bg="rgba(59,130,246,0.2)" color="#3b82f6" />
                <View style={{ alignItems: "center" }}>
                  <AppText variant="title" color="#3b82f6">Day Complete!</AppText>
                  <AppText variant="body" color="#60a5fa" style={{ textAlign: "center", marginTop: 4 }}>
                    +{activeEvent.xp} XP earned today. Keep it up!
                  </AppText>
                </View>
              </GlassCard>
            </Animated.View>
          )}
        </View>
      )}
    </CelebrationContext.Provider>
  );
}
