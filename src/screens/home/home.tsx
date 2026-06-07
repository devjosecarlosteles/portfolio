import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiTerminal } from "react-icons/fi";
import profile from "../../data/profile.json";

type SocialKind = "linkedin" | "github" | "youtube";

const socialIcons: Record<SocialKind, JSX.Element> = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  youtube: <FaYoutube />,
};

function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-zinc-100 antialiased">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_70%_15%,rgba(132,204,22,0.12),transparent_28%),linear-gradient(135deg,#0b0d10_0%,#15181d_52%,#24272d_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#0b0d10] to-transparent" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <span className="grid h-9 w-9 place-items-center rounded border border-white/15 bg-white/[0.04] text-cyan-300">
              <FiTerminal />
            </span>
            devjosecarlosteles
          </a>
          <div className="flex items-center gap-2">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="grid h-10 w-10 place-items-center rounded border border-white/10 bg-white/[0.03] text-lg text-zinc-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                {socialIcons[link.kind as SocialKind]}
              </a>
            ))}
          </div>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-20 lg:pt-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
              <FiMapPin className="text-cyan-300" />
              {profile.person.location}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {profile.person.name}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300">
              {profile.person.headline}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
              {profile.person.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={profile.contact.primaryUrl} className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded bg-cyan-900 px-5 text-sm font-bold text-zinc-950 transition hover:bg-cyan-700">
                <FiMail />
                {profile.contact.primaryLabel}
              </a>
              <a href={profile.content.url} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded border border-white/15 px-5 text-sm font-semibold text-zinc-100 transition hover:border-lime-300/60 hover:text-lime-200">
                <FaYoutube />
                {profile.content.cta}
              </a>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30">
              <div className="flex items-start gap-5">
                <img src={profile.person.avatar} alt={profile.person.name} className="h-24 w-24 rounded border border-white/15 object-cover" />
                <div>
                  <span className="text-sm text-zinc-500">Perfil</span>
                  <p className="mt-2 text-lg font-semibold text-white">{profile.person.availability}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {profile.metrics.map((metric) => (
                  <div key={metric.label} className="rounded border border-white/10 bg-zinc-950/50 p-4">
                    <strong className="block text-2xl text-white">{metric.value}</strong>
                    <span className="mt-1 block text-sm text-zinc-500">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionTitle eyebrow="Foco" title="Backend, produto e ensino com a mesma exigencia tecnica." />
          <div className="grid gap-3 sm:grid-cols-2">
            {profile.focus.map((item) => (
              <div key={item} className="rounded border border-white/10 bg-zinc-900/45 p-5 text-zinc-300">
                <FaArrowRight className="mb-5 text-lime-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <SectionTitle eyebrow="Tecnologias" title="Stack enxuta para construir, operar e evoluir software." />
          <div className="grid gap-5">
            {Object.entries(profile.technologies).map(([group, techs]) => (
              <div key={group} className="rounded border border-white/10 p-5">
                <h3 className="mb-4 text-sm font-semibold uppercase text-zinc-500">{formatGroupName(group)}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech} className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="mb-9">
          <SectionTitle eyebrow="Experiencia" title="Historico conectado por entrega, mentoria e produto." />
        </div>
        <div className="grid gap-4">
          {profile.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-6 rounded border border-white/10 bg-zinc-900/45 p-5 sm:p-6 lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <span className="text-sm text-cyan-300">{item.period}</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
                <p className="mt-1 text-zinc-400">{item.role}</p>
                <span className="mt-4 inline-block rounded border border-white/10 px-3 py-1 text-sm text-zinc-400">{item.type}</span>
              </div>
              <div>
                <p className="text-base leading-7 text-zinc-300">{item.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-zinc-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded bg-zinc-950 px-2.5 py-1.5 text-xs text-zinc-400">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111418]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle eyebrow="Projetos" title="Cases e canais que mostram o trabalho em pratica." />
            <a href="https://github.com/devjosecarlosteles" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
              Ver GitHub
              <FaExternalLinkAlt />
            </a>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {profile.projects.map((project) => (
              <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className={`group rounded border p-5 transition hover:-translate-y-1 ${project.featured ? "border-cyan-300/25 bg-cyan-300/[0.06]" : "border-white/10 bg-white/[0.03]"}`}>
                <span className="text-sm text-lime-300">{project.label}</span>
                <h3 className="mt-4 flex items-start justify-between gap-4 text-2xl font-semibold text-white">
                  {project.name}
                  <FaExternalLinkAlt className="mt-1 text-base text-zinc-500 transition group-hover:text-cyan-200" />
                </h3>
                <p className="mt-4 min-h-[112px] text-sm leading-6 text-zinc-400">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded bg-zinc-950/80 px-2.5 py-1.5 text-xs text-zinc-400">{item}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="rounded border border-red-400/20 bg-red-400/[0.06] p-6">
          <FaYoutube className="text-4xl text-red-300" />
          <h2 className="mt-5 text-3xl font-semibold text-white">{profile.content.title}</h2>
          <p className="mt-4 leading-7 text-zinc-300">{profile.content.description}</p>
          <a href={profile.content.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 rounded bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-500">
            {profile.content.cta}
            <FaExternalLinkAlt />
          </a>
        </div>

        <div className="rounded border border-white/10 bg-zinc-900/45 p-6">
          <span className="text-sm font-semibold uppercase text-cyan-300">Contato</span>
          <h2 className="mt-4 text-4xl font-semibold text-white">{profile.contact.title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-300">{profile.contact.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={profile.contact.primaryUrl} className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded bg-lime-500 px-5 text-sm font-bold text-zinc-950 transition hover:bg-lime-200">
              <FiMail />
              {profile.contact.primaryLabel}
            </a>
            <a href={profile.contact.secondaryUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded border border-white/15 px-5 text-sm font-semibold text-zinc-100 transition hover:border-cyan-300/60 hover:text-cyan-200">
              <FaLinkedin />
              {profile.contact.secondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        {profile.person.name} - backend, mentoria e conteudo dev.
      </footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-sm font-semibold uppercase text-cyan-300">{eyebrow}</span>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

function formatGroupName(group: string) {
  return group.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

export default Home;
