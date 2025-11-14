import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import DynamicFAIcon from "../component/utils/DynamicIcon";

const StepperNavbar = forwardRef((props, ref) => {
	const [currentPos, setCurrentPos] = useState(0);

	//functions to use in the parent
	useImperativeHandle(ref, () => ({
		addPos: () => setCurrentPos((prev) => prev + 1),
		subPos: () => setCurrentPos((prev) => prev - 1),
	}));

	const ANIMATION_DURATION = 0.2;

	const steps = [
		{ number: 0, label: "Szolgáltatások" },
		{ number: 1, label: "Dátum és Idő" },
		{ number: 2, label: "Részletek" },
	];

	function Circle(
		currentPos: number,
		index: number,
		step: { number: number; label: string }
	) {
		/* default color */
		let circleColor = "var(--color-border-secondary)";
		if (index <= currentPos) {
			/* current */
			circleColor =
				"linear-gradient(90deg, var(--color-primary), var(--color-secondary))";
		}

		let circleIcon = <p>{step.number}</p>;
		if (index === currentPos) {
			circleIcon = <DynamicFAIcon exportName="faCircle" />;
		} else if (index < currentPos) {
			circleIcon = <DynamicFAIcon exportName="faCheck" />;
		}

		return (
			<div
				key={index}
				className="w-3/12 min-w-fit flex flex-col justify-center items-center gap-1"
			>
				<motion.div
					className={`w-8 h-8 rounded-4xl flex justify-center items-center`}
					style={{}}
					animate={{
						backgroundColor:
							index > currentPos ? circleColor : "var(--color-primary)",
						backgroundImage: index <= currentPos ? circleColor : "none",
					}}
					transition={{
						duration: ANIMATION_DURATION,
						ease: "easeInOut",
					}}
				>
					<motion.div
						key={
							index === currentPos
								? "selected"
								: index < currentPos
								? "checked"
								: "number"
						}
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						transition={{
							duration: ANIMATION_DURATION,
							ease: "easeInOut",
						}}
					>
						{circleIcon}
					</motion.div>
				</motion.div>
				<motion.p
					className={`text-xs`}
					animate={{
						color:
							index === currentPos
								? "var(--color-text-white)"
								: "var(--color-text-secondary)",
					}}
				>
					{step.label}
				</motion.p>
			</div>
		);
	}

	return (
		<>
			<nav className="w-dvw p-2 py-4 space-y-4 bg-navbarbg">
				<div className="h-1/3 w-full flex items-center justify-between px-2">
					<Link href={"./"}>
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="text-text-primary size-5"
						/>
					</Link>
					<h1 className="text-2xl font-bold">Szolgáltatás Foglalása</h1>
					<div className="size-5" />
				</div>
				<div className="h-2/3 w-full flex items-center justify-around px-2 max-w-200 mx-auto">
					{steps.map((step, index) => (
						<React.Fragment key={index}>
							{Circle(currentPos, index, step)}
							{/* Lines between the circles */}
							{index < steps.length - 1 && (
								<div
									className={`w-full text-transparent h-0.5 mb-5 rounded-full bg-border-secondary overflow-hidden`}
								>
									<motion.div
										className="h-full bg-linear-90 from-secondary to-primary"
										initial={{ width: "0%" }}
										animate={{
											width: currentPos - 1 >= index ? "100%" : "0%",
										}}
										transition={{
											duration: ANIMATION_DURATION,
											ease: "easeInOut",
										}}
									></motion.div>
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</nav>
		</>
	);
});

StepperNavbar.displayName = "StepperNavbar";

export default StepperNavbar;
