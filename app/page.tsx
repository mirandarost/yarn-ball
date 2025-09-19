import Image from "next/image";
import { pacifico } from "./ui/fonts";
import { RoutingButton } from "./ui/buttons";

export default function Home() {
  return (
    <main>
      <div className='flex'>
        <Image
          className="m-4 w-25"
          src='/yarn-ball.png'
          alt='Yarnball logo'
          width={512}
          height={512}
          priority={true}
        />
        <h1 className={`${pacifico.className} mt-7 text-6xl`}>Yarnball</h1>
      </div>
      <div>
        <RoutingButton route='/details'>Get details</RoutingButton>
      </div>
    </main>
  );
}
