"use client";
import { useShare } from "@/hooks/use-sahre/use-share";
import { Button } from "./ui/button";

type PostShareProps = {
	url: string;
	title: string;
	description: string;
};

const SharePost = ({ url, description, title }: PostShareProps) => {
	const { buttonShare } = useShare({
		url,
		title,
		text: description,
	});

	return (
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
	);
};

export default SharePost;
