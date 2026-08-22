"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navItems, squareOrderUrl } from "@/lib/site-data"

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-brand-brown/10 bg-brand-cream">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition duration-300 lg:px-8 ${
          scrolled
            ? "min-h-[72px] shadow-[0_8px_24px_rgba(90,62,44,0.08)]"
            : "min-h-[86px]"
        }`}
      >
        <Link href="/" className="flex items-center" aria-label="SoulFire Soups home">
          <Image
            src="/brand/soulfire-main-brown.png"
            alt="SoulFire Soups"
            width={190}
            height={91}
            className={`${scrolled ? "h-11" : "h-14"} w-auto transition-all`}
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-bold uppercase tracking-[0.16em] text-brand-brown lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-3 transition after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-brand-gold after:transition-transform ${
                pathname === item.href
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={squareOrderUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-brand-red px-5 py-3 text-brand-blush transition hover:bg-brand-brown"
          >
            Order Online
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="relative block h-5 w-7">
            <span className={`absolute left-0 h-0.5 w-7 rounded-full bg-current transition ${open ? "top-[9px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[9px] h-0.5 w-7 rounded-full bg-current transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-7 rounded-full bg-current transition ${open ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-brown/10 bg-brand-cream px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-base font-bold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-l-2 border-brand-gold/0 py-2 pl-3 text-xl text-brand-brown hover:border-brand-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={squareOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-red px-5 text-brand-blush"
              onClick={() => setOpen(false)}
            >
              Order Online
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
