import React from 'react'

const VideoCard = ({info}) => {
  if(!info) return
  console.log(info);
  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails} = snippet
  const {viewCount, likeCount} = statistics

  return (
    <div className='p-2 m-2 w-full md:w-60 shadow-xl'>
      <img className='rounded-lg'  src={thumbnails.medium.url} alt="video thumbnail" />
      <h4 className='font-bold py-2'>{title}</h4>
      <p>{channelTitle}</p>
      <p>{viewCount} views</p>
      <p>{likeCount} likes</p>
    </div>
  )
}

export default VideoCard