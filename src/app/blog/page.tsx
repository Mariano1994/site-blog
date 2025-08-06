import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import BlogHomePage from "@/templates/blog/blog-home-page";

export const metadata: Metadata = {
	title: "Blog",
	description: "Dicas e estrategias para impulsionar o seu negócio",
	robots: "index, follow",
	openGraph: {
		title: "Site.set",
		description: "Dicas e estrategias para impulsionar o seu negócior",
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

const Blog = () => {
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return <BlogHomePage posts={sortedPosts} />;
};

export default Blog;
