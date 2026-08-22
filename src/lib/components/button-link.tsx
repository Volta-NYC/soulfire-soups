import Link from "next/link"
import type { ReactNode } from "react"

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "light"
  external?: boolean
}

const styles = {
  primary:
    "bg-brand-red text-brand-blush shadow-[0_10px_22px_rgba(204,33,39,0.18)] hover:bg-brand-brown focus-visible:outline-brand-gold",
  secondary:
    "border border-brand-brown/30 bg-transparent text-brand-brown hover:border-brand-red hover:text-brand-red focus-visible:outline-brand-red",
  light:
    "border border-brand-brown/15 bg-brand-blush text-brand-green hover:bg-white focus-visible:outline-brand-gold",
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold uppercase tracking-wide transition ${styles[variant]}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  )
}
