import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "../props/btnProps";
import { motion } from "motion/react";

const SmallButton: React.FC<
	ButtonProps & { callback?: () => void; disableAfterClick?: boolean }
> = ({
	label,
	icon,
	labelClass,
	iconClass,
	buttonClass,
	callback,
	disableAfterClick = false,
}) => {
	return (
		<motion.button
			whileHover={{
				scale: 1.01,
				boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.25)",
			}}
			whileTap={{ scale: 0.99 }}
			transition={{ type: "spring", stiffness: 400, damping: 14 }}
			className={`${buttonClass} flex cursor-pointer items-center justify-center rounded-md bg-neutral-700 px-3 py-3 text-sm`}
			onClick={(e) => {
				if (disableAfterClick) {
					(e.target as HTMLButtonElement).disabled = true;
				}
				if (callback) callback();
			}}
		>
			{icon && <FontAwesomeIcon icon={icon} className={`${iconClass}`} />}
			{label && <span className={`${labelClass}`}>{label}</span>}
		</motion.button>
	);
};

export default SmallButton;
