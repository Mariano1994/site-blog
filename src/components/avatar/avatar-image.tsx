import Image, { type ImageProps } from "next/image";

const AvatarImage = ({ src, alt, height, width, ...props }: ImageProps) => {
	return <Image {...props} src={src} alt={alt} height={height} width={width} />;
};

export default AvatarImage;
