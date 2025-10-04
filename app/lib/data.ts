'use server';

import { getParsedPattern } from "./parse";
import '@/app/envConfig.ts';

const username = process.env.API_USERNAME;
const password = process.env.API_PASSWORD;
const baseUrl = 'https://api.ravelry.com';


export async function getPattern(id: string) {
    const patternUrl = `${baseUrl}/patterns/${id}.json`
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

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

