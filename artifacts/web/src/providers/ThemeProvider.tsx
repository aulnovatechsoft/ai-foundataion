import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetMe, useUpdateMe, getGetMeQueryKey } from "@workspace/api-client-react";
import { useUser } from "@clerk/react";

type ThemeName = "midnight" | "daylight" | "aurora";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useUser();
  const { data: me } = useGetMe({ query: { enabled: !!isSignedIn, queryKey: getGetMeQueryKey() } });
  const updateMe = useUpdateMe();
  
  const [theme, setLocalTheme] = useState<ThemeName>("daylight");

  useEffect(() => {
    if (me?.theme) {
      setLocalTheme(me.theme as ThemeName);
    }
  }, [me?.theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-midnight", "theme-daylight", "theme-aurora");
    root.classList.add(`theme-${theme}`);
    
    // Always apply dark class for midnight and aurora so shadcn components adapt properly
    if (theme === "midnight" || theme === "aurora") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setLocalTheme(newTheme);
    if (isSignedIn) {
      updateMe.mutate({ data: { theme: newTheme } });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
