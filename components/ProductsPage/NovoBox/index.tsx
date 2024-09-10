import Image from "next/image";
export default function NovoBox() {
  return (
    <div className="flex flex-col md:flex-row text-[#E9DFCC] bg-[#898458] py-10 items-center justify-center">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
          Está a uma página de ser seu.
        </h1>
        <h2 className="text-center px-1 md:w-[300px]">
          O novo box apresenta um universo rico e cativante das lendas
          japonesas, criaturas misteriosas e seres encantados
        </h2>
      </div>
      <Image
        className=""
        src="/images/hero-book.png"
        alt="logo"
        width={346}
        height={353}
      />
      <div className="flex flex-col font-bold text-center">
        Lendas Japonesas <p>R$ 69,90</p>
      </div>
    </div>
  );
}
