"use client";

import { Moon, Sun } from "lucide-react";
import { themeStorageKey } from "@/lib/theme";

type ThemeToggleProps = {
  label: string;
  tone?: "ink" | "cream";
  size?: "md" | "sm";
};

export function ThemeToggle({ label, tone = "ink", size = "md" }: ThemeToggleProps) {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {
      // Storage blocked: the theme still applies for this visit.
    }
  }

  const colors = tone === "ink" ? "text-ink hover:bg-ink/5" : "text-cream hover:bg-cream/10";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`flex ${size === "sm" ? "h-10 w-10" : "h-11 w-11"} items-center justify-center rounded-full transition-colors ${colors}`}
    >
      <Moon size={20} aria-hidden="true" className="theme-icon-moon" />
      <Sun size={20} aria-hidden="true" className="theme-icon-sun" />
    </button>
  );
}
