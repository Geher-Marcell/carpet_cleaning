import { InputProps } from "../props/inpProps";

const TextInput: React.FC<
	InputProps & {
		onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
		inpType?: string;
		error?: string;
		name: string;
		maxLength?: number;
	}
> = ({
	label,
	placeholder,
	labelClass,
	inputClass,
	compClass,
	startValue,
	onChange,
	inpType,
	error,
	name,
	maxLength,
}) => {
	return (
		<div className={`${compClass ?? ""} space-y-1 w-full`}>
			<label
				htmlFor={label}
				className={`${
					labelClass ?? ""
				} cursor-text text-sm font-medium text-left block pl-1 ${
					error ? "text-error" : "text-text-secondary"
				}`}
			>
				{label}
				{error && <span className="text-xs float-end py-0.5">{error}</span>}
			</label>
			<input
				value={startValue}
				name={name}
				maxLength={maxLength}
				id={label}
				type={inpType ?? "text"}
				placeholder={placeholder ?? ""}
				className={`${inputClass ?? ""} ${
					error ? "border-error" : "border-border-primary"
				} w-full rounded-md border bg-widgetbg px-3 py-2 text-text-white focus:ring-2 focus:ring-primary-dark focus:outline-none`}
				onChange={onChange}
			/>
		</div>
	);
};

export default TextInput;
