import PostCard from "@/components/PostCard";
import { BestProducts } from "@/types/Home/home";

type BestProductsProps = {
    posts: BestProducts[]
}

export default function BestProductsCard({posts}:BestProductsProps){
    return(
        <div className="bg-[#898458] flex flex-col gap-3 items-center py-8 font-bold text-[#352630]">
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">CONHEÇA NOSSOS PRODUTOS</h1>
            <div className="flex-row gap-2 m-2 grid grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {posts.map((post, index) => (<PostCard post={post} key={index}/>))}
            </div>
        </div>
    )
}
