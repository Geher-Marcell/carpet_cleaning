import OrderWidget from "./orderwidget/page";

export default function Home() {
  return (
    <div className="max-w-screen max-h-screen">
      <h1 className="text-5xl font-bold text-center pt-10 text-white">
        Szőnyegtisztítás
      </h1>

      <div className="flex flex-col gap-5 justify-center items-center mt-25">
        <OrderWidget
          cim="Standard szoba"
          ar={"15 000"}
          leiras={["Mélytisztítás", "Folteltávolítás", "Szagtalanítás"]}
        />

        <OrderWidget
          cim="Lépcsőház"
          ar={"9000"}
          leiras={["Mélytisztítás", "Kézi részletezés"]}
        />
      </div>
    </div>
  );
}
