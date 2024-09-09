import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Searchs from "@/components/Search/Searchaux";
import Image from "next/image";
import PostCard from "@/components/PostCard";
export default function Page() {
    return(
      <body>
        <Navbar/>
        <div className="flex text-[#E9DFCC] bg-[#898458] py-10 items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Está a uma página de ser seu.</h1>
            <h2 className="text-center w-20">O novo box apresenta um universo rico e cativante das lendas japonesas,
            criaturas misteriosas e seres encantados</h2>
          </div>
          <Image
          className=""
          src="/images/hero-book.png"
          alt="logo"
          width={346}
          height={353}/>
          <div className="flex flex-col font-bold">Lendas Japonesas <p>R$ 69,90</p></div>
        </div>

        <div className="flex bg-[#352630] justify-center items-center gap-20">
          <p className="text-[#E9DFCC] font-bold
          text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Coleção Atual</p>
          <Searchs/>
        </div>

        <div className="flex flex-col items-center bg-[#23161F]">
          <div className="grid grid-cols-3 justify-center items-center"><PostCard/><PostCard/><PostCard/><PostCard/></div>
          <div></div>
        </div>
        <Footer/>
      </body>
    )
  }