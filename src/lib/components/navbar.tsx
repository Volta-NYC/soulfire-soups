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
          ? "border-b border-brand-brown/15 bg-brand-cream/95 shadow-sm backdrop-blur"
          : "bg-brand-cream/90"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SoulFire Soups home">
          <Image
            src="/brand/soulfire-submark-green.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="font-display text-lg font-bold text-brand-brown">
            SoulFire Soups
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide text-brand-brown lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-red">
              {item.label}
            </Link>
          ))}
          <Link
            href={squareOrderUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-red px-5 py-3 text-brand-blush transition hover:bg-brand-brown"
          >
            Order
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
