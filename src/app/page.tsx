import Link from "next/link"
import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import SoupVisual from "@/lib/components/soup-visual"
import { brandPromise, inspirations, menuItems, squareOrderUrl, stockImages, values } from "@/lib/site-data"

export default function HomePage() {
  return (
    <div className="paper-grain">
      <section className="brand-grain bg-brand-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-14 pt-28 lg:min-h-[760px] lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pt-32">
          <div className="min-w-0 max-w-[19rem] min-[430px]:max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Small batch • soul-fired
            </p>
            <h1 className="max-w-full font-display text-[2.72rem] font-bold leading-[0.98] text-[#c45f3d] min-[430px]:text-6xl md:text-7xl lg:text-[3.9rem]">
              <span className="block">Where</span>
              <span className="block">Food,</span>
              <span className="block">Culture,</span>
              <span className="block md:inline">and</span>
              <span className="block">Community Meet</span>
            </h1>
            <p className="mt-7 text-measure text-lg leading-8 text-brand-ink/76">
              Every bowl has a story. Ours began with a family sweet potato
              pudding recipe, then grew through years of friends gathering to
              cook, taste, debate, and share. Today, SoulFire makes small-batch
              soups with comfort, choice, and connection at the center.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={squareOrderUrl} external>
                Order Online
              </ButtonLink>
              <ButtonLink href="/pages/menu" variant="secondary">
                Explore the Menu
              </ButtonLink>
            </div>
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-[1fr_0.58fr] md:items-end">
            <div className="grid gap-4">
              <SoupVisual
                color="#366834"
                label="the craft of gathering"
                className="min-h-52"
                image={stockImages.goldenBowl}
                alt="A golden soup bowl with a generous garnish"
                priority
              />
              <SoupVisual
                color="#cc2127"
                label="a slow-built simmer"
                className="min-h-[420px]"
                image={stockImages.hero}
                alt="A generous food spread with fresh ingredients"
                priority
              />
            </div>
            <div className="grid gap-4">
              <SoupVisual
                color="#d99b2d"
                label="roots in every bowl"
                className="min-h-56"
                image={stockImages.rusticSoup}
                alt="A comforting soup bowl served with bread"
              />
              <div className="border-y border-brand-brown/20 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                  Current batches order through Square
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-brown/70">
                  Seasonal soups are prepared in small batches and shared while
                  they are available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-brand-blush">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Seasonal menu preview
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-brown md:text-6xl">
                Bowls with a point of view.
              </h2>
            </div>
            <ButtonLink href="/pages/menu" variant="secondary">
              View Full Seasonal Menu
            </ButtonLink>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {menuItems.slice(0, 3).map((item) => (
              <Reveal key={item.name} className="group">
                <article className="grid gap-5">
                  <SoupVisual
                    color={item.color}
                    label={item.tag}
                    className="transition duration-300 group-hover:-translate-y-1"
                    image={item.image}
                    alt={item.alt}
                  />
                  <div className="border-t border-brand-brown/20 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                    {item.tag}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold text-brand-brown">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm font-bold text-brand-green">
                      {item.dietary}
                    </p>
                    <p className="mt-3 text-base leading-7 text-brand-brown/75">
                      {item.detail}
                    </p>
                    <p className="mt-4 text-sm text-brand-brown/58">
                      {item.ingredients.join(" • ")}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-brand-cream">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <SoupVisual
            color="#5a3e2c"
            label="a story in every bowl"
            tone="light"
            className="min-h-[420px]"
            image={stockImages.sharedTable}
            alt="Friends gathered at a table full of food and candles"
          />
          <div className="self-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              The soul behind the fire
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-brown md:text-5xl">
              Some stories begin with a business plan.
              <br />
              Ours began around a table.
            </h2>
            <div className="mt-7 grid gap-5 text-lg leading-8 text-brand-brown/78">
              <p>
              Before there was a business, there were Pudding & Pie Parties,
              then annual soup tastings where friends voted, bragged, and
              shared the single best spoonful from each pot.
              </p>
              <p>
              That ritual of one intentional taste still guides every bowl:
              layered toppings, contrasting texture, and a little of the
              cook's personality in the experience.
              </p>
            </div>
            <Link
              href="/pages/about"
              className="mt-7 inline-flex border-b-2 border-brand-gold pb-1 text-sm font-bold uppercase tracking-wide text-brand-green"
            >
              Read Our Story
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-brand-brown text-brand-blush">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Flavor story
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-blush md:text-6xl">
              Familiar ingredients, fresh routes.
            </h2>
            <p className="mt-5 max-w-md text-brand-blush/76">
              {brandPromise} Travel through Morocco, Zanzibar, South Africa,
              Spain, Colombia, Belize, London, Italy, and Lisbon continues to
              widen the palate behind each new batch.
            </p>
          </div>
          <div className="grid gap-px border border-brand-blush/20 bg-brand-blush/20 sm:grid-cols-2">
            {inspirations.map((item, index) => (
              <div
                key={item}
                className="bg-brand-brown px-6 py-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                  {index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-brand-blush">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-brand-cream">
        <div className="mx-auto grid max-w-7xl gap-px border-y border-brand-brown/18 bg-brand-brown/18 md:grid-cols-4">
          {values.map((item, index) => (
            <Reveal key={item.title} className="bg-brand-cream p-6 md:p-8">
              <p className="text-sm font-bold text-brand-red">{index + 1}</p>
              <h3 className="mt-7 font-display text-2xl font-bold text-brand-brown">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-brown/70">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-green px-5 py-16 text-brand-blush lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Catering
            </p>
            <h2 className="font-display text-5xl font-bold leading-tight text-brand-blush md:text-6xl">
              Gather around the pot.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-brand-blush/82">
              From office lunches to family reunions, SoulFire can bring
              larger-batch soups, sides, and warmth to the table.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pages/catering" variant="light">Explore Catering</ButtonLink>
              <ButtonLink href={squareOrderUrl} variant="light" external>
                Order Online
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Office lunches", "Family reunions", "Community events", "Small celebrations"].map((item) => (
              <div key={item} className="border border-brand-blush/28 p-6">
                <p className="font-display text-2xl font-bold text-brand-blush">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
