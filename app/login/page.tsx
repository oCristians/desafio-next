import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from 'next/link'
export default function Page() {
    return(
      <div className="h-screen bg-[#352630]">
        <Navbar/>
        <div className=" flex justify-center items-center p-20">
          <div className="flex flex-col bg-[#F3A36B] p-10 w-auto rounded-xl gap-15">
            <h1 className="font-bold text-[#352630] text-center text-3xl my-8 mx-5">Faça seu Login:</h1>
            <form className="flex flex-col gap-5" autoComplete="off">
              <input type="text"
              className="rounded-md px-2 font-bold text-[#352630]"
              placeholder="Email"
              ></input>
              <input type="text"
              className="rounded-md px-2 font-bold text-[#352630]"
              placeholder="Senha"
              ></input>
              <div className="flex justify-center text-center">
                <Link
                  href="/gerenciamento"
                  className="bg-[#898458] w-20 text-xl h-10 flex justify-center items-center rounded-md font-bold text-[#352630]">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }