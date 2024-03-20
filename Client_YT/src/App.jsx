import { useState } from 'react';
import './App.css';
import DummyData from './Components/DummyData';
import Data from './data.json'
import Main from './Pages/main';
import Add from './Pages/Add';
import Update from './Pages/Update'
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [username, setUsername] = useState('');

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add username={username} />} />
        <Route path="/update/:id" element={<Update />}/>
        <Route path="/login" element={<Login setUsername={setUsername} />} />
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
