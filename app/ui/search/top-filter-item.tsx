'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

interface FilterItemProps {
    name: String,
    children?: React.ReactNode
}

export default function TopFilterItem({ name, children }: FilterItemProps) {

    const [isOpen, toggleOpen] = useState(false);

    return(
        <div onClick={() => toggleOpen(!isOpen)} className='cursor-pointer'>
            <h3>
                <span>{name}</span>
                <span className='float-right'>
                    {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </span>
            </h3>
            <div className={ isOpen ? '' : 'hidden'}>
                {children}
            </div>
        </div>
    )
}