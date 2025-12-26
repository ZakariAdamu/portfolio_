"use client";

import { useEffect, useMemo } from "react";

interface Star {
	id: string;
	size: number;
	x: number;
	y: number;
	opacity: number;
	animationDuration: number;
}

export default function StarBackground() {
	const stars = useMemo<Star[]>(() => {
		const count = Math.floor(Math.random() * 50) + 50;

		return Array.from({ length: count }).map((_, i) => ({
			id: `star-${i}-${Math.random()}`,
			size: Math.random() * 2 + 1,
			x: Math.random() * 100,
			y: Math.random() * 100,
			opacity: Math.random() * 0.5 + 0.5,
			animationDuration: Math.random() * 4 + 2,
		}));
	}, []);

	const meteors = useMemo<Star[]>(() => {
		const count = Math.floor(Math.random() * 3) + 2;

		return Array.from({ length: count }).map((_, i) => ({
			id: `meteor-${i}-${Math.random()}`,
			size: Math.random() * 2 + 1,
			x: Math.random() * 100,
			y: Math.random() * 100,
			opacity: 1,
			animationDuration: Math.random() * 3 + 2,
		}));
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none fullscreen-container">
			{stars.map((star) => (
				<div
					key={star.id}
					className="star animate-pulse-subtle"
					style={{
						width: star.size,
						height: star.size,
						left: `${star.x}%`,
						top: `${star.y}%`,
						opacity: star.opacity,
						animationDuration: `${star.animationDuration}s`,
					}}
				/>
			))}

			{meteors.map((meteor) => (
				<div
					key={meteor.id}
					className="meteor animate-meteor"
					style={{
						left: `${meteor.x}%`,
						top: `${meteor.y}%`,
						animationDuration: `${meteor.animationDuration}s`,
					}}
				/>
			))}
		</div>
	);
}
