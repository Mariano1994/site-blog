import Image from "next/image";
import customer01 from "@/assets/customer01.png";
import customer02 from "@/assets/customer02.png";
import { ptSansCaption } from "@/lib/fonts";

const testimonials = [
	{
		id: crypto.randomUUID(),
		author: {
			name: "Annette Bones",
			role: "CEO na Anne Corp",
			avatar: customer01,
		},
		content:
			"Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A",
	},

	{
		id: crypto.randomUUID(),
		author: {
			name: "Jacob Jones",
			role: "CEO na JJ Org",
			avatar: customer02,
		},
		content:
			"Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
	},
];
const CustomerStorySection = () => {
	return (
		<section className="container py-8 md:py-10 md:mt-20 2xl:mt-52 -mb-12">
			<div className="flex flex-col items-center gap-12">
				<h2
					className={`${ptSansCaption.className}text-gray-100 text-heading-lg md:text-heading-xl `}
				>
					Quem utiliza, aprova!
				</h2>

				<div className="grid gap-8 md:grid-cols-2 ">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
						>
							<p className="text-balance text-gray-200">
								{testimonial.content}
							</p>

							<div className="flex items-center gap-3 mt-4">
								<div className="relative h-10 w-10 overflow-hidden rounded-full">
									<Image
										src={testimonial.author.avatar}
										alt={testimonial.author.name}
										fill
										className="object-cover"
									/>
								</div>

								<div className="flex flex-col ">
									<strong className="text-gray-200 text-sm ">
										{testimonial.author.name}
									</strong>
									<span className="text-xs text-gray-300">
										{testimonial.author.role}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CustomerStorySection;
