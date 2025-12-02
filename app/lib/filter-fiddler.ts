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

function getChildren(allFilters:Filter[], chosenFilter:string) {
    const children:string[] = [];

    const parentFilter = allFilters.find(parent => parent.link == chosenFilter);

    if(!parentFilter) {
        console.log('error')
        return
    }

    if(!parentFilter.children) {
        return children;
    }

    parentFilter.children.map(child => {
        children.push(child.link)
        if(child.children) {
            child.children.map(grandchild => {
                children.push(grandchild.link)
            })
        }
    })
    return children;
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
    const paramList: string[] = paramString.split(',');

    // If the filter has a parent, switch parent for new filter
    if(paramList.includes(parentFilter)) {
        const parentIndex = paramList.indexOf(parentFilter);
        paramList[parentIndex] = chosenFilter;

    } else { // A sibling is active so add to end of string
        params.set(filterType, `${paramString},${chosenFilter}`)
        return
    }
    
    params.set(filterType, paramList.toString());
}

function removeFilter(params:URLSearchParams, chosenFilter:string, parentFilter:string, filterType:string, allFilters:Filter[]) {
    const paramString = params.get(filterType);

    if(!paramString){
        console.log("No filter active")
        return
    }

    const paramList: string[] = paramString.split(',');


    const children = getChildren(allFilters, chosenFilter);
    if(children) {
        for(let i = 0; i < paramList.length; i++) {
            if(children.includes(paramList[i])) {
                paramList.splice(i)
            }
        }
    }

    if(!parentFilter && paramList.length < 1) {
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
        removeFilter(params, chosenFilter, parentFilter, filterType, allFilters)
    }

}