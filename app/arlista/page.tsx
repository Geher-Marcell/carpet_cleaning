import OrderWidget from "./orderwidget/page";

export default function Home() {
  return (
    <div className="w-dvw h-dvh pt-25">
      <h1 className="text-4xl font-medium text-center text-white">
        Szőnyegtisztítás
      </h1>

      <div className="flex flex-col gap-5 justify-center items-center pt-10">
        <OrderWidget
          cim="Standard szoba"
          ar={"15 000"}
          leiras={["Mélytisztítás", "Folteltávolítás", "Szagtalanítás"]}
          mi="szoba"
        />

        <OrderWidget
          cim="Lépcsőház"
          ar={"9000"}
          leiras={["Mélytisztítás", "Kézi részletezés"]}
          mi="lépcsősor"
        />
      </div>
    </div>
  );
}
