"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function DynamicFAIcon({
	exportName,
	size,
	className,
}: {
	exportName: string;
	size?:
		| "lg"
		| "xs"
		| "sm"
		| "1x"
		| "2x"
		| "3x"
		| "4x"
		| "5x"
		| "6x"
		| "7x"
		| "8x"
		| "9x"
		| "10x";
	className?: string;
}) {
	const [icon, setIcon] = useState<IconDefinition | null>(null);

	useEffect(() => {
		const foundIcon = (Icons as unknown as Record<string, IconDefinition>)[
			exportName
		];
		if (foundIcon) {
			console.log(foundIcon);
			setIcon(foundIcon);
		} else {
			console.error(`Icon with name "${exportName}" not found.`);
		}
	}, [exportName]);

	if (!icon) return null;
	return <FontAwesomeIcon icon={icon} size={size} className={className} />;
}
