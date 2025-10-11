import { getPatternCategories } from "@/app/lib/data"

export default async function Filters() {
    const categories = await getPatternCategories();
    return(
        <div className=" w-80 h-150 border border-emerald-900 p-4 ml-5 mr-5 rounded-xl">
            Filters
        </div>
    )
}