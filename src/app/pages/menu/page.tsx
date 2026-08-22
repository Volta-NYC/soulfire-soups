import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import { inspirations, menuItems, squareOrderUrl } from "@/lib/site-data"

export default function MenuPage() {
  return (
    <div className="bg-brand-cream">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Seasonal menu
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-brand-brown md:text-7xl">
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

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-brand-brown/20 bg-brand-brown/20 md:grid-cols-2">
          {menuItems.map((item) => (
            <Reveal key={item.name} className="bg-brand-blush">
              <div className="grid gap-0 md:grid-cols-[0.72fr_1fr]">
                <div className="grid min-h-72 place-items-center bg-brand-brown p-8">
                  <div
                    className="soup-orbit aspect-square w-full max-w-64 rounded-full shadow-[inset_0_0_0_16px_rgba(255,248,239,0.12)]"
                    style={{ "--soup-color": item.color } as React.CSSProperties}
                  />
                </div>
                <div className="p-8 md:p-10">
                  <span className="text-sm font-bold uppercase tracking-wide text-brand-red">
                    {item.tag}
                  </span>
                  <h2 className="mt-5 font-serif text-4xl font-semibold text-brand-brown">
                    {item.name}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-brand-brown/75">
                    {item.detail}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="rounded-full bg-white/75 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-brown/65"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
    </div>
  )
}
