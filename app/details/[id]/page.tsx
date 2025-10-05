
import Header from "@/app/ui/header";
import { notFound } from "next/navigation";

import '@/app/details/[id]/description.css';

import { getPattern } from "@/app/lib/data";
import Carousel from "@/app/ui/details/carousel";
import PatternOverview from "@/app/ui/details/patternOverview";

export default async function Page(props: {params: Promise<{ id: string }>}) {

    const params = await props.params;
    const id = params.id;

    const pattern = await getPattern(id);

    if (!pattern) {
        notFound()
    }

    return(
        <div>
            <Header />
            <div className='flex'>
                <div className='ml-5 mr-5'>
                    <Carousel imageList={pattern.images} />
                </div>
                <PatternOverview pattern={pattern} />

            </div>
            <div className='flex mt-8 justify-center'>
                <div className='description w-4xl text-sm border-emerald-900 border-t p-5' dangerouslySetInnerHTML={
                    {__html: pattern.description}
                    }>

                </div>
            </div>
        </div>
    );
};