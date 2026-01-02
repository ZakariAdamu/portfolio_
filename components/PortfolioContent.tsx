import React from "react";
import HeroSection from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const PortfolioContent = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TestimonialsSection />
			{/* <ProjectsSection />
    <ContactSection /> */}
		</>
	);
};

export default PortfolioContent;
