import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState={
       HomeVideosData:[]
}


export const getHomeVideos=createAsyncThunk('getHomeVideos',async (data)=>{

    try {
        const response = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
            params: {
                part: 'id,snippet',
                maxResults: '150',
                q:data
                
              },
              headers: {
                'X-RapidAPI-Key': 'c672f60c79msh849b8d6caaac384p1fab90jsnfbf247a11c7f',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
              }
        });
    
        return response.data; 
      } catch (error) {
        console.error(error);
      }

})


const HomeVideosSlice=createSlice({
    name:'HomeVideos',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getHomeVideos.fulfilled,(state,action)=>{
            state.HomeVideosData=action.payload;
        })
    }
})

export default HomeVideosSlice.reducer;