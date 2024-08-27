import { createSlice } from "@reduxjs/toolkit";
import { IWeather } from "../interfaces/interfaces";

const weatherSlice = createSlice({
  name: "weatherInfo",
  initialState: {
    weather: [],
    forecast: [] as IWeather[],
  },
  reducers: {
    getWeather(state, action) {
      state.weather = action.payload
    },
    getForecast(state, action) {
      state.forecast = action.payload
    }
  }
})


export const { getWeather, getForecast } = weatherSlice.actions;
export default weatherSlice.reducer;
