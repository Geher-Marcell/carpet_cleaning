import PrimaryButton from "../buttons/PrimaryButton";
import { useEffect, useState } from "react";
import { ServiceProps } from "../props/serviceProps";
import BaseWidget from "../baseWidget";
import DynamicFAIcon from "../utils/DynamicIcon";

export default function Services() {
	const [services, setServices] = useState<Record<string, ServiceProps[]>>({});

	useEffect(() => {
		fetch("/api/services") //GET request
			.then((res) => res.json())
			.then((data) => {
				const grouped = data.services.reduce(
					//A szolgáltatások csoportosítása kategória szerint
					(acc: Record<string, ServiceProps[]>, service: ServiceProps) => {
						const type =
							service.category?.charAt(0).toUpperCase() +
							service.category?.slice(1) +
							"tisztítás";
						if (!type) return acc; // Skip invalid categories

						if (!acc[type]) {
							acc[type] = [];
						}
						acc[type].push(service);
						return acc;
					},
					{}
				);
				setServices(grouped);
			});
	}, []);

	return (
		<>
			<div className="flex flex-col items-center p-10 gap-10">
				{Object.keys(services).map((group, index) => (
					<div key={index} className="space-y-4">
						<h3 className="text-2xl text-text-primary/70 font-semibold text-center">
							{group || "Általános tisztítás"}
						</h3>
						<div className="flex flex-wrap items-start justify-center gap-5">
							{services[group]?.map((service, idx) => (
								<BaseWidget
									key={idx}
									className="w-75 h-40 space-y-2"
									content={
										<>
											<DynamicFAIcon
												exportName={service.iconName || "faCircle"}
												className="text-primary size-5 mb-4"
											/>
											<p className="text-xl font-bold text-text-primary">
												{service.name || "Unknown Service"}
											</p>

											<p className="text-md text-text-primary/50 font-medium">
												{service.description || "No description available"}
											</p>
										</>
									}
								/>
							))}
						</div>
					</div>
				))}
				<div className="w-70 pb-10">
					<PrimaryButton label="Kérjen ingyenes árajánlatot" />
				</div>
			</div>
		</>
	);
}
