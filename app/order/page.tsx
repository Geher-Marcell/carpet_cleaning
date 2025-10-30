import {
	faArrowLeft,
	faCar,
	faChair,
	faMagic,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "../component/buttons/checkbox";
import PrimaryButton from "../component/buttons/PrimaryButton";
import Link from "next/link";

export default function Home() {
	return (
		<div className="h-dvh w-dvw overflow-hidden">
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

			<main className="h-full bg-gray-900 p-5">
				<p className="text-white text-lg font-bold mb-5">
					Milyen szolgáltatásra van szüksége?
				</p>
				<div className="space-y-4">
					{Card(
						faCar,
						"Autó belső tisztítás",
						"Teljes belső porszívózás és letörlés."
					)}
					{Card(
						faMagic,
						"Szőnyeg tisztítás",
						"Mélygőzös tisztítás minden típusú szőnyeghez."
					)}
					{Card(
						faChair,
						"Kárpittisztítás",
						"Kanapékhoz, székekhez és egyéb bútorokhoz."
					)}
				</div>
				<div className="mt-8">
					<PrimaryButton label="Következő" />
				</div>
			</main>
		</div>
	);
}

function Card(icon: IconDefinition, title: string, description: string) {
	return (
		<>
			<div className="bg-gray-700 rounded-2xl p-4 flex items-center justify-between gap-4">
				<div className="w-12 text-center">
					<FontAwesomeIcon icon={icon} size="2x" />
				</div>
				<div className="w-full">
					<h1>{title}</h1>
					<p className="text-xs text-gray-400">{description}</p>
				</div>
				<Checkbox label={""} checked={true} />
			</div>
		</>
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
