import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import SoupVisual from "@/lib/components/soup-visual"
import { squareOrderUrl } from "@/lib/site-data"

export default function AboutPage() {
  return (
    <div className="bg-brand-cream">
      <section className="brand-grain mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Our story
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-brand-brown md:text-6xl">
            Built from memory, meals, and imagination.
          </h1>
        </div>
        <div className="grid gap-6 text-lg leading-8 text-brand-brown/78">
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

      <section className="section-shell bg-brand-brown text-brand-blush">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SoupVisual color="#d99b2d" label="origin" className="min-h-[420px]" />
          <div className="self-center text-lg leading-8 text-brand-blush/84">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Philosophy
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-blush md:text-5xl">
              Tradition is honored here, then stirred forward.
            </h2>
            <p className="mt-6">
              The menu draws from Black Southern staples, Caribbean and Latin
              spices, and global influences. Every bowl is made with real,
              flavorful ingredients and layers of taste that tell a story.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-brand-cream">
        <Reveal className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Approach
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-brand-brown md:text-5xl">
            Comforting enough to feel known. Thoughtful enough to surprise.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            SoulFire is for the person who wants a meal with warmth, history,
            and a little spark. The soups change with the season, but the
            intention stays the same.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/pages/menu" variant="secondary">
              Explore the Menu
            </ButtonLink>
            <ButtonLink href={squareOrderUrl} external>
              Order Online
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
