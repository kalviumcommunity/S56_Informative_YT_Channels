import { useState } from 'react';
import './App.css';
import DummyData from './Components/DummyData';
import Data from './data.json'
import Main from './Pages/main';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main/>
      {/* Uncomment Only if you want to see Dummy Data */}
      {/* <div className='dummydata'>
      <DummyData data={Data} />
      </div> */}
      
    </>
  );
}

export default App;
