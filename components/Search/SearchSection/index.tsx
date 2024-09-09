import Search from "..";

export default function SearchSection(){
    const count = 0;
    return(
        <div><Search/>
            <div className="flex justify-center">
                {count === 0 ? (<div className="flex justify-center h-full py-70 text-2xl text-[#E9DFCC]">Nenhuma publicação encontrada</div>)
                : (
                    <div className="flex flex-col items-center bg-[#23161F]">
                        <div className="grid grid-cols-3 justify-center items-center">
                            {/*CARDS*/}
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}