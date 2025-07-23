import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1200px",
			},
		},
		extend: {
			borderRadius: {
				lg: "0.5rem",
				md: "calc(0.5rem - 2px)",
				sm: "calc(0.5rem - 4px)",
			},
			colors: {
				white: "#ffffff",
				blue: {
					100: "#7ea4d7",
					200: "#2c85fc",
					300: "#2266c1",
					400: "#0d284c",
				},
				cyan: {
					100: "#2debfc",
					200: "#187d86",
					300: "#0e474c",
				},
				gray: {
					100: "#f9fafc",
					200: "#d3d5d9",
					300: "#93979f",
					400: "#20242c",
					500: "#16181d",
					600: "#14161a",
					700: "#101216",
					800: "#0b0c0f",
				},
			},
			fontFamily: {
				sans: ["PT Sans Caption", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			fontSize: {
				// Heading - PT Sans Caption
				"heading-hg": ["40px", { lineHeight: "120%", fontWeight: "700" }],
				"heading-xl": ["32px", { lineHeight: "120%", fontWeight: "700" }],
				"heading-lg": ["28px", { lineHeight: "120%", fontWeight: "700" }],
				"heading-md": ["24px", { lineHeight: "120%", fontWeight: "700" }],
				"heading-sm": ["20px", { lineHeight: "120%", fontWeight: "700" }],
				"heading-xs": ["16px", { lineHeight: "120%", fontWeight: "700" }],

				// Body - Inter
				"body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
				"body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
				"body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],

				// Action - Inter
				"action-md": ["16px", { lineHeight: "normal", fontWeight: "500" }],
				"action-sm": ["14px", { lineHeight: "normal", fontWeight: "500" }],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
