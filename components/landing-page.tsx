'use client';

import React from "react";
import {
  TrendingUp,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ClipboardCheck,
  Target,
  Zap,
  Video,
  MonitorSmartphone,
  Check,
  Clock,
  CirclePlay,
  FileText,
} from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/lauren-the-success-equation/sat-accelerator-enrollment-strategy-session";

const SELF_STUDY_URL = "https://thesuccessequation.mentomind.com/welcome";

const RESULTS = [
  {
    label: "Focused",
    name: "Amy",
    title: "+170 Points in 4 Sessions",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
    alt: "Amy's College Board score report: 1310 total, Math 720, Reading and Writing 590, improved 170 points",
    body: "After just four focused sessions, Amy raised her SAT Math score by 170 points—proof that the right strategies and targeted practice can deliver fast results. Consistent effort, even over a short time, can make a big impact.",
  },
  {
    label: "Champion",
    name: null,
    title: "780 Math — No Honors Class Needed",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    alt: "College Board score report: 1460 total, Math 780, Reading and Writing 680, improved 180 points",
    body: "Never had an honors math class, but still scored near perfect! This isn't about being a math genius—it's about learning to beat the test. Anyone can hit a high score if you know how to play the game.",
  },
  {
    label: "Trailblazer",
    name: "James",
    title: "650 Math as a 10th Grader",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    alt: "James's College Board score report: 1420 total, Math 650, Reading and Writing 770",
    body: "By starting SAT prep in 10th grade, James scored a 650 in math—already well above the national average of around 520. With another year to strengthen skills and strategy, he's on track to push into the 700s next time.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B0F19]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl"
        ></div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37]">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            Taught by Lauren Jones | 28 Years Educator • 19 Years SAT Math Specialist
          </div>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            Precision SAT Math Prep.
            <br />
            <span className="whitespace-nowrap">Zero Wasted Time.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-300">
            <span className="font-bold text-white">
              Top SAT Math scores aren't about effort. They're about aim.
            </span>{" "}
            We find out—specifically, not vaguely—what is costing your student
            points, and focus strictly on that instead of on everything else.
            We build a targeted strategy to deliver a score that confirms their GPA.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-5 font-display text-base font-bold text-[#0B0F19] shadow-xl transition-transform hover:scale-[1.02] sm:text-lg"
              >
                <span aria-hidden="true">👉</span>
                BOOK A FREE 15-MIN DIAGNOSTIC CALL
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={SELF_STUDY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#D4AF37] px-7 py-5 font-display text-base font-bold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0B0F19] sm:text-lg"
              >
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                TAKE A FREE ONLINE DIAGNOSTIC TEST
              </a>
            </div>
            <p className="mt-1 max-w-xl text-sm italic text-slate-400">
              100% Free. We'll review your student's timeline, break down target goals, and map out a clear path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#111827]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#D4AF37]">
              Tailored, Adaptive Practice — No Wasted Time
            </span>
            <p className="mt-4 text-pretty text-lg text-slate-300">
              Prep is dynamically targeted to each student's strengths and weaknesses. They'll never waste time practicing concepts or questions they've already mastered—every path is custom-built for exactly what they need.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Target className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Strict 8-Student Cap</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Small groups ensure every student gets direct 1-on-1 interaction and coaching.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Zap className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Desmos Calculator Focus</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Master fast calculator shortcuts, pacing mechanics, and pattern recognition.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Video className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">100% Recorded</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Fits seamlessly around fall sports, jobs, and heavy school workloads.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <MonitorSmartphone className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Flexible Portal Access</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Includes full online portal access during your cohort, with option to extend for $25/mo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#0B0F19]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Choose Your Path</h2>
            <p className="mt-3 text-slate-400">Self-paced or live coaching—every option runs on the same adaptive, no-wasted-time engine.</p>
          </div>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            <article className="relative flex flex-col rounded-2xl border border-slate-800 bg-[#111827] p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-300">
                3 Months Access • Self-Paced
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">SAT Accelerator — Self-Paced</h3>
              <p className="mt-2 font-display text-4xl font-extrabold text-[#D4AF37]">$497</p>
              <p className="mt-4 text-sm text-slate-400"><span className="font-semibold text-white">Best for: </span>Self-motivated students wanting targeted prep on their own schedule.</p>
              <a href={SELF_STUDY_URL} target="_blank" rel="noopener noreferrer" className="mt-8 block w-full rounded-xl border-2 border-[#D4AF37] px-6 py-3.5 text-center font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0F19]">Start Self-Study</a>
            </article>

            <article className="relative flex flex-col rounded-2xl border-2 border-[#D4AF37] bg-[#111827] p-8 shadow-2xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold uppercase text-[#0B0F19]">Most Popular</span>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold uppercase text-[#0B0F19]">Launches Oct 13 • Dec 5 SAT</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">SAT Accelerator — December Cohort</h3>
              <p className="mt-2 font-display text-4xl font-extrabold text-[#D4AF37]">$1,397</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-300"><Clock className="h-4 w-4 text-[#D4AF37]" /> Tu / Th @ 6:00–7:00 PM EST (8 Wks)</p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-8 block w-full rounded-xl bg-[#D4AF37] px-6 py-4 text-center font-bold text-[#0B0F19]">Claim a Live Cohort Seat</a>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-slate-800 bg-[#111827] p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase text-emerald-400">Live Group • In Progress</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">SAT Accelerator — November Cohort</h3>
              <p className="mt-2 font-display text-4xl font-extrabold text-[#D4AF37]">$1,397</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-300"><Clock className="h-4 w-4 text-[#D4AF37]" /> Tu / Th @ 7:00–8:00 PM EST (8 Wks)</p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-8 block w-full rounded-xl border-2 border-[#D4AF37] px-6 py-3.5 text-center font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0F19]">Check Seat Availability</a>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111827]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <div className="rounded-3xl border-2 border-[#D4AF37]/60 bg-[#0B0F19] p-10 sm:p-14">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Unsure which test date or strategy fits your child's timeline?</h2>
            <p className="mt-4 text-slate-300">Let's diagnose your student's score bottlenecks together.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-[#0B0F19]">👉 Schedule Your Free Diagnostic Call</a>
          </div>
        </div>
      </section>
    </main>
  );
}
