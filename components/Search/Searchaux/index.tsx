export default function Searchs() {
    const count = 0;
    return(
        <div>
            <form className="flex" autoComplete="off">
                <div className="flex w-full flex-col items-center gap-6 my-10">
                    <div className="relative flex w-full items-center">
                    <i className="bi bi-search w-7 h-7 absolute text-[#352630] left-4"></i>
                    <input
                    id="search"
                    name="search"
                    type="text"
                    className="w-full rounded-xl px-16 py-3 text-[#352630] bg-[#B1B1B0] hover:bg-[#858585]
                    caret-purple transition-all duration-300"
                    placeholder=""
                    >
                    </input>
                    </div>
                </div>
            </form>
        </div>
    );
}