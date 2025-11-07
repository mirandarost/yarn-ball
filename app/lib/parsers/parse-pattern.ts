import { ImageInfo, Pattern } from "@/app/lib/data-types";

function parseNeedles( needles:any[] ){
    let needleString: string = '';

    for(let i = 0; i < needles.length ; i++) {
        needleString = needleString + needles[i].pretty_metric + ' mm';

        if (i != needles.length - 1) {
            needleString = needleString + ', ';
        }
    }
    return needleString;
}

function parseYarn( yarns:any[]) {
    let yarnString: string = '';

    for( let i = 0; i < yarns.length; i++ ) {
        yarnString = yarnString + yarns[i].yarn_name;
        if (i != yarns.length - 1) {
            yarnString = yarnString + ', ';
        }
    }

    return(yarnString);
}

function parseDifficulty( difficulty:number, difficultCount: number ) {
    if(!difficultCount) {
        return(null)
    }

    if( difficulty < 3) {
        return('Easy')
    } else if( difficulty < 6) {
        return('Intermediate')
    } else {
        return('Advanced')
    }
}

function parseImages( images:any[] ) {

    const imageList: ImageInfo[] = [];
    
    for ( let i = 0; i < images.length; i++ ) {

        let imageUrl = '';

        if(images[i].large_url) {
            imageUrl = images[i].large_url
        } else if(images[i].medium2_url) {
            imageUrl = images[i].medium2_url
        } else {
            imageUrl = images[i].medium_url
        }

        const imageInfo: ImageInfo = {
            sortOrder: i,
            thumbnailUrl: images[i].small_url,
            url: imageUrl
        }
        imageList.push(imageInfo);
    }
    return imageList;
}

function parseRating(rating: number, ratingCount: number) {
    if(!ratingCount) {
        return(null)
    } else {
        return(Number(rating.toFixed(1)))
    }

}


export async function getParsedPattern(pattern: any) {

    const parsedPattern: Pattern = {
        name: pattern.name,
        author: pattern.pattern_author.name,
        projects: pattern.projects_count.toString(),
        yarnWeight: pattern.yarn_weight.name,
        yarn: parseYarn(pattern.packs),
        needles: parseNeedles(pattern.pattern_needle_sizes),
        ravelryDownload: pattern.ravelry_download,
        free: pattern.free,
        price: pattern.price,
        currency: pattern.currency,
        rating: parseRating(pattern.rating_average, pattern.rating_count),
        difficulty: parseDifficulty(pattern.difficulty_average, pattern.difficulty_count),
        images: parseImages(pattern.photos),
        link: 'https://www.ravelry.com/patterns/library/' + pattern.permalink,
        description: pattern.notes_html
    }   

    return parsedPattern;
    
}