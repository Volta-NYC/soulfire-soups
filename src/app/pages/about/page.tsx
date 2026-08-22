import Image from "next/image"
import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import { squareOrderUrl } from "@/lib/site-data"

export default function AboutPage() {
  return (
    <div className="bg-brand-cream">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Our story
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-brand-brown md:text-7xl">
            Built from memory, meals, and imagination.
          </h1>
        </div>
        <div className="grid gap-6 text-lg leading-8 text-brand-brown/80">
          <p>
            SoulFire Soups is a small-batch soup business inspired by the
            flavors, cultures, and food experiences that shaped its founder.
          </p>
          <p>
            It started with a love of creating soups and bringing together
            familiar ingredients in ways that feel fresh, comforting, and
            sometimes unexpected.
          </p>
        </div>
      </section>

      <section className="bg-brand-green px-5 py-16 text-brand-blush lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-72 overflow-hidden bg-brand-brown p-8">
            <Image
              src="/brand/soulfire-alt-white.png"
              alt="SoulFire Soups alternate logo"
              width={420}
              height={271}
              className="relative z-10 h-auto w-full max-w-sm"
            />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-gold/35" />
          </div>
          <div className="grid content-center gap-6 text-lg leading-8 text-brand-blush/88">
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Tradition is honored here, then stirred forward.
            </h2>
            <p>
              The menu draws from Black Southern staples, Caribbean and Latin
              spices, and global influences. Every bowl is made with real,
              flavorful ingredients and layers of taste that tell a story.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Approach
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-brand-brown md:text-5xl">
            Comforting enough to feel known. Thoughtful enough to surprise.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            SoulFire is for the person who wants a meal with warmth, history,
            and a little spark. The soups change with the season, but the
            intention stays the same.
          </p>
          <div className="mt-8">
            <ButtonLink href={squareOrderUrl} external>
              Order on Square
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
