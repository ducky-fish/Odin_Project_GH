
import './App.css';


function App() {
  const playChoice = ['rock','paper','scissors'];
  let getComputerChoice = playChoice[Math.floor(Math.random() * playChoice.length)];
  
  // const [computerChoice, getComputerChoice] = useState(0);
  return (
    <div className = "rps">
      <p>{getComputerChoice}</p>
    </div>
  );
}

export default App;
