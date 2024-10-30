import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const rows = [];
  for (let i = 0; i < 16; i++) {
    rows.push(<FlexContainer />);
  }

  return (
    <div className='WebContainer'>
      <div className='HeaderContainer'>
        <h1 className='HeaderItem'>How to draw 4 babies</h1>
        <div className='HeaderItem'><OnOffButtonComponent /></div>

      </div>

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
    columns.push(<MyComponent />);
  }
  return columns;
};


function OnOffButtonComponent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return <button className='OnOffButton' >On/Off</button>;
}

const MyComponent = () => {
  const [divChangeBackground, setDivChangeBackground] = useState(false);

  const handleMouseEnter = () => {
    setDivChangeBackground(!divChangeBackground);
  };

  return (
    <div
      className={divChangeBackground ? 'ItemNew' : 'ItemInitial'}
      onMouseEnter={handleMouseEnter}
    >
      Ite
    </div>
  );
};

//making a button on off switch on press that when on (basically taking same logic as the MyComponent)
//will allow you to draw (it is set ready to draw)
//    - make another component operation that sets the class name of the div to 'ItemNew'
//when off will erase what youve drawn
//    - another componeny operation that reverts the class name

export default App;
