import React from 'react';
import HomeCard from "../components/HomeCard";
import Filter from '../components/Filter';

const Home = () => {
  return (
    <div className='m-3'>
        <Filter/>
        <div className='flex flex-wrap m-2'>
        <HomeCard/>   
        <HomeCard/>   
        <HomeCard/>   
        <HomeCard/>   
        <HomeCard/>   
        <HomeCard/>   
        <HomeCard/>   
        <HomeCard/>   
        
        </div> 
    </div>
  )
}

export default Home
