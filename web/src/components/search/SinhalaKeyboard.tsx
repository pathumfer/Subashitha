"use client";

import { useState } from "react";

const KEYBOARD_ROWS = [
  ["අ", "ආ", "ඇ", "ඈ", "ඉ", "ඊ", "උ", "ඌ", "ඍ", "ඎ"],
  ["එ", "ඒ", "ඓ", "ඔ", "ඕ", "ඖ", "ක", "ඛ", "ග", "ඝ"],
  ["ඞ", "ඟ", "ච", "ඡ", "ජ", "ඣ", "ට", "ඨ", "ඩ", "ඪ"],
  ["ණ", "ඬ", "ත", "ථ", "ද", "ධ", "න", "ඳ", "ප", "ඵ"],
  ["බ", "ඹ", "ම", "ඹ", "ය", "ර", "ල", "ව", "ශ", "ෂ"],
  ["ස", "හ", "ළ", "ෆ", "්", "ා", "ි", "ී "],
];

interface SinhalaKeyboardProps {
  onCharacterClick: (char: string) => void;
}

export function SinhalaKeyboard({ onCharacterClick }: SinhalaKeyboardProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleKeyClick = (char: string) => {
    setActiveKey(char);
    onCharacterClick(char);
    setTimeout(() => setActiveKey(null), 100);
  };

  return (
    <div className="space-y-2">
      {KEYBOARD_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-1 flex-wrap">
          {row.map((char, colIdx) => (
            <button
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleKeyClick(char)}
              className={`
                font-sinhala text-sm font-bold px-2 py-1.5 rounded
                border border-gray-300 hover:border-blue-primary
                transition-all duration-75
                ${
                  activeKey === char
                    ? "bg-blue-primary text-white border-blue-primary"
                    : "bg-white text-navy hover:bg-blue-50"
                }
              `}
            >
              {char}
            </button>
          ))}
        </div>
      ))}

      {/* Control buttons */}
      <div className="flex gap-1 mt-4 pt-2 border-t border-gray-200">
        <button className="flex-1 px-2 py-2 text-sm font-semibold rounded bg-gray-100 hover:bg-gray-200 text-navy">
          123
        </button>
        <button className="flex-1 px-2 py-2 text-sm font-semibold rounded bg-gray-100 hover:bg-gray-200 text-navy">
          😊
        </button>
        <button className="flex-1 px-2 py-2 text-sm font-semibold rounded bg-gray-100 hover:bg-gray-200 text-navy">
          Space
        </button>
        <button className="flex-1 px-2 py-2 text-sm font-semibold rounded bg-gray-100 hover:bg-gray-200 text-navy">
          ⌫
        </button>
      </div>
    </div>
  );
}
