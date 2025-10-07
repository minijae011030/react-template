import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
