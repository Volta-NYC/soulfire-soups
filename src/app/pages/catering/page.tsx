import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import { cateringMoments, squareOrderUrl } from "@/lib/site-data"

export default function CateringPage() {
  return (
    <div className="bg-brand-cream">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Catering
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-brand-brown md:text-7xl">
            Bring the pot to the gathering.
          </h1>
        </div>
        <div className="grid content-start gap-6 border-y border-brand-brown/20 py-8 text-lg leading-8 text-brand-brown/80">
          <p>
            SoulFire can support larger-batch soup moments for office lunches,
            family reunions, community tables, and small celebrations.
          </p>
          <ButtonLink href={squareOrderUrl} external>
            Start on Square
          </ButtonLink>
        </div>
      </section>

      <section className="bg-brand-brown px-5 py-16 text-brand-blush lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
            Good for
          </p>
          <div className="grid gap-px overflow-hidden border border-brand-blush/20 bg-brand-blush/20 md:grid-cols-4">
            {cateringMoments.map((item) => (
              <div key={item} className="bg-brand-brown p-6 text-xl font-bold">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-display text-4xl font-bold text-brand-brown md:text-5xl">
            Soup is practical food, but it can still feel personal.
          </h2>
          <p className="text-lg leading-8 text-brand-brown/75">
            Use the Square page for the most current availability. Custom
            requests can be coordinated from there as the business confirms
            batch size, timing, dietary needs, and seasonal options.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
