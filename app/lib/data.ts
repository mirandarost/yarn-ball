'use server';

import { getParsedPattern } from "./parse";


export async function getPattern(id: string) {
    const patternUrl = `https://api.ravelry.com/patterns/${id}.json`
    // const url = 'https://api.ravelry.com/patterns/wool--honey.json'

    const username = 'read-891e993c0dee11e1f77e823b9533f28d';
    const password = 'ctFeFcJXL2X06TObIch1hgTDBOuTlzp+6lVlGW1Z';

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

    try {
        const data = await fetch(patternUrl, {headers: headers})
        const { pattern } = await data.json();
        const parsedPattern = getParsedPattern(pattern);
        return(parsedPattern);

    } catch (error) {
        console.error("Pattern id not found");
        return null;
    }
    
    
}

