import { useCallback, useEffect, useState } from "react";

type useCliboardProps = {
	timeout?: number;
};

export const useCliboard = ({ timeout = 2000 }: useCliboardProps) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = useCallback(async (text: string) => {
		if (!navigator.clipboard) {
			console.error("navigator.clipboard not available");
			return false;
		}

		try {
			await navigator.clipboard.writeText(text);
			setIsCopied(true);
			return true;
		} catch (error) {
			console.error(error);
			setIsCopied(false);
			return false;
		}
	}, []);

	useEffect(() => {
		if (isCopied) {
			const timer = setTimeout(() => {
				setIsCopied(false);
			}, timeout);

			return () => clearTimeout(timer);
		}
	}, [isCopied, timeout]);

	return {
		isCopied,
		handleCopy,
	};
};
