"use server"
import prisma from "@/lib/db";

export async function deletePost(id:number | undefined){
    await prisma.post.delete({
        where:{ id },
    })
}
