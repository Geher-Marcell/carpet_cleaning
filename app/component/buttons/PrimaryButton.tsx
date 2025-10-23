"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { ButtonProps } from "../props/btnProps";

// type buttonProps = {
// 	szoveg: string;
// 	szin: string;
// 	hoverszin: string;
// };

// const PrimaryButton: React.FC<buttonProps> = ({ szoveg, szin, hoverszin }) => {
// 	return (
// 		<>
// 			<div>
// 				<button
// 					className="text-white font-bold py-2 px-4 rounded-md cursor-pointer w-65 mt-3 mb-3"
// 					style={{ backgroundColor: szin }}
// 					onMouseEnter={(e) =>
// 						(e.currentTarget.style.backgroundColor = hoverszin)
// 					}
// 					onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = szin)}
// 				>
// 					{szoveg}
// 				</button>
// 			</div>
// 		</>
// 	);
// };

// export default PrimaryButton;

const PrimaryButton: React.FC<
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
        scale: 1.02,
        boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`${buttonClass} w-full space-x-1 rounded-md bg-emerald-700 px-4 py-2 text-white cursor-pointer`}
      onClick={(e) => {
        if (disableAfterClick) {
          (e.target as HTMLButtonElement).disabled = true;
        }
        if (callback) callback();
      }}
    >
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} className={`${iconClass}`} />
        </span>
      )}
      {label && (
        <span className={`${labelClass} text-lg font-semibold`}>{label}</span>
      )}
    </motion.button>
  );
};

export default PrimaryButton;
