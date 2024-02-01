import { configureStore } from "@reduxjs/toolkit";
import HomeVideosSlice from "./HomeVideosSlice";
import videoDetailSlice from "./DetailVideoSlice";
import SearchSlice from "./SearchSlice";
import VideoCommentSlice from "./CommentSlice";


export const store = configureStore({
  reducer: {
    homeVideos: HomeVideosSlice,
    videoDetail: videoDetailSlice,
    searchVideos:SearchSlice,
    videoComment:VideoCommentSlice,
   
  },
});
