type Card = {
    id: number,
    title: string,
    text: string,
}

export default function CardMissao({id,title,text}:Card) {
    return(
        <div className="bg-[#F6B180] px-2 py-4 rounded-xl gap-1 justify-center items-center flex flex-col">
          <h1 className="text-center">{title}</h1>
          <p className="font-normal text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl text-center flex justify-center flex-grow-0 flex-shrink-0 w-[240px] text-base">
            {text}
          </p>
        </div>
    );
}