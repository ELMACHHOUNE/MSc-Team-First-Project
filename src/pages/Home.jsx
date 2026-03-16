import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const TEAM_MEMBERS = [
  {
    name: "Birante SY",
    role: "Software Developer · Full-Stack",
    location: "Dakar, Sénégal 🇸🇳",
    avatar: "https://avatars.githubusercontent.com/u/24479155?v=4",
    github: "https://github.com/birante",
    route: "/birante",
    skills: ["TypeScript", "Angular", "Vue.js", "Node.js"],
    color: "from-violet-500/20 to-pink-500/20",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    badge: "bg-violet-500/10 border-violet-500/30 text-violet-300",
    available: true,
  },
  // ➕ Ajoutez les autres membres ici en copiant ce bloc :
  // {
  //   name: "Prénom NOM",
  //   role: "Rôle / spécialité",
  //   location: "Ville, Pays",
  //   avatar: "https://avatars.githubusercontent.com/u/XXXXX?v=4",
  //   github: "https://github.com/username",
  //   route: "/prenom",
  //   skills: ["Tech1", "Tech2"],
  //   color: "from-blue-500/20 to-cyan-500/20",
  //   border: "border-blue-500/30",
  //   accent: "text-blue-400",
  //   badge: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  //   available: true,
  // },
];

const SERVICES_OVERVIEW = [
  {
    title: "Applications Web",
    description: "Interfaces React, Angular ou Vue orientées produit, performance et responsive design.",
  },
  {
    title: "APIs & Intégrations",
    description: "Back-end Node.js, connexions de services tiers et flux de données simples à maintenir.",
  },
  {
    title: "Portfolio & Vitrine",
    description: "Pages claires pour présenter une activité, un profil ou un service sans complexité inutile.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 -right-60 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">MSc Team — C2</p>
              <p className="text-gray-500 text-xs">GOMYCODE · 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/services"
              className="text-sm text-white bg-white/5 border border-white/10 hover:border-violet-400/40 px-4 py-2 rounded-full transition-all duration-200"
            >
              Services
            </Link>
            <a
              href="https://github.com/ELMACHHOUNE/MSc-Team-First-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Repo du projet
            </a>
          </div>
        </div>
      </header>

      {/* Hero text */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-sm px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {TEAM_MEMBERS.length} membre{TEAM_MEMBERS.length > 1 ? "s" : ""} · GOMYCODE MSc 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Notre{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Équipe
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Découvrez les portfolios des membres de notre équipe MSc — des développeurs passionnés
            prêts à relever de nouveaux défis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform duration-200"
            >
              Voir nos services
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#team"
              className="inline-flex items-center gap-2 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 px-6 py-3 rounded-full transition-all duration-200"
            >
              Explorer l&apos;équipe
            </a>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-3 mb-16">
          {SERVICES_OVERVIEW.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-violet-300 mb-3">Service</p>
              <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
              <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
            </div>
          ))}
        </section>

        {/* Team cards */}
        <div
          id="team"
          className={`grid gap-8 ${TEAM_MEMBERS.length === 1 ? "max-w-lg mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}
        >
          {TEAM_MEMBERS.map((member) => (
            <Link
              key={member.name}
              to={member.route}
              className={`group block bg-gradient-to-br ${member.color} border ${member.border} rounded-3xl p-8 hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Avatar + availability */}
              <div className="flex items-start justify-between mb-6">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
                  />
                  {member.available && (
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-950"
                      title="Disponible"
                    />
                  )}
                </div>
                <div className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${member.badge}`}>
                  <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                  Portfolio
                </div>
              </div>

              {/* Info */}
              <h2 className="text-2xl font-black text-white mb-1 group-hover:text-white transition-colors">
                {member.name}
              </h2>
              <p className="text-gray-400 text-sm mb-2">{member.role}</p>
              <div className={`flex items-center gap-1.5 text-xs mb-5 ${member.accent}`}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {member.location}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((s) => (
                  <span key={s} className="bg-white/10 text-gray-300 text-xs px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white group-hover:underline underline-offset-4">
                  Voir le portfolio →
                </span>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-500 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </Link>
          ))}
        </div>

        {/* Add member hint */}
        <div className="mt-10 border border-dashed border-white/10 rounded-3xl p-8 text-center text-gray-600">
          <p className="text-sm">
            👋 Tu es membre de l'équipe ? Ajoute ta carte dans{" "}
            <code className="text-gray-400">src/pages/Home.jsx</code>{" "}
            et crée ta page dans{" "}
            <code className="text-gray-400">src/pages/TonPrenom.jsx</code>
          </p>
        </div>
      </main>

      {/* Footer */}
    
      <Footer />
    </div>
  );
}
