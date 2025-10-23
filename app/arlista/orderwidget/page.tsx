import PrimaryButton from "@/app/component/buttons/PrimaryButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type widgetProps = {
  title: string;
  price: string;
  description: string[];
  unit: string;
};

const OrderWidget: React.FC<widgetProps> = ({
  title,
  price,
  description,
  unit,
}) => {
  return (
    <>
      <div className="text-white bg-[#161b22] w-75 h-fit rounded-xl p-5 outline-1 outline-[#364050]">
        <p className="text-2xl font-medium">{title}</p>

        <p className="text-4xl font-extrabold">
          {price} Ft<span className="text-sm">/{unit}</span>
        </p>

        <PrimaryButton label="Megrendelés" buttonClass="my-5" />

        {description.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-md font-medium my-1"
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="text-[#3471d4] size-5 mr-2.5"
            />
            <p key={index}>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderWidget;
