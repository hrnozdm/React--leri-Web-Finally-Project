import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState={
     searchVideos:[],
}


export const getSearchVideos=createAsyncThunk('getSearchVideos',async(keyword)=>{
       try {
        const response=await axios.get('https://youtube-v31.p.rapidapi.com/search',{
            params: {
                q: keyword,
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '50',
                order: 'date'
              },
              headers: {
                'X-RapidAPI-Key': 'b5088a8063mshcd64f90ba162ee2p14cfe2jsn8eb5798bd62a',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
              }
        })

        return response.data;
       } catch (error) {
         console.log(error);
       }
       
})


const searchSlice=createSlice({
    initialState,
    name:'searchSlice',
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getSearchVideos.fulfilled,(state,action)=>{
           state.searchVideos=action.payload
    })
    }
})

export default searchSlice.reducer;

