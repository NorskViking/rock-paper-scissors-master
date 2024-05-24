import SelectButton from "./SelectButton";
import Button from "./Button";
import { useState, useEffect } from "react";

interface Props {
    player: any;
    computer: any;
    restart: any;
    result: string;
}

const ResultBoard = ({ player, computer, restart, result }: Props) => {
    const [renderComponent, setRenderComponent] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderComponent(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex fixed z-0 inset-0 top-[35%] items-center justify-center w-[95vw] h-[45vh]">
            <div>
                {/* Player pick*/}
                <div className="m-5 fixed inset-0 z-[-1] top-40 items-center justify-center scale-75">
                    <div className="mb-4 text-2xl text-white">YOU PICKED</div>
                    <div className="pointer-event-none">
                        {result === "YOU WIN!" && renderComponent ? (
                            <div className="z-0 rounded-full shadow-rings">
                                <SelectButton choice={player} />
                            </div>
                        ) : (
                            <SelectButton choice={player} />
                        )}
                    </div>
                </div>

                {renderComponent && (
                    <div className="fixed z-40 bottom-[15%] items-center justify-center">
                        <div className="text-4xl font-bold text-white">{result}</div>
                        <Button
                            onClose={() => restart(false)}
                            styles="border-headerOutline border-2 rounded-lg px-8 py-1 bg-white text-black mt-3"
                        >
                            <div className="text-darkText hover:text-red-500">PLAY AGAIN</div>
                        </Button>
                    </div>
                )}

                {/* Computer pick */}
                <div className="m-5 fixed inset-0 bottom-40 z-[-1] items-center justify-center scale-75">
                    <div className="mb-4 text-2xl text-white">COMPUTER PICKED</div>
                    <div className="pointer-event-none">
                        {result === "YOU LOOSE.." && renderComponent ? (
                            <div className="z-0 rounded-full shadow-rings">
                                <SelectButton choice={computer} />
                            </div>
                        ) : (
                            <SelectButton choice={computer} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultBoard;