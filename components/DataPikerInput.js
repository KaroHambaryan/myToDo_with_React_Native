import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerInput = () => {
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
		setSelectedDate(formattedDate);
		hideDatePicker();
	};

  return (
    <View>
      <TouchableOpacity style={styles.size} onPress={showDatePicker}>
				<TextInput
          value={selectedDate}
          placeholder="Select Date"
					editable={false}
					style={{color: 'black'}}
				/>
				<Image source={require('../assets/icon_calendar.png')} style={styles.icon} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
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
    margin: 10,
	},
	icon:{
			width: 20,
			height: 20,
			marginRight: 10
		},
})

export default DatePickerInput;
