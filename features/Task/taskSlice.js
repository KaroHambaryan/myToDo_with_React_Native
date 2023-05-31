import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isChecked: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
	reducers: {
		chooseTask: (state, action) => {
			state.isChecked = !state.isChecked;
			return state;
		},
	},
});

export const { chooseTask } = taskSlice.actions;
export const selectChecked = (state) => state.task.isChecked;

export default taskSlice.reducer;