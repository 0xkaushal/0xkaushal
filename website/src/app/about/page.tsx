import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Satvik Kaushal — Principal Software Engineer building AI agents, MCP tooling, and integration-heavy systems.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">About me</h1>

      <div className="space-y-6 text-muted leading-relaxed">
        <p>
          I&apos;m a <strong className="text-foreground">Principal Software Engineer at Eli Lilly</strong>{" "}
          based in Bengaluru. I build integration-heavy tooling that lives close
          to a real domain — software that has to survive messy inputs, systems
          that weren&apos;t designed to talk to each other, and constraints you only
          discover once you&apos;re inside the environment.
        </p>

        <p>
          Lately I&apos;m focused on{" "}
          <strong className="text-foreground">personal AI infrastructure</strong>:
          memory, agents, and the plumbing that makes AI tools actually usable
          day to day. I like the unglamorous problems — parsing output that
          breaks on a stray comma, getting an integration through a corporate
          proxy, adding auth to something that shipped without it.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-foreground">
          What I care about
        </h2>
        <ul className="list-none space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 text-accent">→</span>
            <span>
              <strong className="text-foreground">Integration over greenfield.</strong>{" "}
              The interesting work is gluing real systems together under
              constraints, not building in a vacuum.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-accent">→</span>
            <span>
              <strong className="text-foreground">Proximity to the domain.</strong>{" "}
              I&apos;d rather understand the user&apos;s actual problem than build one
              layer removed from it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-accent">→</span>
            <span>
              <strong className="text-foreground">Shipping.</strong> A working
              thing in someone&apos;s hands beats a perfect thing in a branch.
            </span>
          </li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold text-foreground">
          What I work with
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 font-mono text-xs font-semibold text-accent uppercase">
              Languages
            </h3>
            <p className="text-sm">Python · TypeScript · Go</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 font-mono text-xs font-semibold text-accent uppercase">
              Cloud
            </h3>
            <p className="text-sm">
              AWS (Lambda, ECS, DynamoDB, S3, CloudFormation)
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 font-mono text-xs font-semibold text-accent uppercase">
              Focus
            </h3>
            <p className="text-sm">AI Agents · MCP · Memory · Pipelines</p>
          </div>
        </div>
      </div>
    </div>
  );
}
