import { Livro } from "@/types/data";
import PostTableCard from "../PostTableCard";
import Pagination from "@/components/Pagination";

export default function Table({posts, totalPages}: {posts: Livro[], totalPages: number}) {
  return (
    <div className="z-0 text-[#E9DFCC] flex flex-col relative overflow-x-auto shadow-md sml:rounded-lg bg-[#6C4633]">
      <table className="w-full text-base text-left">
        <thead className="uppercase bg-[#6C4633]">
          <tr>
            <th scope="col" className="px-6">
              ID
            </th>
            <th scope="col" className="px-6">
              Nome
            </th>
            <th scope="col" className="px-6">
              Descrição
            </th>
            <th scope="col" className="px-6">
              Valor
            </th>
            <th scope="col" className="px-6">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="">
        {posts.map((post, index) => (
            <PostTableCard post={post} key={index} />
        ))}
        </tbody>
      </table>
      {totalPages > 1 && (
          <div className="bg-[#352630]"><Pagination totalPages={totalPages}/></div>
        )}
    </div>
  );
}
