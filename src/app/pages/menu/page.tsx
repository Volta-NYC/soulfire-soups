import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import SoupVisual from "@/lib/components/soup-visual"
import { inspirations, menuItems, squareOrderUrl } from "@/lib/site-data"

export default function MenuPage() {
  return (
    <div className="paper-grain bg-brand-cream">
      <section className="brand-grain mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Seasonal menu
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-brand-brown md:text-6xl">
            Small batches with big memory.
          </h1>
        </div>
        <div className="grid content-start gap-6 text-lg leading-8 text-brand-brown/80">
          <p>
            The menu shifts with ingredients, mood, and season. These featured
            bowls show the SoulFire approach: rooted, layered, and made to
            comfort without feeling ordinary.
          </p>
          <ButtonLink href={squareOrderUrl} external>
            View Full Menu on Square
          </ButtonLink>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10">
          {menuItems.map((item, index) => (
            <Reveal key={item.name}>
              <article className={`grid gap-0 border-y border-brand-brown/18 bg-brand-blush lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <SoupVisual color={item.color} label={item.tag} className="min-h-[360px]" />
                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
                    {item.tag}
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-bold text-brand-brown">
                    {item.name}
                  </h2>
                  <p className="mt-3 text-sm font-bold text-brand-green">
                    {item.dietary}
                  </p>
                  <p className="mt-5 text-lg leading-8 text-brand-brown/76">
                    {item.detail}
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.16em] text-brand-brown/55">
                    {item.ingredients.join(" / ")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-green px-5 py-16 text-brand-blush lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Ingredients of influence
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              A menu shaped by more than one pantry.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {inspirations.map((item) => (
              <div key={item} className="bg-brand-blush px-5 py-6 text-brand-brown">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-brand-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-brand-brown">
            Ready for a bowl?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-brown/72">
            Ordering, availability, and seasonal offerings are hosted through
            Square.
          </p>
          <div className="mt-8">
            <ButtonLink href={squareOrderUrl} external>
              Order Online
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
