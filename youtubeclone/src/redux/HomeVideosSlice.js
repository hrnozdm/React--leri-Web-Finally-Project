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
                maxResults: '100',
                q:data
                
              },
              headers: {
                'X-RapidAPI-Key': 'b5088a8063mshcd64f90ba162ee2p14cfe2jsn8eb5798bd62a',
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