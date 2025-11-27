'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';

interface FilterLeafProps{
    filter: Filter,
    isChecked: boolean,
    handleChange: ( filter:string) => void,
}

export default function FilterLeaf({filter, isChecked, handleChange}: FilterLeafProps) {

    return(
        <div>
            <div className='flex'>
                <Checkbox checked={isChecked} className={`mr-2`} onChange={() => handleChange(filter.link)}/>
                <p>{filter.name}</p>
            </div>
        </div>
        
    )
}