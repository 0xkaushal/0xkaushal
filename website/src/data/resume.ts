export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const experience: Experience[] = [
  {
    title: "Junior Associate Consultant",
    company: "Rythmos",
    location: "Hyderabad, India",
    period: "May 2019 – Dec 2020",
    highlights: [
      "Delivered migration services for a large-scale loyalty application built on Node.js, Java, and MongoDB.",
      "Containerized application environments using Docker and Docker Compose, improving environment consistency across dev and staging.",
      "Drove test coverage through Jest and Mocha, establishing TDD practices across the team.",
    ],
  },
  {
    title: "Technology Analyst → Technology Consultant",
    company: "Deloitte",
    location: "Hyderabad, India",
    period: "Dec 2020 – Aug 2022",
    highlights: [
      "Built and optimized APIs (Node.js, MongoDB, React) for a Test Automation Suite within a microservices architecture, improving modularity, scalability, and fault isolation.",
      "Streamlined CI/CD on OpenShift — automated build, test, and deployment pipelines, reducing release times and manual intervention.",
    ],
  },
  {
    title: "Principal Software Engineer",
    company: "Eli Lilly and Company",
    location: "Bengaluru, India · Lilly Research Laboratories",
    period: "Aug 2022 – Present",
    highlights: [
      "Built and deployed a production MCP server exposing agentic tools over enterprise lab instrument data (DynamoDB/S3) across multiple R&D labs — shipped from sandbox to production in a regulated GxP environment using FastMCP on AWS ECS Fargate behind an ALB and a secured enterprise MCP gateway.",
      "Led AIDA, an AI Drafting Assistant using a RAG pipeline with semantic chunking, vector embeddings, top-K retrieval, score-threshold filtering, and reranking. Multi-step reasoning and LLM-driven document generation cut Japanese PSR turnaround from 3–4 weeks to 2–3 days. Managed a team of four full-stack engineers. Instrumented quality via RAGAS and LangFuse.",
      "Implemented tools-level RBAC by validating Microsoft Entra ID app roles from OAuth access tokens, gating MCP tool access per user role so lab scientists, IT, and admins each see only authorized tools and data — meeting least-privilege requirements for a GxP-regulated environment.",
      "Broke through the enterprise integration wall: implemented Azure AD OAuth (Authorization Code flow, token caching, redirect-URI and AADSTS troubleshooting), and resolved Zscaler/Artifactory connectivity, cross-account AWS Private Link, and Kubernetes deployment failures between demo and real deployment.",
      "Designed and shipped a custom auth layer using AWS Lambda@Edge, WAF, MSAL, and CloudFront. Optimized an AWS Glue pipeline from 2–3 hours to 15 minutes through parallel processing and database optimizations.",
      "Implemented the data module in CAMP (Clinical Account Management & Processing) — pipelines handling 1M+ records daily using AWS Glue, Step Functions, Lambda, EventBridge, and CloudFormation. Onboarded VEEVA IWRS and Fircrest within six months.",
      "Delivered end-to-end scientific workflow automation integrating three platforms — L7 (workflow automation), Benchling (ELN/experiment data), and TetraScience TDP & Data Capture Platform (instrument data) — enabling automated data flow from instrument to system of record across SMDD and BRD.",
      "Improved system performance by 30% via lazy loading, GraphQL, and REST optimization. Built reusable React/TypeScript/Python components powering real-time Monte Carlo simulations in PPM.",
      "Hardened orchestration reliability with automated retries, dead-letter handling, and detailed logging/alerting across Glue and Lambda workflows, plus AWS SNS for real-time job notifications.",
      "Contributed to the Lilly Heritage Hall 3D experience on Oculus devices; presented the initiative to the CEO.",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript / JavaScript", "Go"],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS (Lambda, ECS/Fargate, DynamoDB, S3, CloudFormation)",
      "OAuth 2.0",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    category: "Focus Areas",
    items: [
      "AI Agents & Tool-use Loops",
      "Model Context Protocol (MCP) Tooling",
      "Self-hosted AI Memory",
      "Data Pipelines",
      "Integration Architecture",
    ],
  },
];
