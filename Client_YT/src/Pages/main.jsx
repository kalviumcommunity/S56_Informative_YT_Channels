import React, { useEffect, useState } from 'react';
import '../Pages/main.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://s56-informative-yt-channels.onrender.com/YT')
      .then(response => response.json())
      .then(data => {
        setData(data.data);
      })
      .catch(error => console.error('Error in fetching the data:', error));
  }, []);

  const handleDelete = id => {
    axios.delete(`https://s56-informative-yt-channels.onrender.com/deleteUser/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleLogout = () => {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    // document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    setLoggedin(false);
    navigate('/');
};

  const isLoggedIn = document.cookie.split(';').some(cookie => cookie.trim().startsWith('username='));

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="./Images/YTlogo.jpg" alt="" />
        </div>
        <ul>
          <li>
            <Link to="/add" className="addNew" title="Click to add your own channel">+</Link>
          </li>
          {isLoggedIn ? (
            <Link to="/login"> 
              <button className="loginButton" onClick={handleLogout}>Logout</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="loginButton">Login</button>
            </Link>
          )}
        </ul>
      </nav>

      <div className="main-container">
        <h1 className="main-heading">List of Most Informative YouTube Channels</h1>
        <p className="current-page">Current Page: Home</p>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="card-container">
        {data.map(item => (
          <div key={item._id} className="card">
            <h2>{item.channel_name}</h2>
            <p>Total Subscribers: {item.subscribers}</p>
            <p>Total Videos: {item.total_videos}</p>
            <div className="button">
              <Link to={`/update/${item._id}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
