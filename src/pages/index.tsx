import FeaturesSection from "@/components/features-section/features-section";
import HeroSection from "@/components/hero-section/hero-section";

export default function Home() {
	return (
		<article className="flex flex-col">
			<HeroSection />
			<FeaturesSection />
		</article>
	);
}
