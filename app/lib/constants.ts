import { Filter } from "@/app/lib/data-types"

const yarnWeights:Filter[] = [
    { name: 'Any Guage', link: 'any', isChecked:false },
    { name: 'Tread', link: 'tread' , isChecked:false},
    { name: 'Cobweb', link: 'cobweb', isChecked:false},
    { name: 'Lace', link: 'lace', isChecked:false},
    { name: 'Light Fingering', link: 'light-fingering', isChecked:false},
    { name: 'Fingering', link: 'fingering', isChecked:false},
    { name: 'Sport', link: 'sport', isChecked:false},
    { name: 'DK', link: 'dk', isChecked:false},
    { name: 'Worsted', link: 'worsted', isChecked:false},
    { name: 'Aran', link: 'aran', isChecked:false},
    { name: 'Bulky', link: 'bulky', isChecked:false},
    { name: 'Super Bulky', link: 'super-bulky', isChecked:false},
    { name: 'Jumbo', link: 'jumbo', isChecked:false},
]

export function getYarnWeights() {
    return yarnWeights;
}