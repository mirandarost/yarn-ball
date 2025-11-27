import { Filter } from "@/app/lib/data-types";

export function checkFilters(filters:Filter[], filterParams:string[]) {
    const checkedFilters: Filter[] = [];

    if (!filterParams) {
        return checkFilters
    }

    filters.map(parent => {
        if (filterParams.includes(parent.link)) {
            parent.isChecked = true;
        }

        parent.children ? parent.children.map(child => {
            if(filterParams.includes(child.link)) {
                parent.isChecked = true;
                child.isChecked = true;
            }

            child.children ? child.children.map(grandchild => {
                if(filterParams.includes(grandchild.link)) {
                    parent.isChecked = true;
                    child.isChecked = true;
                    grandchild.isChecked = true;
                }
            }) : ''
        }) : ''

    })

    return checkedFilters;
}

function getParent(allFilters:Filter[], chosenFilter:string) {
    let parentFilter = "";

    allFilters.map(parent => {

        parent.children ? parent.children.map(child => {
            if(chosenFilter == child.link) {
                parentFilter = parent.link;
            }

            child.children ? child.children.map(grandchild => {
                if(chosenFilter == grandchild.link) {
                    parentFilter = child.link;
                }
            }) : ''
        }) : ''

    })
    return parentFilter;
}

function addFilter(params:URLSearchParams, chosenFilter:string, parentFilter:string, filterType:string) {
    const paramString = params.get(filterType);

    // If there are no url params active
    if(!paramString) {
        params.set(filterType, chosenFilter)
        return
    }
    // If the filter has no parent, add filter to end of params
    if(!parentFilter) {
        params.set(filterType, `${paramString},${chosenFilter}`)
        return
    }
    // If the filter has a parent, switch parent for new filter
    const paramList: string[] = paramString.split(',');
    const parentIndex = paramList.indexOf(parentFilter);
    paramList[parentIndex] = chosenFilter;
    params.set(filterType, paramList.toString());
}

function removeFilter(params:URLSearchParams, chosenFilter:string, parentFilter:string, filterType:string) {
    const paramString = params.get(filterType);

    if(!paramString){
        console.log("No filter active")
        return
    }

    const paramList: string[] = paramString.split(',');

    // If current filter has no parent and there is only one filter active
    if(!parentFilter && paramList.length == 1) {
        params.delete(filterType);
        return
    }

    const filterIndex = paramList.indexOf(chosenFilter);

    if(!parentFilter) {
        paramList.splice(filterIndex);
    } else {
        paramList[filterIndex] = parentFilter;
    }

    params.set(filterType, paramList.toString())

}

export function updateUrlParams(allFilters:Filter[], params:URLSearchParams, chosenFilter:string, isChecked:boolean, filterType:string) {

    const parentFilter = getParent(allFilters, chosenFilter);

    if(isChecked) {
        addFilter(params, chosenFilter, parentFilter, filterType);
    } else {
        removeFilter(params, chosenFilter, parentFilter, filterType)
    }

}