import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
export default function Page() {
    return(
        <body className="">
            <Navbar/>
            <div className="bg-[#352630]" >
                <div className="flex justify-center items-center gap-20">
                    <Search/>
                </div>
            </div>
            <div className="relative w-full bottom-0"><Footer/></div>
        </body>
    );
}