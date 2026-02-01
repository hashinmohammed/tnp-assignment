import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideMenuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    setSideMenuOpen: (state, action) => {
      state.isSideMenuOpen = action.payload;
    },
  },
});

export const { toggleSideMenu, setSideMenuOpen } = uiSlice.actions;

export default uiSlice.reducer;
