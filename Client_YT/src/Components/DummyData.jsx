import React from 'react';
import './DummyData.css'

const DummyData = ({data}) => {
  return (
    <div>
      <h2>Channel ID:    {data.channel_id}</h2>
      <h2>Channel Name:    {data.channel_name}</h2>
      <h2>Total Subscibers:    {data.subscribers}</h2>
      <h2>Ratings:    {data.ratings}</h2>
      <h2>Total Videos:    {data.total_videos}</h2>

    </div>
  );
};

export default DummyData;
