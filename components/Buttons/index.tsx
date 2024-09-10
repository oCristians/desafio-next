'use client'
import { deletePost } from '@/actions/admin/posts/actions';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
export function ViewButton({ id }: { id: number }){
    return(
        <Link href={`gerenciamento/view/${id}`} className="text-[#352630] font-bold my-1 bg-green-600 flex rounded-xl gap-1 px-2">
        Ver <i className="bi bi-eye"></i></Link>
    );
}
export function EditButton({ id }: { id: number }){
    return(
        <Link href={`gerenciamento/edit/${id}`} className="text-[#352630] font-bold my-1 bg-yellow-600 flex rounded-xl gap-1 px-2">
        Editar <i className="bi bi-pencil-square"></i></Link>
    );
}
export function DeleteButton({ id }: { id: number }){
    const router = useRouter()
    function deleteClick(id:number){
        deletePost(id)
        setTimeout(() => {
            router.push('/gerenciamento');
        }, 3000);
    }
    return(
        <Link href={`gerenciamento`}
        onClick={() => deleteClick(id) }
        className="text-[#352630] font-bold bg-red-600 flex rounded-xl my-1 gap-1 px-2">
            Deletar <i className="bi bi-x-lg"></i></Link>
    );
}