import { createFileRoute } from "@tanstack/react-router";
import { Heading, Kicker, Section } from "@/components/section";
import { WorkGallery } from "@/components/work-gallery";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return (
    <main>
      <Section className="pt-28 pb-10 sm:pt-32">
        <Kicker>Work</Kicker>
        <Heading>Frames from Central Indiana.</Heading>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Events, property, inspections, and cinematic stills. Filter by type,
          open any frame.
        </p>
      </Section>
      <Section className="pt-0">
        <WorkGallery />
      </Section>
    </main>
  );
}
