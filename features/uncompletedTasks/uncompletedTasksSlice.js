import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	uncompleted: [],
	completed:[],
};

const uncompletedTasksSlice = createSlice({
	name: 'uncompletedTasks',
	initialState,
	reducers: {
		addNewTask: (state, action) => {
			state.uncompleted.push(action.payload);
			for (let i = 0; i < state.uncompleted.length; i++) {
				state.uncompleted[i].isChecked = false;
				state.uncompleted[i].id = i;
			}
			return state;
		},
		getCompletedTask: (state, action) => {
			let id = action.payload.id;
			state.completed.push(...state.uncompleted.splice(id, 1));
			for (let i = 0; i < state.completed.length; i++) {
				state.completed[i].isChecked = true;
				state.completed[i].id = i;
			}
			for (let i = 0; i < state.uncompleted.length; i++) {
				state.uncompleted[i].isChecked = false;
				state.uncompleted[i].id = i;
			}
			console.log(state.completed);
		},
		setIsChecked: (state, action) => {
			console.log(action.payload);
			if (action.payload.isChecked) {
				let id = action.payload.id;
				state.uncompleted.push(...state.completed.splice(id, 1));
				for (let i = 0; i < state.uncompleted.length; i++) {
					state.uncompleted[i].isChecked = false;
					state.uncompleted[i].id = i;
				}
				for (let i = 0; i < state.completed.length; i++) {
					state.completed[i].id = i;
					state.completed = true;
				}
			};
		}
	},
});

export const { addNewTask, getCompletedTask, setIsChecked } = uncompletedTasksSlice.actions;
export const selectUncompletedTasks = (state) => state.uncompletedTasks.uncompleted;
export const selectCompletedTasks = (state) => state.uncompletedTasks.completed;

export default uncompletedTasksSlice.reducer;