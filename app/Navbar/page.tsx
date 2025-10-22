"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
	const [opened, setIsOpen] = useState(false);

	return (
		<>
			<div
				className={`w-screen h-fit p-4 ${
					opened ? "pb-2" : "pb-0"
				} bg-neutral-800`}
			>
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-bold">Valami cég</h1>

					<motion.button
						onClick={() => setIsOpen(!opened)}
						className="space-y-2 *:w-6 *:h-0.5 *:bg-white p-2"
						animate={{ rotate: opened ? 90 : 0 }}
						transition={{ ease: "easeInOut", duration: 0.3 }}
					>
						<div></div>
						<div></div>
						<div></div>
					</motion.button>
				</div>

				<motion.div
					className="flex-col *:py-2 *:text-lg mt-4"
					animate={{ height: opened ? "auto" : 0, overflow: "hidden" }}
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
