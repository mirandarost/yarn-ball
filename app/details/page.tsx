import { getPattern } from "@/app/mock-api/pattern";
import Image from "next/image";
import DetailList from "@/app/ui/details/detail-list";

export default function Page() {
    const pattern = getPattern();
    return(
        <div>
            <div className='flex align-middle justify-center'>
                <h1 className='text-5xl m-4'>{pattern.name}</h1>
                <div className="mt-9">{`by ${pattern.author}`}</div>
            </div>
            <div className='flex'>
                <Image
                className="w-2xl rounded-3xl ml-10"
                src={pattern.imageUrl}
                alt='Image of pattern'
                width='1067'
                height='1600'
                priority={true}
                />
                <div>
                    <DetailList/>
                </div>
            </div>
            
        </div>
    )
}