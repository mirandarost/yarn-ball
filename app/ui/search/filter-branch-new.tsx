'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';

interface FilterLeafProps{
    filter: Filter,
    isChecked: boolean,
    handleChange: ( filter:string, parentLink:string|undefined) => void,
    children?: React.ReactNode,
    parentLink?: string
}

export default function FilterBranch({filter, isChecked, handleChange, children, parentLink}: FilterLeafProps) {
    return(
        <div>
            <div className='flex'>
                <Checkbox checked={isChecked} className={`mr-2`} onChange={() => handleChange(filter.link, parentLink)}/>
                <p>{filter.name}</p>
            </div>
            {children ? <div className={`ml-3 ${isChecked ? '' : 'hidden'}` }>{children}</div>: ''}
        </div>
        
    )
}