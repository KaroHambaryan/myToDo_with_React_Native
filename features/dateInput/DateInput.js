import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from './dateInputSlice';
import { changeDate } from './dateInputSlice';

const DateInput = () => {
	const dispatch = useDispatch();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

	const showDatePicker = () => {
		setDatePickerVisibility(true);
		
  };

	const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

	const handleConfirm = (date) => {
		const selectedDate = new Date(date);
		const formattedDate = selectedDate.toLocaleDateString();
		dispatch(changeDate(formattedDate));
		setSelectedDate(formattedDate);
		hideDatePicker();
	};

	return (
		<>
			<TouchableOpacity style={styles.size} onPress={showDatePicker}>
				<TextInput
					value={selectedDate}
					placeholder="Select Date"
					editable={false}
					style={{ color: 'black' }}
				/>
				<Image source={require('../../assets/icon_calendar.png')} style={styles.icon} />
			</TouchableOpacity>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				display='spinner'
			/>
		</>
	);
};

const styles = StyleSheet.create({
	size: {
		flexDirection: 'row',
		justifyContent:'space-between',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderColor: '#E0E0E0',
		borderWidth: 1,
		borderRadius:6,
    width: 175,
    height: 55,
    padding: 10,
	},
	icon:{
			width: 20,
			height: 20,
			marginRight: 10
		},
})

export default DateInput;
