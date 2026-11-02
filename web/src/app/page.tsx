"use client";

import { useState } from "react";
import Link from "next/link";
import { SinhalaKeyboard } from "@/components/search/SinhalaKeyboard";

const SEARCH_TIPS = [
  "Type directly in Sinhala using your computer's Sinhala keyboard.",
  "You can also type in English (e.g. laabala, laba, dharma) and see suggestions.",
  "Use the on-screen keyboard. Click the keyboard icon to type Sinhala.",
  "Paste a Sinhala word. Copy and paste from any website or document.",
  "Select and search. Highlight a word on any page and search.",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    Array<{ word: string; pronunciation: string; type: string }>
  >([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setSuggestions([
      {
        word: "ලබාල",
        pronunciation: "/lā-ba-lā/",
        type: "Adjective · young (in age)",
      },
    ]);
  };

  const handleCharacterClick = (char: string) => {
    setQuery(query + char);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FBF9F6" }}>
      {/* Top Bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#fff",
          borderBottom: "1px solid #ECE9E3",
          padding: "16px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1210px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              fontWeight: 600,
              color: "#5D6878",
              textTransform: "uppercase",
            }}
          >
            — &nbsp;DISCOVER WORDS. DISCOVER WISDOM.&nbsp; —
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              style={{
                padding: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              🌙
            </button>
            <button
              style={{
                padding: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              👤
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1210px",
          margin: "0 auto",
          padding: "48px 32px",
        }}
      >
        {/* Hero Title */}
        <div style={{ textAlign: "center", paddingTop: "10px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.24em",
              color: "#A9711A",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            — &nbsp;DISCOVER WORDS. DISCOVER WISDOM.&nbsp; —
          </div>
          <h1
            style={{
              margin: "16px 0 0",
              fontSize: "44px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#13213F",
            }}
          >
            Find the meaning of any{" "}
            <span
              style={{
                fontFamily: '"Noto Sans Sinhala", sans-serif',
                color: "#A5101E",
              }}
            >
              Sinhala word
            </span>
          </h1>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "19px",
              color: "#2A3550",
            }}
          >
            Type in Sinhala, Singlish or English — we'll work out which. Or tap letters on the keyboard below.
          </p>
        </div>

        {/* Search Box */}
        <div
          style={{
            position: "relative",
            maxWidth: "930px",
            margin: "28px auto 0",
            height: "72px",
            backgroundColor: "#fff",
            borderRadius: "36px",
            boxShadow: "0 6px 24px rgba(20, 30, 60, 0.10)",
            display: "flex",
            alignItems: "center",
            padding: "0 6px 0 28px",
            gap: "12px",
            zIndex: 6,
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Type a word — සිංහල, Singlish or English"
            style={{
              flex: 1,
              minWidth: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "22px",
              fontWeight: 600,
              fontFamily: '"Noto Sans Sinhala", "Fira Sans", sans-serif',
              color: "#13213F",
            }}
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setSuggestions([]);
              }}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: "#A5101E",
              }}
            >
              ×
            </button>
          )}
          <div style={{ width: "1px", height: "36px", backgroundColor: "#E3E6EC" }} />
          <button
            style={{
              height: "40px",
              padding: "0 12px",
              border: "none",
              borderRadius: "8px",
              background: "#F2F4F7",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ⌨️
          </button>
          <button
            style={{
              height: "40px",
              padding: "0 12px",
              border: "none",
              borderRadius: "8px",
              background: "#F2F4F7",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            🎹
          </button>
          <button
            style={{
              width: "62px",
              height: "62px",
              border: "none",
              borderRadius: "999px",
              background: "#A5101E",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "22px",
              fontWeight: "bold",
              flexShrink: 0,
              marginRight: "6px",
            }}
          >
            🔍
          </button>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                left: "18px",
                right: "18px",
                top: "calc(100% + 4px)",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(20, 30, 60, 0.14)",
                padding: "6px 12px 4px",
                zIndex: 5,
              }}
            >
              {suggestions.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "30px minmax(90px,max-content) minmax(110px,max-content) minmax(0,1fr) 22px",
                    gap: "14px",
                    alignItems: "center",
                    minHeight: "46px",
                    padding: "0 12px",
                    borderBottom: "1px solid #EEF0F3",
                    textDecoration: "none",
                    color: "#1C2A4A",
                    fontSize: "15px",
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>🔍</span>
                  <span
                    style={{
                      fontFamily: '"Noto Sans Sinhala", sans-serif',
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "#A5101E",
                    }}
                  >
                    {s.word}
                  </span>
                  <span style={{ color: "#3A4560" }}>{s.pronunciation}</span>
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {s.type}
                  </span>
                  <span style={{ color: "#999" }}>›</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Three Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "13px",
            marginTop: "26px",
            alignItems: "stretch",
          }}
        >
          {/* Keyboard Panel */}
          <div
            style={{
              backgroundColor: "#F7F8FA",
              border: "1px solid #E7EAF0",
              borderRadius: "10px",
              padding: "14px 16px",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "16px",
                fontWeight: 500,
                color: "#13213F",
              }}
            >
              <span style={{ fontSize: "22px" }}>⌨️</span>
              On-Screen Sinhala Keyboard
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "12px",
                  color: "#5D6878",
                }}
              >
                Tap a letter to start
              </span>
            </h2>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <SinhalaKeyboard onCharacterClick={handleCharacterClick} />
            </div>
          </div>

          {/* Input Methods */}
          <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
            <div
              style={{
                backgroundColor: "#F7F8FA",
                border: "1px solid #E7EAF0",
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#13213F",
                }}
              >
                <span style={{ fontSize: "22px" }}>✏️</span>
                Other ways to enter Sinhala words
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "10px 12px",
                    border: "1px solid #E7EAF0",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    textDecoration: "none",
                    color: "#1C2A4A",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>⌨️</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: 500, color: "#1D3F9A" }}>
                      Type in Sinhala
                    </div>
                    <span style={{ display: "block", fontSize: "13px", color: "#5D6878", lineHeight: "1.35" }}>
                      Use your Sinhala keyboard (e.g. Wijesekara, Phonetic).
                    </span>
                  </div>
                  <span style={{ color: "#999" }}>›</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "10px 12px",
                    border: "1px solid #E7EAF0",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    textDecoration: "none",
                    color: "#1C2A4A",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>🔤</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: 500, color: "#1D3F9A" }}>
                      Type in English (Singlish)
                    </div>
                    <span style={{ display: "block", fontSize: "13px", color: "#5D6878", lineHeight: "1.35" }}>
                      e.g. laabala, amma, dharma – get suggested words.
                    </span>
                  </div>
                  <span style={{ color: "#999" }}>›</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "10px 12px",
                    border: "1px solid #E7EAF0",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    textDecoration: "none",
                    color: "#1C2A4A",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>📋</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: 500, color: "#1D3F9A" }}>
                      Paste from anywhere
                    </div>
                    <span style={{ display: "block", fontSize: "13px", color: "#5D6878", lineHeight: "1.35" }}>
                      Paste a sentence — we find every word in it.
                    </span>
                  </div>
                  <span style={{ color: "#999" }}>›</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div
            style={{
              backgroundColor: "#FDF1F0",
              border: "1px solid #F6DCDA",
              borderRadius: "10px",
              padding: "12px 10px",
            }}
          >
            <h2
              style={{
                color: "#A5101E",
                fontSize: "17px",
                padding: "0 4px",
                margin: "0 0 12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "22px" }}>💡</span>
              Tips for easy searching
            </h2>
            <div style={{ backgroundColor: "#fff", borderRadius: "8px" }}>
              {SEARCH_TIPS.map((tip, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    minHeight: "34px",
                    padding: "0 14px",
                    borderBottom: idx === SEARCH_TIPS.length - 1 ? "none" : "1px solid #F1E6D9",
                    fontSize: "15px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "999px",
                      backgroundColor: "#F7B528",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "13px", color: "#2A3550" }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "13px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              flex: "2.15",
              minHeight: "126px",
              borderRadius: "10px",
              overflow: "hidden",
              background: "linear-gradient(100deg, #0F2147 0%, #1B3A78 55%, #2B57A8 100%)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "22px",
              padding: "0 28px",
              textDecoration: "none",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "30px", fontWeight: 700, letterSpacing: "0.02em", color: "#fff" }}>
              novi<i style={{ color: "#F7B528", fontStyle: "normal" }}>.</i>
            </div>
            <div style={{ flex: 1 }}>
              <b style={{ display: "block", fontSize: "20px", fontWeight: 600, color: "#fff" }}>
                Empowering Every Learner for a Brighter Future
              </b>
              <span style={{ fontSize: "13px", opacity: 0.85, color: "#fff" }}>
                Novi Adaptive Learning Platform
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#F7B528",
                color: "#13213F",
                borderRadius: "20px",
                padding: "8px 18px",
                fontWeight: 600,
                fontSize: "14px",
                flexShrink: 0,
              }}
            >
              Learn More
            </div>
          </div>
          <div
            style={{
              flex: 1,
              minHeight: "120px",
              position: "relative",
              backgroundColor: "#E9EEF4",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "22px",
              padding: "0 30px",
              color: "#2A3550",
            }}
          >
            <div style={{ fontSize: "54px" }}>📺</div>
            <div>
              <div style={{ fontSize: "15px", color: "#3A4560" }}>Advertisement (Google AdSense)</div>
              <div style={{ fontSize: "13px", color: "#5D6878", marginTop: "4px" }}>728 × 90</div>
            </div>
            <div
              style={{
                position: "absolute",
                right: "14px",
                bottom: "12px",
                fontSize: "12px",
                color: "#5D6878",
                backgroundColor: "#fff",
                borderRadius: "4px",
                padding: "3px 7px",
              }}
            >
              Ad
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          minHeight: "50px",
          padding: "8px 28px",
          backgroundColor: "#fff",
          borderTop: "1px solid #ECE9E3",
          display: "flex",
          alignItems: "center",
          gap: "22px",
          fontSize: "13px",
          color: "#2A3550",
          flexWrap: "wrap",
        }}
      >
        <span>© 2026 Subhashitha. All rights reserved.</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: "22px" }}>
          <Link href="/about" style={{ color: "#2A3550", textDecoration: "none" }}>
            About
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: '"Noto Serif", serif',
            fontSize: "14px",
            color: "#6B1420",
          }}
        >
          🌸 Discover Words. Discover Wisdom.
        </div>
      </footer>
    </div>
  );
}
