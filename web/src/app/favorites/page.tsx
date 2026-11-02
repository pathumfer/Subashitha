"use client";

import { AppLayout } from "@/components/layout/AppLayout";
import { WordCard } from "@/components/word/WordCard";
import { useState } from "react";

const mockFavorites = [
  {
    id: "1",
    headword: "අම්මා",
    meaning: "mother; female parent",
    pronunciation: "ammā",
    partOfSpeech: "noun",
    example: "මගේ අම්මා ගෙදරින්න එයි.",
  },
  {
    id: "2",
    headword: "ගිය",
    meaning: "went; departed; past",
    pronunciation: "giyā",
    partOfSpeech: "verb",
    example: "ඔහු පර දිනෙ ගිය.",
  },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Set<string>>(
    new Set(mockFavorites.map((w) => w.headword))
  );
  const [sortBy, setSortBy] = useState<"recent" | "alphabetical">("recent");

  const handleFavoriteToggle = (headword: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(headword)) {
      newFavorites.delete(headword);
    } else {
      newFavorites.add(headword);
    }
    setFavorites(newFavorites);
  };

  const visibleFavorites = mockFavorites.filter((word) =>
    favorites.has(word.headword)
  );

  return (
    <AppLayout>
      <div className="flex flex-col min-h-full">
        {/* Header */}
        <section className="bg-side border-b border-line py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-heading-lg font-bold text-ink mb-2">
              My Favorites
            </h1>
            <p className="text-ink2 mb-6">
              {visibleFavorites.length} word{visibleFavorites.length !== 1 ? "s" : ""} saved
            </p>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Filter favorites..."
                  className="w-full h-10 px-3 rounded-lg border border-line bg-white text-ink focus:outline-none focus:ring-2 focus:ring-blue-primary"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "alphabetical")}
                className="h-10 px-3 rounded-lg border border-line bg-white text-ink focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <option value="recent">Recently Added</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>

            {/* Export/Share */}
            {visibleFavorites.length > 0 && (
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-blue-primary text-white hover:bg-blue-secondary transition-colors">
                  📥 Export
                </button>
                <button className="px-4 py-2 rounded-lg border border-line hover:bg-side transition-colors">
                  📤 Share List
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Favorites List */}
        <section className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {visibleFavorites.length > 0 ? (
              <div className="space-y-4">
                {visibleFavorites.map((word) => (
                  <WordCard
                    key={word.id}
                    headword={word.headword}
                    meaning={word.meaning}
                    pronunciation={word.pronunciation}
                    partOfSpeech={word.partOfSpeech}
                    example={word.example}
                    isFavorite={true}
                    onFavoriteToggle={handleFavoriteToggle}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-2xl font-semibold text-ink mb-2">
                  No favorites yet
                </h3>
                <p className="text-ink2 mb-6">
                  Star your favorite words to build your personal study list.
                </p>
                <a
                  href="/search"
                  className="inline-block px-6 py-3 bg-blue-primary text-white rounded-lg font-semibold hover:bg-blue-secondary transition-colors"
                >
                  Start Searching →
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
