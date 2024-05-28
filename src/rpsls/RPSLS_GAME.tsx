//import '../.css' file
import { useState } from "react";
import Button from "../components/Button";
import ScoreBoard from "./Score";
import BonusRules from "./rpsls_rules";
import RPSLSGameBoard from "./RPSLSGameBoard";
import ResultBoard from "../components/ResultBoard";
import { RPSLS, COMPUTER_CHOICE, PLAYER_CHOICE, RPSLS_CHOICES } from './rpsls_data'


function RPSLS_GAME() {
    const [rulesVisible, setRulesVisibility] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [score, setScore] = useState(0);
    const [winner, setWinner] = useState('');

    const getComputerChoice = () => {
        const computerChoice = Math.floor(Math.random() * RPSLS_CHOICES.length);
        return RPSLS[computerChoice];
    };

    const updateChoice = (choice: any, newChoice: {name: any, color: any, img: any} ) => {
        newChoice.name = choice.name;
        newChoice.color = choice.color;
        newChoice.img = choice.img;
        return newChoice;
    }

    const getWinner = (computerChoice: string, playerChoice: string) => {
        if (computerChoice === playerChoice) {
            return 'TIE';
        } else if (
            (playerChoice === 'ROCK' && computerChoice === ('SCISSOR' || 'LIZARD')) ||
            (playerChoice === 'PAPER' && computerChoice === ('ROCK' || 'SPOCK')) ||
            (playerChoice === 'SCISSOR' && computerChoice === ('PAPER' || 'LIZARD')) ||
            (playerChoice === 'SPOCK' && computerChoice === ('SCISSOR' || 'ROCK')) ||
            (playerChoice === 'LIZARD' && computerChoice === ('SPOCK' || 'PAPER'))
        ) {
            setScore(score + 1);
            return 'YOU WIN!';
        } else {
            if (score > 0) {
                setScore(score -1)
            }
            return 'YOU LOOSE';
        }
    }

    const handleClick = (pick: any) => {
        setIsClicked(true);

        const computerPick = updateChoice(getComputerChoice(), COMPUTER_CHOICE);
        
        const playerPick = updateChoice(pick, PLAYER_CHOICE);

        const winner = getWinner(computerPick.name, playerPick.name);
        setWinner(winner);
    };

    return (
        <div className="flex justify-center h-screen w-screen place-content-center">
            <div className="">
                {rulesVisible && (
                    <BonusRules onClose={() => setRulesVisibility(false)}>RULES</BonusRules>
                )}
                <ScoreBoard score={score} />
                <Button styles="absolute z-50 bottom-10 right-[5%] text-white border-2 rounded w-[5rem] h-[2.5rem] text-2xl sm:right-[35%]" onClose={() => setRulesVisibility(true)}>RULES</Button>
            </div>
            {isClicked === false ? (
                <RPSLSGameBoard handleClick={handleClick} />
            ) : (
                <ResultBoard
                    result={winner}
                    restart={setIsClicked}
                    player={PLAYER_CHOICE}
                    computer={COMPUTER_CHOICE} 
                />
            )}    
        </div>
    )
} 

export default RPSLS_GAME;