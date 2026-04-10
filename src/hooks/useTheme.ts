import { useEffect } from 'react';

// Vite bundles every design CSS file as an asset and gives us its final hashed URL.
// This works in dev and prod without duplicating files into public/.
const designUrls = import.meta.glob('../styles/designs/*.css', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const designMap: Record<string, string> = Object.fromEntries(
  Object.entries(designUrls).map(([path, url]) => {
    const name = path.split('/').pop()!.replace('.css', '');
    return [name, url];
  })
);

export function useTheme(themeName: string | null | undefined): void {
  useEffect(() => {
    if (!themeName) return;
    const href = designMap[themeName];
    if (!href) {
      console.warn(`Theme "${themeName}" not found. Available:`, Object.keys(designMap));
      return;
    }

    document.querySelectorAll('link[data-theme]').forEach((link) => link.remove());

    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = href;
    themeLink.setAttribute('data-theme', themeName);
    document.head.appendChild(themeLink);

    return () => {
      themeLink.remove();
    };
  }, [themeName]);
}
