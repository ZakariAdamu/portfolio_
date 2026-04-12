"use client";

interface FigmaPrototypeProps {
	embedUrl: string;
	title?: string;
	height?: number; //
}

export default function FigmaPrototype({
	embedUrl,
	title = "Interactive Design Prototype",
	height,
}: FigmaPrototypeProps) {
	return (
		<div className="my-12">
			<h3 className="text-2xl font-semibold mb-4">{title}</h3>

			<div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white">
				<iframe
					src={embedUrl}
					width="100%"
					height={height}
					allowFullScreen
					className="w-full"
					style={{ border: "none" }}
					loading="lazy"
				/>
			</div>

			<p className="text-sm text-gray-500 mt-3 text-center">
				Interactive prototype • Click/tap to navigate
			</p>
		</div>
	);
}
