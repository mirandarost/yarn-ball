'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

interface FilterRoot {
    name: String,
    initialState: boolean,
    children?: React.ReactNode
}

export default function FilterRoot({ name, children, initialState}: FilterRoot) {

    const [isOpen, toggleOpen] = useState(initialState);

    return(
        <div>
            <h3 onClick={() => toggleOpen(!isOpen)} className='cursor-pointer'>
                <span>{name}</span>
                <span className='float-right'>
                    {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </span>
            </h3>
            <div className={`ml-3 ${isOpen ? '' : 'hidden'}` }>
                {children}
            </div>
        </div>
    )
}