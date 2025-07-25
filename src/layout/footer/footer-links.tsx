import Link from "next/link";

const links = [
	{
		title: "Termos de Uso",
		href: "#",
	},
	{
		title: "Politica de Privacidade",
		href: "#",
	},
	{
		title: "Enviar feedback",
		href: "#",
	},
];

const FooterLinks = () => {
	return (
		<ul className=" flex flex-col justify-between items-start md:flex-row md:items-center gap-4 md:gap-6 ">
			{links.map((link) => (
				<li
					key={link.title}
					className="text-body-sm text-blue-100 hover:text-blue-200"
				>
					<Link href={link.href}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default FooterLinks;
