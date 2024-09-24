import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const VideosContainer = () => {
  const searchtext=useSelector((store)=>store.app.searchData)
  console.log(searchtext);
  
const [videos, setVideos]=useState([])
  useEffect(()=>{
    getVideos()
  },[])

  useEffect(()=>{
    getVideos()
  },[searchtext])
  

  const getVideos= async()=>{
    
    const url=searchtext?'&q='+searchtext:''
    console.log(searchtext, url);
    const res = await axios.get(YOUTUBE_API+url)
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