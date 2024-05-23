import SelectButton from "../components/SelectButton";
import { RPS } from './rps_data';

interface Props {
    handleClick: (arg1: any) => void;
}

const GameBoard = ( { handleClick }: Props ) => {
    return (
        <>
            <div className="flex items-center justify-center mt-[60px] sm:scale-75">
                <div className="relative w-[500px] h-[450px] bg-no-repeat bg-center bg-triangle">
                    {/*Rock button*/}
                    <div>
                        <SelectButton choice={RPS[0]} onClick={() => handleClick(RPS[0])} />
                    </div>
                    {/*Paper button*/}
                    <div>
                        <SelectButton choice={RPS[1]} onClick={() => handleClick(RPS[1])} />
                    </div>
                    {/*Scissor button*/}
                    <div>
                        <SelectButton choice={RPS[2]} onClick={() => handleClick(RPS[2])} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameBoard;
