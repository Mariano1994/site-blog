import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
	return (
		<Link
			href={""}
			className=" w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
		>
			<div className="p-2 rounded-md overflow-hidden ">
				<div className="relative overflow-hidden">
					<div className="absolute overflow-hidden top-0 -right-3 bg-gray-600 rounded-r-2xl px-4 py-1">
						<span className=" text-body-xstext-gray-300">20/12/2024</span>
					</div>
					<Image
						src="/assets/first-post.png"
						alt={""}
						width={288}
						height={144}
						className="w-full h-40 object-cover object-center rounded-t-2xl "
					/>
				</div>

				<div className="px-2 mt-4 space-y-4">
					<h2 className="text-heading-sm text-gray-100 line-clamp-3">
						{" "}
						Transformando seu negócio em uma loja virtual
					</h2>
					<p className="text-gray-300 text-body-sm line-clamp-3 ">
						Se você está buscando uma maneira simples e eficaz de vender seus
						produtos online, o Site.Set é a solução perfeita para você
					</p>

					<div className=" flex items-center gap-3 border-t-[1px] border-gray-400 py-4">
						<div className=" relative h-5 w-5 md:w-6 md:h-6 overflow-hidden rounded-full border-blue-200 border-[1px] ">
							<Image src={""} alt="" fill className="object-cover rounded-md" />
						</div>
						<span className=" text-body-sm text-gray-300">Aspen Dokidis</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PostCard;
