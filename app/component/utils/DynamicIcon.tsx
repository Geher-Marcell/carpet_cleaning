"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Dynamic FontAwesome Icon component that imports icons on-demand
 * Compatible with Next.js and Vercel's serverless structure
 * 
 * @param exportName - The FontAwesome icon name (e.g., "faCircle", "faCheck")
 * @param size - Optional icon size
 * @param className - Optional CSS classes
 */
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
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true;
		
		const loadIcon = async () => {
			setLoading(true);
			setError(null);
			
			try {
				// Dynamically import only the specific icon needed
				const iconModule = await import("@fortawesome/free-solid-svg-icons");
				
				if (!mounted) return;
				
				// Access the icon from the module
				const foundIcon = iconModule[exportName as keyof typeof iconModule] as IconDefinition;
				
				if (foundIcon && typeof foundIcon === "object" && "icon" in foundIcon) {
					setIcon(foundIcon);
				} else {
					const errorMsg = `Icon "${exportName}" not found in FontAwesome solid icons`;
					console.error(errorMsg);
					setError(errorMsg);
				}
			} catch (err) {
				if (!mounted) return;
				const errorMsg = `Failed to load icon "${exportName}": ${err}`;
				console.error(errorMsg);
				setError(errorMsg);
			} finally {
				if (mounted) {
					setLoading(false);
				}
			}
		};

		loadIcon();
		
		return () => {
			mounted = false;
		};
	}, [exportName]);

	if (loading) return null;
	if (error || !icon) return null;
	
	return <FontAwesomeIcon icon={icon} size={size} className={className} />;
}
