"use client";
import { useEffect, useState } from "react";
import { ServiceProps } from "../props/serviceProps";
import PrimaryButton from "../buttons/PrimaryButton";
import DynamicFAIcon from "../utils/DynamicIcon";
import BaseWidget from "../baseWidget";
import { useRouter } from "next/navigation";
import React from "react";

export default function PricesModule() {
	const [services, setServices] = useState<Record<string, ServiceProps[]>>({});

	const router = useRouter();

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

						// Sort the items in each group by id
						acc[type].sort((a, b) => (a.id || 0) - (b.id || 0));

						return acc;
					},
					{}
				);

				setServices(grouped);
			});
	}, []);

	const Card = (
		title: string,
		price: number,
		unit: string,
		highlights: string,
		popular: boolean
	) => {
		return (
			<BaseWidget
				className={`w-75 h-70 relative rounded-xl p-5 ${
					popular
						? "bg-linear-60 from-transparent from-15% via-secondary/10 via-40% to-transparent to-60%"
						: ""
				}`}
				overrideBg={popular ? "bg-widgetbg-highlight" : undefined}
				content={
					<>
						{popular && (
							<>
								<div className="absolute -inset-0.5 rounded-xl bg-linear-60 from-transparent from-20% via-secondary to-transparent to-60% -z-30 bg-primary" />
								<p className="text-text-primary text-xs font-bold bg-primary absolute -top-3 right-4 rounded-2xl w-fit p-1 pr-2 pl-2">
									<DynamicFAIcon exportName="faFire" className="mr-1" />
									NÉPSZERŰ
								</p>
							</>
						)}

						<p className="text-xl font-medium mb-2">{title}</p>

						<p className="text-4xl font-extrabold">
							{price} Ft<span className="text-sm font-medium">/{unit}</span>
						</p>

						<PrimaryButton
							label="Megrendelés"
							buttonClass="my-5"
							callback={() => {
								router.push(`/order?title=${encodeURIComponent(title)}`);
							}}
						/>

						{highlights.split("/").map((highlight, index) => (
							<div
								key={index}
								className="flex items-center text-md font-medium my-1"
							>
								<DynamicFAIcon
									exportName="faCheck"
									className="text-primary mr-2.5"
								/>
								<p>{highlight}</p>
							</div>
						))}
					</>
				}
			/>
		);
	};

	return (
		<>
			<div
				className="p-10 flex flex-col gap-10 items-center justify-center
					*:flex *:flex-col *:justify-center *:items-center *:gap-4"
			>
				{Object.keys(services).map((group, index) => (
					<div key={index}>
						<h3 className="text-2xl text-text-primary/70 font-semibold pb-3">
							{group || "Általános tisztítás"}
						</h3>
						<div className="flex flex-wrap gap-5 justify-center items-center">
							{services[group]?.map((service, idx) => (
								<React.Fragment key={idx}>
									{Card(
										service.name || "Unknown Service",
										service.price || -1,
										service.unit || "unit",
										service.highlights || "No highlights available",
										service.hot || false
									)}
								</React.Fragment>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
