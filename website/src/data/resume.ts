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
    location: "Bengaluru, India",
    period: "May 2019 – Dec 2020",
    highlights: [],
  },
  {
    title: "Technology Analyst → Technology Consultant",
    company: "Deloitte",
    location: "Bengaluru, India",
    period: "Dec 2020 – Aug 2022",
    highlights: [],
  },
  {
    title: "Principal Software Engineer",
    company: "Eli Lilly and Company",
    location: "Bengaluru, India",
    period: "Aug 2022 – Present",
    highlights: [
      "Building integration-heavy tooling that lives close to the domain",
      "Working on AI agents, MCP tooling, and self-hosted AI memory infrastructure",
      "Designing systems that survive messy inputs, incompatible APIs, and constraints discovered mid-build",
      "Deep expertise across Python, TypeScript, Go, and AWS",
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
