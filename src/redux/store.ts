import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feautures/counterSlice";
import Logger from "./middleWare/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(Logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
