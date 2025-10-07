export default function Features() {
  const features = [
    {
      title: "Blazing Dev Server",
      desc: "Instant HMR and lightning-fast builds via Vite 7.",
    },
    {
      title: "Type-Safe by Default",
      desc: "TypeScript configuration ready out of the box.",
    },
    {
      title: "Utility-First Styling",
      desc: "TailwindCSS with animate plugin and class sorting.",
    },
    {
      title: "Accessible Components",
      desc: "shadcn/ui (Radix) for accessible building blocks.",
    },
    {
      title: "Modern Routing",
      desc: "React Router 7 with a clean route setup.",
    },
    {
      title: "Lint & Format",
      desc: "ESLint + Prettier + Tailwind class auto-ordering.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
