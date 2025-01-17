import { createSlice } from "@reduxjs/toolkit";

export const HomeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  }
  ,

  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;

    },
    getGenres: (state, action) => {
      state.genres = action.payload;
      console.log("State.genres",state.genres);
    },
  },
});

export const { getApiConfiguration, getGenres } = HomeSlice.actions;
export default HomeSlice.reducer;
