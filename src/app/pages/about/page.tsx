import type { Metadata } from "next"
import ButtonLink from "@/lib/components/button-link"
import Reveal from "@/lib/components/reveal"
import SoupVisual from "@/lib/components/soup-visual"
import { brandPromise, squareOrderUrl, stockImages, storyChapters } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Our Story | SoulFire Soups",
  description:
    "The family recipes, soup parties, travel, and community that brought SoulFire Soups to the table.",
}

export default function AboutPage() {
  return (
    <div className="paper-grain bg-brand-cream">
      <section className="brand-grain mx-auto grid max-w-7xl items-end gap-10 px-5 pb-16 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-40">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Our story
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-brand-brown md:text-7xl">
            A table set over twenty years.
          </h1>
        </div>
        <div className="grid gap-6 text-lg leading-8 text-brand-brown/78">
          <p>{brandPromise}</p>
          <p>
            SoulFire was not designed from a perfectly formed plan. It emerged
            as family traditions, friendships, travel, healing, experimentation,
            and opportunity began to reveal their connection.
          </p>
        </div>
      </section>

      <section className="bg-brand-brown px-5 py-16 text-brand-blush lg:px-8 lg:py-24">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SoupVisual
            color="#d99b2d"
            label="a gathering that became a tradition"
            className="min-h-[420px]"
            image={stockImages.communityTable}
            alt="A community gathered around a table with plates of food"
          />
          <div className="self-center text-lg leading-8 text-brand-blush/95">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Philosophy
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-blush md:text-5xl">
              The meal has always been about more than the meal.
            </h2>
            <p className="mt-6">
              At the annual Soup, Pudding & Pie Parties, friends brought pots
              of their best soups, tasted up to nine creations, debated their
              favorites, and celebrated the cooks with love. The room made one
              thing clear: food can make connection, belonging, and joy feel
              effortless.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-brand-cream" aria-labelledby="story-timeline-title">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              How we got here
            </p>
            <h2 id="story-timeline-title" className="mt-4 font-display text-4xl font-bold leading-tight text-brand-brown md:text-6xl">
              Every chapter added something to the bowl.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px border-y border-brand-brown/20 bg-brand-brown/20 lg:grid-cols-2">
            {storyChapters.map((chapter, index) => (
              <li key={`${chapter.year}-${chapter.title}`} className="bg-brand-cream p-7 md:p-10">
                <Reveal className="grid gap-5 md:grid-cols-[7.5rem_1fr]">
                  <p className="font-display text-2xl font-bold text-brand-red">{chapter.year}</p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                      Chapter {index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-brand-brown">
                      {chapter.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-7 text-brand-brown/85">{chapter.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-blush px-5 py-16 lg:px-8 lg:py-24">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              Today
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-brown md:text-6xl">
              Ignite Flavor. Celebrate Soul.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-brown/90">
              Today, SoulFire creates soups rooted in Southern Black and
              Caribbean traditions, with room for global flavors and the people
              who keep expanding the story. Each bowl is crafted for comfort,
              choice, and connection.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pages/menu" variant="secondary">
                Explore the Menu
              </ButtonLink>
              <ButtonLink href={squareOrderUrl} external>
                Order Online
              </ButtonLink>
            </div>
          </div>
          <SoupVisual
            color="#366834"
            label="comfort, choice, connection"
            tone="light"
            className="min-h-[360px]"
            image={stockImages.goldenBowl}
            alt="A golden bowl of soup with crisp toppings"
          />
        </Reveal>
      </section>
    </div>
  )
}
