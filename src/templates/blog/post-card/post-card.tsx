import Image from "next/image";
import Link from "next/link";
import AvatarContainer from "@/components/avatar/avatar-container";
import AvatarDescription from "@/components/avatar/avatar-description";
import AvatarImage from "@/components/avatar/avatar-image";

interface Author {
	name: string;
	role: string;
	avatar: string;
}

interface PostCardProps {
	slug: string;
	title: string;
	description: string;
	imageSource: string;
	date: string;
	author: Author;
}

const PostCard = ({
	slug,
	title,
	description,
	imageSource,
	date,
	author,
}: PostCardProps) => {
	return (
		<Link
			href={`/blog/${slug}`}
			className=" w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
		>
			<div className="p-2 rounded-md overflow-hidden ">
				<div className="relative overflow-hidden">
					<div className="absolute overflow-hidden top-0 right-0 bg-gray-600 rounded-bl-[10px] px-3 py-2 backdrop-blur-sm">
						<span className=" text-body text-gray-300">{date}</span>
					</div>
					<Image
						src={imageSource}
						alt={""}
						width={288}
						height={144}
						className="w-full h-40 object-cover object-center rounded-xl "
					/>
				</div>

				<div className="px-2 mt-4 space-y-4">
					<h2 className="text-heading-sm text-gray-100 line-clamp-3">
						{" "}
						{title}
					</h2>
					<p className="text-gray-300 text-body-sm line-clamp-3 ">
						{description}
					</p>

					<div className=" flex items-center gap-3 border-t-[1px] border-gray-400 py-4">
						<AvatarContainer>
							<AvatarImage src={author?.avatar} alt={author?.name} />
							<AvatarDescription>{author?.name}</AvatarDescription>
						</AvatarContainer>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PostCard;
