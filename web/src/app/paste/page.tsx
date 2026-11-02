"use client";

import { useState } from "react";
import Link from "next/link";

export default function PastePage() {
  const [pastedText, setPastedText] = useState("");
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // Simple word extraction (mock)
  const words = pastedText
    ? pastedText
        .split(/[\s.,!?;:"'""''()\[\]—–-]+/)
        .filter((w) => w.length > 0 && /[^\x00-\x7F]/.test(w))
    : [];

  const wordSet = [...new Set(words)];

  const mockDictionary: Record<string, any> = {
    අම්මා: {
      found: true,
      headword: "අම්මා",
      meaning: "mother; female parent",
      pronunciation: "/ammā/",
      partOfSpeech: "noun",
    },
    ගෙදර: {
      found: true,
      headword: "ගෙදර",
      meaning: "home; house",
      pronunciation: "/gedara/",
      partOfSpeech: "noun",
    },
    ඇවිල්ලා: {
      found: false,
      headword: "ඇවිල්ලා",
      message: "Not in dictionary (inflected form)",
    },
    ලාබාල: {
      found: true,
      headword: "ලාබාල",
      meaning: "young; junior; youthful",
      pronunciation: "/lābaala/",
      partOfSpeech: "adjective",
    },
  };

  const selectedData =
    selectedWord && mockDictionary[selectedWord]
      ? mockDictionary[selectedWord]
      : null;

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch {
      alert("Could not access clipboard. Use Ctrl+V in the textarea instead.");
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-white border-b border-line2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-ink2 hover:text-ink mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-ink mb-2">Paste from Anywhere</h1>
          <p className="text-ink2">
            Paste a word, sentence or paragraph. We clean hidden characters and look up every word.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Textarea */}
        <textarea
          value={pastedText}
          onChange={(e) => setPastedText(e.target.value)}
          placeholder="Paste Sinhala text here (Ctrl+V)…"
          className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg font-sinhala text-lg focus:border-blue-primary focus:outline-none resize-none"
          lang="si"
        />

        {/* Controls */}
        <div className="flex gap-3 mt-4 mb-8 flex-wrap">
          <button
            onClick={handlePasteFromClipboard}
            className="px-4 py-2 rounded-lg border border-line hover:bg-side transition text-sm font-semibold"
          >
            📋 Paste from clipboard
          </button>
          <button
            onClick={() => setPastedText("")}
            className="px-4 py-2 rounded-lg border border-line hover:bg-side transition text-sm font-semibold"
          >
            Clear
          </button>
          <button
            onClick={() =>
              setPastedText(
                "අම්මා ගෙදර ඇවිල්ලා. ලාබාල දරුවන්ට ආදරය අවශ්‍යයි."
              )
            }
            className="px-4 py-2 rounded-lg border border-line hover:bg-side transition text-sm font-semibold"
          >
            Try an example
          </button>
        </div>

        {/* Results */}
        {wordSet.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Words Column */}
            <section className="bg-white border border-line rounded-lg p-6">
              <div className="mb-4">
                <div className="text-sm text-gray-600 font-semibold mb-3">
                  {wordSet.length} WORDS FOUND IN YOUR TEXT · tap one
                </div>
                <div className="flex flex-wrap gap-2">
                  {wordSet.map((word, idx) => {
                    const isInDictionary =
                      mockDictionary[word]?.found !== false;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedWord(word)}
                        className={`px-3 py-1 rounded-full text-sm font-sinhala transition ${
                          selectedWord === word
                            ? "border-2 border-red-primary bg-red-50"
                            : isInDictionary
                            ? "bg-white border border-line hover:border-blue-primary"
                            : "bg-gray-100 border border-gray-300 opacity-60"
                        }`}
                      >
                        <span
                          className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            isInDictionary
                              ? "bg-green-500"
                              : "bg-gray-400"
                          }`}
                        />
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>
              <p className="text-xs text-gray-500 pt-2 border-t border-line">
                ● in the dictionary · ○ not yet — tap to suggest it
              </p>
            </section>

            {/* Meaning Column */}
            <section className="bg-white border border-line rounded-lg p-6">
              {selectedData ? (
                selectedData.found ? (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold font-sinhala text-red-primary">
                        {selectedData.headword}
                      </span>
                      <span className="text-gray-600">{selectedData.pronunciation}</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {selectedData.partOfSpeech}
                      </span>
                    </div>
                    <p className="text-ink2 mb-6">{selectedData.meaning}</p>
                    <div className="flex gap-3">
                      <Link
                        href={`/word/${selectedData.headword}`}
                        className="flex-1 px-4 py-2 bg-blue-primary text-white rounded-lg text-sm font-semibold text-center hover:bg-opacity-90 transition"
                      >
                        Open full meaning →
                      </Link>
                      <button className="flex-1 px-4 py-2 border border-line rounded-lg text-sm font-semibold hover:bg-side transition">
                        ☆ Save
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <span className="text-2xl font-sinhala font-bold">
                        {selectedData.headword}
                      </span>
                    </div>
                    <p className="text-ink2 mb-6">{selectedData.message}</p>
                    <div className="space-y-3">
                      <p className="text-xs text-gray-600 font-semibold">CLOSEST WORDS</p>
                      <div className="space-y-2">
                        {["ඇවිල්ල", "ඇවිලිනි", "ඇවිල්ලු"].map((word, idx) => (
                          <Link
                            key={idx}
                            href={`/word/${word}`}
                            className="block px-3 py-2 bg-gray-50 border border-line rounded text-sm font-sinhala text-navy hover:bg-side transition"
                          >
                            {word}
                          </Link>
                        ))}
                      </div>
                      <button className="w-full mt-4 px-4 py-2 bg-red-primary text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition">
                        ＋ Suggest this word
                      </button>
                    </div>
                  </>
                )
              ) : (
                <p className="text-gray-500">Tap a word on the left to see its meaning here.</p>
              )}
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}
