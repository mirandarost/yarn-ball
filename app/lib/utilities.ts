import { Filter } from "@/app/lib/data-types";

export function getFilterFamily(filters:Filter[], filterParams:string[]) {
    const family: {
        parents: string[],
        children: string[],
        grandchildren: string[]
    } = {
        parents: [],
        children: [],
        grandchildren: []
    }

    if (!filterParams) {
        return family
    }

    filters.map(parent => {
        if (filterParams.includes(parent.link)) {
            family.parents.push(parent.link)
        }

        parent.children ? parent.children.map(child => {
            if(filterParams.includes(child.link)) {
                family.parents.push(parent.link)
                family.children.push(child.link)
            }

            child.children ? child.children.map(grandchild => {
                if(filterParams.includes(grandchild.link)) {
                    family.parents.push(parent.link)
                    family.children.push(child.link)
                    family.grandchildren.push(grandchild.link)
                }
            }) : ''
        }) : ''

    })

    return family;
}