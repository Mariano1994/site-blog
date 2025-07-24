import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import featueImage from "@/assets/feature-image.svg";
import { Button } from "../../../../components/ui/button";

const FeaturesSection = () => {
	return (
		<section className="container bg-gray-800 grid gap-6 md:grid-cols-2 py-8 md:py-10">
			<div className="flex flex-col gap-4 bg-gray-500  rounded-lg md:p-12 p-6">
				<span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit uppercase rounded-sm">
					simples
				</span>
				<h2 className="text-gray-100 text-heading-lg">
					Crie um catálogo de produtos online em poucos minutos
				</h2>
			</div>

			<div className="flex flex-col gap-4 bg-gray-500  rounded-lg md:p-12 p-6">
				<span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit uppercase rounded-sm">
					prático
				</span>
				<h2 className="text-gray-100 text-heading-lg">
					Venda para seu público através de uma plataforma única
				</h2>
			</div>

			<div className="col-span-full flex flex-col gap-2">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 p-6 rounded-lg bg-gray-500 ">
					<div className="flex flex-col gap-4 bg-gray-500  rounded-lg md:p-12 p-6">
						<span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit uppercase rounded-sm">
							personalizável
						</span>
						<h2 className="text-gray-100 text-heading-lg">
							Tenha uma loja online personalizada com a cara da sua marca
						</h2>

						<Button
							asChild
							className="rounded-full hidden mt-4 md:mt-auto w-fit md:flex "
						>
							<Link href={"/create-store"}>
								Criar loja grátis <ArrowRight />
							</Link>
						</Button>
					</div>
					<div className="flex flex-col items-center justify-center w-full">
						<div className="w-full max-w-md overflow-hidden">
							<Image
								src={featueImage}
								alt="features images"
								width={440}
								height={330}
								className="object-cover w-full"
							/>
						</div>

						<Button
							asChild
							className="w-full rounded-full mt-4 md:mt-auto md:hidden "
						>
							<Link href={"/create-store"}>
								Criar loja <ArrowRight />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
