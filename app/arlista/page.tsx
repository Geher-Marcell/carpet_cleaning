import Widget from "./widget/page";

export default function Home() {
	// const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	fetch("/api/hello")
	// 		.then((res) => res.json())
	// 		.then((data) => setMessage(data.message));
	// }, []);

	return (
		<div className="max-w-screen max-h-screen">
			<h1 className="text-5xl font-bold text-center pt-10 text-white">
				Szőnyegtisztítás
			</h1>

			<div className="flex flex-col gap-5 justify-center items-center mt-25">
				<Widget
					cim="Standard szoba"
					ar={"15 000"}
					leiras={["Mélytisztítás", "Folteltávolítás", "Szagtalanítás"]}
				/>

				<Widget
					cim="Lépcsőház"
					ar={"9000"}
					leiras={["Mélytisztítás", "Kézi részletezés"]}
				/>
			</div>
		</div>
	);
}
