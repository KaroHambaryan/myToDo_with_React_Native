import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const timeInputSlice = createSlice({
  name: 'timeInput',
  initialState,
  reducers: {
		changeTime: (state, action) => {
			state = action.payload;
			return state;
		},
  },
});

export const { changeTime } = timeInputSlice.actions;
export const selectTime = (state) => state.timeInput;

export default timeInputSlice.reducer;