import { fetchPostById } from '@/actions/posts/actions';
import EditAux from '@/components/Gerenciamento/EditAux';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default async function Page({params}: {params: { id: string}}) {
    const id = parseInt(params.id, 10)
    const post = await fetchPostById(id);
    return(
        <div>
            <Link href="../" className='z-0 absolute w-full h-full bg-[#46432f]'></Link>
            <EditAux post={post}/>
        </div>
    );
}
