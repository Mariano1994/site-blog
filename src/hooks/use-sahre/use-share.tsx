import { Link } from "lucide-react";
import { useCallback, useMemo } from "react";
import { useCliboard } from "../use-clipboard/use-clipblorad";
import {
	type ShareConfig,
	SOCIAL_MEDIA_PLATFORMS,
} from "./social-media-platforms";

type UseShareProps = ShareConfig & {
	clipboardTime?: number;
};

type SocialProvider = keyof typeof SOCIAL_MEDIA_PLATFORMS | "clipboard";

export const useShare = ({
	url,
	title,
	text,
	clipboardTime = 3000,
}: UseShareProps) => {
	const { isCopied, handleCopy } = useCliboard({ timeout: clipboardTime });

	const shareConfig = useMemo(
		() => ({
			url,
			...(title && { title }),
			...(text && { text }),
		}),
		[url, title, text],
	);

	const share = useCallback(
		async (provider: SocialProvider) => {
			try {
				if (provider === "clipboard") {
					return await handleCopy(url);
				}
				const providerConfig = SOCIAL_MEDIA_PLATFORMS[provider];

				if (!providerConfig) {
					throw new Error(`Provider not found: ${provider}`);
				}

				const shareUrl = providerConfig.shareUrl(shareConfig);
				const shareWindow = window.open(
					shareUrl,
					"_blank,width=600,height=600,location=yes,status=yes",
				);

				if (shareWindow) {
					shareWindow.focus();
				}

				return !!shareWindow;
			} catch (error) {
				console.error(error);
				return false;
			}
		},
		[shareConfig, handleCopy, url],
	);

	const buttonShare = useMemo(
		() => [
			...Object.entries(SOCIAL_MEDIA_PLATFORMS).map(([key, provider]) => ({
				provider: key,
				name: provider.name,
				icon: provider.icon,
				action: () => share(key as SocialProvider),
			})),
			{
				provider: "clipboard",
				name: isCopied ? "Link copiado" : "Copiar link",
				icon: <Link className="h-4 w-4" />,
				action: () => share("clipboard"),
			},
		],
		[share, isCopied],
	);

	return {
		buttonShare,
	};
};
