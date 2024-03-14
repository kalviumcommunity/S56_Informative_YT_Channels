import { useState } from 'react';
import './App.css';
import DummyData from './Components/DummyData';
import Data from './data.json'
import Main from './Pages/main';
import Add from './Pages/Add';
import Update from './Pages/Update'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />}/>
      </Routes>
    </BrowserRouter>
      {/* Uncomment Only if you want to see Dummy Data */}
      {/* <div className='dummydata'>
      <DummyData data={Data} />
      </div> */}
    </>
  );
}

export default App;
