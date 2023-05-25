
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePickerInput from '../components/DataPikerInput';
import TimePickerInput from '../components/TimePikerInput';
import TextAreaInput from '../components/TextAreaInput';
import HeaderAddTask from '../components/HeaderAddTask';

import { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";


export const AddNewTask = ({ navigation }) => {

	return (
		<>
		<HeaderAddTask/>
		<View style={styles.container}>
			<View style={styles.task_title}>
				<Text style={[styles.label_style, styles.margin_bottom_title]}>Task Title</Text>
				<TextInput style={styles.input} />
			</View>

			<View style={styles.category_container}>
				<View style={styles.category_wrapper}>
					<Text style={[styles.label_style, styles.category_title]}>Category</Text>
					
					<TouchableOpacity style={styles.category}>
						<Image source={require('../assets/list.png')} />
					</TouchableOpacity>

					<TouchableOpacity style={styles.category}>
						<Image source={require('../assets/calendar.png')} />
					</TouchableOpacity>

					<TouchableOpacity style={styles.category}>
						<Image source={require('../assets/win.png')} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.date_time}>
				<View style={styles.date}>
					<Text style={[styles.label_style, styles.margin_bottom_title]}>Date</Text>
					<DatePickerInput/>
				</View>
				<View style={styles.time}>
					<Text style={[styles.label_style,styles.margin_bottom_title]}>Time</Text>
					<TimePickerInput/>
				</View>
			</View>

			<View style={styles.text_area}>
				<Text style={[styles.label_style,styles.margin_bottom_title]}>Notes</Text>
				<TextAreaInput/>
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
	category_container: {
		marginTop: 24,
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
	category_wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	category: {
		margin: 16,
	},
	category_title: {
		marginRight: 8
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
