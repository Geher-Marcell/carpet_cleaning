import InfoWidget from "../component/widgets/infoWidget";
import { faBroom } from "@fortawesome/free-solid-svg-icons/faBroom";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faCar, faPaw } from "@fortawesome/free-solid-svg-icons";
import { faHandsWash } from "@fortawesome/free-solid-svg-icons/faHandsWash";
import PrimaryButton from "../component/buttons/PrimaryButton";

export default function Services() {
	return (
		<>
			<div
				id="szolgaltatasok"
				className="p-10 flex flex-col gap-10 items-center
			 		*:flex *:flex-col *:justify-center *:items-center *:gap-4"
			>
				<h1 className="text-4xl text-center font-bold">Szolgáltatásaink</h1>
				<div>
					<h3 className="text-2xl text-neutral-200 font-semibold">
						Szőnyegtisztítás
					</h3>
					<div className="flex flex-wrap justify-center items-center gap-5">
						<InfoWidget
							title="Mélyszőnyeg Tisztítás"
							description={"Alapos, mély tisztítás a szőnyegeinek."}
							icon={faBroom}
						/>

						<InfoWidget
							title="Folteltávolítás"
							description={"Makacs foltok hatékony eltávolítása."}
							icon={faCircle}
						/>

						<InfoWidget
							title="Kisállat Szag Eltávolítás"
							description={"Távolítsa el a kisállat szagokat a szőnyegekből."}
							icon={faPaw}
						/>
					</div>
				</div>
				<div>
					<h3 className="text-2xl text-neutral-200 font-semibold">
						Autótisztítás
					</h3>

					<div className="flex flex-wrap justify-center items-center gap-5">
						<InfoWidget
							title="Belső Részletezés"
							description={"Autója belső terének teljes tisztítása."}
							icon={faCar}
						/>

						<InfoWidget
							title="Külső Mosás & Viaszolás"
							description={"Védő mosás és viasz a fényes felületért."}
							icon={faHandsWash}
						/>

						<InfoWidget
							title="Teljes Körű Autómosás"
							description={"Átfogó belső és külső tisztítás."}
							icon={faCar}
						/>
					</div>
				</div>
				<div className="w-70">
					<PrimaryButton
						label="Kérjen ingyenes árajánlatot"
						colorClass="bg-[#3b82f6]"
					/>
				</div>
			</div>
		</>
	);
}
