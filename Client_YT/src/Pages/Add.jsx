import React from "react";
import "../Pages/Add.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Joi from 'joi'

const Add = () => {
  const [name, setName] = useState('');
  const [subscribers, setSubscribers] = useState('');
  const [videos, setVideos] = useState('');
  const navigate = useNavigate();

  const AddSchema = Joi.object({
    channel_name: Joi.string().min(1).max(20).required(),
    subscribers: Joi.string().min(2).required(),
    total_videos: Joi.number().min(1).max(20).required()
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = AddSchema.validate({ channel_name: name, subscribers, total_videos: parseInt(videos) });
    
    if (error) {
      console.log(error);
      return;
    }
    let obj = {
      channel_name: name, subscribers, total_videos: parseInt(videos)
    };

    console.log(obj);

    axios.post('https://s56-informative-yt-channels.onrender.com/createUser', {
      channel_id: "12345", channel_name: obj.channel_name, subscribers: obj.subscribers, ratings: 9.6, total_videos: obj.total_videos
    })
    .then(result => {
      console.log(result);
      navigate('/');
    })
    .catch(err => console.log(err));
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
            <button className="addButtonA" onClick={handleSubmit}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
