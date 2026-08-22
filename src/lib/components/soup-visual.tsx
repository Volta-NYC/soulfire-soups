import Image from "next/image"
import type { CSSProperties } from "react"

type SoupVisualProps = {
  color: string
  label: string
  tone?: "light" | "dark"
  className?: string
}

export default function SoupVisual({
  color,
  label,
  tone = "dark",
  className = "",
}: SoupVisualProps) {
  return (
    <div
      className={`soup-photo-slot w-full ${tone === "dark" ? "bg-brand-brown" : "bg-brand-blush"} ${className}`}
      style={{ "--soup-color": color } as CSSProperties}
    >
      <div className="soup-bowl" aria-hidden="true" />
      <Image
        src={tone === "dark" ? "/brand/soulfire-submark-white.png" : "/brand/soulfire-submark-green.png"}
        alt=""
        width={72}
        height={72}
        className="absolute right-5 top-5 h-10 w-10 object-contain opacity-70"
      />
      <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.18em] text-current/65">
        {label}
      </span>
    </div>
  )
}
