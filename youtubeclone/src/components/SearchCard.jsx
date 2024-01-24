import React from 'react';
import images from '../assets/images/images';
import moment from 'moment';

const SearchCard = ({ searchData }) => {
  const { snippet, id } = searchData;
  const { title, description, thumbnails, publishedAt, channelId, channelTitle } = snippet;

  return (
    <div className='mx-10 my-10 flex items-start space-x-3 justify-center cursor-pointer' onClick={()=>window.location=`/videos/${id.videoId}`}>
      <img src={thumbnails.medium.url} alt={title} className='max-w-[260px]' />
      <div className='space-y-2 w-2/3'>
        <div className='font-bold text-lg'>{title}</div>
        <div className='flex items-center space-x-2'>
        
          <span>{moment(publishedAt).startOf('day').fromNow()}</span>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 rounded-full bg-gray-200'></div>
          <div className='text-gray-700'>{channelTitle}</div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default SearchCard;
