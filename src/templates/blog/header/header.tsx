import SeachBar from "@/components/search-bar";

const Header = () => {
	return (
		<div className="flex flex-col py-24   ">
			<header>
				<div className=" container space-y-6 flex flex-col items-start md:justify-between  md:flex-row md:items-end lg:items-end ">
					<div className="flex flex-col gap-4 ">
						<span className="text-body-tag text-cyan-100 w-fit rounded-sm text-center md:text-left py-2 px-4 bg-cyan-300">
							BLOG
						</span>
						<h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl text-gray-100 max-w-2xl">
							Dicas e estrategias para impulsionar o seu negócio
						</h1>
					</div>
					<SeachBar />
				</div>
			</header>
		</div>
	);
};

export default Header;
