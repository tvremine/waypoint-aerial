import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Media } from "@/components/media";
import { Heading, Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { CREDENTIALS, SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <Section className="pt-28 sm:pt-32">
        <Kicker>About</Kicker>
        <Heading>Indianapolis, with a license and a plan.</Heading>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {SITE.name} is the Part 107 aerial studio of {SITE.owner}. We fly
          events, property, inspections, and maps across Central Indiana — for
          people who already know what they need from the air and just want it
          flown well.
        </p>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <Media
              src="/media/ops.jpg"
              alt="Cinema drone on a rooftop flight case at blue hour"
            />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              The work is unglamorous in the right ways: checking LAANC before
              the van leaves, walking the site, keeping the aircraft out of the
              ceremony and out of the guest’s champagne. Then delivering stills
              that color-grade next to the rest of the show.
            </p>
            <p>
              We are based in Indianapolis and fly the metro, the south side,
              and the surrounding counties. Travel days are available when the
              brief is worth the drive.
            </p>
            <p>
              Cinema-class airframes, dual control when the job needs it, and
              a backup body in the case. Color-graded stills, 4K clips, or a
              map — labeled, in a folder you can hand off.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <Kicker>Credentials</Kicker>
        <Heading>On paper, not just on the homepage.</Heading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {CREDENTIALS.map((item) => (
            <li
              key={item.label}
              className="rounded-xl bg-surface px-5 py-6 shadow-[var(--shadow-border)]"
            >
              <p className="text-sm font-medium text-fg">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-10">
          <Link to="/contact">
            Start a brief
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Section>
    </main>
  );
}
