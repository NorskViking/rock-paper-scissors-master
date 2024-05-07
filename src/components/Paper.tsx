import paper from '../assets/icon-paper.svg';

export const Paper = () => (
    <button className="p-4 bg-white border-[1rem] border-[#4865f4] hover:border-[#5671f5] rounded-full w-[8rem] h-[8rem] flex center-items justify-center">
        <img src={paper} alt="Paper button" />
    </button>
);