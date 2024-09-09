import prisma from "@/lib/db"
const itemsPerPage = 6;

export async function fetchFilteredPosts(query: string, currentPage: number){
    const offset = (currentPage - 1) * itemsPerPage
    const posts = await prisma.post.findMany({
        where:{
            OR: [{name: {contains: query, mode: "insensitive"}}]
        },
        orderBy:{
            name: "asc"
        },
        take: itemsPerPage,
        skip: offset
    });
    const count = await prisma.post.count({
        where:{
            OR: [{name: {contains: query, mode: "insensitive"}}]
        }
    });

    const totalPages =  Math.ceil(count / itemsPerPage)

    return {posts, count, totalPages};
}