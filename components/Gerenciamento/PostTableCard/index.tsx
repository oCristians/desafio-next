import { Livro } from '@/types/data';
import { DeleteButton, EditButton, ViewButton } from '../Buttons';

type BestProductsCardProps = {
    post: Livro
}
export default function PostTableCard({post}:BestProductsCardProps){
    const formattedPrice = post.price.toFixed(2);
    return(
        <tr className="bg-[#898458] w-full border-b-2  hover:bg-[#746f4a]">
                <th className="px-6 py-3 font-medium">{post.id}</th>
                <th className='px-6 py-3'>{post.name}</th>
                <th className='px-6 py-3'>{post.content} </th>
                <th className='px-6 py-3'>{formattedPrice}R$</th>
                <th className="px-6 py-6">
                <ViewButton id={post.id}/>
                <EditButton id={post.id}/>
                <DeleteButton id={post.id}/>
                </th>
        </tr>
    )
}