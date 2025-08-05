import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-4">
			<div className="max-w-md w-full text-center">
				<FileQuestion className="text-gray-100 mx-auto mb-6" size={64} />
			</div>

			<div className="relative inline-block mb-3 font-sans">
				<span className="text-8xl font-bolt text-white inline-block transform -rotate-12 -translate-y-2 -translate-x-1">
					4
				</span>
				<span className="text-8xl font-bolt text-white inline-block">0</span>
				<span className="text-8xl font-bolt text-white inline-block">4</span>
			</div>

			<span className="text-gray-100 mb-8">Pagina nao encnontrada</span>

			<div className="mt-6  flex flex-col md:flex-row justify-center gap-4">
				<Button asChild>
					<Link href={"/"}>Voltar para pagina inicial</Link>
				</Button>

				<Button asChild variant={"secondary"}>
					<Link href={"/blog?q="}>
						<Search size={16} />
						<span>Pesquisar posts</span>
					</Link>
				</Button>
			</div>
		</div>
	);
}
