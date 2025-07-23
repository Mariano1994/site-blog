import Link from "next/link";
import Logo from "../logo";
import FooterLinks from "./footer-links";

const Footer = () => {
	return (
		<footer className=" w-full py-8 bg-gray-500  ">
			<div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex  justify-start md:justify-between md:items-center gap-12 md:gap-8 ">
					<Link href="/">
						<Logo />
					</Link>

					<FooterLinks />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
