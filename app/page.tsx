"use client";

import PricesModule from "./component/pageModules/pricesModule";
import PrimaryButton from "./component/buttons/PrimaryButton";
import Services from "./component/pageModules/servicesModule";
import NavbarWrapper from "./Navbar/navbarWrapper";
import ReviewsModule from "./component/pageModules/reviewsModule";
import WhyUsModule from "./component/pageModules/whyusModule";
import DynamicFAIcon from "./component/utils/DynamicIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
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
				<PricesModule />

				<hr className="text-border-muted" />

				<div id="reviews" className="pt-10">
					<h1 className="text-4xl text-center font-bold">Szolgáltatásaink</h1>
				</div>
				<ReviewsModule />

				<hr className="text-border-muted" />

				<footer>
					<div className="bg-widgetbg p-5 text-center space-y-4">
						<h5 className="font-semibold">Időpontfoglaló sablon-weboldal:</h5>
						<div className="flex justify-center gap-5">
							<a
								className="font-semibold text-blue-400 underline"
								href="https://github.com/Geher-Marcell"
							>
								Gehér Marcell
							</a>
							<a
								className="font-semibold text-blue-400 underline"
								href="https://github.com/selmeczi-attila"
							>
								Selmeczi Attila
							</a>
						</div>

						{/* <p className="mt-3 text-text-muted">
							© 2025 CleanCo. Minden jog fenntartva.
						</p> */}
					</div>
				</footer>
			</main>
		</>
	);
}
