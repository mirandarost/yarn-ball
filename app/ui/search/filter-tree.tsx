'use client';

import FilterRoot from "@/app/ui/search/filter-root";
import FilterBranch from "@/app/ui/search/filter-branch";
import FilterLeaf from "@/app/ui/search/filter-leaf";
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

    const filterResult = (chosenFilter:string, isChecked:boolean) => {
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
                        <FilterBranch 
                            key={parent.link} 
                            filter={parent} 
                            initialState={parent.isChecked}
                            filterFunction={ filterResult }
                        >

                            {parent.children.map(child => (
                                child.children ? 
                                <FilterBranch 
                                    filter={child} 
                                    key={child.link} 
                                    initialState={child.isChecked}
                                    filterFunction={ filterResult }
                                >

                                    {child.children.map(grandchild => (
                                        <FilterLeaf 
                                        filter={grandchild} 
                                        key={grandchild.link}
                                        initialState={grandchild.isChecked} 
                                        filterFunction={ filterResult }
                                    />
                                    ))}
                                </FilterBranch> 
                                : <FilterLeaf 
                                    filter={child} 
                                    key={child.link}
                                    initialState={child.isChecked}
                                    filterFunction={ filterResult }
                                />
                                
                            ))}
                        </FilterBranch> 
                        : <FilterLeaf 
                            key={parent.link} 
                            filter={parent}
                            initialState={parent.isChecked}
                            filterFunction={ filterResult }
                        />
                    ))}
                </div>
            </FilterRoot>  

        </div>
    )
}