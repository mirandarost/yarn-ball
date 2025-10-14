'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';

interface FilterItemProps{
    filter: Filter,
    children?: React.ReactNode
}

export default function FilterItem({filter, children}: FilterItemProps) {

const [isOpen, toggleOpen] = useState(false);

    return(
        <div>
            <div className='flex'>
                <Checkbox className={`mr-2`} onChange={() => toggleOpen(!isOpen)}/>
                <p>{filter.name}</p>
            </div>
            {filter.children ? <div className={`ml-3 ${isOpen ? '' : 'hidden'}` }>{children}</div> : ''}
        </div>
        
    )
}