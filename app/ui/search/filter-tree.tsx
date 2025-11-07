'use client';

import { Filter } from "@/app/lib/data-types";
import FilterRoot from "@/app/ui/search/filter-root";
import FilterBranch from "@/app/ui/search/filter-branch";
import FilterLeaf from "@/app/ui/search/filter-leaf";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { getFilterFamily } from "@/app/lib/utilities";
interface FilterTreeProps {
    filterType: string,
    filterName: string
    filters: Filter[],
    filterParam: string
}

export default function FilterTree({filterType, filterName, filters, filterParam}: FilterTreeProps) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const params: string[] = filterParam.split(',');
    const filterFamilily = getFilterFamily(filters, params);

    const filterResult = (filter:string) => {
        console.log('Filtering for', filterType, filter)

        const params = new URLSearchParams(searchParams);
        params.set(filterType, filter);

        replace(`${pathname}?${params.toString()}`)

    };

    return(
        <div>
            <button onClick={() => filterResult('sweater')}>hej</button>
            <FilterRoot name={filterName} initialState={filterParam ? true : false}>
                <div>
                    {filters.map(parent => (
                        parent.children ? 
                        <FilterBranch 
                            key={parent.link} 
                            filter={parent} 
                            initialState={filterFamilily.parents.includes(parent.link) ? true : false}>

                            {parent.children.map(child => (
                                child.children ? 
                                <FilterBranch 
                                    filter={child} 
                                    key={child.link} 
                                    initialState={filterFamilily.children.includes(child.link) ? true : false}>

                                    {child.children.map(grandchild => (
                                        <FilterLeaf 
                                        filter={grandchild} 
                                        key={grandchild.link}
                                        initialState={filterFamilily.grandchildren.includes(grandchild.link) ? true : false} />
                                    ))}
                                </FilterBranch> 
                                : <FilterLeaf 
                                filter={child} 
                                key={child.link}
                                initialState={filterFamilily.children.includes(child.link) ? true : false}/>
                                
                            ))}
                        </FilterBranch> 
                        : <FilterLeaf 
                            key={parent.link} 
                            filter={parent}
                            initialState={filterFamilily.parents.includes(parent.link) ? true : false}/>
                    ))}
                </div>
            </FilterRoot>  

        </div>
    )
}