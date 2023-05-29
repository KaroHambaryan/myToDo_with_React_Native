import DateInput from '../features/dateInput/DateInput';
import TimePickerInput from '../components/TimePikerInput';
import TextAreaInput from '../components/TextAreaInput';
import HeaderAddTask from '../components/HeaderAddTask';
import { NewTaskTitle } from '../features/newTaskTitle/NewTaskTitle';
import { Categories } from '../features/categories/Categories';

import {
	Text,
	View,
	StyleSheet,
} from "react-native";


export const AddNewTask = ({ navigation }) => {
	return (
		<>
			<HeaderAddTask />
			<View style={styles.container}>
				<NewTaskTitle />
				<Categories />
				<View style={styles.date_time}>
					<View style={styles.date}>
						<Text style={[styles.label_style, styles.margin_bottom_title]}>Date</Text>
						<DateInput />
					</View>
					<View style={styles.time}>
						<Text style={[styles.label_style, styles.margin_bottom_title]}>Time</Text>
						<TimePickerInput />
					</View>
				</View>

				<View style={styles.text_area}>
					<Text style={[styles.label_style, styles.margin_bottom_title]}>Notes</Text>
					<TextAreaInput />
				</View>
			</View>
		</>
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
});
