import PrimaryButton from "@/app/component/buttons/PrimaryButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type widgetProps = {
  title: string;
  price: string;
  description: string[];
  unit: string;
  popular?: boolean;
};

const OrderWidget: React.FC<widgetProps> = ({
  title,
  price,
  description,
  unit,
  popular,
}) => {
  return (
    <>
      <div
        className={`text-white  w-75 h-70 relative rounded-xl p-5 ${
          popular
            ? "bg-[#381b08] outline-2 outline-[#db5d0b]"
            : "bg-[#161b22] outline-1 outline-[#364050]"
        }`}
      >
        {popular && (
          <p className="text-white text-xs font-bold bg-[#db5d0b] absolute -top-3 right-4 rounded-2xl w-fit p-1 pr-2 pl-2">
            NÉPSZERŰ
          </p>
        )}

        <p className="text-xl font-medium mb-2">{title}</p>

        <p className="text-4xl font-extrabold">
          {price} Ft<span className="text-sm">/{unit}</span>
        </p>

        <PrimaryButton label="Megrendelés" buttonClass="my-5" />

        {description?.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-md font-medium my-1"
          >
            <FontAwesomeIcon icon={faCheck} className="text-[#db5d0b] mr-2.5" />
            <p key={index}>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderWidget;
