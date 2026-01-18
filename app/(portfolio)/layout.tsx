import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import { ThemeProvider } from "next-themes";
import { SanityLive } from "@/sanity/lib/live";
import { ThemeToggle } from "../ThemeToggle";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity/visual-editing";
import FloatingDock from "@/components/ui/floating-dock";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Zakari Adamu | Software Engineer",
	description:
		"I'm Zakari Adamu, a software engineer specializing in building exceptional digital experiences.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					enableSystem={true}
					defaultTheme="system"
					attribute="class"
				>
					<div className="fixed md:bottom-6 md:right-24 top-4 right-10 md:top-auto md:left-auto z-[50]">
						<ThemeToggle />
					</div>
					{children}
					<FloatingDock />

					<SanityLive />

					{(await draftMode()).isEnabled && (
						<>
							<VisualEditing />
							<DisableDraftMode />
						</>
					)}
				</ThemeProvider>
			</body>
		</html>
	);
}
