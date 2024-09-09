"use server"

import prisma from "@/lib/db"

export async function getBestProducts(){
    const posts= await prisma.post.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            content: true,
        },
        take: 6
    })
    return posts;
}
export async function getProducts(){
    const posts= await prisma.post.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            content: true,
        },
    })
    return posts;
}