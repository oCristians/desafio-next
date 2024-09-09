import prisma from "@/lib/db";

export async function deletePost(id:number | undefined){
    await prisma.post.delete({
        where:{ id },
    })
}

export async function createPost(formData: FormData){
    await prisma.post.create({
            name = formData.get("name") as string,
            price = formData.get("price") as number,
            content = formData.get("content") as string,

    })
}