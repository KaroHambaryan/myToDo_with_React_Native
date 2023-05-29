import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const newTaskTitleSlice = createSlice({
  name: 'newTaskTitle',
  initialState,
  reducers: {
		readText: (state, action) => {
			console.log(action.payload);
			return action.payload
		},
  },
});

export const { readText } = newTaskTitleSlice.actions;
export const selectText = (state) => state.newTaskTitle;

export default newTaskTitleSlice.reducer;
