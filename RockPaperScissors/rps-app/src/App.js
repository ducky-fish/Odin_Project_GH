
import './App.css';

// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react';

/*
  need to refactor, method is:
  
*/
function App() {
  const playChoice = ['Rock', 'Paper', 'Scissors'];
  let getComputerChoice =  (playChoice[Math.floor(Math.random() * playChoice.length)]).toString();

  
  // const [computerChoice, getComputerChoice] = useState(0);

  return (
    <>
      <div className="rps">
        <p>{getComputerChoice}</p>
      </div>
      {console.log(getComputerChoice)}
      <button type="answer" onClick={() => onUserChoice("Rock", getComputerChoice)}>
        <img src={require("./Rock.jpeg")} width="200" height="200" alt='Rock'></img>
      </button>
      <button type="answer" onClick={() => onUserChoice("Paper", getComputerChoice)}>
        <img src={require("./Paper.jpeg")} width="200" height="200" alt='Paper'></img>
      </button>
      <button type="answer" onClick={() => onUserChoice("Scissors", getComputerChoice)}>
        <img src={require("./Scissors.jpeg")} width="200" height="200" alt='Scissors'></img>
      </button>
    </>
  );
}

function onUserChoice(userSelect, machineSelect) {
  console.log(userSelect.toString()); 
  console.log(machineSelect.toString());
  if (userSelect === machineSelect) {
    return alert("No Winner :(");
  }
  else if ((userSelect === "Rock" && machineSelect === "Scissors") ||
    (userSelect === "Paper" && machineSelect === "Rock") || 
    (userSelect === "Scissors" && machineSelect === "Paper")
  ) {
    return alert("Player Wins :)");
  }
  else{
    return alert('Computer Wins :(');
  }
}

export default App;
