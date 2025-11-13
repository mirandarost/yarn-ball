'use server';

import '@/app/envConfig.ts';

import { getParsedPattern } from "@/app/lib/parsers/parse-pattern";
import { getParsedSearch } from "@/app/lib/parsers/parse-search";
import { getParsedCategories, getParsedYarnWeights } from "@/app/lib/parsers/parse-filters";
import { AllFilters, FilterParams } from "@/app/lib/data-types";

const username = process.env.API_USERNAME;
const password = process.env.API_PASSWORD;
const baseUrl = 'https://api.ravelry.com';

const headers = new Headers();
headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));


export async function getFullPattern(id: string) {
    const patternUrl = `${baseUrl}/patterns/${id}.json`

    try {
        const data = await fetch(patternUrl, {headers: headers});
        const { pattern } = await data.json();
        const parsedPattern = getParsedPattern(pattern);
        return(parsedPattern);

    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function searchPatterns(params: FilterParams) {
    let searchUrl = `${baseUrl}/patterns/search.json`;
    

    if(params) {
        let filterString='';
        
        for (const [key, value] of Object.entries(params)) {
            filterString = filterString + value + ',';
        }

        searchUrl = `${searchUrl}?query=${filterString}`
    }

    console.log(searchUrl);

    try {
        const data = await fetch(searchUrl, {headers: headers});
        const { patterns } = await data.json();
        const parsedSearch = getParsedSearch(patterns);
        return(parsedSearch);
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getPatternCategories(params:string|undefined) {
    const categoriesUrl = `${baseUrl}/pattern_categories/list.json`;
    
    try {
        const data = await fetch(categoriesUrl, {headers: headers});
        const categories = await data.json();
        const parsedCategories = getParsedCategories(categories.pattern_categories.children, params);
        return(parsedCategories);

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getFilters(params: FilterParams|undefined) {

    const filters: AllFilters = {
        category: await getPatternCategories(params?.category ? params.category : undefined),
        yarnWeight: getParsedYarnWeights(params?.weight ? params.weight : undefined)
    }
    return(filters);
}
