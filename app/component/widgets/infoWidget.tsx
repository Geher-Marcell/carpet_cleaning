import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type widgetProps = {
  title: string;
  description: string;
  icon: IconDefinition;
};

const InfoWidget: React.FC<widgetProps> = ({ title, description, icon }) => {
  return (
    <>
      <div className="text-white bg-[#161b22] w-75 h-40 rounded-xl p-5 space-y-2 outline-1 outline-[#364050]">
        <FontAwesomeIcon icon={icon} className="text-[#db5d0b] size-5 mb-4" />
        <p className="text-xl font-bold">{title}</p>

        <p className="text-md text-gray-400 font-medium">{description}</p>
      </div>
    </>
  );
};

export default InfoWidget;
