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
			<main className="h-dvh w-dvw overflow-x-hidden *:border-t *:border-t-gray-800">
				<div
					id="home"
					className="relative flex flex-col text-center justify-center items-center w-full h-full gap-6 p-4"
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
						<h5 className="text-xl font-medium">
							Tapasztalja meg a legjobb szőnyeg- és autó- takarítási
							szolgáltatásokat.
						</h5>
						<div className="w-100">
							<PrimaryButton label="Foglaljon most" />
						</div>
					</div>
				</div>
				{/* <hr className="text-gray-800" /> */}
				<Services />
				{/* <hr className="text-gray-800" /> */}
				<div className="p-10 space-y-10">
					<h1 className="text-3xl font-semibold flex justify-center">
						Miért válasszon minket?
					</h1>
					<div className="flex justify-center flex-col items-center **:text-center">
						<div className="flex flex-wrap gap-5 justify-center">
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
								<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon icon={faLeaf} className="text-[#3471d4]" />
								</div>
								<p className="font-medium m-4.5">Környezetbarát</p>
							</div>
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
								<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon icon={faPerson} className="text-[#3471d4]" />
								</div>
								<p className="font-medium mt-3">
									Szakértő<br></br> technikusok
								</p>
							</div>
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
								<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon
										icon={faThumbsUp}
										className="text-[#3471d4]"
									/>
								</div>
								<p className="font-medium mt-3">
									Garantált<br></br> elégedettség
								</p>
							</div>
							<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
								<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
									<FontAwesomeIcon icon={faClock} className="text-[#3471d4]" />
								</div>
								<p className="font-medium mt-3">
									Rugalmas<br></br> időbeosztás
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <hr className="text-gray-800" /> */}
				<PriceList />
				{/* Szolgáltatások
				<hr className="text-gray-800"></hr>
				<h1 className="text-3xl mt-9 mb-10 font-semibold justify-center flex">
					Szolgáltatásaink
				</h1>
				<div className="relative flex flex-row gap-5 justify-center">
					<div
						className="w-40 h-40 rounded-md outline-1 outline-[#364050]"
						style={{
							backgroundImage:
								"url(https://img.freepik.com/free-photo/grey-carpet-background_1339-7412.jpg?semt=ais_hybrid&w=740&q=80",
						}}
					>
						<p className="absolute -bottom-10 w-45 font-semibold">
							Szőnyegtisztítás
						</p>
						<p className="absolute -bottom-29 w-45 text-gray-400">
							Mélytisztítás és folteltávolítás a friss otthonért.
						</p>
					</div>
					<div
						className="w-40 h-40 rounded-md bg-cover outline-1 outline-[#364050]"
						style={{
							backgroundImage:
								"url(https://www.carcility.com/blog/wp-content/uploads/2022/12/Car-Detailing-Services-in-dubai-Carcility.jpg",
						}}
					>
						<p className="absolute -bottom-10 w-45 font-semibold">
							Autótisztítás
						</p>
						<p className="absolute -bottom-29 w-45 text-gray-400">
							Belső és külső részletezés a vadonatúj érzésért.
						</p>
					</div>
				</div>
				<hr className="text-gray-800 mt-40"></hr>
				<h1 className="text-3xl font-semibold flex justify-center mb-10 mt-9">
					Miért válasszon minket?
				</h1>
				<div className="flex justify-center flex-col items-center">
					<div className="flex flex-wrap gap-5 justify-center">
						<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
							<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
								<FontAwesomeIcon icon={faLeaf} className="text-[#3471d4]" />
							</div>
							<p className="font-medium m-4.5">Környezetbarát</p>
						</div>
						<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
							<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
								<FontAwesomeIcon icon={faPerson} className="text-[#3471d4]" />
							</div>
							<p className="font-medium mt-3">
								Szakértő<br></br> technikusok
							</p>
						</div>
						<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
							<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
								<FontAwesomeIcon icon={faThumbsUp} className="text-[#3471d4]" />
							</div>
							<p className="font-medium mt-3">
								Garantált<br></br> elégedettség
							</p>
						</div>
						<div className="flex items-center justify-center flex-col w-40 h-40 rounded-xl bg-[#161b22] outline-1 outline-[#364050]">
							<div className="bg-[#243a60] w-10 h-10 flex justify-center items-center rounded-4xl">
								<FontAwesomeIcon icon={faClock} className="text-[#3471d4]" />
							</div>
							<p className="font-medium mt-3">
								Rugalmas<br></br> időbeosztás
							</p>
						</div>
					</div>
				</div>
				<hr className="text-gray-800 mt-10"></hr>
				<h1 className="text-3xl font-semibold flex justify-center mb-10 mt-9">
					Vélemények
				</h1>
				<div className="flex flex-wrap gap-5 justify-center">
					<div className="bg-[#161b22] outline-1 outline-[#364050] w-85 h-40 p-3.5 rounded-md">
						<p className="italic mb-2 font-medium">
							A szőnyegeim soha nem néztek ki jobban! A csapat profi, barátságos
							volt, és csodálatos munkát végzett. Nagyon ajánlom!
						</p>
						<p className="text-gray-400 font-semibold">- Sára J.</p>
					</div>
					<div className="bg-[#161b22] outline-1 outline-[#364050] w-85 h-40 p-3.5 rounded-md">
						<p className="italic mb-2 font-medium">
							Az autókozmetikai szolgáltatás kivételes volt. Az autóm úgy néz ki
							és olyan illatú, mint egy új. Annyira le vagyok nyűgözve a
							részletekre való odafigyeléstől.
						</p>
						<p className="text-gray-400 font-semibold">- Mike R.</p>
					</div>
				</div>
				<footer>
					<div className="bg-[#161b22] p-5 mt-15 text-center">
						<div className="flex justify-center gap-5">
							<div
								onClick={() => (window.location.href = "/szolgaltatasaink")}
								className="font-medium hover:cursor-pointer"
							>
								Szolgáltatások
							</div>
							<div className="font-medium hover:cursor-pointer">Rólunk</div>
							<div className="font-medium hover:cursor-pointer">Kapcsolat</div>
						</div>

						<p className="mt-3 text-gray-500">
							© 2025 CleanCo. Minden jog fenntartva.
						</p>
					</div>
				</footer> */}
			</main>
		</>
	);
}
