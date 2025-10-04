import Image from "next/image";

interface TextBoxProp {
    icon: string,
    title: string,
    children?: React.ReactNode
}

export default function TextBox({icon, title, children}: TextBoxProp) {
    return(
    <div className="border-emerald-900 border-1 rounded-lg p-2 w-1/2 ml-2">

            <div className="flex">
                <Image 
                    src={icon}
                    alt='Icon'
                    width='200'
                    height='200'
                    className="w-4 mr-1"
                />
                <div className="underline">{title}</div>
            </div>
            <div className="text-sm">
                <div>{children}</div>
            </div>
        </div>
    )
}