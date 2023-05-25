
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	TextInput,
	Button,
} from "react-native";
import DatePickerInput from '../components/DataPikerInput';

export const AddNewTask = ({ navigation }) => {

	return (
		<View >
			<View style={styles.task_title}>
				<Text style={[styles.label_style, styles.task_title]}>Task Title</Text>
				<TextInput style={styles.input} />
			</View>

			<View>
				<View style={styles.category_wrapper}>
					<Text style={[styles.label_style, styles.category_title]}>Category</Text>
					
					<TouchableOpacity style={styles.category}>
						<Image source={require('../assets/category_list.png')} />
					</TouchableOpacity>

					<TouchableOpacity style={styles.category}>
						<Image source={require('../assets/category.png')} />
					</TouchableOpacity>

					<TouchableOpacity style={styles.category}>
						<Image source={require('../assets/category_win.png')} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.date_time}>
				<View style={styles.date}>
					<Text style={styles.label_style}>Date</Text>
					<DatePickerInput/>
				</View>
				<View style={styles.time}>
					<Text style={styles.label_style}>Time</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	label_style: {
		color: "#1B1B1D",
		fontSize: 16,
		fontWeight: "bold",
	},
	input: {
		height: 40,
		width: 300,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
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
});
