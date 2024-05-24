import rps_logo from '../assets/logo.svg';
import rpssl_logo from '../assets/logo-bonus.svg'

interface Props {
    score: number;
}

export default function ScoreBoard({ score }: Props) {
    return (
        <>
            <div className='flex fixed inset-0 z-50 items-center justify-between mx-auto mt-[2rem] w-[95vw] h-[20vh] border border-4 border-headerOutline rounded-2xl 
                            sm:w-[40vw] sm:h-[18vh]'>
                <img className='px-[0.5rem] py-[0.5rem]' src={rps_logo} alt="the game logo of Rock, Paper, Scissor."/>
                <div className='bg-white rounded-2xl text-center w-[8rem] h-[8rem] mr-[1rem] py-[1rem]'>
                    <h2 className='text-2xl text-scoreText'>SCORE</h2>
                    <div className='text-6xl text-darkText'>{score}</div>
                </div>
            </div>
        </>
    )
}