"use client";

import { useState, useRef, useEffect } from "react";

interface SearchBoxProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export function SearchBox({ onSearch, placeholder = "Search..." }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      setSuggestions(generateSuggestions(query));
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
    setIsOpen(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    if (onSearch) {
      onSearch(suggestion);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full h-12 px-4 rounded-lg border border-line bg-white text-ink placeholder-ink3 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSuggestions([]);
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink3 hover:text-ink"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </form>

      {/* Suggestions dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-line rounded-lg shadow-sm z-50">
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-2.5 hover:bg-side text-ink text-base border-b border-line last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
            >
              <span className="text-ink3">Search: </span>
              <span className="font-medium">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function generateSuggestions(query: string): string[] {
  const sampleWords = [
    "අම්මා",
    "අඩු",
    "ඇවිල්ල",
    "අංගය",
    "අවුරුදු",
  ];
  return sampleWords
    .filter((word) =>
      word.toLowerCase().includes(query.toLowerCase()) ||
      query.toLowerCase().includes(word.charAt(0).toLowerCase())
    )
    .slice(0, 5);
}
