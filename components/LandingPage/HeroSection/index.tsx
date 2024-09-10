import Image from "next/image";
import Link from 'next/link'
export default function HeroSection() {
    return(
        <div className="flex flex-col h-auto text-xl items-center gap-4 justify-center p-12 bg-[#352630] ">
        <div className="flex flex-col md:flex-row justify-center items-center lg:gap-20">
          <div className="flex gap-3 lg:gap-6 flex-col  items-center">
            <h1 className="text-[#F3A36B] text-center text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl flex font-bold">Clube de Ficção</h1>
            <h2 className="text-center font-bold text-[#E9DFCC] text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl">
              <p>Os melhores da literatura de ficção</p> com qualidade excepcional e brindes exclusivos
            </h2>
          </div>
          <Image
          className=""
          src="/images/hero-book.png"
          alt="logo"
          width={346}
          height={353}/>
        </div>
        <Link href="/produtos"
          className="bg-[#F6B180] p-3 w-max text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl rounded-xl font-bold text-[#352630] ">Faça Parte do Clube</Link>
      </div>
    );
}