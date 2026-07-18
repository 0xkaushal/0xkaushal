import type { Metadata } from "next";
import { experience, skills } from "@/data/resume";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Satvik Kaushal's professional experience and skills.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="text-muted">Professional experience & skills</p>
        </div>
        <a
          href="/Satvik_Kaushal.pdf"
          download
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* Company Timeline */}
      <div className="mb-10 overflow-x-auto">
        <div className="flex min-w-max items-start">
          {experience.map((exp, i) => (
            <div key={exp.company} className="flex items-start">
              <div className="flex flex-col items-center px-4">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                <div className="mt-2 text-center">
                  <p className="text-sm font-semibold text-foreground">{exp.company}</p>
                  <p className="mt-0.5 text-xs text-muted">{exp.period}</p>
                </div>
              </div>
              {i < experience.length - 1 && (
                <div className="mt-1.5 h-px w-20 shrink-0" style={{ backgroundColor: "var(--border-color)" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <div className="text-sm text-muted">
                  <p>{exp.location}</p>
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1 text-accent">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-6 text-xl font-semibold">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <h3 className="mb-3 font-mono text-xs font-semibold text-accent uppercase">
                {skill.category}
              </h3>
              <ul className="space-y-1.5">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
