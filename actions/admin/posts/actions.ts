"use server"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deletePost(id:number | undefined){
    await prisma.post.delete({
        where:{ id },
    })
    revalidatePath('/gerenciamento');
}
export async function createPost(formData: FormData) {
    try {
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const content = formData.get("content") as string;
    await prisma.post.create({
        data: {
            name: name,
            price: Number(price),
            content: content,
        },
    });
    revalidatePath('/gerenciamento/create');
    }catch{
        console.error("Erro ao criar post");
    }
}

export async function editPost(formData: FormData) {
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const content = formData.get("content") as string;
    const idstring = formData.get("id") as string;
    const id = Number(idstring);
    await prisma.post.update({
        where:{id},
        data: {
            name: name,
            price: Number(price),
            content: content,
        },
    });

    revalidatePath('/gerenciamento');
}
