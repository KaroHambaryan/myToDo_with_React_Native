import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const newTaskTitleSlice = createSlice({
  name: 'newTaskTitle',
  initialState,
  reducers: {
		readText: (state, action) => {
			state = action.payload;
			return state;
		},
  },
});

export const { readText } = newTaskTitleSlice.actions;
export const selectText = (state) => state.newTaskTitle;

export default newTaskTitleSlice.reducer;
