import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { useListCertificates } from "@workspace/api-client-react";
import { Award, CheckCircle2, Flame, Lock, ShieldCheck, Share2, Download, Link2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CertificatesPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <CertificatesContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function CertificatesContent() {
  const { data: certs } = useListCertificates();
  
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-slide-up pb-24 text-[hsl(var(--text))]">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight mb-2">Your Credentials</h1>
          <p className="text-[hsl(var(--text-muted))] text-lg">Verified AI skills you can prove to employers.</p>
        </div>
      </div>

      {/* Featured Certificate Section (Mocked for visual, wired to first cert if exists) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <div className="relative overflow-hidden bg-[hsl(var(--surface))] border-[8px] border-[hsl(var(--surface-2))] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] rounded-xl aspect-[1.414/1] flex flex-col justify-between p-8 md:p-12 transition-all group hover:shadow-2xl">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]"></div>
            
            {/* Top */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="font-heading font-semibold text-2xl tracking-tight">Upskil OS</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold mb-1">Credential ID</div>
                <div className="font-mono text-sm">{certs?.[0]?.credentialId || 'UP-2023-89B4C'}</div>
              </div>
            </div>

            {/* Middle */}
            <div className="relative z-10 text-center space-y-4 md:space-y-6">
              <div className="text-xs md:text-sm text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold">This certifies that</div>
              <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight">Alex Rivera</h2>
              <div className="text-xs md:text-sm text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold">has successfully completed</div>
              <h3 className="text-xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] inline-block">
                {certs?.[0]?.title || 'Prompt Engineering Fundamentals'}
              </h3>
            </div>

            {/* Bottom */}
            <div className="relative z-10 flex justify-between items-end border-t border-[hsl(var(--border))] pt-6 md:pt-8 mt-6">
              <div>
                <div className="text-xs text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold mb-2">Issued On</div>
                <div className="font-medium">{certs?.[0]?.issuedAt ? new Date(certs[0].issuedAt).toLocaleDateString() : 'October 12, 2023'}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] px-3 py-1 rounded-full text-white text-[10px] md:text-xs font-semibold mb-3">
                  <ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5" /> Verified
                </div>
                <div className="w-20 md:w-32 h-px bg-[hsl(var(--surface-2))] mb-2"></div>
                <div className="text-[10px] md:text-xs text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold">Authentication</div>
              </div>

              <div className="text-right">
                <div className="text-xs text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold mb-2">Program</div>
                <div className="font-medium">28-Day AI Challenge</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-2">Share your success</h3>
            <p className="text-[hsl(var(--text-muted))] text-sm leading-relaxed">
              You're in the top 15% of learners this week. Add this verified credential to your profile to stand out to recruiters.
            </p>
          </div>

          <div className="space-y-3">
            <Button className="w-full h-12 bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center gap-2 rounded-lg text-base font-semibold shadow-md transition-all">
              <Share2 className="w-5 h-5" />
              Share to LinkedIn
            </Button>
            <Button variant="outline" className="w-full h-12 border-[hsl(var(--border))] hover:bg-[hsl(var(--surface-2))] flex items-center justify-center gap-2 rounded-lg text-base font-medium">
              <Download className="w-5 h-5 text-[hsl(var(--text-muted))]" />
              Download PDF
            </Button>
            <Button variant="outline" className="w-full h-12 border-[hsl(var(--border))] hover:bg-[hsl(var(--surface-2))] flex items-center justify-center gap-2 rounded-lg text-base font-medium">
              <Link2 className="w-5 h-5 text-[hsl(var(--text-muted))]" />
              Copy verification link
            </Button>
          </div>

          <div className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-lg p-4 flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold mb-1">Recruiter Verified</div>
              <div className="text-xs text-[hsl(var(--text-muted))] leading-relaxed">
                Anyone with the link can verify the authenticity of this certificate directly on the Upskil OS platform.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div>
        <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3">
          Your Path
          <span className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-muted))]">Day 12 / 28</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertCard 
            status="earned"
            title="AI Foundations"
            subtitle="Week 1 Complete"
            date="Oct 5, 2023"
            icon={<CheckCircle2 className="w-6 h-6 text-green-500" />}
          />
          <CertCard 
            status="active"
            title="Mastering Tone & Style"
            subtitle="Week 2 Goal"
            progress={75}
            daysLeft={3}
            icon={<Flame className="w-6 h-6 text-orange-500" />}
          />
          <CertCard 
            status="locked"
            title="Advanced Chaining"
            subtitle="Week 3 Goal"
            lockText="Unlocks on Day 18"
            icon={<Lock className="w-6 h-6 text-[hsl(var(--text-muted))]" />}
          />
        </div>
      </div>
    </div>
  );
}

function CertCard({ status, title, subtitle, date, progress, daysLeft, lockText, icon, isCapstone = false }: any) {
  return (
    <div className={`os-card rounded-xl p-6 transition-all duration-300 flex flex-col ${status !== 'locked' ? 'cursor-pointer hover:border-[hsl(var(--accent))]' : 'opacity-70'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${status === 'earned' ? 'bg-[hsl(var(--surface-2))]' : status === 'active' ? 'bg-orange-500/10' : 'bg-[hsl(var(--surface-2))]'}`}>
          {icon}
        </div>
        {status === 'earned' && <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded">Earned</span>}
        {status === 'active' && <span className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2 py-1 rounded">In Progress</span>}
      </div>
      
      <div className="mt-auto">
        <div className="text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider mb-1">{subtitle}</div>
        <h4 className={`font-heading text-xl font-semibold mb-4 ${isCapstone ? 'bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]' : ''}`}>{title}</h4>
        
        {status === 'earned' && (
          <div className="flex items-center justify-between text-sm pt-4 border-t border-[hsl(var(--border))]">
            <span className="text-[hsl(var(--text-muted))]">Issued</span>
            <span className="font-medium">{date}</span>
          </div>
        )}

        {status === 'active' && (
          <div className="space-y-2 pt-4 border-t border-[hsl(var(--border))]">
            <div className="flex justify-between text-sm">
              <span className="text-[hsl(var(--text-muted))]">{daysLeft} days away</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-[hsl(var(--surface-2))] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        {status === 'locked' && (
          <div className="flex items-center gap-2 text-sm pt-4 border-t border-[hsl(var(--border))] text-[hsl(var(--text-muted))]">
            <Lock className="w-4 h-4" />
            <span>{lockText}</span>
          </div>
        )}
      </div>
    </div>
  );
}
