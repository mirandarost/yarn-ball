import { Filter } from "@/app/lib/data-types";
import FilterItem from "@/app/ui/search/filter-item";
import TopFilterItem from "@/app/ui/search/top-filter-item";

interface FilterTreeProps {
    filterType: string,
    filters: Filter[]
}


export default function FilterTree({filterType, filters}: FilterTreeProps) {
    return(
        <div>
            <TopFilterItem name={filterType}>
                <div>
                    {filters.map(filter => (
                        <FilterItem key={filter.link} filter={filter}>
                            {filter.children ? filter.children.map(child => 
                                <FilterItem filter={child} key={child.link}>
                                    {child.children ? child.children.map(grandchild =>(<FilterItem key={grandchild.link} filter={grandchild}/>)) : ''}
                                </FilterItem>
                            ): ''}
                        </FilterItem>
                    ))}
                </div>
            </TopFilterItem>  

        </div>
    )
}