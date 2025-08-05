"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
	{
		title: "Início",
		href: "/",
	},
	{
		title: "Blog",
		href: "/blog",
	},
];

const NaviLinks = () => {
	const pathname = usePathname();

	return (
		<ul className="flex items-center gap-6">
			{links.map((link) => (
				<li
					key={link.href}
					className={cn(
						"text-action-sm text-gray-100 transition-colors duration-200 ease-in-out ",
						pathname === link.href && "text-blue-100",
						pathname !== link.href && "hover:text-blue-200",
					)}
				>
					<Link href={link.href}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default NaviLinks;
