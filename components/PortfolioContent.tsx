import React from "react";
import HeroSection from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";

const PortfolioContent = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TestimonialsSection />
			<ProjectsSection />
			<CertificationsSection />
			{/* <ServicesSection /> */}
			<ContactSection />
		</>
	);
};

export default PortfolioContent;
