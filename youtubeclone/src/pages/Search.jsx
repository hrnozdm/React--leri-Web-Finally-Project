import React,{useEffect} from 'react'
import SearchCard from '../components/SearchCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchVideos } from '../redux/SearchSlice'

const Search = () => {
  const dispatch=useDispatch();
  const {keyword}=useParams();
  const {searchVideos}=useSelector((state)=>state.searchVideos)
  useEffect(() => {
    if (keyword) {
      dispatch(getSearchVideos(keyword))
       
    }
  }, [dispatch,keyword])
  console.log(searchVideos);
  return (
    <div>
       {
        searchVideos?.items?.map((searchData,i)=>(
          <SearchCard searchData={searchData} key={i}/>
        ))
       }
    </div>
  )
}

export default Search
