import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps } from "next";
import PostP from "@/templates/blog/post/post";

type PostProps = {
	post: Post;
};

export default function PostPage({ post }: PostProps) {
	return <PostP post={post} />;
}

export const getStaticPaths = (async () => {
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	const recentPosts = sortedPosts.slice(0, 5);
	const paths = recentPosts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
	const { slug } = context.params as { slug: string };

	const post = allPosts.find((post) => post.slug === slug);
	return {
		props: {
			post,
		},
	};
}) satisfies GetStaticProps;
