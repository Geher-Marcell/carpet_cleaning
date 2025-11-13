import DynamicFAIcon from "../utils/DynamicIcon";

type widgetProps = {
	title: string;
	description: string;
	iconName: string;
};

const InfoWidget: React.FC<widgetProps> = ({
	title,
	description,
	iconName: icon,
}) => {
	return (
		<>
			<div className="text-white bg-widgetbg w-75 h-40 rounded-xl p-5 space-y-2 outline-1 outline-widgetoutline">
				<DynamicFAIcon exportName={icon} className="text-primary size-5 mb-4" />
				<p className="text-xl font-bold">{title}</p>

				<p className="text-md text-gray-400 font-medium">{description}</p>
			</div>
		</>
	);
};

export default InfoWidget;
