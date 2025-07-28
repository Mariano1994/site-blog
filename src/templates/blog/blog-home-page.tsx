// import CallToAction from "../landing-page/sections/call-to-action/call-to-action";
import { allPosts } from "contentlayer/generated";
import Header from "./header/header";
import PostCard from "./post-card/post-card";
import PostGridCard from "./post-grid-card/post-grid-card";

const BlogHomePage = () => {
	const posts = allPosts;
	return (
		<div>
			{/* <CallToAction /> */}
			<Header />
			<PostGridCard>
				{posts.map((post) => (
					<PostCard
						key={post._id}
						title={post.title}
						description={post.description}
						date={new Date(post.date).toLocaleDateString("pt-pt")}
						author={{
							name: post.author.name,
							role: "CEO na Anne Corp",
							avatar: post.author.avatar,
						}}
						imageSource={post.image}
						slug={post.slug}
					/>
				))}
			</PostGridCard>
		</div>
	);
};

export default BlogHomePage;
