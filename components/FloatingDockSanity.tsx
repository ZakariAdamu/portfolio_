"use server";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { FloatingDockClient } from "./ui/floating-dock-client";

const NAVIGATION_QUERY =
	defineQuery(`*[_type == "navigation"] | order(order asc){
  title,
  href,
  icon,
  isExternal
}`);

export async function FloatingDockSanity() {
	const { data: navItems } = await sanityFetch({ query: NAVIGATION_QUERY });

	if (!navItems || navItems.length === 0) {
		return null;
	}
	return (
		<div className="fixed inset-x-0 bottom-4 z-30 flex items-center justify-center">
			<FloatingDockClient items={navItems} />
		</div>
	);
}
