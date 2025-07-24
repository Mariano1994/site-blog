import { Inter, PT_Sans_Caption } from "next/font/google";

export const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const ptSansCaption = PT_Sans_Caption({
	variable: "--font-pt-sans-caption",
	subsets: ["latin"],
	weight: ["700"],
});
