import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	ScrollView
} from "react-native";

import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import DateInput from '../features/dateInput/DateInput';
import TimePickerInput from '../features/timeInput/TimePikerInput';
import TextAreaInput from '../features/textAreaInput/TextAreaInput';
import HeaderAddTask from '../components/HeaderAddTask';
import { useDispatch, useSelector } from 'react-redux';
import { NewTaskTitle } from '../features/newTaskTitle/NewTaskTitle';
import { Categories } from '../features/categories/Categories';
import { addNewTask, selectUncompletedTasks,selectIsEdit, changeEditValue,edit,selectId, selectTaskForEdit,resetTaskForEdit } from '../features/uncompletedTasks/uncompletedTasksSlice';

import { selectText } from '../features/newTaskTitle/newTaskTitleSlice';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectDate } from '../features/dateInput/dateInputSlice';
import { selectTime } from '../features/timeInput/timeInputSlicer';
import { selectTextArea } from '../features/textAreaInput/textAreaSlice';

export const AddNewTask = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const tasksArray = useSelector(selectUncompletedTasks);
	const taskId = useSelector(selectId);
	const title = useSelector(selectText);
	const category = useSelector(selectCategories);
	const date = useSelector(selectDate);
	const time = useSelector(selectTime);
	const area = useSelector(selectTextArea);
	const isEdit = useSelector(selectIsEdit);
	const taskForChange = useSelector(selectTaskForEdit);
 
	const moveActions = () => {
	navigation.navigate("My_Todo_List");
	dispatch(addNewTask({
		id: uuid.v4(),
		isChecked: false,
		title,
		category,
		date,
		time,
		area
	}));

	}
	
	const editTask = () => {
		navigation.navigate("My_Todo_List");
		dispatch(edit({
			id: taskId,
			isChecked: false,
			title,
			category,
			date,
			time,
			area
		}));
		dispatch(changeEditValue(false));
	}
	return (
		<SafeAreaView>
			<ScrollView>
			<HeaderAddTask />
			
				<View style={styles.container}>
					<NewTaskTitle changeTitle={taskForChange.title} />
					<Categories />

					<View style={styles.date_time}>
						<View style={styles.date}>
							<Text style={[styles.label_style, styles.margin_bottom_title]}>Date</Text>
							<DateInput changeData={taskForChange.date} />
						</View>

						<View style={styles.time}>
							<Text style={[styles.label_style, styles.margin_bottom_title]}>Time</Text>
							<TimePickerInput changeTime={taskForChange.time} />
						</View>
					</View>

					<View style={styles.text_area}>
						<Text style={[styles.label_style, styles.margin_bottom_title]}>Notes</Text>
						<TextAreaInput changeArea={taskForChange.area}/>
					</View>

				</View>
				<TouchableOpacity
					style={styles.to_add}
					onPress={isEdit ? editTask : moveActions}>
					<Text style={styles.to_add_text}>Save</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		marginTop:24,
	},
	margin_bottom_title: {
		marginBottom:8,
	},
	label_style: {
		color: "#1B1B1D",
		fontSize: 16,
		fontWeight: "bold",
	},
	input: {
		height: 55,
		width: 358,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
		borderColor:'#E0E0E0'
	},
	date_time: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:24,
	},
	text_area: {
		marginTop:24,
	},
	to_add: {
		marginTop: 35,
		marginHorizontal:16,
		flex:0,
		backgroundColor: '#4A3780',
		padding: 10,
		height: 56,
		borderRadius: 50,
		bottom: 24,
		width: '90%',
		justifyContent:'center',
	},
	to_add_text: {
		fontSize: 16,
		color: '#FFFFFF',
		fontWeight: 700,
		textAlign: 'center',
	}
});
