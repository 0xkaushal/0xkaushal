# Hi, I'm Satvik 👋

I build integration-heavy tooling that lives close to a real domain — software that has to survive messy inputs, systems that weren't designed to talk to each other, and constraints you only discover once you're inside the environment.

Lately I'm focused on **personal AI infrastructure**: memory, agents, and the plumbing that makes AI tools actually usable day to day. I like the unglamorous problems — parsing output that breaks on a stray comma, getting an integration through a corporate proxy, adding auth to something that shipped without it. Ship first, make it clean, keep it running.

Principal Software Engineer at Eli Lilly (Bengaluru). Comfortable across Python, TypeScript, and Go, deep on AWS, and spending most of my energy in the MCP and agent-tooling space.

---

## What I'm building

### 🧠 [memward](https://github.com/0xkaushal/memward)
A self-hosted AI memory layer that captures context from Claude Code, GitHub Copilot, and Claude Desktop into one place you actually own — so your assistants stop forgetting what you told them last week.

- **Stack:** FastAPI · Supabase · AWS Lambda · S3 / CloudFront
- **Why it exists:** AI coding tools each keep their own siloed history. memward unifies that into a portable, self-hosted memory you control.

### ⚡ [Odin - a terminal AI assistant](https://github.com/0xkaushal/Odin)
A conversational CLI agent with an agentic tool-use loop, persistent cross-session memory, live web search, and system tools — built incrementally, one tested feature at a time.

- **What it taught me:** wiring an agentic reason → act → observe loop, injecting durable memory into context, and the unglamorous reality of getting integrations working behind a corporate proxy (TLS, non-standard auth, flaky upstreams).
- *Personal project — currently local while I harden the auth and transport layers.*

### 🔍 [mcp-rc-audit](https://github.com/0xkaushal/mcp-rc-audit)
An open-source conformance auditor for MCP servers — a Python CLI that pairs a static scanner with a live probe to check whether a server actually behaves the way the spec claims.

---

## What I work with

**Languages** · Python · TypeScript / JavaScript · Go

**Cloud & infra** · AWS (Lambda, ECS/Fargate, DynamoDB, S3, CloudFormation) · OAuth 2.0 · CI/CD (GitHub Actions)

**Focus areas** · AI agents & tool-use loops · Model Context Protocol tooling · self-hosted AI memory · Data pipelines

---

## What I care about

- **Integration over greenfield.** The interesting work is gluing real systems together under constraints, not building in a vacuum.
- **Proximity to the domain.** I'd rather understand the user's actual problem than build one layer removed from it.
- **Shipping.** A working thing in someone's hands beats a perfect thing in a branch.

---

📫 Find me on [GitHub](https://github.com/0xkaushal) · always up for a conversation about AI agents, MCP, or turning ugly real-world data into something usable.
