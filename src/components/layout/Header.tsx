import react_logo from "@/assets/react.png";
import vite_logo from "@/assets/vite.png";
import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, toggle } = useThemeStore();

  const handleToggle = () => {
    document.body.classList.add("theme-transition");
    toggle();
    setTimeout(() => document.body.classList.remove("theme-transition"), 300);
  };
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/70 backdrop-blur transition-colors duration-300 supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-primary">
          <img src={vite_logo} className="h-5" />
          <img src={react_logo} className="h-5" />
          <span className="font-semibold">React + Vite Template</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#getting-started" className="hover:text-foreground">
            Getting Started
          </a>
          <a href="#stack" className="hover:text-foreground">
            Tech Stack
          </a>
        </nav>
        <button
          onClick={handleToggle}
          className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent"
          title="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-foreground" />
          )}
        </button>
      </div>
    </header>
  );
}
