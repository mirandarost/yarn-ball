import Image from "next/image";
import { pacifico } from "./fonts";

export default function Header() {
    return (
        <div className='flex'>
            <Image
                className="m-4 w-20"
                src='/yarn-ball.png'
                alt='Yarnball logo'
                width={512}
                height={512}
                priority={true}
            />
            <h1 className={`${pacifico.className} mt-7 text-5xl`}>Yarnball</h1>
        </div>
    )
}