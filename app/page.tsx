"use client";

import PrimaryButton from "./component/buttons/PrimaryButton";

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
      <main className="h-dvh w-dvw pt-15">
        <div
          className="relative flex flex-col text-center justify-center items-center w-full h-full gap-6 bg-cover bg-center bg-no-repeat p-4"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/aida-public/AB6AXuD2g6clTwuSg57UmPVJpktxSD-_iU2m0uYl8sMG6SWoorITgMXbqpHWiyQhibgmdFv0j2z_hbIWsXh5Y3nP61Hb4Vjpc8bQuHtf-2MP-gcjScN4Ns_yjNVSi09PQB0GZoVlG8R3zDBZZaOKqgw6PmWkfxKaGQUhjGxh_ra21wGrx1Y_rEnfqJBEwwNIu6Mjo9-iviQ21JMNaUqqQuyOutKhOqpcDCj8yjlifOx2trL7g0KV8_751ib-QT78N7r-wvX5OWMEV7NtnjA",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h1 className="text-3xl font-semibold">
              Minden alkalommal makulátlanul tiszta
            </h1>
            <h5 className="font-medium">
              Tapasztalja meg a legjobb szőnyeg- és autó- takarítási
              szolgáltatásokat.
            </h5>
            <PrimaryButton label="Foglaljon most" colorClass="bg-[#3b82f6]" />
          </div>
        </div>
      </main>
    </>
  );
}
