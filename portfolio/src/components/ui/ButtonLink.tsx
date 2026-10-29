import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors";
const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:border-indigo-300 hover:bg-indigo-50",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
