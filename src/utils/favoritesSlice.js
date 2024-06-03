import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: () => {},
    removeFavorite: () => {},
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
