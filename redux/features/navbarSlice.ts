import { createSlice } from '@reduxjs/toolkit';

type NavbarState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
} as NavbarState;

export const navbar = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = true;
    },
    toggleClose: (state) => {
      state.isOpen = false;
    },
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen, toggleClose, toggle } = navbar.actions;
export default navbar.reducer;
