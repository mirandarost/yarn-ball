import Image from "next/image";

import { PartialPattern } from "@/app/lib/data-types";
import Link from "next/link";

interface SearchItemProps {
    pattern: PartialPattern
}

export default function SearchItem({pattern}: SearchItemProps) {
    return(
        <div className=''>
                <Link href={`/details/${pattern.link}`}>

            <div className="w-60 h-60 relative">
                <Image 
                    src={pattern.image}
                    alt={`Image for ${pattern.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    className='object-cover rounded-xl'
                />
                
                
            </div>
                </Link>

            <p className="overflow-hidden text-ellipsis w-60 h-5 whitespace-nowrap">
            {pattern.name}
            </p>
            <p className="overflow-hidden text-ellipsis w-60 h-5 whitespace-nowrap">
            {`by ${pattern.author}`}
            </p>
            

        </div>
    )
}