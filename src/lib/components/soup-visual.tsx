import Image from "next/image"
import type { CSSProperties } from "react"

type SoupVisualProps = {
  color: string
  label: string
  tone?: "light" | "dark"
  className?: string
  image?: string
  alt?: string
  priority?: boolean
}

export default function SoupVisual({
  color,
  label,
  tone = "dark",
  className = "",
  image,
  alt = "",
  priority = false,
}: SoupVisualProps) {
  return (
    <div
      className={`soup-photo-slot w-full ${tone === "dark" ? "bg-brand-brown" : "bg-brand-blush"} ${className}`}
      style={{ "--soup-color": color } as CSSProperties}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="soup-bowl" aria-hidden="true" />
      )}
      {image && <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" aria-hidden="true" />}
      <Image
        src={tone === "dark" ? "/brand/soulfire-submark-white.png" : "/brand/soulfire-submark-green.png"}
        alt=""
        width={72}
        height={72}
        className="absolute right-5 top-5 z-10 h-10 w-10 object-contain opacity-70"
      />
      <span className={`absolute bottom-5 left-5 z-10 text-xs font-bold uppercase tracking-[0.18em] ${image ? "text-brand-cream" : "text-current/65"}`}>
        {label}
      </span>
    </div>
  )
}
