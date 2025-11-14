"use client";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import React from "react";
import { ButtonProps } from "../props/btnProps";

type RadioButtonProps = ButtonProps & {
	checked?: boolean;
	onChange?: (value: string) => void;
	groupName: string;
	value: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({
	label,
	labelClass,
	checked,
	onChange,
	groupName,
	value,
}) => {
	return (
		<div className="flex items-center gap-x-2 text-white">
			<motion.button
				id={label}
				className={`relative inline-flex h-6 w-6 cursor-pointer items-center rounded-full bg-neutral-500`}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				onClick={() => {
					if (onChange) {
						onChange(value);
					}
				}}
			>
				<motion.div
					initial={{ scale: 1 }}
					animate={{
						scale: checked ? 1 : 0,
						backgroundColor: checked
							? "var(--color-primary)"
							: "var(--color-primary)00",
					}}
					transition={{ ease: "easeOut", duration: 0.2 }}
					className={`absolute inset-0 rounded-full`}
				>
					{" "}
					<FontAwesomeIcon
						icon={faCheck}
						className={`z-10 m-auto text-white ${
							checked ? "opacity-100" : "opacity-0"
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

export default RadioButton;
