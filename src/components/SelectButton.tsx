interface Props {
    choice: any;
    onClick?: () => void;
}

const SelectButton = ({ onClick, choice }: Props) => {
    return (
        <>
            <div
                className={`sm:scale-[85%] cursor-pointer w-[200px] h-[200px] bg-white drop-shadow-2xl rounded-full border-[24px] ${choice.color}`}
                onClick={onClick}>
                <div className='flex h-[150px] items-center justify-center'>
                    <img src={choice.img} alt={`${choice.name} button.`}/>
                </div>
            </div>
        </>
    )
}

export default SelectButton;
