'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';


interface FilterLeafProps{
    filter: Filter,
    initialState: boolean,
    filterFunction: ( filter:string, isChecked:boolean ) => void,
}

export default function FilterLeaf({filter, initialState, filterFunction}: FilterLeafProps) {

const [isChecked, toggleChecked] = useState(initialState);

const handleCheck = () => {
        filterFunction(filter.link, !isChecked)
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