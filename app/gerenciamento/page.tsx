import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from 'next/link'
import { DeleteButton, EditButton, ViewButton } from "@/components/Buttons";
export default function Page() {
    return(
      <div className="flex flex-col gap-6 h-screen bg-[#352630]" >
        <Navbar/>
        <div className="">
          <div className="flex justify-center flex-wrap items-center p-4 gap-16 bg-[#6C4633] rounded-xl text-[#E9DFCC]">
            <p className="text-3xl font-bold text">Lista de produtos</p>
            <Link
            href="gerenciamento/create"
            className="bg-green-600 text-3xl font-bold text-[#352630] py-2 px-4 rounded-xl">
            Criar
            </Link>
          </div>
        </div>
        <div className="text-[#E9DFCC] flex relative overflow-x-auto shadow-md sml:rounded-lg bg-[#6C4633]">
          <table className="w-full text-base text-left">
            <thead className="uppercase bg-[#6C4633]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Descrição
                </th>
                <th scope="col" className="px-6 py-3">
                  Valor
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#898458] border-b hover:bg-[#746f4a]">
                <th className="px-6 py-6 font-medium">1</th>
                <th>Novo box de receberson</th>
                <th>o novo box apresenta mil la ele mil vezes o novo box apresenta mil la ele mil vezes </th>
                <th>1000 R$</th>
                <th className="px-6 py-6 gap-1 flex flex-col lg:flex-row items-center">
                  <ViewButton id={1}/>
                  <EditButton id={1}/>
                  <DeleteButton id={1}/>
                </th>
              </tr>
            </tbody>
          </table>
        </div>{/*Aqui vai ficar a tabela*/}
      </div>
    )
  }