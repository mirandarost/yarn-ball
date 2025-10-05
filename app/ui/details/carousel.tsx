'use client';

import Image from "next/image";
import { ImageInfo } from "@/app/lib/data-types";
import { useState } from "react";
import '@/app/ui/details/carousel.css';


interface CarouselProps {
    imageList: ImageInfo[];
}

export default function Carousel({imageList}: CarouselProps) {

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    return (
        <div className='flex'>

            <div className="h-130 w-25 overflow-y-scroll justify-center border-emerald-900 border-1 p-2 rounded-lg">
                {
                    imageList.map( (image: ImageInfo) => (
                        <div key={image.sortOrder} className={`mb-5 flex justify-center `}>
                            <Image 
                                src={image.thumbnailUrl}
                                alt={`Image ${image.sortOrder}`}
                                height= '75'
                                width= '75'
                                priority={true}
                                onClick={() => setActiveImageIndex(image.sortOrder)}
                                className={`rounded-lg ${activeImageIndex === image.sortOrder ? 'active' : ''}`}
                            />
                        </div>
                    ))
                }
            </div>
            <div className='w-xl h-130 relative align-top ml-5'>
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