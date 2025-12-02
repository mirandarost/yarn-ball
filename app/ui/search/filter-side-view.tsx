import { AllFilters, FilterParams } from "@/app/lib/data-types";
import FilterTree from "@/app/ui/search/filter-tree";
import { getFilters } from "@/app/lib/data";
import { notFound } from "next/navigation";



interface FilterSideViewProps {
    filterParams: FilterParams,
}

export default async function FilterSideView({ filterParams }: FilterSideViewProps) {

    const filters: AllFilters | null = await getFilters(filterParams);

    if (!filters) {
        notFound();
    }

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
                        isOpen={filterParams?.category ? true : false}
                    />
                    <FilterTree 
                        filters={filters.yarnWeight} 
                        filterType='weight' 
                        filterName='Yarn Weight'
                        isOpen={filterParams?.weight ? true : false}
                    />

                </div>
            </div>
        </div>
        </div>
        
    )
}