import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import './Update.css'

const UpdateUser = () => {
  const {id} = useParams()
  const [name, setName] = useState('');
  const [subscribers, setSubscribers] = useState('');
  const [videos, setVideos] = useState();
  const navigate = useNavigate()


  useEffect(() => {
    axios.get("https://s56-informative-yt-channels.onrender.com/getUser/"+id)
    .then(result => {console.log(result)
      setName(result.data.channel_name)
      setSubscribers(result.data.subscribers)
      setVideos(result.data.total_videos)
    })
    .catch(err => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault()
    let obj = {
      channel_name:name, subscribers:subscribers, total_videos:videos
    }
    console.log(obj)
    axios.put('https://s56-informative-yt-channels.onrender.com/updateUser/'+id, {
      channel_id:"12345",channel_name:obj.channel_name, subscribers:obj.subscribers,ratings:9.6 ,total_videos:obj.total_videos
    })
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="backB">
        <Link to="/">
          <button className="backHomeB">Home</button>
        </Link>
      </div>
      <div className="mainContainerB">
        <div className="innerBoxB">
          <form onSubmit={Update}>
            <div className="nameB">
              <h2>Channel Name</h2>
              <input
                className="inputInfoB"
                type="text"
                placeholder="Channel Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="subscribersB">
              <h2>Total Subscribers</h2>
              <input
                className="inputInfoB"
                type="text"
                placeholder="Write in M (millions), K (thousand)"
                value={subscribers}
                onChange={(e) => setSubscribers(e.target.value)}
              />
            </div>
            <div className="videosB">
              <h2>Total Videos</h2>
              <input
                className="inputInfoB"
                type="number"
                placeholder="Total Videos"
                value={videos}
                onChange={(e) => setVideos(e.target.value)}
              />
            </div>
            <button className="addButtonB">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser;
