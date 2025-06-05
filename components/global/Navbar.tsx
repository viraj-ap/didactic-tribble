'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-neutral-900 bg-black/40 px-4 py-4 backdrop-blur-lg">
      {/* Left Logo */}
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">autoMate.</p>
      </aside>

      {/* Center Nav (Desktop Only) */}
      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
        <ul className="flex items-center gap-4">
          {['Products', 'Pricing', 'Clients', 'Resources', 'Documentation', 'Enterprise'].map((item) => (
            <li key={item}>
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Actions */}
      <aside className="flex items-center gap-4">
        <Link
          href="/"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            DashBoard
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
      </aside>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden bg-black/80">
          <div className="flex h-full flex-col p-6">
            <div className="mb-8 flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex-1 bg-black/90">
              <ul className="flex flex-col gap-6">
                {['Products', 'Pricing', 'Clients', 'Resources', 'Documentation', 'Enterprise'].map((item) => (
                  <li key={item} className="border-b border-neutral-800 pb-2">
                    <Link href="#" className="text-lg font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
