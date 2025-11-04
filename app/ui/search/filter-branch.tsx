'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';

interface FilterBranchProps{
    filter: Filter,
    children: React.ReactNode,
    initialState: boolean
}

export default function FilterBranch({filter, children, initialState}: FilterBranchProps) {

    const [isChecked, toggleChecked] = useState(initialState);
    
    return(
        <div>
            <div className='flex'>
                <Checkbox checked={isChecked} className={`mr-2`} onChange={() => toggleChecked(!isChecked)}/>
                <p>{filter.name}</p>
            </div>
            {<div className={`ml-3 ${isChecked ? '' : 'hidden'}` }>{children}</div>}
        </div>
        
    )
}