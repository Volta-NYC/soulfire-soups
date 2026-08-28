import Image from "next/image"
import type { CSSProperties } from "react"

type SoupVisualProps = {
  color: string
  label: string
  tone?: "light" | "dark"
  className?: string
}

// Map labels to local food photography images
// Images correspond to the actual dishes on the SoulFire Soups menu
const imageMap: Record<string, string> = {
  // Heritage Peanut Stew - West African peanut stew (maafe) with sweet potato, bird's eye chili
  Signature: "/photos/heritage-peanut-stew.jpg",
  // Smoked Jollof Lentil - Red lentil stew with tomato, smoked paprika, jollof-inspired seasoning
  Hearty: "/photos/smoked-jollof-lentil.jpg",
  // Gumbo Z'Herbes - Seven greens, smoked turkey, creole herbs
  "Chef's choice": "/photos/gumbo-zherbes.jpg",
  // Calypso Corn Chowder - Sweet corn, coconut milk, thyme, Caribbean spice
  Seasonal: "/photos/calypso-corn-chowder.jpg",
  // Homepage hero images
  "greens and herbs": "/photos/gumbo-zherbes.jpg",
  "signature simmer": "/photos/heritage-peanut-stew.jpg",
  "roasted roots": "/photos/smoked-jollof-lentil.jpg",
  "story in every bowl": "/photos/gumbo-zherbes.jpg",
  origin: "/photos/gumbo-zherbes.jpg",
  "shared table": "/photos/shared-table.jpg",
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
