import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Marketing Website Design",
    description:
      "Readable, fast, and responsive pages built to present a business, a portfolio, or a service offer clearly.",
    deliverables: ["Landing page", "Clear messaging", "Mobile responsive"],
    color: "from-violet-500/20 to-pink-500/20",
    border: "border-violet-500/30",
  },
  {
    title: "Web Application Development",
    description:
      "Modern interfaces paired with a maintainable back end to turn an idea into a usable product.",
    deliverables: ["React front end", "Node.js API", "Clear architecture"],
    color: "from-sky-500/20 to-cyan-500/20",
    border: "border-sky-500/30",
  },
  {
    title: "Product Improvement",
    description:
      "Screen redesigns, journey improvements, and technical cleanup on existing products without starting from scratch.",
    deliverables: ["Targeted audit", "UI refresh", "Performance tuning"],
    color: "from-emerald-500/20 to-lime-500/20",
    border: "border-emerald-500/30",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Scoping",
    description: "We clarify the need, the useful scope, and the business priority before building anything.",
  },
  {
    step: "02",
    title: "Build",
    description: "We deliver a clean, readable foundation that is directly usable without adding complexity for show.",
  },
  {
    step: "03",
    title: "Iterate",
    description: "We refine the interface and functional details from a concrete result, not from an abstract spec.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-56 right-[-120px] h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to team
          </Link>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Services</span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              What the team can deliver
            </p>
            <h1 className="mb-6 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
              Simple, clean web services that are directly useful.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              This page stays intentionally compact. The goal is to show clearly what kind of work
              the team can take on without turning the site into a generic agency landing page.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="mb-2 text-sm text-gray-500">Approach</p>
            <p className="text-2xl font-bold text-white">Useful design, maintainable code, fast delivery.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-4">
                <p className="text-2xl font-black text-white">3</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Offers</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-4">
                <p className="text-2xl font-black text-white">1</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Team</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-4">
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Responsive</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`rounded-3xl border bg-gradient-to-br ${service.color} ${service.border} p-8`}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-300">Offer</p>
              <h2 className="mb-4 text-2xl font-bold text-white">{service.title}</h2>
              <p className="mb-6 leading-relaxed text-gray-300">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mb-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Method
              </p>
              <h2 className="text-3xl font-black text-white md:text-4xl">A simple three-step workflow.</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-gray-400">
              The point is to avoid empty presentation. We start from the real need, build quickly,
              and then improve what matters.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {PROCESS.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="mb-4 text-sm font-black text-violet-300">{item.step}</p>
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/8 to-white/4 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-pink-300">
                Next step
              </p>
              <h2 className="text-3xl font-black text-white">View a member&apos;s detailed profile.</h2>
              <p className="mt-3 max-w-2xl text-gray-400">
                The service page shows the scope. The portfolio pages show the person behind the work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/birante"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-gray-950 transition-transform duration-200 hover:scale-[1.02]"
              >
                View Birante
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:border-white/30"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
