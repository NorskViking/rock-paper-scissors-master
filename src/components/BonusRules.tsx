import bonusRules from '../assets/image-rules-bonus.svg';

export const BonusRules = () => (
    <div className='bg-white w-screen h-screen grid grid-rows-3 gap-2 place-items-center sm:max-h-96 sm:max-w-96 sm:relative sm:rounded-xl'>
        <div className='text-4xl text-[#606e85] text-center sm:place-self-start sm:p-4'>
            <h1>RULES</h1>
        </div>
        <div className='sm:absolute sm:bottom-0 sm:p-4'>
        <img src={bonusRules} alt="Rule set for Rock, Paper, Scissor, Lizard, Spock. Rock beats scissor and lizard. Lizard beats spock and paper. Spock beats scissor and rock. Scissor beats paper and lizard. Paper beats rock and spock." />
        </div>
        <div className='text-center text-2xl hover:text-3xl sm:absolute sm:top-0 sm: right-0 sm:p-4'>
            <button>X</button>
        </div>
    </div>
);