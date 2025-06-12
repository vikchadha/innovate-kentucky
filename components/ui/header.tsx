"use client";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
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
          <nav className="hidden md:flex md:grow items-center">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/help/frequently-asked-questions"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Help Centre
                </Link>
              </li>
              <li className="ml-2">
                <ThemeToggle />
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/newsletter"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-background/80 text-foreground/80 hover:bg-foreground/5 hover:text-foreground transition-colors border border-foreground/10 rounded-lg px-4 py-1.5 text-sm font-medium"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg px-4 py-1.5 text-sm font-medium shadow-sm"
              >
                Register
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
