"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { navItems, squareOrderUrl } from "@/lib/site-data"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "border-b border-brand-brown/10 bg-[#fbf6ed]/95 shadow-sm backdrop-blur"
          : "border-b border-brand-brown/10 bg-[#fbf6ed]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="SoulFire Soups home">
          <Image
            src="/brand/soulfire-main-brown.png"
            alt="SoulFire Soups"
            width={190}
            height={91}
            className="h-14 w-auto md:h-16"
            priority
          />
        </Link>

        <div className="hidden items-center gap-10 text-sm font-bold uppercase tracking-[0.18em] text-brand-ink lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-red">
              {item.label}
            </Link>
          ))}
          <Link
            href={squareOrderUrl}
            target="_blank"
            rel="noreferrer"
            className="sr-only"
          >
            Order on Square
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-full border border-brand-brown/25 px-4 text-sm font-bold uppercase tracking-wide text-brand-brown lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-brown/15 bg-brand-cream px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-base font-bold text-brand-brown">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href={squareOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-red px-5 text-brand-blush"
              onClick={() => setOpen(false)}
            >
              Order on Square
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
