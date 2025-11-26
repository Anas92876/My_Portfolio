export function ThemeScript() {
  // This script runs before React hydrates to prevent flash of unstyled content (FOUC)
  const themeScript = `
    (function() {
      function getTheme() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'light' || savedTheme === 'dark') {
          return savedTheme;
        }

        // If auto mode, check system preference
        if (savedTheme === 'auto') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        // Default to light
        return 'light';
      }

      const theme = getTheme();
      document.documentElement.classList.add(theme);
    })();
  `

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  )
}
