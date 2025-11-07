import { Filter } from "@/app/lib/data-types";


function parseCategories(categories: any[]) {
    const categoryList: Filter[] = [];

    for (let i= 0; i < categories.length; i++) {
        const category: Filter = {
            name: categories[i].name,
            link: categories[i].permalink,
            children: categories[i].children ? parseCategories(categories[i].children) : []
        }
        categoryList.push(category);
    }

    return(categoryList);
}

export function getParsedCategories(categories: any[]) {
    const parsedCategories = parseCategories(categories);
    return(parsedCategories);
}