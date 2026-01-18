"use client";
import React, { useEffect, useState } from "react";

/**
 * Production-ready skeleton loader used during initial hydration.
 * - Mirrors main page layout (nav, hero, sections, projects, footer)
 * - Uses Tailwind utility classes and respects `prefers-reduced-motion`
 * - Adds ARIA attributes for screen readers
 */
export const SkeletonLoader: React.FC = () => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		// Keep the loader visible for a short, consistent minimum so
		// quick navigations don't flash content unexpectedly.
		const minVisible = 700;
		const t = setTimeout(() => setVisible(false), minVisible);
		return () => clearTimeout(t);
	}, []);

	if (!visible) return null;

	const prefersReducedMotion =
		typeof window !== "undefined" &&
		window.matchMedia &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	const base = prefersReducedMotion ? "opacity-95" : "animate-pulse";

	return (
		<div
			className="fixed inset-0 z-[60] flex items-start justify-center bg-white/95 dark:bg-black/95 p-6 md:p-10"
			role="status"
			aria-live="polite"
			aria-busy="true"
		>
			<span className="sr-only">Loading content</span>

			<div className="w-full max-w-6xl space-y-8">
				{/* Top navigation skeleton */}
				{/* <header className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div
							className={`h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
						<div
							className={`h-4 w-40 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
					</div>
					<nav className="flex items-center gap-4">
						<div
							className={`h-3 w-14 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
						<div
							className={`h-3 w-14 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
						<div
							className={`h-3 w-14 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
					</nav>
				</header> */}

				{/* Hero skeleton */}
				<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="space-y-4">
						<div
							className={`h-10 w-3/4 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
						<div
							className={`h-6 w-1/2 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
						<div
							className={`h-4 w-36 rounded-full bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
					</div>

					<div className="flex justify-center md:justify-end">
						<div
							className={`h-48 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
					</div>
				</section>

				{/* About / Services skeleton */}
				<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div
						className={`col-span-1 h-36 rounded-lg bg-neutral-200 dark:bg-neutral-700 ${base}`}
					/>
					<div
						className={`col-span-1 h-36 rounded-lg bg-neutral-200 dark:bg-neutral-700 ${base}`}
					/>
					<div
						className={`col-span-1 h-36 rounded-lg bg-neutral-200 dark:bg-neutral-700 ${base}`}
					/>
				</section>

				{/* Projects grid skeleton */}
				<section>
					<div className="mb-4">
						<div
							className={`h-6 w-40 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
						/>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{Array.from({ length: 6 }).map((_, i) => (
							<article
								key={i}
								className={`space-y-4 rounded-lg p-4 bg-neutral-100 dark:bg-neutral-800/60 ${base}`}
								aria-hidden="true"
							>
								<div className="h-36 w-full rounded-md bg-neutral-200 dark:bg-neutral-700" />
								<div className="h-4 w-3/4 rounded-md bg-neutral-200 dark:bg-neutral-700" />
								<div className="h-3 w-1/2 rounded-md bg-neutral-200 dark:bg-neutral-700" />
							</article>
						))}
					</div>
				</section>

				{/* Contact / footer skeleton */}
				<section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
					<div
						className={`h-40 rounded-lg bg-neutral-200 dark:bg-neutral-700 ${base}`}
					/>
					<div
						className={`h-40 rounded-lg bg-neutral-200 dark:bg-neutral-700 ${base}`}
					/>
				</section>

				<footer className="mt-6 flex items-center justify-between">
					<div
						className={`h-4 w-40 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
					/>
					<div
						className={`h-4 w-24 rounded-md bg-neutral-200 dark:bg-neutral-700 ${base}`}
					/>
				</footer>
			</div>
		</div>
	);
};
