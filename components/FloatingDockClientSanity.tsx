"use client";

import { IconLogout, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { DynamicIcon } from "./DynamicIcon";
import { useSidebar } from "./ui/sidebar";

interface NavItem {
    title?: string | null;
    href?: string | null;
    icon?: string | null;
    isExternal?: boolean | null;
}

interface FloatingDockClientProps {
    navItems: NavItem[];
}

interface DockLink {
    title: string;
    href?: string;
    icon: React.ReactNode;
    isExternal?: boolean | null;
    onClick?: () => void;
}

const MAX_VISIBLE_ITEMS_DESKTOP = 6;
const MAX_VISIBLE_ITEMS_MOBILE = 8;

const getVisibleLinks = (links: DockLink[], maxItems: number) => {
    const shouldShowMore = links.length > maxItems;
    return {
        shouldShowMore,
        visible: shouldShowMore ? links.slice(0, maxItems) : links,
        hidden: shouldShowMore ? links.slice(maxItems) : [],
    };
};

export function FloatingDockClient({ navItems }: FloatingDockClientProps) {
    const { open } = useSidebar();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopMoreMenuOpen, setDesktopMoreMenuOpen] = useState(false);
    const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = useState(false);

    const isSidebarOpen = open;

    const links: DockLink[] = [
        ...navItems.map((item) => ({
            title: item.title || "",
            href: item.href || "#",
            icon: <DynamicIcon iconName={item.icon || "IconHome"} />,
            isExternal: item.isExternal,
        })),
        ...(!isSidebarOpen
            ? [
                    {
                        title: "Sign Out",
                        icon: <IconLogout className="h-full w-full" />,
                        // onClick: () => signOut(),
                    },
              ]
            : []),
    ];

    const desktop = getVisibleLinks(links, MAX_VISIBLE_ITEMS_DESKTOP);
    const mobile = getVisibleLinks(links, MAX_VISIBLE_ITEMS_MOBILE);

    return (
        <>
            {/* Desktop dock */}
            <div
                className={`hidden md:block fixed z-30 transition-all duration-300 transform-gpu will-change-transform pointer-events-none group/dock ${
                    isSidebarOpen
                        ? "bottom-6 left-[calc(50%-var(--sidebar-width)/2)] -translate-x-1/2"
                        : "bottom-6 left-1/2 -translate-x-1/2"
                }`}
            >
                <div className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-3xl bg-white/6 dark:bg-black/40 backdrop-blur-md border border-white/6 dark:border-white/10 shadow-lg">
                    {desktop.visible.map((item) => (
                        <DockIcon
                            key={`${item.title}-${item.href}`}
                            item={item}
                            isVertical={false}
                        />
                    ))}

                    {desktop.shouldShowMore && (
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setDesktopMoreMenuOpen(!desktopMoreMenuOpen)}
                                className="group relative flex items-center justify-center w-12 h-12 rounded-full"
                                aria-expanded={desktopMoreMenuOpen}
                            >
                                <div className="flex items-center justify-center w-full h-full rounded-full bg-white/8 dark:bg-white/5 border border-white/8 dark:border-white/10 hover:scale-110 transition-transform">
                                    <div className="text-neutral-400 dark:text-neutral-300">
                                        {desktopMoreMenuOpen ? (
                                            <IconX className="w-5 h-5" />
                                        ) : (
                                            <IconMenu2 className="w-5 h-5" />
                                        )}
                                    </div>
                                </div>
                            </button>

                            {desktopMoreMenuOpen && (
                                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 p-3 rounded-xl bg-white/95 dark:bg-black/95 backdrop-blur-md border border-white/20 dark:border-white/20 shadow-lg">
                                    {desktop.hidden.map((item) => (
                                        <DockIcon
                                            key={`${item.title}-${item.href}-more`}
                                            item={item}
                                            isVertical={true}
                                            onItemClick={() => setDesktopMoreMenuOpen(false)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile: Hamburger */}
            <div className="md:hidden fixed top-4 right-4 z-30">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-12 h-12 rounded-full bg-white/6 dark:bg-black/40 backdrop-blur-md border border-white/8 dark:border-white/10 shadow-md flex items-center justify-center transition-transform hover:scale-105"
                >
                    {mobileMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
                </button>

                {mobileMenuOpen && (
                    <div className="absolute top-16 right-0 z-[100] flex flex-col gap-3 p-3 rounded-xl bg-white/95 dark:bg-black/95 backdrop-blur-md border border-white/20 dark:border-white/20 shadow-lg">
                        {mobile.visible.map((item) => (
                            <DockIcon
                                key={`${item.title}-${item.href}-mobile`}
                                item={item}
                                isVertical={true}
                                onItemClick={() => setMobileMenuOpen(false)}
                            />
                        ))}

                        {mobile.shouldShowMore && (
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setMobileMoreMenuOpen(!mobileMoreMenuOpen)}
                                    className="group relative flex items-center justify-center w-12 h-12 rounded-full"
                                >
                                    <div className="flex items-center justify-center w-full h-full rounded-full bg-white/8 dark:bg-white/5 border border-white/8 dark:border-white/10 hover:scale-105 transition-transform">
                                        <div className="text-neutral-400 dark:text-neutral-300">
                                            {mobileMoreMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
                                        </div>
                                    </div>
                                </button>

                                {mobileMoreMenuOpen && (
                                    <div className="absolute top-0 right-16 z-[110] flex flex-row-reverse gap-2 p-3 rounded-xl bg-white/95 dark:bg-black/95 backdrop-blur-md border border-white/20 dark:border-white/20 shadow-lg">
                                        {mobile.hidden.map((item) => (
                                            <DockIcon
                                                key={`${item.title}-${item.href}-mobile-more`}
                                                item={item}
                                                isVertical={false}
                                                onItemClick={() => {
                                                    setMobileMoreMenuOpen(false);
                                                    setMobileMenuOpen(false);
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

function DockIcon({
    item,
    isVertical,
    onItemClick,
}: {
    item: DockLink;
    isVertical: boolean;
    onItemClick?: () => void;
}) {
    const verticalInner = "w-10 h-10 flex items-center justify-center bg-white/95 dark:bg-black/95 border border-white/10 dark:border-white/8 rounded-full shadow-sm transition-all duration-200 transform-gpu";
    const horizontalInner = "w-12 h-12 flex items-center justify-center bg-white/8 dark:bg-white/5 border border-white/8 dark:border-white/10 rounded-full shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 transform-gpu";

    const Tooltip = ({ direction }: { direction: "vertical" | "horizontal" }) => {
        const isHorizontal = direction === "horizontal";
        return (
            <div
                className={`absolute z-10 px-3 py-1 rounded-md bg-white/95 dark:bg-black/95 text-sm font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap shadow-md transition-opacity opacity-0 group-hover:opacity-100 ${
                    isHorizontal ? "-top-10 left-1/2 -translate-x-1/2" : "right-14 top-1/2 -translate-y-1/2"
                }`}
            >
                {item.title}
            </div>
        );
    };

    const handleClick = (e?: React.MouseEvent) => {
        if (item.onClick) {
            e?.preventDefault();
            item.onClick();
        }
        onItemClick?.();
    };

    const content = (
        <>
            <div className={isVertical ? verticalInner : horizontalInner}>
                <div className={`w-6 h-6 ${isVertical ? "text-neutral-700 dark:text-neutral-200" : "text-neutral-400 dark:text-neutral-300"}`}>
                    {item.icon}
                </div>
            </div>
            <Tooltip direction={isVertical ? "vertical" : "horizontal"} />
        </>
    );

    const wrapper = "group relative flex items-center justify-center transition-all duration-200 transform-gpu hover:z-50 hover:-translate-y-2";

    return item.onClick ? (
        <button type="button" onClick={handleClick} className={wrapper}>
            {content}
        </button>
    ) : (
        <Link
            href={item.href || "#"}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={wrapper}
            scroll={!item.isExternal}
            onClick={onItemClick}
        >
            {content}
        </Link>
    );
}
