import { TerminalHero } from "@/components/TerminalHero";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { projects } from "@/data/projects";
import { experience, skills } from "@/data/resume";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/constants";
import { Mail, Download } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section id="home" className="flex min-h-[calc(100vh-65px)] flex-col justify-center py-16">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Hi, I&apos;m Satvik{" "}
          <span className="inline-block">👋</span>
        </h1>
        <p className="mb-8 text-lg text-muted">
          I build integration-heavy tooling that lives close to a real domain.
        </p>
        <TerminalHero />
      </section>

      {/* About */}
      <section id="about" className="min-h-screen scroll-mt-16 border-t border-border py-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">About me</h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m a <strong className="text-foreground">Principal Software Engineer at Eli Lilly</strong>{" "}
            based in Bengaluru. I build software that has to survive messy inputs,
            systems that weren&apos;t designed to talk to each other, and constraints
            you only discover once you&apos;re inside the environment.
          </p>
          <p>
            Lately I&apos;m focused on{" "}
            <strong className="text-foreground">personal AI infrastructure</strong>:
            memory, agents, and the plumbing that makes AI tools actually usable day to day.
          </p>
        </div>

        {/* Values */}
        <ul className="mt-6 space-y-3">
          <li className="flex items-start gap-3 text-muted">
            <span className="mt-0.5 text-accent">→</span>
            <span><strong className="text-foreground">Integration over greenfield.</strong> Gluing real systems together under constraints.</span>
          </li>
          <li className="flex items-start gap-3 text-muted">
            <span className="mt-0.5 text-accent">→</span>
            <span><strong className="text-foreground">Proximity to the domain.</strong> Understanding the user&apos;s actual problem.</span>
          </li>
          <li className="flex items-start gap-3 text-muted">
            <span className="mt-0.5 text-accent">→</span>
            <span><strong className="text-foreground">Shipping.</strong> A working thing in someone&apos;s hands beats a perfect thing in a branch.</span>
          </li>
        </ul>

        {/* Tech */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 font-mono text-xs font-semibold text-accent uppercase">Languages</h3>
            <p className="text-sm text-muted">Python · TypeScript · Go</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 font-mono text-xs font-semibold text-accent uppercase">Cloud</h3>
            <p className="text-sm text-muted">AWS (Lambda, ECS, DynamoDB, S3)</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 font-mono text-xs font-semibold text-accent uppercase">Focus</h3>
            <p className="text-sm text-muted">AI Agents · MCP · Memory</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen scroll-mt-16 border-t border-border py-16">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mb-6 text-muted">
          Things I&apos;m building — mostly around AI agents, memory, and developer tools.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Blog — hidden for now, uncomment when ready */}
      {/* <section id="blog" className="min-h-screen scroll-mt-16 border-t border-border py-16">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Blog</h2>
        <p className="mb-6 text-muted">
          Thoughts on AI agents, MCP, integrations, and the unglamorous problems in between.
        </p>
        {posts.length === 0 ? (
          <div className="rounded-lg border border-border bg-surface p-8 text-center">
            <p className="text-muted">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                readingTime={post.readingTime}
                tags={post.tags}
              />
            ))}
          </div>
        )}
      </section> */}

      {/* Resume */}
      <section id="resume" className="min-h-screen scroll-mt-16 border-t border-border py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Resume</h2>
          <a
            href="/Satvik_Kaushal.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Download size={16} />
            PDF
          </a>
        </div>

        {/* Company Timeline */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex min-w-max items-start">
            {experience.map((exp, i) => (
              <div key={exp.company} className="flex items-start">
                {/* Node + label */}
                <div className="flex flex-col items-center px-4">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                  <div className="mt-2 text-center">
                    <p className="text-sm font-semibold text-foreground">{exp.company}</p>
                    <p className="mt-0.5 text-xs text-muted">{exp.period}</p>
                  </div>
                </div>
                {/* Connector line */}
                {i < experience.length - 1 && (
                  <div className="mt-1.5 h-px w-20 shrink-0" style={{ backgroundColor: "var(--border-color)" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={`${exp.company}-${exp.title}`} className="rounded-lg border border-border bg-surface p-6">
              <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <div className="text-sm text-muted">
                  <p>{exp.location} · {exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1 text-accent">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.category} className="rounded-lg border border-border bg-surface p-4">
              <h3 className="mb-2 font-mono text-xs font-semibold text-accent uppercase">{skill.category}</h3>
              <ul className="space-y-1">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen scroll-mt-16 border-t border-border py-16">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Contact</h2>
        <p className="mb-6 text-muted">
          Always up for a conversation about AI agents, MCP, or turning ugly real-world data into something usable.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={siteConfig.links.email}
            className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-5 transition-all hover:border-accent/50"
          >
            <Mail size={20} className="text-accent" />
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Email</h3>
              <p className="text-sm text-muted">{siteConfig.email}</p>
            </div>
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-5 transition-all hover:border-accent/50"
          >
            <GitHubIcon size={20} className="text-accent" />
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">GitHub</h3>
              <p className="text-sm text-muted">@0xkaushal</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
