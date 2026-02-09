"use client";

import { Balancer } from "react-wrap-balancer";
import { useState, useRef, useEffect } from "react";

export function Tagline({ text }: { text: string | null | undefined }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isClamped, setIsClamped] = useState(false);
	const ref = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (ref.current && text) {
			setIsClamped(ref.current.scrollHeight > ref.current.clientHeight);
		}
	}, [text]);

	if (!text) {
		return null;
	}

	return (
		<div>
			<p
				ref={ref}
				className={`text-muted-foreground text-xs @md/card:text-sm ${
					isExpanded ? "" : "line-clamp-3"
				}`}
			>
				<Balancer>{text}</Balancer>
			</p>
			{isClamped && (
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="text-primary text-xs font-semibold mt-1"
				>
					{isExpanded ? "Read Less" : "Read More"}
				</button>
			)}
		</div>
	);
}
