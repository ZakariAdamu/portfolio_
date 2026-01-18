import React from "react";
import { FloatingDockClient } from "@/components/ui/floating-dock-client";
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconChecklist,
	IconHome,
	IconMail,
	IconNewSection,
	IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDock() {
	const links = [
		{
			title: "Home",
			icon: (
				<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "About Me",
			icon: (
				<Image
					src="https://assets.aceternity.com/logo-dark.png"
					width={20}
					height={20}
					alt="Aceternity Logo"
				/>
			),
			href: "#about",
		},
		{
			title: "Testimonials",
			icon: (
				<IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#testimonials",
		},
		{
			title: "Projects",
			icon: (
				<IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#projects",
		},
		{
			title: "Certifications",
			icon: (
				<IconChecklist className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "Contact",
			icon: (
				<IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#contact",
		},
		{
			title: "GitHub",
			icon: (
				<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "https://github.com/ZakariAdamu",
		},
		{
			title: "Linked In",
			icon: (
				<IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "https://www.linkedin.com/in/zakari-adamu-84b4781b9",
		},
	];
	return (
		<div className="fixed inset-x-0 bottom-4 z-30 flex items-center justify-center">
			<FloatingDockClient items={links} />
		</div>
	);
}
