

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

function parseDifficulty( difficulty:number ) {
    if( difficulty < 3) {
        return('Easy')
    } else if( difficulty < 6) {
        return('Intermediate')
    } else {
        return('Advanced')
    }
}

function parseImages( images:any[] ) {

    if(images[0].large_url) {
        return(images[0].large_url)
    } else if(images[0].medium2_url) {
        return(images[0].medium2_url)
    }
    return images[0].medium_url
}


export function getParsedPattern(pattern: any) {

    const parsedPattern = {
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
        rating: Number(pattern.rating_average.toFixed(1)),
        difficulty: parseDifficulty(pattern.difficulty_average),
        image: parseImages(pattern.photos),
        link: 'https://www.ravelry.com/patterns/library/' + pattern.permalink,
        description: pattern.notes_html
    }

    // console.log(parsedPattern)

    return parsedPattern;
    
}