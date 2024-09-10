import Link from 'next/link'
export default function Page() {
    return(
        <div>
            <Link href="../" className='z-0 absolute w-full h-full bg-[#46432f]'></Link>
            <form autoComplete="off" className="w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute  lg:w-4/12 xl:w-7/12 2xl:w-5/12 gap-3
            flex flex-col p-4 justify-center items-center rounded-xl bg-[#643D2A] ">
                <div className="w-full flex justify-end text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-[#E9DFCC]">
                <Link href="../gerenciamento"><i className="bi bi-x"></i></Link>
                </div>
                <div className="text-xl font-bold text-[#E9DFCC] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Veja Seu Produto</div>
                <div className="flex flex-col w-full justify-center gap-2 rounded-xl p-2 bg-[#6C4633] ">
                    <input
                    type="text"
                    readOnly
                    className="bg-[#898458] p-2 rounded-lg hover:bg-[#79744e]
                        caret-green transition-all duration-300"
                    placeholder="Nome"
                    ></input>
                    <input
                    type="number"
                    readOnly
                    className="bg-[#898458] p-2 rounded-lg hover:bg-[#79744e]
                        caret-green transition-all duration-300"
                    placeholder="Preço em reais"
                    ></input>
                    <input
                    type="text"
                    readOnly
                    className="bg-[#898458] p-2 rounded-lg hover:bg-[#79744e]
                        caret-green transition-all duration-300"
                    placeholder="Descrição"
                    ></input>
                </div>
                <div className="flex gap-2">
                <button
                className="bg-[#8E7E7E] text-xl lg:text-3xl font-bold text-[#352630] py-2 px-4 rounded-xl">
                Cancelar
                </button>
                </div>
            </form>
        </div>
    );
}
