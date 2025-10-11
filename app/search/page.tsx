import { searchPatterns } from "@/app/lib/data";
import { PartialPattern } from "@/app/lib/data-types";
import { notFound } from "next/navigation";
import SearchItem from "../ui/search/search-item";
import Header from "@/app/ui/header";
import Filters from "@/app/ui/search/filters";


export default async function Page() {

    const patterns: PartialPattern[] | null = await searchPatterns();

    if (!patterns) {
        notFound
    }

    return(
        <div>
            <Header />
            <div className="flex">
                <div className='flex flex-wrap'>
                    {patterns.map( (pattern) => (
                        <div key={pattern.link} className="m-2">
                            <SearchItem pattern={pattern} />
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    )
}