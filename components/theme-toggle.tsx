'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import type { Theme } from '@/lib/theme-utils';
import { Sun, Moon, Monitor } from 'lucide-react';

interface ThemeToggleProps {
  /** Additional class names to apply to the button */
  className?: string;
  /** Size of the icon in pixels */
  iconSize?: number;
  /** Whether to show the theme label next to the icon */
  showLabel?: boolean;
  /** Whether to show the system theme option */
  showSystem?: boolean;
  /** Additional class names for the icon */
  iconClassName?: string;
  /** Additional class names for the label */
  labelClassName?: string;
}

export function ThemeToggle({ 
  className = '',
  iconSize = 20,
  showLabel = false,
  showSystem = true, // Default to true to show system option
  iconClassName = '',
  labelClassName = '',
}: ThemeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [mounted, setMounted] = useState(false);
  const { theme = 'system', setTheme, systemTheme } = useTheme();
  
  // Ensure we're in the browser before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server
  if (!mounted) {
    return (
      <button 
        type="button"
        aria-label="Toggle theme"
        className={cn(
          'p-2 rounded-md',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'focus:ring-indigo-500 dark:focus:ring-indigo-400',
          'transition-colors duration-200',
          className
        )}
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  // Handle direct theme selection
  const selectTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
  };

  // Get the current theme to display (resolves 'system' to actual theme)
  const displayTheme = theme === 'system' ? systemTheme || 'light' : theme;
  const isDark = displayTheme === 'dark';
  
  // Get the appropriate icon based on theme
  const getThemeIcon = () => {
    if (theme === 'system') {
      return (
        <Monitor 
          size={iconSize} 
          className={cn(
            'text-gray-700 dark:text-gray-200',
            'transition-transform duration-300',
            iconClassName
          )} 
          aria-hidden="true"
        />
      );
    }
    
    const Icon = isDark ? Sun : Moon;
    return (
      <Icon 
        size={iconSize} 
        className={cn(
          'text-gray-700 dark:text-gray-200',
          'transition-transform duration-300',
          iconClassName,
          { 'rotate-12': theme !== 'system' }
        )} 
        aria-hidden="true"
      />
    );
  };

  // Get the label for the current theme
  const getThemeLabel = () => {
    if (!showLabel) return null;
    
    let label = '';
    if (theme === 'system') {
      label = 'System';
    } else {
      label = isDark ? 'Light' : 'Dark';
      if (showSystem) label += ' Mode';
    }
    
    return (
      <span 
        className={cn(
          'ml-2 text-sm font-medium',
          'text-gray-700 dark:text-gray-200',
          'transition-colors duration-200',
          labelClassName
        )}
      >
        {label}
      </span>
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
        className={cn(
          'p-2 rounded-md',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'focus:ring-indigo-500 dark:focus:ring-indigo-400',
          'transition-colors duration-200',
          'hover:bg-gray-100 dark:hover:bg-gray-800',
          className
        )}
      >
        <div className="flex items-center">
          {getThemeIcon()}
          {getThemeLabel()}
          <svg
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      {/* Theme selector dropdown */}
      <div
        className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-200 ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div className="py-1">
          <button
            onClick={() => {
              selectTheme('light');
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm flex items-center ${
              theme === 'light'
                ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-100'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Sun className="mr-2 h-4 w-4" />
            Light
          </button>
          <button
            onClick={() => {
              selectTheme('dark');
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm flex items-center ${
              theme === 'dark'
                ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-100'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Moon className="mr-2 h-4 w-4" />
            Dark
          </button>
          {showSystem && (
            <button
              onClick={() => {
                selectTheme('system');
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                theme === 'system'
                  ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Monitor className="mr-2 h-4 w-4" />
              System
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
