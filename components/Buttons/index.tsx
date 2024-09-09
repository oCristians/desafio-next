'use client'
import Link from 'next/link'
export function ViewButton({ id }: { id: number }){
    return(
        <Link href="gerenciamento/view" className="text-[#352630] font-bold bg-green-600 flex rounded-xl gap-1 px-2">
        Ver <i className="bi bi-eye"></i></Link>
    );
}
export function EditButton({ id }: { id: number }){
    return(
        <Link href='gerenciamento/edit${id}' className="text-[#352630] font-bold bg-yellow-600 flex rounded-xl gap-1 px-2">
        Editar <i className="bi bi-pencil-square"></i></Link>
    );
}
export function DeleteButton({ id }: { id: number }){
    return(
        <button className="text-[#352630] font-bold bg-red-600 flex rounded-xl gap-1 px-2">
            Deletar <i className="bi bi-x-lg"></i></button>
    );
}