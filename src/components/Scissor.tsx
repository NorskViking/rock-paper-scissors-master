import scissor from '../assets/icon-scissors.svg';

export const Scissor = () => (
    <button className="p-4 bg-white border-[1rem] border-[#ec9e0e] hover:border-[#eca922] rounded-full w-[8rem] h-[8rem] flex center-items justify-center">
        <img src={scissor} alt="scissor button" />
    </button>
);