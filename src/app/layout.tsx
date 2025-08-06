import Layout from "@/layout/_layout";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Site.set",
	description: "Venda seus produtos como afiliado em um único lugar",
	robots: "index, follow",
	openGraph: {
		title: "Site.set",
		description: "Venda seus produtos como afiliado em um único lugar",
		url: "https://site-blog-jade-phi.vercel.app/og-image.jpg",
		siteName: "Site.set",
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: "https://site-blog-jade-phi.vercel.app/og-image.jpg",
				width: 800,
				height: 600,
				alt: "Site.set",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
