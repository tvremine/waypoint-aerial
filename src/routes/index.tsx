import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Media } from "@/components/media";
import { Heading, Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { CREDENTIALS, SERVICES, SITE, STEPS, WORK } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const preview = WORK.filter((w) => w.id !== "skyline").slice(0, 4);

  return (
    <main>
      <section className="relative isolate min-h-[100dvh] overflow-hidden">
        <div className="absolute inset-0">
          <Media
            src="/media/hero.jpg"
            alt="Downtown skyline at blue hour over a river"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        </div>

        <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pt-28 pb-16 sm:px-6 sm:pb-20">
          <p className="reveal text-xs font-medium tracking-[0.22em] text-primary-fg/80 uppercase">
            {SITE.city} · Part 107
          </p>
          <h1 className="reveal reveal-2 mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-medium tracking-tight text-fg sm:text-7xl">
            {SITE.tagline}
          </h1>
          <p className="reveal reveal-3 mt-5 max-w-xl text-base leading-relaxed text-fg/80 sm:text-lg">
            Cinematic aerial, inspections, and mapping for producers, property
            teams, and facilities who need the site documented — cleanly, and
            on a schedule.
          </p>
          <div className="reveal reveal-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Request a quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/work">View the work</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-surface">
        <ul className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((item) => (
            <li key={item.label} className="bg-surface px-4 py-6 sm:px-6">
              <p className="text-sm font-medium text-fg">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Kicker>Services</Kicker>
            <Heading>What we put in the air.</Heading>
          </div>
          <Button asChild variant="secondary">
            <Link to="/services">
              All services
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.slice(0, 4).map((service) => (
            <li key={service.id}>
              <Link
                to="/services"
                hash={service.id}
                className="group block overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-quick)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg">
                  <Media
                    src={service.image}
                    alt={service.alt}
                    className="transition-transform duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-3 pt-4 pb-3">
                  <p className="text-xs tracking-[0.16em] text-faint uppercase">
                    {service.kicker} · from ${service.from}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium text-fg">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Kicker>Selected work</Kicker>
            <Heading>Frames from Central Indiana.</Heading>
          </div>
          <Button asChild variant="secondary">
            <Link to="/work">
              Full gallery
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {preview.map((item) => (
            <li key={item.id}>
              <Link to="/work" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-surface-2 shadow-[var(--shadow-border)]">
                  <Media
                    src={item.src}
                    alt={item.alt}
                    className="transition-transform duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-fg">{item.title}</p>
                  <p className="text-xs text-faint">{item.location}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <Media
              src="/media/ops.jpg"
              alt="Cinema drone on a rooftop flight case at blue hour"
            />
          </div>
          <div>
            <Kicker>About</Kicker>
            <Heading>A small operation. A serious PIC.</Heading>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Waypoint Aerial is a Part 107 studio based in Indianapolis. We
              fly for producers, property teams, and facilities managers who
              need the site as it actually is — not a stock skyline with the
              wrong river in it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              One airframe on the call sheet, a backup in the van, insurance
              on file, and a flight path that stays out of the show.
            </p>
            <Button asChild className="mt-8" variant="secondary">
              <Link to="/about">
                About the studio
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <Kicker>Process</Kicker>
        <Heading>Four beats. No surprises.</Heading>
        <ol className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="bg-bg px-5 py-6 sm:px-6">
              <p className="font-display text-3xl text-primary">{step.n}</p>
              <h3 className="mt-4 text-base font-medium text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-20">
          <div>
            <h2 className="font-display text-3xl font-medium text-fg sm:text-4xl">
              Have a site. Need the air.
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Send the address, the date, and what you need back. We’ll check
              airspace and reply with a number.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">
              Request a quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
