import { ReactNode } from 'react';
import rules from '../assets/image-rules.svg';
import close from '../assets/icon-close.svg';

interface Props {
    children: ReactNode;
    onClose: () => void;
}
const Rules = ({ children, onClose}: Props) => (
    <div className='bg-white w-screen h-screen grid grid-rows-3 gap-2 place-items-center sm:max-h-96 sm:max-w-96 sm:relative sm:rounded-xl'>
        <div className='text-5xl text-[#606e85] text-center sm:place-self-start sm:p-4'>
            {children}
            <h1>RULES</h1>
        </div>
        <div className='p-8 sm:absolute sm:bottom-4 sm:max-w-80 sm:max-h-80'>
            <img src={rules} alt="Rule set for Rock, paper, scissor. Rock beats scissor. Paper beats rock. Scissor beats paper."/>
        </div>
        <div className='sm:absolute sm:top-4 sm: right-4'>
            <button onClick={onClose}>
                <img src={close} alt='close button' />
            </button>
        </div>
    </div>
);

export default Rules;
