import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
	return (
		<div className="min-h-screen fullscreen-container flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-200">
			<div className="max-w-3xl text-center space-y-10">
				<h1 className="text-4xl font-bold mb-4">Hello World!</h1>
				<p className="text-lg">Welcome to my Next.js app with Tailwind CSS.</p>
				<div className="space-x-2">
					<Button className="">Button 1</Button>
					<Button className="" variant="secondary">
						Button 2
					</Button>
				</div>
				<ThemeToggle />
			</div>
		</div>
	);
}
