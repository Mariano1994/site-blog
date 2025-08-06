"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ErrorBoundaryProps = {
	error: Error;
	reset: () => void;
};
export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
	return (
		<div className="min-h-[400px] flex items-center justify-center p-4">
			<div className="max-w-md w-full text-center">
				<div className="relative inline-block mb-6">
					<AlertTriangle className="text-gray-100 mx-auto" size={64} />

					<div className="absolute h-1 w-16 bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 -rotate-12"></div>
				</div>

				<h2 className="tetx-heading-xl text-white font-sans mb-2">
					alguma coisa aconteceu de errado!
				</h2>
				{error && (
					<p className="text-gray-200 mb-2 px-4 text-body-sm overflow-hidden text-ellipsis max-h-24">
						{error.message}
					</p>
				)}

				<Button onClick={reset} className="mt-4">
					Tentar novamente
				</Button>
			</div>
		</div>
	);
}
