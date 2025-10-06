import github_logo from "@/assets/github.png";
import react_logo from "@/assets/react.png";
import vite_logo from "@/assets/vite.png";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b1220] to-[#0b1640] text-white">
      <Header />
      <Hero />
      <Features />
      <GettingStarted />
      <TechStack />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-sky-300">
          <img src={vite_logo} className="h-5" />
          <img src={react_logo} className="h-5" />
          <span className="font-semibold">React + Vite Template</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#getting-started" className="hover:text-white">
            Getting Started
          </a>
          <a href="#stack" className="hover:text-white">
            Tech Stack
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="mx-auto h-40 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/40 via-indigo-500/20 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <div className="mb-6 flex justify-center gap-5">
          <img src={vite_logo} className="h-12" />
          <img src={react_logo} className="h-12" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ship fast with React, Vite, Tailwind & shadcn/ui
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          A batteries-included starter focused on speed, accessibility, and DX.
          Designed for real-world apps—from prototypes to production.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1">React 19</span>
          <span className="rounded-full bg-white/10 px-3 py-1">
            TypeScript 5
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1">Vite 7</span>
          <span className="rounded-full bg-white/10 px-3 py-1">Tailwind 3</span>
          <span className="rounded-full bg-white/10 px-3 py-1">shadcn/ui</span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://vitejs.dev/guide/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 font-medium hover:bg-white/10"
          >
            Vite Docs
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 font-medium hover:bg-white/10"
          >
            React Docs
          </a>
          <a
            href="https://github.com/minijae011030/react-template"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 font-medium text-white hover:bg-white/10 hover:text-white"
          >
            <img src={github_logo} className="-ml-3 h-7" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
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
        ].map((f) => (
          <article
            key={f.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-white/80">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
function CodeBlock({ code }: { code: string }) {
  return (
    // 부모는 컨테이너 폭에 맞추고, 가로 스크롤 담당
    <div
      className="relative w-full min-w-0 overflow-x-auto"
      style={{ WebkitOverflowScrolling: "touch" }} // iOS 부드러운 스크롤
    >
      {/* 내용은 필요한 만큼 넓어지게 */}
      <pre className="w-max max-w-none whitespace-pre rounded-lg bg-black/60 p-4 font-mono text-sm">
        {code}
      </pre>
    </div>
  );
}

function GettingStarted() {
  const { toast } = useToast();

  const code1 = `git clone https://github.com/minijae011030/react-template.git
cd react-template
npm i
npm run dev`;

  const code2 = `npm run build      # production build
npm run preview    # preview the build
npm run lint       # ESLint
npm run format     # Prettier + Tailwind sort`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      description: "Copied to clipboard!",
      duration: 2000,
    });
  };

  return (
    <section id="getting-started" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Getting Started</h2>
      <div className="grid min-w-0 gap-6">
        <div className="min-w-0 rounded-xl border border-white/10 bg-black/40 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Use this template</h3>
            <button
              onClick={() => handleCopy(code1)}
              className="rounded-md bg-white/10 p-1 hover:bg-white/20"
            >
              <Copy className="h-4 w-4 text-white" />
            </button>
          </div>
          <CodeBlock code={code1} />
        </div>
        <div className="min-w-0 rounded-xl border border-white/10 bg-black/40 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Common Scripts</h3>
            <button
              onClick={() => handleCopy(code2)}
              className="rounded-md bg-white/10 p-1 hover:bg-white/20"
            >
              <Copy className="h-4 w-4 text-white" />
            </button>
          </div>
          <CodeBlock code={code2} />
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
      <div className="flex flex-wrap items-center gap-4 text-white/80">
        <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
          <img src={vite_logo} className="h-5" />
        </span>
        <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
          <img src={react_logo} className="h-5" />
        </span>
        <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
          TypeScript 5
        </span>
        <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
          TailwindCSS 3
        </span>
        <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
          shadcn/ui
        </span>
        <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
          React Router 7
        </span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} React + Vite Template</p>
        <p className="text-white/50">
          Powered by React, Vite, Tailwind, and shadcn/ui
        </p>
      </div>
    </footer>
  );
}
