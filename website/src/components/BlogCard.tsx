import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/50">
        <h3 className="mb-2 font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {readingTime}
            </span>
          </div>
          <div className="flex gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
