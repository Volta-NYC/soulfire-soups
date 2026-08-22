import Image from "next/image"
import Link from "next/link"
import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import { inspirations, menuItems, squareOrderUrl } from "@/lib/site-data"

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#fbf6ed] text-brand-ink">
        <div className="pointer-events-none absolute right-0 top-28 hidden h-[520px] w-[520px] rounded-full bg-brand-gold/15 blur-3xl lg:block" />
        <div className="mx-auto grid min-h-[calc(100vh-105px)] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">
              Small batch and soul-fired
            </p>
            <h1 className="font-serif text-6xl font-semibold leading-[0.92] text-[#c45f3d] md:text-7xl lg:text-[5.75rem]">
              Where Food, Culture, and Community Meet
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-brand-ink/75">
              Every bowl has a story. Ours began with family traditions and
              Sunday dinners, then grew through years of gathering friends,
              family, and community around food. Today, SoulFire Soups creates
              small-batch soups inspired by Southern Black and Caribbean
              influences and the people who helped shape SoulFire.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={squareOrderUrl} external>
                Order on Square
              </ButtonLink>
              <ButtonLink href="/pages/menu" variant="light">
                View Seasonal Menu
              </ButtonLink>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[520px] lg:mt-28">
            <Image
              src="/brand/hero-soup.jpg"
              alt="Steaming bowl of SoulFire soup with crusty bread"
              width={520}
              height={520}
              className="aspect-square w-full rounded-[1.5rem] object-cover shadow-2xl"
              priority
            />
            <div className="absolute -bottom-7 -left-7 hidden h-32 w-32 rounded-full bg-brand-red/10 md:block" />
          </div>
        </div>
      </section>

      <section className="bg-[#fbf6ed] px-6 py-20 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              The soul behind the fire
            </p>
            <h2 className="font-serif text-5xl font-semibold leading-tight text-brand-brown md:text-6xl">
              Some stories begin with a business plan.
              <br />
              Ours began around a table.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-brand-brown/80">
            <p>
              The business began with a love of creating soups and bringing
              familiar ingredients together in ways that feel fresh,
              comforting, and sometimes unexpected.
            </p>
            <p>
              Each batch is rooted in real ingredients and layered taste, with
              tradition treated as a starting point for curiosity.
            </p>
            <Link
              href="/pages/about"
              className="w-fit border-b-2 border-brand-gold pb-1 text-sm font-bold uppercase tracking-wide text-brand-green"
            >
              The story behind SoulFire Soups
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-blush px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-brown/60">
                Ordering is hosted on Square
              </p>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Seasonal menu
              </p>
              <h2 className="font-serif text-5xl font-semibold text-brand-brown md:text-6xl">
                Seasonal Menu
              </h2>
            </div>
            <ButtonLink href="/pages/menu" variant="secondary">
              Explore Menu
            </ButtonLink>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {menuItems.slice(0, 3).map((item) => (
              <Reveal key={item.name} className="group overflow-hidden rounded-2xl bg-[#fbf6ed] shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={520}
                    height={520}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-red">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-brand-brown">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-brown/75">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-brown px-5 py-16 text-brand-blush lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Flavor map
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Familiar ingredients, fresh routes.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {inspirations.map((item) => (
              <div
                key={item}
                className="border border-brand-blush/25 px-5 py-6 text-lg font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-cream px-5 py-16 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-10 border-y border-brand-brown/20 py-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              Gather around the pot
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-brown md:text-5xl">
              Catering for lunches, reunions, and soulful events.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href="/pages/catering">Catering Info</ButtonLink>
            <ButtonLink href={squareOrderUrl} variant="secondary" external>
              Order on Square
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
