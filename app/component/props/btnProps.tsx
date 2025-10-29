import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonProps = {
	label: string;
	icon?: IconDefinition;

	labelClass?: string;
	iconClass?: string;
	buttonClass?: string;
	colorClass?: string;
};
