import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
