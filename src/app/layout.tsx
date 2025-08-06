import Layout from "@/layout/_layout";
import "@/styles/globals.css";

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
