import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import { inter } from "@/lib/fonts";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div
			className={` ${inter.className} relative flex min-h-screen flex-col dark text-white bg-gray-800`}
		>
			<Header />
			<main className="flex-1 flex flex-col mt-10 ">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
