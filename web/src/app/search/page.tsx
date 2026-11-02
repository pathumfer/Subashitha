"use client";

import { AppLayout } from "@/components/layout/AppLayout";
import { SearchBox } from "@/components/search/SearchBox";
import { WordCard } from "@/components/word/WordCard";
import { useState } from "react";

interface SearchResult {
  id: string;
  headword: string;
  meaning: string;
  pronunciation?: string;
  partOfSpeech?: string;
  example?: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setLoading(true);

    // TODO: Call API /api/v1/search?q=
    setTimeout(() => {
      setResults([
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
          headword: "අඩු",
          meaning: "less; reduced; smaller",
          pronunciation: "adu",
          partOfSpeech: "adjective",
          example: "මේ පුඩු ගිණින අඩුයි.",
        },
        {
          id: "3",
          headword: "ඇවිල්ල",
          meaning: "light; glitter; brilliance",
          pronunciation: "avilā",
          partOfSpeech: "noun",
          example: "ඉතිරු ඇවිල්ලත් අඩුයි.",
        },
      ]);
      setLoading(false);
    }, 500);
  };

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
        {/* Search Header */}
        <section className="bg-side border-b border-line py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-heading-lg font-bold text-ink mb-6">Search</h1>
            <SearchBox onSearch={handleSearch} placeholder="Find a word..." />
          </div>
        </section>

        {/* Results */}
        <section className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {query && (
              <div className="mb-6">
                <p className="text-ink2">
                  {loading
                    ? "Searching..."
                    : `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`}
                </p>
              </div>
            )}

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="inline-block animate-spin text-4xl mb-4">⌛</div>
                  <p className="text-ink2">Searching...</p>
                </div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4">
                {results.map((result) => (
                  <WordCard
                    key={result.id}
                    headword={result.headword}
                    meaning={result.meaning}
                    pronunciation={result.pronunciation}
                    partOfSpeech={result.partOfSpeech}
                    example={result.example}
                    isFavorite={favorites.has(result.headword)}
                    onFavoriteToggle={handleFavoriteToggle}
                  />
                ))}
              </div>
            ) : query ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-ink mb-2">
                  No results found
                </h3>
                <p className="text-ink2">
                  Try searching for a different word or use Singlish transliteration.
                </p>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-ink mb-2">
                  Start searching
                </h3>
                <p className="text-ink2">
                  Type a Sinhala word, English meaning, or Singlish transliteration above.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
