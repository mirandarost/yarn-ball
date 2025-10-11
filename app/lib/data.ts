'use server';

import { getParsedPattern } from "@/app/lib/parse-pattern";
import { getParsedSearch } from "@/app/lib/parse-search";
import '@/app/envConfig.ts';

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
        console.log(pattern);
        const parsedPattern = getParsedPattern(pattern);
        return(parsedPattern);

    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function searchPatterns() {
    const searchUrl = `${baseUrl}/patterns/search.json`;

    try {
        const data = await fetch(searchUrl, {headers: headers});
        const { patterns } = await data.json();
        // console.log(patterns);

        const parsedSearch = getParsedSearch(patterns);
        // console.log(parsedSearch);
        return(parsedSearch);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPatternCategories() {
    const categoriesUrl = `${baseUrl}/pattern_categories/list.json`;
    
    try {
        const data = await fetch(categoriesUrl, {headers: headers});
        console.log(data);
        const categories = await data.json();
        console.log(categories);
        return(categories);
    } catch (error) {
        console.error(error);
        return [];
    }
}
