import { getMockPattern } from "@/app/mock-api/pattern";
import Image from "next/image";
import DetailList from "@/app/ui/details/detail-list";
import { domine } from "@/app/ui/fonts";
import { Button, LinkButton } from "@/app/ui/buttons";
import { getPattern } from "@/app/lib/data";
import Header from "@/app/ui/header";
import { notFound } from "next/navigation";

export default async function Page(props: {params: Promise<{ id: string }>}) {

    const params = await props.params;
    const id = params.id;

    // const mockPattern = getMockPattern();

    // const pattern = await getPattern('wool--honey');
    // const pattern = await getPattern('cottage-4');
    // const pattern = await getPattern('montmartre-jumper');
    const pattern = await getPattern(id);

    if (!pattern) {
        notFound()
    }

    return(
        <div>
            <Header />
            <div className=' ml-auto, mr-auto mt-5'>
                <div className='flex align-middle justify-center'>
                    <Image
                    className="w-xl rounded-3xl h-auto"
                    src={pattern.image}
                    alt='Image of pattern'
                    width='1000'
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
                                    <div>{pattern.needles}</div>
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
                                            {pattern.ravelryDownload ? <span className="text-emerald-600">✔</span> : <span className='text-red-600'>✘</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex w-full justify-end align-middle mt-0.5">
                                <LinkButton link={pattern.link}>Get the pattern</LinkButton>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex align-middle justify-center mt-8'>
                    <div className='w-4xl text-sm' dangerouslySetInnerHTML={
                        {__html: pattern.description}
                    }>

                    </div>
                </div>
            </div>
        </div>
    );
};