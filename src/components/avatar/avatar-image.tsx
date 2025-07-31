import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type AvatarSize = "xs" | "sm";

type AvatarImageProps = Omit<ImageProps, "width" | "height"> & {
	size?: AvatarSize;
};

const avatarSize = {
	xs: "w-6 h-6",
	sm: "w-9 h-9",
};

const AvatarImage = ({ src, alt, size = "xs", ...props }: AvatarImageProps) => {
	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-full border-blue-200 border[1px]",
				avatarSize[size],
			)}
		>
			<Image {...props} src={src} alt={alt} fill />
		</div>
	);
};

export default AvatarImage;
