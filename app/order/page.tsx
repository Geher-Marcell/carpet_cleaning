"use client";
import {
	faArrowLeft,
	faBroom,
	faCar,
	faCaretLeft,
	faCircle,
	faHands,
	faPaw,
	faSoap,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../component/buttons/PrimaryButton";
import Link from "next/link";
import RadioButton from "../component/buttons/radioButton";
import { useState } from "react";
import SmallButton from "../component/buttons/smallButton";

export default function OrderPage() {
	const [openPage, setOpenPage] = useState<number>(0);
	const [selectedService, setSelectedService] = useState<string>("");
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
	});

	function Card(icon: IconDefinition, title: string, description: string) {
		return (
			<>
				<div className="bg-gray-700 rounded-lg p-4 flex items-center justify-between gap-4">
					<div className="w-12 text-center">
						<FontAwesomeIcon icon={icon} size="2x" />
					</div>
					<div className="w-full">
						<h1>{title}</h1>
						<p className="text-xs text-gray-400">{description}</p>
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
			</>
		);
	}

	function InputGroup(
		label: string,
		type: string,
		placeholder?: string,
		maxLength?: number,
		name?: string
	) {
		return (
			<div className="w-full">
				<label className="block text-sm text-left pl-1 font-medium text-white mb-1">
					{label}
				</label>
				<input
					required
					type={type}
					name={name}
					value={formData[name as keyof typeof formData] || ""}
					onChange={HandleInputChange}
					className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
					{...(placeholder ? { placeholder: placeholder } : {})}
					{...(maxLength ? { maxLength: maxLength } : {})}
				/>
			</div>
		);
	}

	function Circle(num: number) {
		return (
			<>
				<div className="bg-[#853a09] w-8 h-8 rounded-4xl">
					<p>{num}</p>
				</div>
			</>
		);
	}

	function ValidateForm(data: typeof formData) {
		const errors: { [key: string]: string } = {};

		if (data.name.trim() === "" || /[<>\/\\{}[\]~`]/.test(Date.name)) {
			errors.name = "Érvénytelen név";
		}

		if (
			data.phone.trim() === "" ||
			!/^(\+36|06)(20|30|31|50|70)\d{3}\d{4}$/.test(data.phone)
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

	function HandleSubmit() {
		const errors = ValidateForm(formData);
		if (Object.keys(errors).length > 0) {
			console.log("Validation errors:", errors);
			return;
		}
		console.log("Form submitted successfully:", formData);
		//TODO - Submit to api and format the data properly
	}

	return (
		<div className="h-dvh w-dvw overflow-x-hidden bg-gray-900">
			<nav className="w-dvw bg-gray-800 p-2 py-4 space-y-4">
				<div className="h-1/3 w-full flex items-center justify-between px-2">
					<Link href={"./"}>
						<FontAwesomeIcon icon={faArrowLeft} className="text-white size-5" />
					</Link>
					<h1 className="text-xl font-bold">Szolgáltatás Foglalása</h1>
					<div className="size-5" />
				</div>
				<div
					className="h-2/3 w-full flex items-center justify-around px-2 max-w-200 mx-auto
          				*:flex-col *:gap-1
          				**:flex **:justify-center **:items-center"
				>
					<div className="w-3/12">
						{Circle(1)}
						<p className="text-xs">Szolgáltatások</p>
					</div>
					<hr className="w-2/12 text-transparent h-0.5 mb-5 bg-[linear-gradient(90deg,rgb(0,255,0)_50%,rgb(255,0,0)_50%)] rounded-full"></hr>
					<div className="w-3/12">
						{Circle(2)}
						<p className="text-xs">Dátum és Idő</p>
					</div>
					<hr className="w-2/12 text-transparent h-0.5 mb-5 bg-[linear-gradient(90deg,rgb(0,255,0)_0%,rgb(255,0,0)_0%)] rounded-full"></hr>
					<div className="w-3/12">
						{Circle(3)}
						<p className="text-xs">Részletek</p>
					</div>
				</div>
			</nav>

			<main className="h-ful p-5 max-w-200 mx-auto">
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
						<div className="space-y-4">
							{Card(
								faSoap,
								"Autó belső tisztítás",
								"Teljes belső porszívózás és letörlés."
							)}
							{Card(
								faHands,
								"Külső Mosás & Viaszolás",
								"Védő mosás és viasz a fényes felületért."
							)}
							{Card(
								faCar,
								"Teljes Körű Autómosás",
								"Átfogó belső és külső tisztítás"
							)}
							{Card(
								faBroom,
								"Mélyszőnyeg Tisztítás",
								"Alapos, mély tisztítás a szőnyegeinek."
							)}
							{Card(
								faCircle,
								"Folteltávolítás",
								"Makacs foltok hatékony eltávolítása."
							)}
							{Card(
								faPaw,
								"Kisállat Szag Eltávolítás",
								"Távolítsa el a kisállat szagokat a szőnyegekből."
							)}
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
										setOpenPage(openPage + 1);
									}, 200);
								}}
								disableAfterClick={true}
							/>
						</div>
					</div>
				)}
				{openPage === 1 && (
					<div>
						<p className="text-white text-lg font-bold mb-5">
							Személyes információk
							<SmallButton
								label={"Előző"}
								buttonClass="inline-block ml-4"
								icon={faCaretLeft}
								callback={() => {
									setTimeout(() => {
										setOpenPage(openPage - 1);
									}, 200);
								}}
								disableAfterClick={true}
							/>
						</p>
						<div className="space-y-4 *:mx-auto">
							<div className="*:inline-block text-center space-x-4">
								<div className="w-80">
									{InputGroup("Név", "text", "Teljes név", 50, "name")}
								</div>
								<div className="w-50">
									{InputGroup(
										"Telefonszám",
										"text",
										"Telefonszám",
										12,
										"phone"
									)}
								</div>
							</div>
							<div className="w-134">
								{InputGroup("E-Mail", "email", "E-Mail cím", 50, "email")}
							</div>
							<hr />
							<div className="*:inline-block text-center space-x-4">
								<div className="w-65">
									{InputGroup("Dátum", "date", undefined, undefined, "date")}
								</div>
								<div className="w-65">
									{InputGroup("Irányítószám", "text", "", 4, "postalCode")}
								</div>
							</div>
							<div className="w-134">
								{InputGroup("Település", "text", undefined, undefined, "city")}
							</div>
							<div className="*:inline-block text-center space-x-4">
								<div className="w-90">
									{InputGroup(
										"Utca és Házszám",
										"text",
										undefined,
										undefined,
										"street"
									)}
								</div>
								<div className="w-40">
									{InputGroup(
										"Emelet / Ajtó",
										"text",
										undefined,
										undefined,
										"floor"
									)}
								</div>
							</div>
							<hr />
							<div className="w-134">
								<div className="w-full">
									<label className="block text-sm text-left pl-1 font-medium text-white mb-1">
										Megjegyzés
									</label>
									<textarea
										className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
										placeholder="Ide írhat speciális kéréseket"
										rows={4}
										maxLength={230}
										name="notes"
										value={formData.notes}
										onChange={HandleInputChange}
									></textarea>
								</div>
							</div>
						</div>
						<div className="mt-8">
							<PrimaryButton
								label="Következő"
								callback={() => {
									setTimeout(() => {
										HandleSubmit();
									}, 200);
								}}
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
