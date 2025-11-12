import { Filter } from "@/app/lib/data-types";

function parseCategories(categories: any[]) {
    const categoryList: Filter[] = [];

    for (let i= 0; i < categories.length; i++) {
        const category: Filter = {
            name: categories[i].name,
            link: categories[i].permalink,
            children: categories[i].children ? parseCategories(categories[i].children) : [],
            isChecked: false
        }
        categoryList.push(category);
    }

    return(categoryList);
}

export function checkFilters(filters:Filter[], paramString:string|undefined) {

    if (!paramString) {
        return filters;
    }

    const filterParams: string[] = paramString.split(',');

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

    return filters;
}

export function getParsedCategories(categories: any[], paramString?:string|undefined) {
    const parsedCategories = parseCategories(categories);
    const checkedCategories = checkFilters(parsedCategories, paramString)
    return(checkedCategories);
}