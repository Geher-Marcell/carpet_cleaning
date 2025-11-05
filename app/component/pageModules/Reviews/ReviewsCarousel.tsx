import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Reviews from "../../utils/reviews";
import ReviewCard from "./ReviewCard";

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	async function handleSetIndex(index: number) {
		if (index === currentIndex) return;

		setCurrentIndex(index);
	}

	return (
		<div className="h-full w-full flex flex-col items-center justify-center p-10 gap-5">
			<AnimatePresence mode="popLayout">
				<motion.div
					key={Reviews[currentIndex].id}
					initial={{
						opacity: 0,
						x: 500,
					}}
					animate={{ opacity: 1, x: 0 }}
					exit={{
						opacity: 0,
						x: -500,
					}}
					transition={{ duration: 0.6, ease: "easeInOut" }}
				>
					<ReviewCard
						writer={Reviews[currentIndex].name}
						content={Reviews[currentIndex].review}
					/>
				</motion.div>
			</AnimatePresence>
			<div className="space-x-2">
				{Reviews.map((_, index) => (
					<FontAwesomeIcon
						key={index}
						icon={faCircle}
						className={`text-xs ${
							index === currentIndex ? "text-white " : "text-gray-400"
						}`}
						onClick={() => {
							handleSetIndex(index);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
