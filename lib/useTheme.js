import { useCallback, useEffect, useSyncExternalStore } from "react";

// The theme lives on <html> — set by an inline script in _document.js
// before React hydrates so there's no flash-of-wrong-theme on load.
// This hook subscribes to that DOM state via useSyncExternalStore,
// which sidesteps the "setState in effect" anti-pattern that the
// previous useState + useEffect dance triggered.

function getClientSnapshot() {
  return document.documentElement.dataset.theme || "light";
}

function getServerSnapshot() {
  // SSR can't know the user's preference. The inline script in
  // _document.js corrects the class before paint.
  return "light";
}

function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
  });
  return () => observer.disconnect();
}

function applyTheme(next) {
  const root = document.documentElement;
  if (next === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.dataset.theme = next;
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  // Sync OS-level color-scheme changes when no manual override is set.
  // The DOM mutation here is picked up by the MutationObserver above,
  // so we don't need to setState ourselves.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  }, [theme]);

  return { theme, toggleTheme };
}
