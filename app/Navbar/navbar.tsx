"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
	links: {
		href: string;
		label: string;
		icon: IconDefinition;
	}[];
	currentPath: string;
};

const Navbar: React.FC<NavbarProps> = ({ links, currentPath }) => {
	const [opened, setIsOpen] = useState(false);
	const [isLargerThanMd, setIsLargerThanMd] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			const largerThanMd = window.innerWidth >= 768; // md breakpoint is 768px
			setIsLargerThanMd(largerThanMd);
		};

		// Check on mount
		checkScreenSize();

		// Add event listener
		window.addEventListener("resize", checkScreenSize);

		// Cleanup
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<>
			<div className={`fixed top-0 left-0 w-screen h-fit p-4 bg-navbarbg z-50`}>
				{/* Top bar with title and hamburger */}
				<div className="flex justify-between items-center h-7.5">
					<h1 className="text-2xl font-semibold">CleanCo</h1>

					{/* Hamburger icon - only visible on mobile */}
					{!isLargerThanMd && (
						<motion.button
							onClick={() => setIsOpen(!opened)}
							className="space-y-2 *:w-7 *:h-0.5 *:bg-white p-2"
						>
							<motion.div
								className="origin-right"
								animate={{ rotate: opened ? -45 : 0 }}
								transition={{
									ease: "easeInOut",
									duration: 0.3,
								}}
							></motion.div>
							<motion.div
								animate={{ opacity: opened ? 0 : 1 }}
								transition={{
									ease: "easeInOut",
									duration: 0.3,
								}}
							></motion.div>
							<motion.div
								className="origin-right"
								animate={{ rotate: opened ? 45 : 0 }}
								transition={{
									ease: "easeInOut",
									duration: 0.3,
								}}
							></motion.div>
						</motion.button>
					)}

					{/* Desktop navigation - always visible on md+ */}
					{isLargerThanMd && (
						<div className="flex flex-row gap-2">
							{links.map((link) => (
								<motion.div
									key={link.href}
									animate={{
										backgroundColor:
											currentPath === link.href
												? "var(--color-widgetbg-active)"
												: "rgba(0, 0, 0, 0)", // transparent
										color:
											currentPath === link.href
												? "var(--color-text-white)"
												: "var(--color-text-primary)",
									}}
									transition={{
										ease: "easeInOut",
										duration: 0.2,
									}}
									className={`px-4 py-2 text-lg rounded`}
								>
									<a href={link.href}>
										<span className="mr-2">
											<FontAwesomeIcon icon={link.icon} />
										</span>
										{link.label}
									</a>
								</motion.div>
							))}
						</div>
					)}
				</div>{" "}
				{/* Mobile navigation - animated dropdown */}
				{!isLargerThanMd && (
					<motion.div
						className="flex flex-col overflow-hidden"
						animate={{
							height: opened ? "auto" : 0,
							marginTop: opened ? 16 : 0,
						}}
						transition={{ ease: "easeInOut", duration: 0.3 }}
						initial={false}
					>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`block w-full px-4 py-2 text-lg rounded hover:bg-neutral-700 ${
									currentPath === link.href
										? "bg-neutral-700 font-bold"
										: "font-medium"
								}`}
								onClick={() => setIsOpen(false)}
							>
								<span className="mr-2">
									<FontAwesomeIcon icon={link.icon} />
								</span>
								{link.label}
							</Link>
						))}
					</motion.div>
				)}
			</div>
		</>
	);
};

export default Navbar;
