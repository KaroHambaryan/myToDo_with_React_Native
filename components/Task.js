// import React, {useState} from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Moment from 'moment';

const Task = () => {
	const currentTime = Moment().format('h:mm a');
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckBoxToggle = () => {
		setIsChecked(!isChecked);
	};
	return (
		<View style={styles.task_container}>
			<View style={styles.icon_wrapper}>
				<Image source={require('../assets/Vector.png')}></Image>
			</View>
			<View style={styles.task_style}>
				<Text>Main</Text>
				<Text>{currentTime}</Text>
			</View>
			<View>
				<CheckBox
					checked={isChecked}
					onPress={() => setIsChecked(!isChecked)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	icon_wrapper: {
		width: 48,
		height: 48,
		borderRadius: 24,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FEF5D3',
		marginLeft: 16,
	},
	task_container: {
		width: '100%',
		height: 80,
		backgroundColor: '#FFFFFF',

		flexDirection: 'row',
		justifyContent: "flex-start",
		alignItems: "center",
	},
	task_style: {
		marginLeft: 12,
	},
});

export default Task;