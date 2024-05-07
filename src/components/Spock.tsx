import spock from '../assets/icon-spock.svg';

export const Spock = () => (
    <button className="p-4 bg-white border-[1rem] border-[#40b9ce] hover:border-[#52bed1] rounded-full w-[8rem] h-[8rem] flex center-items justify-center">
        <img src={spock} alt="spock button" />
    </button>
);