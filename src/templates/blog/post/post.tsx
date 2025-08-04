import type { Post } from "contentlayer/generated";
import Image from "next/image";
import AvatarContainer from "@/components/avatar/avatar-container";
import AvatarContent from "@/components/avatar/avatar-content";
import AvatarDescription from "@/components/avatar/avatar-description";
import AvatarImage from "@/components/avatar/avatar-image";
import AvatarTitle from "@/components/avatar/avatar-title";
import BreadCrumb from "@/components/bread-crumb";
import Markdown from "@/components/markdown/markdown";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-sahre/use-share";

type PostProps = {
	post: Post;
};

const PostP = ({ post }: PostProps) => {
	const postUrl = `https://site.set/blog/${post.slug}`;

	const { buttonShare } = useShare({
		url: postUrl,
		title: post?.title,
		text: post?.description,
	});

	const publisedDate = new Date(post?.date as string).toLocaleDateString(
		"pt-pt",
	);
	return (
		<main className=" pt-24 ">
			<div className="container space-y-8 px-4 md:px-8 ">
				<BreadCrumb
					link="/blog"
					title="Blog"
					curretPage={post?.title as string}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] lg:gap-12 ">
					<article className="bg-gray-600 rounded-lg  border-gray-400 border-[1px] ">
						<figure className="relative  w-full rounded-t-lg">
							<Image
								src={post?.image as string}
								alt={post?.title as string}
								width={800}
								height={400}
								className="object-cover"
							/>
						</figure>

						<header className=" mt-8 p-4 md:p-6 lg-p-12 pb-0">
							<h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl text-gray-100">
								{post?.title}
							</h1>
							<AvatarContainer>
								<AvatarImage
									src={post?.author.avatar as string}
									alt={post?.author.name as string}
									size="sm"
								/>
								<AvatarContent>
									<AvatarTitle>{post?.author.name}</AvatarTitle>
									<AvatarDescription>
										<div className=" flex items-center gap-1">
											<span>Publicado em:</span>
											<time dateTime={post?.date}>{publisedDate}</time>
										</div>
									</AvatarDescription>
								</AvatarContent>
							</AvatarContainer>
						</header>

						<div className="prose prove-invert max-w-none px-4 mt-8 mb-16 md:px-6 lg:px-12">
							<Markdown content={post?.body?.raw as string} />
						</div>
					</article>

					<aside className="">
						<div className="rounded-lg bg-gray-800 py-6   md:py-0">
							<h2 className="hidden md:block mb-4 text-heading-xs text-gray-100">
								Compartilhar
							</h2>

							<div className="space-x-3 md:space-y-3 md:space-x-0 flex items-center justify-center md:flex-col ">
								{buttonShare.map((provider) => (
									<Button
										variant="outline"
										key={provider.name}
										onClick={() => provider.action()}
										className="w-fit md:w-full justify-start gap-2"
									>
										{provider.icon}
										<span className="hidden md:block ">{provider.name}</span>
									</Button>
								))}
							</div>
						</div>
					</aside>
				</div>
			</div>
		</main>
	);
};

export default PostP;
