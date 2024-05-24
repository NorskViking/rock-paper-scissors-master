import { ReactNode } from 'react';
import rules from '../assets/image-rules.svg';
import close from '../assets/icon-close.svg';

interface Props {
    children: ReactNode;
    onClose: () => void;
}
const Rules = ({ children, onClose}: Props) => (
    <div className='z-[10] flex fixed w-screen h-screen bg-black bg-opacity-[40%] items-center'>
        <div className='z-[150] fixed flex left-[40%] bg-white w-96 h-96 grid grid-rows-3 gap-2 object-center place-items-center sm:max-h-96 sm:max-w-96 sm:relative sm:rounded-xl'>
            <div className='text-5xl text-[#606e85] text-center sm:place-self-start sm:p-4'>
                {children}
            </div>
            <div className='p-8 sm:absolute sm:bottom-4 sm:max-w-80 sm:max-h-80'>
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
