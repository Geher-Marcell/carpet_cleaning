const ReviewCard: React.FC<{ writer: string; content: string }> = ({
	writer,
	content,
}) => {
	return (
		<>
			<div className="bg-widgetbg outline-1 outline-border-primary w-85 h-40 p-3.5 rounded-md">
				<p className="italic mb-2 font-medium">{content}</p>
				<p className="text-text-muted font-semibold">- {writer}</p>
			</div>
		</>
	);
};

export default ReviewCard;
