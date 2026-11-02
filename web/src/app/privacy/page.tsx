"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="bg-white border-b border-line2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-ink2 hover:text-ink mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-ink">Privacy Policy</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">No Account Needed</h2>
          <p className="text-ink2">
            We don't ask for an account. You can use Subhashitha completely anonymously.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Your Favorites & Searches</h2>
          <p className="text-ink2">
            Favorites and recent searches are stored only in this browser, using browser storage.
            If you clear your browser data, they will be deleted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Suggestions You Send</h2>
          <p className="text-ink2">
            When you send a suggestion (a new word or a correction), it is stored with a
            daily-changing anonymous ID — never your IP address or any identifying information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Advertising</h2>
          <p className="text-ink2">
            We show ads from Google AdSense to keep Subhashitha free. If you choose "Only
            necessary" in the cookie settings, ads will be non-personalised. If you accept all
            cookies, Google may show you personalised ads based on your browsing across Google
            products.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Third-Party Services</h2>
          <p className="text-ink2">
            We use Cloudflare for CDN and security. See their privacy policy for details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-3">Questions?</h2>
          <p className="text-ink2">
            Email us at{" "}
            <a href="mailto:privacy@subhashitha.lk" className="text-blue-primary hover:underline">
              privacy@subhashitha.lk
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
