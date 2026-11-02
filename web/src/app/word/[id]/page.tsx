"use client";

import { useState } from "react";
import Link from "next/link";

interface WordPageProps {
  params: {
    id: string;
  };
}

// Mock word data
const mockWordData: Record<string, any> = {
  dharma: {
    id: "dharma",
    headword: "ධර්ම",
    pronunciation: "/dharma/",
    partOfSpeech: "Noun",
    sinhalaDefinition: "සද්ධර්මය, යහපතෙහි මාර්ගය।",
    englishMeanings: [
      {
        meaning: "righteousness",
        sinhalaExplanation: "නීතිමත් හා ධර්මසම්මත ක්‍රියාවලි",
        register: "Common",
      },
      {
        meaning: "the path of truth",
        sinhalaExplanation: "සත්‍යතාවයේ මාර්ගය",
        register: "Religious",
      },
      {
        meaning: "doctrine",
        sinhalaExplanation: "ශිෂ්ටාචාර සම්මතයි",
        register: "Formal",
      },
    ],
    examples: [
      {
        sinhala: "ධර්ම මාර්ගයේ ගමන් කරන්න।",
        english: "Walk the path of righteousness.",
      },
      {
        sinhala: "බුද්ධ ධර්ම ගැඹුරු තෙරුම් ඇත.",
        english: "Buddhist doctrine has deep meaning.",
      },
    ],
    synonyms: [
      { sinhala: "දහම", meaning: "ධර්මය; ඉගැන්වීම" },
    ],
    antonyms: [
      { sinhala: "අධර්ම", meaning: "අයුක්තිය" },
    ],
    relatedWords: [
      { sinhala: "දහම", type: "root word" },
      { sinhala: "ධාර්මික", type: "adjective — righteous" },
    ],
    status: "verified",
  },
  amma: {
    id: "amma",
    headword: "අම්මා",
    pronunciation: "/ammā/",
    partOfSpeech: "Noun",
    sinhalaDefinition: "මව.",
    englishMeanings: [
      {
        meaning: "mother",
        sinhalaExplanation: "දරුවාට පතුරු දුන් කාන්තාවන්.",
        register: "Common",
      },
      {
        meaning: "mom",
        sinhalaExplanation: "අම්මා (අනौපචාරික)",
        register: "Informal",
      },
    ],
    examples: [
      {
        sinhala: "අම්මා ගෙදර ඉන්නවා.",
        english: "Mother is at home.",
      },
      {
        sinhala: "අම්මාගේ ආදරය උතුම්.",
        english: "A mother's love is noble.",
      },
    ],
    synonyms: [
      { sinhala: "මව", meaning: "ස්ත්‍රී ලිංගික පිතෘ" },
    ],
    antonyms: [],
    relatedWords: [
      { sinhala: "තාත්තා", type: "noun — father" },
      { sinhala: "ඉරුමා", type: "noun — parents" },
    ],
    status: "verified",
  },
};

export default function WordPage({ params }: WordPageProps) {
  const word = mockWordData[params.id];
  const [isFavorite, setIsFavorite] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  if (!word) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🧭</div>
          <h1 className="text-2xl font-bold text-ink mb-2">Word not found</h1>
          <p className="text-ink2 mb-6">The word you're looking for doesn't exist in our dictionary.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="border-b border-line2 bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-ink2 hover:text-ink transition">
              ← Home
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-lg transition ${
                  isFavorite
                    ? "bg-amber-100 text-amber-600"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {isFavorite ? "★" : "☆"}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600">
                📤
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600">
                📋
              </button>
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600"
                >
                  ⋮
                </button>
                {openMenu === "more" && (
                  <div className="absolute right-0 mt-1 w-48 bg-white border border-line rounded-lg shadow-lg z-50">
                    <button className="w-full text-left px-4 py-2 hover:bg-side transition text-sm">
                      ✎ Suggest correction
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-side transition text-sm">
                      ⚑ Report problem
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-side transition text-sm">
                      ❝ Cite this word
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Word Header */}
          <div>
            <div className="flex items-baseline gap-3 mb-3">
              <h1 className="text-5xl font-bold text-red-primary font-sinhala">
                {word.headword}
              </h1>
              {word.status === "verified" && (
                <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                  ✓ Verified
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="text-lg">{word.pronunciation}</span>
              <span className="text-sm font-semibold px-3 py-1 bg-gray-100 rounded-full">
                {word.partOfSpeech}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sinhala Definition */}
            <section className="bg-amber-50 border border-amber-100 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-3">
                Sinhala Definition
              </h2>
              <p className="text-lg text-ink font-sinhala">
                {word.sinhalaDefinition}
              </p>
            </section>

            {/* English Meanings */}
            <section>
              <h2 className="text-lg font-semibold text-ink mb-4">
                English Meanings
              </h2>
              <div className="space-y-4">
                {word.englishMeanings.map((m: any, idx: number) => (
                  <div
                    key={idx}
                    className="border border-line rounded-lg p-4 hover:shadow-sm transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-ink">{m.meaning}</h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                        {m.register}
                      </span>
                    </div>
                    <p className="text-sm text-ink2 font-sinhala">{m.sinhalaExplanation}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Examples */}
            {word.examples.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-ink mb-4">
                  Example Sentences
                </h2>
                <ol className="space-y-4 list-decimal list-inside">
                  {word.examples.map((ex: any, idx: number) => (
                    <li key={idx} className="text-sm">
                      <span className="font-sinhala font-semibold text-ink">
                        {ex.sinhala}
                      </span>
                      <br />
                      <span className="text-gray-600">{ex.english}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Synonyms */}
            {word.synonyms.length > 0 && (
              <section className="bg-green-50 border border-green-100 rounded-lg p-6">
                <h2 className="text-base font-semibold text-green-900 mb-4">
                  Synonyms
                </h2>
                <div className="space-y-3">
                  {word.synonyms.map((syn: any, idx: number) => (
                    <Link
                      key={idx}
                      href={`/word/${syn.sinhala}`}
                      className="block p-3 bg-white rounded-lg border border-green-100 hover:border-green-300 transition"
                    >
                      <div className="font-sinhala font-bold text-red-primary">
                        {syn.sinhala}
                      </div>
                      <div className="text-xs text-gray-600 font-sinhala">
                        {syn.meaning}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Antonyms */}
            {word.antonyms.length > 0 && (
              <section className="bg-red-50 border border-red-100 rounded-lg p-6">
                <h2 className="text-base font-semibold text-red-900 mb-4">
                  Antonyms
                </h2>
                <div className="space-y-3">
                  {word.antonyms.map((ant: any, idx: number) => (
                    <Link
                      key={idx}
                      href={`/word/${ant.sinhala}`}
                      className="block p-3 bg-white rounded-lg border border-red-100 hover:border-red-300 transition"
                    >
                      <div className="font-sinhala font-bold text-red-primary">
                        {ant.sinhala}
                      </div>
                      <div className="text-xs text-gray-600 font-sinhala">
                        {ant.meaning}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related Words */}
            {word.relatedWords.length > 0 && (
              <section>
                <h2 className="text-base font-semibold text-ink mb-4">
                  Related Words
                </h2>
                <div className="space-y-2">
                  {word.relatedWords.map((rel: any, idx: number) => (
                    <Link
                      key={idx}
                      href={`/word/${rel.sinhala}`}
                      className="block p-2 hover:bg-side rounded transition"
                    >
                      <span className="font-sinhala font-bold text-navy">
                        {rel.sinhala}
                      </span>
                      <span className="text-xs text-gray-600 ml-2">
                        {rel.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
