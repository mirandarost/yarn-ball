'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';

interface FilterBranchProps{
    filter: Filter,
    children: React.ReactNode,
    initialState: boolean,
    // filterFunction: ( filter:string ) => void,
}

export default function FilterBranch({filter, children, initialState}: FilterBranchProps) {

    const [isChecked, toggleChecked] = useState(initialState);

    const handleCheck = () => {
        toggleChecked(!isChecked)
        // filterFunction(filter.link)
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