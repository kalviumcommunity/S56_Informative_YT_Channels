import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const LoginPage = ({ loggerdin, setLoggedin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      axios.post('http://localhost:3200/auth', { username: username }).then((res) => {
        const token = res.data;
        document.cookie = `username=${token}; expires=Sun, 1 Jan 9999 12:00:00 UTC;`;
        console.log(document.cookie);
      });
    } else {
      alert('Username and password are required');
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
                value={username} // Bind value to state
                onChange={(e) => setUsername(e.target.value)} // Handle input change
              />
            </div>
            <div className="videosL">
              <h2>Password</h2>
              <input
                className="inputInfoL"
                type="password"
                placeholder='Enter your password here'
                value={password} // Bind value to state
                onChange={(e) => setPassword(e.target.value)} // Handle input change
              />
            </div>
            <button className="addButtonL" onClick={handleLogin}>Login</button> {/* Removed Link wrapping */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
