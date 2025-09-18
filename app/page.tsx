import Image from "next/image";
import { pacifico } from "./layout";

export default function Home() {
  return (
    <main>
      <div className='flex'>
        <Image
          className="m-4"
          src='/yarn-ball.png'
          alt='Yarnball logo'
          width={100}
          height={100}
          priority={true}
        />
        <h1 className={`${pacifico.className} mt-7 text-6xl`}>Yarnball</h1>
      </div>
      <div>
        <button className="flex h-10 items-center rounded-lg px-4 m-4 bg-white text-emerald-950 font-medium">
          Click me!
        </button>
      </div>
      
    </main>
  );
}
