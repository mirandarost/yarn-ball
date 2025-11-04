'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';


interface FilterLeafProps{
    filter: Filter,
    initialState: boolean
}

export default function FilterLeaf({filter, initialState}: FilterLeafProps) {

const [isChecked, toggleChecked] = useState(initialState);

    return(
        <div>
            <div className='flex'>
                <Checkbox checked={isChecked} className={`mr-2`} onChange={() => toggleChecked(!isChecked)}/>
                <p>{filter.name}</p>
            </div>
        </div>
        
    )
}