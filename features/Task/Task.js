// import React, {useState} from "react";
import Moment from 'moment';

import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCompletedTask , setIsChecked} from '../uncompletedTasks/uncompletedTasksSlice';
import { useDispatch } from 'react-redux';


const Task = ({ elem }) => {
	const navigation = useNavigation();
	const {isChecked, title, category, date, time, area } = elem;
	console.log(isChecked);
	const dispatch = useDispatch();

	const currentTime = Moment().format('h:mm a');


	const handleCheckBoxToggle = () => {
		dispatch(getCompletedTask({id: elem.id}));
		// dispatch(setIsChecked({isChecked: true, id: elem.id}));
	};

	return (
		<TouchableOpacity style={styles.task_container} onPress={
			() => navigation.navigate('Add_New_Task')
		}>
			<View style={styles.wrapper}>
				<View style={styles.icon_wrapper}>
					<Image source={
						category === "list" ? require('../../assets/list.png') :
						category === "calendar" ? require('../../assets/calendar.png') :
						require('../../assets/win.png')} />
				</View>
				<View style={styles.task_style}>
					<Text>{title}</Text>
					<Text>{time}</Text>
					<Text>{date}</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity onPress={
					handleCheckBoxToggle
				}>
					<Image style={styles.check_style} source={
						isChecked ? require('../../assets/Checked_True.png') :
							require('../../assets/Checked_False.png')} />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
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