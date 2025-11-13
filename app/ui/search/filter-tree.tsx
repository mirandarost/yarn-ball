'use client';

import FilterRoot from "@/app/ui/search/filter-root";
import FilterBranch from "@/app/ui/search/filter-branch";
import FilterLeaf from "@/app/ui/search/filter-leaf";
import { Filter } from "@/app/lib/data-types";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
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

    const filterResult = (filter:string, isChecked:boolean) => {

        const params = new URLSearchParams(searchParams);
        const paramString = params.get(filterType);

        if(isChecked) {
            if(paramString) {
                params.set(filterType, `${paramString},${filter}`);
            } else {
                params.set(filterType, filter);
            }
        } else {
            if(paramString) {
                const filterParams: string[] = paramString.split(',');

                if(filterParams.includes(filter)){
                    if(filterParams.length == 1) {
                        params.delete(filterType);
                    } else {
                        const filterIndex = filterParams.indexOf(filter);
                        filterParams.splice(filterIndex);
                        params.set(filterType, filterParams.toString());
                    }
                }
            }
        }
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