"use client";

import { useState } from "react";
import { SearchBox } from "@/components/search/SearchBox";
import { SinhalaKeyboard } from "@/components/search/SinhalaKeyboard";
import { Logo } from "@/components/branding/Logo";

const SINHALA_CHARACTERS = [
  ["අ", "ආ", "ඇ", "ඈ", "ඉ", "ඊ", "උ", "ඌ", "ඍ", "ඎ"],
  ["එ", "ඒ", "ඓ", "ඔ", "ඕ", "ඖ", "ක", "ඛ", "ག", "ඝ"],
  ["ඞ", "ඟ", "ච", "ඡ", "ජ", "ඣ", "ට", "ඨ", "ඩ", "ඪ"],
  ["ණ", "ඬ", "ත", "ථ", "ද", "ධ", "න", "ඳ", "ප", "ඵ"],
  ["බ", "ඹ", "ම", "ඹ", "ය", "ර", "ල", "ව", "ශ", "ෂ"],
  ["ස", "හ", "ළ", "ෆ", "්", "ා", "ි", "ී "],
];

const INPUT_METHODS = [
  {
    icon: "⌨️",
    title: "Type in Sinhala",
    description: "Use your system's Sinhala keyboard (e.g. Wijesekara, Kaputa, Noto).",
  },
  {
    icon: "🔤",
    title: "Type in English (Singlish)",
    description: "e.g. laabala, laba, dharma and see suggestions.",
  },
  {
    icon: "📋",
    title: "Paste from anywhere",
    description: "Copy and paste Sinhala text from a document or website.",
  },
];

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
    // Mock suggestions
    setSuggestions([
      {
        word: "ලබාල",
        pronunciation: "/lā-ba-lā/",
        type: "Adjective · young (in age)",
      },
      { word: "ලභ", pronunciation: "/lābhā/", type: "Noun · benefit, profit" },
      {
        word: "ලබැදයි",
        pronunciation: "/lābha-dayī/",
        type: "Adjective · beneficial, profitable",
      },
      {
        word: "ලභය",
        pronunciation: "/lābhaya/",
        type: "Noun · benefit, gain, profit",
      },
      {
        word: "ලභ්‍යතමක",
        pronunciation: "/labbha-thmaka/",
        type: "Adjective · profitable",
      },
    ]);
  };

  const handleCharacterClick = (char: string) => {
    setQuery(query + char);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-[260px] bg-gradient-to-b from-navy to-[#1a2f5a] text-white flex flex-col fixed left-0 top-0 h-screen overflow-y-auto">
        {/* Logo */}
        <div className="p-6 border-b border-white/20">
          <div className="flex flex-col items-center gap-4 mb-2">
            <Logo variant="icon" size="lg" />
            <div className="text-center">
              <h1 className="font-sinhala font-bold text-lg text-amber-300">සුබාෂිත</h1>
              <p className="text-xs text-amber-200 tracking-widest">SUBHASHITHA</p>
              <p className="text-xs text-white/60">Sinhala-English Dictionary</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {[
            { icon: "🏠", label: "Home" },
            { icon: "🔍", label: "Search" },
            { icon: "📚", label: "Browse Words" },
            { icon: "⭐", label: "Favorites" },
            { icon: "⏱️", label: "History" },
            { icon: "📑", label: "Word Collections" },
            { icon: "⚙️", label: "Settings" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded hover:bg-white/10 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Word of the Day */}
        <div className="p-4 mx-4 mb-4 bg-white/10 rounded-lg border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">☀️</span>
            <h3 className="font-semibold text-sm">Word of the Day</h3>
          </div>
          <div className="font-sinhala text-2xl font-bold mb-2">ධර්ම</div>
          <p className="text-xs text-white/90">/dharma/</p>
          <p className="text-xs text-white/80 mt-2 mb-3">
            Noun<br/>
            Righteousness; the path of truth.
          </p>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-2 rounded transition-colors">
            Explore Word →
          </button>
        </div>

        {/* Lotus */}
        <div className="p-4 mt-auto opacity-40">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="30" fill="#E58C83" opacity="0.3" />
            <path d="M50 20 Q60 40 50 70 Q40 40 50 20" fill="#E58C83" opacity="0.5" />
          </svg>
        </div>

        {/* Footer */}
        <div className="p-4 text-xs text-white/60 border-t border-white/20 text-center">
          © 2025 Subhashitha
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[260px] bg-gradient-to-b from-white via-[#f5f5f5] to-white overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="text-xs tracking-widest text-gray-600 font-semibold">
            DISCOVER WORDS. DISCOVER WISDOM.
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded">🌙</button>
            <button className="p-2 hover:bg-gray-100 rounded">👤</button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-navy mb-4">
              Find the meaning of any{" "}
              <span className="font-sinhala text-red-600">Sinhala word</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Type in Sinhala using your keyboard or choose one of the input methods below.
            </p>

            {/* Search Box */}
            <div className="relative mb-8">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-5 py-4 rounded-full border-2 border-gray-300 focus:border-blue-primary focus:outline-none text-lg"
                  />
                  {query && (
                    <button
                      onClick={() => {
                        setQuery("");
                        setSuggestions([]);
                      }}
                      className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
                      ⌨️
                    </button>
                    <button
                      onClick={() => setShowKeyboard(!showKeyboard)}
                      className="p-2 hover:bg-gray-100 rounded text-gray-600"
                    >
                      🎹
                    </button>
                  </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center font-bold text-xl">
                  🔍
                </button>
              </div>

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden z-20">
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-5 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-start justify-between"
                    >
                      <div>
                        <div className="font-sinhala text-lg font-semibold text-navy">
                          {s.word}
                        </div>
                        <div className="text-xs text-gray-600">
                          {s.pronunciation}
                        </div>
                        <div className="text-xs text-blue-primary">{s.type}</div>
                      </div>
                      <span className="text-gray-400">›</span>
                    </button>
                  ))}
                  <button className="w-full text-left px-5 py-3 text-gray-600 font-semibold text-sm">
                    Search for "{query}"
                  </button>
                </div>
              )}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* On-Screen Keyboard */}
              <div className="col-span-1 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⌨️</span>
                  <h3 className="font-bold text-navy">On-Screen Sinhala Keyboard</h3>
                </div>
                <SinhalaKeyboard onCharacterClick={handleCharacterClick} />
              </div>

              {/* Input Methods */}
              <div className="col-span-1">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">✏️</span>
                    <h3 className="font-bold text-navy">Otherways to enter Sinhala words</h3>
                  </div>
                  <div className="space-y-4">
                    {INPUT_METHODS.map((method, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        <div className="text-2xl mb-2">{method.icon}</div>
                        <div className="font-semibold text-sm text-navy mb-1">
                          {method.title}
                        </div>
                        <p className="text-xs text-gray-600">{method.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="col-span-1">
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">💡</span>
                    <h3 className="font-bold text-navy">Tips for easy searching</h3>
                  </div>
                  <ol className="space-y-3">
                    {SEARCH_TIPS.map((tip, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="font-bold text-red-600 flex-shrink-0 w-6">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Section */}
        <section className="px-8 py-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-lg text-navy mb-4">Sponsored by</h3>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="text-4xl">🌟</div>
                <div>
                  <div className="font-bold text-sm text-navy">Navi Learning</div>
                  <p className="text-xs text-gray-600">Adaptive Learning Platform</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-2">Empowering Every Learner for a Brighter Future</h3>
              <p className="text-sm text-gray-700 mb-4">
                Personalized learning for school subjects, international syllabuses and exam preparation.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold text-sm">
                Learn More →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-navy text-white px-8 py-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span>Powered by</span>
            <span className="text-lg font-bold">Navi Learning Solutions</span>
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
          <p className="text-sm text-white/60 mt-4">
            © 2025 Subhashitha. All rights reserved. | Discover Words. Discover Wisdom.
          </p>
        </footer>
      </main>
    </div>
  );
}
