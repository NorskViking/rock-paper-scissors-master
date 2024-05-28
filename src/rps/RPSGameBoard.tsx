import SelectButton from "../components/SelectButton";
import { RPS } from './rps_data';

interface Props {
    handleClick: (arg1: any) => void;
}

const RPSGameBoard = ( { handleClick }: Props ) => {
    return (
        <>
            <div className="flex fixed items-center justify-center w-[90vw] h-[40vh] top-[35%]">
                <div className="relative w-[500px] h-[450px] bg-no-repeat bg-center bg-triangle">
                    {/*Rock button*/}
                    <div className="absolute left-[-10%] top-0 scale-75 sm:scale-100 sm:left-0">
                        <SelectButton choice={RPS[0]} onClick={() => handleClick(RPS[0])} />
                    </div>
                    {/*Paper button*/}
                    <div className="absolute right-[-10%] top-0 scale-75 sm:scale-100 sm:right-0">
                        <SelectButton choice={RPS[1]} onClick={() => handleClick(RPS[1])} />
                    </div>
                    {/*Scissor button*/}
                    <div className="absolute bottom-10 right-1/2 left-[25%] scale-75 sm:scale-100 sm:bottom-5 sm:-left-[-29.5%]">
                        <SelectButton choice={RPS[2]} onClick={() => handleClick(RPS[2])} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RPSGameBoard;
