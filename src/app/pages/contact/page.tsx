import ButtonLink from "@/lib/components/button-link"
import { squareOrderUrl } from "@/lib/site-data"

export default function ContactPage() {
  return (
    <div className="paper-grain bg-brand-cream px-5 py-16 lg:px-8">
      <section className="brand-grain mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            Contact
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-brand-brown md:text-6xl">
            Need soup for your table?
          </h1>
        </div>
        <div className="border-y border-brand-brown/20 py-8">
          <p className="text-lg leading-8 text-brand-brown/75">
            Order current batches through Square. For catering, seasonal
            questions, or special requests, use the Square page as the most
            current point of contact until a dedicated inbox is confirmed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={squareOrderUrl} external>
              Order Online
            </ButtonLink>
            <ButtonLink href="/pages/catering" variant="secondary">
              Explore Catering
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
