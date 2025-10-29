import OrderWidget from "../widgets/orderWidget";

export default function PriceList() {
  const carpetPrices = [
    {
      title: "Standard Szoba",
      price: "15 000",
      unit: "szoba",
      description: ["Mélytisztítás", "Folteltávolítás", "Szagtalanítás"],
    },
    {
      title: "Lépcsőház",
      price: "9000",
      unit: "lépcsősor",
      description: ["Mélytisztítás", "Kézi részletezés"],
    },
    {
      title: "Kárpittisztítás",
      price: "24 000",
      unit: "darab",
      description: ["Kanapé, fotel", "Szövetvédelem"],
    },
    {
      title: "Speciális Kezelések",
      price: "12 000",
      unit: "kezelés",
      description: ["Kisállatszag eltávolítás", "Allergén kezelés"],
    },
  ];

  const carPrices = [
    {
      title: "Külső Mosás",
      price: "12 000",
      unit: "autó",
      description: ["Kézi mosás", "Viaszolás", "Gumiabroncs ápolás"],
    },
    {
      title: "Belső Részletezés",
      price: "18 000",
      unit: "autó",
      description: ["Porszívózás", "Portörlés", "Ablaktisztítás"],
    },
    {
      title: "Teljes Körű Szolgáltatás",
      price: "27 000",
      unit: "autó",
      description: ["Külső mosás", "Belső részletezés"],
      popular: true,
    },
    {
      title: "Kiegészítők",
      price: "6 000",
      unit: "kiegészítő",
      description: ["Motortér tisztítás", "Fényszóró felújítás"],
    },
  ];

  return (
    <>
      <div
        id="pricelist"
        className="p-10 flex flex-col gap-10 items-center justify-center
			 		*:flex *:flex-col *:justify-center *:items-center *:gap-4"
      >
        <h1 className="text-4xl text-center font-bold">Áraink</h1>
        <div>
          <h3 className="text-2xl text-neutral-200 font-semibold pb-3">
            Szőnyegtisztítás
          </h3>

          <div className="flex flex-wrap gap-5 justify-center items-center">
            {carpetPrices.map((service, index) => (
              <OrderWidget
                key={index}
                title={service.title}
                price={service.price}
                unit={service.unit}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-neutral-200 font-semibold pb-3">
            Autótisztítás
          </h3>

          <div className="flex flex-wrap gap-5 justify-center items-center">
            {carPrices.map((service, index) => (
              <OrderWidget
                key={index}
                title={service.title}
                price={service.price}
                unit={service.unit}
                description={service.description}
                popular={service.popular}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
