import { combineReducers } from "redux";
import newTaskTitleSlice from "../features/newTaskTitle/newTaskTitleSlice";
import categoriesSlice from "../features/categories/categoriesSlice";
import dateInputSlice from "../features/dateInput/dateInputSlice";

const rootReducer = combineReducers({
	newTaskTitle: newTaskTitleSlice,
	category: categoriesSlice,
	dateInput: dateInputSlice,
});

export default rootReducer;