import { configureStore } from "@reduxjs/toolkit";
import weatherInfo from "./weather";

const Store = configureStore({
  reducer: weatherInfo,
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AiIdDispatch = typeof Store.dispatch;
