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
export async function fetchPostById(id:number | undefined) {
    const post = await prisma.post.findUnique({
        where:{id},
        select: {
            id:true,
            name:true,
            price:true,
            content:true,
        }
    })
    return post;
}
const itemsAdminPerPage = 4;
export async function fetchAdminPosts(currentPage: number){
    const offset = (currentPage - 1) * itemsAdminPerPage

    const posts = await prisma.post.findMany({
        orderBy:{
            id:"asc"
        },
        take:itemsAdminPerPage,
        skip: offset
    })
    const count = await prisma.post.count()

    const totalPages = Math.ceil(count / itemsAdminPerPage)

    return {posts, totalPages}
}

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