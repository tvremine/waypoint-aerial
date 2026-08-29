import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Media } from "@/components/media";
import { Heading, Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <main>
      <Section className="pt-28 sm:pt-32">
        <Kicker>Services</Kicker>
        <Heading>Commercial aerial, from stills to maps.</Heading>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Every job starts with airspace and ends in a labeled folder. Ranges
          below are typical for Central Indiana — send the site and we’ll
          firm it up.
        </p>
      </Section>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="space-y-16">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div
                className={`aspect-[4/3] overflow-hidden rounded-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Media src={service.image} alt={service.alt} />
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-faint uppercase">
                  {service.kicker} · {service.range}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium text-fg sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {service.body}
                </p>
                <Button asChild className="mt-7">
                  <Link to="/contact" search={{ service: service.id }}>
                    Request this
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
