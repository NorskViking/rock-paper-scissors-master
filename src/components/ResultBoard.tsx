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
        <div className="flex fixed top-[25%] items-center justify-center h-full sm:top-[35%]">
            <div className="w-full h-full">
                {/* Player pick*/}
                <div className="fixed left-0  items-center justify-center scale-75 sm:scale-[150%] sm:left-[30%]">
                    <div className="relative z-[30] mb-4 text-2xl text-white text-center">YOU PICKED</div>
                    <div className="pointer-event-none">
                        {result === "YOU WIN!" && renderComponent ? (
                            <div className="relative z-0 rounded-full shadow-rings">
                                <SelectButton choice={player} />
                            </div>
                        ) : (
                            <div className="relative z-[70]">
                                <SelectButton choice={player} />
                            </div>
                        )}
                    </div>
                </div>
                {/* Computer pick */}
                <div className="fixed right-0  items-center justify-center scale-75 sm:scale-[150%] sm:right-[30%]">
                    <div className="relative z-[20] mb-4 text-2xl text-white text-center">COMPUTER PICKED</div>
                    <div className="pointer-event-none">
                        {result === "YOU LOOSE" && renderComponent ? (
                            <div className="relative z-0 rounded-full shadow-rings">
                                <SelectButton choice={computer} />
                            </div>
                        ) : (
                            <div className="relative z-40">
                                <SelectButton choice={computer} />
                            </div>
                        )}
                    </div>
                </div>
                {/* Result text and start new game button. */}
                {renderComponent && (
                    <div className="relative z-[100] mx-auto my-auto h-full top-[35%] items-center justify-center sm:top-20">
                        <div className="text-4xl font-bold text-white text-center">{result}</div>
                        <Button
                            onClose={() => restart(false)}
                            styles="border-headerOutline border-2 rounded-lg px-8 py-2 bg-white text-xl text-black mt-3 items-center justify-center"
                        >
                            <div className="text-darkText hover:text-red-500">PLAY AGAIN</div>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResultBoard;