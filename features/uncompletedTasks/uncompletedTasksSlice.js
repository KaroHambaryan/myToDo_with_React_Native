import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	uncompleted: [],
	completed: [],
	countTasks: 0,
	isEdit: false,
	id: null,
	taskForEdit: '',
};

const uncompletedTasksSlice = createSlice({
	name: 'uncompletedTasks',
	initialState,
	reducers: {
		addNewTask: (state, action) => {
			state.uncompleted.push(action.payload);
			
			return state;
		},

		getCompletedTask: (state, action) => {
			let id = action.payload;
			for (let i = 0; i < state.uncompleted.length; i++){
				let conditions = state.uncompleted[i].id === id;
				if (conditions) {
					state.uncompleted[i].isChecked = true;
					state.completed.push(...state.uncompleted.splice(i,1))
				}
			}

			return state;
		},
		setIsChecked: (state, action) => {
			let id = action.payload;
			for (let i = 0; i < state.completed.length; i++){
				let conditions = state.completed[i].id === id;
				if (conditions) {
					state.completed[i].isChecked = false;
					state.uncompleted.push(...state.completed.splice(i, 1));
				}
			}
			return state;
		},
		changeEditValue: (state, action) => {
			state.isEdit = action.payload.status;
			state.id = action.payload.id;
			return state;
		},
		edit: (state, action) => { 
			for (let i = 0; i < state.uncompleted.length; i++) {
				const isFind = state.uncompleted[i].id === action.payload.id;
				if (isFind) {
					state.uncompleted.splice(i, 1, action.payload)
					state.taskForEdit = state.uncompleted[i];
				}
			}

			for (let i = 0; i < state.completed.length; i++) {
				const isFind = state.completed[i].id === action.payload.id;
				if (isFind) {
					state.completed.splice(i, 1, action.payload);
					state.taskForEdit = state.completed[i];
					state.uncompleted.push(...state.completed.splice(i, 1));
				}
			}
			return state;
		},
		resetTaskForEdit: (state, action) => {
			state.taskForEdit = action;;
			return state;
		},
		deleteTask: (state, action) => { 

			for (let i = 0; i < state.uncompleted.length; i++) {
				const isFind = state.uncompleted[i].id === action.payload;
				if (isFind) {
					state.uncompleted.splice(i, 1)
				}
			}

			for (let i = 0; i < state.completed.length; i++) {
				const isFind = state.completed[i].id === action.payload;
				if (isFind) {
					state.completed.splice(i, 1);
				}
			}
			return state;

		}
	},
});

export const { addNewTask, getCompletedTask, setIsChecked, changeEditValue,edit, resetTaskForEdit, deleteTask } = uncompletedTasksSlice.actions;
export const selectUncompletedTasks = (state) => state.uncompletedTasks.uncompleted;
export const selectCompletedTasks = (state) => state.uncompletedTasks.completed;
export const selectIsEdit = (state) => state.uncompletedTasks.isEdit;
export const selectId = (state) => state.uncompletedTasks.id;
export const selectTaskForEdit = (state) => state.uncompletedTasks.taskForEdit;

export default uncompletedTasksSlice.reducer;