// Detail.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideoDetails } from '../redux/DetailVideoSlice';
import DetailCard from '../components/DetailCard';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.videoDetail.videoDetails);
   console.log(videoData);
  useEffect(() => {
    dispatch(getVideoDetails(id));
  }, [dispatch, id]);
  return (
    <div>
       {
        videoData?.items?.map((videoDetail,i)=>(
           <DetailCard key={i} videoDetail={videoDetail}/>
        ))
       }
    </div>
    
  );
}

export default Detail;
