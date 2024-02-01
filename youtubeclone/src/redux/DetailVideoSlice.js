import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videoDetail: [],
};



export const getVideoDetails = createAsyncThunk('getVideoDetails', async (videoId) => {
  try {
    const response = await axios.get('https://youtube-v31.p.rapidapi.com/videos', {
      params: {
        part: 'contentDetails,snippet,statistics',
        id: videoId,
      },
      headers: {
        'X-RapidAPI-Key': 'c672f60c79msh849b8d6caaac384p1fab90jsnfbf247a11c7f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const videoDetailSlice = createSlice({
  name: 'videoDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.videoDetails = action.payload;
    });
  },
});

export default videoDetailSlice.reducer;
