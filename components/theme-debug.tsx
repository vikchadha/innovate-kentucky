'use client';

import { useTheme } from 'next-themes';

const ThemeDebug = () => {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  
  return (
    <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg border shadow-lg z-50 text-xs">
      <div className="font-bold mb-2">Theme Debug</div>
      <div>Theme: {String(theme)}</div>
      <div>System: {String(systemTheme)}</div>
      <div>Resolved: {String(resolvedTheme)}</div>
      <div className="mt-2">
        HTML Classes: <span className="font-mono">{typeof document !== 'undefined' ? document.documentElement.className : 'Loading...'}</span>
      </div>
      <div>
        Body Classes: <span className="font-mono">{typeof document !== 'undefined' ? document.body.className : 'Loading...'}</span>
      </div>
    </div>
  );
};

export default ThemeDebug;
