import rules from '../assets/image-rules.svg';

export const Rules = () => (
    <div className='bg-white w-screen h-screen '>
        <div className='text-4xl gap-2 text-[#606e85] p-4'>
            <h1>RULES</h1>
        </div>
        <div className='gap-2 p-8'>
            <img src={rules} alt="Rule set for Rock, paper, scissor. Rock beats scissor. Paper beats rock. Scissor beats paper." />
        </div>
        <div className='text-2xl hover:text-3xl gap-2 p-12'>
            <button>X</button>
        </div>
    </div>
);