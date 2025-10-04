'use client';

import Image from "next/image";
import { ImageInfo } from "@/app/lib/data-types";
import { useState } from "react";


interface CarouselProps {
    imageList: ImageInfo[];
}

export default function Carousel({imageList}: CarouselProps) {

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    return (
        <div className='flex'>

            <div className="h-120 w-50 overflow-y-scroll border-emerald-900 border-1 p-2 rounded-lg">
                {
                    imageList.map( (image: ImageInfo) => (
                        <div key={image.sortOrder} className="h-30 relative mb-5">
                            <Image 
                                src={image.thumbnailUrl}
                                alt={`Image ${image.sortOrder}`}
                                className="object-contain"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={true}
                                onClick={() => setActiveImageIndex(image.sortOrder)}
                            />
                        </div>
                    ))
                }
            </div>
            <div className='w-xl h-120 relative align-top ml-5'>
                <Image
                    className="align-top object-contain"
                    src={imageList[activeImageIndex].url}
                    alt='Image of pattern'
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    />
            </div>

        </div>

    );

}