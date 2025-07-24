import { ArrowRight, Clock, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ptSansCaption } from "@/lib/fonts";
import heroImage from "../../assets/hero-image.svg";
import { Button } from "../ui/button";

const HeroSection = () => {
	return (
		<section className="container relative flex items-center justify-center mt-16">
			<div className="grid grid-cols-1 gap-8 min-h-[20rem] md:grid-cols-2 lg:grid-cols-2 md:h-[36rem] items-center">
				<div className="flex flex-col justify-center items-center gap-4 md:items-start lg:items-start">
					<h1
						className={`${ptSansCaption.className}text-gray-100 text-heading-hg`}
					>
						Venda seus produtos como afiliado em um único lugar
					</h1>

					<div className="flex flex-col items-center gap-4 ">
						<div className="flex items-center gap-2">
							<Clock className="text-cyan-100 h-5 w-5 -ml-5" />
							<span>Crie o seu site em menos de 5 minutos</span>
						</div>

						<div className="flex items-center gap-2">
							<Store className="text-cyan-100 h-5 w-5" />
							<span>Acompanhe e otimize seu negócio online</span>
						</div>
					</div>

					<div className=" flex flex-col gap-2 items-center md:items-start lg:items-start mt-5 text-white ">
						<Button className="rounded-full w-fit" asChild>
							<Link href="/create-store">
								Criar loja grátis
								<ArrowRight />
							</Link>
						</Button>
						<p className="text-gray-300 text-body-xs ">
							Não precisa de cartão de crédito
						</p>
					</div>
				</div>

				<div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
					<Image
						priority
						src={heroImage}
						width={200}
						height={400}
						alt="image ilustratratons hero section"
						className="h-full w-auto object-contain"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
