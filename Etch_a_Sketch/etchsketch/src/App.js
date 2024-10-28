import logo from './logo.svg';
import './App.css';

function App() {
  const rows = [];
  for (let i = 0; i < 16; i++) {
    rows.push(<FlexContainer />);
  }

  return (
    <>
      <h1>How to draw 4 babies</h1>
      <div className='WebContainer'>

        {rows}

      </div>
    </>



  );
}

function FlexContainer() {
  return <div className='Container'> <FlexItem /> </div>
}

function FlexItem() {
  const columns = [];
  for (let j = 0; j < 16; j++) {
    columns.push(<div className='Item'>Ite</div>);
  }
  return columns;
}

export default App;
