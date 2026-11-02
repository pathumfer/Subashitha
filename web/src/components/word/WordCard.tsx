import { useState } from "react";

interface WordCardProps {
  headword: string;
  pronunciation?: string;
  meaning: string;
  partOfSpeech?: string;
  example?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (headword: string) => void;
}

export function WordCard({
  headword,
  pronunciation,
  meaning,
  partOfSpeech,
  example,
  isFavorite = false,
  onFavoriteToggle,
}: WordCardProps) {
  const [favorited, setFavorited] = useState(isFavorite);

  const handleFavoriteToggle = () => {
    setFavorited(!favorited);
    if (onFavoriteToggle) {
      onFavoriteToggle(headword);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-line hover:border-blue-primary hover:shadow-base transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-sinhala text-2xl font-bold text-ink">{headword}</h3>
          {pronunciation && (
            <p className="text-sm text-ink3 mt-1">/{pronunciation}/</p>
          )}
        </div>
        <button
          onClick={handleFavoriteToggle}
          className="p-2 rounded-md hover:bg-side transition-colors"
          aria-label="Toggle favorite"
        >
          <span className="text-xl">
            {favorited ? "⭐" : "☆"}
          </span>
        </button>
      </div>

      {partOfSpeech && (
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-side text-ink2 text-sm rounded-full">
            {partOfSpeech}
          </span>
        </div>
      )}

      <p className="text-lg text-ink mb-3 leading-relaxed">{meaning}</p>

      {example && (
        <div className="border-l-4 border-amber pl-4 py-2 bg-side rounded-r">
          <p className="text-sm text-ink2 italic">
            "{example}"
          </p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-line flex gap-2">
        <button className="flex-1 px-3 py-2 text-sm rounded-md bg-side text-ink hover:bg-blue-primary hover:text-white transition-colors">
          View Details
        </button>
        <button className="px-3 py-2 text-sm rounded-md bg-side text-ink hover:bg-side transition-colors">
          Share
        </button>
      </div>
    </div>
  );
}
