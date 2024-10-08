
import { render } from '@testing-library/react';
import './App.css';
import { useState } from 'react';


function App() {

  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);


  const handleClick = (e) => {
    const buttonElement = e.currentTarget.id;

    console.log(buttonElement.toString);

    let whoWins = OnUserChoice(buttonElement);

    if (whoWins == "Player") {
      setUserScore(userScore + 1);
      alert("Player Wins :)")
    }
    else if (whoWins == "Computer") {
      setComputerScore(computerScore + 1);
      alert("Computer Wins :(")
    }
    else {
      alert("Nobody Wins 0_0");
    }
    return;
  }

  return (
    <>
      <div>
        <p>
          Player : {userScore}
        </p>
        <p>
          Computer : {computerScore}
        </p>
      </div>
      <button type="answer" id="Rock" onClick={handleClick}>
        <img src={require("./rps-images/Rock.jpeg")} width="200" height="200" alt='Rock'></img>
      </button>

      <button type="answer" id="Paper" onClick={handleClick}>
        <img src={require("./rps-images/Paper.jpeg")} width="200" height="200" alt='Paper'></img>
      </button>

      <button type="answer" id="Scissors" onClick={handleClick}>
        <img src={require("./rps-images/Scissors.jpeg")} width="200" height="200" alt='Scissors'></img>
      </button>

    </>

  );
}
// const winner = OnUserChoice({whoScored});


function OnUserChoice(userSelect) {
  let computerChoice = GetComputerChoice();
  console.log(computerChoice);
  let winner = "";

  if (userSelect === computerChoice) {
    winner = "Nobody";
  }
  else if ((userSelect === "Rock" && computerChoice === "Scissors") ||
    (userSelect === "Paper" && computerChoice === "Rock") ||
    (userSelect === "Scissors" && computerChoice === "Paper")
  ) {
    winner = "Player";
  }
  else {
    winner = "Computer";
  }

  console.log("Selection: " + userSelect);
  console.log("OnUserChoice: " + winner);

  return winner;
}



function IncreaseOneOrOther(boolValue) {
  if (boolValue) {
    return
  }

}

// function WinnerMessage({whoWins}) {
//   // const [userScore, setUserScore] = useState(0);
//   // const [computerScore, setComputerScore] = useState(0);
//   let alertMessage = "";
//   switch (whoWins) {
//     case "Player":
//       alertMessage = "Player Wins :)";
//       break;
//     case "Computer":
//       alertMessage = "Computer Wins :("
//       break;
//     case "Nobody":
//       alertMessage = "No Winner 0_0";
//   }
//   alert(alertMessage);
// }


//person 
// Scoring needs to know who won so it can update the score
// so pass in prop 

// function Scoring({ whoScored  }) {
//   console.log("haaahahah" + whoScored)
//   const [playerScore, setPlayerScore] = useState(0);
//   // const [computerScore, setComputerScore] = useState(0);

//   let winner = OnUserChoice({whoScored});

//   let alertMessage = "";

//   console.log(winner);
// if (winner ==  "Player") {
//   setPlayerScore(playerScore + 1);
//   alertMessage = "Player Wins :)";
// }
// else if (winner == "Computer") {
//   setComputerScore(computerScore + 1);
//   alertMessage = "Computer Wins :("
// }
// else {
//   alertMessage = "No Winner 0_0";
// }

// switch (whoScored) {
// case "Player":
//   setPlayerScore(playerScore + 1);
//   alertMessage = "Player Wins :)";
//   break;
//   case "Computer":
//     setComputerScore(computerScore + 1);
//     alertMessage = "Computer Wins :("
//     break;
//   case "Nobody":
//     alertMessage = "No Winner 0_0";
// }

// return (
// winner
//     <>
//       <div >
//         <p>
//           Player: {playerScore}
//         </p>
//         <p>
//           {/* Computer: {computerScore} */}
//         </p>
//       </div>
//     </>

// );

// }


function GetComputerChoice() {
  const playChoice = ['Rock', 'Paper', 'Scissors'];
  return (playChoice[Math.floor(Math.random() * playChoice.length)]).toString();
}

export default App;
