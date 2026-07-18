"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  { prompt: true, text: "satvik.intro()" },
  { prompt: false, text: "" },
  { prompt: false, text: "→ Principal Software Engineer @ Eli Lilly" },
  { prompt: false, text: "→ Building AI agents, MCP tooling & memory infra" },
  { prompt: false, text: "→ Python · TypeScript · Go · AWS" },
  { prompt: false, text: "" },
  { prompt: false, text: '→ Philosophy: "Ship first, make it clean, keep it running"' },
];

export function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      setIsTyping(false);
      return;
    }

    const line = lines[visibleLines];
    const fullText = line.text;

    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 30 + Math.random() * 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        setCurrentText("");
      }, line.text === "" ? 100 : 300);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, currentText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-surface p-6 font-mono text-sm"
    >
      {/* Terminal header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-muted">~/0xkaushal</span>
      </div>

      {/* Terminal content */}
      <div className="space-y-1">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            {line.prompt && (
              <span className="mr-2 text-accent">❯</span>
            )}
            <span className={line.prompt ? "text-foreground" : "text-muted"}>
              {line.text}
            </span>
          </div>
        ))}

        {/* Currently typing line */}
        {visibleLines < lines.length && (
          <div className="flex">
            {lines[visibleLines].prompt && (
              <span className="mr-2 text-accent">❯</span>
            )}
            <span
              className={
                lines[visibleLines].prompt ? "text-foreground" : "text-muted"
              }
            >
              {currentText}
            </span>
            <span className="ml-0.5 animate-pulse text-accent">▊</span>
          </div>
        )}

        {/* Cursor after all lines typed */}
        {!isTyping && (
          <div className="flex">
            <span className="mr-2 text-accent">❯</span>
            <span className="animate-pulse text-accent">▊</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
