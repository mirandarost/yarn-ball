'use client';

import { Filter } from "@/app/lib/data-types";
import FilterRoot from "@/app/ui/search/filter-root";
import FilterBranch from "@/app/ui/search/filter-branch";
import FilterLeaf from "@/app/ui/search/filter-leaf";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
interface FilterTreeProps {
    filterType: string,
    filterName: string
    filters: Filter[]
}

interface checkedFilter {
    type: string,
    name: string,
}

function getFilterFamily(filters:Filter[], filterString:string|null) {
    const family = {
        parent: '',
        child: '',
        grandchild: ''
    }

    if (!filterString) {
        return family
    }

    for (let i = 0; i < filters.length; i++) {
        if(filters[i].link == filterString) {
            family.parent = filterString;
            break
        }

        for (let j = 0; j < filters[i].children.length; j++) {
            if(filters[i].children[j].link == filterString){
                family.parent = filters[i].link;
                family.child = filterString;
                break
            }

            for (let k = 0; k < filters[i].children[j].children.length; k++) {
                if(filters[i].children[j].children[k].link == filterString){
                    family.parent = filters[i].link;
                    family.child = filters[i].children[j].link
                    family.grandchild = filterString
                    break
            }
            }
        }

    }
    return family;
}


export default function FilterTree({filterType, filterName, filters}: FilterTreeProps) {

    const checkedFilters: checkedFilter[] = [];

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // const filterResult = (filter:string) => {
    //     console.log('Filtering for', filterType, filter)

    //     const params = new URLSearchParams(searchParams);
    //     params.set(filterType, filter);

    //     replace(`${pathname}?${params.toString()}`)

    // };

    const filterString = searchParams.get(filterType);

    const filterFamily = getFilterFamily(filters, filterString);
    console.log(filterFamily);


    return(
        <div>
            <FilterRoot name={filterName} initialState={filterString ? true : false}>
                <div>
                    {filters.map(parent => (
                        parent.children ? 
                        <FilterBranch 
                            key={parent.link} 
                            filter={parent} 
                            initialState={parent.link == filterString || parent.link == filterFamily.parent ? true : false}>

                            {parent.children.map(child => (
                                child.children ? 
                                <FilterBranch 
                                    filter={child} 
                                    key={child.link} 
                                    initialState={child.link == filterString || child.link == filterFamily.child ? true : false}>

                                    {child.children.map(grandchild => (
                                        <FilterLeaf 
                                        filter={grandchild} 
                                        key={grandchild.link}
                                        initialState={grandchild.link == filterString ? true : false} />
                                    ))}
                                </FilterBranch> 
                                : <FilterLeaf 
                                filter={child} 
                                key={child.link}
                                initialState={child.link == filterString ? true : false}/>
                                
                            ))}
                        </FilterBranch> 
                        : <FilterLeaf 
                            key={parent.link} 
                            filter={parent}
                            initialState={parent.link == filterString ? true : false}/>
                    ))}
                </div>
            </FilterRoot>  

        </div>
    )
}