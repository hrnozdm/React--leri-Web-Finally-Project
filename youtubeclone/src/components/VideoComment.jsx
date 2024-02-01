import React from 'react';
import Icons from '../assets/icons';
import moment from 'moment';


const VideoComment = ({ comment }) => {
  
  return (
    <div className="bg-white p-4 rounded  mb-4 flex ml-14">
      <div onClick={()=>window.location=`/channel/${comment?.snippet?.channelId}`}>
        {
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl ?  <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" className='w-[40px] h-[40px] cursor-pointer'/> : (<div className='bg-gray-600 w-[40px] h-[40px] rounded-full'></div>)
        }
        
      </div>

      <div className='ml-3 mb-3'>
            <div className='flex'>
                <div className="text-gray-800">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
                <div className="text-gray-800 ml-2">{moment(comment?.snippet?.topLevelComment?.snippet?.likeCount).startOf('day').fromNow()}</div>
            </div>
            <div className="text-gray-800">{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</div>
            <div className='flex items-center'>
            <Icons.like />
            <div className='ml-1'>{comment?.snippet?.topLevelComment?.snippet?.likeCount}</div>
            </div>
            
      </div>
     
      
     
    </div>
  );
}

export default VideoComment;
