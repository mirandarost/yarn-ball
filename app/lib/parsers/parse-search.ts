import { PartialPattern } from "@/app/lib/data-types";

export function getParsedSearch(patterns: any[]) {

    const searchList: PartialPattern[] = [];

    for ( let i = 0; i < patterns.length; i++ ) {
        const patternInfo: PartialPattern = {
            name: patterns[i].name,
            author: patterns[i].pattern_author.name,
            link: patterns[i].permalink,
            image: patterns[i].first_photo?.medium_url ? patterns[i].first_photo.medium_url : ''
        }
        searchList.push(patternInfo);
    }
return searchList;
}