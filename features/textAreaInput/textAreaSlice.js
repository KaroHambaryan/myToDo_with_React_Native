import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const textAreaSlice = createSlice({
  name: 'textArea',
  initialState,
  reducers: {
		changeTextArea: (state, action) => {
			state = action.payload;
			return state;
		},
  },
});

export const { changeTextArea } = textAreaSlice.actions;
export const selectTextArea = (state) => state.textArea;

export default textAreaSlice.reducer;