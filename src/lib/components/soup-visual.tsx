import Image from "next/image"
import type { CSSProperties } from "react"

type SoupVisualProps = {
  color: string
  label: string
  tone?: "light" | "dark"
  className?: string
}

// Map labels to appropriate food photography images
const imageMap: Record<string, string> = {
  "greens and herbs": "/photos/greens-herbs.jpg",
  "signature simmer": "/photos/simmering-pot.jpg",
  "roasted roots": "/photos/roasted-roots.jpg",
  "story in every bowl": "/photos/story-bowl.jpg",
  origin: "/photos/story-bowl.jpg",
  "shared table": "/photos/shared-table.jpg",
  Signature: "/photos/roasted-roots.jpg",
  Hearty: "/photos/simmering-pot.jpg",
  "Chef's choice": "/photos/greens-herbs.jpg",
  Seasonal: "/photos/corn-chowder.jpg",
}

export default function SoupVisual({
  color,
  label,
  tone = "dark",
  className = "",
}: SoupVisualProps) {
  const imageSrc = imageMap[label] || (tone === "dark" ? "/brand/soulfire-submark-white.png" : "/brand/soulfire-submark-green.png")
  const isPhoto = imageSrc.startsWith("/photos/")

  return (
    <div
      className={`soup-photo-slot w-full ${tone === "dark" ? "bg-brand-brown" : "bg-brand-blush"} ${className}`}
      style={{ "--soup-color": color } as CSSProperties}
    >
      {isPhoto ? (
        <Image
          src={imageSrc}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <Image
          src={imageSrc}
          alt=""
          width={72}
          height={72}
          className="absolute right-5 top-5 h-10 w-10 object-contain opacity-70"
        />
      )}
      <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.18em] text-current/65">
        {label}
      </span>
    </div>
  )
}
