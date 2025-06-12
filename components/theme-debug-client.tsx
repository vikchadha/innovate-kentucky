'use client';

import dynamic from 'next/dynamic';

// This component is only imported in client components
const ThemeDebug = dynamic(() => import('@/components/theme-debug'), { ssr: false });

export default function ThemeDebugClient() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return <ThemeDebug />;
}
