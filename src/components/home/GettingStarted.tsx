import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative w-full overflow-x-auto">
      <pre className="mt-2 w-max min-w-full rounded-lg bg-muted p-4 font-mono text-sm">
        {code}
      </pre>
    </div>
  );
}

function CodeCard({
  title,
  code,
  onCopy,
}: {
  title: string;
  code: string;
  onCopy: (code: string) => void;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <button
          onClick={() => onCopy(code)}
          className="rounded-md bg-accent p-1 transition-colors hover:bg-accent/80"
        >
          <Copy className="h-4 w-4 text-accent-foreground" />
        </button>
      </div>
      <CodeBlock code={code} />
    </div>
  );
}

export default function GettingStarted() {
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
        <CodeCard title="Use this template" code={code1} onCopy={handleCopy} />
        <CodeCard title="Common Scripts" code={code2} onCopy={handleCopy} />
      </div>
    </section>
  );
}
