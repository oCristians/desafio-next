import Image from "next/image";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";
import {
  DeleteButton,
  EditButton,
  ViewButton,
} from "@/components/Gerenciamento/Buttons";
import { getProducts } from "@/actions/home/actions";
import PostCard from "@/components/PostCard";
import PostTableCard from "@/components/Gerenciamento/PostTableCard";
import Table from "@/components/Gerenciamento/Table";
import { fetchAdminPosts, fetchPosts } from "@/actions/posts/actions";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { posts, totalPages } = await fetchAdminPosts(currentPage);
  return (
    <div className="flex flex-col justify-center gap-6 h-screen z-0 bg-[#352630]">
      <div className="">
        <div className="flex justify-center flex-wrap items-center py-1 px-4 gap-16 bg-[#6C4633] rounded-xl text-[#E9DFCC]">
          <Link
            href="../"
            className="bg-[#F3A36B] text-3xl font-bold text-[#352630] py-2 px-4 rounded-xl"
          >
            Início
          </Link>
          <p className="text-3xl font-bold text text-center">Lista de produtos</p>
          <Link
            href="gerenciamento/create"
            className="bg-green-600 text-3xl font-bold text-[#352630] py-2 px-4 rounded-xl"
          >
            Criar
          </Link>
        </div>
      </div>
      <Table posts={posts} totalPages={totalPages} />
    </div>
  );
}
