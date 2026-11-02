"use client";

import { useState } from "react";
import Link from "next/link";
import { SinhalaKeyboard } from "@/components/search/SinhalaKeyboard";

const SEARCH_TIPS = [
  "Type directly in Sinhala using your computer's Sinhala keyboard.",
  "You can also type in English (e.g. laabala, laba, dharma) and see suggestions.",
  "Use the on-screen keyboard. Click the keyboard icon to type Sinhala.",
  "Paste a Sinhala word. Copy and paste from any website or document.",
  "Select and search. Highlight a word on any page and search.",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [suggestions, setSuggestions] = useState<
    Array<{ word: string; pronunciation: string; type: string }>
  >([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setSuggestions([
      {
        word: "ලබාල",
        pronunciation: "/lā-ba-lā/",
        type: "Adjective · young (in age)",
      },
      { word: "ලභ", pronunciation: "/lābhā/", type: "Noun · benefit, profit" },
    ]);
  };

  const handleCharacterClick = (char: string) => {
    setQuery(query + char);
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-line2 px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xs tracking-[0.24em] font-semibold text-ink2">
            DISCOVER WORDS. DISCOVER WISDOM.
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-side rounded-lg transition">
              🌙
            </button>
            <button className="p-2 hover:bg-side rounded-lg transition">
              👤
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Hero Title */}
        <section className="mb-8">
          <h1 className="text-heading-lg font-bold text-navy mb-4">
            Find the meaning of any{" "}
            <span className="font-sinhala text-red-primary">Sinhala word</span>
          </h1>
          <p className="text-lg text-ink2">
            Type in Sinhala, Singlish or English — we'll work out which. Or tap letters on the keyboard below.
          </p>
        </section>

        {/* Search Box */}
        <section className="mb-8">
          <div className="relative">
            <div className="flex gap-3 items-center">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Type a word — සිංහල, Singlish or English"
                  className="w-full h-[72px] px-7 text-xl rounded-[36px] border-2 border-gray-300 focus:border-blue-primary focus:outline-none font-sinhala"
                />
                {query && (
                  <button
                    onClick={() => {
                      setQuery("");
                      setSuggestions([]);
                    }}
                    className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                  >
                    ×
                  </button>
                )}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900">
                    ⌨️
                  </button>
                  <button
                    onClick={() => setShowKeyboard(!showKeyboard)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    🎹
                  </button>
                </div>
              </div>
              <button className="w-[62px] h-[62px] rounded-full bg-red-primary hover:bg-red-hover text-white flex items-center justify-center text-2xl font-bold transition flex-shrink-0">
                🔍
              </button>
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-line rounded-xl shadow-lg overflow-hidden z-20">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-5 py-3 hover:bg-side border-b border-line last:border-b-0 flex items-start justify-between transition"
                  >
                    <div>
                      <div className="font-sinhala text-2xl font-bold text-red-primary">
                        {s.word}
                      </div>
                      <div className="text-sm text-ink2 mt-1">
                        {s.pronunciation} · {s.type}
                      </div>
                    </div>
                    <span className="text-gray-400">›</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Three Column Grid */}
        <section className="grid grid-cols-3 gap-4 mb-8">
          {/* Keyboard Panel */}
          <div className="bg-side border border-line rounded-lg p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⌨️</span>
              <h2 className="font-bold text-navy text-sm flex-1">
                On-Screen Sinhala Keyboard
              </h2>
              <span className="text-xs text-ink2">Tap a letter to start</span>
            </div>
            <div className="max-h-[300px] overflow-auto">
              <SinhalaKeyboard onCharacterClick={handleCharacterClick} />
            </div>
          </div>

          {/* Input Methods */}
          <div className="space-y-4">
            <div className="bg-white border border-line rounded-lg p-4 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✏️</span>
                <h2 className="font-bold text-navy text-sm">
                  Other ways to enter Sinhala words
                </h2>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-100 transition">
                  <div className="text-2xl mb-2">⌨️</div>
                  <div className="font-semibold text-sm text-navy mb-1">
                    Type in Sinhala
                  </div>
                  <p className="text-xs text-ink2">
                    Use your Sinhala keyboard (e.g. Wijesekara, Phonetic).
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-100 transition">
                  <div className="text-2xl mb-2">🔤</div>
                  <div className="font-semibold text-sm text-navy mb-1">
                    Type in English (Singlish)
                  </div>
                  <p className="text-xs text-ink2">
                    e.g. laabala, amma, dharma – get suggested words.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-100 transition">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="font-semibold text-sm text-navy mb-1">
                    Paste from anywhere
                  </div>
                  <p className="text-xs text-ink2">
                    Paste a sentence — we find every word in it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💡</span>
              <h2 className="font-bold text-navy text-sm">
                Tips for easy searching
              </h2>
            </div>
            <ol className="space-y-2">
              {SEARCH_TIPS.map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-xs leading-relaxed">
                  <span className="font-bold text-red-primary flex-shrink-0 w-5">
                    {idx + 1}
                  </span>
                  <span className="text-ink2">{tip}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Sponsorship Section */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-line rounded-lg p-6 shadow-xs">
            <h3 className="font-bold text-navy mb-4 text-sm">Sponsored by</h3>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="text-4xl flex-shrink-0">🌟</div>
              <div>
                <div className="font-bold text-sm text-navy">Novi Learning</div>
                <p className="text-xs text-ink2">Adaptive Learning Platform</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-line rounded-lg p-6 shadow-xs">
            <h3 className="font-bold text-navy mb-3 text-sm">
              Empowering Every Learner for a Brighter Future
            </h3>
            <p className="text-xs text-ink2 mb-4">
              Personalized learning for school subjects, international syllabuses and exam preparation.
            </p>
            <button className="bg-red-primary hover:bg-red-hover text-white px-4 py-2 rounded-lg font-semibold text-xs transition">
              Learn More →
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-navy text-white px-8 py-8 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-sm mb-4">
            © 2026 Subhashitha. All rights reserved.
          </div>
          <div className="flex justify-center gap-8 text-sm mb-4 flex-wrap">
            <Link
              href="/about"
              className="hover:text-amber transition"
            >
              About
            </Link>
          </div>
          <p className="text-sm text-white/70">
            Discover Words. Discover Wisdom.
          </p>
        </div>
      </footer>
    </div>
  );
}
