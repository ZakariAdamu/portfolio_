"use client";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

type ThemeOption = "light" | "dark" | "system";

interface ThemeToggleProps {
	labels?: {
		toggle?: string;
		light?: string;
		dark?: string;
		system?: string;
	};
	openOnHover?: boolean;
}

export function ThemeToggle({
	labels = {
		toggle: "Toggle theme",
		light: "Light",
		dark: "Dark",
		system: "System",
	},
	openOnHover = true,
}: ThemeToggleProps) {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const [open, setOpen] = useState(false);

	const current = (theme === "system" ? resolvedTheme : theme) as
		| ThemeOption
		| undefined;
	const isDark = current === "dark";

	const hoverHandlers = openOnHover
		? {
				onMouseEnter: () => setOpen(true),
				onMouseLeave: () => setOpen(false),
			}
		: {};

	return (
		<DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
			<div {...hoverHandlers}>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="relative"
						role="switch"
						aria-checked={isDark}
						aria-label={labels.toggle}
					>
						<Sun className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
						<Moon className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
						<span className="sr-only">{labels.toggle}</span>
					</Button>
				</DropdownMenuTrigger>
			</div>
			<DropdownMenuContent alignOffset={10} align="end" {...hoverHandlers}>
				<DropdownMenuItem onClick={() => setTheme("light")}>
					{labels.light}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					{labels.dark}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					{labels.system}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
