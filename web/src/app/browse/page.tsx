"use client";

import { AppLayout } from "@/components/layout/AppLayout";
import { WordCard } from "@/components/word/WordCard";
import { useState } from "react";

const SINHALA_LETTERS = [
  "අ",
  "ආ",
  "ඇ",
  "ඈ",
  "ඉ",
  "ඊ",
  "ු",
  "ූ",
  "ෙ",
  "ේ",
  "ො",
  "ෝ",
  "ක",
  "ခ",
  "ග",
  "ඝ",
  "ඞ",
];

const mockWords = [
  {
    id: "1",
    headword: "අම්මා",
    meaning: "mother; female parent",
    pronunciation: "ammā",
    partOfSpeech: "noun",
  },
  {
    id: "2",
    headword: "අඩු",
    meaning: "less; reduced; smaller",
    pronunciation: "adu",
    partOfSpeech: "adjective",
  },
  {
    id: "3",
    headword: "ඇවිල්ල",
    meaning: "light; glitter; brilliance",
    pronunciation: "avilā",
    partOfSpeech: "noun",
  },
];

export default function BrowsePage() {
  const [selectedLetter, setSelectedLetter] = useState("අ");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleFavoriteToggle = (headword: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(headword)) {
      newFavorites.delete(headword);
    } else {
      newFavorites.add(headword);
    }
    setFavorites(newFavorites);
  };

  return (
    <AppLayout>
      <div className="flex flex-col min-h-full">
        {/* Browse Header */}
        <section className="bg-side border-b border-line py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-heading-lg font-bold text-ink mb-6">Browse Words</h1>
            <p className="text-ink2 mb-6">
              Select a letter to browse words that start with it.
            </p>

            {/* Letter selector */}
            <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
              {SINHALA_LETTERS.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`h-12 rounded-lg font-sinhala text-lg font-bold transition-colors ${
                    selectedLetter === letter
                      ? "bg-blue-primary text-white"
                      : "bg-white border border-line text-ink hover:bg-white hover:border-blue-primary"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Words List */}
        <section className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-ink mb-6">
              Words starting with{" "}
              <span className="font-sinhala text-blue-primary">{selectedLetter}</span>
            </h2>

            <div className="space-y-4">
              {mockWords.map((word) => (
                <WordCard
                  key={word.id}
                  headword={word.headword}
                  meaning={word.meaning}
                  pronunciation={word.pronunciation}
                  partOfSpeech={word.partOfSpeech}
                  isFavorite={favorites.has(word.headword)}
                  onFavoriteToggle={handleFavoriteToggle}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-line hover:bg-side">
                ← Previous
              </button>
              <div className="px-4 py-2">Page 1</div>
              <button className="px-4 py-2 rounded-lg border border-line hover:bg-side">
                Next →
              </button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
