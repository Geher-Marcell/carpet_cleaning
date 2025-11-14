"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PriceList from "./component/pageModules/pricesModule";
import PrimaryButton from "./component/buttons/PrimaryButton";
import Services from "./component/pageModules/servicesModule";
import {
	faClock,
	faLeaf,
	faPerson,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import NavbarWrapper from "./Navbar/navbarWrapper";
import Carousel from "./component/carousel/Carousel";
import ReviewsModule from "./component/pageModules/reviewsModule";

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
				<hr className="text-gray-800" />

				<div id="services" className="pt-10">
					<h1 className="text-4xl text-center font-bold">Szolgáltatásaink</h1>
				</div>
				<Services />

				<hr className="text-gray-800" />
				<div className="p-10 space-y-10">
					<h1 className="text-3xl font-semibold flex justify-center">
						Miért válasszon minket?
					</h1>
					<div className="flex justify-center flex-col items-center **:text-center">
						<div className="flex flex-wrap gap-5 justify-center">
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-widgetbg outline-1 outline-widgetoutline">
								<div className="bg-primary/20 w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon icon={faLeaf} className="text-primary" />
								</div>
								<p className="font-medium m-4.5">Környezetbarát</p>
							</div>
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-widgetbg outline-1 outline-widgetoutline">
								<div className="bg-primary/20 w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon icon={faPerson} className="text-primary" />
								</div>
								<p className="font-medium mt-3">
									Szakértő<br></br> technikusok
								</p>
							</div>
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-widgetbg outline-1 outline-widgetoutline">
								<div className="bg-primary/20 w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon icon={faThumbsUp} className="text-primary" />
								</div>
								<p className="font-medium mt-3">
									Garantált<br></br> elégedettség
								</p>
							</div>
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-widgetbg outline-1 outline-widgetoutline">
								<div className="bg-primary/20 w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon icon={faClock} className="text-primary" />
								</div>
								<p className="font-medium mt-3">
									Rugalmas<br></br> időbeosztás
								</p>
							</div>
						</div>
					</div>
				</div>

				<hr className="text-gray-800" />

				<div id="pricelist" className="pt-10">
					<h1 className="text-4xl text-center font-bold">Áraink</h1>
				</div>
				<PriceList />

				<hr className="text-gray-800" />

				<div id="reviews" className="pt-10">
					<h1 className="text-4xl text-center font-bold">Szolgáltatásaink</h1>
				</div>
				<ReviewsModule />

				<hr className="text-gray-800" />

				<footer>
					<div className="bg-widgetbg p-5 text-center">
						<div className="flex justify-center gap-5">
							<div className="font-medium hover:cursor-pointer">
								Szolgáltatások
							</div>
							<div className="font-medium hover:cursor-pointer">Rólunk</div>
							<div className="font-medium hover:cursor-pointer">Kapcsolat</div>
						</div>

						<p className="mt-3 text-gray-500">
							© 2025 CleanCo. Minden jog fenntartva.
						</p>
					</div>
				</footer>
			</main>
		</>
	);
}
