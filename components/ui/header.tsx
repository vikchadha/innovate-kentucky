"use client";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-background/90 px-3 shadow-sm ring-1 ring-foreground/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-r before:from-foreground/5 before:to-foreground/10 before:bg-[length:200%_100%] before:bg-right before:transition-all before:duration-500 hover:before:bg-left before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="flex flex-1 items-center justify-end">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
