'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';


interface FilterSingleLeafProps{
    filter: Filter,
    initialState: boolean,
    updateUrl: ( filter:string, isChecked:boolean ) => void,
}

export default function FilterSingleLeaf({filter, initialState, updateUrl}: FilterSingleLeafProps) {

const [isChecked, toggleChecked] = useState(initialState);

const handleCheck = () => {
        updateUrl(filter.link, !isChecked)
        toggleChecked(!isChecked);
    }

    return(
        <div>
            <div className='flex'>
                <Checkbox checked={isChecked} className={`mr-2`} onChange={() => handleCheck()}/>
                <p>{filter.name}</p>
            </div>
        </div>
        
    )
}