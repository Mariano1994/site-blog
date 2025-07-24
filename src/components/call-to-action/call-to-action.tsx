import { Store } from "lucide-react";
import { ptSansCaption } from "@/lib/fonts";
import CreateStoreButton from "../criate-store-button";

const CallToAction = () => {
	return (
		<section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-800 mt-20">
			<div className="container flex flex-col items-center gap-6 ">
				<div className="-mt-32 p-4 flex items-center justify-center rounded-full bg-cyan-300 w-fit">
					<Store className="text-cyan-100 h-7 w-7 " />
				</div>
				<h2
					className={`${ptSansCaption.className} text-balance text-center text-heading-xl text-gray-100}`}
				>
					Crie uma loja online e inicie suas vendas ainda hoje
				</h2>
				<CreateStoreButton />
			</div>
		</section>
	);
};

export default CallToAction;
