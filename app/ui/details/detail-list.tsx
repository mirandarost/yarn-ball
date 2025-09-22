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

interface DetailListPair {
    title: string,
    value: string,
}
interface DetailListProps {
    listItems: DetailListPair[]
}

export default function DetailList({listItems}: DetailListProps) {
    const rows = listItems.map(item => <ListRow leftText={item.title} rightText={item.value} key={item.title}/>);
    return(
        <div>
            {rows}
        </div>
    );
}; 