"use client";

import React from "react";

// id, size, x, y, opacity, animationDuration

interface Star {
	id: number;
	size: number;
	x: number;
	y: number;
	opacity: number;
	animationDuration: number;
}

const StartBackground: React.FC = () => {
	const [stars, setStars] = React.useState<Star[]>([]);
	const [meteors, setMeteors] = React.useState<Star[]>([]);

	React.useEffect(() => {
		generateStars();
		generateMeteors();
	}, []);

	const generateStars = () => {
		const numberOfStars = Math.floor(Math.random() * 50) + 50; // Between 50 and 100 stars

		const newStars: Star[] = [];

		for (let i = 0; i < numberOfStars; i++) {
			newStars.push({
				id: i,
				size: Math.random() * 3 + 1, // Size between 1 and 4
				x: Math.random() * 120, // Percentage for left position
				y: Math.random() * 150, // Percentage for top position
				opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
				animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
			});
		}
		setStars(newStars);
	};

	const generateMeteors = () => {
		const numberOfMeteors = Math.floor(Math.random() * 3) + 2; // Between 2 and 5 meteors

		const newMeteors: Star[] = [];

		for (let i = 0; i < numberOfMeteors; i++) {
			newMeteors.push({
				id: i,
				size: Math.random() * 3 + 1, // Size between 1 and 4
				x: Math.random() * 100, // Percentage for left position
				y: Math.random() * 100, // Percentage for top position
				opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
				animationDuration: Math.random() * 3 + 1, // Duration between 1s and 4s
			});
		}
		setMeteors(newMeteors);
	};

	return (
		<div className="fixed bg-rotate inset-0 overflow-hidden pointer-events-none z-0">
			{stars.map((star) => (
				<div
					key={star.id}
					className="star animate-pulse-subtle"
					style={{
						position: "absolute",
						width: `${star.size}px`,
						height: `${star.size}px`,
						left: `${star.x}%`,
						top: `${star.y}%`,
						opacity: star.opacity,
						animationDuration: `${star.animationDuration}s`,
						transform: "translate(-50%, -50%)",
					}}
				/>
			))}
			{meteors.map((meteor) => (
				<div
					key={meteor.id}
					className="meteor animate-meteor"
					style={{
						position: "absolute",
						width: `${meteor.size}px`,
						height: `${meteor.size}px`,
						left: `${meteor.x}%`,
						top: `${meteor.y}%`,
						opacity: meteor.opacity,
						animationDuration: `${meteor.animationDuration}s`,
						transform: "translate(-50%, -50%)",
					}}
				/>
			))}
		</div>
	);
};

export default StartBackground;
