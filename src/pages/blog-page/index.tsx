import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticProps } from "next";
import BlogHomePage from "@/templates/blog/blog-home-page";

type PostsPros = {
	posts: Post[];
};
const Blog = ({ posts }: PostsPros) => {
	return <BlogHomePage posts={posts} />;
};

export default Blog;

export const getStaticProps = (async () => {
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
	return {
		props: {
			posts: sortedPosts,
		},
	};
}) satisfies GetStaticProps;
