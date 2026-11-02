"use client";

import { useState } from "react";

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-bg border-b border-line flex items-center justify-between h-[60px] px-4 lg:px-6">
      {/* Left: Menu toggle (mobile) + title */}
      <div className="flex items-center gap-3 flex-1">
        <button
          className="lg:hidden w-10 h-10 -ml-2 flex items-center justify-center text-ink2 hover:bg-side rounded-md"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-ink">සුභාෂිත</h1>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <button
          className="w-10 h-10 flex items-center justify-center text-ink2 hover:bg-side rounded-md"
          aria-label="Settings"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v16.5A2.25 2.25 0 003.75 22.5h16.5a2.25 2.25 0 002.25-2.25V13.5"
            />
          </svg>
        </button>
        <button
          className="w-10 h-10 flex items-center justify-center text-ink2 hover:bg-side rounded-md"
          aria-label="Help"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
