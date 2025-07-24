import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const CreateStoreButton = () => {
	return (
		<Button className="rounded-full w-fit" asChild>
			<Link href="/create-store">
				Criar loja grátis
				<ArrowRight />
			</Link>
		</Button>
	);
};

export default CreateStoreButton;
