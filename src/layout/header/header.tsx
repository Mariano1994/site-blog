import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import NaviLinks from "./nav-links";

const Header = () => {
	return (
		<header className="fixed top-0 z-50 w-full border-b bg-gray-800 border-white/10 backdrop:blur supports-[backdrop-filter]:bg-background/60 text-sm ">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/">
						<Logo />
					</Link>

					<nav className="flex items-center gap-6">
						<NaviLinks />

						<Button variant="secondary" asChild>
							<Link href={"/comecar"}>Começar</Link>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
