import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  type: "Both",
  page: 1,
  data: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setType: (state, action) => {
      state.type = action.payload.type;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    setData: (state, action) => {
      state.data = action.payload.data;
    }
  },
});

export const { setName, setType, setPage, setData } = searchSlice.actions;

export default searchSlice.reducer;
