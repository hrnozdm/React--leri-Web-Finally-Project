import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState={
    videoComments:[]
}


export const getVideoComments = createAsyncThunk('getVideoComments', async (videoId) => {
    try {
        const response = await axios.get('https://youtube-v31.p.rapidapi.com/commentThreads', {
            headers: {
                'X-RapidAPI-Key': 'c672f60c79msh849b8d6caaac384p1fab90jsnfbf247a11c7f',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            },
            params: {
                part: 'snippet',
                maxResults: '100',
                videoId: videoId,
                
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; 
    }
});

const VideoCommentSlice = createSlice({
    name:'VideoComment',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
         builder.addCase(getVideoComments.fulfilled,(state,action)=>{
               
            state.videoComments=action.payload;

         });
    }
})

export default VideoCommentSlice.reducer;


