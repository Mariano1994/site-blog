import CallToAction from "@/components/call-to-action/call-to-action";
import CustomerStorySection from "@/components/customer-story-section/customer-story-section";
import FeaturesSection from "@/components/features-section/features-section";
import HeroSection from "@/components/hero-section/hero-section";
import SupportSection from "@/components/support-section/support-section";

export default function Home() {
	return (
		<article className="flex flex-col">
			<HeroSection />
			<FeaturesSection />
			<SupportSection />
			<CustomerStorySection />
			<CallToAction />
		</article>
	);
}
