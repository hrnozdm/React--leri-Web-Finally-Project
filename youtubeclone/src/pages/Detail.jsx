// Detail.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideoDetails } from '../redux/DetailVideoSlice';
import { getVideoComments } from '../redux/CommentSlice';
import DetailCard from '../components/DetailCard';
import VideoComment from '../components/VideoComment';



const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.videoDetail.videoDetails);
  const videoComment =useSelector((state) => state.videoComment);
  useEffect(() => {
    dispatch(getVideoDetails(id));
  }, [dispatch, id]);

  //console.log(videoData);
  console.log(videoComment);

  useEffect(() => {
      dispatch(getVideoComments(id));
  }, [dispatch,id])
  return (
    <div>
       {
        videoData?.items?.map((videoDetail,i)=>(
           <DetailCard key={i} videoDetail={videoDetail}/>
        ))
       }
      
      <div>
          {
            videoComment?.videoComments?.items?.map((comment,i)=>(

              <VideoComment key={i} comment={comment}/>

           
               
            ))
          }
      </div>
         

    </div>
    
  );
}

export default Detail;
