
import DatePicker from "react-native-datepicker";
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { useState } from 'react';



export const AddNewTask = ({ navigation }) => {
	const [date, setDate] = useState('');

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };
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
					<DatePicker
						style={{ width: 200 }}
						date={date}
						mode="date"
						placeholder="Выберите дату"
						format="DD.MM.YYYY"
						minDate="01.01.2000"
						maxDate="31.12.2023"
						confirmBtnText="Подтвердить"
						cancelBtnText="Отмена"
						onDateChange={handleDateChange}
					/>
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
