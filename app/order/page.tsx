"use client";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../component/buttons/PrimaryButton";
import RadioButton from "../component/buttons/radioButton";
import { Suspense, useEffect, useRef, useState } from "react";
import SmallButton from "../component/buttons/smallButton";
import { ServiceProps } from "../component/props/serviceProps";
import DynamicFAIcon from "../component/utils/DynamicIcon";
import { useSearchParams } from "next/navigation";
import StepperNavbar from "./navbar";
import TextInput from "../component/inputs/textInput";

// A client-only component to handle search params
const SearchParamsComponent = ({
	onParamFetch,
}: {
	onParamFetch: (param: string) => void;
}) => {
	const searchParams = useSearchParams();
	const selectedServiceTitle = searchParams.get("title") || "";

	useEffect(() => {
		onParamFetch(selectedServiceTitle);
	}, [selectedServiceTitle, onParamFetch]);

	return null;
};

const OrderPage = () => {
	const [services, setServices] = useState<ServiceProps[]>([]);
	const [selectedService, setSelectedService] = useState<string>("");

	const stepperNavRef = useRef<{
		addPos: () => void;
		subPos: () => void;
	} | null>(null);

	const HandleStepForward = () => {
		if (stepperNavRef.current) {
			stepperNavRef.current.addPos();
		}
		setOpenPage((prev) => prev + 1);
	};

	const HandleStepBackward = () => {
		if (stepperNavRef.current) {
			stepperNavRef.current.subPos();
		}
		setOpenPage((prev) => prev - 1);
	};

	useEffect(() => {
		fetch("/api/services") //GET request
			.then((res) => res.json())
			.then((data) => {
				setServices(data.services);
			});
	}, []);

	const [openPage, setOpenPage] = useState<number>(0);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		date: "",
		postalCode: "",
		city: "",
		street: "",
		floor: "",
		notes: "",
		address: "",
	});
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	function Card(
		iconName: string,
		title: string,
		description: string,
		price: number,
		unit: string
	) {
		return (
			<>
				<div className="text-white bg-widgetbg rounded-xl outline-1 outline-border-primary p-4 flex items-center justify-between gap-2">
					<div className="w-12 text-center">
						<DynamicFAIcon exportName={iconName} size="2x" />
					</div>
					<div className="w-full">
						<h1>{title}</h1>
						<p className="text-xs text-gray-400">{description}</p>
					</div>
					<div className="flex items-center justify-center flex-col md:flex-row gap-3 min-w-fit">
						<div className="min-w-fit">
							{price}Ft <span className="text-gray-400">/{unit}</span>
						</div>
						<RadioButton
							label={""}
							groupName="valamigroup"
							value={title}
							checked={selectedService === title}
							onChange={(value) => {
								if (selectedService === value) {
									setSelectedService("");
									return;
								}
								setSelectedService(value);
							}}
						/>
					</div>
				</div>
			</>
		);
	}

	function ValidateForm(data: typeof formData) {
		const errors: { [key: string]: string } = {};

		console.log(data);

		if (data.name.trim() === "" || /[<>\/\\{}[\]~`]/.test(data.name)) {
			errors.name = "Érvénytelen név";
		}

		if (
			data.phone.trim() === "" ||
			!/^\+36|06(20|30|31|50|70)\d{7}$/.test(data.phone)
		) {
			errors.phone = "Érvénytelen telefonszám";
		}
		if (
			data.email.trim() === "" ||
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
		) {
			errors.email = "Érvénytelen e-mail cím";
		}
		if (isNaN(Date.parse(data.date))) {
			errors.date = "Érvénytelen dátum";
		}
		if (data.postalCode.trim() === "" || !/^\d{4}$/.test(data.postalCode)) {
			errors.postalCode = "Érvénytelen irányítószám";
		}
		if (data.city.trim() === "" || /[<>\/\\{}[\]~`]/.test(data.city)) {
			errors.city = "Érvénytelen település";
		}
		if (data.street.trim() === "" || /[<>\/\\{}[\]~`]/.test(data.street)) {
			errors.street = "Érvénytelen utca és házszám";
		}
		return errors;
	}

	function HandleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	function HandleFormFill(): boolean {
		setErrors({});
		const validationErrors = ValidateForm(formData);
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length > 0) {
			console.log("Validation errors:", validationErrors);
			return false;
		}

		console.log("Form submitted successfully:", formData);
		setFormData((prev) => ({
			...prev,
			address: `${formData.postalCode} ${formData.city} ${formData.street} ${formData.floor}`,
		}));
		return true;
	}

	async function HandleSubmit() {
		try {
			const res = await fetch("/api/orders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					customer: {
						name: formData.name,
						email: formData.email,
						phoneNumber: formData.phone,
					},
					// serviceType: selectedService,
					serviceType: 1, // Temporary fixed value
					scheduledDate: formData.date,
					serviceDetails: formData.notes,
					address: formData.address,
				}),
			});

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const result = await res.json();
			console.log("Order submitted successfully:", result);
			window.location.href = "/";
			alert("Rendelés sikeresen leadva!");
		} catch (error) {
			console.error("Error submitting order:", error);
			alert("Rendelés leadása sikertelen. Kérem próbálja újra!");
		}
	}

	return (
		<div className="h-dvh w-dvw overflow-x-hidden">
			{/* NAVIGATION (TOP BAR) */}

			<StepperNavbar ref={stepperNavRef} />

			{/* Suspense boundary for client-side search params */}
			<Suspense fallback={<div>Loading...</div>}>
				<SearchParamsComponent onParamFetch={setSelectedService} />
			</Suspense>

			<main className="h-ful p-5 max-w-200 mx-auto">
				{/* The first page, service type selection */}
				{openPage === 0 && (
					<div>
						<p className="text-white text-lg font-bold mb-5">
							Milyen szolgáltatásra van szüksége?{" "}
							{selectedService === "" ? (
								<span className="text-sm text-red-500 md:ml-2 block md:inline">
									*Kérem válasszon egy opciót!
								</span>
							) : (
								<span className="text-sm text-transparent block md:inline">
									*
								</span>
							)}
						</p>
						<div className="space-y-4 max-h-160 overflow-y-auto p-0.5">
							{services.map((service, index) => (
								<div key={index}>
									{Card(
										service.iconName || "faSoap",
										service.name,
										service.description || "N/A",
										service.price || -1,
										service.unit || "N/A"
									)}
								</div>
							))}
						</div>
						<div
							className={`mt-8 max-w-120 mx-auto ${
								selectedService === "" ? "pointer-events-none opacity-50" : ""
							}`}
						>
							<PrimaryButton
								label="Következő"
								callback={() => {
									setTimeout(() => {
										HandleStepForward();
									}, 200);
								}}
								disableAfterClick={true}
							/>
						</div>
					</div>
				)}

				{/* The second page, user information form */}

				{openPage === 1 && (
					<div>
						<p className="text-white text-lg font-bold mb-5">
							Személyes információk
							<SmallButton
								label={"Előző"}
								buttonClass="inline-block ml-4"
								icon={faCaretLeft}
								callback={() => {
									HandleStepBackward();
								}}
								disableAfterClick={true}
							/>
						</p>
						<div className="space-y-4 *:mx-auto">
							<div className="*:inline-block text-center space-x-4 space-y-4 sm:space-y-0">
								<TextInput
									compClass="w-full sm:w-74"
									label="Teljes név"
									name="name"
									inpType="text"
									placeholder="Név"
									maxLength={50}
									error={errors["name"]}
									onChange={(e) => HandleInputChange(e)}
								/>
								<TextInput
									compClass="w-full sm:w-56"
									label="Telefonszám"
									name="phone"
									inpType="text"
									placeholder="Telefonszám"
									maxLength={12}
									error={errors["phone"]}
									onChange={(e) => HandleInputChange(e)}
								/>
							</div>
							<TextInput
								compClass="w-full sm:w-134"
								label="E-Mail"
								name="email"
								inpType="email"
								placeholder="E-Mail cím"
								maxLength={50}
								error={errors["email"]}
								onChange={(e) => HandleInputChange(e)}
							/>
							<hr />
							<div className="*:inline-block text-center space-x-4 space-y-4 sm:space-y-0">
								<TextInput
									compClass="w-full sm:w-65"
									label="Dátum"
									name="date"
									inpType="date"
									error={errors["date"]}
									onChange={(e) => HandleInputChange(e)}
								/>
								<TextInput
									compClass="w-full sm:w-65"
									label="Irányítószám"
									name="postalCode"
									inpType="number"
									maxLength={4}
									error={errors["postalCode"]}
									onChange={(e) => HandleInputChange(e)}
								/>
							</div>
							<TextInput
								compClass="w-full sm:w-134"
								label="Település"
								name="city"
								inpType="text"
								error={errors["city"]}
								onChange={(e) => HandleInputChange(e)}
							/>
							<div className="*:inline-block text-center space-x-4 space-y-4 sm:space-y-0">
								<TextInput
									compClass="w-full sm:w-90"
									label="Utca és Házszám"
									name="street"
									inpType="text"
									error={errors["street"]}
									onChange={(e) => HandleInputChange(e)}
								/>
								<TextInput
									compClass="w-full sm:w-40"
									label="Emelet / Ajtó"
									name="floor"
									inpType="text"
									error={errors["floor"]}
									onChange={(e) => HandleInputChange(e)}
								/>
							</div>
							<hr />
							<div className="w-full sm:w-134">
								<label className="block text-sm text-left pl-1 font-medium text-neutral-400 mb-1">
									Megjegyzés
								</label>
								<textarea
									className="w-full p-2 rounded-lg border border-border-primary bg-widgetbg text-white focus:outline-none focus:ring-2 focus:ring-primary-dark resize-none"
									placeholder="Ide írhat speciális kéréseket"
									rows={4}
									maxLength={230}
									name="notes"
									value={formData.notes}
									onChange={HandleInputChange}
								></textarea>
							</div>
						</div>
						<div className={`mt-8 max-w-120 mx-auto `}>
							<PrimaryButton
								label="Következő"
								callback={() => {
									if (HandleFormFill()) {
										HandleStepForward();
									}
								}}
							/>
						</div>
					</div>
				)}

				{/* The third page, summary and confirmation */}
				{openPage === 2 && (
					<div>
						<p className="text-white text-lg font-bold mb-5">
							Rendelés Összegzés
							<SmallButton
								label={"Előző"}
								buttonClass="inline-block ml-4"
								icon={faCaretLeft}
								callback={() => {
									HandleStepBackward();
								}}
								disableAfterClick={true}
							/>
						</p>
						<div>
							<h2>Személyes adatok:</h2>
							<ul className="list-disc list-inside mb-4">
								<li>Név: {formData.name}</li>
								<li>Telefonszám: {formData.phone}</li>
								<li>E-Mail: {formData.email}</li>
							</ul>
							<h2>Szolgáltatás adatai:</h2>
							<ul className="list-disc list-inside mb-4">
								<li>Szolgáltatás: {selectedService}</li>
								<li>Szolgáltatás véghezvitelének dátuma: {formData.date}</li>
								<li>Szolgáltatás helye: {formData.address}</li>
								<li>Megjegyzés: {formData.notes || "Nincs megjegyzés"}</li>
							</ul>
						</div>

						<div className="mt-8 max-w-120 mx-auto">
							<PrimaryButton
								label="Rendelés megerősítése"
								callback={() => {
									HandleSubmit();
								}}
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	);
};

export default OrderPage;
