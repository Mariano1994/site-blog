import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import { useRouter } from "next/router";
import BreadCrumb from "@/components/bread-crumb";

export default function PostPage() {
	const router = useRouter();
	const slug = router.query.slug as string;

	const post = allPosts.find((post) =>
		post.slug.toLocaleLowerCase().includes(slug.toLocaleLowerCase()),
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
				</article>
			</div>
		</main>
	);
}
