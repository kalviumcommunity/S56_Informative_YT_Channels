import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const handleLogin = () => {
    const username = document.querySelector('.inputInfoL').value;
    document.cookie = `username=${username}`;
    axios.post("https://s56-informative-yt-channels.onrender.com/auth",{username})
    .then((res)=>{
      const token = res.data;
      document.cookie = `token=${token}; expires=Sun, 1 Jan 9999 12:00:00 UTC; path=/`;
      props.setUsername(username); // setting the username 
    })
    .catch((err)=>console.error(err))

    axios.post('https://s56-informative-yt-channels.onrender.com/postUser', {user:username})
    .then(res => {
      console.log('Username posted successfully:', res);
    })
    .catch(error => {
      console.error('Error posting username:', error);
    });

  };

  return (
    <div>
      <div className="backL">
        <Link to="/">
          <button className="backHomeL">Home</button>
        </Link>
      </div>
      <div className="mainContainerL">
        <div className="innerBoxL">
          <form>
            <div className="nameL">
              <h1>Login</h1>
            </div>
            <div className="subscribersL">
              <h2>Username</h2>
              <input
                className="inputInfoL"
                type="text"
                placeholder='Enter your Username here'
              />
            </div>
            <div className="videosL">
              <h2>Password</h2>
              <input
                className="inputInfoL"
                type="password"
                placeholder='Enter your password here'
              />
            </div>
            <Link to="/"> 
              <button className="addButtonL" onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
