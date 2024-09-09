import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams } from 'next/navigation'
import SearchSection from "@/components/Search/SearchSection";
import { fetchFilteredPosts } from "@/actions/search/actions";
export default async function Page({
    searchParams,}:
    {
        searchParams : {
            query?:string;
            Page?:string;
        }
    })
    {
        const query = searchParams.query || ''
        const currentPage = Number(searchParams?.Page) || 1
        const {posts, count} = await fetchFilteredPosts(query,currentPage)
        console.log('query',query)
        console.log('currentPage',currentPage)
        return(
            <div className="h-screen flex flex-col bg-[#352630]">
                <Navbar/>
                <div className=""><SearchSection posts={posts} count={count}/></div>
                <div className="relative w-full bottom-0"><Footer/></div>
            </div>
        );
    }