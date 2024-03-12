import React from "react";
import "../Pages/Add.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Add = () => {
  const [name, setName] = useState('');
  const [subscribers, setSubscribers] = useState('');
  const [videos, setVideos] = useState();
  // const [id , setId] = useState();
  // const [ratings, setRatings] = useState();


  const Submit = (e) => {
    e.preventDefault()
    let obj = {
      channel_name:name, subscribers:subscribers, total_videos:videos
    }
    console.log(obj)
    axios.post('http://localhost:3000/createUser', {
      channel_id:"12345",channel_name:obj.channel_name, subscribers:obj.subscribers,ratings:9.6 ,total_videos:obj.total_videos
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="backA">
        <Link to="/">
          <button className="backHomeA">Home</button>
        </Link>
      </div>
      <div className="mainContainerA">
        <div className="innerBoxA">
          <form>
            <div className="nameA">
              <h2>Channel Name</h2>
              <input
                className="inputInfoA"
                type="text"
                placeholder="Channel Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="subscribersA">
              <h2>Total Subscribers</h2>
              <input
                className="inputInfoA"
                type="text"
                placeholder="Write in M (millions), K (thousand)"
                value={subscribers}
                onChange={(e) => setSubscribers(e.target.value)}
              />
            </div>
            <div className="videosA">
              <h2>Total Videos</h2>
              <input
                className="inputInfoA"
                type="number"
                placeholder="Total Videos"
                value={videos}
                onChange={(e) => setVideos(e.target.value)}
              />
            </div>
            <button className="addButtonA" onClick={Submit}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;