import { Filter } from "@/app/lib/data-types"

const yarnWeights:Filter[] = [
    { name: 'Any Guage', link: 'any' },
    { name: 'Tread', link: 'tread' },
    { name: 'Cobweb', link: 'cobweb'},
    { name: 'Lace', link: 'lace'},
    { name: 'Light Fingering', link: 'light-fingering'},
    { name: 'Fingering', link: 'fingering'},
    { name: 'Sport', link: 'sport'},
    { name: 'DK', link: 'dk'},
    { name: 'Worsted', link: 'worsted'},
    { name: 'Aran', link: 'aran'},
    { name: 'Bulky', link: 'bulky'},
    { name: 'Super Bulky', link: 'super-bulky'},
    { name: 'Jumbo', link: 'jumbo'},
]

export function getYarnWeights() {
    return yarnWeights
}