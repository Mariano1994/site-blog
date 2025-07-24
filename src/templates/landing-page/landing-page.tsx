import CallToAction from "./sections/call-to-action/call-to-action";
import CustomerStorySection from "./sections/customer-story-section/customer-story-section";
import FeaturesSection from "./sections/features-section/features-section";
import HeroSection from "./sections/hero-section/hero-section";
import SupportSection from "./sections/support-section/support-section";

const LandingPage = () => {
	return (
		<article className="flex flex-col">
			<HeroSection />
			<FeaturesSection />
			<SupportSection />
			<CustomerStorySection />
			<CallToAction />
		</article>
	);
};

export default LandingPage;
