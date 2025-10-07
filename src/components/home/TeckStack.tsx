import react_logo from "@/assets/react.png";
import vite_logo from "@/assets/vite.png";

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        {[vite_logo, react_logo].map((logo, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2"
          >
            <img src={logo} className="h-5" />
          </span>
        ))}
        {[
          "TypeScript 5",
          "Zustand",
          "TailwindCSS 3",
          "shadcn/ui",
          "React Router 7",
        ].map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-accent-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
