'use client';

import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Logo />
            <nav className="flex items-center space-x-6">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </Link>
            </nav>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Innovate Kentucky. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
