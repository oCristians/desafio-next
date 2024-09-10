import Image from "next/image";
import Navbar from "@/components/Home/Navbar";
import Link from 'next/link'
import { DeleteButton, EditButton, ViewButton } from "@/components/Buttons";
import { getProducts } from "@/actions/home/actions";
import { SomeProducts } from "@/types/data";
import PostCard from "@/components/PostCard";
import PostTableCard from "@/components/PostTableCard";
import Table from "@/components/Table";

export default async function Page() {
    const post = await getProducts()
    return(
        <div className="flex flex-col gap-6 h-screen z-0 bg-[#352630]" >
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
        <Table posts={post}/>
      </div>
    )
  }