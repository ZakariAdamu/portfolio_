import PortfolioContent from "@/components/PortfolioContent";
import PageLoader from "@/components/ui/page-loader";
import PageLoader2 from "@/components/ui/page-loader-2";
import { Suspense } from "react";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Suspense fallback={<PageLoader2 />}>
				<PortfolioContent />
			</Suspense>
		</main>
	);
}
