import Image from "next/image";
import Navbar from "./Navbar/page";

export default function Home() {
	// const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	fetch("/api/hello")
	// 		.then((res) => res.json())
	// 		.then((data) => setMessage(data.message));
	// }, []);

	return (
		<>
			<Navbar />
		</>
	);
}
