import 'next-themes';

declare module 'next-themes' {
  interface ThemeProviderProps {
    children: React.ReactNode;
    /**
     * Default theme name (for v0.0.12 or lower this is `defaultTheme`)
     * @default 'light'
     */
    defaultTheme?: string;
    /**
     * HTML attribute modified based on the active theme
     * @default 'class'
     */
    attribute?: string | 'class' | 'data-theme';
    /**
     * Value of the HTML attribute when the theme is dark
     * @default 'dark'
     */
    value?: { [themeName: string]: string };
    /**
     * Whether to enable system theme detection
     * @default true
     */
    enableSystem?: boolean;
    /**
     * Key used to store theme setting in localStorage
     * @default 'theme'
     */
    storageKey?: string;
    /**
     * Disable all CSS transitions when switching themes
     * @default false
     */
    disableTransitionOnChange?: boolean;
    /**
     * Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons
     * @default true
     */
    enableColorScheme?: boolean;
    /**
     * Whether to use the `class` attribute instead of `data-theme` for applying theme styles
     * @default false
     */
    enableClass?: boolean;
  }

  interface UseThemeProps {
    /** Active theme name */
    theme: string | undefined;
    /** All available theme names */
    themes: string[];
    /** Whether the active theme is dark */
    isDark: boolean;
    /** Whether the theme is set by the system */
    isSystem: boolean;
    /** Set the active theme */
    setTheme: (theme: string) => void;
  }
}

// Extend the Window interface with the theme context
declare global {
  interface Window {
    __THEME__?: string;
    __onThemeChange?: (theme: string) => void;
    __setPreferredTheme?: (theme: string) => void;
  }
}
