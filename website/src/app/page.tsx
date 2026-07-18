import { TerminalHero } from "@/components/TerminalHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Hero section */}
      <section className="mb-16">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Hi, I&apos;m Satvik{" "}
          <span className="inline-block">👋</span>
        </h1>
        <p className="mb-8 text-lg text-muted">
          I build integration-heavy tooling that lives close to a real domain.
        </p>
        <TerminalHero />
      </section>

      {/* Quick links */}
      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/projects"
          className="group flex items-center justify-between rounded-lg border border-border bg-surface p-5 transition-all hover:border-accent/50"
        >
          <div>
            <h2 className="font-semibold text-foreground">Projects</h2>
            <p className="text-sm text-muted">What I&apos;m building</p>
          </div>
          <ArrowRight
            size={18}
            className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
          />
        </Link>
        <Link
          href="/blog"
          className="group flex items-center justify-between rounded-lg border border-border bg-surface p-5 transition-all hover:border-accent/50"
        >
          <div>
            <h2 className="font-semibold text-foreground">Blog</h2>
            <p className="text-sm text-muted">Thoughts & technical writing</p>
          </div>
          <ArrowRight
            size={18}
            className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
          />
        </Link>
      </section>
    </div>
  );
}
