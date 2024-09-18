import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideosContainer = () => {
const [videos, setVideos]=useState([])
  useEffect(()=>{
    getVideos()
  },[])
  

  const getVideos= async()=>{
    const res = await axios.get(YOUTUBE_API)
    console.log(res.data.items);
    setVideos(res?.data?.items||[])
  }
  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video)=>(
          <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard key={video.id} info={video}/>
          </Link>
        ))
      }
    </div>
  )
}

export default VideosContainer