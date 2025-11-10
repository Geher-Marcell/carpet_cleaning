import PrimaryButton from "@/app/component/buttons/PrimaryButton";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type widgetProps = {
  title: string;
  price: number;
  highlights: string;
  unit: string;
  popular?: boolean;
};

const OrderWidget: React.FC<widgetProps> = ({
  title,
  price,
  highlights,
  unit,
  popular,
}) => {
  return (
    <>
      <div
        className={`text-white  w-75 h-70 relative rounded-xl p-5 ${
          popular
            ? "bg-[#381b08] bg-[linear-gradient(65deg,transparent_20%,rgba(253,199,0,0.1)_40%,transparent_60%)]"
            : "bg-[#161b22] outline-1 outline-[#364050]"
        }`}
      >
        {popular /*fdc700   */ && (
          <div
            className="absolute -inset-0.5 rounded-xl
            bg-[linear-gradient(65deg,transparent_20%,#fdc700_40%,transparent_60%)]
            -z-10 bg-[#db5d0b]"
          ></div>
        )}

        {popular && (
          <p className="text-white text-xs font-bold bg-[#db5d0b] absolute -top-3 right-4 rounded-2xl w-fit p-1 pr-2 pl-2">
            <FontAwesomeIcon icon={faFire} className="mr-1" />
            NÉPSZERŰ
          </p>
        )}

        <p className="text-xl font-medium mb-2">{title}</p>

        <p className="text-4xl font-extrabold">
          {price} Ft<span className="text-sm font-medium">/{unit}</span>
        </p>

        <PrimaryButton label="Megrendelés" buttonClass="my-5" />

        {highlights.split("/").map((highlight, index) => (
          <div
            key={index}
            className="flex items-center text-md font-medium my-1"
          >
            <FontAwesomeIcon icon={faCheck} className="text-[#db5d0b] mr-2.5" />
            <p>{highlight}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderWidget;
