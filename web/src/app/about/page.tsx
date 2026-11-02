"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-white border-b border-line2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-ink2 hover:text-ink mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-ink">About Subhashitha</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8 prose prose-sm max-w-none">
          <p className="text-lg text-ink2 leading-relaxed">
            <span className="font-sinhala font-bold">සුභාෂිත</span> (Subhashitha) is a free Sinhala–English
            dictionary for learners, students, writers and the Sri Lankan diaspora.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Our Principles</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-red-primary font-bold">✓</span>
                <span><b>One search box</b> that understands Sinhala, Singlish and English</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-primary font-bold">✓</span>
                <span><b>No account needed.</b> Favorites are kept in your browser.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-primary font-bold">✓</span>
                <span><b>Clearly labelled content</b> when something hasn't been reviewed yet</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-primary font-bold">✓</span>
                <span><b>Hand-written entries.</b> No copying from other dictionaries.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Quality & Reviews</h2>
            <p className="text-ink2">
              Every entry is written by our editors and checked by a second reviewer before it goes
              live. You'll see a "Verified" badge on reviewed words, and "Awaiting review" on new entries
              being checked.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Open to Suggestions</h2>
            <p className="text-ink2">
              Found a mistake? Open any word and tap "Suggest a correction". See a word that should be
              added? Tap "Suggest this word" when searching.
            </p>
            <p className="text-ink2 mt-3">
              A reviewer will check every suggestion before it goes live.
            </p>
          </div>

          <div className="bg-side border border-line rounded-lg p-6">
            <h3 className="font-semibold text-ink mb-2">Want to contribute?</h3>
            <p className="text-sm text-ink2">
              We're building a comprehensive dictionary for the Sinhala language. If you're interested
              in editing or reviewing, please get in touch.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 px-4 py-2 bg-blue-primary text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
