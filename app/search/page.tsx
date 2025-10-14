import { getFilters, searchPatterns } from "@/app/lib/data";
import { PartialPattern, FilterTypes } from "@/app/lib/data-types";
import { notFound } from "next/navigation";
import SearchItem from "../ui/search/search-item";
import Header from "@/app/ui/header";
import FilterSideView from "@/app/ui/search/filter-side-view";


export default async function Page() {

    const patterns: PartialPattern[] | null = await searchPatterns();
    const filters: FilterTypes | null = await getFilters();

    if (!patterns || filters!) {
        notFound
    }

    return(
        <div>
            <Header />
            <div className="flex">
                <div>
                    <FilterSideView filters={filters}/>
                </div>
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