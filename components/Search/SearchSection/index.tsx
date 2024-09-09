import PostCard from "@/components/PostCard";
import Search from "..";
import { SomeProducts } from '@/types/data';

type SomeProductsProps = {
    posts: SomeProducts[]
}

export default function SearchSection({posts, count}: {posts: SomeProductsProps, count: number}){
    return(
        <div className="bg-[#352630]"><div className="lg:px-8"><Search/></div>
            <div className="flex justify-center">
                {count === 0 ? (<div className="flex justify-center h-screen py-70 text-2xl text-[#E9DFCC]">Nenhuma publicação encontrada</div>)
                : (
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center">
                            {posts.map((post, index) => (<PostCard post={post} key={index}/>))}
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}