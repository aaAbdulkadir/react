import React, { useState } from 'react';
import './styled.css';

export default function UserInput() {
  const choices = {'rock': '👊', 'paper': '✋', 'scissors': '✌'};
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handleClick(choice) {
    const computer = Math.floor(Math.random() * 3);
    const computerChoice = choices[Object.keys(choices)[computer]];
    const playerChoice = choices[choice];
    setSelectedChoice(playerChoice);
    setComputerChoice(computerChoice);
    setResult(handleWinner(playerChoice, computerChoice));
  }
  
  function handleWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        console.log(`player: ${playerChoice} computer: ${computerChoice}`);
        return "Tie!";
      } else if (
        (playerChoice === choices.rock && computerChoice === choices.scissors) ||
        (playerChoice === choices.paper && computerChoice === choices.rock) ||
        (playerChoice === choices.scissors && computerChoice === choices.paper)
      ) {
        console.log(`player: ${playerChoice} computer: ${computerChoice}`);
        return "You win!";
      } else {
        console.log(`player: ${playerChoice} computer: ${computerChoice}`);
        return "You lose!";
      }
    }
   
  
  return (
    <div>
      <div className='selection-title'><h2>Select your pick</h2></div>
      <div className='emojis'>
        {Object.keys(choices).map(choice => (
          <h1 className='emoji' onClick={() => handleClick(choice)}>
            {choices[choice]}
          </h1>
        ))}
      </div>
      <div className='selected-choice'>
        {selectedChoice && <div><h3>You selected</h3><h1 className='selected-output'>{selectedChoice}</h1></div>}
        {computerChoice && <div><h3>Computer selected</h3><h1 className='computer-output'>{computerChoice}</h1></div>}
      </div>
      <div className='winner'>
        {result && <div><h1 className='result'>Result: {result}</h1></div>}
      </div>
    </div>
  );
}


