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
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [mode, setMode] = useState("auto");
  const [showKeyboardComposer, setShowKeyboardComposer] = useState(false);
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
    const newQuery = query + char;
    setQuery(newQuery);
    // Filter and show suggestions
    if (newQuery.trim()) {
      setSuggestions([
        {
          word: "ලබාල",
          pronunciation: "/lā-ba-lā/",
          type: "Adjective · young (in age)",
        },
        {
          word: "ලාභ",
          pronunciation: "/lābha/",
          type: "Noun · benefit, profit",
        },
        {
          word: "ලස්සන",
          pronunciation: "/lassana/",
          type: "Adjective · beautiful",
        },
      ]);
    } else {
      setSuggestions([]);
    }
  };

  const modeLabels = {
    auto: "ආ/A",
    si: "ආ",
    singlish: "Aa",
    en: "EN",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FBF9F6" }}>
      {/* Main Content */}
      <div
        style={{
          maxWidth: "1210px",
          margin: "0 auto",
          padding: "24px 32px 48px",
        }}
      >
        {/* Hero Title - hide when keyboard composer is open */}
        {!showKeyboardComposer && (
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
        )}

        {/* Search Box */}
        <div
          style={{
            position: "relative",
            maxWidth: "930px",
            margin: "28px auto 0",
            height: "60px",
            backgroundColor: "#fff",
            borderRadius: "30px",
            boxShadow: "0 2px 8px rgba(20, 30, 60, 0.07)",
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            gap: "12px",
            zIndex: 6,
          }}
        >
          {/* Search Icon */}
          <svg
            viewBox="0 0 24 24"
            style={{
              width: "18px",
              height: "18px",
              fill: "none",
              stroke: "#999",
              strokeWidth: "1.8",
              flexShrink: 0,
            }}
          >
            <circle cx="10.5" cy="10.5" r="6.5"></circle>
            <path d="M15.5 15.5l5 5"></path>
          </svg>
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
              fontSize: "15px",
              fontWeight: 400,
              fontFamily: '"Fira Sans", "Noto Sans Sinhala", sans-serif',
              color: "#13213F",
            }}
          />

          {/* Mode Selector Button */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowModeMenu(!showModeMenu)}
              style={{
                height: "34px",
                padding: "0 10px",
                border: "none",
                borderRadius: "6px",
                background: "#F2F4F7",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                color: "#13213F",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: mode === "auto" || mode === "si" ? '"Noto Sans Sinhala", sans-serif' : "inherit",
                }}
              >
                {modeLabels[mode as keyof typeof modeLabels]}
              </span>
              <span style={{ fontSize: "12px" }}>▼</span>
            </button>

            {/* Mode Dropdown Menu */}
            {showModeMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  right: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #E7EAF0",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(20,30,60,.15)",
                  padding: "6px",
                  minWidth: "200px",
                  zIndex: 20,
                }}
              >
                {[
                  { key: "auto", label: "Auto-detect", desc: "Sinhala, Singlish or English" },
                  { key: "si", label: "සිංහල only", desc: "Sinhala Unicode keyboard" },
                  { key: "singlish", label: "Singlish only", desc: "Romanised: laabala, amma" },
                  { key: "en", label: "English → Sinhala", desc: "Search by English meaning" },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      setMode(opt.key);
                      setShowModeMenu(false);
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      textAlign: "left",
                      border: "none",
                      background: mode === opt.key ? "#E7EDF6" : "transparent",
                      padding: "9px 10px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginBottom: opt.key === "en" ? "0" : "4px",
                    }}
                  >
                    <b style={{ color: "#13213F", fontSize: "14px" }}>{opt.label}</b>
                    <small
                      style={{
                        color: "#5D6878",
                        fontSize: "12px",
                        fontWeight: 400,
                      }}
                    >
                      {opt.desc}
                    </small>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Keyboard Toggle Button */}
          <button
            onClick={() => setShowKeyboardComposer(!showKeyboardComposer)}
            style={{
              height: "34px",
              width: "34px",
              padding: "0",
              border: "none",
              borderRadius: "6px",
              background: showKeyboardComposer ? "#E3EDFB" : "#F2F4F7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "16px",
              flexShrink: 0,
            }}
          >
            ⌨️
          </button>

          {/* Search Button */}
          <button
            style={{
              width: "48px",
              height: "48px",
              border: "none",
              borderRadius: "999px",
              background: "#A5101E",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8E1424")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A5101E")}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="10.5" cy="10.5" r="6.5"></circle>
              <path d="M15.5 15.5l5 5"></path>
            </svg>
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

        {/* Keyboard Composer View - appears at top when opened */}
        {showKeyboardComposer && (
          <div
            style={{
              maxWidth: "1210px",
              margin: "0 auto",
              padding: "0 32px 20px",
              display: "grid",
              gridTemplateColumns: "350px 1fr",
              gap: "20px",
              minHeight: "500px",
            }}
          >
            {/* Left: Keyboard */}
            <div
              style={{
                backgroundColor: "#F7F8FA",
                border: "1px solid #E7EAF0",
                borderRadius: "10px",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "#13213F" }}>
                  ⌨️ On-Screen Sinhala Keyboard
                </h3>
                <button
                  onClick={() => setShowKeyboardComposer(false)}
                  style={{
                    padding: "6px 12px",
                    border: "1px solid #DDE1EA",
                    borderRadius: "6px",
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#13213F",
                  }}
                >
                  Done
                </button>
              </div>
              <div style={{ flex: 1, overflowY: "auto" }}>
                <SinhalaKeyboard onCharacterClick={handleCharacterClick} />
              </div>
            </div>

            {/* Right: Found Words */}
            <div
              style={{
                backgroundColor: "#fff",
                border: "1px solid #E7EAF0",
                borderRadius: "10px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#13213F",
                }}
                >
                  <span>🔤</span>
                  <span>Tap letters on the keyboard...</span>
                </div>
              </div>
              {!query && (
                <div style={{ color: "#5D6878", fontSize: "14px", textAlign: "center", paddingTop: "60px" }}>
                  <div style={{ marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", fontSize: "12px" }}>
                    POPULAR WORDS
                  </div>
                  <div>— or start tapping letters</div>
                </div>
              )}
              {query && suggestions.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {suggestions.map((word, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px",
                        borderBottom: idx === suggestions.length - 1 ? "none" : "1px solid #EEF0F3",
                        cursor: "pointer",
                        borderRadius: "6px",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F7F9FC")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <span
                        style={{
                          fontFamily: '"Noto Sans Sinhala", sans-serif',
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#A5101E",
                          minWidth: "100px",
                        }}
                      >
                        {word.word}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "12px", color: "#1D3F9A", fontWeight: 500 }}>
                          {word.type.split(" · ")[0]}
                        </div>
                        <div style={{ fontSize: "13px", color: "#5D6878" }}>
                          {word.type.split(" · ")[1] || word.pronunciation}
                        </div>
                      </div>
                      <span style={{ fontSize: "18px", cursor: "pointer", opacity: 0.6 }}>☆</span>
                      <span style={{ color: "#999", fontSize: "18px" }}>›</span>
                    </div>
                  ))}
                </div>
              )}
              {query && suggestions.length === 0 && (
                <div style={{ color: "#5D6878", fontSize: "14px", textAlign: "center", paddingTop: "60px" }}>
                  No results for "<span style={{ fontFamily: '"Noto Sans Sinhala", sans-serif', fontWeight: 600, color: "#13213F" }}>{query}</span>"
                </div>
              )}
            </div>
          </div>
        )}

        {/* Three Column Grid */}
        {!showKeyboardComposer && (
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
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: "28px",
                  height: "28px",
                  fill: "#13213F",
                }}
              >
                <path d="M2 6h20v12H2zM4 8v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zM4 11v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM7 14v2h10v-2z" />
              </svg>
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
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "none",
                    stroke: "#2F5BD3",
                    strokeWidth: "2",
                    strokeLinejoin: "round",
                  }}
                >
                  <path d="M4 20h4L19 9l-4-4L4 16z" />
                  <path d="M13 7l4 4" />
                </svg>
                Other ways to enter Sinhala words
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a
                  href="#/type-sinhala"
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
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "10px",
                      background: "#E3EDFB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{
                        width: "28px",
                        height: "28px",
                        fill: "#13213F",
                      }}
                    >
                      <path d="M2 6h20v12H2zM4 8v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zM4 11v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM7 14v2h10v-2z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: 500, color: "#1D3F9A" }}>
                      Type in Sinhala
                    </div>
                    <span style={{ display: "block", fontSize: "13px", color: "#5D6878", lineHeight: "1.35" }}>
                      Use your Sinhala keyboard (e.g. Wijesekara, Phonetic).
                    </span>
                  </div>
                  <span style={{ color: "#999" }}>›</span>
                </a>
                <a
                  href="#/type-singlish"
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
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "10px",
                      background: "#E2F4E8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "#1F8A4C",
                      fontFamily: "'Noto Serif', serif",
                    }}
                  >
                    A<span style={{ fontSize: "16px" }}>a</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: 500, color: "#1D3F9A" }}>
                      Type in English (Singlish)
                    </div>
                    <span style={{ display: "block", fontSize: "13px", color: "#5D6878", lineHeight: "1.35" }}>
                      e.g. laabala, amma, dharma – get suggested words.
                    </span>
                  </div>
                  <span style={{ color: "#999" }}>›</span>
                </a>
                <a
                  href="#/paste"
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
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "10px",
                      background: "#EFE7FB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{
                        width: "28px",
                        height: "28px",
                        fill: "none",
                        stroke: "#7A3FD0",
                        strokeWidth: "2",
                        strokeLinejoin: "round",
                      }}
                    >
                      <path d="M8 4h8v3H8z" />
                      <path d="M6 5.5H5v15h14v-15h-1" />
                      <path d="M9 12h6M9 15h6" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: 500, color: "#1D3F9A" }}>
                      Paste from anywhere
                    </div>
                    <span style={{ display: "block", fontSize: "13px", color: "#5D6878", lineHeight: "1.35" }}>
                      Paste a sentence — we find every word in it.
                    </span>
                  </div>
                  <span style={{ color: "#999" }}>›</span>
                </a>
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
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: "28px",
                  height: "28px",
                  fill: "none",
                  stroke: "#8A6A2A",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }}
              >
                <path d="M9 18h6M10 21h4" />
                <path
                  d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"
                  style={{ fill: "#F7B528", stroke: "#F2A20C" }}
                />
              </svg>
              Tips for easy searching
            </h2>
            <div style={{ backgroundColor: "#fff", borderRadius: "8px" }}>
              {SEARCH_TIPS.map((tip, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    padding: "7px 10px",
                    borderBottom: idx === SEARCH_TIPS.length - 1 ? "none" : "1px solid #F5DEDC",
                    fontSize: "15px",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "999px",
                      backgroundColor: "#FBDCDC",
                      color: "#A5101E",
                      fontSize: "14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#13213F" }}>
                      {tip.split(" — ")[0]}
                    </span>
                    <span style={{ fontSize: "13px", color: "#5D6878" }}>
                      {tip.split(" — ")[1] || tip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

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
