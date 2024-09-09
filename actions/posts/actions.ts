"use server"

import prisma from "@/lib/db";

const itemsPerPage = 6;
export async function fetchPosts(currentPage: number){
    const offset = (currentPage - 1) * itemsPerPage

    const posts = await prisma.post.findMany({
        orderBy:{
            name:"asc"
        },
        take:itemsPerPage,
        skip: offset
    })
    const count = await prisma.post.count()

    const totalPages = Math.ceil(count / itemsPerPage)

    return {posts, totalPages}
}