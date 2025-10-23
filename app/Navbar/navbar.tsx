"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

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

	return (
		<>
			<div
				className={`fixed top-0 left-0 w-screen h-fit p-4 bg-neutral-800 z-50`}
			>
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-bold">Valami cég</h1>

					{/* Hamburger icon */}
					<motion.button
						onClick={() => setIsOpen(!opened)}
						className="space-y-2 *:w-7 *:h-0.5 *:bg-white p-2"
					>
						<motion.div
							className="origin-right"
							animate={{ rotate: opened ? -45 : 0 }}
							transition={{ ease: "easeInOut", duration: 0.3 }}
						></motion.div>
						<motion.div
							animate={{ opacity: opened ? 0 : 1 }}
							transition={{ ease: "easeInOut", duration: 0.3 }}
						></motion.div>
						<motion.div
							className="origin-right"
							animate={{ rotate: opened ? 45 : 0 }}
							transition={{ ease: "easeInOut", duration: 0.3 }}
						></motion.div>
					</motion.button>
				</div>

				<motion.div
					className="flex-col *:py-2 *:text-lg overflow-hidden"
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
							className={`block w-full px-4 rounded hover:bg-neutral-700 ${
								currentPath === link.href ? "bg-neutral-700 font-bold" : ""
							}`}
							onClick={() => {
								setIsOpen(false);
							}}
						>
							<span className="mr-2">
								<FontAwesomeIcon icon={link.icon} />
							</span>
							{link.label}
						</Link>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default Navbar;
