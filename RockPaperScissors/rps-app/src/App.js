
import './App.css';

// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react';


function App() {
  const playChoice = ['rock', 'paper', 'scissors'];
  let getComputerChoice = playChoice[Math.floor(Math.random() * playChoice.length)];


  // const [computerChoice, getComputerChoice] = useState(0);
  return (
    <>
        <div className="rps">
          <p>{getComputerChoice}</p>
        </div>
        <img  sizes='small'></img>
        <button type="answer">
          <img src={require("./Rock.jpeg")} size = "s"></img>
        </button>
    </>
  );
}

function userChoice() {

}

export default App;
