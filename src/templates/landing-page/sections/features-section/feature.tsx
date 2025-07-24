interface FeatureProps {
	feature: {
		id: string;
		tag: string;
		title: string;
	};
}

const Feature = ({ feature }: FeatureProps) => {
	return (
		<div className="flex flex-col gap-4 bg-gray-500  rounded-lg md:p-12 p-6">
			<span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit uppercase rounded-sm">
				{feature.tag}
			</span>
			<h2 className="text-gray-100 text-heading-lg">{feature.title}</h2>
		</div>
	);
};

export default Feature;
