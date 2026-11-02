interface LogoProps {
  variant?: "full" | "icon" | "compact";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "full", size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { icon: "w-8 h-8", text: "text-xs" },
    md: { icon: "w-12 h-12", text: "text-sm" },
    lg: { icon: "w-16 h-16", text: "text-base" },
  };

  const dimensions = sizeMap[size];

  if (variant === "icon") {
    return (
      <div className={`${dimensions.icon} flex items-center justify-center flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4D35E" />
              <stop offset="100%" stopColor="#E8B923" />
            </linearGradient>
          </defs>
          {/* Left page */}
          <path
            d="M 25 30 L 25 75 Q 50 78 50 75 L 50 30 Q 50 28 48 28 L 27 28 Q 25 28 25 30"
            fill="url(#bookGradient)"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          {/* Right page */}
          <path
            d="M 50 30 L 50 75 Q 50 78 75 75 L 75 30 Q 75 28 73 28 L 52 28 Q 50 28 50 30"
            fill="#F4D35E"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          {/* Spine */}
          <line x1="50" y1="28" x2="50" y2="78" stroke="#D4A017" strokeWidth="1" />
          {/* Leaf/Quill */}
          <path
            d="M 65 18 Q 72 15 78 22 Q 72 28 65 25 Q 63 22 65 18"
            fill="#F4D35E"
            stroke="#D4A017"
            strokeWidth="1"
          />
          <path d="M 72 20 L 75 24" stroke="#D4A017" strokeWidth="0.8" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`${dimensions.icon} flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="bookGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4D35E" />
              <stop offset="100%" stopColor="#E8B923" />
            </linearGradient>
          </defs>
          {/* Left page */}
          <path
            d="M 25 30 L 25 75 Q 50 78 50 75 L 50 30 Q 50 28 48 28 L 27 28 Q 25 28 25 30"
            fill="url(#bookGradient2)"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          {/* Right page */}
          <path
            d="M 50 30 L 50 75 Q 50 78 75 75 L 75 30 Q 75 28 73 28 L 52 28 Q 50 28 50 30"
            fill="#F4D35E"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          {/* Spine */}
          <line x1="50" y1="28" x2="50" y2="78" stroke="#D4A017" strokeWidth="1" />
          {/* Leaf/Quill */}
          <path
            d="M 65 18 Q 72 15 78 22 Q 72 28 65 25 Q 63 22 65 18"
            fill="#F4D35E"
            stroke="#D4A017"
            strokeWidth="1"
          />
          <path d="M 72 20 L 75 24" stroke="#D4A017" strokeWidth="0.8" />
        </svg>
      </div>

      {variant === "full" && (
        <div>
          <h2 className={`font-sinhala font-bold text-amber-300 ${dimensions.text}`}>
            සුබාෂිත
          </h2>
          <p className={`text-amber-200 tracking-wider ${dimensions.text}`}>
            SUBHASHITHA
          </p>
        </div>
      )}
    </div>
  );
}
