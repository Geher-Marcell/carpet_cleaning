import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type widgetProps = {
	cim: string;
	leiras: string;
	ikon: IconDefinition;
};

const InfoWidget: React.FC<widgetProps> = ({ cim, leiras, ikon }) => {
	return (
		<>
			<div className="text-white bg-[#161b22] w-75 h-40 rounded-xl p-5 space-y-2 outline-1 outline-[#364050]">
				<FontAwesomeIcon icon={ikon} className="text-[#3471d4] size-5 mb-4" />

				<p className="text-xl">{cim}</p>

				<p className="text-md text-gray-400">{leiras}</p>
			</div>
		</>
	);
};

export default InfoWidget;
