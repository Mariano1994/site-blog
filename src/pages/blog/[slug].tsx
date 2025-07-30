import { allPosts } from "contentlayer/generated";
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
		</main>
	);
}
