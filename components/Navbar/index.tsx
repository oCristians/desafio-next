"use client"
import Image from "next/image";
import Link from 'next/link'
import { useState} from "react"

export default function Navbar() {
  const [isNavOpen, setisNavOpen] = useState(false)
  const toggleNav = () => setisNavOpen(!isNavOpen)

  return (
    <header>
      <nav className="flex flex-row items-center font-bold text-[#2A1A25] text-xl gap-4 w-full px-11 py-3 bg-[#E9DFCC] " >
        <Link
        href="/"
        className="hidden md:block">
        <Image
        className="hidden md:block"
        src="/images/logo.png"
        alt="logo"
        width={99}
        height={102}/>
        </Link>
        <button onClick={toggleNav}><i className="block md:hidden text-3xl bi bi-list"></i>
        </button>

        <Link
        href="/"
        className="hidden md:block">Início</Link>

        <Link href="/contato"
        className="hidden md:block">Contato</Link>
        <Link href="/gerenciamento"

        className="hidden md:block">Gerenciamento</Link>

        <div className="w-full flex justify-end gap-3">
          <Link
          href="/login"
          className="bg-[#F6B180] px-3 rounded-xl flex items-center">Login</Link>
          <Link href="/produtos"
          className="bg-[#F6B180] hidden lg:flex p-3 items-center rounded-xl">Conheça Nosso Catálogo</Link>
          <Link href="/produtos"
          className="bg-[#F6B180] flex lg:hidden p-3 items-center rounded-xl ">Catálogo</Link>
          <Image
            className="md:hidden"
            src="/images/logo.png"
            alt="logo"
            width={60}
            height={73} />
        </div>
      </nav>
      {isNavOpen && (
        <div className="flex py-4 flex-col justify-center items-center w-full font-bold text-[#2A1A25] text-xl gap-4 bg-[#e9dfcc]">
          <Link href="/" className="md:hidden">Início</Link>
          <Link href="/contato" className="md:hidden">Contato</Link>
          <Link href="/gerenciamento" className="md:hidden">Gerenciamento</Link>

        </div>
      )}
    </header>
    );
}
