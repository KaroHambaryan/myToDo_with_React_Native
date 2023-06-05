// import React, {useState} from "react";
import Moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCompletedTask, setIsChecked, changeEditValue, selectTaskForEdit,deleteTask } from '../uncompletedTasks/uncompletedTasksSlice';
import { readText } from '../newTaskTitle/newTaskTitleSlice';
import { useDispatch, useSelector } from 'react-redux';


const Task = ({ elem }) => {
	const navigation = useNavigation();
	const {id ,isChecked, title, category, date, time, area } = elem;

	const dispatch = useDispatch();
	const taskObject = useSelector(selectTaskForEdit)

	const currentTime = Moment().format('h:mm a');
	const changePleaseCompleted = () => {
		dispatch(setIsChecked(id))
		console.log(id,"task");
	}

	const handleCheckBoxToggle = () => {
		dispatch(getCompletedTask(id));
	};

	const changeEditStatus = (task) => {
		navigation.navigate('Add_New_Task');
		dispatch(changeEditValue({ id, status: true }));
		console.log(taskObject.title);
		// dispatch(readText(taskObject.title));
	}

	const removeTask = () => {
		dispatch(deleteTask(id))
	}

	return (
		<View style={styles.task_container} >
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
			<TouchableOpacity onPress={removeTask}>
					<Icon name="delete" size={30} color="black" />
			</TouchableOpacity>
			
			<TouchableOpacity onPress={changeEditStatus}>
					<Icon name="edit" size={30} color="black" />
				</TouchableOpacity>
			<View>

				<View>
					<TouchableOpacity onPress={!isChecked ? handleCheckBoxToggle : changePleaseCompleted}>
						<Image style={styles.check_style} source={
							isChecked ? require('../../assets/Checked_True.png') :
								require('../../assets/Checked_False.png')} />
					</TouchableOpacity>
				</View>
				
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