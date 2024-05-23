import rps_logo from '../assets/logo.svg';
import rpssl_logo from '../assets/logo-bonus.svg';

interface Props {
    score: number;
}

export default function ScoreBoard({ score }: Props) {
    return (
        <>
            <div className='flex items-center justify-between mt-[4rem] border border-4 border-headerOutline rounded-2xl sm:scale-[80%] w-[45rem] h-[10rem]'>
                <img className='px[2rem] py-[1.5rem]' src={rps_logo} />
                <div className='bg-white rounded-2xl text-center w-[10rem] h-[8rem] mr-[1.5rem] py-[1rem]'>
                    <h2 className='text-2xl text-scoreText'>Score</h2>
                    <div className='text-6xl text-darkText'>{score}</div>
                </div>
            </div>
        </>
    )
}