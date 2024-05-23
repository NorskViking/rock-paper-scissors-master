interface Props {
    choice: any;
    onClick?: () => void;
}

const SelectButton = ({ onClick, choice }: Props) => {
    return (
        <>
            <div onClick={onClick}>
                <div className='flex h-[150px] items-center justify-center'>
                    <img src={choice.img} />
                </div>
            </div>
        </>
    )
}

export default SelectButton;
