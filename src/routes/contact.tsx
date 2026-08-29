import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Heading, Kicker, Section } from "@/components/section";
import { SITE } from "@/lib/site";

type ContactSearch = {
  service?: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  return (
    <main>
      <Section className="pt-28 pb-8 sm:pt-32">
        <Kicker>Contact</Kicker>
        <Heading>Send the site. We’ll send a number.</Heading>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Typical reply within one business day. If the date is inside a week,
          say so — we’ll tell you honestly whether the air is free.
        </p>
      </Section>
      <Section className="grid gap-10 pt-0 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <QuoteForm initialService={service} />
        <aside className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-faint uppercase">
            Studio
          </p>
          <p className="mt-3 text-fg">{SITE.city}</p>
          <p className="mt-1 text-sm text-muted">
            Serving {SITE.region}. Travel by request.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 inline-block text-sm text-fg underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-muted">
            <li>FAA Part 107 Remote Pilot</li>
            <li>Commercial sUAS liability on file</li>
            <li>COI issued to venues on request</li>
            <li>Stills often delivered next day</li>
          </ul>
        </aside>
      </Section>
    </main>
  );
}
