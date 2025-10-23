import InfoWidget from "../arlista/infowidget/page";
import { faBroom } from "@fortawesome/free-solid-svg-icons/faBroom";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faCar, faPaw } from "@fortawesome/free-solid-svg-icons";
import { faHandsWash } from "@fortawesome/free-solid-svg-icons/faHandsWash";
import PrimaryButton from "../component/buttons/PrimaryButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-25">
      <h1 className="text-4xl pb-10 font-medium">Szőnyegtisztítás</h1>

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

      <h1 className="text-4xl pt-10 pb-10 font-medium">Autótisztítás</h1>

      <div className="flex flex-wrap justify-center items-center gap-5 pb-5">
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

      <div className="w-70">
        <PrimaryButton label="Kérjen ingyenes árajánlatot" />
      </div>
    </div>
  );
}
