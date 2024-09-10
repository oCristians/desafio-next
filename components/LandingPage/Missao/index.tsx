"use client";
import { useEffect, useState } from "react";
import CardMissao from "./CardMissao";
import getApi from "@/src/api/get-secao";

type ApiProps = {
    id: number,
    title: string,
    text: string,
}

export default function Missao() {
    const [cards, setCards] = useState<ApiProps[]>([]);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const{identities} = await getApi();
                setCards(identities);
            }catch{
                console.error('Deu erro');
            }
        }
        fetchData();
    });

  return (
    <div className="bg-[#E9DFCC] flex flex-col justify-center items-center gap-6 py-8 font-bold text-[#352630] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
        <h1>QUEM NÓS SOMOS</h1>
        <div className="flex justify-center p-4 lg:p-1 flex-col lg:flex-row gap-1 w-full">
            {cards.map((card) => (<CardMissao id={card.id} title={card.title} text={card.text}/>))}
        </div>
    </div>
  );
}
