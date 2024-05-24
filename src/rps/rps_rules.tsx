import { ReactNode } from 'react';
import rules from '../assets/image-rules.svg';
import close from '../assets/icon-close.svg';

interface Props {
    children: ReactNode;
    onClose: () => void;
}
const Rules = ({ children, onClose}: Props) => (
    <div className='z-[100] flex sticky w-screen h-screen bg-black bg-opacity-[40%] items-center justify-center'>
        <div className='z-[150] fixed flex w-screen h-screen bg-white grid grid-rows-3 gap-2 place-items-center sm:h-96 sm:w-96 sm: sm:rounded-xl'>
            <div className='text-5xl text-[#606e85] text-center sm:place-self-start sm:p-4'>
                {children}
            </div>
            <div className='p-8 sm:absolute sm:bottom-2 sm:w-80 sm:h-80'>
                <img src={rules} alt="Rule set for Rock, paper, scissor. Rock beats scissor. Paper beats rock. Scissor beats paper."/>
            </div>
            <div className='sm:absolute sm:top-5 sm: right-5'>
                <button onClick={onClose}>
                    <img src={close} alt='close button' />
                </button>
            </div>
        </div>
    </div>
);

export default Rules;
