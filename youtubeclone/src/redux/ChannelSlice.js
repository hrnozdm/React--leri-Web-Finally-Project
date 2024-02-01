import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState={
    channelData:[],
}



export const getChannelData=createAsyncThunk('getChannelData',async ()=>{
    try {
        const response=await axios.get('https://youtube-v31.p.rapidapi.com/channels',{
        params:{
            part: 'snippet,statistics',
            id: 'UCBVjMGOIkavEAhyqpxJ73Dw'
        },
        headers:{
            'X-RapidAPI-Key': 'c672f60c79msh849b8d6caaac384p1fab90jsnfbf247a11c7f',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    });

    return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const ChannelSlice=createSlice({
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getChannelData.fulfilled,(state,action)=>{
            state.channelData=action.payload;
        });
    }
});


export default ChannelSlice.reducer;







