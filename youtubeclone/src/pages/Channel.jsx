import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChannelData } from '../redux/ChannelSlice';

const Channel = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const channelData = useSelector((state) => state.channelInfo);

  useEffect(() => {
    dispatch(getChannelData(id));
  }, [dispatch, id]);

  const channelItems = channelData.channelData.items;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <div>
        {channelItems && channelItems.map((item, index) => (
          <div key={index} className="mb-8 p-4 border rounded-lg">
            <div className="mb-4">
              <img src={item?.snippet?.thumbnails?.high?.url} alt="" className="w-24 h-24 object-cover rounded" />
            </div>
            <div className="text-lg font-bold mb-2">{item?.snippet?.title}</div>
            <div className="text-gray-600 mb-2">{item?.snippet?.description}</div>
            <div className="text-gray-700 mb-2">Videos: {item?.statistics?.videoCount}</div>
            <div className="text-gray-700">Views: {item?.statistics?.viewCount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
