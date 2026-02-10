/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: "#15071f", // Deep purple mauve
                    dark: "#23103c", // Rich violet
                    gray: "#34145a", // Lighter violet gray
                    accent: "#8b5cf6", // Violet-500
                    accentHover: "#7c3aed", // Violet-600
                    text: "#e4e4e7",
                },
            },
            fontFamily: {
                sans: ["Bebas Neue", "Impact", "Arial Black", "sans-serif"],
                display: ["Bebas Neue", "Impact", "Arial Black", "sans-serif"],
            },
            animation: {
                "pulse-fast": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                spotlight: "spotlight 4s ease-in-out infinite alternate",
                "float-slow": "float 6s ease-in-out infinite",
                "float-slower": "float 8s ease-in-out infinite reverse",
                "fly-out": "flyOut 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                "scale-in": "scaleIn 0.8s ease-out forwards",
                "fadeIn": "fadeIn 0.5s ease-out forwards",
            },
            keyframes: {
                spotlight: {
                    "0%": { opacity: 0.5, transform: "rotate(-5deg)" },
                    "100%": { opacity: 0.8, transform: "rotate(5deg)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
                    "50%": { transform: "translateY(-20px) rotate(2deg)" },
                },
                flyOut: {
                    "0%": {
                        transform: "translateX(0) rotate(0deg) scale(1)",
                        opacity: "1",
                    },
                    "20%": {
                        transform: "translateX(-40px) rotate(-5deg) scale(1.05)",
                    } /* Anticipation */,
                    "100%": {
                        transform: "translateX(150vw) rotate(25deg) scale(1.1)",
                        opacity: "1",
                    },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.8)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                }
            },
        },
    },
    plugins: [],
}
