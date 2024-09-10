import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Searchs from "@/components/Search";
import Link from 'next/link'
import PostCard from "@/components/PostCard";
import BestProductsCard from "@/components/Home/BestProductsCard";
import { getBestProducts } from "@/actions/home/actions";
import { useState } from "react";
import Missao from "@/components/Home/Missao";
export default async function Home() {
  const post = await getBestProducts()
  return (
    <>
      <Navbar />
      <button className="flex justify-center gap-1 p-2 items-center w-full self-stretch text-[#E9DFCC] bg-[#6C4633]">
        <aside className="font-bold text-[#F3A36B]"> CONFIRA</aside> AGORA O BOX DO MÊS
      </button>
      <HeroSection/>
      <BestProductsCard posts={post}/>

      <div className="flex flex-col text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl justify-center gap-4 py-10 bg-[#6C4633] text-[#E9DFCC] items-center">
        <h1 className="font-bold">Somos unidos pela leitura!</h1>
        <div className="flex gap-6">
          <h2 className="w-[190px] text-center "> <b className="font-bold">seja exigente </b>ao escolher a edição dos seus livros!</h2>
          <h2 className="w-[190px] text-center flex items-center">Monte sua própria biblioteca em casa</h2>
        </div>
        <Link href="/produtos"
          className="bg-[#F6B180] p-3 rounded-xl font-bold text-[#352630] ">Garanta o seu</Link>
      </div>

      <Missao/>

      <Footer/>
    </>
  );
}
