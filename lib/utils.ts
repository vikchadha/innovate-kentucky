import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getThemeClasses(theme: 'light' | 'dark' | 'system' = 'dark') {
  const isDark = theme === 'dark' || (theme === 'system' && 
    (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches));
  
  return {
    bg: isDark ? 'bg-gray-950' : 'bg-white',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    border: isDark ? 'border-gray-800' : 'border-gray-200',
    hover: isDark ? 'hover:bg-gray-900' : 'hover:bg-gray-50',
    card: isDark ? 'bg-gray-900/50' : 'bg-white',
    cardBorder: isDark ? 'border-gray-800' : 'border-gray-200',
    cardHover: isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50',
    input: isDark ? 'bg-gray-900/50 border-gray-800 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
    button: isDark ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white',
    buttonSecondary: isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900',
  };
}

// Helper to get CSS variable value
export function getCssVar(variable: string, element = document.documentElement) {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(element).getPropertyValue(variable).trim();
}

// Helper to set CSS variable
export function setCssVar(variable: string, value: string, element = document.documentElement) {
  if (typeof window === 'undefined') return;
  element.style.setProperty(variable, value);
}
