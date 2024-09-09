import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Page() {
    return(
      <div className="bg-[#352630] h-screen">
        <Navbar/>
      <div className="flex justify-center py-20 flex-col">
        <div className=" flex justify-center items-center">
          <div className="flex flex-col bg-[#F3A36B] p-10 w-auto rounded-xl gap-[16px]">
            <h1 className="font-bold text-[#352630] text-center text-4xl">Fale Conosco:</h1>
            <p className="text-[#352630] text-base"><b className="font-bold">E-mail: </b>clubedeficcao@contato.br</p>
            <p className="text-[#352630]"><b className="font-bold">Endereço: </b><p>Avenida 10 de Setembro, 20,</p> São Pedro, Juiz de Fora/MG</p>
            <p className="text-[#352630]"><b className="font-bold">Celular: </b>(32) 940028922</p>
            <div className="flex justify-center text-[#352630] items-center text-2xl flex-row gap-2">
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
            </div>
          </div>
        </div>
        </div>
        <div className="absolute w-full bottom-0"><Footer/></div>
      </div>
    )
  }