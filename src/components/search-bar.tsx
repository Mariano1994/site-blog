import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const SeachBar = () => {
	const router = useRouter();
	const query = (router.query.q as string) ?? "";

	const handleSearch = useCallback(
		(event: React.FormEvent) => {
			event.preventDefault();

			if (query.trim()) {
				router.push(`/blog?q=${encodeURIComponent(query)}`);
			}
		},
		[query, router],
	);

	const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = event.target.value;
		router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
			shallow: true,
			scroll: false,
		});
	};

	const clearQuery = () => {
		router.push("/blog", undefined, {
			shallow: true,
			scroll: false,
		});
	};

	return (
		<form onSubmit={handleSearch} className=" w-full md:w-fit relative group">
			<Input
				type="text"
				placeholder="Pesquisar..."
				value={query}
				icon={
					<SearchIcon
						className={cn(
							"text-gray-300  top-1/2 h-5 w-5 transition-colors duration-200 group-focus-within:text-blue-300",
							query && "text-blue-300",
						)}
					/>
				}
				className="h-10 w-full  md:w-72 ng-transparent border border-gray-400 pl-9 text-gray-100 outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-body-sm placeholder:text-gray-300 "
				onChange={handleQueryChange}
			/>
			{query && (
				<CircleX
					onClick={clearQuery}
					className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300 transition-colors duration-200 hover:cursor-pointer hover:text-red-400 "
				/>
			)}
		</form>
	);
};

export default SeachBar;
