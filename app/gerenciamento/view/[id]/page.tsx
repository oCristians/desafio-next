import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation';
import { fetchPostById } from '@/actions/posts/actions';
import { Livro } from "@/types/data";
import ViewAux from '@/components/Gerenciamento/ViewAux';
type Livros = {
    post: Livro
}
export default async function Page({params}: {params: { id: string}}) {
    const id = parseInt(params.id, 10)
    const post = await fetchPostById(id);
    return(
        <div>
            <Link href="../" className='z-0 absolute w-full h-full bg-[#46432f]'></Link>
            <ViewAux post={post}/>
        </div>
    );
}
