import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams } from 'next/navigation'
import SearchSection from "@/components/Search/SearchSection";
export default async function Page({
    searchParams,}:
    {
        searchParams : {
            query?:string;
            currentPage?:string;
        }
    })
    {
        const query = searchParams.query || ''
        const currentPage = searchParams.currentPage || '1'
        console.log('query',query)
        console.log('currentPage',currentPage)
        return(
            <div className="h-screen flex flex-col bg-[#352630]">
                <Navbar/>
                <div className="mx-20"><SearchSection/></div>
                
                <div className="absolute w-full bottom-0"><Footer/></div>
            </div>
        );
    }