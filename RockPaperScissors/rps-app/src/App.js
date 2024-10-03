
import './App.css';
import { useState } from 'react';


function App() {

  const [computerChoice, setComputerChoice] = useState(GetComputerChoice);

  const computerChoiceSet = [computerChoice, setComputerChoice];

  return (
    <>
      <div className="rps">
        <p>{computerChoice}</p>
        <p>
          <br />
          Player   :
          <br />
          Computer :
          <br />
        </p>

      </div>
      <div>
        <button type="answer" onClick={() => OnUserChoice("Rock", computerChoiceSet)}>
          <img src={require("./rps-images/Rock.jpeg")} width="200" height="200" alt='Rock'></img>
        </button>
        <button type="answer" onClick={() => OnUserChoice("Paper", computerChoiceSet)}>
          <img src={require("./rps-images/Paper.jpeg")} width="200" height="200" alt='Paper'></img>
        </button>
        <button type="answer" onClick={() => OnUserChoice("Scissors", computerChoiceSet)}>
          <img src={require("./rps-images/Scissors.jpeg")} width="200" height="200" alt='Scissors'></img>
        </button>
      </div>

    </>
  );
}

function Scoring(whoWins) {
  let alertMessage = "";
  const scoreCount = [0,0];

  switch (whoWins) {
    case "Player":
      alertMessage = "Player Wins :)";
      break;
    case "Computer":
      alertMessage = "Computer Wins :("
      break;
    case "Nobody":
      alertMessage = "No Winner 0_0";
  }
  return alertMessage;
}


function OnUserChoice(userSelect, machineSelect) {

  const computerChoiceCurrent = machineSelect[0];
  let computerChoiceNext = machineSelect[1];
  let winner = "";

  if (userSelect === computerChoiceCurrent) {
    winner = "Nobody";
  }
  else if ((userSelect === "Rock" && computerChoiceCurrent === "Scissors") ||
    (userSelect === "Paper" && computerChoiceCurrent === "Rock") ||
    (userSelect === "Scissors" && computerChoiceCurrent === "Paper")
  ) {
    winner = "Player";
  }
  else {
    winner = "Computer";
  }



  computerChoiceNext(GetComputerChoice());
  return alert(Scoring(winner));
}


function GetComputerChoice() {
  const playChoice = ['Rock', 'Paper', 'Scissors'];
  return (playChoice[Math.floor(Math.random() * playChoice.length)]).toString();
}

export default App;
