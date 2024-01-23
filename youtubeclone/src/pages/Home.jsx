import React,{useEffect} from 'react';
import HomeCard from "../components/HomeCard";
import Filter from '../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeVideos } from '../redux/HomeVideosSlice';

const Home = () => {

  const dispatch=useDispatch();
  const { HomeVideosData } = useSelector((state) => state.homeVideos);
  useEffect(() => {
     dispatch(getHomeVideos())
  }, [])
  console.log(HomeVideosData.items);
  return (
    <div className='m-3'>
        <Filter/>
        <div className='flex flex-wrap m-2'>
           
           {
            HomeVideosData?.items?.map((video,i)=>(
               <HomeCard key={i} video={video}/>
            ))
           }
         
        </div> 
    </div>
  )
}

export default Home
