"use client";
import type { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Header from "./header/header";
import PostCard from "./post-card/post-card";
import PostGridCard from "./post-grid-card/post-grid-card";

type PostsPros = {
	posts: Post[];
};

const BlogHomePage = ({ posts }: PostsPros) => {
	const searchParams = useSearchParams();
	const query = searchParams?.get("q") ?? "";

	const postList = query
		? posts.filter((post) =>
				post.title.toLowerCase().includes(query.toLowerCase()),
			)
		: posts;

	const hasPosts = posts.length > 0;
	return (
		<div>
			<Header />
			{hasPosts ? (
				<PostGridCard>
					{postList.map((post) => (
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
			) : (
				<div className="container px-8 mb-24 md:mb-0 ">
					<div className="flex flex-col items-center justify-center gap-8">
						<Inbox className="h-12 w-12 text-cyan-100" />
						<p className="text-gray-100 text-center text-body-md md:text-body-lg">
							Nenhum post encontrado
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default BlogHomePage;
