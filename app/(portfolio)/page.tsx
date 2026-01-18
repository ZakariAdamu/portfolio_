import PortfolioContent from "@/components/PortfolioContent";
import PageLoader from "@/components/ui/page-loader";
import { Suspense } from "react";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Suspense fallback={<PageLoader />}>
				<PortfolioContent />
			</Suspense>
		</main>
	);
}
