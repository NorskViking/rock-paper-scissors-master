//import '../.css' file
import { useState } from "react";
import Button from "../components/Button";
import ScoreBoard from "../components/Score";
import Rules from "./rps_rules";
import GameBoard from "./GameBoard";
import { RPS, COMPUTER_CHOICE, PLAYER_CHOICE, COMPUTER_CHOICES } from './rps_data'


export default function RPS_GAME() {
    const [rulesVisible, setRulesVisibility] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [score, setScore] = useState(0);
    const [winner, setWinner] = useState('');

    const getComputerChoice = () => {
        const computerChoice = Math.floor(Math.random() * COMPUTER_CHOICES.length);
        return RPS[computerChoice];
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
            (playerChoice === 'ROCK' && computerChoice === 'SCISSOR') ||
            (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
            (playerChoice === 'SCISSOR' && computerChoice === 'PAPER')
        ) {
            setScore(score + 1);
            return 'YOU WIN!';
        } else {
            if (score > 0) {
                setScore(score -1)
            }
            return 'YOU LOOSE..';
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
        <div>
            <div className="flex justify-center">
                {rulesVisible && (
                    <Rules onClose={() => setRulesVisibility(false)}>Rules</Rules>
                )}
                <ScoreBoard score={score} />
                <Button styles="absolute bottom-20" onClose={() => setRulesVisibility(true)}>RULES</Button>
                <GameBoard handleClick={handleClick} />
            </div>

        </div>
    )
} 

