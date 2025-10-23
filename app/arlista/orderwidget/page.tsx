import PrimaryButton from "@/app/component/buttons/PrimaryButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type widgetProps = {
	cim: string;
	ar: string;
	leiras: string[];
};

const OrderWidget: React.FC<widgetProps> = ({ cim, ar, leiras }) => {
	return (
		<>
			<div className="text-white bg-[#161b22] w-75 h-fit rounded-xl p-5 space-y-2 outline-1 outline-[#364050]">
				<p className="text-2xl">{cim}</p>

				<p className="text-4xl">
					{ar} Ft<span className="text-sm">/m2</span>
				</p>

				<PrimaryButton label="Megrendelés" />

				{leiras.map((item, index) => (
					<div key={index} className="flex items-center text-md">
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
