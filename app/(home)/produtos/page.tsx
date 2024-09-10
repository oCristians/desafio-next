import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import CurrentCollection from "@/components/ProductsPage/CurrentCollection";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { fetchPosts } from "@/actions/posts/actions";
import SecaoPesquisa from "@/components/ProductsPage/SecaoPesquisa";
import NovoBox from "@/components/ProductsPage/NovoBox";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { posts, totalPages } = await fetchPosts(currentPage);
  return (
    <div>
      <NovoBox />
      <SecaoPesquisa />
      <CurrentCollection posts={posts} totalPages={totalPages} />
    </div>
  );
}
