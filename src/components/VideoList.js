import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos, onVideoSelect})=>{
  const rendredList = videos.map(ele =>{
    return <VideoItem key={ele.id.videoId} video={ele} onVideoSelect={onVideoSelect}/>
  });

  return(
    <div className="ui relaxed divided list">
    {rendredList}
    </div>
  )
}
export default VideoList;
