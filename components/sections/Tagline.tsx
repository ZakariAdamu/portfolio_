"use client";

import { Balancer } from "react-wrap-balancer";
import { useState, useRef, useLayoutEffect } from "react";

export function Tagline({ text }: { text: string | null | undefined }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isClamped, setIsClamped] = useState(false);
	const ref = useRef<HTMLParagraphElement>(null);

	useLayoutEffect(() => {
		const element = ref.current;
		if (!element || !text) {
			return;
		}
		const checkClamped = () => {
			setIsClamped(element.scrollHeight > element.clientHeight);
		};
		const resizeObserver = new ResizeObserver(checkClamped);
		resizeObserver.observe(element);
		checkClamped(); // Initial check
		return () => resizeObserver.disconnect();
	}, [text]);

	if (!text) {
		return null;
	}

	return (
		<div>
			{/* When not expanded, avoid using Balancer because it can interfere with
				the CSS `line-clamp` behaviour. Use plain text for accurate clamping,
				and enable Balancer only when expanded. */}
			<p
				ref={ref}
				className={`text-muted-foreground text-xs @md/card:text-sm ${
					isExpanded ? "" : "line-clamp-2"
				}`}
			>
				{isExpanded ? <Balancer>{text}</Balancer> : text}
			</p>
			{isClamped && (
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					aria-expanded={isExpanded}
					className="text-sky-600 dark:text-sky-400 text-xs font-semibold mt-1 hover:underline"
				>
					{isExpanded ? "Read Less" : "Read More"}
				</button>
			)}
		</div>
	);
}
