"use client"
import { useSearchParams } from "next/navigation";
import PostCard from "../PostCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchFilteredPosts } from "@/actions/search/actions";

export default function Search() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm,setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string ) => {
        if(!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="w-full justify-center flex" autoComplete="off">
                <div className="flex w-full flex-col items-center gap-6 my-10">
                    <div className="relative flex w-full items-center">
                    <i className="bi bi-search w-7 h-7 absolute text-[#352630] left-4"></i>
                    <input
                    id="search"
                    name="search"
                    type="text"
                    className="w-full rounded-xl px-16 py-3 text-[#352630] bg-[#B1B1B0] hover:bg-[#858585]
                    caret-purple transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    >
                    </input>
                    </div>
                </div>
            </form>
        </div>
    );
}