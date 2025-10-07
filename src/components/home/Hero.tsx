import github_logo_white from "@/assets/github-mark-white.png";
import github_logo from "@/assets/github-mark.png";
import react_logo from "@/assets/react.png";
import vite_logo from "@/assets/vite.png";
import { useThemeStore } from "@/store/useThemeStore";

export default function Hero() {
  const { theme } = useThemeStore();
  return (
    <section className="relative transition-colors duration-300">
      <div className="absolute inset-0 -z-10 opacity-40">
        {theme === "dark" ? (
          <div className="mx-auto h-40 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/40 via-indigo-500/20 to-transparent blur-3xl" />
        ) : (
          <div className="mx-auto h-40 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-300/40 via-indigo-200/20 to-transparent blur-3xl" />
        )}
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <div className="mb-6 flex justify-center gap-5">
          <img src={vite_logo} className="h-12" />
          <img src={react_logo} className="h-12" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build faster with React & Vite.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A batteries-included starter focused on speed, accessibility, and DX.
          Designed for real-world apps—from prototypes to production.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
          {[
            "React 19",
            "TypeScript 5",
            "Vite 7",
            "Zustand",
            "Tailwind 3",
            "shadcn/ui",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent px-3 py-1 text-accent-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <HeroButton href="https://vitejs.dev/guide/" text="Vite Docs" />
          <HeroButton href="https://react.dev/" text="React Docs" />
          <HeroButton
            href="https://github.com/minijae011030/react-template"
            text="GitHub"
            icon={theme === "dark" ? github_logo_white : github_logo}
          />
        </div>
      </div>
    </section>
  );
}

function HeroButton({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-medium transition-colors hover:bg-accent"
    >
      {icon && <img src={icon} className="-ml-2 h-6" />}
      {text}
    </a>
  );
}
