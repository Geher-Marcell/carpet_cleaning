import OrderWidget from "./orderwidget/page";

export default function Home() {
  return (
    <div className="w-dvw h-dvh pt-25">
      <h1 className="text-4xl font-medium text-center text-white">
        Szőnyegtisztítás
      </h1>

      <div className="flex flex-col gap-5 justify-center items-center pt-10">
        <OrderWidget
          title="Standard szoba"
          price={"15 000"}
          description={["Mélytisztítás", "Folteltávolítás", "Szagtalanítás"]}
          unit="szoba"
        />

        <OrderWidget
          title="Lépcsőház"
          price={"9000"}
          description={["Mélytisztítás", "Kézi részletezés"]}
          unit="lépcsősor"
        />
      </div>
    </div>
  );
}
