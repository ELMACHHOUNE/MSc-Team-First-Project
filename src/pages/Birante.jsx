import { Link } from "react-router-dom";

const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/24479155?v=4";

const skills = [
  { name: "JavaScript", icon: "⚡", color: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30" },
  { name: "TypeScript", icon: "🔷", color: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
  { name: "Angular", icon: "🅰️", color: "bg-red-500/20 text-red-300 border-red-400/30" },
  { name: "Vue.js", icon: "💚", color: "bg-green-500/20 text-green-300 border-green-400/30" },
  { name: "Nuxt.js", icon: "🟢", color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30" },
  { name: "Node.js", icon: "🌿", color: "bg-lime-500/20 text-lime-300 border-lime-400/30" },
  { name: "Express.js", icon: "🚂", color: "bg-gray-500/20 text-gray-300 border-gray-400/30" },
  { name: "Ruby on Rails", icon: "💎", color: "bg-rose-500/20 text-rose-300 border-rose-400/30" },
  { name: "PHP / CakePHP", icon: "🐘", color: "bg-purple-500/20 text-purple-300 border-purple-400/30" },
  { name: "GraphQL", icon: "🔗", color: "bg-pink-500/20 text-pink-300 border-pink-400/30" },
  { name: "HTML / CSS", icon: "🌐", color: "bg-orange-500/20 text-orange-300 border-orange-400/30" },
  { name: "PostgreSQL", icon: "🗄️", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30" },
];

const projects = [
  {
    name: "Blog Angular App",
    description: "Application de type blog construite avec Angular & TypeScript. Projet OpenClassrooms avec gestion complète des articles, authentification et interface moderne.",
    tech: ["TypeScript", "Angular"],
    stars: 1,
    forks: 2,
    url: "https://github.com/birante/application-de-type-blog-angular",
    color: "from-red-500/20 to-pink-500/20",
    border: "border-red-500/30",
  },
  {
    name: "Starter Node.js",
    description: "Template full-stack prêt à l'emploi combinant Node.js, Express, Vue.js et Nuxt.js pour démarrer rapidement des projets web modernes.",
    tech: ["Vue.js", "Node.js", "Express.js", "Nuxt.js"],
    stars: 0,
    forks: 0,
    url: "https://github.com/birante/starternodejs",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
  },
  {
    name: "GMC",
    description: "Projet web HTML/CSS développé et mis à jour en 2025. Interface web responsive et moderne.",
    tech: ["HTML", "CSS"],
    stars: 0,
    forks: 0,
    url: "https://github.com/birante/gmc",
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
  },
  {
    name: "Site DClic",
    description: "Site web complet réalisé en HTML/CSS — mise en page professionnelle, navigation fluide et design soigné.",
    tech: ["HTML", "CSS"],
    stars: 0,
    forks: 0,
    url: "https://github.com/birante/sitedclic",
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-500/30",
  },
  {
    name: "Personal Budget Tracker",
    description: "Application de gestion de budget personnel permettant de suivre recettes et dépenses de manière intuitive.",
    tech: ["JavaScript"],
    stars: 0,
    forks: 0,
    url: "https://github.com/birante/personal-budget-tracker-1723375691",
    color: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/30",
  },
];

const achievements = [
  { label: "Pair Extraordinaire", icon: "🤝" },
  { label: "Pull Shark ×3", icon: "🦈" },
  { label: "Quickdraw", icon: "⚡" },
  { label: "YOLO", icon: "🎲" },
  { label: "Arctic Code Vault", icon: "🧊" },
];

const stats = [
  { value: "41", label: "Repositories" },
  { value: "61", label: "Followers" },
  { value: "1059+", label: "Contributions / an" },
  { value: "5+", label: "Ans d'expérience" },
];

export default function Birante() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased">
      {/* NavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Équipe
          </Link>
          <span className="font-bold text-white text-lg tracking-tight">
            <span className="text-violet-400">B</span>irante<span className="text-violet-400">.</span>
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#skills" className="hover:text-white transition-colors">Compétences</a>
            <a href="#projects" className="hover:text-white transition-colors">Projets</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="https://github.com/birante"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full blur-md opacity-60 scale-110" />
            <img
              src={GITHUB_AVATAR}
              alt="Birante SY"
              className="relative w-32 h-32 rounded-full border-4 border-violet-500/50 shadow-2xl object-cover"
            />
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-gray-950" />
          </div>
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            Disponible pour de nouveaux projets
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            Birante{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">SY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            Software Developer · Full-Stack Web
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-10">
            <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>Dakar, Sénégal 🇸🇳</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              Me contacter
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-gray-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">À propos</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Développeur passionné{" "}
                <span className="text-gray-500">par le web</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Basé à <span className="text-white font-medium">Dakar, Sénégal</span>, je suis un développeur
                full-stack avec une solide expérience dans la création d'applications web modernes et performantes.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Titulaire d'une formation <span className="text-white font-medium">DWWM (Développeur Web et Web Mobile)</span>,
                je maîtrise aussi bien le front-end que le back-end, avec un fort intérêt pour TypeScript, Angular,
                Vue.js et Node.js.
              </p>
              <div className="mb-8">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">GitHub Achievements</p>
                <div className="flex flex-wrap gap-2">
                  {achievements.map((a) => (
                    <span key={a.label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                      <span>{a.icon}</span> {a.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/birante" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  github.com/birante
                </a>
                <a href="https://twitter.com/sybirante" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.731-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @sybirante
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-violet-500/50 transition-all duration-300">
                  <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 bg-gray-900/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">Technologies</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Mes <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Compétences</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className={`flex items-center gap-2.5 border rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default ${skill.color}`}>
                <span className="text-lg">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 bg-gray-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Projets <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Récents</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Une sélection de mes projets open-source disponibles sur GitHub.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-gradient-to-br ${project.color} border ${project.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/10 rounded-xl p-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-white/10 text-gray-300 text-xs px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8M8 17h4" />
                    </svg>
                    {project.forks} forks
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/birante?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-violet-500/50 text-gray-400 hover:text-white px-6 py-3 rounded-full transition-all duration-200 text-sm"
            >
              Voir tous les repos (41)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-gray-900/50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Travaillons{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">ensemble</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Vous avez un projet en tête ? N'hésitez pas à me contacter via GitHub ou Twitter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://github.com/birante" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 text-white px-8 py-4 rounded-2xl transition-all duration-200 min-w-60 justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <div className="text-left">
                <div className="font-semibold">GitHub</div>
                <div className="text-xs text-gray-400">github.com/birante</div>
              </div>
            </a>
            <a href="https://twitter.com/sybirante" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 text-white px-8 py-4 rounded-2xl transition-all duration-200 min-w-60 justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.731-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <div className="text-left">
                <div className="font-semibold">X / Twitter</div>
                <div className="text-xs text-gray-400">@sybirante</div>
              </div>
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Dakar, Sénégal 🇸🇳 · UTC+0
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <span>© 2026 Birante SY. Portfolio.</span>
          <Link to="/" className="flex items-center gap-1.5 hover:text-gray-400 transition-colors">
            ← Retour à l'équipe
          </Link>
        </div>
      </footer>
    </div>
  );
}
