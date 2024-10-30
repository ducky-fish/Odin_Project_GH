import logo from './logo.svg';
import './App.css';

function App() {
  const rows = [];
  for (let i = 0; i < 16; i++) {
    rows.push(<FlexContainer />);
  }

  return (
    <div className='WebContainer'>
      <h1>How to draw 4 babies</h1>

      {rows}

    </div>



  );
}

function FlexContainer() {
  return <div className='Container'> <FlexItem /> </div>
}

//Creates 1 row of 16 items that can be worked on.
function FlexItem() {
  const columns = [];
  for (let j = 0; j < 16; j++) {
    columns.push(<div className='Item' >Ite</div>);
  }
  return columns;
}

//onMouseEnter={()=> {{backgroundColor: 'black'}}}


export default App;
