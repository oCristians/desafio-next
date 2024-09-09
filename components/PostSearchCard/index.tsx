import Link from 'next/link'
import Image from "next/image";
import { BestProducts } from '@/types/Home/home';

type BestProductsCardProps = {
    post: BestProducts
}


export default function PostCard({post}:BestProductsCardProps) {
    const formattedPrice = post.price.toFixed(2);

    return (
        <Link
        href={`/post/${post.id}`}
        className='flex flex-col bg-[#6C4633] rounded-xl w-30 my-8 mx-2 lg:w-10/12 group'
        >
        <div className="flex justify-center items-center flex-col text-white shadow-lg rounded-xl
        group-hover:shadow-2xl duration-300 overflow-hidden">
            <Image
            src="/images/hero-book.png"
            alt="imagem do produto"
            width={400}
            height={300}
            className='max-w-full lg:max-w-[250px] 2xl:max-w-[350px]'
            />
        <div className='flex flex-col justify-between gap-4 py-2'>
            <h1 className='text-center font-bold text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl'>
                {post.name}<p>R$ {formattedPrice}</p>
            </h1>
            <h2 className='p-3 text-center font-normal text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl'>
                {post.content}
            </h2>
        </div>
        </div>
        </Link>
    )
}