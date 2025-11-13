'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';

interface FilterBranchProps{
    filter: Filter,
    children: React.ReactNode,
    initialState: boolean,
    filterFunction: ( filter:string, isChecked:boolean ) => void,
}

export default function FilterBranch({filter, children, initialState, filterFunction}: FilterBranchProps) {

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
            {<div className={`ml-3 ${isChecked ? '' : 'hidden'}` }>{children}</div>}
        </div>
        
    )
}