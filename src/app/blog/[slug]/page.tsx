import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostP from "@/templates/blog/post/post";

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

type BlogPostProps = {
	params: Promise<{
		slug: string;
	}>;
};
export async function generateMetadata({
	params,
}: BlogPostProps): Promise<Metadata> {
	const { slug } = await params;
	const post = allPosts.find((post) => post.slug === slug);
	if (!post) {
		return {};
	}

	return {
		title: post.title,
		description: post.description,
		authors: [{ name: post.author.name }],
		robots: "index, follow",
		openGraph: {
			images: [post.image],
		},
	};
}

export default async function PostPage({ params }: BlogPostProps) {
	const { slug } = await params;
	const post = allPosts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	return <PostP post={post} />;
}
