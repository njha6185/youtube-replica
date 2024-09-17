import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appConfigSlice";
const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
});

export default store;
