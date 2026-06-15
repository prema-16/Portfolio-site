module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0A0A0A",
          surface: "#111111",
          secondary: "#161616",
          textSecondary: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#FF6B00",
          glow: "rgba(255, 107, 0, 0.3)",
          glowStrong: "rgba(255, 107, 0, 0.6)",
        },
        neon: {
          blue: "#FF6B00",
          purple: "#A1A1AA",
          cyan: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(59, 130, 246, 1)" },
        },
        pulse_glow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          },
          "50%": {
            opacity: "0.5",
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)",
          },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 1s ease-in",
        slideInUp: "slideInUp 1s ease-out",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-purple": "0 0 30px rgba(139, 92, 246, 0.5)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.5)",
        neon: "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
