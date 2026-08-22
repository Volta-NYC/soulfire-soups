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
    "bg-brand-red text-brand-blush shadow-[0_12px_28px_rgba(90,62,44,0.22)] hover:bg-brand-brown focus-visible:outline-brand-gold",
  secondary:
    "border border-brand-brown/30 bg-white/70 text-brand-brown hover:border-brand-green hover:text-brand-green focus-visible:outline-brand-red",
  light:
    "border border-brand-blush/60 bg-brand-blush text-brand-green hover:bg-white focus-visible:outline-brand-gold",
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
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold uppercase tracking-wide transition ${styles[variant]}`}
    >
      {children}
    </Link>
  )
}
