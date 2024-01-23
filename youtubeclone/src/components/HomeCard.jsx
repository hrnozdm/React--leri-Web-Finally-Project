import React from 'react'
import moment from  "moment"

const HomeCard = ({video}) => {
  return (
    <div className='w-[300px] m-3 cursor-pointer'>
        <img src={video?.snippet?.thumbnails?.high?.url} alt="" />
        <div className='font-bold mt-1'>{(video?.snippet?.title).substring(0,45)}...</div>
        <div className='mt-1'>{video?.snippet?.channelTitle}</div>
        <div className='text-sm text-gray-700 mt-1 tracking-wider space-x-2'>
          <span>100K Görüntülenme</span>
          <span>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</span>
        </div>
    </div>
  )
}

export default HomeCard
