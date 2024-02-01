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
                'X-RapidAPI-Key': 'c672f60c79msh849b8d6caaac384p1fab90jsnfbf247a11c7f',
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

