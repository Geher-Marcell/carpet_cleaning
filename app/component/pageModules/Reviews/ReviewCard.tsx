const ReviewCard: React.FC<{ writer: string; content: string }> = ({
	writer,
	content,
}) => {
	return (
		<>
			<div className="bg-[#161b22] outline-1 outline-[#364050] w-85 h-40 p-3.5 rounded-md">
				<p className="italic mb-2 font-medium">{content}</p>
				<p className="text-gray-400 font-semibold">- {writer}</p>
			</div>
		</>
	);
};

export default ReviewCard;
