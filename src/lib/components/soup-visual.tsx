import Image from "next/image"
import type { CSSProperties } from "react"

type SoupVisualProps = {
  color: string
  label: string
  tone?: "light" | "dark"
  className?: string
}

// Map labels to Unsplash photo IDs for actual dish photography
// Images are sourced from Unsplash and correspond to the actual dishes on the menu
const imageMap: Record<string, string> = {
  // Heritage Peanut Stew - West African peanut stew (maafe) with sweet potato
  // Using: vegan chickpea curry/stew bowl (similar rich, orange-brown stew presentation)
  Signature: "https://images.unsplash.com/photo-61OW9QrD4bw?auto=format&fit=crop&w=1200&q=80",
  // Smoked Jollof Lentil - Red lentil stew with tomato, smoked paprika
  // Using: brown and green lentil stew in ceramic bowl (free Unsplash license)
  Hearty: "https://images.unsplash.com/photo-LrMh_BR7SWs?auto=format&fit=crop&w=1200&q=80",
  // Gumbo Z'Herbes - Greens-forward Creole stew with smoked turkey
  // Using: collard greens/grits and greens bowl (Southern staple, free license)
  "Chef's choice": "https://images.unsplash.com/photo-yItVmeh1XA8?auto=format&fit=crop&w=1200&q=80",
  // Calypso Corn Chowder - Caribbean corn chowder with coconut milk
  // Using: Caribbean-themed soup with vegetables (free license, tagged Caribbean)
  Seasonal: "https://images.unsplash.com/photo-kVHwk4FROtc?auto=format&fit=crop&w=1200&q=80",
  // Homepage hero images
  "greens and herbs": "https://images.unsplash.com/photo-yItVmeh1XA8?auto=format&fit=crop&w=1200&q=80",
  "signature simmer": "https://images.unsplash.com/photo-61OW9QrD4bw?auto=format&fit=crop&w=1200&q=80",
  "roasted roots": "https://images.unsplash.com/photo-LrMh_BR7SWs?auto=format&fit=crop&w=1200&q=80",
  "story in every bowl": "https://images.unsplash.com/photo-yItVmeh1XA8?auto=format&fit=crop&w=1200&q=80",
  origin: "https://images.unsplash.com/photo-yItVmeh1XA8?auto=format&fit=crop&w=1200&q=80",
  "shared table": "https://images.unsplash.com/photo-nEQY2vfKnt4?auto=format&fit=crop&w=1200&q=80",
}

export default function SoupVisual({
  color,
  label,
  tone = "dark",
  className = "",
}: SoupVisualProps) {
  const imageSrc = imageMap[label] || (tone === "dark" ? "/brand/soulfire-submark-white.png" : "/brand/soulfire-submark-green.png")
  const isPhoto = imageSrc.startsWith("http")

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
