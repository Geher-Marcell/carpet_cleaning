import BaseWidget from "../baseWidget";
import Carousel from "../carousel/Carousel";
import Reviews from "../utils/reviews";
import ReviewCard from "./Reviews/ReviewCard";

export default function ReviewsModule() {
	const Card = (writer: string, content: string) => {
		return (
			<BaseWidget
				className="w-85 h-40 p-3.5 rounded-md"
				content={
					<>
						<p className="italic mb-2 font-medium">{content}</p>
						<p className="text-gray-400 font-semibold">- {writer}</p>
					</>
				}
			/>
		);
	};

	return (
		<div className="py-10">
			<div className="flex-wrap gap-5 justify-center hidden md:flex">
				{Reviews.map((review, index) => (
					<div key={index}>
						<ReviewCard writer={review.name} content={review.review} />
					</div>
				))}
			</div>
			<div className="block md:hidden">
				<Carousel />
			</div>
		</div>
	);
}
