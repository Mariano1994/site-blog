import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import PostP from "@/templates/blog/post/post";

type BlogPostProps = {
	params: Promise<{
		slug: string;
	}>;
};
async function PostPage({ params }: BlogPostProps) {
	const { slug } = await params;
	const post = allPosts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	return <PostP post={post} />;
}

export default PostPage;
