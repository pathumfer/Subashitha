"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    topic: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: "", topic: "general", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="bg-white border-b border-line2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-ink2 hover:text-ink mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-ink">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {submitted ? (
          <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
            <div className="text-4xl mb-3">✓</div>
            <h2 className="text-xl font-semibold text-green-900 mb-2">Message sent!</h2>
            <p className="text-green-800">
              Thanks for getting in touch. We'll reply within 3 working days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-line rounded-lg p-8">
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                Your email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-line rounded-lg focus:border-blue-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                Topic
              </label>
              <select
                value={formData.topic}
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value })
                }
                className="w-full px-4 py-2 border border-line rounded-lg focus:border-blue-primary focus:outline-none"
              >
                <option value="general">General question</option>
                <option value="sponsorship">Sponsorship / advertising</option>
                <option value="technical">Report a technical problem</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message…"
                rows={6}
                className="w-full px-4 py-2 border border-line rounded-lg focus:border-blue-primary focus:outline-none resize-none"
              />
            </div>

            <p className="text-xs text-ink2">
              Protected by an invisible bot check. We reply within 3 working days.
            </p>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
