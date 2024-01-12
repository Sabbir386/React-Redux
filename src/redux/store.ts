import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feautures/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
