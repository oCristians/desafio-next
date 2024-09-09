import PostCard from "@/components/PostCard";
import Searchs from "@/components/Search";
import { SomeProducts } from "@/types/data";

type SomeProductsProps = {
    posts: SomeProducts[]
}

export default function ProductsPage({posts}:SomeProductsProps){
    return(
      <div>
        <div className="flex flex-col items-center bg-[#23161F]">
          <div className="grid grid-cols-3 justify-center items-center">{posts.map((post, index) => (<PostCard post={post} key={index}/>))}</div>
          <div></div>
        </div>
        </div>
    );
}