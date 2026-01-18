"use client";
// import PortfolioContent from "@/components/PortfolioContent";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader2() {
	// const [loading, setLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	// const [contentLoaded, setContentLoaded] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((p) => (p >= 95 ? p : p + 1));
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{/* Loader overlay */}

			<div className="fixed inset-0 bg-gradient-to-br from-[#04061D] via-[#0a0d2e] to-[#04061D] flex items-center justify-center z-50">
				{/* Animated gradient background */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
					<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
				</div>

				{/* Loader content */}
				<div className="relative text-center space-y-8 px-4">
					{/* Animated logo/icon */}
					<div className="flex justify-center">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-spin-slow" />
							<div className="relative bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-full backdrop-blur-xl border border-white/20">
								{/* <Rocket className="w-16 h-16 text-white animate-bounce-slow" /> */}
								{/* <Image
										src=":rocket:"
										alt="Joinda Quest"
										width={140}
										height={40}
										className="h-6 md:h-16 w-auto"
										priority
										placeholder="blur"
									/> */}
							</div>
						</div>
					</div>

					{/* Loading text */}
					<div
						className="space-y-4"
						style={{
							fontFamily: "Inter Tight",
						}}
					>
						<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
							Welcome!
						</h1>
						<p className="text-white/60 text-lg md:text-xl font-medium">
							Preparing your experience...
						</p>
					</div>

					{/* Progress bar */}
					<div className="w-full max-w-md mx-auto space-y-2">
						<div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
							<div
								className="h-full bg-gradient-to-r from-purple-900 via-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
								style={{ width: `${progress}%` }}
							/>
						</div>
						<p className="text-white/40 text-sm">{Math.round(progress)}%</p>
					</div>

					{/* Animated dots */}
					<div className="flex justify-center gap-2">
						<div
							className="w-3 h-3 bg-purple-900 rounded-full animate-bounce"
							style={{ animationDelay: "0s" }}
						/>
						<div
							className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
							style={{ animationDelay: "0.2s" }}
						/>
						<div
							className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"
							style={{ animationDelay: "0.4s" }}
						/>
					</div>
				</div>

				<style jsx>{`
					@keyframes spin-slow {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}

					@keyframes bounce-slow {
						0%,
						100% {
							transform: translateY(-10%);
						}
						50% {
							transform: translateY(10%);
						}
					}

					@keyframes gradient {
						0%,
						100% {
							background-size: 200% 200%;
							background-position: left center;
						}
						50% {
							background-size: 200% 200%;
							background-position: right center;
						}
					}

					.animate-spin-slow {
						animation: spin-slow 3s linear infinite;
					}

					.animate-bounce-slow {
						animation: bounce-slow 2s ease-in-out infinite;
					}

					.animate-gradient {
						animation: gradient 3s ease infinite;
						background-size: 200% 200%;
					}

					.delay-1000 {
						animation-delay: 1s;
					}

					.delay-2000 {
						animation-delay: 2s;
					}
				`}</style>
			</div>

			{/* Main content - rendered but hidden during loading to preload images */}
			{/* <main className="min-h-screen">
				<PortfolioContent />
			</main> */}
		</>
	);
}
