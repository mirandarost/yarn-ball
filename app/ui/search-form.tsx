'use client';

import { getIdInput } from '@/app/lib/actions';
import { RoutingButton } from '@/app/ui/buttons';

function getId() {
}


export default function SearchForm() {
    return (
        <div className='flex-col items-center justify-center p-4'>
            <form action={getIdInput}>
                <label htmlFor="patternId">Enter Ravelry Pattern ID:</label>
                <input 
                    type="text" 
                    id="patternId" 
                    name="patternId" 
                    className='border border-emerald-900 focus:border-emerald-700 focus:outline-emerald-700 rounded-md p-2 m-2'
                />
                <button 
                    type="submit"
                    className=' text-white rounded-md px-4 py-2 bg-emerald-900 hover:bg-emerald-800 active:bg-emerald-700'
                >
                    Get pattern
                </button>
            </form>
        </div>
    )
}