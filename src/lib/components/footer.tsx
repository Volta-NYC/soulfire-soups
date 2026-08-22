import Link from "next/link"
import Image from "next/image"
import { navItems, squareOrderUrl } from "@/lib/site-data"

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-blush">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.35fr_0.7fr_0.8fr] lg:px-8">
        <div className="max-w-md">
          <Image
            src="/brand/soulfire-main-white.png"
            alt="SoulFire Soups"
            width={220}
            height={106}
            className="mb-5 h-auto w-44"
          />
          <p className="mt-5 text-base leading-7 text-brand-blush/78">
            Small-batch soups inspired by Black Southern staples, Caribbean and
            Latin spices, global influences, and the stories carried into every
            bowl.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-gold">
            Explore
          </h2>
          <div className="grid gap-3 text-sm font-bold uppercase tracking-wide">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-gold">
            Order
          </h2>
          <div className="grid gap-3 text-sm text-brand-blush/80">
            <Link
              href={squareOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-brand-blush hover:text-brand-gold"
            >
              Order on Square
            </Link>
            <p>Seasonal batches, catering, and special offerings are shared as available.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-blush/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-brand-blush/70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>© {new Date().getFullYear()} SoulFire Soups</div>
          <Link
            href="https://novusnyc.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-gold hover:underline"
          >
            Made by Novus
          </Link>
        </div>
      </div>
    </footer>
  )
}
