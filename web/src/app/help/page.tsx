"use client";

import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    question: "How do I type Sinhala?",
    answer:
      "You have three ways: (1) Use your computer's Sinhala keyboard (Wijesekara, Phonetic, etc.), (2) Type the way it sounds in English (e.g. 'laabaala'), or (3) Use the on-screen keyboard on Home.",
  },
  {
    question: "Why can't I find a word?",
    answer:
      "It may be an inflected form (e.g. පොතක් instead of පොත). Try searching for the root word, or suggest it — a reviewer will add it.",
  },
  {
    question: "Where are my favorites stored?",
    answer:
      "In this browser only. Export them as CSV if you want a backup copy, or share a link with a friend.",
  },
  {
    question: 'What does "Awaiting review" mean?',
    answer:
      "An editor wrote the entry but a second reviewer has not checked it yet. It will be marked 'Verified' once approved.",
  },
  {
    question: "How do I report a mistake?",
    answer: "Open the word and click 'Suggest a correction'. A reviewer will look at it and approve or discuss with you.",
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-white border-b border-line2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-ink2 hover:text-ink mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-ink">Help & FAQ</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white border border-line rounded-lg p-6 hover:shadow-sm transition cursor-pointer"
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <summary className="font-semibold text-ink flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-gray-400 text-lg">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </summary>
              <p className="mt-4 text-ink2 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-ink mb-2">Still have questions?</h2>
          <p className="text-ink2 mb-6">
            If you can't find an answer, get in touch with us.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
