import lizard from '../assets/icon-lizard.svg';

export const Lizard = () => (
    <button className="p-4 bg-white border-[1rem] border-[#834fe3] hover:border-[#8c5de5] rounded-full w-[8rem] h-[8rem] flex center-items justify-center">
        <img src={lizard} alt="lizard button" />
    </button>
);