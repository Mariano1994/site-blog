import { allPosts } from "contentlayer/generated";
import BlogHomePage from "@/templates/blog/blog-home-page";

const Blog = () => {
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return <BlogHomePage posts={sortedPosts} />;
};

export default Blog;
