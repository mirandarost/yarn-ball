import { AllFilters, FilterParams } from "@/app/lib/data-types";
import FilterTree from "@/app/ui/search/filter-tree";

interface FilterSideViewProps {
    filters: AllFilters,
    filterParams: FilterParams,
}

export default function FilterSideView({ filters, filterParams }: FilterSideViewProps) {

    return(
        <div className='ml-5'>
            <h2>Filters</h2>
            <div className=" w-80 min-h-140 border border-emerald-900 p-4 mr-5 rounded-xl">
                
            <div>
                <div className="mb-5">
                    <FilterTree 
                        filters={filters.category} 
                        filterType='category' 
                        filterName='Category'
                        filterParam={filterParams?.category || ''}
                    />
                    <FilterTree 
                        filters={filters.yarnWeight} 
                        filterType='weight' 
                        filterName='Yarn Weight'
                        filterParam={filterParams?.weight || ''}
                    />

                </div>
            </div>
        </div>
        </div>
        
    )
}