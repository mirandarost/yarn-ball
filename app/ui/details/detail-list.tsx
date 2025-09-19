
interface ListRowProps {
    leftText: string,
    rightText: string
};

function ListRow({leftText, rightText}: ListRowProps) {
    return(
        <div className='flex border-b m-2'>
            <div className='w-50'>{leftText}</div>
            <div className="w-75">{rightText}</div>
        </div>
    );
};

export default function DetailList() {
    return(
        <div className='ml-10'>
            <ListRow leftText='Namn1' rightText='text1'/>
            <ListRow leftText='Namn2' rightText='text2'/>
            <ListRow leftText='Namn3' rightText='text3'/>
        </div>
        
        
    );
};