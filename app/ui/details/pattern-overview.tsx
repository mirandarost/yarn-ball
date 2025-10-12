import { Pattern } from "@/app/lib/data-types";
import { domine } from "@/app/ui/fonts";
import { LinkButton } from "@/app/ui/buttons";
import TextBox from "@/app/ui/details/text-box";

interface PatternOverviewProps {
    pattern: Pattern;
}

export default function PatternOverview({pattern}: PatternOverviewProps) {
    return(
        <div className="pl-10 w-xl">
            {/* Title */}
            <div>
                <h1>{pattern.name}</h1>
                <h3 className="pl-8">{`by ${pattern.author}`}</h3>
            </div>

            {/* Community */}
            <div className="flex mt-2">
                <div className="mr-10">
                    {`${pattern.projects} projects`}
                </div>
                <div className="mr-10">
                    {pattern.rating ? `★ ${pattern.rating}/5` : 'No ratings'}
                </div>
                <div className="">
                    {pattern.difficulty ? `Difficulty: ${pattern.difficulty}` :''}
                </div>
            </div>

            {/* Yarn & Needles */}
            <div className="flex mt-10">
                <TextBox icon='/yarn-icon.png' title='Yarn'>
                    <div>{pattern.yarn}</div>
                    <div>Type: {pattern.yarnWeight}</div>
                </TextBox> 
                <TextBox icon='/needles-icon.png' title='Needles'>
                    {pattern.needles}
                </TextBox> 
                    
                
            </div>

            {/* Price & download */}
            <div className="flex border-emerald-900 border-b border-t p-2 mt-10">
                <div className="w-sm">
                    <div className='font-bold'>
                        {pattern.free ? 'Free' : `${pattern.price} ${pattern.currency}`}
                    </div>
                    <div>
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
    )
}