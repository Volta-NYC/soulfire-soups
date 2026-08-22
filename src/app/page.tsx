import Image from "next/image"
import Link from "next/link"
import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import { inspirations, menuItems, squareOrderUrl } from "@/lib/site-data"

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-green text-brand-blush">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-brand-gold/20 lg:block" />
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-10 px-5 py-16 md:min-h-[760px] lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">
              Small batch and soul-fired
            </p>
            <h1 className="font-display text-5xl font-bold leading-[0.98] md:text-7xl lg:text-8xl">
              Where culture, comfort, and fire meet.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-blush/88">
              SoulFire Soups creates warm, layered bowls inspired by Black
              Southern staples, Caribbean and Latin spices, and the global food
              experiences that shaped the cook behind the pot.
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

          <div className="relative z-10 mx-auto flex w-full max-w-xl items-center justify-center lg:justify-end">
            <div className="soup-rings relative aspect-square w-full max-w-[520px] rounded-full border border-brand-blush/30 p-12 shadow-warm">
              <Image
                src="/brand/soulfire-main-brown.png"
                alt="SoulFire Soups"
                width={540}
                height={254}
                className="absolute left-1/2 top-1/2 h-auto w-[76%] -translate-x-1/2 -translate-y-1/2"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-5 py-16 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              The soul behind the fire
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-brown md:text-6xl">
              A pot can hold memory, place, and the next idea.
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
              Read the story
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-blush px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Seasonal menu
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-brown md:text-5xl">
                Bowls with a point of view.
              </h2>
            </div>
            <ButtonLink href="/pages/menu" variant="secondary">
              Explore Menu
            </ButtonLink>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-brand-brown/20 bg-brand-brown/20 md:grid-cols-2 lg:grid-cols-4">
            {menuItems.map((item) => (
              <Reveal key={item.name} className="bg-brand-cream p-6">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-red">
                    {item.tag}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-brand-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-brown">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-brown/75">
                  {item.detail}
                </p>
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
