import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#13213F",
        ink: "#13213F",
        ink2: "#3A4560",
        ink3: "#5D6878",
        red: {
          primary: "#A5101E",
          hover: "#8E1424",
        },
        gold: "#A9711A",
        amber: "#F2A20C",
        blue: {
          primary: "#1D3F9A",
          secondary: "#2F5BD3",
        },
        bg: "#FBF9F6",
        side: "#F8F7F4",
        line: "#E7EAF0",
        line2: "#ECE9E3",
        green: "#1F7A3E",
      },
      fontFamily: {
        sans: [
          '"Fira Sans"',
          "system-ui",
          "sans-serif",
        ],
        sinhala: [
          '"Noto Sans Sinhala"',
          "sans-serif",
        ],
        serif: [
          '"Noto Serif"',
          "serif",
        ],
      },
      fontSize: {
        xs: ["11px", "1.3"],
        sm: ["13px", "1.4"],
        base: ["15px", "1.6"],
        lg: ["16px", "1.6"],
        xl: ["17px", "1.6"],
        "2xl": ["18px", "1.6"],
        "3xl": ["19px", "1.6"],
        "4xl": ["20px", "1.6"],
        "5xl": ["22px", "1.6"],
        "6xl": ["26px", "1.6"],
        "7xl": ["28px", "1.6"],
        "8xl": ["30px", "1.6"],
        "9xl": ["34px", "1.6"],
        "heading-lg": ["44px", "1.1"],
        "heading-xl": ["52px", "1.15"],
        "heading-xxl": ["76px", "1.15"],
      },
      spacing: {
        safe: "max(1rem, env(safe-area-inset-left))",
      },
      borderRadius: {
        sm: "4px",
        base: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "14px",
        full: "999px",
      },
      boxShadow: {
        xs: "0 1px 3px rgba(20, 30, 60, 0.06)",
        sm: "0 2px 8px rgba(20, 30, 60, 0.07)",
        base: "0 6px 24px rgba(20, 30, 60, 0.1)",
        lg: "0 10px 30px rgba(20, 30, 60, 0.15)",
        xl: "0 12px 40px rgba(20, 30, 60, 0.2)",
        "2xl": "0 20px 60px rgba(20, 30, 60, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
