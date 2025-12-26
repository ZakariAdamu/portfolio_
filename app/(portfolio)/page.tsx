import { Button } from "@/components/ui/button";
import ThemeToggle from "../ThemeToggle";
import PortfolioContent from "@/components/PortfolioContent";

export default function Home() {
	return (
		<div className="min-h-screen fullscreen-container flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-200">
			{/* <div className="max-w-3xl text-center space-y-10">
				<div className="space-x-2">
					<Button className="">Button 1</Button>
					<Button className="" variant="secondary">
						Button 2
					</Button>
				</div>
				<ThemeToggle />
			</div> */}
			<PortfolioContent />
		</div>
	);
}
