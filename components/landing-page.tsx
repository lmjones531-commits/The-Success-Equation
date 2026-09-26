import { createFileRoute } from "@tanstack/react-router";
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
import scoreAmy from "../assets/score-amy.png.asset.json";
import scoreChampion from "../assets/score-champion.png.asset.json";
import scoreTrailblazer from "../assets/score-trailblazer.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SAT Math Accelerator | Lauren Jones — 19-Year SAT Math Specialist",
      },
      {
        name: "description",
        content:
          "Small-group Digital SAT Math prep with adaptive practice, Desmos calculator shortcuts, and speed strategies. Taught by Lauren Jones, 28-year educator.",
      },
      {
        property: "og:title",
        content: "SAT Math Accelerator | Lauren Jones",
      },
      {
        property: "og:description",
        content:
          "Small-group, high-yield Digital SAT prep focused on Desmos shortcuts, pattern recognition, and test speed strategies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CALENDLY_URL =
  "https://calendly.com/lauren-the-success-equation/sat-accelerator-enrollment-strategy-session";

const SELF_STUDY_URL = "https://thesuccessequation.mentomind.com/welcome";

const RESULTS = [
  {
    label: "Focused",
    name: "Amy",
    title: "+170 Points in 4 Sessions",
    img: scoreAmy.url,
    alt: "Amy's College Board score report: 1310 total, Math 720, Reading and Writing 590, improved 170 points",
    body: "After just four focused sessions, Amy raised her SAT Math score by 170 points—proof that the right strategies and targeted practice can deliver fast results. Consistent effort, even over a short time, can make a big impact.",
  },
  {
    label: "Champion",
    name: null,
    title: "780 Math — No Honors Class Needed",
    img: scoreChampion.url,
    alt: "College Board score report: 1460 total, Math 780, Reading and Writing 680, improved 180 points",
    body: "Never had an honors math class, but still scored near perfect! This isn't about being a math genius—it's about learning to beat the test. Anyone can hit a high score if you know how to play the game.",
  },
  {
    label: "Trailblazer",
    name: "James",
    title: "650 Math as a 10th Grader",
    img: scoreTrailblazer.url,
    alt: "James's College Board score report: 1420 total, Math 650, Reading and Writing 770",
    body: "By starting SAT prep in 10th grade, James scored a 650 in math—already well above the national average of around 520. With another year to strengthen skills and strategy, he's on track to push into the 700s next time.",
  },
];

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-forest/10 blur-3xl"
        ></div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            Taught by Lauren Jones | 28 Years Educator • 19 Years SAT Math
            Specialist
          </div>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
            Precision SAT Math Prep.
            <br />
            <span className="whitespace-nowrap">Zero Wasted Time.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-cream/70">
            <span className="font-bold text-cream">
              Top SAT Math scores aren't about effort. They're about aim.
            </span>{" "}
            We find out—specifically, not vaguely—what is costing your student
            points, and focus strictly on that instead of on everything else.
            We build a targeted strategy to deliver a score that confirms their
            GPA.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gold-vivid px-7 py-5 font-display text-base font-bold text-ink shadow-xl shadow-gold-vivid/20 transition-transform hover:scale-[1.02] sm:text-lg"
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
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-gold px-7 py-5 font-display text-base font-bold text-gold transition-colors hover:bg-gold hover:text-ink sm:text-lg"
              >
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                TAKE A FREE ONLINE DIAGNOSTIC TEST
              </a>
            </div>
            <p className="mt-1 max-w-xl text-sm italic text-off-white">
              100% Free. We'll review your student's timeline, break down
              target goals, and map out a clear path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-forest/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-forest">
              Tailored, Adaptive Practice — No Wasted Time
            </span>
            <p className="mt-4 text-pretty text-lg text-navy/70">
              Prep is dynamically targeted to each student's strengths and
              weaknesses. They'll never waste time practicing concepts or
              questions they've already mastered—every path is custom-built for
              exactly what they need.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                <Target className="h-6 w-6 text-forest" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy">
                Strict 8-Student Cap
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                Small groups ensure every student gets direct 1-on-1 interaction
                and coaching.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                <Zap className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy">
                Desmos Calculator Focus
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                Master fast calculator shortcuts, pacing mechanics, and pattern
                recognition.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                <Video className="h-6 w-6 text-burgundy" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy">
                100% Recorded
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                Fits seamlessly around fall sports, jobs, and heavy school
                workloads.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                <MonitorSmartphone
                  className="h-6 w-6 text-forest"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-navy">
                Flexible Portal Access
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                Includes full online portal access during your cohort, with the
                option to extend for just $25/month after the course ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-ink-2">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-cream sm:text-4xl">
              Choose Your Path
            </h2>
            <p className="mt-3 text-cream/60">
              Self-paced or live coaching—every option runs on the same
              adaptive, no-wasted-time engine.
            </p>
          </div>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            <article className="relative flex flex-col rounded-2xl border border-white/10 bg-navy p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream/80">
                3 Months Full Access • Self-Paced
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-cream">
                SAT Accelerator — Self-Paced
              </h3>
              <p className="mt-2 font-display text-4xl font-extrabold text-gold">
                $497
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/60">
                <span className="font-semibold text-cream/80">Best for: </span>
                Self-motivated students wanting targeted, high-efficiency prep
                on their own schedule.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/70">
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    Full portal access: 11 full-length practice tests, timed
                    drills &amp; adaptive practice.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    On-demand video lessons + an AI Bot that answers any
                    question on the spot.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    Adaptive, personalized problem sets — zero time wasted on
                    concepts already mastered.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    3 full months of portal access (extend for $25/month after).
                  </span>
                </li>
              </ul>
              <a
                href={SELF_STUDY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-xl border-2 border-gold px-6 py-3.5 text-center font-display font-bold text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Start Self-Study
              </a>
            </article>

            <article className="relative flex flex-col rounded-2xl border-2 border-gold bg-navy p-8 shadow-2xl shadow-gold/10 lg:-my-2">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-vivid px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-lg">
                Most Popular
              </span>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-vivid px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                Launches Oct 13 • Targeting Dec 5 SAT
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-cream">
                SAT Accelerator — December Cohort
              </h3>
              <p className="mt-2 font-display text-4xl font-extrabold text-gold">
                $1,397
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-cream/70">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                Tu / Th @ 6:00–7:00 PM EST
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-cream/70">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                8 weeks long
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/60">
                <span className="font-semibold text-cream/80">Best for: </span>
                Students who want direct coaching, accountability, and live
                instructor feedback.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/70">
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    16 hours of live, interactive instruction —{" "}
                    <span className="font-bold text-gold">
                      capped at 8 students max.
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    Full portal access: 11 full-length practice tests, timed
                    drills &amp; adaptive practice.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    On-demand video lessons + an AI Bot that answers any
                    question on the spot.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    All sessions recorded + full portal access included.
                  </span>
                </li>
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-xl bg-gold-vivid px-6 py-4 text-center font-display text-base font-bold text-ink shadow-lg shadow-gold-vivid/20 transition-transform hover:scale-[1.02]"
              >
                Claim a Live Cohort Seat
              </a>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-white/10 bg-navy p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-forest/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-forest">
                <span
                  className="h-2 w-2 animate-pulse rounded-full bg-forest"
                  aria-hidden="true"
                ></span>
                Live Group • In Progress
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-cream">
                SAT Accelerator — November Cohort
              </h3>
              <p className="mt-2 font-display text-4xl font-extrabold text-gold">
                $1,397
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-cream/70">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                Tu / Th @ 7:00–8:00 PM EST
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-cream/70">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                8 weeks long
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/60">
                <span className="font-semibold text-cream/80">Best for: </span>
                Active live group currently in progress—join if seats remain.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/70">
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    16 hours of live, instructor-led group instruction with
                    real-time feedback.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    Full portal access: 11 full-length practice tests, timed
                    drills &amp; adaptive practice.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    On-demand video lessons + an AI Bot that answers any
                    question on the spot.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <span>
                    All sessions recorded + full portal access included.
                  </span>
                </li>
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-xl border-2 border-gold px-6 py-3.5 text-center font-display font-bold text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Check Seat Availability
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <div className="rounded-3xl border-2 border-gold/60 bg-navy p-10 text-center sm:p-14">
            <h2 className="text-balance font-display text-2xl font-extrabold text-cream sm:text-3xl">
              Unsure which test date or strategy fits your child's timeline?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cream/70">
              Let's diagnose your student's score bottlenecks together.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-vivid px-8 py-4 font-display text-lg font-bold text-ink shadow-xl shadow-gold-vivid/20 transition-transform hover:scale-[1.02]"
            >
              <span aria-hidden="true">👉</span>
              Schedule Your Free Diagnostic Call
            </a>
          </div>
        </div>
      </section>

      {/* Student Results */}
      <section className="bg-ink-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-gold">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
              Real Students. Real Score Reports.
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-cream sm:text-4xl">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {RESULTS.map((r) => (
              <article
                key={r.label}
                className="flex flex-col rounded-2xl border border-white/10 bg-navy p-7"
              >
                <img
                  src={r.img}
                  alt={r.alt}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gold">
                  {r.label}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-cream">
                  {r.name ? `${r.name}: ` : ""}
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-cream/40">
            Actual College Board score reports from SAT Accelerator students.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-ink-2">
        <div className="mx-auto max-w-5xl px-4 pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy to-ink p-10 sm:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
            ></div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Coming Soon
              </span>
              <h2 className="mt-4 text-balance font-display text-2xl font-extrabold text-cream sm:text-3xl">
                Free SAT Math Guides &amp; Video Breakdown Series
              </h2>
              <p className="mt-3 max-w-2xl text-cream/60">
                We are expanding our free library with Desmos walkthroughs,
                practice cheat sheets, and parent strategy guides.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <CirclePlay
                    className="h-6 w-6 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-cream/80">
                    Desmos video walkthroughs
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <FileText
                    className="h-6 w-6 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-cream/80">
                    Practice cheat sheets &amp; guides
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
