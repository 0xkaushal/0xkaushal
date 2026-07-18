export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  live?: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    title: "memward",
    description:
      "A self-hosted AI memory layer that captures context from Claude Code, GitHub Copilot, and Claude Desktop into one place you actually own.",
    longDescription:
      "AI coding tools each keep their own siloed history. memward unifies that into a portable, self-hosted memory you control — so your assistants stop forgetting what you told them last week.",
    tech: ["FastAPI", "Supabase", "AWS Lambda", "S3", "CloudFront"],
    github: "https://github.com/0xkaushal/memward",
    emoji: "🧠",
  },
  {
    title: "Odin",
    description:
      "A conversational CLI agent with an agentic tool-use loop, persistent cross-session memory, live web search, and system tools.",
    longDescription:
      "Built incrementally, one tested feature at a time. Taught me wiring an agentic reason → act → observe loop, injecting durable memory into context, and getting integrations working behind a corporate proxy.",
    tech: ["Python", "LLM APIs", "Tool-use loops", "Persistent memory"],
    github: "https://github.com/0xkaushal/Odin",
    emoji: "⚡",
  },
  {
    title: "mcp-rc-audit",
    description:
      "An open-source conformance auditor for MCP servers — a Python CLI that pairs a static scanner with a live probe.",
    longDescription:
      "Checks whether an MCP server actually behaves the way the spec claims. Pairs static analysis with runtime probing for comprehensive conformance testing.",
    tech: ["Python", "MCP", "CLI", "Static Analysis"],
    github: "https://github.com/0xkaushal/mcp-rc-audit",
    emoji: "🔍",
  },
];
