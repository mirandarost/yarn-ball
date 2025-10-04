export interface ImageInfo {
    sortOrder: number,
    thumbnailUrl: string,
    url: string
}

export interface Pattern {
    name: string,
    author: string,
    projects: string,
    yarnWeight: string,
    yarn: string,
    needles: string,
    ravelryDownload: boolean,
    free: boolean,
    price: number,
    currency: string,
    rating: number,
    difficulty: string,
    images: ImageInfo[],
    link: string,
    description: string
}