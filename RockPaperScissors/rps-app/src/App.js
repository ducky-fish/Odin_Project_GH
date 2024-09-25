
import './App.css';
import { useState } from 'react';


function App() {
  const [computerChoice, setComputerChoice] = useState(getComputerChoice());

  return (
    <>
      <div className="rps">
        <p>{computerChoice}</p>
      </div>
      <div>
        <button type="answer" onClick={() => onUserChoice("Rock", [computerChoice,setComputerChoice])}>
          <img src={require("./Rock.jpeg")} width="200" height="200" alt='Rock'></img>
        </button>
        <button type="answer" onClick={() => onUserChoice("Paper", [computerChoice,setComputerChoice])}>
          <img src={require("./Paper.jpeg")} width="200" height="200" alt='Paper'></img>
        </button>
        <button type="answer" onClick={() => onUserChoice("Scissors", [computerChoice,setComputerChoice])}>
          <img src={require("./Scissors.jpeg")} width="200" height="200" alt='Scissors'></img>
        </button>
      </div>


    </>
  );
}

function onUserChoice(userSelect, machineSelect) {
  console.log(userSelect.toString());
  console.log(machineSelect.toString());
  const currMachineSelect = machineSelect[0];
  
  let alertMessage = "";
  if (userSelect === currMachineSelect) {
    alertMessage = "No Winner :(";
  }
  else if ((userSelect === "Rock" && currMachineSelect === "Scissors") ||
    (userSelect === "Paper" && currMachineSelect === "Rock") ||
    (userSelect === "Scissors" && currMachineSelect === "Paper")
  ) {
    alertMessage = "Player Wins :)";
  }
  else {
    alertMessage = "Computer Wins :(";
  }
  machineSelect[1](getComputerChoice());
  return alert(alertMessage);
}


function getComputerChoice() {
  const playChoice = ['Rock', 'Paper', 'Scissors'];
  return (playChoice[Math.floor(Math.random() * playChoice.length)]).toString();
}

export default App;
