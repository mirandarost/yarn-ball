import SearchItem from "@/app/ui/search/search-item";
import { FilterParams, PartialPattern } from "@/app/lib/data-types";
import { searchPatterns } from "@/app/lib/data";
import { notFound } from "next/navigation";


interface PatternGridProps {
    filterParams:FilterParams
}

export default async function PatternGrid({ filterParams } : PatternGridProps) {

    const patterns: PartialPattern[] | null = await searchPatterns(filterParams);
    
    if (!patterns ) {
        notFound();
    }

    return(
        <div className='flex flex-wrap'>
            {patterns.map( (pattern) => (
                <div key={pattern.link} className="m-2">
                    <SearchItem pattern={pattern} />
                </div>
            ))}
        </div>
    )
}