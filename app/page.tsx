"use client";

import PriceList from "./component/pageModules/pricesModule";
import PrimaryButton from "./component/buttons/PrimaryButton";
import Services from "./component/pageModules/servicesModule";
import NavbarWrapper from "./Navbar/navbarWrapper";
import ReviewsModule from "./component/pageModules/reviewsModule";
import BaseWidget from "./component/baseWidget";
import DynamicFAIcon from "./component/utils/DynamicIcon";
import WhyUsModule from "./component/pageModules/whyusModule";

export default function Home() {
	// const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	fetch("/api/hello") //GET request
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setMessage(data.message);
	// 			console.log("Fetched message:", data.message);
	// 		});
	// }, []);

	return (
		<>
			<NavbarWrapper />
			<main className="overflow-x-hidden">
				<div
					id="home"
					className="relative flex flex-col text-center justify-center items-center h-dvh w-dvw"
					style={{
						backgroundImage: "url(./images/main.png)",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					{/* Dark overlay */}
					<div className="absolute inset-0 bg-black/50"></div>

					{/* Content */}
					<div className="relative z-10 flex flex-col items-center gap-6">
						<h1 className="text-5xl font-bold">
							Minden alkalommal makulátlanul tiszta
						</h1>
						<h5 className="text-xl font-medium px-5">
							Tapasztalja meg a legjobb szőnyeg- és autótakarítási
							szolgáltatásokat.
						</h5>
						<div className="w-75">
							<PrimaryButton
								label="Foglaljon most"
								callback={() => {
									window.location.href = "./order";
								}}
							/>
						</div>
					</div>
				</div>
				<hr className="text-border-muted" />

				<div id="services" className="pt-10">
					<h1 className="text-4xl text-center font-bold">Szolgáltatásaink</h1>
				</div>
				<Services />

				<hr className="text-border-muted" />

				<div id="whyus" className="pt-10">
					<h1 className="text-3xl text-center font-semibold">
						Miért válasszon minket?
					</h1>
				</div>
				<WhyUsModule />

				<hr className="text-border-muted" />

				<div id="pricelist" className="pt-10">
					<h1 className="text-4xl text-center font-bold">Áraink</h1>
				</div>
				<PriceList />

				<hr className="text-border-muted" />

				<div id="reviews" className="pt-10">
					<h1 className="text-4xl text-center font-bold">Szolgáltatásaink</h1>
				</div>
				<ReviewsModule />

				<hr className="text-border-muted" />

				<footer>
					<div className="bg-widgetbg p-5 text-center">
						<div className="flex justify-center gap-5">
							<div className="font-medium hover:cursor-pointer">
								Szolgáltatások
							</div>
							<div className="font-medium hover:cursor-pointer">Rólunk</div>
							<div className="font-medium hover:cursor-pointer">Kapcsolat</div>
						</div>

						<p className="mt-3 text-text-muted">
							© 2025 CleanCo. Minden jog fenntartva.
						</p>
					</div>
				</footer>
			</main>
		</>
	);
}
