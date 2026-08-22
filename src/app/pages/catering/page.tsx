import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import SoupVisual from "@/lib/components/soup-visual"
import { cateringMoments, cateringSteps, squareOrderUrl } from "@/lib/site-data"

export default function CateringPage() {
  return (
    <div className="bg-brand-cream">
      <section className="brand-grain mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Catering
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-brand-brown md:text-6xl">
            Bring the pot to the gathering.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-brown/78">
            SoulFire can support larger-batch soup moments for office lunches,
            family reunions, community tables, and small celebrations.
          </p>
          <div className="mt-8">
            <ButtonLink href={squareOrderUrl} external>
              Start a Catering Order
            </ButtonLink>
          </div>
        </div>
        <SoupVisual color="#366834" label="shared table" className="min-h-[430px]" />
      </section>

      <section className="bg-brand-brown px-5 py-16 text-brand-blush lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
            Soup for
          </p>
          <div className="grid gap-px border border-brand-blush/20 bg-brand-blush/20 md:grid-cols-4">
            {cateringMoments.map((item) => (
              <div key={item} className="bg-brand-brown p-7">
                <p className="font-display text-2xl font-bold text-brand-blush">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-brand-cream">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              How it works
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-brown md:text-5xl">
              Soup is practical food, but it can still feel personal.
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown/75">
              Availability, batch sizes, timing, dietary requests, and seasonal
              options are confirmed through the ordering and contact process.
            </p>
          </div>
          <div className="grid gap-px border-y border-brand-brown/18 bg-brand-brown/18">
            {cateringSteps.map((step, index) => (
              <div key={step} className="grid gap-4 bg-brand-cream py-5 md:grid-cols-[4rem_1fr]">
                <p className="font-display text-3xl font-bold text-brand-red">
                  {index + 1}
                </p>
                <p className="text-lg font-bold text-brand-brown">{step}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-blush px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-brand-brown">
            Start with the gathering.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-brown/72">
            SoulFire will help shape the soup around the season, the table, and
            what is available.
          </p>
          <div className="mt-8">
            <ButtonLink href={squareOrderUrl} external>
              Start a Catering Order
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
