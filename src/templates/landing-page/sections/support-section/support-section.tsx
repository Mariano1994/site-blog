import { HeartHandshake, Paintbrush, Store } from "lucide-react";
import Image from "next/image";
import bg from "@/assets/background-features.svg";
import { ptSansCaption } from "@/lib/fonts";

const SupportSection = () => {
	return (
		<section className=" relative pb-8 md:py-10 bg-gray-800 ">
			<Image
				src={bg}
				alt="bg"
				className="absolute hidden  md:block w-full h-auto object-cover  "
			/>

			<div className="relative container flex flex-col items-center gap-12 md:mt-28 2xl:mt-40 ">
				<h2
					className={`${ptSansCaption.className} text-balance  text-center text-heading-lg md:text-heading-xl text-gray-100 max-w-lg`}
				>
					Sua loja de afiliados, simples, do jeito que deveria ser
				</h2>

				<div className="grid gap-6 md:grid-cols-3 ">
					<div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
							<Paintbrush className="h-6 w-6 text-white" />
						</div>
						<strong className="text-heading-sm text-gray-100 ">
							Personalize seu site
						</strong>
						<p className="text-body-sm text-gray-200">
							Adcione sua logo, favicon, cores no seu catalogo e tenha tudo com
							a sua cara
						</p>
					</div>

					<div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
							<Store className="h-6 w-6 text-white" />
						</div>
						<strong className="text-heading-sm text-gray-100 ">
							Venda de qualquer loja
						</strong>
						<p className="text-body-sm text-gray-200">
							Não importa a loja, o Site.Set permite que você insera qualquer
							link de afiliado.
						</p>
					</div>

					<div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
							<HeartHandshake className="h-6 w-6 text-white" />
						</div>
						<strong className="text-heading-sm text-gray-100 ">
							Receba suporte amigável{" "}
						</strong>
						<p className="text-body-sm text-gray-200">
							Nossa equipe estará sempre pronta para te atender para ajudar no
							que for preciso.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SupportSection;
