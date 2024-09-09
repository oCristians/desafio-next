import prisma from "@/lib/db"
const itemsPerPage = 6;

export async function fetchFilteredPosts(query: string, currentPage: number){
    const posts = await prisma.post.findMany({
        where:{
            OR: [{name: {contains: query, mode: "insensitive"}}]
        },
        orderBy:{
            name: "asc"
        },
        take: itemsPerPage
    });
    const count = await prisma.post.count({
        where:{
            OR: [{name: {contains: query, mode: "insensitive"}}]
        }
    });
    return {posts, count};
}