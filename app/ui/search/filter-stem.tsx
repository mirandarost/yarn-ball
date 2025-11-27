'use client';

import { Filter } from '@/app/lib/data-types';
import Checkbox from '@/app/ui/checkbox';
import { useState } from 'react';
import FilterBranch from '@/app/ui/search/filter-branch-new'

interface FilterBranchProps{
    filter: Filter,
    initialState: boolean,
    updateUrl: ( filter:string, isChecked:boolean ) => void,
}

interface childState {
    isChecked: boolean,
    children: Record<string, childState>
}

function getInitialStates(childFilters:Filter[]|undefined) {

    const initialChildrenState: Record<string, childState> = {};

    childFilters ? childFilters.map(child => {
        const grandChildrenState: Record<string, childState> = {};

        if(child.children) {
            child.children.map(grandchild => {
                grandChildrenState[grandchild.link] = {isChecked: grandchild.isChecked, children: {}}
            })
        }
        
        initialChildrenState[child.link] = {isChecked: child.isChecked, children:grandChildrenState}

    }): '';
    return initialChildrenState;
}

export default function FilterStem({filter, initialState, updateUrl}: FilterBranchProps) {

    const [isChecked, toggleChecked] = useState(initialState);
    const [childrenState, setChildrenState] = useState(getInitialStates(filter.children));

    const handleCheck = () => {
        const newChecked = !isChecked;
        toggleChecked(newChecked);

        updateUrl(filter.link, newChecked);
        // If the checkbox is going from checked to unechecked
        if(!newChecked) {
            const newState = childrenState;
            for(const child in newState){
                newState[child].isChecked = false;
                for(const grandchild in newState[child].children) {
                    newState[child].children[grandchild].isChecked = false;
                }
            }
            setChildrenState(newState);
        }
    }

    const handleChildCheck = (childLink:string, parentLink:string|undefined) => {
        let newChecked:boolean;
        const newState = childrenState;        
        if(parentLink) {
            newChecked = !childrenState[parentLink].children[childLink].isChecked
            newState[parentLink].children[childLink].isChecked = newChecked;
        } else {
            newChecked = !childrenState[childLink].isChecked
            newState[childLink].isChecked = newChecked;
        }
        updateUrl(childLink, newChecked);
        setChildrenState(newState);
    }

    
    return(
        <div>
            <div className='flex'>
                <Checkbox checked={isChecked} className={`mr-2`} onChange={() => handleCheck()}/>
                <p>{filter.name}</p>
            </div>
            <div className={`ml-3 ${isChecked ? '' : 'hidden'}` }>
                {filter.children ? filter.children.map(child => (
                    <FilterBranch 
                        filter={child} 
                        key={child.link}
                        isChecked={childrenState[child.link].isChecked} 
                        handleChange={ handleChildCheck }
                    >
                        {child.children ? child.children.map(grandchild => (
                            <FilterBranch 
                                filter={grandchild} 
                                key={grandchild.link}
                                isChecked={childrenState[child.link].children[grandchild.link].isChecked} 
                                handleChange={ handleChildCheck }
                                parentLink={child.link}
                            />
                        )) : ''}
                    </FilterBranch>
                )): ''}
            </div>
        </div>
        
    )
}