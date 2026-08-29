import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";
import { SERVICES, type ServiceId } from "@/lib/site";

const STORAGE_KEY = "waypoint-inquiries";

type Inquiry = {
  ref: string;
  name: string;
  email: string;
  phone: string;
  service: ServiceId;
  date: string;
  location: string;
  message: string;
  createdAt: string;
};

function isServiceId(value: string | undefined): value is ServiceId {
  return SERVICES.some((s) => s.id === value);
}

export function QuoteForm({ initialService }: { initialService?: string }) {
  const [service, setService] = useState<ServiceId>(
    isServiceId(initialService) ? initialService : "events",
  );
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const selected = useMemo(
    () => SERVICES.find((s) => s.id === service) ?? SERVICES[0],
    [service],
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const inquiry: Inquiry = {
      ref: `WA-${Date.now().toString(36).toUpperCase()}`,
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      service,
      date: String(data.get("date") ?? ""),
      location: String(data.get("location") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      createdAt: new Date().toISOString(),
    };

    if (!inquiry.name || !inquiry.email) {
      toast.error("Name and email are required.");
      return;
    }

    setSending(true);
    const existing = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "[]",
    ) as Inquiry[];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([inquiry, ...existing]));
    setSubmitted(inquiry.ref);
    setSending(false);
    toast.success("Request received.");
    form.reset();
    setService("events");
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
        <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
          Received
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-fg">
          We’ll be in touch.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Your request is logged as{" "}
          <span className="font-medium text-fg tabular-nums">{submitted}</span>.
          Typical reply is within one business day with airspace notes and a
          firm number.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setSubmitted(null)}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <Label htmlFor="date">Preferred date</Label>
          <Input id="date" name="date" type="date" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="service">Service</Label>
          <Select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value as ServiceId)}
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="location">Site / venue</Label>
          <Input
            id="location"
            name="location"
            placeholder="Address or venue name"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">What do you need in the air?</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Deliverables, call time, any airspace notes."
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-sm text-muted">
          Typical range for {selected.title.toLowerCase()}:{" "}
          <span className="font-medium text-fg">{selected.range}</span>
        </p>
        <Button type="submit" disabled={sending}>
          {sending ? "Sending…" : "Request a quote"}
        </Button>
      </div>
    </form>
  );
}
