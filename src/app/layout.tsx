import Layout from "@/layout/_layout";
import "@/styles/globals.css";

export const metadata = {
	title: "Site.set",
	description: "Personal Blog",
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
