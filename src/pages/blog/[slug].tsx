import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import { useRouter } from "next/router";
import AvatarContainer from "@/components/avatar/avatar-container";
import AvatarContent from "@/components/avatar/avatar-content";
import AvatarDescription from "@/components/avatar/avatar-description";
import AvatarImage from "@/components/avatar/avatar-image";
import AvatarTitle from "@/components/avatar/avatar-title";
import BreadCrumb from "@/components/bread-crumb";

export default function PostPage() {
	const router = useRouter();
	const slug = router.query.slug as string;

	const post = allPosts.find(
		(post) => post.slug.toLocaleLowerCase() === slug.toLocaleLowerCase(),
	);

	const publisedDate = new Date(post?.date as string).toLocaleDateString(
		"pt-pt",
	);
	return (
		<main className="mt-32">
			<BreadCrumb
				link="/blog"
				title="Blog"
				curretPage={post?.title as string}
			/>

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12 ">
				<article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px] ">
					<figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
						<Image
							src={post?.image as string}
							alt={post?.title as string}
							fill
							className="object-cover"
						/>
					</figure>

					<header className="p-4 md:p-6 lg-p-12 pb-0">
						<h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl text-gray-100">
							{post?.title}
						</h1>
						<AvatarContainer>
							<AvatarImage
								src={post?.author.avatar as string}
								alt={post?.author.name as string}
								width={40}
								height={40}
							/>
							<AvatarContent>
								<AvatarTitle>{post?.author.name}</AvatarTitle>
								<AvatarDescription>
									<div className=" flex items-center gap-1">
										<span>Publicado em:</span>
										<span>{publisedDate}</span>
									</div>
								</AvatarDescription>
							</AvatarContent>
						</AvatarContainer>
					</header>
				</article>
			</div>
		</main>
	);
}
