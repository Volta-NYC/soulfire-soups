import "./globals.css"
import type { ReactNode } from "react"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { Atkinson_Hyperlegible } from "next/font/google"

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
})

export const metadata = {
  metadataBase: new URL("https://soulfiresoups.square.site"),
  title: "SoulFire Soups | Small-Batch Soups With Soul",
  description:
    "Small-batch soups inspired by Black Southern, Caribbean, Latin, and global flavors.",
  icons: {
    icon: "/brand/soulfire-submark-green.png",
    apple: "/brand/soulfire-submark-green.png",
  },
  openGraph: {
    title: "SoulFire Soups",
    description:
      "Warm, comforting soups rooted in culture, story, and fresh small-batch craft.",
    images: ["/brand/soulfire-main-green.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={atkinson.variable}>
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-ink">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
