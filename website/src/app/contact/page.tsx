import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { Mail, Send } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Satvik Kaushal.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mb-8 text-muted">
        Always up for a conversation about AI agents, MCP, or turning ugly
        real-world data into something usable.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={siteConfig.links.email}
          className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
            <Mail size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
              Email
            </h3>
            <p className="text-sm text-muted">{siteConfig.email}</p>
          </div>
        </a>

        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
            <GitHubIcon size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
              GitHub
            </h3>
            <p className="text-sm text-muted">@0xkaushal</p>
          </div>
        </a>
      </div>

      {/* Quick message section */}
      <div className="mt-8 rounded-lg border border-border bg-surface p-6">
        <h2 className="mb-4 flex items-center gap-2 font-semibold">
          <Send size={16} className="text-accent" />
          Send a message
        </h2>
        <form
          action={`https://formspree.io/f/your-form-id`}
          method="POST"
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="What's on your mind?"
            rows={4}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
