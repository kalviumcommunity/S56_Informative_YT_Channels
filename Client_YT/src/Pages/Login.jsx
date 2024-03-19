import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = () => {
    e.preventDefault()
    console.log(true)
    try{
        document.cookie = `username=${username};expires=`+new Date(2028,2,1).toUTCString
        axios.post('https://s56-informative-yt-channels.onrender.com/auth',{username,password})
        .then((response)=>{

            document.cookie = `token=${response.data};expires=`+new Date(2028,2,1).toUTCString
        })
        .catch((err)=>console.error(err))
        // sessionStorage.setItem('username',username)
        // console.log(sessionStorage)
        // console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
  

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