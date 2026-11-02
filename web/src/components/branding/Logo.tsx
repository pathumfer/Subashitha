interface LogoProps {
  variant?: "full" | "icon" | "compact";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "full", size = "md" }: LogoProps) {
  if (variant === "icon") {
    return (
      <div
        style={{
          width: size === "sm" ? "32px" : size === "lg" ? "64px" : "48px",
          height: size === "sm" ? "32px" : size === "lg" ? "64px" : "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <path
            d="M 25 30 L 25 75 Q 50 78 50 75 L 50 30 Q 50 28 48 28 L 27 28 Q 25 28 25 30"
            fill="#F4D35E"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          <path
            d="M 50 30 L 50 75 Q 50 78 75 75 L 75 30 Q 75 28 73 28 L 52 28 Q 50 28 50 30"
            fill="#F4D35E"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          <line x1="50" y1="28" x2="50" y2="78" stroke="#D4A017" strokeWidth="1" />
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

  const sizeStyles = {
    sm: { container: "12px", sinhala: "14px", english: "10px", subtitle: "8px" },
    md: { container: "16px", sinhala: "20px", english: "14px", subtitle: "10px" },
    lg: { container: "24px", sinhala: "32px", english: "18px", subtitle: "12px" },
  };

  const styles = sizeStyles[size];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: size === "lg" ? "12px 16px" : "8px 12px",
        background: "#1B3A78",
        borderRadius: "12px",
        width: "fit-content",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{
          width: styles.container,
          height: styles.container,
          flexShrink: 0,
        }}
      >
        <path
          d="M 25 30 L 25 75 Q 50 78 50 75 L 50 30 Q 50 28 48 28 L 27 28 Q 25 28 25 30"
          fill="#F4D35E"
          stroke="#D4A017"
          strokeWidth="1.5"
        />
        <path
          d="M 50 30 L 50 75 Q 50 78 75 75 L 75 30 Q 75 28 73 28 L 52 28 Q 50 28 50 30"
          fill="#F4D35E"
          stroke="#D4A017"
          strokeWidth="1.5"
        />
        <line x1="50" y1="28" x2="50" y2="78" stroke="#D4A017" strokeWidth="1" />
        <path
          d="M 65 18 Q 72 15 78 22 Q 72 28 65 25 Q 63 22 65 18"
          fill="#F4D35E"
          stroke="#D4A017"
          strokeWidth="1"
        />
        <path d="M 72 20 L 75 24" stroke="#D4A017" strokeWidth="0.8" />
      </svg>

      {variant === "full" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div
            style={{
              fontFamily: "'Noto Sans Sinhala', sans-serif",
              fontSize: styles.sinhala,
              fontWeight: 800,
              color: "#F4D35E",
              lineHeight: 1,
            }}
          >
            සුභාෂිත
          </div>
          <div
            style={{
              fontSize: styles.english,
              fontWeight: 600,
              color: "#F4D35E",
              letterSpacing: "1px",
              lineHeight: 1,
            }}
          >
            SUBHASHITHA
          </div>
          {size === "lg" && (
            <div
              style={{
                fontSize: styles.subtitle,
                fontWeight: 400,
                color: "#E8D4B8",
                letterSpacing: "0.5px",
                lineHeight: 1,
              }}
            >
              Sinhala-English Dictionary
            </div>
          )}
        </div>
      )}
    </div>
  );
}
