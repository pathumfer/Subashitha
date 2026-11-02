"use client";

import Link from "next/link";
import { useState } from "react";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-[296px] flex-none sticky bg-side border-r border-line2 flex flex-col overflow-hidden transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-30`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex-none h-[125px] bg-gradient-to-br from-blue-primary via-navy to-[#0c1630] rounded-br-[14px] text-decoration-none relative overflow-hidden group"
        >
          <div className="absolute left-4 top-6 w-[68px] h-[68px]">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              aria-hidden="true"
            >
              <g fill="none" stroke="#E9C46A" strokeWidth="2.4" strokeLinejoin="round">
                <path d="M50 18c9 12 9 32 0 46-9-14-9-34 0-46z" />
                <path d="M50 64c-4-14-14-26-28-30 0 16 12 28 28 30z" />
                <path d="M50 64c4-14 14-26 28-30 0 16-12 28-28 30z" />
                <path d="M50 64c-12-6-28-6-38 2 12 8 26 6 38-2z" />
                <path d="M50 64c12-6 28-6 38 2-12 8-26 6-38-2z" />
                <path d="M24 78c16 6 36 6 52 0" />
              </g>
            </svg>
          </div>
          <div className="absolute left-[94px] top-[22px]">
            <h1 className="font-sinhala font-black text-[36px] text-[#E9C46A] leading-tight">
              සුභාෂිත
            </h1>
            <p className="text-[15px] tracking-[0.06em] text-[#F3E3B5]">SUBHASHITHA</p>
            <p className="text-[11px] text-[#C9D1E4] tracking-[0.04em]">
              Sinhala-English Dictionary
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-0.5 px-3.5 pt-3" aria-label="Primary">
          <NavLink href="/" icon="🏠">
            Home
          </NavLink>
          <NavLink href="/search" icon="🔍">
            Search
          </NavLink>
          <NavLink href="/browse" icon="📚">
            Browse Words
          </NavLink>
          <NavLink href="/favorites" icon="⭐">
            Favorites
          </NavLink>
        </nav>

        {/* Spacer */}
        <div className="h-px bg-line2 my-3.5 mx-6"></div>

        {/* Word of the Day */}
        <section className="relative z-10 mx-5.5 mt-5 p-3.5 bg-white rounded-[12px] box-shadow-xs flex-none" aria-labelledby="wotdh">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">☀️</span>
            <h2 id="wotdh" className="text-base font-medium">
              Word of the Day
            </h2>
          </div>
          <div className="font-sinhala text-[36px] font-black text-red-primary leading-tight">
            සුභා
          </div>
          <div className="text-[17px] text-ink2 mt-2">auspicious</div>
          <p className="font-sinhala text-[15px] text-ink2 mt-2 mb-3">
            good, favourable
          </p>
          <button className="w-full h-10 px-4.5 rounded-lg bg-navy text-white text-base font-medium flex items-center justify-center gap-2 hover:bg-[#1c2f57]">
            Explore Word →
          </button>
        </section>

        {/* Spacer for lotus */}
        <div className="mt-auto flex-none h-[170px] opacity-95">
          <svg
            className="w-full h-full"
            viewBox="0 0 296 170"
            preserveAspectRatio="xMidYMax meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#F6C9C0" />
                <stop offset="1" stopColor="#E58C83" />
              </linearGradient>
            </defs>
            <path
              d="M0 150c60-14 120-10 170 4s90 10 126-4v20H0z"
              fill="#D9E4DA"
            />
            <g transform="translate(150 132)">
              <path
                d="M0-80c18 22 18 56 0 78-18-22-18-56 0-78z"
                fill="url(#lg)"
              />
            </g>
          </svg>
        </div>
      </aside>

      {/* Close on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/45 lg:hidden z-20"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-5 h-11 px-5 rounded-lg text-[#1C2A4A] no-underline text-lg hover:bg-[#EEF2F8]"
    >
      <span className="text-2xl">{icon}</span>
      {children}
    </Link>
  );
}
