import { configureStore } from "@reduxjs/toolkit";
import HomeVideosSlice from "./HomeVideosSlice";




export const store=configureStore({
    reducer:{
        homeVideos:HomeVideosSlice
    }
})