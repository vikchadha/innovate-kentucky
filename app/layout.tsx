import "./globals.css";

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { ThemeWrapper } from '@/components/theme-wrapper';

// Configure Inter variable font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: "Innovate Kentucky",
  description: "Empowering Kentucky through innovation and technology",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
          storageKey="theme-preference"
        >
          <ThemeWrapper>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
