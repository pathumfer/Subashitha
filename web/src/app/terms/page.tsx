"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="bg-white border-b border-line2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-ink2 hover:text-ink mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-ink">Terms of Use</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Content Rights</h2>
          <p className="text-ink2">
            Dictionary content © 2026 Subhashitha. You may quote individual entries with a link back to
            this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">No Bulk Export</h2>
          <p className="text-ink2">
            Automated bulk copying of the dictionary is not allowed. It violates our terms and is
            technically rate-limited for protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Use At Your Own Risk</h2>
          <p className="text-ink2">
            Subhashitha is provided as-is. We make no warranty that entries are complete or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Appropriate Use</h2>
          <p className="text-ink2">
            Don't use Subhashitha for spam, harassment, or illegal purposes. Suggestions that are
            abusive, spam or off-topic will be rejected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Changes</h2>
          <p className="text-ink2">
            We may change these terms at any time. Continued use means you agree to the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Questions?</h2>
          <p className="text-ink2">
            Email us at{" "}
            <a href="mailto:legal@subhashitha.lk" className="text-blue-primary hover:underline">
              legal@subhashitha.lk
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
