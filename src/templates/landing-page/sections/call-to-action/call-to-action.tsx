import { Store } from "lucide-react";
import Image from "next/image";
import bg from "@/assets/background-footer.svg";
import { ptSansCaption } from "@/lib/fonts";
import CreateStoreButton from "../../../../components/create-store-button";

const CallToAction = () => {
	return (
		<section className="relative py-24 md:mt-20 overflow-hidden ">
			<Image
				src={bg}
				alt="bg"
				className="absolute hidden  md:block w-full  object-cover opacity-90 "
			/>
			<div className="relative container flex flex-col items-center gap-6 ">
				<div className="-mt-8 p-4 flex items-center justify-center rounded-full bg-cyan-300 w-fit">
					<Store className="text-cyan-100 h-7 w-7 " />
				</div>
				<div className=" flex flex-col items-center gap-10 md:mt-8">
					<h2
						className={`${ptSansCaption.className} max-w-lg text-balance text-center text-heading-xl text-gray-100}`}
					>
						Crie uma loja online e inicie suas vendas ainda hoje
					</h2>
					<CreateStoreButton />
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
