"use client";

import { AppLayout } from "@/components/layout/AppLayout";
import { SearchBox } from "@/components/search/SearchBox";
import { useState } from "react";

export default function Home() {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    console.log("Search for:", query);
    // TODO: Call API
  };

  return (
    <AppLayout>
      <div className="flex flex-col min-h-full">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-primary via-navy to-[#0c1630] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sinhala text-heading-xxl font-black mb-4">
              සුභාෂිත
            </h1>
            <p className="text-2xl font-semibold mb-2 text-[#F3E3B5]">
              Sinhala ↔ English Dictionary
            </p>
            <p className="text-lg text-[#C9D1E4] mb-12 max-w-2xl mx-auto">
              A free, comprehensive Sinhala-English dictionary for learners, students, and writers. Search meanings, explore words, and build your vocabulary.
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto">
              <SearchBox
                onSearch={handleSearch}
                placeholder="Search Sinhala or English..."
              />
            </div>

            {/* Quick tips */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-[#E9C46A]">
                <span>💡</span> Type Sinhala or English words
              </div>
              <div className="flex items-center gap-2 text-[#E9C46A]">
                <span>🔤</span> Use Singlish transliteration
              </div>
              <div className="flex items-center gap-2 text-[#E9C46A]">
                <span>⭐</span> Save favorites
              </div>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z"
                fill="#FBF9F6"
              />
            </svg>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-navy mb-12 text-center">
              What you can do
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded-lg border border-line shadow-sm hover:shadow-base transition-shadow">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-xl font-semibold text-ink mb-2">
                  Quick Search
                </h3>
                <p className="text-ink2 text-base">
                  Find meanings instantly. Type Sinhala, English, or use Singlish transliteration.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-white rounded-lg border border-line shadow-sm hover:shadow-base transition-shadow">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-semibold text-ink mb-2">
                  Browse Words
                </h3>
                <p className="text-ink2 text-base">
                  Explore by letter, part of speech, or browse recent entries to learn new words.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-white rounded-lg border border-line shadow-sm hover:shadow-base transition-shadow">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-xl font-semibold text-ink mb-2">
                  Save Favorites
                </h3>
                <p className="text-ink2 text-base">
                  Build your personal word list and export it for offline study or reference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results (if any) */}
        {searchResults.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-line">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-ink mb-6">Results</h2>
              <div className="space-y-4">
                {searchResults.map((result, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg border border-line hover:bg-side cursor-pointer">
                    <p className="text-ink">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-auto py-12 px-4 sm:px-6 lg:px-8 bg-side border-t border-line">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-ink mb-4">
              Ready to explore?
            </h2>
            <p className="text-ink2 mb-6">
              Start searching now or browse our collection of Sinhala words.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-6 py-3 bg-blue-primary text-white rounded-lg font-semibold hover:bg-blue-secondary transition-colors">
                Search Now
              </button>
              <button className="px-6 py-3 bg-white text-blue-primary border border-blue-primary rounded-lg font-semibold hover:bg-blue-primary hover:text-white transition-colors">
                Browse Words
              </button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
