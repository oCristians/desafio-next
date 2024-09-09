import { SomeProducts } from "@/types/data";
import PostTableCard from "../PostTableCard";

type SomeProductsProps = {
  posts: SomeProducts[];
};

export default function Table({ posts }: SomeProductsProps) {
  return (
    <div className="text-[#E9DFCC] flex relative overflow-x-auto shadow-md sml:rounded-lg bg-[#6C4633]">
      <table className="w-full text-base text-left">
        <thead className="uppercase bg-[#6C4633]">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Descrição
            </th>
            <th scope="col" className="px-6 py-3">
              Valor
            </th>
            <th scope="col" className="px-6 py-3">
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
    </div>
  );
}
