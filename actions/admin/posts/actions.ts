"use server"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deletePost(id:number | undefined){
    await prisma.post.delete({
        where:{ id },
    })
    revalidatePath('/gerenciamento');
}
export async function createPost(post: {name: string, price: number, content: string}) {
    await prisma.post.create({
        data: {
            name: post.name,
            price: post.price,
            content: post.content,
        },
    });
    revalidatePath('/gerenciamento');
}

export async function editPost(id: number, post: {name: string, price: number, content: string}) {
    await prisma.post.update({
        where:{
            id,
        },
        data: {
            name: post.name,
            price: post.price,
            content: post.content,
        },
    });

    revalidatePath('/gerenciamento');
}
