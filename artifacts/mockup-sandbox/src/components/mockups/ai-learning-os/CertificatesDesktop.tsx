import React, { useState } from "react";
import "./certificates.css";
import { 
  Sparkles, Flame, Zap, Bell, Search, 
  LayoutDashboard, BookOpen, User, PlaySquare, 
  Briefcase, Settings, Award, Share2, Download, 
  Link2, CheckCircle2, Lock, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CertificatesDesktop() {
  const [theme, setTheme] = useState<"midnight" | "daylight" | "aurora">("midnight");

  return (
    <div 
      className="cert-container min-h-screen flex font-['Plus_Jakarta_Sans'] transition-colors duration-300"
      data-theme={theme}
    >
      {/* Sidebar */}
      <aside className="cert-sidebar w-64 flex-shrink-0 flex flex-col transition-colors duration-300">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-accent flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-['Clash_Display'] font-semibold text-xl tracking-tight">Upskil OS</span>
        </div>

        <div className="flex-1 px-4 py-2 space-y-8 overflow-y-auto">
          <div>
            <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider px-3">28-Day Engine</h3>
            <div className="space-y-1">
              <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
              <NavItem icon={<BookOpen size={18} />} label="Curriculum" />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider px-3">Modules</h3>
            <div className="space-y-1">
              <NavItem icon={<User size={18} />} label="AI Mentor" />
              <NavItem icon={<Briefcase size={18} />} label="Projects" />
              <NavItem icon={<Award size={18} />} label="Certificates" active />
              <NavItem icon={<PlaySquare size={18} />} label="Prompt Library" />
              <NavItem icon={<Sparkles size={18} />} label="Playground" />
              <NavItem icon={<Briefcase size={18} />} label="Career Coach" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-color mt-auto">
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="cert-topbar h-16 flex items-center justify-between px-8 flex-shrink-0 transition-colors duration-300">
          <div className="flex items-center bg-surface-2 rounded-full px-4 py-2 w-96 border border-color">
            <Search className="w-4 h-4 text-muted mr-3" />
            <input 
              type="text" 
              placeholder="Search certificates, skills..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-[hsl(var(--text-muted))]"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Stats */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-surface-2 px-3 py-1.5 rounded-full border border-color">
                <Flame className="w-4 h-4 text-orange-500" fill="currentColor" />
                <span className="text-sm font-semibold">12 Day Streak</span>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-2 px-3 py-1.5 rounded-full border border-color">
                <Zap className="w-4 h-4 text-yellow-500" fill="currentColor" />
                <span className="text-sm font-semibold">4,850 XP</span>
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="flex items-center gap-1 bg-surface-2 p-1 rounded-full border border-color">
              <ThemeSwatch 
                color="#0f111a" 
                active={theme === "midnight"} 
                onClick={() => setTheme("midnight")} 
                title="Midnight"
              />
              <ThemeSwatch 
                color="#f8fafc" 
                active={theme === "daylight"} 
                onClick={() => setTheme("daylight")} 
                title="Daylight"
              />
              <ThemeSwatch 
                color="#15131c" 
                active={theme === "aurora"} 
                onClick={() => setTheme("aurora")} 
                title="Aurora"
              />
            </div>

            <div className="w-px h-6 bg-surface-2 mx-2 border-l border-color"></div>

            <button className="relative p-2 text-muted hover:text-[hsl(var(--text))] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-accent flex items-center justify-center text-white font-semibold text-sm shadow-sm cursor-pointer">
              AR
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-10">
          <div className="max-w-6xl mx-auto space-y-12 pb-20">
            
            {/* Header */}
            <div className="flex items-end justify-between opacity-0 animate-fade-in-up">
              <div>
                <h1 className="font-['Clash_Display'] text-4xl font-semibold tracking-tight mb-2">Your Credentials</h1>
                <p className="text-muted text-lg">Verified AI skills you can prove to employers.</p>
              </div>
            </div>

            {/* Featured Certificate Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 opacity-0 animate-fade-in-up stagger-1">
              {/* Artwork */}
              <div className="lg:col-span-8">
                <div className="certificate-artwork rounded-xl aspect-[1.414/1] relative flex flex-col justify-between p-12 transition-all duration-300 group hover:shadow-2xl">
                  <div className="absolute inset-0 cert-pattern"></div>
                  
                  {/* Top */}
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gradient-accent flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-['Clash_Display'] font-semibold text-2xl tracking-tight">Upskil OS</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted uppercase tracking-widest font-semibold mb-1">Credential ID</div>
                      <div className="font-mono text-sm">UP-2023-89B4C</div>
                    </div>
                  </div>

                  {/* Middle */}
                  <div className="relative z-10 text-center space-y-6">
                    <div className="text-sm text-muted uppercase tracking-widest font-semibold">This certifies that</div>
                    <h2 className="font-['Clash_Display'] text-5xl font-medium tracking-tight">Alex Rivera</h2>
                    <div className="text-sm text-muted uppercase tracking-widest font-semibold">has successfully completed</div>
                    <h3 className="text-3xl font-semibold text-gradient-accent inline-block">Prompt Engineering Fundamentals</h3>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 flex justify-between items-end border-t border-color pt-8">
                    <div>
                      <div className="text-xs text-muted uppercase tracking-widest font-semibold mb-2">Issued On</div>
                      <div className="font-medium">October 12, 2023</div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 bg-gradient-accent px-3 py-1 rounded-full text-white text-xs font-semibold mb-3">
                        <ShieldCheck className="w-3.5 h-3.5" /> Verified
                      </div>
                      <div className="w-32 h-px bg-surface-2 mb-2"></div>
                      <div className="text-xs text-muted uppercase tracking-widest font-semibold">Authentication</div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-muted uppercase tracking-widest font-semibold mb-2">Program</div>
                      <div className="font-medium">28-Day AI Challenge</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Actions */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="font-['Clash_Display'] text-2xl font-semibold mb-2">Share your success</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    You're in the top 15% of learners this week. Add this verified credential to your profile to stand out to recruiters.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full h-12 bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center gap-2 rounded-lg text-base font-semibold shadow-md transition-all">
                    <Share2 className="w-5 h-5" />
                    Share to LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full h-12 border-color hover:bg-surface-2 flex items-center justify-center gap-2 rounded-lg text-base font-medium">
                    <Download className="w-5 h-5 text-muted" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full h-12 border-color hover:bg-surface-2 flex items-center justify-center gap-2 rounded-lg text-base font-medium">
                    <Link2 className="w-5 h-5 text-muted" />
                    Copy verification link
                  </Button>
                </div>

                <div className="bg-surface-2 border border-color rounded-lg p-4 flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold mb-1">Recruiter Verified</div>
                    <div className="text-xs text-muted leading-relaxed">
                      Anyone with the link can verify the authenticity of this certificate directly on the Upskil OS platform.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof Strip */}
            <div className="bg-surface-2 border border-color rounded-xl p-6 flex items-center justify-between opacity-0 animate-fade-in-up stagger-2">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-surface border-2 border-color flex items-center justify-center overflow-hidden">
                      <User className="w-4 h-4 text-muted" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <span className="text-gradient-accent font-semibold">1,240+</span> learners got promoted using Upskil OS certificates.
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-xs font-semibold uppercase tracking-wider">
                Read Stories &rarr;
              </Button>
            </div>

            {/* Grid */}
            <div className="opacity-0 animate-fade-in-up stagger-3">
              <h3 className="font-['Clash_Display'] text-2xl font-semibold mb-6 flex items-center gap-3">
                Your Path
                <Badge>Day 12 / 28</Badge>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Earned */}
                <CertCard 
                  status="earned"
                  title="AI Foundations"
                  subtitle="Week 1 Complete"
                  date="Oct 5, 2023"
                  icon={<CheckCircle2 className="w-6 h-6 text-green-500" />}
                />
                
                {/* Active */}
                <CertCard 
                  status="active"
                  title="Mastering Tone & Style"
                  subtitle="Week 2 Goal"
                  progress={75}
                  daysLeft={3}
                  icon={<Flame className="w-6 h-6 text-orange-500" />}
                />

                {/* Locked */}
                <CertCard 
                  status="locked"
                  title="Advanced Chaining"
                  subtitle="Week 3 Goal"
                  lockText="Unlocks on Day 18"
                  icon={<Lock className="w-6 h-6 text-muted" />}
                />

                {/* Locked */}
                <CertCard 
                  status="locked"
                  title="AI Automation"
                  subtitle="Week 4 Goal"
                  lockText="Unlocks on Day 22"
                  icon={<Lock className="w-6 h-6 text-muted" />}
                />

                {/* Locked Capstone */}
                <CertCard 
                  status="locked"
                  title="Career Portfolio"
                  subtitle="Capstone Project"
                  lockText="Unlocks on Day 28"
                  icon={<Award className="w-6 h-6 text-muted" />}
                  isCapstone
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      active 
        ? "bg-surface-2 text-[hsl(var(--text))] shadow-sm" 
        : "text-[hsl(var(--text-muted))] hover:bg-surface-2 hover:text-[hsl(var(--text))]"
    }`}>
      <span className={active ? "text-[hsl(var(--accent))]" : ""}>{icon}</span>
      {label}
    </button>
  );
}

function ThemeSwatch({ color, active, onClick, title }: { color: string, active: boolean, onClick: () => void, title: string }) {
  return (
    <button 
      onClick={onClick}
      title={title}
      className={`w-6 h-6 rounded-full cursor-pointer transition-all border-2 ${active ? 'border-[hsl(var(--accent))] scale-110' : 'border-transparent hover:scale-105'}`}
      style={{ backgroundColor: color }}
    />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-surface-2 border border-color px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-muted">
      {children}
    </span>
  );
}

function CertCard({ 
  status, 
  title, 
  subtitle, 
  date, 
  progress, 
  daysLeft, 
  lockText, 
  icon,
  isCapstone = false
}: { 
  status: 'earned' | 'active' | 'locked', 
  title: string, 
  subtitle: string,
  date?: string,
  progress?: number,
  daysLeft?: number,
  lockText?: string,
  icon: React.ReactNode,
  isCapstone?: boolean
}) {
  return (
    <div className={`cert-card rounded-xl p-6 transition-all duration-300 flex flex-col ${status !== 'locked' ? 'cert-card-hover cursor-pointer' : 'opacity-70'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${status === 'earned' ? 'bg-surface-2' : status === 'active' ? 'bg-orange-500/10' : 'bg-surface-2'}`}>
          {icon}
        </div>
        {status === 'earned' && <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded">Earned</span>}
        {status === 'active' && <span className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2 py-1 rounded">In Progress</span>}
      </div>
      
      <div className="mt-auto">
        <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">{subtitle}</div>
        <h4 className={`font-['Clash_Display'] text-xl font-semibold mb-4 ${isCapstone ? 'text-gradient-accent' : ''}`}>{title}</h4>
        
        {status === 'earned' && (
          <div className="flex items-center justify-between text-sm pt-4 border-t border-color">
            <span className="text-muted">Issued</span>
            <span className="font-medium">{date}</span>
          </div>
        )}

        {status === 'active' && (
          <div className="space-y-2 pt-4 border-t border-color">
            <div className="flex justify-between text-sm">
              <span className="text-muted">{daysLeft} days away</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-accent rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        {status === 'locked' && (
          <div className="flex items-center gap-2 text-sm pt-4 border-t border-color text-muted">
            <Lock className="w-4 h-4" />
            <span>{lockText}</span>
          </div>
        )}
      </div>
    </div>
  );
}
