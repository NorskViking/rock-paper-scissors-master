import { useState } from "react";

export const GameMode = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleGameModeChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <label className='themeSwitcherTwo absolute inline-flex cursor-pointer select-none items-center left-4 bottom-10 sm:left-[32%]'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleGameModeChange}
                    className='sr-only'
                />
                <span className='label flex items-center text-sm font-medium text-white text-2xl'>
                    RPS
                </span>
                <span
                    className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                        }`}
                >
                    <span
                        className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                            }`}
                    ></span>
                </span>
                <span className='label flex items-center text-sm font-medium text-white text-xl'>
                    RPSSL
                </span>
            </label>
        </>
    )

}

export default GameMode;