import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import { changeTime } from './timeInputSlicer';

const TimePickerInput = () => {
	const dispatch = useDispatch();

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    const selectedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		dispatch(changeTime(selectedTime));
    setSelectedTime(selectedTime);
    hideTimePicker();
  };

  return (
    <>
      <TouchableOpacity style={styles.size} onPress={showTimePicker}>
        <TextInput
          value={selectedTime}
          placeholder="Select Time"
					editable={false}
					style={{color: 'black'}}
        />
        <Image
          source={require('../../assets/icon_clock.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
				onCancel={hideTimePicker}
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

export default TimePickerInput;
