import { getPatternCategories } from "@/app/lib/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Filter, FilterTypes } from "@/app/lib/data-types";
import TopFilterItem from "@/app/ui/search/top-filter-item";

interface FilterProps {
    filters: FilterTypes
}

export default async function Filters({filters}: FilterProps) {

    return(
        <div className='ml-5'>
            <h2>Filters</h2>
            <div className=" w-80 border border-emerald-900 p-4  mr-5 rounded-xl">
                
            <div>
                <div className="mb-5">
                    <TopFilterItem name='Category'>
                        <div>
                            {filters.category.map(category => (<div key={category.link}>{category.name}</div>))}
                        </div>
                    </TopFilterItem>  
                </div>
            </div>
        </div>
        </div>
        
    )
}