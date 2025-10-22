"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
	const [opened, setIsOpen] = useState(false);

	return (
		<>
			<div
				className={`fixed top-0 left-0 w-screen h-fit p-4 bg-neutral-800 z-50`}
			>
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-bold">Valami cég</h1>

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
				>
					<div className="">Főoldal</div>
					<div className="">Rólunk</div>
					<div className="">Árlista</div>
				</motion.div>
			</div>
		</>
	);
}
