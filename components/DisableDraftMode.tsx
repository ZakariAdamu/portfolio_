"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions/disableDraftMode";
import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
	const router = useRouter();
	const [pending, startTransition] = useTransition();
	const environment = useDraftModeEnvironment();

	// Only show the disable draft mode button when outside of Presentation Tool
	if (environment !== "live" && environment !== "unknown") {
		return null;
	}

	const disable = () =>
		startTransition(async () => {
			await disableDraftMode();
			router.refresh();
		});

	return (
		<div className="fixed md:bottom-7 dark:hover:bg-slate-900 md:left-24 top-4 left-10 md:top-auto md:right-auto z-[50]">
			{pending ? (
				"Disabling draft mode..."
			) : (
				<button
					type="button"
					onClick={disable}
					className="border-slate-500/50 p-2 rounded border-[1px]"
				>
					Disable draft mode
				</button>
			)}
		</div>
	);
}
