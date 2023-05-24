// import React, {useState} from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import Moment from 'moment';

const Task = () => {
	const currentTime = Moment().format('h:mm a');
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckBoxToggle = () => {
		setIsChecked(!isChecked);
	};

	return (
		<View style={styles.task_container}>
			<View style={styles.wrapper}>
				<View style={styles.icon_wrapper}>
					<Image source={require('../assets/vector.png')} />
				</View>
				<View style={styles.task_style}>
					<Text>Main</Text>
					<Text>{currentTime}</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity onPress={handleCheckBoxToggle}>
					<Image style={styles.check_style} source={isChecked ? require('../assets/Checked_True.png') : require('../assets/Checked_False.png')} />
				</TouchableOpacity>
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
	wrapper: {
		flexDirection:'row',
	},
	task_container: {
		width: '100%',
		height: 80,
		backgroundColor: '#FFFFFF',

		flexDirection: 'row',
		justifyContent: "space-between",
		alignItems: "center",
	},
	task_style: {
		marginLeft: 12,
	},
	check_style: {
		marginHorizontal:16,
	},
});

export default Task;