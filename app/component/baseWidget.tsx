const BaseWidget: React.FC<{
	content: React.ReactNode;
	className: string;
	overrideBg?: string;
}> = ({ content, className, overrideBg }) => {
	const bgColor =
		overrideBg !== undefined && overrideBg !== "" ? overrideBg : "bg-widgetbg";
	return (
		<>
			<div
				className={`${bgColor} rounded-xl p-5 outline-1 outline-widgetoutline ${className}`}
			>
				{content}
			</div>
		</>
	);
};

export default BaseWidget;
