"use client";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const LoaderFour: React.FC<{ text?: string }> = ({
	text = "Loading...",
}) => {
	// Render only on the client during initial hydration/loading.
	// `visible` starts true (so server render is identical) and is cleared shortly after mount.
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => setVisible(false), 600);
		return () => clearTimeout(t);
	}, []);

	const ballTransition = (delay: number) => ({
		duration: 0.6,
		repeat: Infinity,
		repeatType: "loop" as const,
		delay,
	});

	if (!visible) return null;

	return (
		<div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/90 dark:bg-black/90">
			<div className="flex flex-col items-center gap-4">
				<div className="relative font-bold text-black dark:text-white">
					<motion.span
						animate={{ skewX: [0, -12, 0], scaleX: [1, 1.1, 1] }}
						transition={{
							duration: 0.4,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="inline-block"
					>
						{text}
					</motion.span>
				</div>

				<div className="flex items-end gap-3">
					<motion.div
						className="h-3 w-3 rounded-full bg-neutral-800 dark:bg-neutral-200"
						animate={{ y: [0, -10, 0] }}
						transition={ballTransition(0.8)}
					/>
					<motion.div
						className="h-3 w-3 rounded-full bg-neutral-800 dark:bg-neutral-200"
						animate={{ y: [0, -10, 0] }}
						transition={ballTransition(0.12)}
					/>
					<motion.div
						className="h-3 w-3 rounded-full bg-neutral-800 dark:bg-neutral-200"
						animate={{ y: [0, -10, 0] }}
						transition={ballTransition(0.24)}
					/>
				</div>
			</div>
		</div>
	);
};
