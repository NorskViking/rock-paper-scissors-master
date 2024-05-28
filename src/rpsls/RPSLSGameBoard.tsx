import SelectButton from "../components/SelectButton";
import { RPSLS } from './rpsls_data';

interface Props {
    handleClick: (arg1: any) => void;
}

const RPSLSGameBoard = ( { handleClick }: Props ) => {
    return (
        <>
            <div className="flex fixed items-center justify-center scale-75 w-[90vw] h-[40vh] top-[35%] sm:scale-100">
                <div className="relative w-[500px] h-[450px] bg-no-repeat bg-center bg-pentagon">
                    {/*Rock button*/}
                    <div className="absolute bottom-[-8%] right-[-10%] scale-[70%] sm:scale-[85%] sm:bottom-[-8%] sm:right-12">
                        <SelectButton choice={RPSLS[0]} onClick={() => handleClick(RPSLS[0])} />
                    </div>
                    {/*Paper button*/}
                    <div className="absolute bottom-0 top-14 right-[-25%] scale-[70%] sm:scale-[85%] sm:bottom-[-8%] sm:right-[-5%]">
                        <SelectButton choice={RPSLS[1]} onClick={() => handleClick(RPSLS[1])} />
                    </div>
                    {/*Scissor button*/}
                    <div className="absolute top-[-8%] right-1/2 left-[25%] scale-[70%] sm:scale-[85%] sm:top-[-10%] sm:-left-[-31%]">
                        <SelectButton choice={RPSLS[2]} onClick={() => handleClick(RPSLS[2])} />
                    </div>
                    {/*Spock button*/}
                    <div className="absolute bottom-0 top-14 left-[-25%] scale-[70%] sm:scale-[85%] sm:bottom-[-8%] sm:left-[-5%]">
                        <SelectButton choice={RPSLS[3]} onClick={() => handleClick(RPSLS[3])} />
                    </div>
                    {/*Lizard button*/}
                    <div className="absolute bottom-[-8%] right-[95%] left-1 scale-[70%] sm:scale-[85%] sm:bottom-[-8%] sm:left-12">
                        <SelectButton choice={RPSLS[4]} onClick={() => handleClick(RPSLS[4])} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RPSLSGameBoard;
