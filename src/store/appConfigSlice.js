import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    searchData:null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:(state)=>{
      state.isMenuOpen = false
    },
    setSeachData: (state, action) => {
      state.searchData = action.payload
    }
  },
});

export const { toggleMenu, closeMenu, setSeachData } = appSlice.actions;
export default appSlice.reducer;
