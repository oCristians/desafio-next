import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import Searchs from "@/components/Search";
import { Livro } from "@/types/data";

export default function ProductsPage({posts, totalPages}: {posts: Livro[], totalPages: number}){
    return(
      <div>
        <div className="flex flex-col items-center bg-[#23161F]">
          <div className="grid grid-cols-3 justify-center items-center">
            {posts.map((post, index) => (<PostCard post={post} key={index}/>))}</div>
          <div></div>
        </div>
        {totalPages > 1 && (
          <div className="bg-[#23161F]"><Pagination totalPages={totalPages}/></div>
        )}
        </div>
    );
}