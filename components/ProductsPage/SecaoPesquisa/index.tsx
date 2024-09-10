import Search from "@/components/Search";

export default function SecaoPesquisa(){
    return(
        <div className="flex bg-[#352630] justify-center w-full items-center gap-2 px-2 xl:gap:20">
          <p className="text-[#E9DFCC] font-bold text-center
          text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Coleção Atual</p>
          <div className="w-80"><Search/></div>
        </div>
    )
}