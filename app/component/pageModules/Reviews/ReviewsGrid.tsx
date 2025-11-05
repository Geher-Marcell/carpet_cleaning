import Reviews from "../../utils/reviews";
import ReviewCard from "./ReviewCard";

const ReviewsGrid = () => {
	return (
		<>
			<div className="flex flex-wrap gap-5 justify-center">
				{Reviews.map((review, index) => (
					<div key={index}>
						<ReviewCard writer={review.name} content={review.review} />
					</div>
				))}
			</div>
		</>
	);
};

export default ReviewsGrid;
