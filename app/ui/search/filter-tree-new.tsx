'use client';

import FilterRoot from "@/app/ui/search/filter-root";
import FilterStem from "@/app/ui/search/filter-stem";
import FilterSingleLeaf from "@/app/ui/search/filter-single-leaf";
import { Filter } from "@/app/lib/data-types";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { updateUrlParams } from "@/app/lib/filter-fiddler";
interface FilterTreeProps {
        filterType: string,
        filterName: string
        filters: Filter[],
        isOpen: boolean
    }

export default function FilterTree({filterType, filterName, filters, isOpen}: FilterTreeProps) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const updateUrl = (chosenFilter:string, isChecked:boolean) => {
        const params = new URLSearchParams(searchParams);
        updateUrlParams(filters, params, chosenFilter, isChecked, filterType)
        replace(`${pathname}?${params.toString()}`);
    };

    return(
        <div>
            <FilterRoot name={filterName} initialState={isOpen}>
                <div>
                    {filters.map(parent => (
                        parent.children ? 
                        <FilterStem 
                            key={parent.link} 
                            filter={parent} 
                            initialState={parent.isChecked}
                            updateUrl={ updateUrl }
                        >
                        </FilterStem> 
                        : <FilterSingleLeaf 
                            key={parent.link} 
                            filter={parent}
                            initialState={parent.isChecked}
                            updateUrl={ updateUrl }
                            />
                    ))}
                </div>
            </FilterRoot>  

        </div>
    )
}