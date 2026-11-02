"use client";

import { useState } from "react";
import Link from "next/link";

export default function TypeSinhalaPage() {
  const [query, setQuery] = useState("");

  const mockResults = query
    ? [
        { headword: "ලස්සන", meaning: "beautiful; pretty", pronunciation: "/lassana/" },
        { headword: "ලෙස", meaning: "like; as; manner", pronunciation: "/lesa/" },
        { headword: "ලබා", meaning: "obtained; received", pronunciation: "/labā/" },
      ]
    : [];

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-white border-b border-line2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-ink2 hover:text-ink mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-ink mb-2">Type in Sinhala</h1>
          <p className="text-ink2">
            Use your computer's Sinhala keyboard. Results appear as you type.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="උදා: ළාබාල"
            className="w-full text-2xl font-sinhala px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-blue-primary focus:outline-none"
            lang="si"
            autoFocus
          />
        </div>

        {/* Results */}
        {query && mockResults.length > 0 ? (
          <div className="space-y-4 mb-12">
            {mockResults.map((word, idx) => (
              <Link
                key={idx}
                href={`/word/${word.headword}`}
                className="block p-4 bg-white border border-line rounded-lg hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-sinhala text-red-primary mb-1">
                      {word.headword}
                    </h3>
                    <p className="text-gray-600">
                      {word.pronunciation} · {word.meaning}
                    </p>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              </Link>
            ))}
          </div>
        ) : query && mockResults.length === 0 ? (
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-12">
            <p className="text-orange-900">
              No word starts with{" "}
              <span className="font-sinhala font-bold">{query}</span>
            </p>
            <Link href="/search" className="text-orange-700 hover:underline text-sm mt-2 inline-block">
              See closest matches →
            </Link>
          </div>
        ) : null}

        {/* Setup Instructions */}
        <section className="bg-white border border-line rounded-lg p-8">
          <h2 className="text-xl font-semibold text-ink mb-6">
            Don't have a Sinhala keyboard?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-navy mb-2">Windows 10/11</h3>
              <p className="text-sm text-ink2">
                Settings › Time & language › Language › Add Sinhala (Wijesekara or Phonetic)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy mb-2">macOS</h3>
              <p className="text-sm text-ink2">
                System Settings › Keyboard › Input Sources › + Sinhala
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy mb-2">Android</h3>
              <p className="text-sm text-ink2">
                Gboard › Languages › Add Sinhala
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy mb-2">iPhone</h3>
              <p className="text-sm text-ink2">
                Settings › General › Keyboard › Keyboards › Add Sinhala
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-line">
            <p className="text-ink2 mb-4">No keyboard available?</p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/"
                className="px-6 py-3 bg-blue-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Use on-screen keyboard
              </Link>
              <Link
                href="/type-singlish"
                className="px-6 py-3 border border-line rounded-lg font-semibold hover:bg-side transition"
              >
                Type in Singlish
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
