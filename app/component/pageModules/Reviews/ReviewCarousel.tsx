"use client";

import { useEffect, useState, useRef, JSX } from "react";
import { motion, PanInfo, useMotionValue } from "motion/react";
import type { Transition } from "motion";
import Reviews from "../../utils/reviews";
import ReviewCard from "./ReviewCard";

export interface CarouselProps {
	items?: typeof Reviews;
	baseWidth?: number;
	autoplay?: boolean;
	autoplayDelay?: number;
	pauseOnHover?: boolean;
	loop?: boolean;
	round?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: Transition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

function useWindowWidth(defaultWidth: number = 375): number {
	const [windowWidth, setWindowWidth] = useState<number>(defaultWidth);

	useEffect(() => {
		// Only run on client side
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Set initial width
		handleResize();

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowWidth;
}

export default function Carousel({
	items = Reviews,
	baseWidth,
	autoplay = true,
	autoplayDelay = 3000,
	pauseOnHover = true,
	loop = true,
}: CarouselProps): JSX.Element {
	const windowWidth = useWindowWidth(375);
	const actualWidth = baseWidth ?? windowWidth;

	const containerPadding = 16;
	const itemWidth = actualWidth - containerPadding * 2;
	const trackItemOffset = itemWidth + GAP;

	const carouselItems = loop ? [...items, items[0]] : items;
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const x = useMotionValue(0);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isResetting, setIsResetting] = useState<boolean>(false);

	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (pauseOnHover && containerRef.current) {
			const container = containerRef.current;
			const handleMouseEnter = () => setIsHovered(true);
			const handleMouseLeave = () => setIsHovered(false);
			container.addEventListener("mouseenter", handleMouseEnter);
			container.addEventListener("mouseleave", handleMouseLeave);
			return () => {
				container.removeEventListener("mouseenter", handleMouseEnter);
				container.removeEventListener("mouseleave", handleMouseLeave);
			};
		}
	}, [pauseOnHover]);

	useEffect(() => {
		if (autoplay && (!pauseOnHover || !isHovered)) {
			const timer = setInterval(() => {
				setCurrentIndex((prev) => {
					if (prev === items.length - 1 && loop) {
						return prev + 1;
					}
					if (prev === carouselItems.length - 1) {
						return loop ? 0 : prev;
					}
					return prev + 1;
				});
			}, autoplayDelay);
			return () => clearInterval(timer);
		}
	}, [
		autoplay,
		autoplayDelay,
		isHovered,
		loop,
		items.length,
		carouselItems.length,
		pauseOnHover,
	]);

	const effectiveTransition: Transition = isResetting
		? { duration: 0 }
		: SPRING_OPTIONS;

	const handleAnimationComplete = () => {
		if (loop && currentIndex === carouselItems.length - 1) {
			setIsResetting(true);
			x.set(0);
			setCurrentIndex(0);
			setTimeout(() => setIsResetting(false), 50);
		}
	};

	const handleDragEnd = (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	): void => {
		const offset = info.offset.x;
		const velocity = info.velocity.x;
		if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
			if (loop && currentIndex === items.length - 1) {
				setCurrentIndex(currentIndex + 1);
			} else {
				setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
			}
		} else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
			if (loop && currentIndex === 0) {
				setCurrentIndex(items.length - 1);
			} else {
				setCurrentIndex((prev) => Math.max(prev - 1, 0));
			}
		}
	};

	const dragProps = loop
		? {}
		: {
				dragConstraints: {
					left: -trackItemOffset * (carouselItems.length - 1),
					right: 0,
				},
		  };

	return (
		/* Carousel Container */
		<div
			ref={containerRef}
			className="relative overflow-hidden p-4"
			style={{
				width: `${actualWidth}px`,
			}}
		>
			<motion.div
				className="flex"
				drag="x"
				{...dragProps}
				style={{
					width: itemWidth,
					gap: `${GAP}px`,
					x,
				}}
				onDragEnd={handleDragEnd}
				animate={{ x: -(currentIndex * trackItemOffset) }}
				transition={effectiveTransition}
				onAnimationComplete={handleAnimationComplete}
			>
				{carouselItems.map((item, index) => {
					return (
						<motion.div
							key={index}
							className="relative shrink-0 flex flex-col items-center justify-between overflow-hidden p-0.5 cursor-grab active:cursor-grabbing"
							style={{
								width: itemWidth,
								height: "100%",
							}}
							transition={effectiveTransition}
						>
							<div className="">
								<ReviewCard writer={item.name} content={item.review} />
							</div>
						</motion.div>
					);
				})}
			</motion.div>

			{/* Pagination Dots */}
			<div className="flex w-full justify-center">
				<div className="mt-4 flex w-[150px] justify-between px-8">
					{items.map((_, index) => (
						<motion.div
							key={index}
							className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
								currentIndex % items.length === index
									? "bg-[#808080]"
									: "bg-[rgba(110,110,110,0.4)]"
							}`}
							animate={{
								scale: currentIndex % items.length === index ? 1.2 : 1,
							}}
							onClick={() => setCurrentIndex(index)}
							transition={{ duration: 0.15 }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
