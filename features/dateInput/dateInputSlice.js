import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const dateInputSlice = createSlice({
  name: 'dateInput',
  initialState,
  reducers: {
		changeDate: (state, action) => {
			console.log(action.payload);
			return action.payload
		},
  },
});

export const { changeDate } = dateInputSlice.actions;
export const selectDate = (state) => state.dateInput;

export default dateInputSlice.reducer;