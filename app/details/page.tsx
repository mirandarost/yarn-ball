import { getPattern } from "@/app/mock-api/pattern";
import Image from "next/image";
import DetailList from "@/app/ui/details/detail-list";
import { domine } from "@/app/ui/fonts";
import { Button } from "@/app/ui/buttons";

export default function Page() {

    const pattern = getPattern();

    const patternDetails = [
        { title: 'Yarn', value: pattern.yarn},
        { title: 'Yarn weight', value: pattern.yarnWeight},
        { title: 'Needles', value: '3.25 mm, 3.5 mm'}
    ];

    return(
        <div className=' ml-auto, mr-auto mt-20'>
            <div className='flex align-middle justify-center'>
                <Image
                className="w-xl rounded-3xl h-auto"
                src={pattern.imageUrl}
                alt='Image of pattern'
                width='1067'
                height='1600'
                priority={true}
                />
                <div className="pl-10 w-xl">
                    {/* Title */}
                    <div className={`${domine.className} text-emerald-900`}>
                        <h1 className={`text-5xl`}>{pattern.name}</h1>
                        <div className="text-xl pl-8">{`by ${pattern.author}`}</div>
                    </div>

                    {/* Community */}
                    <div className="flex mt-2">
                        <div className="mr-10">
                            {`${pattern.projects} projects`}
                        </div>
                        <div className="mr-10">
                            {`★ ${pattern.rating}/5`}
                        </div>
                        <div className="">
                            {`Difficulty: ${pattern.difficulty}`}
                        </div>
                    </div>

                    {/* Yarn & Needles */}
                    <div className="flex mt-10">
                        <div className="border-emerald-900 border-1 rounded-lg p-2 w-1/2 mr-2">
                            <div className="flex">
                                <Image 
                                    src='/yarn-icon.png'
                                    alt='Yarn icon'
                                    width='512'
                                    height='512'
                                    className="w-5 mr-1"
                                />
                                <div className="underline">Yarn</div>
                            </div>
                            
                            <div className="text-sm">
                                <div>{pattern.yarn}</div>
                                <div>Type: {pattern.yarnWeight}</div>

                            </div>
                        </div>
                        <div className="border-emerald-900 border-1 rounded-lg p-2 w-1/2 ml-2">

                            <div className="flex">
                                <Image 
                                    src='/needles-icon.png'
                                    alt='Needle icon'
                                    width='200'
                                    height='200'
                                    className="w-4 mr-1"
                                />
                                <div className="underline">Needles</div>
                            </div>
                            <div className="text-sm">
                                <div>{pattern.needleSize.map((needle, index) => index != pattern.needleSize.length -1 ? `${needle}, ` : needle) }</div>
                            </div>
                        </div>
                    </div>

                    {/* Price & download */}
                    <div className="flex border-emerald-900 border-b border-t p-2 mt-10">
                        <div className="w-sm">
                            <div className='font-bold'>
                                {`${pattern.price} ${pattern.currency}`}
                            </div>
                            <div className="text-sm">
                                <div className="flex ">
                                    <div className="mr-2">Ravelry Download </div>
                                    <div>
                                        {pattern.ravelryDownload ? <span className="text-green-600">✔</span> : <span className='text-red-600'>✘</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex w-full justify-end align-middle mt-0.5">
                            <Button>Get the pattern</Button>

                        </div>
                    </div>
                    

                    {/* <div className='mt-10 text-sm'>
                        <DetailList listItems={patternDetails}/>
                    </div> */}
                </div>
            </div>
            <div className='flex align-middle justify-center mt-8'>
                <div className='w-6xl'>
                    {pattern.description}

                </div>
            </div>
        </div>
    );
};