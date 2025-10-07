export default function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} React + Vite Template</p>
        <p>Powered by React, Vite, Tailwind, and shadcn/ui</p>
      </div>
    </footer>
  );
}
