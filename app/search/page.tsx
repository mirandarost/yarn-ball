import { notFound } from "next/navigation";

import { getFilters, searchPatterns } from "@/app/lib/data";
import { PartialPattern, AllFilters } from "@/app/lib/data-types";

import SearchItem from "@/app/ui/search/search-item";
import Header from "@/app/ui/header";
import FilterSideView from "@/app/ui/search/filter-side-view";
import { FilterParams } from "@/app/lib/data-types";


export default async function Page(props: {searchParams: Promise<FilterParams>}) {

    const params = await props.searchParams;

    const patterns: PartialPattern[] | null = await searchPatterns(params);
    const filters: AllFilters | null = await getFilters();

    if (!patterns || !filters) {
        notFound();
    }

    return(
        <div>
            <Header />
            <div className="flex">
                <div>
                    <FilterSideView filters={filters} filterParams={params}/>
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