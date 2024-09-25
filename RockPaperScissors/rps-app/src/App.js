
import './App.css';
import { useState } from 'react';


function App() {
  const playChoice = ['Rock', 'Paper', 'Scissors'];
  const [computerChoice, setComputerChoice] = useState(getComputerChoice(playChoice));

  function onUserChoice(userSelect, machineSelect) {
    console.log(userSelect.toString());
    console.log(machineSelect.toString());

    setComputerChoice(getComputerChoice(playChoice));

    if (userSelect === machineSelect) {
      return alert("No Winner :(");
    }
    else if ((userSelect === "Rock" && machineSelect === "Scissors") ||
      (userSelect === "Paper" && machineSelect === "Rock") ||
      (userSelect === "Scissors" && machineSelect === "Paper")
    ) {
      return alert("Player Wins :)");
    }
    else {
      return alert('Computer Wins :(');
    }
  }

  return (
    <>
      <div className="rps">
        <p>{computerChoice}</p>
      </div>
      {console.log(getComputerChoice)}
      <button type="answer" onClick={() => onUserChoice("Rock", computerChoice)}>
        <img src={require("./Rock.jpeg")} width="200" height="200" alt='Rock'></img>
      </button>
      <button type="answer" onClick={() => onUserChoice("Paper", computerChoice)}>
        <img src={require("./Paper.jpeg")} width="200" height="200" alt='Paper'></img>
      </button>
      <button type="answer" onClick={() => onUserChoice("Scissors", computerChoice)}>
        <img src={require("./Scissors.jpeg")} width="200" height="200" alt='Scissors'></img>
      </button>
      <div>

      </div>
    </>
  );
}



function getComputerChoice(choices) {
  return (choices[Math.floor(Math.random() * choices.length)]).toString();
}

export default App;
