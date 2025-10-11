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
    price: number | null,
    currency: string | null,
    rating: number | null,
    difficulty: string | null,
    images: ImageInfo[],
    link: string,
    description: string
}

export interface PartialPattern  {
    name: string,
    author: string,
    link: string,
    image: string
    }