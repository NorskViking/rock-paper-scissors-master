import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorIcon from '../assets/icon-scissors.svg';
import spockIcon from '../assets/icon-spock.svg';
import lizardICon from '../assets/icon-lizard.svg';

export const RPSLS = [
    { name: 'ROCK', color: "border-[#DE3353]", img: rockIcon },
    { name: 'PAPER', color: 'border-[#4B67F8]', img: paperIcon },
    { name: 'SCISSOR', color: 'border-[#EDA012]', img: scissorIcon },
    { name: 'SPOCK', color: 'border-[#40B9CE]', img: spockIcon },
    { name: 'LIZARD', color: 'border-[#834FE3]', img: lizardICon },
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

export const RPSLS_CHOICES: string[] = ['ROCK', 'PAPER', 'SCISSOR', 'LIZARD', 'SPOCK'];