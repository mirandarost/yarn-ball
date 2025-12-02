import SearchItem from "@/app/ui/search/search-item";
import Header from "@/app/ui/header";
import FilterSideView from "@/app/ui/search/filter-side-view";
import { FilterParams } from "@/app/lib/data-types";
import PatternGrid from "@/app/ui/search/pattern-grid";


export default async function Page(props: {searchParams: Promise<FilterParams>}) {

    const params = await props.searchParams;

    return(
        <div>
            <Header />
            <div className="flex">
                <FilterSideView filterParams={params}/>
                <PatternGrid filterParams={params}/>
            </div>
            
        </div>
    )
}