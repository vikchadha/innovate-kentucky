import { useTheme as useNextThemes } from 'next-themes';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const {
    theme: activeTheme,
    setTheme: setNextTheme,
    systemTheme,
    themes,
  } = useNextThemes();

  const isDark = activeTheme === 'dark' || 
    (activeTheme === 'system' && systemTheme === 'dark');
  
  const theme = (activeTheme || 'system') as Theme;

  const setTheme = (theme: Theme) => {
    setNextTheme(theme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme,
    isDark,
    themes,
    setTheme,
    toggleTheme,
    systemTheme,
  };
}

export function getThemeClasses(theme: 'light' | 'dark' | 'system' = 'dark') {
  const isDark = theme === 'dark' || 
    (theme === 'system' && typeof window !== 'undefined' && 
     window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  return {
    bg: isDark ? 'bg-gray-950' : 'bg-white',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    border: isDark ? 'border-gray-800' : 'border-gray-200',
    hover: isDark ? 'hover:bg-gray-900' : 'hover:bg-gray-50',
    card: isDark ? 'bg-gray-900/50' : 'bg-white',
    cardBorder: isDark ? 'border-gray-800' : 'border-gray-200',
    cardHover: isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50',
    input: isDark 
      ? 'bg-gray-900/50 border-gray-800 text-white placeholder-gray-500' 
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
    button: isDark 
      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
      : 'bg-indigo-600 hover:bg-indigo-700 text-white',
    buttonSecondary: isDark 
      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
      : 'bg-gray-100 hover:bg-gray-200 text-gray-900',
  };
}

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' 
    : 'light';
}

export function addThemeChangeListener(callback: (theme: 'light' | 'dark') => void) {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const listener = (e: MediaQueryListEvent) => {
    callback(e.matches ? 'dark' : 'light');
  };
  
  // For older browsers that don't support addEventListener on mediaQuery
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', listener);
  } else {
    // @ts-ignore - for Safari < 14
    mediaQuery.addListener(listener);
  }
  
  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', listener);
    } else {
      // @ts-ignore - for Safari < 14
      mediaQuery.removeListener(listener);
    }
  };
}

export function syncThemeToDocument(theme: string) {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  if (theme === 'system') {
    const systemTheme = getSystemTheme();
    root.classList.toggle('dark', systemTheme === 'dark');
    root.style.colorScheme = systemTheme;
  } else {
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = theme;
  }
  
  // Update the meta theme-color
  const themeColor = getComputedStyle(root)
    .getPropertyValue('--color-primary')
    .trim();
    
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', themeColor);
  }
}
