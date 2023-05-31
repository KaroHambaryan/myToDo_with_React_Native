import { combineReducers } from "redux";
import newTaskTitleSlice from "../features/newTaskTitle/newTaskTitleSlice";
import categoriesSlice from "../features/categories/categoriesSlice";
import dateInputSlice from "../features/dateInput/dateInputSlice";
import timeInputSlicer from "../features/timeInput/timeInputSlicer";
import textAreaSlice from "../features/textAreaInput/textAreaSlice";
import taskSlice from "../features/Task/taskSlice";
import uncompletedTasksSlice from "../features/uncompletedTasks/uncompletedTasksSlice";

const rootReducer = combineReducers({
	newTaskTitle: newTaskTitleSlice,
	category: categoriesSlice,
	dateInput: dateInputSlice,
	timeInput: timeInputSlicer,
	textArea: textAreaSlice,
	task: taskSlice,
	uncompletedTasks: uncompletedTasksSlice,
});

export default rootReducer;