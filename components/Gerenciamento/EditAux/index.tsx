"use client"
import { editPost } from '@/actions/admin/posts/actions'
import { Livro } from '@/types/data'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
export default function EditAux({post}: {post: Livro}){
    const router = useRouter()
    function BackToTable(){
        setTimeout(() => {
            router.push('/gerenciamento');
        }, 2000);
    }
    return(
        <form action={editPost} autoComplete="off" className="w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute
            lg:w-4/12 xl:w-7/12 2xl:w-5/12 gap-3 flex flex-col p-4 justify-center items-center rounded-xl bg-[#643D2A] ">
                <div className="w-full flex justify-end text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-[#E9DFCC]">
                    <Link href="../"><i className="bi bi-x"></i></Link>
                </div>
                <div className="text-xl font-bold text-[#E9DFCC] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Edite Seu Produto</div>
                <div className="flex flex-col w-full justify-center gap-2 rounded-xl p-2 bg-[#6C4633] ">
                    <input
                    type="text"
                    name="name"
                    defaultValue={post?.name}
                    className="bg-[#898458] p-2 rounded-lg hover:bg-[#79744e]
                        caret-green transition-all duration-300"
                    placeholder="Nome"
                    ></input>
                    <input
                    type="number"
                    name="price"
                    defaultValue={post?.price}
                    className="bg-[#898458] p-2 rounded-lg hover:bg-[#79744e]
                        caret-green transition-all duration-300"
                    placeholder="Preço em reais"
                    ></input>
                    <input
                    type="text"
                    name="content"
                    defaultValue={post?.content}
                    className="bg-[#898458] p-2 rounded-lg hover:bg-[#79744e]
                        caret-green transition-all duration-300"
                    placeholder="Descrição"
                    ></input>
                    <input type="number" name="id" value={post?.id} className="absolute hidden" />
                </div>
                <div className="flex gap-2">
                <button
                type="submit"
                onClick={() => BackToTable()}
                className="bg-yellow-600 text-xl lg:text-3xl font-bold text-[#352630] py-2 px-4 rounded-xl">
                Editar
                </button>
                <Link href="../"
                className="bg-[#8E7E7E] text-xl lg:text-3xl font-bold text-[#352630] py-2 px-4 rounded-xl">
                Cancelar
                </Link>
                </div>
            </form>
    )
}