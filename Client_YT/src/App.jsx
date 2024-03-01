import { useState } from 'react';
import './App.css';
import DummyData from './Components/DummyData';
import {Router, Routes, Route} from 'react-router-dom'
import Data from './data.json'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="./Images/YTlogo.jpg" alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="main-container">
        <h1 className="main-heading">List of Most Informative YouTube Channels</h1>
        <p className="current-page">Current Page: Home</p>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className='dummydata'>
      <DummyData data={Data} />
      </div>
      
    </>
  );
}

export default App;
