import InfoWidget from "../widgets/infoWidget";
import PrimaryButton from "../buttons/PrimaryButton";
import { useEffect, useState } from "react";
import { ServiceProps } from "../props/serviceProps";

export default function Services() {
	const [services, setServices] = useState<Record<string, ServiceProps[]>>({});

	useEffect(() => {
		fetch("/api/services") //GET request
			.then((res) => res.json())
			.then((data) => {
				const grouped = data.services.reduce(
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
			<div
				className="flex flex-col pt-10 gap-10 items-center justify-center
			 		*:flex *:flex-col *:justify-center *:items-center *:gap-4">
				{Object.keys(services).map((group, index) => (
					<div key={index}>
						<h3 className="text-2xl text-neutral-200 font-semibold">
							{group || "Általános tisztítás"}
						</h3>
						<div className="flex flex-wrap justify-center items-center gap-5">
							{services[group]?.map((service, idx) => (
								<InfoWidget
									key={idx}
									title={service.name || "Unknown Service"}
									description={
										service.description || "No description available"
									}
									iconName={service.iconName || "faCircle"}
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
