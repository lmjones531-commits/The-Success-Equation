"use client"

import { useState } from "react"
import { Check, Star, ArrowRight, BookOpen, Video, Calendar, ShieldCheck } from "lucide-react"

export function LandingPage() {
  const [email, setEmail] = useState("")
  const [parentName, setParentName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking-section")
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#030b1e] text-slate-100 font-sans selection:bg-[#d1a745] selection:text-[#030b1e]">
      
      {/* URGENCY BANNER */}
      <div className="bg-[#d1a745] text-[#030b1e] px-4 py-2.5 text-center font-bold text-sm sm:text-base shadow-md">
        🚨 DIGITAL SAT COHORTS OPEN — Capped strictly at 8 students max for direct personal coaching.
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#d1a745] text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 border border-[#d1a745]/30">
          Taught by Lauren Jones | 28-Year Educator • 19-Year SAT Specialist
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          The New Adaptive SAT Has a Hidden Rule Keeping Your Score Down.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Stop using &quot;Old School Math.&quot; Learn the high-value strategies that actually move the needle and turn hard work into a 700+ score.
        </p>

        {/* Media Placement */}
        <div className="max-w-3xl mx-auto mb-10 aspect-video rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl relative overflow-hidden group">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#d1a745] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
              <Video className="w-8 h-8 text-[#030b1e] fill-current ml-1" />
            </div>
            <p className="text-slate-400 text-sm font-medium">
              [ Media Placement: Insert 2-3 Minute VSL Video or Professional Headshot Here ]
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div>
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-xl bg-[#d1a745] text-[#030b1e] hover:bg-[#e2b856] shadow-xl hover:shadow-[#d1a745]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Book Your FREE Score Strategy Call
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-slate-400 mt-3">
            100% Free • 15 Minutes • We&apos;ll analyze your student&apos;s timeline and score goals together.
          </p>
        </div>
      </section>

      {/* 2. THE REALITY CHECK */}
      <section className="bg-slate-900/80 border-y border-slate-800 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Is Your Teen Hitting a Score Ceiling?
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Your teen is working hard, but the new digital adaptive test feels like a moving target. It isn&apos;t their fault. Traditional high school math classes don&apos;t teach the specific strategies needed to beat this test. If you don&apos;t pivot how you prep for the SAT, you risk missing out on major academic scholarships.
          </p>
        </div>
      </section>

      {/* 3. COURSE OPTIONS (3 Columns) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            3 Course Options for Your Student
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Choose the path that best fits your student&apos;s schedule, learning style, and score goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Option 1 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#d1a745]/50 transition-colors">
            <div>
              <div className="inline-block px-3 py-1 bg-[#d1a745]/10 text-[#d1a745] rounded-md text-xs font-semibold mb-4">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Accelerator Cohort</h3>
              <p className="text-slate-400 text-sm mb-6">
                High-energy, interactive live sessions capped strictly at 8 students for guided mastery.
              </p>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> Live Zoom Coaching & Strategy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> Complete Desmos Bypass Secrets</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> All Class Session Recordings</li>
              </ul>
            </div>
            <button onClick={scrollToBooking} className="w-full py-3 rounded-lg border border-[#d1a745] text-[#d1a745] hover:bg-[#d1a745] hover:text-[#030b1e] font-semibold text-sm transition-colors cursor-pointer">
              Reserve Live Spot
            </button>
          </div>

          {/* Option 2 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#d1a745]/50 transition-colors">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-xs font-semibold mb-4">
                Self-Paced
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Self-Paced Accelerator</h3>
              <p className="text-slate-400 text-sm mb-6">
                Full access to our proven adaptive curriculum and video breakdown library online.
              </p>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> Step-by-Step Video Modules</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> MentoMind Adaptive Practice</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> Study On Your Own Timeline</li>
              </ul>
            </div>
            <a href="#downsell-form" className="w-full py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 font-semibold text-sm transition-colors text-center block">
              Explore Self-Paced Access
            </a>
          </div>

          {/* Option 3 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#d1a745]/50 transition-colors">
            <div>
              <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-xs font-semibold mb-4">
                1-on-1 Strategy
              </div>
              <h3 className="text-xl font-bold text-white mb-2">15-Min Score Audit</h3>
              <p className="text-slate-400 text-sm mb-6">
                A 1-on-1 consultation directly with Lauren Jones to identify your student&apos;s score ceiling.
              </p>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> Personalized Diagnostic Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> Custom Spring Testing Timeline</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#d1a745]" /> Zero High-Pressure Pitch</li>
              </ul>
            </div>
            <button onClick={scrollToBooking} className="w-full py-3 rounded-lg bg-[#d1a745] text-[#030b1e] hover:bg-[#e2b856] font-bold text-sm transition-colors cursor-pointer">
              Book Free Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS & SOCIAL PROOF */}
      <section className="bg-slate-900/50 py-20 px-6 border-y border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            The Results Speak for Themselves
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative">
              <div className="flex text-[#d1a745] gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-300 text-base italic leading-relaxed mb-6">
                &quot;My son was stuck at 590 for months. After the Accelerator, he hit 710 in two months and qualified for a major state scholarship. Best money we&apos;ve ever spent.&quot;
              </blockquote>
              <p className="text-white font-bold text-sm">
                Jennifer M. <span className="text-slate-400 font-normal">— Parent of a 710 Scorer</span>
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative">
              <div className="flex text-[#d1a745] gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-300 text-base italic leading-relaxed mb-6">
                &quot;The Desmos shortcuts changed everything for my daughter. She went from running out of time on Module 2 to finishing with 5 minutes to spare.&quot;
              </blockquote>
              <p className="text-white font-bold text-sm">
                Marcus T. <span className="text-slate-400 font-normal">— Parent of a 680 Scorer</span>
              </p>
            </div>
          </div>

          <button
            onClick={scrollToBooking}
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#d1a745] text-[#030b1e] hover:bg-[#e2b856] transition-colors shadow-lg cursor-pointer"
          >
            Book Your FREE Score Strategy Call
          </button>
        </div>
      </section>

      {/* 5. BOOKING & STRATEGY SECTION */}
      <section id="booking-section" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Choose Your Path to a 700+
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          {/* Left Column: Programs */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
              The Accelerator Options
            </h3>

            <div className="space-y-3">
              <h4 className="text-lg font-bold text-[#d1a745]">Live Accelerator Cohorts</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Join our high-energy, 8-student live sessions for interactive, guided mastery.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800/60">
              <h4 className="text-lg font-bold text-white">Self-Paced Accelerator</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Prefer to work independently? Get full access to our proven curriculum online.
              </p>
              <a
                href="#downsell-form"
                className="inline-flex items-center gap-2 text-sm text-[#d1a745] font-semibold hover:underline"
              >
                Join the Self-Paced Course -&gt; Links to MentoMind
              </a>
            </div>
          </div>

          {/* Right Column: Calendly Embed Area */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">The Strategy Call</h3>
              <h4 className="text-sm font-semibold text-[#d1a745] mb-3">Let&apos;s Build Your Action Plan</h4>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Get your personalized score analysis and timeline. We&apos;ll chat, find the gaps, and map out exactly how to get your kid where they need to be.
              </p>
            </div>

            <div className="bg-slate-900 border border-dashed border-slate-700 rounded-xl p-8 text-center my-4">
              <Calendar className="w-10 h-10 text-[#d1a745] mx-auto mb-3" />
              <p className="text-slate-300 font-semibold text-sm mb-1">[ Insert Calendly Embed / Intake Booking Link Here ]</p>
            </div>

            <p className="text-xs text-slate-500 text-center">
              🔒 100% Confidential • 15 Minutes • Direct with Lauren Jones
            </p>
          </div>
        </div>
      </section>

      {/* 6. DOWNSELL / LEAD MAGNET SECTION */}
      <section id="downsell-form" className="bg-slate-900/90 border-t border-slate-800 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Not ready to book a call yet?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12">
            {/* Book Cover Placeholder */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center aspect-[4/5] shadow-inner">
              <BookOpen className="w-16 h-16 text-[#d1a745] mb-4" />
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">[ 8-Week SAT Math Roadmap Cover ]</p>
              <h4 className="text-lg font-bold text-white">8-Week SAT Math Roadmap</h4>
            </div>

            {/* Form */}
            <div>
              <p className="text-slate-200 text-base mb-6 leading-relaxed">
                No problem. Start the process on your own today. Download the Free 8-Week Roadmap and get the exact schedule we use to help students reach 650+.
              </p>

              {submitted ? (
                <div className="bg-emerald-950/50 border border-emerald-500/50 text-emerald-200 p-6 rounded-xl text-center">
                  <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <p className="font-bold mb-1">Check your inbox!</p>
                  <p className="text-xs text-slate-300">
                    Your 8-Week Roadmap is on its way to <span className="text-white font-semibold">{email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadMagnetSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Parent First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your first name"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d1a745]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Parent Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your best email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d1a745]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#d1a745] hover:bg-[#e2b856] text-[#030b1e] font-bold rounded-xl transition-colors shadow-lg cursor-pointer"
                  >
                    Download Free 8-Week Roadmap
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center text-xs text-slate-500 border-t border-slate-800">
        <p className="mb-2">The Success Equation • Founded by Lauren Jones (28 Yrs Educator / 19 Yrs SAT Specialist)</p>
        <p>the-success-equation.com</p>
      </footer>
    </div>
  )
}
