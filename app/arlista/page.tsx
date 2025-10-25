import OrderWidget from "../component/widgets/orderWidget";

export default function PriceList() {
	return (
		<div>
			<h1 className="text-4xl font-medium text-center text-white mb-10">
				Szőnyegtisztítás
			</h1>

			<div className="flex flex-wrap gap-5 justify-center items-center">
				<OrderWidget
					title="Standard Szoba"
					price={"15 000"}
					unit="szoba"
					description={["Mélytisztítás", "Folteltávolítás", "Szagtalanítás"]}
				/>

				<OrderWidget
					title="Lépcsőház"
					price={"9000"}
					unit="lépcsősor"
					description={["Mélytisztítás", "Kézi részletezés"]}
				/>

				<OrderWidget
					title="Kárpittisztítás"
					price={"24 000"}
					unit="darab"
					description={["Kanapé, fotel", "Szövetvédelem"]}
				/>

				<OrderWidget
					title="Speciális Kezelések"
					price={"12 000"}
					unit="kezelés"
					description={["Kisállatszag eltávolítás", "Allergén kezelés"]}
				/>
			</div>

			<h1 className="text-4xl font-medium text-center text-white mt-10 mb-10">
				Autótisztítás
			</h1>

			<div className="flex flex-wrap gap-5 justify-center items-center">
				<OrderWidget
					title="Külső Mosás"
					price={"12 000"}
					unit="autó"
					description={["Kézi mosás", "Viaszolás", "Gumiabroncs ápolás"]}
				/>

				<OrderWidget
					title="Belső Részletezés"
					price={"18 000"}
					unit="autó"
					description={["Porszívózás", "Portörlés", "Ablaktisztítás"]}
				/>

				<OrderWidget
					title="Teljes Körű Szolgáltatás"
					price={"27 000"}
					unit="autó"
					description={["Külső mosás", "Belső részletezés"]}
					popular={true}
				/>

				<OrderWidget
					title="Kiegészítők"
					price={"6 000"}
					unit="kiegészítő"
					description={["Motortér tisztítás", "Fényszóró felújítás"]}
				/>
			</div>

			<h1 className="text-4xl font-medium text-center text-white mt-10 mb-10">
				Gyakran Ismételt Kérdések
			</h1>

			<p className="mt-500">fack you</p>
		</div>
	);
}
