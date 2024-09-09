import PostSearchCard from "@/components/PostSearchCard";
import Search from "..";
import { SomeProducts } from '@/types/data';

export default function SearchSection({posts, count}: {posts: SomeProducts[], count: number}){
    return(
        <div className="bg-[#352630]"><div className="lg:px-8"><Search/></div>
            <div className="flex justify-center">
                {count === 0 ? (<div className="flex justify-center h-screen py-70 text-2xl text-[#E9DFCC]">Nenhuma publicação encontrada</div>)
                : (
                    <div className="flex flex-col items-center">
                        <div className="grid lg:px-2 grid-cols-2 lg:grid-cols-3 justify-center items-center">
                            {posts.map((post, index) => (<PostSearchCard post={post} key={index}/>))}
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}