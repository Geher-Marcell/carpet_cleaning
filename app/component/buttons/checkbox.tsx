"use client";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import React from "react";
import { ButtonProps } from "../props/btnProps";

type CheckboxProps = ButtonProps & {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	labelClass,
	checked,
	onChange,
}) => {
	const [isChecked, setIsChecked] = React.useState(checked);
	return (
		<div className="flex items-center gap-x-2 text-white">
			<motion.button
				id={label}
				className={`relative inline-flex h-6 w-6 cursor-pointer items-center rounded-md bg-neutral-500`}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				onClick={() => {
					if (onChange) {
						onChange(!isChecked);
					}
					setIsChecked(!isChecked);
				}}
			>
				<motion.div
					initial={{ scale: 1, top: 0, right: 0 }}
					animate={{
						scale: isChecked ? 1 : 0,
						top: isChecked ? 0 : "50%",
						right: isChecked ? 0 : "50%",
						backgroundColor: isChecked
							? "var(--color-primary)"
							: "var(--color-primary)00",
					}}
					transition={{ ease: "easeOut", duration: 0.2 }}
					className={`absolute inset-0 rounded-md`}
				>
					{" "}
					<FontAwesomeIcon
						icon={isChecked ? faCheck : faTimes}
						className={`z-10 m-auto text-white ${
							isChecked ? "opacity-100" : "opacity-0"
						} `}
					/>
				</motion.div>
			</motion.button>
			<label htmlFor={label} className={`${labelClass} cursor-pointer`}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
