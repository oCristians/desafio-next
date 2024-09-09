import Image from "next/image";
import Link from 'next/link'
export default function HeroSection() {
    return(
        <div className="flex flex-col h-auto text-xl items-center gap-4 justify-center p-12 bg-[#352630] ">
        <div className="flex justify-center items-center gap-20">
          <div className="flex gap-6 flex-col items-center">
            <h1 className="text-[#F3A36B] text-3xl flex font-bold">Clube de Ficção</h1>
            <h2 className="text-center font-bold text-[#E9DFCC]">
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
          className="bg-[#F6B180] p-3 w-max rounded-xl font-bold text-[#352630] ">Faça Parte do Clube</Link>
      </div>
    );
}