import React, { useEffect, useState } from "react";
import "../Pages/main.css";
import { Link } from 'react-router-dom';


const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://s56-informative-yt-channels.onrender.com/YT")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error in fetching the data:", error));
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="./Images/YTlogo.jpg" alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <Link
              to="/add"
              className="addNew"
              title="Click to add your own channel"
            >
              +
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-container">
        <h1 className="main-heading">
          List of Most Informative YouTube Channels
        </h1>
        <p className="current-page">Current Page: Home</p>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="card-container">
        {data.map((item) => (
          <div key={item._id} className="card">
            <h2>{item.channel_name}</h2>
            <p>Total Subscribers: {item.subscribers}</p>
            <p>Total Videos: {item.total_videos}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
