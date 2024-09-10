import Link from 'next/link'
export default function SecaoGaranta(){
    return(
        <div className="flex flex-col text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl justify-center gap-4 py-10 bg-[#6C4633] text-[#E9DFCC] items-center">
        <h1 className="font-bold text-center">Somos unidos pela leitura!</h1>
        <div className="flex flex-col gap-3 lg:gap-6">
          <h2 className="w-[190px] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-center "> <b className="font-bold">seja exigente </b>ao escolher a edição dos seus livros!</h2>
          <h2 className="w-[190px] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-center flex items-center font-bold ">Monte sua própria biblioteca em casa</h2>
        </div>
            <Link href="/produtos"
          className="bg-[#F6B180] p-3 rounded-xl font-bold text-[#352630] ">Garanta o seu</Link>
        </div>
    )
}