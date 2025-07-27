import Header from "./header/header";
import PostCard from "./post-card/post-card";

const BlogHomePage = () => {
	return (
		<>
			<Header />
			<PostCard
				title="Transformando seu negócio em uma loja virtual"
				description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
				date="20/12/24"
				author={{
					name: "Annette Bones",
					role: "CEO na Anne Corp",
					avatar: "/assets/customer01.png",
				}}
				imageSource="/assets/first-post.png"
				slug="transformando-seu-negocio-em-uma-loja-virtual"
			/>
		</>
	);
};

export default BlogHomePage;
