import rock from '../assets/icon-rock.svg';

export const Rock = () => (
    <button className="p-4 bg-white border-[1rem] border-[#dc2e4e] hover:border-[#dd405d] rounded-full w-[8rem] h-[8rem] flex center-items justify-center">
        <img src={rock} alt="rock button" />
    </button>
);