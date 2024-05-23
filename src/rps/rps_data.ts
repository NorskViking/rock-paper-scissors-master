import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorIcon from '../assets/icon-scissors.svg';

export const RPS = [
    { name: 'ROCK', color: 'border-[#DE3353]', img: rockIcon },
    { name: 'PAPER', color: 'border-[#4B67F8]', img: paperIcon },
    { name: 'SCISSOR', color: 'border-[#EDA012]', img: scissorIcon },
];

export const PLAYER_CHOICE = {
    name: "",
    color: "",
    img: "",
}

export const COMPUTER_CHOICE = {
    name: "",
    color: "",
    img: "",
}

export const COMPUTER_CHOICES: string[] = ['ROCK', 'PAPER', 'SCISSOR'];