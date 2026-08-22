import Image from "next/image"
import Link from "next/link"
import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import { inspirations, menuItems, squareOrderUrl } from "@/lib/site-data"

export default function HomePage() {
  return (
    <div>
      <section className="brand-grain relative overflow-hidden bg-[#fbf6ed] pt-28 text-brand-ink">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-[640px] w-[640px] rounded-full bg-brand-gold/20 blur-3xl lg:block" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:pb-24 lg:min-h-[820px] lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
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

          <div className="relative z-10 mx-auto w-full max-w-[560px]">
            <div className="relative rounded-[2rem] border border-brand-brown/15 bg-white/55 p-5 shadow-[0_25px_90px_rgba(90,62,44,0.18)] backdrop-blur">
              <div className="aspect-square rounded-[1.55rem] bg-brand-brown p-8 text-brand-blush">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-5">
                    <Image
                      src="/brand/soulfire-submark-gold.png"
                      alt=""
                      width={116}
                      height={116}
                      className="h-24 w-24 object-contain"
                    />
                    <div className="text-right text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                      Seasonal
                      <br />
                      Batch
                    </div>
                  </div>
                  <div className="soup-orbit mx-auto aspect-square w-[68%] rounded-full shadow-[inset_0_0_0_18px_rgba(255,248,239,0.12)] [--soup-color:#cc2127]" />
                  <div className="grid grid-cols-3 gap-3 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-gold">
                    <span>Roasted Roots</span>
                    <span>Slow Simmer</span>
                    <span>Fresh Heat</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-brand-red px-5 py-4 text-sm font-bold uppercase tracking-wide text-brand-blush shadow-xl md:block">
              Order on Square
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf6ed] px-6 py-20 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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

      <section className="bg-brand-brown px-6 py-10 text-brand-blush lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[1.5rem] border border-brand-blush/15 bg-brand-blush/15 md:grid-cols-4">
          {["Small-batch", "Diasporic flavors", "Seasonal bowls", "Square ordering"].map((item) => (
            <div key={item} className="bg-brand-brown/70 px-6 py-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-grain bg-brand-blush px-6 py-20 lg:px-8">
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
              <Reveal key={item.name} className="group overflow-hidden rounded-[1.35rem] border border-brand-brown/12 bg-[#fbf6ed] shadow-[0_18px_50px_rgba(90,62,44,0.10)] transition hover:-translate-y-1">
                <div className="relative aspect-[1.12] overflow-hidden bg-brand-brown p-7">
                  <div
                    className="soup-orbit mx-auto aspect-square h-full rounded-full transition duration-500 group-hover:scale-[1.04]"
                    style={{ "--soup-color": item.color } as React.CSSProperties}
                  />
                  <Image
                    src="/brand/soulfire-submark-white.png"
                    alt=""
                    width={84}
                    height={84}
                    className="absolute right-5 top-5 h-12 w-12 object-contain opacity-70"
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
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="rounded-full border border-brand-brown/10 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-brown/65"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-brown px-6 py-20 text-brand-blush lg:px-8">
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

      <section className="brand-grain bg-brand-cream px-6 py-20 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-10 rounded-[1.5rem] border border-brand-brown/15 bg-white/45 p-8 shadow-[0_18px_60px_rgba(90,62,44,0.10)] backdrop-blur lg:grid-cols-[1fr_0.8fr] lg:p-12">
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
