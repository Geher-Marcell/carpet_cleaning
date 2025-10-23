import InfoWidget from "../arlista/infowidget/page";
import { faBroom } from "@fortawesome/free-solid-svg-icons/faBroom";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faCar, faPaw } from "@fortawesome/free-solid-svg-icons";
import { faHandsWash } from "@fortawesome/free-solid-svg-icons/faHandsWash";
import PrimaryButton from "../component/buttons/PrimaryButton";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center pt-22">
			<h1 className="text-3xl pb-5">Szőnyegtisztítás</h1>

			<div className="flex flex-wrap justify-center items-center gap-5">
				<InfoWidget
					cim="Mélyszőnyeg Tisztítás"
					leiras={"Alapos, mély tisztítás a szőnyegeinek."}
					ikon={faBroom}
				/>

				<InfoWidget
					cim="Folteltávolítás"
					leiras={"Makacs foltok hatékony eltávolítása."}
					ikon={faCircle}
				/>

				<InfoWidget
					cim="Kisállat Szag Eltávolítás"
					leiras={"Távolítsa el a kisállat szagokat a szőnyegekből."}
					ikon={faPaw}
				/>
			</div>

			<h1 className="text-3xl pt-5 pb-5">Autótisztítás</h1>

			<div className="flex flex-wrap justify-center items-center gap-5 pb-5">
				<InfoWidget
					cim="Belső Részletezés"
					leiras={"Autója belső terének teljes tisztítása."}
					ikon={faCar}
				/>

				<InfoWidget
					cim="Külső Mosás & Viaszolás"
					leiras={"Védő mosás és viasz a fényes felületért."}
					ikon={faHandsWash}
				/>

				<InfoWidget
					cim="Teljes Körű Autómosás"
					leiras={"Átfogó belső és külső tisztítás."}
					ikon={faCar}
				/>
			</div>

			<div className="w-96">
				<PrimaryButton label="Kérjen ingyenes árajánlatot" />
			</div>
		</div>
	);
}
