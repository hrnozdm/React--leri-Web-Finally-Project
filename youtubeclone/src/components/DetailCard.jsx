import React from 'react'
import ReactPlayer from 'react-player'
import moment from 'moment'
import Icons from '../assets/icons'

const DetailCard = ({videoDetail}) => {
  return (
    <div className='max-w-[650px] mx-20 my-9'>
           
           <ReactPlayer url={`https://www.youtube.com/watch?v=${videoDetail.id}`}/>
           <div className='font-bold text-2xl mt-1'>{videoDetail?.snippet?.title}</div>
           <div className='space-x-2 text-gray-800 mt-1'>
                <span>
                    {videoDetail?.statistics?.viewCount} Görüntülenme
                </span>

                <span>
                    {moment(videoDetail?.snippet.publishedAt).startOf('day').fromNow()}
                </span>
            </div>
            <div className='text-gray-700 mt-2'>
                {(videoDetail?.snippet?.description).substring(0,200)}...
            </div>
            <div className='mt-2 text-xs text-blue-700'>
                {
                    videoDetail?.snippet?.tags?.map((tag)=>`#${tag}`)
                }
            </div>
            <div className='flex items-center space-x-3 mt-2'>
               <span className='flex items-center'><Icons.like/>{videoDetail?.statistics?.likeCount}</span>
               <span className='flex items-center'><b>Görüntülenme:</b>{videoDetail?.statistics?.viewCount}</span>
               <span className='flex items-center'><b>Yorum Sayısı:</b>{videoDetail?.statistics?.commentCount}</span>
            </div>    
    </div>
  )
}

export default DetailCard
