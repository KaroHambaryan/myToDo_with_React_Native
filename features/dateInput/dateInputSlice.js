import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const dateInputSlice = createSlice({
  name: 'dateInput',
  initialState,
  reducers: {
		changeDate: (state, action) => {
			state = action.payload;
			return state;
		},
  },
});

export const { changeDate } = dateInputSlice.actions;
export const selectDate = (state) => state.dateInput;

export default dateInputSlice.reducer;