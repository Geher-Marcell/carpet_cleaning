import InfoWidget from "../widgets/infoWidget";
import {
  faCar,
  faPaw,
  faCircle,
  faHandsWash,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Services() {
  return (
    <>
      <div
        className="flex flex-col pt-10 gap-10 items-center justify-center
			 		*:flex *:flex-col *:justify-center *:items-center *:gap-4"
      >
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
        <div className="w-70 pb-10">
          <PrimaryButton
            label="Kérjen ingyenes árajánlatot"
            colorClass="bg-[#3b82f6]"
          />
        </div>
      </div>
    </>
  );
}
