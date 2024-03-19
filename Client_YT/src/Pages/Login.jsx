import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://s56-informative-yt-channels.onrender.com/auth', { username });
      if (response.data && response.data.token) {
        document.cookie = `token=${response.data.token}`;
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <button className="addButtonL" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
