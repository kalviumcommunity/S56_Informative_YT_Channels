import React from "react";
import "../Pages/Add.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Add = () => {
  const [name, setName] = useState();
  const [subscribers, setSubscribers] = useState();
  const [videos, setVideos] = useState();
  const [id , setId] = useState();
  const [ratings, setRatings] = useState();


  const Submit = (e) => {
    e.preventDefault();
    axios.post('https://s56-informative-yt-channels.onrender.com/createUser', {channel_id:id, channel_name:name, subscribers:subscribers, ratings:ratings, total_videos:videos})
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
          <form onSubmit={Submit}>
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
            <button className="addButtonA">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
