"use client";

import { useState } from "react";
import Link from "next/link";

const SINGLISH_MAP = [
  { code: "a", sinhala: "අ" },
  { code: "aa", sinhala: "ආ" },
  { code: "ae", sinhala: "ඇ" },
  { code: "i", sinhala: "ඉ" },
  { code: "ii/ee", sinhala: "ඊ" },
  { code: "u", sinhala: "උ" },
  { code: "e", sinhala: "එ" },
  { code: "o", sinhala: "ඔ" },
  { code: "k", sinhala: "ක" },
  { code: "g", sinhala: "ග" },
  { code: "ch", sinhala: "ච" },
  { code: "t", sinhala: "ට" },
  { code: "th", sinhala: "ත" },
  { code: "d", sinhala: "ඩ" },
  { code: "dh", sinhala: "ද" },
  { code: "n", sinhala: "න" },
  { code: "nd", sinhala: "ඳ" },
  { code: "p", sinhala: "ප" },
  { code: "b", sinhala: "බ" },
  { code: "m", sinhala: "ම" },
  { code: "y", sinhala: "ය" },
  { code: "r", sinhala: "ර" },
  { code: "l", sinhala: "ල" },
  { code: "L", sinhala: "ළ" },
  { code: "w/v", sinhala: "ව" },
  { code: "s", sinhala: "ස" },
  { code: "sh", sinhala: "ශ" },
  { code: "h", sinhala: "හ" },
];

export default function TypeSinglishPage() {
  const [query, setQuery] = useState("");

  const mockResults = query
    ? [
        { headword: "ලස්සන", meaning: "beautiful; pretty", pronunciation: "/lassana/" },
        { headword: "ලෙස", meaning: "like; as; manner", pronunciation: "/lesa/" },
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
          <h1 className="text-4xl font-bold text-ink mb-2">Type in English (Singlish)</h1>
          <p className="text-ink2">
            Type the word the way it sounds. Spelling doesn't have to be exact — <b>th/t</b>,{" "}
            <b>w/v</b>, <b>aa/a</b> all match.
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
            placeholder="e.g. laabaala, amma, dharma"
            className="w-full text-xl px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-blue-primary focus:outline-none"
            autoFocus
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>

        {/* Preview */}
        {query && (
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm text-blue-700 font-semibold">PREVIEW</span>
              <span className="text-3xl font-bold font-sinhala text-navy">
                {query.replace(/th/g, "ත").replace(/a/g, "ා")}
              </span>
              <span className="text-sm text-blue-700">A preview only — pick a real word below.</span>
            </div>
          </div>
        )}

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
        ) : null}

        {/* Letter Guide */}
        <section className="bg-white border border-line rounded-lg p-8">
          <h2 className="text-xl font-semibold text-ink mb-6">Singlish Letter Guide</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SINGLISH_MAP.map((item, idx) => (
              <div
                key={idx}
                className="bg-side border border-line rounded-lg p-4 flex items-center justify-between"
              >
                <code className="text-sm font-mono text-gray-600">{item.code}</code>
                <span className="text-xl font-sinhala text-navy font-bold">
                  {item.sinhala}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-ink2 mt-6">
            Capital <b>L</b> gives ළ and capital <b>N</b> gives ණ.
          </p>
        </section>
      </div>
    </div>
  );
}
